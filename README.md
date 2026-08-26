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

### Contact form — hosted on Cloudflare, Netlify Forms as the backend

The site is served by **Cloudflare Pages**, but the contact form is processed by **Netlify
Forms** — no third-party form service, no paid plan, and real pitch-deck file handling. This
works because Netlify Forms only needs the submission to *arrive at a Netlify deployment*, not for
visitors to be on Netlify. One-time setup:

1. **Deploy this repo to Netlify too** (New site → import the repo → build `npm run build`, publish
   `dist`). Its build bot detects the hidden `opportunity` form in `index.html` and provisions the
   endpoint. This Netlify site is a *form backend only* — nobody visits it. Note its URL, e.g.
   `https://rb-capital.netlify.app/`.
2. **In Netlify → Forms**, add a notification email (and enable spam filtering / reCAPTCHA).
3. **In Cloudflare Pages → Settings → Environment variables**, set
   `VITE_FORM_ENDPOINT` = your Netlify site URL (including trailing slash), then redeploy.

At runtime the Cloudflare-hosted form cross-posts its `multipart/form-data` submission (pitch-deck
file included) to that Netlify URL via a `no-cors` request; Netlify stores it and emails you. If
`VITE_FORM_ENDPOINT` is unset it falls back to `/` (correct for a Netlify-hosted deploy or local
dev). See `src/pages/Contact.tsx` for the details.

*Alternative:* to drop the Netlify dependency entirely later, repoint `VITE_FORM_ENDPOINT` (or the
`fetch`) at **Web3Forms** / **Formspree** and remove the hidden form in `index.html`.

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
  Ludmila Pirogova; bios reveal on hover/click. Real portraits supplied (see
  `public/images/leadership/`).
- **Contact form** — wired to **Netlify Forms**. A hidden static detection form in
  `index.html` registers the `opportunity` form at build time; the React form on `/contact`
  POSTs the real submission as `multipart/form-data` (so the deck upload is stored). No extra
  config needed — submissions appear under **Forms** in the Netlify dashboard once deployed.
  Add notification emails / a spam filter there before launch. (On non-Netlify hosts, swap the
  `fetch` target for Formspree or similar.)
- Per brief: **no public portfolio / case studies, no oversized numbers, no icon grids**, and
  **no geographic map** — coverage is stated as a plain region list.
- SEO/accessibility: per-page `<title>`/description can be added with `react-helmet-async`
  when desired; images carry alt text via the `Photo` `alt`/`caption`.
