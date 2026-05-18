import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PAGE_META, DEFAULT_META } from '../lib/pageMeta';

const BASE = 'https://xamops.com';
const OG_IMG = `${BASE}/og-image.jpg`;

function setMeta(name, content, attr = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function injectSchemas(schemas) {
  // Remove previous dynamic schemas
  document.querySelectorAll('script[data-meta-manager]').forEach(s => s.remove());

  if (!schemas?.length) return;

  schemas.forEach(schema => {
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.setAttribute('data-meta-manager', 'true');
    // Wrap in @context if not already present
    const data = schema['@context'] ? schema : { '@context': 'https://schema.org', ...schema };
    s.textContent = JSON.stringify(data, null, 0);
    document.head.appendChild(s);
  });
}

export default function MetaManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = PAGE_META[pathname] || DEFAULT_META;

    // Title
    document.title = meta.title;

    // Standard meta
    setMeta('description', meta.description);
    setMeta('keywords', meta.keywords || '');
    setMeta('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // Canonical
    setLink('canonical', meta.canonical || `${BASE}${pathname}`);

    // Open Graph
    setMeta('og:url',         meta.canonical || `${BASE}${pathname}`, 'property');
    setMeta('og:title',       meta.title,       'property');
    setMeta('og:description', meta.description, 'property');
    setMeta('og:image',       meta.ogImage || OG_IMG, 'property');
    setMeta('og:type',        'website',        'property');
    setMeta('og:site_name',   'Xamops',         'property');
    setMeta('og:locale',      'en_US',          'property');

    // Twitter
    setMeta('twitter:title',       meta.title,       'name');
    setMeta('twitter:description', meta.description, 'name');
    setMeta('twitter:image',       meta.ogImage || OG_IMG, 'name');
    setMeta('twitter:card',        'summary_large_image', 'name');

    // JSON-LD schemas
    injectSchemas(meta.schemas);
  }, [pathname]);

  return null;
}
