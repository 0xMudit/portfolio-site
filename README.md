<div align="center">

<img src="public/assets/profile.jpeg" alt="Muditya Raghav" width="120" />

<h1>Muditya Raghav — Portfolio</h1>

**Source for [mudityaraghav.vercel.app](https://mudityaraghav.vercel.app) — a statically rendered engineering portfolio built on Next.js 16 and React 19.**

<p>
<img src="https://img.shields.io/badge/Next.js-16-black.svg" alt="Next.js 16" />
<img src="https://img.shields.io/badge/React-19-61dafb.svg" alt="React 19" />
<img src="https://img.shields.io/badge/TypeScript-5-3178c6.svg" alt="TypeScript 5" />
<img src="https://img.shields.io/badge/Tailwind_CSS-4-38bdf8.svg" alt="Tailwind CSS 4" />
<img src="https://img.shields.io/badge/deploy-Vercel-000000.svg" alt="Deployed on Vercel" />
</p>

</div>

---

> **Scope notice.** This repository is the source of the owner's personal portfolio site — it is a
> statically rendered presentation layer, not a product. Nothing here talks to a database or a CMS;
> all content is authored in one typed module and built ahead of time.

## Why this portfolio

It is a small site, but it is built the way a production frontend should be — so the source is as
legible as the page.

- **One source of truth.** Every headline, project, job, skill, and link lives in a single typed
  module, `src/data/portfolio.ts`. There is no CMS and no runtime fetch; the build is the data flow.
- **Statically rendered.** The Next.js App Router pre-renders the whole page, so the deployed
  artifact is static HTML/CSS/JS with no server round-trips for content.
- **Theme done right.** Light and dark are both first-class. A tiny inline bootstrap script applies
  the stored (or system) preference before first paint, so there is never a white flash.
- **Motion that respects people.** Sections fade and lift in via `IntersectionObserver`, and the
  animation is skipped entirely under `prefers-reduced-motion`.
- **No component framework.** The UI is Tailwind CSS v4 plus a handful of local primitives — small,
  fast, and dependency-light.
- **Adding work is one edit.** Append an object to `projects` and drop a screenshot in
  `public/assets/`; the layout adapts to the array.

## Features

| Area | What you get |
| --- | --- |
| Hero | Availability badge, name, role, quick stats, social links, and a résumé button. |
| Highlights | A dated "now" timeline driven by the `highlights` export. |
| Experience | Roles with company, period, and measurable impact bullets. |
| Projects | The first entry renders as a wide featured card; the rest fill a responsive 2-column grid with Live and Source links. |
| Skills | Grouped skill chips (languages, frameworks, data/infra, domain systems, security). |
| Education | Degree, institution, and CGPA. |
| Research | Published papers with outbound links. |
| Contact | Email call-to-action plus GitHub, LinkedIn, and HuggingFace. |
| Theming | Light/dark, system-aware, persisted to `localStorage`, no flash on first paint. |
| Scroll reveal | IntersectionObserver transitions that disable under reduced-motion. |
| Navigation | Sticky, scroll-aware header with active-section highlighting and a mobile panel. |
| Metadata | OpenGraph and Twitter cards, plus dynamically rendered site icons. |

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| UI runtime | React 19 |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS v4 |
| Fonts | `next/font` — Inter and JetBrains Mono, self-hosted at build time |
| Theming | Custom provider with light/dark and a pre-paint bootstrap script |
| Hosting | Vercel (static output) |

There is no component library, no CSS-in-JS runtime, and no analytics script — the shipped page is
HTML, a stylesheet, and a small amount of JavaScript for theme and nav interactions.

## Featured work

Four systems are highlighted on the live site. Each card links to its live deployment and source.

**Clara Network** — a Mastercard/Visa-style card payment network in Go (featured project).

![Clara Network](public/assets/clara.png)

**Malcom** — a Stripe-billed AI research platform with streamed LLM responses.

![Malcom](public/assets/malcom.png)

**Kingswork** — a real-time trading intelligence platform on a multi-domain FastAPI backend.

![Kingswork](public/assets/kingswork.png)

**Jini** — a local-first, cited-answer document intelligence workspace.

![Jini](public/assets/jini.png)

## Requirements

- **Node.js 20+** with npm

That is the entire toolchain — the site is static and needs no external services to build or run.

## Quick start

```bash
# 1. Clone
git clone https://github.com/0xMudit/portfolio-site.git
cd portfolio-site

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open <http://localhost:3000>.

```bash
# Production build and lint
npm run build
npm run lint
```

## How it works

```
┌────────────────────────── Next.js App Router ───────────────────────────┐
│  src/app/layout.tsx     metadata · fonts · pre-paint theme bootstrap    │
│           │                                                             │
│           ▼                                                             │
│  src/app/page.tsx       composes the single-page shell                 │
│           │                                                             │
│           ▼                                                             │
│  src/components/                                                        │
│    sections/*   Hero · Highlights · Experience · Projects · Skills ·    │
│                 Education · Research · Contact                          │
│    ui.tsx       Card / Chip / Section / SectionHeading primitives       │
│    reveal.tsx   IntersectionObserver scroll reveal                      │
│    navbar.tsx   sticky nav · active-section · theme toggle              │
│           │                                                             │
│           ▼                                                             │
│  src/data/portfolio.ts   ← every string, project, job, and link         │
└─────────────────────────────────────────────────────────────────────────┘
```

`page.tsx` is a server component that lays out the section components in order. Each section reads
its own slice of `src/data/portfolio.ts`, so content and presentation never drift. The only client
state is theme (in `src/lib/theme-provider.tsx`) and the small interactions in the navbar and reveal
helper; everything else renders to static HTML at build time.

## Project layout

```
src/app/          route shell: layout, metadata, global styles, and site icons
src/components/   layout and UI primitives; sections/ holds one file per page section
src/data/         portfolio.ts — the single typed content module
src/lib/          theme provider (light/dark state)
public/assets/    profile photo, project screenshots, and the résumé PDF
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js dev server at <http://localhost:3000>. |
| `npm run build` | Production build with type checking. |
| `npm run start` | Serve the production build. |
| `npm run lint` | Run ESLint (flat config, `eslint-config-next`). |

## Editing content

`src/data/portfolio.ts` is the single source of truth. Every section reads from an exported, typed
array:

| Export | Drives |
| --- | --- |
| `highlights` | The "now" timeline. |
| `projects` | Project cards — the first entry renders as the featured card, the rest fill the grid. |
| `experience` | Work history. |
| `skills` | Skill groups. |
| `research` | Publications. |
| `socials`, `email`, `resumeUrl` | Contact and résumé links. |

To add a project, append an object to `projects` and add its screenshot to `public/assets/`. The
grid adapts, and the order in the array is the order on the page.

## Accessibility and performance

The build favors a fast, quiet page over a heavy one:

- **Static HTML first.** Content is server-rendered and ships without a client-side data layer, so
  it is readable before any JavaScript runs.
- **Reduced motion honored.** The reveal animations are skipped when the visitor prefers reduced
  motion, and the server-rendered markup is always visible.
- **System-respecting theme.** Dark mode follows the OS by default, and a visitor's explicit toggle
  is remembered without a flash on the next visit.
- **Self-hosted fonts.** Fonts are loaded through `next/font` at build time — no third-party font
  requests and no layout shift from late font swaps.
- **Semantic structure.** Sections, headings, and interactive elements use proper landmarks and
  labeled controls (including `aria-label`s on icon-only buttons).

## Deployment

Pushes to `main` deploy automatically via Vercel (static output). The résumé at
`public/assets/MudityaRaghav-Software-Engineer-Resume.pdf` is served directly, so updating it is a
file replacement with no code change required.
