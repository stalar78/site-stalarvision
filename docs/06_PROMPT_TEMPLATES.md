# Prompt Templates for Codex

## Template 1: Safe implementation task

```text
You are editing an existing React + TypeScript + Vite project.

Goal:
[INSERT GOAL]

Context:
- This repository is a personal developer service website for one individual developer, not an agency.
- The current codebase is a visual template being turned into a real commercial site.
- Do not invent business facts, testimonials, client names, metrics, pricing, or contact details.

Read first if present:
- README.md
- docs/00_PROJECT_CONTEXT.md
- docs/01_PRODUCT_REQUIREMENTS.md
- docs/02_CONTENT_SOURCE_OF_TRUTH.md
- docs/03_TECH_GUIDELINES.md
- docs/04_CODEX_WORKFLOW.md

Inspect first:
- [INSERT FILES]

Implement:
- [INSERT TASKS]

Constraints:
- Do not redesign the UI unless the task explicitly requires it.
- Preserve current routing and component structure.
- Use only dependencies that are clearly required.
- Keep the implementation production-minded and easy to extend.

At the end:
- summarize created files
- summarize updated files
- summarize assumptions and remaining gaps
```

## Template 2: Content centralization task

```text
You are editing an existing React + TypeScript + Vite website.

Goal:
Extract repeated/static homepage content from JSX into centralized data files.

Read first:
- docs/00_PROJECT_CONTEXT.md
- docs/01_PRODUCT_REQUIREMENTS.md
- docs/02_CONTENT_SOURCE_OF_TRUTH.md
- docs/03_TECH_GUIDELINES.md

Inspect:
- src/pages/Home.tsx
- src/components/*
- src/router.tsx

Implement:
- create `src/data/` files for the content that is currently scattered in components
- move repeated text, links, services, FAQ items, cases, and contacts into those files where appropriate
- update components to consume the centralized data
- preserve current UI behavior

Constraints:
- do not redesign the layout
- do not invent facts
- keep component APIs simple
- avoid unnecessary abstractions

At the end:
- list created files
- list updated files
- describe the new content structure
```

## Template 3: Credibility cleanup task

```text
You are editing a personal developer service website.

Goal:
Remove or neutralize placeholder content that could misrepresent the real business.

Read first:
- docs/00_PROJECT_CONTEXT.md
- docs/01_PRODUCT_REQUIREMENTS.md
- docs/02_CONTENT_SOURCE_OF_TRUTH.md

Inspect:
- hero section
- portfolio/cases section
- testimonials section
- contact/footer links

Implement:
- remove fake metrics
- replace fake contacts with neutral placeholders or approved real data
- relabel representative cases honestly
- remove fake testimonials or replace them with a safer trust mechanism

Constraints:
- keep the current visual direction
- do not invent replacement facts
- do not add new libraries unless necessary

At the end:
- summarize the credibility fixes
- note any content still requiring owner approval
```
