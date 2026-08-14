export const trackEvent = (eventName: string, props?: Record<string, string>) => {
  if (typeof window !== 'undefined' && (window as any).plausible) {
    (window as any).plausible(eventName, { props });
  }
};
