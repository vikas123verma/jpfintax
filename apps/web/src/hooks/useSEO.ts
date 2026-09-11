import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
}

export function useSEO({ title, description }: SEOProps): void {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title.includes('JP FIN TAX') ? title : `${title} | JP FIN TAX SERVICES LLP`;

    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);
    }

    window.scrollTo({ top: 0, behavior: 'instant' });

    return () => {
      document.title = previousTitle;
    };
  }, [title, description]);
}
