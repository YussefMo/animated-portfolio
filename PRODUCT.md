# Product

## Register

brand

## Users

**Primary audiences (mixed):**

- **Hiring managers / recruiters** — evaluating technical depth, project quality, and stack alignment for frontend roles (React, Next.js, React Native, Expo)
- **Potential clients / freelance leads** — assessing expertise for SaaS, e-commerce dashboards, AI-integrated frontends, and cross-platform work
- **Peer developers / community** — looking for architecture decisions, code quality signals, tooling choices, and implementation patterns

**Context:** Visitors arrive via GitHub, LinkedIn, or direct link. They scan quickly (10–30s) for: tech stack match, project complexity, design sensibility, and communication clarity. The site must reward both quick scans and deeper exploration.

**Job to be done:** "Convince me this engineer builds production-grade frontends I'd trust on my product/team."

## Product Purpose

A personal portfolio that demonstrates **frontend craft** through the site itself — the portfolio is its own best case study. It showcases:

- React 19 / Next.js 16 / React Native / Expo fluency
- Modern CSS (Tailwind 4, OKLCH tokens, custom properties)
- Motion design (Framer Motion, Lenis) that feels intentional, not decorative
- Type-safe patterns (TypeScript, modern React patterns)
- Accessibility built in, not bolted on

**Success looks like:** A hiring manager or client lands, scrolls once, understands the skillset immediately, and reaches out. The site feels like a senior engineer built it — thoughtful, performant, and distinctive without screaming.

## Brand Personality

**Clean + Confident + Modern**

- **Clean:** Visual restraint. Breathing room. No clutter. Every element earns its place. Typography leads.
- **Confident:** No apologies. No "aspiring" language. Senior-level ownership in copy and code. The work speaks.
- **Modern:** Current stack (Next 16, React 19, Tailwind 4). Contemporary motion. Dark-first theme with purposeful color. Not retro, not chasing trends.

**Emotional goals:** Competence → Trust → "I want to work with this person."

## Anti-references

- **Generic SaaS landing pages** — Hero-metric templates, cream/sand/beige backgrounds, safe corporate gradients, eyebrow kickers on every section, identical card grids, gradient text for the sake of it
- **Template marketplaces** — Over-animated, feature-stuffed, "look at all these components" energy
- **Pure-minimalist "designer" portfolios** — All-white, tiny type, no personality, style over substance, unreadable contrast

## Design Principles

1. **The site is the proof.** Every interaction, animation, and layout decision demonstrates the very skills the portfolio advertises.
2. **Show, don't tell.** Code snippets, live interactions, and project depth beat bullet lists of technologies.
3. **Dark-first, not dark-mode-as-afterthought.** The primary experience is dark; light mode exists but isn't the design target.
4. **Motion with purpose.** Entrance animations guide attention; micro-interactions provide feedback; nothing moves just because it can. Reduced motion is a first-class experience.
5. **Typography carries brand.** The type system does the heavy lifting; color accents punctuate, not dominate.
6. **Accessibility is craft.** Semantic HTML, focus management, contrast, and keyboard flow are baseline quality — not a checklist.

## Accessibility & Inclusion

- **WCAG 2.1 AA** minimum for all text contrast, focus indicators, and interactive targets
- **Full keyboard accessibility** — every interactive element reachable and operable via keyboard; logical tab order; visible focus states
- **Reduced motion respected** — `@media (prefers-reduced-motion: reduce)` disables non-essential animations; crossfade/instant alternatives provided
- **Semantic structure** — proper heading hierarchy, landmarks, ARIA only where native HTML falls short