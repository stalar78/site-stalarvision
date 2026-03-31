# Technical Guidelines

## Purpose

This document defines how to evolve the project safely and predictably.

## Current stack snapshot

- Vite
- React
- TypeScript
- Tailwind CSS v4 via `@tailwindcss/vite`
- React Router
- Framer Motion
- Lucide React
- small shadcn-style UI primitives in `src/components/ui`

## Runtime source of truth

Use these directories as authoritative for the running app:

- `src/`
- `public/`
- `docs/`
- `vite.config.ts`
- `tsconfig.json`
- `tsconfig.node.json`
- `components.json`

Current repo also contains template-era duplicates and leftovers:

- root `components/`
- root `lib/`
- `template/`

Do not build new runtime features on those legacy copies. Prefer `src/` only.

## Primary engineering goals

- keep the baseline runnable
- keep edits localized and predictable
- reduce template drift
- make future content refactors easier
- avoid unnecessary dependencies

## Rules

### 1. Prefer simple architecture

Do not add abstractions unless they remove clear pain.

### 2. Preserve routing shape

Current routing is intentionally small. Do not add routes casually.

### 3. Move toward data-driven content

The current site stores a lot of content directly inside JSX. That is acceptable temporarily, but future iterations should move repeated/static content into dedicated data files.

Recommended future direction:

- `src/data/site.ts`
- `src/data/services.ts`
- `src/data/cases.ts`
- `src/data/faq.ts`
- `src/data/contacts.ts`

### 4. Keep components focused

Each section component should have one clear responsibility.

### 5. Keep styling consistent

Preserve the current visual language unless a task explicitly changes design:

- dark background
- rounded panels/cards
- subtle borders
- indigo-led accent palette
- strong spacing rhythm

### 6. Keep animation restrained

Framer Motion should support hierarchy and polish, not distract from content.

### 7. Use semantic HTML

Prefer proper sections, headings, links, labels, and buttons.

### 8. Protect accessibility baseline

Check for:

- focus visibility
- readable contrast
- meaningful labels
- alt text when images are informative

### 9. Add dependencies only when clearly justified

New libraries should be added only if:

- the codebase already requires them
- or they solve a concrete problem more cleanly than local code

### 10. Do not fake functionality

If a form or CTA is visual-only, it must be obvious in implementation and documentation until real behavior exists.

## Repo-specific notes

- `components.json` is configured for Tailwind v4 and uses `src/index.css` as the styling entrypoint.
- Path alias `@/*` points to `src/*`.
- `App.tsx` currently acts as an optional layout stub and is not used by the current route definition.
- The current site imports remote demo images in some sections. Production launch should replace them with approved assets or remove them.

## Recommended quality bar before launch

- dependencies installed from a committed `package.json`
- lockfile generated and committed
- successful local build
- real metadata added
- placeholder contacts removed
- placeholder testimonials removed
- representative cases labeled honestly
- broken external links removed
