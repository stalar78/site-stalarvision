# Product Requirements

## Product vision

Build a credible one-page service website for an independent developer that explains services clearly, builds trust, and converts visitors into qualified leads.

## Product scope for the current baseline

In scope now:

- preserve the existing single-page layout
- keep current routing stable
- document product and engineering rules
- prepare the codebase for incremental improvement

Not in scope now:

- redesigning the current UI
- inventing final marketing copy
- adding a real backend or CRM integration
- expanding to a multi-page structure before the content model is ready

## Business goals

- generate inbound leads
- explain services and work format clearly
- differentiate the site from generic freelancer templates
- create a base for future case studies, blog content, and service subpages

## Visitor goals

When someone lands on the site, they should quickly understand:

- who the developer is
- what kinds of projects he handles
- what value the work brings
- whether the collaboration format fits them
- how to get in touch

## Questions the homepage must answer

1. What do you build?
2. Who is it for?
3. Why should I trust you?
4. What does the collaboration process look like?
5. How do we start?
6. What affects price and timeline?
7. What happens after launch?

## Section requirements

### Hero

Must communicate:

- specialization
- business value
- a clear next action

Must avoid:

- fake metrics
- vague agency language
- claims that sound larger than one independent developer

### About / positioning

Must explain:

- who the developer is
- how he approaches work
- what kind of partnership clients should expect

Must avoid:

- inflated self-praise
- generic buzzwords without real meaning

### Services

Each service block should eventually answer:

- what is being delivered
- for whom it is useful
- what problem it solves
- what outcome the client gets

Suggested service categories:

- landing pages and websites
- front-end implementation
- web applications and internal systems
- automation and integrations
- support and improvement of existing products

### Cases / portfolio

Allowed case types:

- real public projects
- anonymized real work
- clearly marked representative examples

Not allowed:

- fake clients presented as real
- fake results
- fake public links

### Testimonials

Allowed only when they come from real feedback approved by the owner.

Until that happens, placeholder testimonials should be removed or replaced with another trust mechanism.

### FAQ

Should cover:

- pricing logic
- timelines
- revision expectations
- support after launch
- work with existing codebases
- what the client should prepare before the project starts

### Contact block

Must include:

- a primary CTA
- real contact channels
- an explanation of what happens after outreach

The current UI form is presentational only and must not be represented as a working lead pipeline until submission behavior is implemented.

## Non-functional requirements

- responsive on desktop and mobile
- predictable routing
- maintainable component structure
- accessible interaction baseline
- easy future migration toward data-driven content

## SEO baseline for future implementation

The first production-ready version should include:

- unique title
- unique meta description
- Open Graph metadata
- semantic headings
- alt text for informative images
- crawlable content structure

## Future evolution targets

- service detail pages
- case study pages
- blog/articles
- multilingual support
- analytics
- CRM or contact form integration
