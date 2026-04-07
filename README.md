# STALAR Site

Published commercial website for an independent developer brand built with React, TypeScript, and Vite.

The project represents one specialist working directly with clients under the Stalar Vision brand. The site is already live and is now maintained in a post-launch polish mode, not in an early template phase.

## Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS v4 via `@tailwindcss/vite`
- React Router
- Framer Motion
- Lucide icons

## Local Run

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Project Notes

- Runtime source of truth is `src/`.
- Static assets live in `public/`.
- Project operating rules and future development guidance live in `docs/`.
- Core profile, contact, legal, and SEO/share data are centralized in `src/data/*`.
- The site already has a working contact form via Web3Forms, a privacy/legal page, a 404 page, and production SEO/share files such as `robots.txt` and `sitemap.xml`.
- Current homepage copy, services, contact flow, representative examples, and FAQ already support three main entry scenarios: a new project, improvement of an existing solution, or an audit/technical review.
- Representative project examples are intentionally not presented as confirmed public client cases.

## Documentation

- `docs/00_PROJECT_CONTEXT.md`
- `docs/01_PRODUCT_REQUIREMENTS.md`
- `docs/02_CONTENT_SOURCE_OF_TRUTH.md`
- `docs/03_TECH_GUIDELINES.md`
- `docs/04_CODEX_WORKFLOW.md`
- `docs/05_ROADMAP.md`
- `docs/06_PROMPT_TEMPLATES.md`
- `docs/07_CHAT_HANDOFF.md`

## Important Constraint

Do not invent business facts, testimonials, client names, metrics, or pricing. Unknown information must stay neutral or clearly marked for later approval.
