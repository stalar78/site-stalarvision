# Codex Workflow

## Purpose

This document explains how future Codex tasks should be run in this repo.

## Required read order before editing

For any non-trivial task, read:

1. `README.md`
2. `docs/00_PROJECT_CONTEXT.md`
3. `docs/01_PRODUCT_REQUIREMENTS.md`
4. `docs/02_CONTENT_SOURCE_OF_TRUTH.md`
5. `docs/03_TECH_GUIDELINES.md`
6. the files directly related to the task

## Default working pattern

1. inspect the relevant files first
2. understand current behavior before changing it
3. make the smallest coherent change that solves the task
4. avoid unrelated refactors
5. summarize edits and remaining gaps at the end

## What Codex should preserve

- current routing unless the task explicitly changes routing
- existing component structure unless a refactor is part of scope
- current visual language unless UI changes are explicitly requested
- truthfulness of content

## What Codex must not do

- invent business facts
- invent testimonials or clients
- invent metrics or case-study results
- silently replace the site positioning
- add libraries without clear technical need
- spread content changes across many files when one source-of-truth file would be better

## Good task size

Good tasks:

- create `src/data/*` files and move repeated content into them
- replace placeholder contacts with approved values from the owner
- add SEO metadata for the current routes
- convert template portfolio cards into clearly labeled representative cases

Bad tasks:

- make the whole site production-ready in one pass
- redesign everything
- rewrite all components without a content plan

## Review expectations

Every completed task should report:

- created files
- updated files
- what changed behaviorally
- assumptions made
- anything still needed for local run or production readiness

## Safe implementation checklist

Before editing:

- inspect target files
- confirm whether data is factual or placeholder
- confirm whether the repo already has a pattern to follow

Before finishing:

- check for broken imports
- check for routing regressions
- check whether a new dependency was truly necessary
- note missing follow-up work if verification is blocked

## Recommended execution order for this repo

1. stabilize technical baseline
2. centralize content
3. replace placeholder/fake trust signals
4. improve conversion structure
5. add production metadata and policy pages
6. connect real contact flow
