import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PAGE_META, DEFAULT_META } from '../lib/pageMeta';
import { normalizeCanonical } from '../lib/routes';

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
  document.querySelectorAll('script[data-meta-manager]').forEach(s => s.remove());
  if (!schemas?.length) return;
  schemas.forEach(schema => {
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.setAttribute('data-meta-manager', 'true');
    const data = schema['@context'] ? schema : { '@context': 'https://schema.org', ...schema };
    s.textContent = JSON.stringify(data, null, 0);
    document.head.appendChild(s);
  });
}

// article:* Open Graph tags (and the author meta) for blog posts. Cleared on
// every route change so they never leak onto non-article pages.
function injectArticleMeta(article) {
  document.querySelectorAll('meta[data-meta-article]').forEach(m => m.remove());
  if (!article) return;
  const add = (attr, key, content) => {
    if (!content) return;
    const m = document.createElement('meta');
    m.setAttribute(attr, key);
    m.setAttribute('content', content);
    m.setAttribute('data-meta-article', 'true');
    document.head.appendChild(m);
  };
  add('property', 'article:published_time', article.publishedTime);
  add('property', 'article:modified_time',  article.modifiedTime);
  add('property', 'article:author',         article.author);
  add('property', 'article:section',        article.section);
  (article.tags || []).forEach(t => add('property', 'article:tag', t));
  add('name', 'author', article.author);
}

export default function MetaManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = PAGE_META[pathname] || DEFAULT_META;

    document.title = meta.title;

    setMeta('description', meta.description);
    setMeta('keywords', meta.keywords || '');
    setMeta('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // nginx serves the trailing-slash form and redirects the bare path to it,
    // so the canonical has to match or it points at a 301.
    const canonical = normalizeCanonical(meta.canonical || pathname);
    setLink('canonical', canonical);

    // Optional per-page social overrides; fall back to the SEO title/description.
    const ogTitle = meta.ogTitle || meta.title;
    const ogDescription = meta.ogDescription || meta.description;
    const ogImageAlt = meta.ogImageAlt || ogTitle;

    setMeta('og:url',         canonical, 'property');
    setMeta('og:title',       ogTitle,       'property');
    setMeta('og:description', ogDescription, 'property');
    setMeta('og:image',       meta.ogImage || OG_IMG, 'property');
    setMeta('og:image:alt',   ogImageAlt,    'property');
    setMeta('og:type',        meta.ogType || 'website', 'property');
    setMeta('og:site_name',   'XamOps',         'property');
    setMeta('og:locale',      'en_US',          'property');

    setMeta('twitter:title',       ogTitle,               'name');
    setMeta('twitter:description', ogDescription,         'name');
    setMeta('twitter:image',       meta.ogImage || OG_IMG, 'name');
    setMeta('twitter:image:alt',   ogImageAlt,            'name');
    setMeta('twitter:card',        'summary_large_image', 'name');

    injectArticleMeta(meta.article);
    injectSchemas(meta.schemas);
  }, [pathname]);

  return null;
}
