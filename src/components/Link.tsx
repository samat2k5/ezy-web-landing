import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const Link: React.FC<LinkProps> = ({ href, children, onClick, ...props }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If it's a modifier key click, or not an internal link, let the browser handle it
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }
    
    // Only intercept internal links that don't have target="_blank"
    if (href.startsWith('/') && props.target !== '_blank') {
      e.preventDefault();
      
      // Call custom onClick if provided
      if (onClick) {
        onClick(e);
      }
      
      // Update history and dispatch a custom popstate event so App.tsx re-renders
      window.history.pushState({}, '', href);
      const navEvent = new PopStateEvent('popstate');
      window.dispatchEvent(navEvent);
      window.scrollTo(0, 0);
    }
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};
