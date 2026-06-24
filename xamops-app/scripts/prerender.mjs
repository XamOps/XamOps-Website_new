/**
 * Post-build pre-rendering script.
 * Visits each route with a headless browser and saves the fully-rendered HTML
 * to dist/<route>/index.html so Googlebot gets real content on first fetch.
 *
 * Usage: node scripts/prerender.mjs
 * (called automatically via "build:ssg": "vite build && node scripts/prerender.mjs")
 */

import { chromium } from 'playwright';
import { preview } from 'vite';
import { writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');
const PORT = 4174; // avoid colliding with default 4173 if preview is already running

const ROUTES = [
  '/',
  '/platform',
  '/platform/spot-automation',
  '/platform/disk-rightsizing',
  '/platform/dbops',
  '/platform/secops',
  '/platform/cost-analytics',
  '/platform/sre',
  '/solutions/devops',
  '/solutions/finops',
  '/solutions/sre',
  '/pricing',
  '/about',
  '/blog',
  '/blog/aws-cost-spike-investigation',
  '/blog/ec2-spot-instances-production',
  '/blog/disk-rightsizing-ebs',
  '/blog/what-is-xamops',
  '/blog/cloud-security-automation',
  '/blog/finops-practices-multi-cloud',
  '/blog/cloud-cost-optimization-strategies',
  '/contact',
  '/demo',
];

async function prerenderRoute(page, route) {
  await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle', timeout: 30_000 });
  // Let React effects run (MetaManager sets title/meta/canonical via useEffect)
  await new Promise(r => setTimeout(r, 600));
  return page.content();
}

async function writeRoute(route, html) {
  const outPath = route === '/'
    ? join(DIST, 'index.html')
    : join(DIST, route.replace(/^\//, ''), 'index.html');
  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, html, 'utf-8');
  return outPath;
}

async function run() {
  console.log('\n🔍  Starting pre-render...\n');

  const server = await preview({
    root: ROOT,
    preview: { port: PORT, open: false, strictPort: true },
  });

  const browser = await chromium.launch();
  const context = await browser.newContext({
    // Stable theme so pre-rendered HTML is consistent
    colorScheme: 'light',
  });

  let passed = 0;
  let failed = 0;

  for (const route of ROUTES) {
    const page = await context.newPage();
    try {
      const html = await prerenderRoute(page, route);
      const outPath = await writeRoute(route, html);
      console.log(`  ✓  ${route}  →  ${outPath.replace(ROOT + '/', '')}`);
      passed++;
    } catch (err) {
      console.error(`  ✗  ${route}  —  ${err.message}`);
      failed++;
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.httpServer.close();

  console.log(`\n  Pre-render complete: ${passed} succeeded, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
