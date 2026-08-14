import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
}

export const useSEO = ({ title, description, canonicalPath }: SEOProps) => {
  useEffect(() => {
    // 1. Update Title
    const fullTitle = `${title} | ezyHR Singapore`;
    document.title = fullTitle;

    // 2. Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }

    // 3. Update Canonical Link
    if (canonicalPath) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      const canonicalUrl = `https://ezy.sg${canonicalPath}`;
      
      if (canonicalLink) {
        canonicalLink.setAttribute('href', canonicalUrl);
      } else {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        canonicalLink.setAttribute('href', canonicalUrl);
        document.head.appendChild(canonicalLink);
      }
    }
    
    // We don't restore old SEO on unmount to prevent flickering during fast client-side navigation.
    // The next route will just overwrite it.
  }, [title, description, canonicalPath]);
};
