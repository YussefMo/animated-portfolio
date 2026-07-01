---
name: "YoussefMo Portfolio"
description: "Personal portfolio of Youssef Mohammed Ali — Frontend Engineer (React, Next.js, React Native, Expo). The site demonstrates the craft it advertises."
colors:
  bg-deep: "#0c0c0c"
  bg-elevated: "#1a1a1a"
  bg-surface: "#1f1f1f"
  bg-hover: "#2a2a2a"
  border-default: "#2a2a2a"
  border-hover: "#8b5cf6"
  fg-primary: "#f8fafc"
  fg-muted: "#a3a3a3"
  fg-dim: "#737373"
  accent-primary: "#8b5cf6"
  accent-primary-deep: "#7c3aed"
  accent-secondary: "#ec4899"
  accent-secondary-deep: "#db2777"
  accent-tertiary: "#22d3ee"
  accent-tertiary-deep: "#06b6d4"
  destructive: "#7f1d1d"
  destructive-fg: "#f8fafc"
  focus-ring: "#8b5cf6"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 7vw, 5.5rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0"
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.02em"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "0.375rem"
  md: "0.5rem"
  lg: "0.75rem"
  xl: "1rem"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  "2xl": "3rem"
  "3xl": "4rem"
components:
  button-primary:
    backgroundColor: "{colors.accent-primary}"
    textColor: "{colors.fg-primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.lg}"
    fontWeight: 600
  button-primary-hover:
    backgroundColor: "{colors.accent-primary-deep}"
    transform: "translateY(-1px)"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.fg-primary}"
    borderColor: "{colors.accent-primary}"
    borderWidth: "2px"
    rounded: "{rounded.md}"
    padding: "calc({spacing.sm} - 2px) calc({spacing.lg} - 2px)"
    fontWeight: 600
  button-outline-hover:
    backgroundColor: "{colors.accent-primary}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.fg-muted}"
    rounded: "{rounded.md}"
    padding: "{spacing.xs} {spacing.sm}"
  button-ghost-hover:
    backgroundColor: "{colors.bg-hover}"
    textColor: "{colors.fg-primary}"
  card-default:
    backgroundColor: "{colors.bg-surface}"
    borderColor: "{colors.border-default}"
    borderWidth: "1px"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  card-hover:
    borderColor: "{colors.border-hover}"
    transform: "scale(1.02)"
    boxShadow: "0 0 0 1px {colors.border-hover}, 0 8px 32px rgba(139, 92, 246, 0.15)"
  input-default:
    backgroundColor: "{colors.bg-surface}"
    borderColor: "{colors.border-default}"
    textColor: "{colors.fg-primary}"
    placeholderColor: "{colors.fg-dim}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
  input-focus:
    borderColor: "{colors.focus-ring}"
    boxShadow: "0 0 0 3px {colors.accent-primary}40"
  nav-link:
    textColor: "{colors.fg-muted}"
    fontWeight: 500
    padding: "{spacing.xs} 0"
  nav-link-hover:
    textColor: "{colors.fg-primary}"
  nav-link-active:
    textColor: "{colors.fg-primary}"
  chip-tag:
    backgroundColor: "{colors.accent-primary}20"
    textColor: "{colors.accent-primary}"
    borderColor: "transparent"
    rounded: "9999px"
    padding: "{spacing.xs} {spacing.sm}"
    fontSize: "0.75rem"
    fontWeight: 500
  modal-backdrop:
    backgroundColor: "rgba(12, 12, 12, 0.9)"
    backdropFilter: "blur(8px)"
  modal-window:
    backgroundColor: "{colors.bg-elevated}"
    borderColor: "{colors.border-default}"
    borderWidth: "1px"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
    boxShadow: "0 24px 48px rgba(0, 0, 0, 0.4), 0 0 0 1px {colors.border-default}"
---

# Design System: YoussefMo Portfolio

## 1. Overview

**Creative North Star: "The Engineer's Workshop"**

A dark-first, technical portfolio where the interface itself proves the engineer's craft. Every component, animation, and interaction demonstrates production-grade frontend skills — React 19 patterns, Tailwind 4 with OKLCH tokens, Framer Motion choreography, Lenis smooth scrolling, custom cursor mechanics. The aesthetic is clean and confident: typography leads, a committed purple-pink-cyan accent system punctuates, and depth is conveyed through tonal layering with glass-like translucency on elevated surfaces (modals, toasts).

This system explicitly rejects:
- Generic SaaS landing-page clichés (hero-metric templates, cream/sand backgrounds, eyebrow kickers on every section, identical card grids, gradient text for decoration)
- Template marketplace bloat (over-animated, feature-stuffed, "look at all these components" energy)
- Sterile minimalist "designer" portfolios (all-white, tiny type, no personality, unreadable contrast)

**Key Characteristics:**
- Dark-first, near-black base (`#0c0c0c`) with tonal elevation steps (`#1a1a1a`, `#1f1f1f`, `#2a2a2a`)
- Committed primary accent (purple `#8b5cf6` → pink `#ec4899` gradient) + named secondary accents (cyan `#22d3ee` for code/technical callouts)
- Glass/translucency elevation: backdrop-blur modals, tonal borders, hover border-glow — no ambient shadows at rest
- Inter as the single type family across all roles (display → mono), weight and scale carry hierarchy
- Motion with purpose: Framer Motion for orchestrated entrances/stagger, Lenis for scroll feel, custom spring cursor — all respect `prefers-reduced-motion`
- Expressive, alive components: magnetic hover states, spring transitions, custom cursor with blend modes, interactive background shapes

## 2. Colors

A dark-first committed palette: one primary gradient accent (purple → pink), one warm secondary (pink), one cool tertiary (cyan) for technical distinction, and a 4-step neutral ramp for depth.

### Primary
- **Electric Violet** (`#8b5cf6` / `oklch(58% 0.28 280)`): Primary brand accent. Buttons, focus rings, hover borders, tag chips, gradient endpoints. The "voice" color — used deliberately, not decoratively.
- **Electric Violet Deep** (`#7c3aed` / `oklch(52% 0.3 280)`): Hover/active state for primary actions.

### Secondary
- **Magenta Rose** (`#ec4899` / `oklch(60% 0.26 340)`): Gradient partner to Electric Violet. Hero headlines, secondary CTAs, decorative gradient endpoints. Warmer energy.
- **Magenta Rose Deep** (`#db2777` / `oklch(54% 0.28 340)`): Hover state for secondary actions.

### Tertiary
- **Electric Cyan** (`#22d3ee` / `oklch(72% 0.18 195)`): Technical callouts, code snippets, link hover, data-visualization accents. Cool counterpoint to the warm primary/secondary.
- **Electric Cyan Deep** (`#06b6d4` / `oklch(66% 0.2 195)`): Hover state for technical accents.

### Neutral
- **Abyssal** (`#0c0c0c` / `oklch(8% 0 0)`): Page background. True near-black, not tinted.
- **Elevated Abyssal** (`#1a1a1a` / `oklch(12% 0 0)`): Modal backdrops, navbar scrolled state, dropdown menus.
- **Surface Charcoal** (`#1f1f1f` / `oklch(15% 0 0)`): Cards, panels, input backgrounds, modal windows.
- **Hover Charcoal** (`#2a2a2a` / `oklch(19% 0 0)`): Borders at rest, hover backgrounds, input borders.
- **Border Glow** (`#8b5cf6` / `oklch(58% 0.28 280)`): Hover/focus borders, ring accents — the accent bleeding into neutrals.
- **Ink White** (`#f8fafc` / `oklch(98% 0 0)`): Primary text, headings, high-contrast body.
- **Muted Slate** (`#a3a3a3` / `oklch(65% 0 0)`): Secondary text, descriptions, placeholder-adjacent.
- **Dim Slate** (`#737373` / `oklch(45% 0 0)`): Placeholder text, disabled states, subtle dividers.

### Named Rules
**The One Gradient Rule.** The purple→pink gradient is the primary brand signature. It appears on: hero headline, primary buttons, tag chips, focus rings, hover borders, and cursor. It does NOT appear as decorative background fills, card gradients, or section dividers. Its rarity is the point.

**The Cyan-for-Code Rule.** Electric Cyan (`#22d3ee`) is reserved for technical content: code blocks, inline code, repository links, API references, command snippets. Never used for marketing CTAs or decorative gradients.

**The Glass Elevation Rule.** Depth is conveyed through: (1) tonal background steps (Abyssal → Elevated → Surface → Hover), (2) 1px borders in Hover Charcoal at rest / Border Glow on hover, (3) `backdrop-blur` + semi-transparent dark overlays on modals/toasts. Ambient `box-shadow` is prohibited on cards and panels at rest. Shadows appear ONLY on: modal windows (elevation), toasts (elevation), and hover state on project cards (subtle glow ring).

## 3. Typography

**Display Font:** Inter (system-ui fallback) — single family, weight/scale carry hierarchy
**Body Font:** Inter (same)
**Label/Mono Font:** JetBrains Mono (ui-monospace fallback) — code, technical labels, data

**Character:** Inter's geometric neutrality lets the dark theme and accent colors speak. JetBrains Mono adds technical authenticity. No serif, no script — this is an engineer's portfolio, not an editorial magazine. The pairing says: "I build systems."

### Hierarchy
- **Display** (800, `clamp(2.5rem, 7vw, 5.5rem)`, 1.05, -0.03em): Hero headline only. `text-wrap: balance`. Never used elsewhere.
- **Headline** (700, `clamp(1.75rem, 4vw, 2.75rem)`, 1.15, -0.02em): Section titles (About, Work, Services, Contact). Gradient text allowed here only.
- **Title** (600, `clamp(1.25rem, 2.5vw, 1.75rem)`, 1.25, -0.01em): Card titles, modal headers, project names.
- **Body** (400, 1rem, 1.7, 0): All prose, descriptions, paragraphs. Max line length 65–75ch via container width.
- **Label** (500, 0.875rem, 1.5, 0.02em): Navigation links, tag chips, form labels, meta text. Uppercase not used.
- **Mono** (400, 0.875rem, 1.6, 0): Inline code, code blocks, technical commands, URLs.

### Named Rules
**The Single-Family Rule.** Inter carries every non-code text role. No second display font, no "personality" heading font. Weight and clamp() do the work.

**The Gradient-Text Ceiling Rule.** Gradient text (`bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text`) appears ONLY on: the hero H1 and section headlines (H2). Never on body, labels, buttons, or metadata. One gradient voice per section max.

**The Mono-for-Truth Rule.** Any code, command, file path, or technical identifier uses JetBrains Mono. No exceptions. This includes tag chips when they represent technologies.

## 4. Elevation

Flat-by-default with glass/translucency on intentional elevation. No ambient shadows on cards, panels, or containers at rest. Depth hierarchy:

1. **Page ground** — Abyssal (`#0c0c0c`), no shadow, no border
2. **Surface layer** — Surface Charcoal (`#1f1f1f`) + 1px Hover Charcoal border (`#2a2a2a`)
3. **Hover/active surface** — Border shifts to Border Glow (`#8b5cf6`), subtle scale (1.02), optional glow ring
4. **Overlay layer** — Elevated Abyssal (`#1a1a1a`) at 90% opacity + `backdrop-blur(8px)` — navbar scrolled, dropdowns
5. **Modal layer** — Surface Charcoal window + 1px border + true elevation shadow (`0 24px 48px rgba(0,0,0,0.4)`) + `backdrop-blur` on backdrop
6. **Toast layer** — Same as modal, higher z-index

### Shadow Vocabulary
- **Modal Elevation** (`0 24px 48px rgba(0, 0, 0, 0.4), 0 0 0 1px #2a2a2a`): Modal windows, project detail drawers. The only "true" shadow in the system.
- **Card Hover Glow** (`0 0 0 1px #8b5cf6, 0 8px 32px rgba(139, 92, 246, 0.15)`): Project cards on hover — border glow + subtle violet diffusion.
- **Focus Ring** (`0 0 0 3px #8b5cf640`): All interactive elements on `:focus-visible`.

### Named Rules
**The Flat-At-Rest Rule.** Cards, panels, inputs, buttons — no `box-shadow` in default state. Borders and tonal backgrounds carry the weight.

**The Glass-Only-Where-Earned Rule.** `backdrop-blur` + semi-transparent dark backgrounds appear ONLY on: (a) navbar when scrolled, (b) modal backdrops, (c) toast container. Not on cards, not on dropdowns, not on tooltips.

**The Border-Glow-Over-Shadow Rule.** Interactive elevation prefers a colored border shift (Hover Charcoal → Border Glow) + subtle scale over a shadow lift. The accent bleeds into the neutral border; that's the brand voice.

## 5. Components

### Buttons
- **Shape:** Rounded medium (0.5rem / 8px). No pill, no sharp corners.
- **Primary:** Electric Violet background, white text, 600 weight, `px-6 py-2.5` (default), `px-8 py-3` (large). Hover: Electric Violet Deep + `translateY(-1px)`. Focus: 3px Electric Violet ring at 25% opacity.
- **Outline:** Transparent background, white text, 2px Electric Violet border, same padding. Hover: fills to Primary.
- **Ghost:** Transparent, Muted Slate text, `px-3 py-1.5`. Hover: Hover Charcoal background + Ink White text.
- **Press state:** All variants `active:scale-[0.98]` for tactile feedback.
- **Disabled:** 50% opacity, `pointer-events-none`, no hover/press transitions.

### Chips / Tags
- **Style:** `rounded-full`, `px-2.5 py-0.5`, Label typography (500, 0.75rem, 0.02em tracking). Background: `Electric Violet / 12%` (`#8b5cf620`), text: Electric Violet, no border.
- **Technical variant:** Electric Cyan background at 12%, Electric Cyan text — for stack tags, category filters.
- **Selected state (filters):** Full Electric Violet background, white text.

### Cards / Containers
- **Corner Style:** Rounded large (0.75rem / 12px).
- **Background:** Surface Charcoal (`#1f1f1f`).
- **Border:** 1px Hover Charcoal (`#2a2a2a`) at rest.
- **Hover:** Border → Border Glow (`#8b5cf6`), `scale(1.02)`, Card Hover Glow shadow.
- **Internal Padding:** `xl` (2rem / 32px) for project cards; `lg` (1.5rem / 24px) for content panels.
- **Image/thumbnail:** `rounded-lg`, `object-contain` or `object-cover` per context, aspect-ratio maintained.

### Inputs / Fields
- **Style:** Surface Charcoal background, Hover Charcoal border, Ink White text, Dim Slate placeholder. Rounded medium (0.5rem). `px-4 py-2.5`.
- **Focus:** Border → Electric Violet, Focus Ring shadow (3px at 25%).
- **Error:** Border → Destructive (`#7f1d1d`), Focus Ring → Destructive at 25%.
- **Disabled:** 50% opacity, cursor not-allowed.

### Navigation
- **Desktop:** Horizontal, Label typography (500, 0.875rem), Muted Slate at rest. Hover: Ink White + 2px bottom border in Electric Violet (animated width 0→100%). Active: Ink White + persistent bottom border.
- **Mobile:** Full-screen overlay (Elevated Abyssal + backdrop-blur), staggered entrance (0.1s delay per link), centered, larger hit targets (`py-2`).
- **Logo:** Display weight (700), 1.5rem, "YoussefMo Dev" with Electric Violet dot suffix.
- **Social icons:** Ghost button style, 24px, Muted Slate → Ink White hover, spring scale (1.2) + rotate (5°).

### Modal (Project Detail)
- **Backdrop:** Abyssal at 90% + `backdrop-blur(8px)`, fade-in 0.2s.
- **Window:** Surface Charcoal, 1px Hover Charcoal border, rounded XL (1rem), Modal Elevation shadow, `max-h-[85vh]` with scroll.
- **Entrance:** `opacity: 0 → 1`, `y: 20 → 0`, spring (stiffness 300, damping 30).
- **Close:** Click backdrop, Escape key, or close button — all trap focus correctly.

### Custom Cursor (Signature)
- **Inner dot:** 12px, purple→pink gradient, `mix-blend-difference`, spring (stiffness 500, damping 28).
- **Outer ring:** 20px, white/30 border, spring (stiffness 300, damping 20).
- **Hover state:** Both scale 1.5× on links, buttons, interactive elements.
- **Reduced motion:** Instant position update, no springs, no blend mode (solid Electric Violet).

### Interactive Background Shapes (Signature)
- **Layer:** Fixed, inset-0, z-0, pointer-events-none.
- **Shapes:** 6 geometric forms (circles, squares, triangles) in purple→pink gradient at 10% opacity.
- **Behavior:** Parallax follow mouse (speed varies by index), hover opacity 20%, spring scale 1.2×.
- **Reduced motion:** Static, no parallax, no hover response.

## 6. Do's and Don'ts

### Do:
- **Do** use the purple→pink gradient ONLY on: hero H1, section H2s, primary buttons, tag chip backgrounds, focus rings, hover borders, and the custom cursor. Quote PRODUCT.md: *"The primary accent is used on ≤10% of any given screen. Its rarity is the point."*
- **Do** use Electric Cyan (`#22d3ee`) for ALL code, commands, technical labels, and repository links. Never for marketing CTAs.
- **Do** convey depth via tonal backgrounds (4-step neutral ramp) + 1px borders + hover border-glow. The accent bleeds into the border; that's the brand.
- **Do** use `backdrop-blur` + semi-transparent dark overlays ONLY on navbar (scrolled), modal backdrops, and toast containers.
- **Do** animate with purpose: Framer Motion for orchestrated entrances/stagger, Lenis for scroll, springs for micro-interactions. Every animation has a `prefers-reduced-motion` crossfade/instant alternative.
- **Do** set body text at 1rem / 1.7 line-height / 65–75ch max width. Contrast ≥4.5:1 (Ink White on Abyssal = 18.6:1).
- **Do** use Inter for all non-code text. Weight and `clamp()` carry hierarchy. No second display font.
- **Do** make every interactive element keyboard-accessible: visible focus ring (3px Electric Violet at 25%), logical tab order, Escape to close modals/dropdowns.
- **Do** use JetBrains Mono for any technical content. This includes stack tags when they represent technologies.
- **Do** test the hero headline at every breakpoint — `clamp(2.5rem, 7vw, 5.5rem)` with `text-wrap: balance` prevents overflow.

### Don't:
- **Don't** use the purple→pink gradient as decorative background fills, card gradients, section dividers, or text that isn't hero H1 or section H2. (PRODUCT.md anti-ref: "gradient text for decoration")
- **Don't** add ambient `box-shadow` to cards, panels, or containers at rest. (PRODUCT.md anti-ref: "glassmorphism as default" — we use glass only where earned)
- **Don't** use cream/sand/beige/warm-neutral backgrounds. The base is Abyssal (`#0c0c0c`). Warmth lives in the accent, not the canvas. (PRODUCT.md anti-ref: "cream/sand/beige body bg is the saturated AI default")
- **Don't** put tiny uppercase tracked eyebrows ("ABOUT", "WORK", "CONTACT") above section headings. (PRODUCT.md anti-ref: "eyebrow on every section is AI grammar")
- **Don't** use numbered section markers (01, 02, 03) as default scaffolding. (PRODUCT.md anti-ref: "numbered eyebrows on every section is AI grammar")
- **Don't** pair a second display font with Inter. No serif, no script, no "personality" heading font. (The Single-Family Rule)
- **Don't** use Electric Cyan for non-technical CTAs, marketing buttons, or decorative gradients. (The Cyan-for-Code Rule)
- **Don't** let text overflow containers — test headings at 320px, 768px, 1440px. Reduce `clamp()` max or rewrite copy if needed.
- **Don't** ship motion without a `prefers-reduced-motion: reduce` alternative (crossfade or instant).
- **Don't** use side-stripe borders (`border-left/border-right > 1px`) as colored accents on cards or callouts. (Absolute ban)