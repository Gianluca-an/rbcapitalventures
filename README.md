# RB Capital Ventures — Website

A discreet, institutional website for **RB Capital Ventures Ltd.**, a private investment
platform and family-office capital partner. Built to the client brief: the restraint, pacing
and content hierarchy of a private investment office (reference: Samson Investment Partners),
with a **Washington D.C. authority / Baltimore character** visual identity.

**Design language:** parchment · warm stone · deep navy · charcoal, with aged-brass and oxblood
accents. **Bodoni Moda** (editorial serif) + **Libre Franklin** (Federal grotesque). Full-bleed
photography, sharp corners, generous whitespace, minimal/premium motion.

## Stack

- **React 18** + **TypeScript**, **Vite 6**
- **React Router 7** — multi-page (`/`, `/about`, `/asset-classes`, `/sectors`,
  `/investment-criteria`, `/contact`); the logo links Home.
- **Framer Motion** — restrained scroll reveals · **Lenis** — smooth scrolling
- Hand-authored CSS design system (no UI framework)

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Deployment

`npm run build` emits a static site to `dist/`. Config is included:
- **`netlify.toml`** — build command + publish dir (one-click import on Netlify)
- **`public/_redirects`** — SPA fallback so deep links (`/about`, `/sectors`, …) resolve

Cloudflare Pages: build command `npm run build`, output `dist`, and add an equivalent SPA
fallback (`/* /index.html 200`).

## Photography (client to provide)

The site is photography-led. Every image is a **`<Photo>`** slot rendering a clearly-labelled
duotone placeholder (with the intended subject captioned) until real assets are supplied. To drop
in a real image, pass `src` (and `alt`) to the `Photo` in the relevant page/component — no layout
changes needed. Suggested subjects are captioned on each placeholder (Federal architecture,
harbour infrastructure, principal portraits, geographic-reach map, etc.).

## Content

All copy lives in **`src/data/content.ts`** (hero, pillars, about, approach, leadership, asset
classes, sectors, investment criteria, geography, contact, offices). Update that one file and the
site follows. Copy is taken verbatim from the client brief.

## Structure

```
src/
  main.tsx                 Entry — BrowserRouter, scroll restoration off
  App.tsx                  Routes
  data/content.ts          ← ALL copy & data
  hooks/useSmoothScroll.ts Lenis
  components/
    Layout.tsx             Nav + Outlet + Footer + scroll-to-top on route change
    Nav.tsx  Footer.tsx  Logo.tsx  icons.tsx
    Photo.tsx              Image slot / labelled placeholder
    PageHero.tsx           Full-bleed interior page hero
    Reveal.tsx             Restrained scroll reveal
  pages/
    Home.tsx  About.tsx  AssetClasses.tsx  Sectors.tsx  Criteria.tsx  Contact.tsx
  styles/site.css          Components + pages
```

## Notes & next steps

- **Investment Leadership** (About page) — Rosalyn Bronstein, Royan Khayri, Kevin Wilson,
  Ludmila Pirogova; bios reveal on hover/click. Portraits are placeholders awaiting supply.
- **Contact form** — front-end only. Wire to **Netlify Forms** or **Formspree** for secure
  delivery, PDF handling and spam protection before launch.
- **Geography map** — a placeholder slot; can be replaced with a proper map graphic.
- Per brief: **no public portfolio / case studies, no oversized numbers, no icon grids.**
- SEO/accessibility: per-page `<title>`/description can be added with `react-helmet-async`
  when desired; images carry alt text via the `Photo` `alt`/`caption`.
