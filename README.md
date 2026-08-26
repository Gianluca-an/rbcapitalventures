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

> ⚠️ **LAUNCH BLOCKER — contact form is Netlify-only right now.** The form is wired to
> **Netlify Forms**, which only collects submissions when the site is deployed **on Netlify**.
> On any other host (Cloudflare Pages, Vercel, GitHub Pages, …) the form will appear to work but
> **submissions are silently lost** — nothing is stored and the client gets no error.
>
> **Before launch, confirm the host:**
> - **Deploying on Netlify?** → nothing to do; submissions land under *Forms* in the dashboard
>   (add a notification email + spam filter there).
> - **Deploying anywhere else?** → swap the backend to a host-agnostic service before go-live.
>   Recommended: **Web3Forms** (free, handles the pitch-deck upload) or **Formspree**. This is a
>   ~15-minute change: point the `fetch` in `src/pages/Contact.tsx` at the service endpoint and
>   remove the hidden detection form in `index.html`.

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
