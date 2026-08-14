import { useEffect, useRef } from 'react';

/**
 * Custom React hook for WCAG 2.1 AA compliant modal dialog focus management.
 * - Stores previous active element on modal open and restores focus on close.
 * - Focuses first interactive element inside modal on open.
 * - Traps TAB / SHIFT+TAB focus cycling inside the modal container.
 * - Listens for ESC key to close modal.
 */
export function useModalFocusTrap(
  isOpen: boolean,
  containerRef: React.RefObject<HTMLElement>,
  onClose?: () => void
) {
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    // Store active element prior to opening modal
    previousFocusRef.current = document.activeElement as HTMLElement;

    const container = containerRef.current;
    if (container) {
      // Focus first interactive control in modal
      const focusable = container.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length > 0) {
        focusable[0].focus();
      } else {
        container.focus();
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onCloseRef.current) {
        e.preventDefault();
        onCloseRef.current();
        return;
      }

      if (e.key === 'Tab' && containerRef.current) {
        const focusable = containerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      // Restore focus to original trigger element on unmount / close
      if (previousFocusRef.current && typeof previousFocusRef.current.focus === 'function') {
        previousFocusRef.current.focus();
      }
    };
  }, [isOpen, containerRef]);
}
