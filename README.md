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

## Deployment — hosted on Cloudflare Pages

The live site is hosted on **Cloudflare Pages**. `npm run build` emits a static site to `dist/`:
- **`public/_redirects`** — SPA fallback so deep links (`/about`, `/sectors`, …) resolve (Cloudflare
  Pages reads this file too).

**To deploy:** in Cloudflare Pages, create a project from this repo with build command
`npm run build` and output directory `dist`. Add the custom domain in the project's *Custom domains*
tab (free SSL is automatic). Set the form key env var below before the first build.

### Contact form (Web3Forms — free, host-agnostic)

The contact form is handled by **Web3Forms**: free, no server code, works on any host, and the
pitch-deck file rides along as an attachment. `src/pages/Contact.tsx` POSTs the submission (via
`fetch`) to `https://api.web3forms.com/submit`; Web3Forms emails it to the address tied to the
access key.

**Setup:**
1. Get a free access key at [web3forms.com](https://web3forms.com) (enter the destination inbox,
   e.g. `info@rbcapitalventures.com`; the key arrives by email). The key is public by design.
2. In **Cloudflare Pages → Settings → Environment variables**, add
   `VITE_WEB3FORMS_KEY` = that key, then redeploy. (Vite bakes `VITE_`-prefixed vars in at build
   time.)
3. Submissions arrive at the key's inbox. Add more recipients / spam filtering in the Web3Forms
   dashboard.

Notes: a hidden `botcheck` honeypot guards against spam. Web3Forms caps attachment size on the free
plan, so very large decks may bounce — normal pitch decks are fine, and the error state points
senders to the enquiries email as a fallback.

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
