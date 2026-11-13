<div align="center">

<img src="src/app/icon.svg" alt="Muditya Raghav" width="88" height="88" />

<h1>Muditya Raghav — Portfolio</h1>

**Source for [mudityaraghav.vercel.app](https://mudityaraghav.vercel.app) — a statically rendered, single-page backend engineering portfolio built on Next.js 16 and React 19.**

<p>
<img src="https://img.shields.io/badge/Next.js-16-black.svg" alt="Next.js 16" />
<img src="https://img.shields.io/badge/React-19-61dafb.svg" alt="React 19" />
<img src="https://img.shields.io/badge/TypeScript-5-3178c6.svg" alt="TypeScript 5" />
<img src="https://img.shields.io/badge/Tailwind_CSS-4-38bdf8.svg" alt="Tailwind CSS 4" />
<img src="https://img.shields.io/badge/deploy-Vercel-000000.svg" alt="Deployed on Vercel" />
</p>

</div>

---

> **Scope notice.** This repository is the source of the owner's personal portfolio site — a
> statically rendered presentation layer, not a product. Nothing here talks to a database or a CMS;
> all content is authored in one typed module and built ahead of time.

## Design intent

The site is deliberately small: four sections, one accent colour, one type family, and no motion
beyond the essential. The goal is that a recruiter understands who this is, what they build, where
they have worked, and how to reach them in the first ten seconds.

- **One source of truth.** Every headline, project, role, and link lives in `src/data/portfolio.ts`.
  There is no CMS and no runtime fetch; the build is the data flow.
- **Editorial, not decorative.** Hairline rules and generous spacing replace cards, gradients, and
  badge rows. Screenshots carry the only colour.
- **Semantic tokens, not `dark:` sprinkles.** Surfaces, borders, and text all resolve to CSS
  variables defined once in `globals.css`; `html.dark` overrides those variables, so every utility
  flips together and the two themes cannot drift.
- **Static by default.** The whole page is prerendered at build time. There are no React client
  components: the mobile menu is a native `<details>` disclosure and a small inline script handles
  the theme toggle and menu dismissal.
- **Accessible by construction.** WCAG AA contrast in both themes, a skip link, labelled controls,
  visible focus rings, and reduced-motion support.

## Page structure

| Section | Content |
| --- | --- |
| Hero | Name, role, headline, a short technical summary, availability, primary CTAs, and profile links. |
| Selected projects | Three backend-heavy systems in a two-column editorial layout with screenshots, stack, live demo, and source links. |
| Experience | Two roles with period, company, and concise impact bullets, followed by a single education line. |
| Contact | A short invitation, email / GitHub / LinkedIn / LeetCode rows, and the résumé download. |

## Featured work

**Kingswork (KingStop)** — modular FastAPI backend for a simulated trading platform.

![Kingswork](public/assets/kingswork.png)

**Clara Network** — educational card-payment network simulator with an ISO 8583 switch and
double-entry ledger, written in Go.

![Clara Network](public/assets/clara.png)

**Malcom** — AI research application with streamed responses, grounded citations, and Stripe
billing.

![Malcom](public/assets/malcom.png)

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| UI runtime | React 19 |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS v4 with semantic design tokens |
| Fonts | `next/font` — Inter and JetBrains Mono, self-hosted at build time |
| Images | `next/image` with explicit aspect ratios (no layout shift) |
| Hosting | Vercel (static output) |

There is no component library, no CSS-in-JS runtime, and no analytics script.

## Requirements

- **Node.js 20+** with npm

## Quick start

```bash
git clone https://github.com/0xMudit/portfolio-site.git
cd portfolio-site
npm install
npm run dev
```

Open <http://localhost:3000>.

```bash
npm run build   # production build with type checking
npm run lint    # ESLint (flat config, eslint-config-next)
```

## How it works

```
src/app/layout.tsx      metadata · fonts · pre-paint theme bootstrap
        │
        ▼
src/app/page.tsx        hero → projects → experience → contact, plus header/footer
        │
        ▼
src/components/
  sections/*            one file per section, all server-rendered
  ui.tsx                container, buttons, Section primitive
  navbar.tsx            sticky header · mobile menu · theme toggle (client)
  icons.tsx             the handful of inline SVGs the page needs
  profile-glyph.tsx     maps a profile key to its glyph
        │
        ▼
src/data/portfolio.ts   ← every string, project, role, and link
```

`page.tsx` is a server component. The only client component is the navbar, and only the mobile menu
uses state; the theme toggle reads and writes the `.dark` class directly on `<html>`.

## Project layout

```
src/app/          route shell: layout, metadata, global styles, icons, OG image
src/components/   layout and UI primitives; sections/ holds one file per section
src/data/         portfolio.ts — the single typed content module
public/assets/    project screenshots and the résumé PDF
```

## Editing content

`src/data/portfolio.ts` is the single source of truth:

| Export | Drives |
| --- | --- |
| `site` | Name, role line, headline, summary, availability, email, résumé path. |
| `projects` | The three project rows, in array order. |
| `experience` | Roles and bullets. |
| `education` | The single line under experience. |
| `profiles` | Hero and contact links (GitHub, LinkedIn, LeetCode, email). |
| `navLinks` | Header and mobile navigation. |

To swap a project, edit its entry and drop a screenshot in `public/assets/`. To update the résumé,
replace `public/assets/MudityaRaghav-Backend-Developer-Resume.pdf` — the path is referenced from
`site.resumeUrl`, so no component changes are needed.

## Accessibility and performance

- **Static HTML first.** Content is prerendered and readable before any JavaScript runs.
- **AA contrast.** Body, muted, faint, accent, and button colours were chosen against their
  backgrounds rather than by eye.
- **Reduced motion honored.** Scroll behaviour and transitions collapse to near-zero duration.
- **Light by default.** Dark mode is opt-in and remembered; a tiny inline script applies it before
  first paint so there is no flash.
- **No layout shift.** Screenshots use fixed aspect ratios through `next/image`; fonts are
  self-hosted with `display: swap`.
- **Critical CSS inlined.** The complete stylesheet is inlined into the HTML, so the hero paints
  without waiting on a render-blocking request.
- **Semantic structure.** One `h1`, labelled `h2` sections, `header`/`main`/`footer` landmarks, and
  labelled icon-only controls.

## Deployment

Pushes to `main` deploy automatically via Vercel (static output). The résumé at
`public/assets/MudityaRaghav-Backend-Developer-Resume.pdf` is served directly, so updating it is a
file replacement with no code change required.
