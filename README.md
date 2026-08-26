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

## Deployment — hosted on Netlify

The live site is hosted on **Netlify**. `npm run build` emits a static site to `dist/`; config is
included so importing the repo needs no manual setup:
- **`netlify.toml`** — build command (`npm run build`) + publish dir (`dist`)
- **`public/_redirects`** — SPA fallback so deep links (`/about`, `/sectors`, …) resolve

**To deploy:** on Netlify, *Add new project → import this repo*. Netlify reads `netlify.toml`, builds,
and publishes. Add the custom domain under *Domain management* (free SSL is automatic).

### Contact form (Netlify Forms — native)

The contact form is handled by **Netlify Forms**: no third-party service, no paid plan, and the
pitch-deck file is stored with each submission. Because the site is hosted on Netlify, the form
posts **same-origin** and works with no extra configuration. How it's wired:

- A hidden static detection form in `index.html` registers the `opportunity` form. **Netlify's
  form detection must be enabled** (Project → Forms → *Enable form detection*) and then a deploy
  run so it scans the HTML — after that the form appears under *Forms*.
- `src/pages/Contact.tsx` POSTs the submission as `multipart/form-data`. The POST target is
  `VITE_FORM_ENDPOINT` if set, else `/` — and on a Netlify-hosted site `/` is exactly right, so
  the variable is left unset.
- **Notifications:** Project → Forms → *Form notifications* → add the recipient email(s) (e.g.
  `info@rbcapitalventures.com`). Recipients need no Netlify login. Enable spam filtering / reCAPTCHA
  there before launch.

*Portability:* if the site is ever moved to a non-Netlify host (Cloudflare Pages, etc.), the same
form still works by setting `VITE_FORM_ENDPOINT` to a companion Netlify deploy's URL (the code then
cross-posts via a `no-cors` request), or by repointing it at **Web3Forms** / **Formspree** and
removing the hidden form. See the comment in `src/pages/Contact.tsx`.

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
