import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://rveyehospital.com';
const DEFAULT_IMAGE = `${BASE_URL}/rv-logo-banner.jpg`;
const SITE_NAME = 'RV Superspeciality Eye Care';

/**
 * Professional Zero-Dependency SEO Component for React SPA
 * Dynamically updates document.title, canonical link, meta descriptions,
 * Open Graph, Twitter Cards, and Schema.org JSON-LD structured data.
 */
export default function SEO({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  schema = null,
  type = 'website'
}) {
  const location = useLocation();
  const currentPath = path || location.pathname;
  const canonicalUrl = `${BASE_URL}${currentPath === '/' ? '' : currentPath}`;
  
  // Format title to include brand name consistently
  const pageTitle = title.includes(SITE_NAME) 
    ? title 
    : `${title} | ${SITE_NAME}`;

  useEffect(() => {
    // 1. Update document title
    document.title = pageTitle;

    // Helper to create or update meta tags
    const setMetaTag = (attribute, key, value) => {
      let element = document.querySelector(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };

    // 2. Set primary meta description
    if (description) {
      setMetaTag('name', 'description', description);
    }

    // 3. Set Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 4. Set Open Graph Metadata
    setMetaTag('property', 'og:site_name', SITE_NAME);
    setMetaTag('property', 'og:title', pageTitle);
    if (description) setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:image', image.startsWith('http') ? image : `${BASE_URL}${image}`);
    setMetaTag('property', 'og:locale', 'en_IN');

    // 5. Set Twitter Card Metadata
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', pageTitle);
    if (description) setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', image.startsWith('http') ? image : `${BASE_URL}${image}`);

    // 6. Set Page-Specific JSON-LD Schema
    const existingSchemaScript = document.getElementById('page-jsonld-schema');
    if (existingSchemaScript) {
      existingSchemaScript.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'page-jsonld-schema';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      const pageSchema = document.getElementById('page-jsonld-schema');
      if (pageSchema) {
        pageSchema.remove();
      }
    };
  }, [pageTitle, description, canonicalUrl, image, type, schema]);

  return null;
}

