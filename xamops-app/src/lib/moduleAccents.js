// One hue per platform module, keyed by route, so the same module reads the
// same colour in the nav, on the homepage strip and on its own page.
// Chrome stays neutral — these are accents only (icons, rules, small marks).
export const MODULE_ACCENT = {
  '/platform/spot-automation':  'var(--viz-2)',
  '/platform/disk-rightsizing': 'var(--viz-1)',
  '/platform/dbops':            'var(--viz-5)',
  '/platform/secops':           'var(--viz-4)',
  '/platform/cost-analytics':   'var(--viz-3)',
  '/platform/sre':              'var(--viz-1)',
  '/solutions/devops':          'var(--viz-1)',
  '/solutions/finops':          'var(--viz-3)',
  '/solutions/sre':             'var(--viz-2)',
};

export const accentFor = (to) => MODULE_ACCENT[to] || 'var(--ink)';
