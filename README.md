# RB Capital Ventures — Website ("Still Waters")

A redesigned marketing site for **RB Capital Ventures Ltd.**, a global investment and
project-financing firm. The creative direction is **"Still Waters"** — *still waters run deep*:
pale-blue air, calm reflective water, and a single luminous glass sphere. Premium and alive,
never loud — confidence expressed as calm.

The opening page is a **WebGL glass orb** (real transmission/refraction) floating over calm
water; from there the visitor descends through one continuous story into the full site.

**Design language:** white / light-blue canvas · deep-navy ink · one aqua spark. Display type
in **Fraunces** (editorial serif, roman + italic), UI/body in **Hanken Grotesk**.

## Stack

- **React 18** + **TypeScript**, **Vite 6**
- **Three.js** + **@react-three/fiber** + **@react-three/drei** — the glass-orb hero
  (`MeshTransmissionMaterial`, procedural `Environment`/`Lightformer`, `Sparkles`)
- **Framer Motion** — scroll reveals, hero motion, portfolio filtering
- **Lenis** — smooth scrolling (auto-disabled under `prefers-reduced-motion`)
- Hand-authored CSS design system (no UI framework)

The 3D scene is **code-split** (loaded lazily) and falls back to a CSS orb when WebGL is
unavailable or the visitor prefers reduced motion.

## Getting started

```bash
npm install
npm run dev        # local dev server
npm run build      # production build -> dist/  (standard, code-split)
npm run preview    # preview the production build
SINGLEFILE=1 npm run build   # one self-contained dist/index.html
```

## Deployment

`npm run build` emits a fully static site to `dist/` — host it anywhere (Netlify, Vercel,
Cloudflare Pages, S3 + CloudFront, GitHub Pages, plain Nginx). No server required.

## Project structure

```
src/
  main.tsx                 App entry (mounts React, imports global CSS)
  App.tsx                  Section composition + smooth scroll
  data/content.ts          ← ALL site copy & portfolio data (single source of truth)
  hooks/useSmoothScroll.ts Lenis integration + anchor-link handling
  three/
    Orb.tsx                WebGL glass-orb hero scene (R3F)
    StaticOrb.tsx          CSS fallback orb
    hasWebGL.ts            capability + reduced-motion detection
  components/
    Logo.tsx               RB sphere mark + wordmark
    Nav.tsx                Sticky nav (transparent → solid on scroll)
    Reveal.tsx             Scroll-into-view fade/rise wrapper
    Footer.tsx
  sections/
    Hero.tsx               Opening page — the glass orb + positioning statement
    About.tsx              The firm + values
    Opportunity.tsx        Editorial stat block ($690M+ / 15 / 12 / 4)
    Approach.tsx           The three disciplines (sequence)
    Criteria.tsx           Investment criteria
    Sectors.tsx            12 sectors of focus
    Portfolio.tsx          Filterable project grid (15 mandates)
    Globe.tsx              "Global Reach" — the dark contrast beat
    Contact.tsx            Contact details + form
  styles/
    hero.css               Opening-page styles
    site.css               Nav, sections, footer styles
```

## Editing content

All copy, stats, criteria, sectors and portfolio entries live in **`src/data/content.ts`**.
Update that one file and the whole site follows.

## Notes & next steps

- **Team bios** — intentionally deferred; a leadership section can slot in after About.
- **Contact form** — currently opens the visitor's mail client via `mailto:` (no backend).
  Wire to a form service (Formspree, Basin) or an API endpoint for production.
- **Headline stats** are framed as *project / transaction value*, not deployed capital or AUM.
- **Accessibility** — honors `prefers-reduced-motion` (3D animation + smooth scroll disabled);
  keyboard-focusable controls; CSS-orb fallback with no WebGL.

## Content source

Copy and portfolio data were carried over from the firm's existing site and restructured.
