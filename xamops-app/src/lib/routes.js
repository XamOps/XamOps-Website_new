// ─────────────────────────────────────────────────────────────────────────────
// Canonical list of public URLs.
//
// Consumed by scripts/prerender.mjs and scripts/gen-sitemap.mjs so the build,
// the sitemap and the capability catalogue can't drift apart. Platform group
// routes are derived from the catalogue, not typed out again.
//
// priority / changefreq are sitemap hints only.
// ─────────────────────────────────────────────────────────────────────────────
import { GROUPS } from './platform.js';

export const SITE = 'https://xamops.com';

/**
 * Absolute canonical URL for a path.
 *
 * The prerenderer writes dist/<route>/index.html, so nginx serves the
 * trailing-slash form and 301s the bare path to it. Canonicals, og:url and
 * the sitemap therefore all have to carry the trailing slash, otherwise every
 * one of them points at a redirect.
 */
export const canonicalUrl = (input) => {
  // Accept a bare path or an already-absolute URL, drop any query/hash.
  let path = String(input).replace(SITE, '').split(/[?#]/)[0];
  if (!path.startsWith('/')) path = `/${path}`;
  if (!path.endsWith('/')) path = `${path}/`;
  return SITE + path;
};

/** Alias: normalises a path or absolute URL onto the URL nginx actually serves. */
export const normalizeCanonical = canonicalUrl;

const CORE = [
  ['/',          1.0, 'weekly'],
  ['/platform',  0.9, 'weekly'],
  ['/pricing',   0.8, 'monthly'],
  ['/demo',      0.7, 'monthly'],
  ['/contact',   0.6, 'monthly'],
  ['/about',     0.6, 'monthly'],
  ['/customers', 0.6, 'monthly'],
  ['/security',  0.6, 'monthly'],
  ['/blog',      0.8, 'weekly'],
];

// Capability groups: /platform/<slug>
const GROUP_ROUTES = GROUPS.map((g) => [`/platform/${g.slug}`, 0.8, 'monthly']);

// Long-standing deep-dive pages for individual capabilities
const FEATURE_ROUTES = [
  '/platform/spot-automation',
  '/platform/disk-rightsizing',
  '/platform/dbops',
  '/platform/secops',
  '/platform/cost-analytics',
  '/platform/sre',
].map((p) => [p, 0.8, 'monthly']);

const SOLUTION_ROUTES = [
  '/solutions/devops',
  '/solutions/finops',
  '/solutions/sre',
].map((p) => [p, 0.7, 'monthly']);

const BLOG_ROUTES = [
  '/blog/aws-cost-spike-investigation',
  '/blog/ec2-spot-instances-production',
  '/blog/disk-rightsizing-ebs',
  '/blog/what-is-xamops',
  '/blog/cloud-security-automation',
  '/blog/finops-practices-multi-cloud',
  '/blog/cloud-cost-optimization-strategies',
  '/blog/devops-automation-platform-vs-traditional-it-operations',
  '/blog/sre-automation-platform-noida',
].map((p) => [p, 0.6, 'monthly']);

export const ROUTE_META = [
  ...CORE,
  ...GROUP_ROUTES,
  ...FEATURE_ROUTES,
  ...SOLUTION_ROUTES,
  ...BLOG_ROUTES,
].map(([path, priority, changefreq]) => ({ path, priority, changefreq }));

export const ROUTES = ROUTE_META.map((r) => r.path);
