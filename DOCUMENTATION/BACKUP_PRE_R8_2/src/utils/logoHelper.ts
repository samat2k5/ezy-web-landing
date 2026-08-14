/**
 * Logo Asset Path Helper for ezyHR Landing Page
 * Ensures 100% resilient logo rendering across Localhost, GitHub Pages, Vercel, Netlify, Railway, and Custom Domains.
 */

export const LOGO_ASSETS = {
  fullLight: 'Logos/ezyhr-full-logo.png',
  fullDark: 'Logos/ezyhr-full-logo-dark.png',
  icon: 'Logos/logo-icon.png',
  logo: 'Logos/logo.png',
  favicon: 'Logos/favicon.png',
  faviconIco: 'Logos/favicon.ico'
};

export const getLogoPath = (assetKey: keyof typeof LOGO_ASSETS | string): string => {
  const filename = LOGO_ASSETS[assetKey as keyof typeof LOGO_ASSETS] || assetKey;
  
  // Clean leading slash
  const cleanPath = filename.startsWith('/') ? filename.substring(1) : filename;
  
  // Use Vite BASE_URL or relative fallback safely
  const metaEnv = (import.meta as unknown as { env?: { BASE_URL?: string } }).env;
  const baseUrl = metaEnv?.BASE_URL || './';
  const prefix = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  
  return `${prefix}${cleanPath}`;
};

export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackFilename: string) => {
  const target = e.currentTarget;
  // If absolute path failed, try relative path or alternative folder
  if (!target.dataset.triedFallback) {
    target.dataset.triedFallback = 'true';
    target.src = `./${fallbackFilename}`;
  }
};
