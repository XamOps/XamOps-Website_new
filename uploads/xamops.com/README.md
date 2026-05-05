# XamOps Landing — Vite + React + Tailwind + GSAP

A premium marketing landing page for **XamOps** (xamops.com), built with React, Vite, Tailwind CSS and GSAP ScrollTrigger.

## Features

- **Hero** with staggered serif headline reveal (translateY + opacity), parallax background, faux live dashboard
- **Logo ticker** marquee with mask gradients
- **Platform overview** strip (6 capability cards) with scroll-revealed line text
- **Alternating light / dark** feature deep-dive sections, each with custom data viz
- **Pinned horizontal scroll section** — vertical scroll translates a card track horizontally (`pin: true`, `scrub: 1`, `ease: "none"`, dynamic distance via `scrollWidth - innerWidth`, `invalidateOnRefresh: true`)
- **Coming Soon** dark roadmap section
- **Animated metric counters** (GSAP tween)
- **Final CTA** with quick-form
- Warm Anthropic-inspired palette: parchment / ivory / terracotta / near-black

## Stack

- **Vite** (`^5.3.4`)
- **React 18** + functional components, hooks
- **Tailwind CSS** + custom CSS variables
- **GSAP** + **ScrollTrigger** (`^3.12.5`)
- Google Fonts: `Inter`, `JetBrains Mono`; system Georgia for serif headlines

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
```

## Project structure

```
.
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles/
    │   └── index.css            # tokens + utility classes
    ├── hooks/
    │   └── useReveal.js         # scoped GSAP reveal hook
    └── components/
        ├── Icon.jsx
        ├── Logo.jsx
        ├── Nav.jsx
        ├── Hero.jsx
        ├── LogoBar.jsx
        ├── PlatformStrip.jsx
        ├── TextSection.jsx      # generic alternating feature section
        ├── HorizontalScroll.jsx # pinned horizontal scroll
        ├── ComingSoon.jsx
        ├── Metrics.jsx
        ├── FinalCTA.jsx
        ├── Footer.jsx
        └── Visuals.jsx          # feature dashboard visuals
```

## Animation notes

- All ScrollTriggers use `invalidateOnRefresh: true` so layout / window-resize recomputes start/end correctly.
- The pinned horizontal section calculates distance dynamically: `track.scrollWidth - window.innerWidth + 80`.
- Reveal animations target `.reveal-line > span` (Y-translate) and `[data-fade]` (Y + opacity), scoped per section via `gsap.context`.
- After mount, `App` calls `ScrollTrigger.refresh()` twice (200ms, 800ms) to absorb font-load layout shifts.

## Design tokens

| Token | Value |
| --- | --- |
| `--parchment` | `#f5f4ed` |
| `--ivory` | `#faf9f5` |
| `--terracotta` | `#c96442` |
| `--ink` | `#141413` |
| `--olive` | `#5e5d59` |

Buttons: 8 px radius. Inputs: 12 px. Hero containers: 32 px. Shadows are 1 px rings, never drop shadows.

## Preview file

`XamOps Landing.html` in the project root is a self-contained version of the same page (Babel-in-browser, CDN React/GSAP) for instant preview without `npm install`.
