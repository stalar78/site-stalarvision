# Content Source of Truth

## Purpose

This document defines what counts as authoritative content for the website and what must be treated as placeholder material.

## Core rule

Do not invent facts.

If something is unknown, it must be one of the following:

- omitted
- phrased neutrally
- marked with a clear TODO

## Trust hierarchy

When information conflicts, use this order:

1. direct owner instruction in chat
2. approved project documentation in `docs/`
3. source materials supplied by the owner
4. current codebase content
5. generic template text

## Approved fact categories

### Identity

Needs explicit owner confirmation:

- public name or brand name
- exact title / positioning statement
- location if it should appear publicly
- work format such as remote or international

### Contacts

Needs explicit owner confirmation:

- email
- Telegram
- GitHub
- LinkedIn
- any booking or messenger links

### Services

Needs confirmation before being presented as final:

- exact service list
- minimum scope
- whether design is included
- whether backend work is included
- whether support/maintenance is included

### Experience and credibility

Needs confirmation before using exact statements:

- years of experience
- number of projects
- performance metrics
- niche specialization claims
- named industries

### Cases

Allowed:

- real public work
- anonymized real work
- owner-approved representative examples

Not allowed:

- fake clients
- fake numbers
- fake links
- template cases presented as real commercial work

### Testimonials

Allowed only if based on real feedback approved by the owner.

Not allowed:

- fabricated quotes
- invented names, roles, or companies

### Pricing

Safe generic phrasing:

- project-based pricing
- scope affects cost
- timeline and requirements affect estimate

Unsafe without approval:

- exact rates
- fixed package pricing
- discounts
- urgency offers

## Current content status in this repo

The current UI should be treated as unapproved template content in several places:

- hero includes business-result style claims and sample metrics
- portfolio uses representative template projects
- testimonials are placeholder entries
- contact details are placeholder values

That content may be useful for layout and structure, but it is not the business source of truth.

## Placeholder policy

Placeholders are allowed only when they are easy to spot and easy to replace.

Preferred format:

- `TODO: insert approved email`
- `TODO: replace with approved case summary`
- `TODO: confirm pricing wording`

Avoid placeholders that look real to end users.

## Copy style rules

Website copy should:

- sound like one experienced person
- emphasize outcomes, process, and clarity
- stay grounded
- avoid hype
- avoid agency-style fluff

## Final approval checklist

These items must be owner-approved before launch:

- hero messaging
- about block
- services wording
- portfolio/cases
- testimonials
- contact links
- any pricing mention
