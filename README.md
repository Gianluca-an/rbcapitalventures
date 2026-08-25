# RB Capital Ventures — Website

A redesigned marketing site for **RB Capital Ventures Ltd.**, a global investment and
project-financing firm. Built as a single-page React application: an animated opening page
(a statement slider over a live "capital network") that flows on scroll into the full site.

**Design language:** white canvas · light-blue signature · deep navy ink — institutional,
sleek, and lively. Display type in Playfair Display, UI/body in Inter.

## Stack

- **React 18** + **TypeScript**
- **Vite 6** build tooling
- **Framer Motion** — scroll reveals, slider transitions, portfolio filtering
- **Lenis** — smooth scrolling (auto-disabled under `prefers-reduced-motion`)
- Hand-authored CSS design system (no UI framework) — see `src/index.css`

## Getting started

```bash
npm install
npm run dev        # local dev server (http://localhost:5173)
npm run build      # production build -> dist/  (standard multi-asset)
npm run preview    # preview the production build
```

### Single-file build

For the simplest possible deploy (one self-contained `dist/index.html`, everything inlined):

```bash
SINGLEFILE=1 npm run build
```

Drop that one file on any static host. The normal `npm run build` (multi-asset) is the
better choice for production hosting with caching.

## Deployment

`npm run build` emits a fully static site to `dist/` — host it anywhere (Netlify, Vercel,
Cloudflare Pages, S3 + CloudFront, GitHub Pages, plain Nginx). No server or backend required.

## Project structure

```
src/
  main.tsx                 App entry (mounts React, imports global CSS)
  App.tsx                  Section composition + smooth scroll
  data/content.ts          ← ALL site copy & portfolio data (single source of truth)
  hooks/
    useSmoothScroll.ts     Lenis integration + anchor-link handling
  components/
    Logo.tsx               RB emblem (SVG) + wordmark lockup
    Nav.tsx                Sticky nav (transparent → solid on scroll)
    NetworkCanvas.tsx      Animated node network behind the hero
    Reveal.tsx             Scroll-into-view fade/rise wrapper
    Footer.tsx
  sections/
    Hero.tsx               Opening page — animated statement slider + stat ribbon
    About.tsx              Firm intro + values
    Approach.tsx           The three disciplines (sequence)
    Criteria.tsx           Investment criteria
    Sectors.tsx            12 sectors of focus
    Portfolio.tsx          Filterable project grid (15 mandates)
    Contact.tsx            Contact details + form
  styles/
    hero.css               Opening-page styles
    site.css               Nav, sections, footer styles
```

## Editing content

All copy, stats, criteria, sectors, and portfolio entries live in **`src/data/content.ts`**.
Update that one file and the whole site follows — no need to touch component markup.

## Notes & next steps

- **Logo** — the emblem in `src/components/Logo.tsx` is a new SVG mark (an ascending
  "capital flow" through connected nodes). Swap in a final brand asset when ready.
- **Team bios** — intentionally deferred; a leadership section can slot in after About.
- **Contact form** — currently opens the visitor's mail client via `mailto:` (no backend).
  Wire to a form service (Formspree, Basin) or an API endpoint for production.
- **Headline stats** are framed as *project / transaction value across mandates*, not
  deployed capital or AUM. Adjust in `content.ts` if the firm prefers different framing.
- **Accessibility** — honors `prefers-reduced-motion`; keyboard-focusable controls.

## Content source

Copy and portfolio data were carried over from the firm's existing site and restructured.
```

