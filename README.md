# Into the Deep 🌊

A mobile-first, scroll-driven ocean depth explorer. Scroll down to descend
from the sea surface to the floor of the Mariana Trench (10,935 m), watching
depth, light, pressure, and water colour change in real time.

**Live: <https://aladris.github.io/into-the-deep/>**

## Run it

```sh
npm install
npm run dev
```

## Deploy

```sh
npm run deploy   # builds and pushes dist/ to the gh-pages branch
```

## How the depth engine works

- `src/ocean.js` — the scientific backbone: zone table, water-colour stops
  interpolated continuously by depth, exponential light decay (~1% of surface
  light at 200 m), and pressure (≈ +1 atm per 10 m).
- `src/main.js` — maps `scrollY` directly to depth (5 px per metre). Anything
  anchored at depth *d* is placed at `d·5px + 50svh`, so it crosses the centre
  of the screen exactly when the HUD reads *d*. A single rAF-gated scroll
  handler repaints the gradient via CSS variables; an `IntersectionObserver`
  reveals creatures.
- `src/data/creatures.js` — creature dataset with inline SVG sprites.

## Build stages

- [x] **Stage 1** — scaffold, scroll-driven depth/light/gradient engine, HUD,
  zone boundary markers, depth ruler, 3 placeholder creatures
- [x] **Stage 2** — full creature dataset (50 species) + full-screen detail view
- [x] **Stage 3** — bioluminescence particles (from ~900 m) + zone-transition
  callouts + glow halos on deep-zone creatures
- [x] **Stage 4** — installable PWA: manifest + icons, service worker
  (cache-first, full offline after first visit), self-hosted variable fonts

## PWA notes

- `public/manifest.webmanifest` + icons generated from `public/icon.svg` by
  `node scripts/make-icons.mjs` (192/512/maskable/apple-touch).
- `public/sw.js` precaches the shell and caches assets as they load; the
  service worker only registers in production builds so dev HMR is untouched.
- Fonts are latin-subset variable woff2 files in `src/fonts/`, bundled by
  Vite — no Google Fonts requests at runtime.
- To test the installed experience: `npm run build && npm run preview`, then
  "Add to Home Screen" from a phone on the same network (or use Chrome's
  install prompt on desktop).
