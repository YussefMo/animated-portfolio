---
name: Elite Engineering Dark
description: A precision-engineered portfolio system with glassmorphic depth, indigo signals, and command-center restraint.
colors:
  signal-indigo: "#c0c1ff"
  command-lavender: "#e1dfff"
  void-black: "#030303"
  deep-slate: "#051424"
  bright-ore: "#f8fafc"
  dim-steel: "#94a3b8"
  surface-glass: "rgba(255, 255, 255, 0.03)"
  border-glass: "rgba(255, 255, 255, 0.08)"
  indigo-glow: "rgba(99, 102, 241, 0.15)"
  violet-deep: "#d0bcff"
  amber-soft: "#ffdcc5"
typography:
  display-hero:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: 80px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  display-hero-mobile:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline-lg:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  headline-md:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.3
  body-lg:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  label-caps:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0.1em
  code-tag:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1
rounded:
  sm: 0.25rem
  default: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  section-padding: 120px
  glass-padding: 32px
  container-max: 1280px
  margin-mobile: 20px
components:
  button-primary:
    backgroundColor: "{colors.signal-indigo}"
    textColor: "#4b4d83"
    rounded: "{rounded.full}"
    padding: 16px 32px
    typography: "{typography.label-caps}"
  button-glass:
    backgroundColor: "{colors.surface-glass}"
    textColor: "{colors.bright-ore}"
    rounded: "{rounded.full}"
    padding: 16px 32px
    typography: "{typography.label-caps}"
  nav-bar:
    backgroundColor: "{colors.surface-glass}"
    textColor: "{colors.bright-ore}"
    rounded: "{rounded.full}"
    padding: 16px 32px
  glass-panel:
    backgroundColor: "{colors.surface-glass}"
    rounded: "{rounded.xl}"
    padding: "{spacing.glass-padding}"
---

# Design System: Elite Engineering Dark

## 1. Overview

**Creative North Star: "The Command Center"**

A precision-engineered portfolio interface that feels like a high-performance terminal for a developer's identity. Every surface, transition, and interaction is deliberate — nothing decorative, nothing accidental. The aesthetic draws from developer tools (Linear, Vercel) and dark-mode command centers: deep void backgrounds, glassmorphic overlays, indigo signal colors, and monospaced code tags.

The system rejects template-portfolio clichés: no gradient text, no identical card grids, no over-animated scroll sections. Glassmorphism is used functionally (to separate content from background noise), not decoratively. Motion is GSAP-driven with exponential ease-out curves and full `prefers-reduced-motion` support.

**Key Characteristics:**
- True dark foundation (#030303) with glassmorphic surface layers
- Indigo/lavender accent palette — one signal color, used sparingly
- Geist/Inter/JetBrains Mono font stack — geometric display, neutral body, technical labels
- Magnetic hover interactions with exponential ease-out (no bounce, no elastic)
- Staggered GSAP ScrollTrigger reveals that enhance visible content, not gate it

## 2. Colors: The Signal-Indigo Palette

A restrained **Committed** color strategy: one saturated signal color (indigo-lavender) carries the accent surface, layered over a deep dark neutral ramp. Tertiary amber is reserved for micro-accents (category tags, data highlights).

### Primary
- **Signal Indigo** (#c0c1ff): The system's only accent surface. Pill buttons, nav highlights, skill module icons, active timeline dots. Always applied on dark backgrounds; never on white or light surfaces.
- **Command Lavender** (#e1dfff): A lighter tint of the accent. Used for the hero badge text, code tag labels, and subtle hover states on text links. Not a background color.

### Secondary
- **Violet Deep** (#d0bcff): Background gradient partner and secondary container. Used in scrollbar gradients and secondary glass panel glows. Never a primary interactive surface.

### Tertiary
- **Amber Soft** (#ffdcc5): Micro-accent for category differentiation (AI/EdTech tags, data callouts). Used sparingly — ≤2% of any screen.

### Neutral
- **Void Black** (#030303): The canvas. All content sits on this or on glass layers above it.
- **Deep Slate** (#051424): Surface baseline. Cards, panels, and containers use this when they're not glass.
- **Bright Ore** (#f8fafc): Primary text. Headlines, nav labels, interactive text. High contrast (≥15:1) against void black.
- **Dim Steel** (#94a3b8): Secondary text. Descriptions, metadata, inactive nav items. Meets WCAG AA (≥5.5:1) against void black.
- **Surface Glass** (rgba(255, 255, 255, 0.03)): The glass panel base. Always paired with 12px backdrop-blur and a 1px border-glass edge.
- **Border Glass** (rgba(255, 255, 255, 0.08)): Glass panel borders, dividers, timeline rails.
- **Indigo Glow** (rgba(99, 102, 241, 0.15)): Atmospheric lighting on nav bar, profile photo, and active timeline dots. A soft surround, not a hard shadow.

### Named Rules
**The One Signal Rule.** Signal Indigo (#c0c1ff) is used on ≤10% of any screen. Its rarity is the point. If more than one button, one nav highlight, and one section accent use it simultaneously, it's too much.

**The Dark Tower Rule.** Background layers (void black, radial gradient, warp net, aurora shader) must never compete with content. Foundation layers are z-index -20 through -10 and pointer-events: none. If a background element distracts from body text, it's too loud.

## 3. Typography: The Geist + Inter System

**Display Font:** Geist (geometric sans-serif, high-contrast geometry, technical precision)
**Body Font:** Inter (neutral utilitarian sans, optimized for screen legibility)
**Code Font:** JetBrains Mono (monospaced, for code tags and system labels)

**Character:** Geist carries the "engineering" brand — its geometry feels precise and technical. Inter provides neutral legibility for longer reading. JetBrains Mono is used exclusively for code tags (tech stacks, ARSN-xx labels, SYS.* system status lines) — never for body copy.

### Hierarchy
- **Display Hero** (700, 80px, 1.1, -0.04em): Hero section h1. One line, one statement. On mobile, scales to 48px with -0.02em tracking.
- **Headline LG** (600, 40px, 1.2, -0.02em): Section headers, timeline labels, showcase titles. Always paired with a bottom border-glass divider.
- **Headline MD** (600, 32px, 1.3): Card titles, modal headers, project names.
- **Body LG** (400, 18px, 1.6): Hero subtext, about intro. Capped at 72ch.
- **Body MD** (400, 16px, 1.6): Body copy, descriptions, experience details. Capped at 70ch.
- **Label Caps** (600, 12px, 1, 0.1em, uppercase): Navigation links, button labels, card metadata (ROLE/TECH). All-caps with positive tracking for readability at small sizes.
- **Code Tag** (400, 12px, 1): Tech stack pills, ARSN-xx system codes, SYS.STATUS lines, dates in monospace.

### Named Rules
**The Tight Headline Rule.** Display and headline tiers use tight leading (1.1–1.3) and negative tracking. Body tiers use generous leading (1.6) and neutral tracking. Never swap these: tight body copy is unreadable; loose headlines feel weak.

**The Code-Only Mono Rule.** JetBrains Mono is for system labels and code references only. Never for headings, body copy, or navigation labels. If it's not a code-tag context, it's not JetBrains Mono.

## 4. Elevation: The Frosted Depth System

Depth is conveyed through transparency and optical effects, not traditional drop shadows. This system uses **layered glassmorphism**: semi-transparent surfaces (rgba white at 3%) backed by 12px backdrop-blur, creating frosted-glass panels that float above the void-black canvas and background animations.

### Depth Layers
- **z-background (-20 to -10)**: Warp net canvas, radial gradient overlay, aurora WebGL shader. Fixed, pointer-events: none. Creates atmospheric texture.
- **z-content (0)**: Body text, images, plain containers. The default layer.
- **z-glass (z-10)**: Glass panels. `background: surface-glass, backdrop-filter: blur(12px), border: 1px solid border-glass`. These are the main content containers.
- **z-glass-elevated (z-10, hover)**: On hover, glass panels shift to `rgba(255, 255, 255, 0.05)`. The 2% increase is barely perceptible but signals interactivity.
- **z-signal (z-50)**: Navigation bar. Glass base + `box-shadow: 0 0 40px indigo-glow`. The only element with a glow — it marks the primary interaction surface.
- **z-modal (z-90)**: Contact modal overlay. `background: void-black at 80% opacity + backdrop-blur`.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Glow appears only on the nav bar (permanent) and active timeline dots (state-driven). Never box-shadow a card, button, or text container.

**The Frost, Not Fog Rule.** Backdrop-filter blur radius is always 12px. Below 8px, the glass effect is invisible against the dark canvas. Above 16px, it turns into fog and obscures the background animation. 12px is the settled value.

## 5. Components

### Buttons
- **Shape:** Pill (rounded-full, radius 9999px). This distinguishes them from rectangular content containers.
- **Primary:** Signal Indigo (#c0c1ff) background, on-primary-container (#4b4d83) text. Magnetic hover: `translate(x * 0.2, y * 0.2) + scale(1.05)` on mousemove, reset on mouseleave. Transition: `0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)`.
- **Glass:** Surface-glass background + border-glass border, Bright Ore text. Same magnetic hover as primary. Hover: background shifts to `rgba(255, 255, 255, 0.05)`.
- **Focus:** `outline: 2px solid primary-container, outline-offset: 2px`.

### Chips / Tags
- **Category Chips:** Pill (rounded-full), border-glass border only (no fill), Label Caps typography, Command Lavender text. Used for hero status badge and project category labels.
- **Tech Tags:** Rounded-md (4px), Deep Slate background, border-glass border, Code Tag typography, Bright Ore text. Used for skill lists and project tech stacks.

### Cards / Containers
- **Glass Panel (.glass-panel):** Surface-glass background, 12px blur, 1px border-glass, rounded-xl (12px). Internal padding: glass-padding (32px). The universal content container.
- **Project Showcase Card:** Glass Panel wrapping an image (with 8px internal padding + rounded-lg inner image) and an info panel. Image scales 1.02x on hover. Alternating 12-col grid layout.
- **Experience Card:** Glass Panel at 2/3 width, with a 4px dot on the timeline rail (Signal Indigo for active, surface-variant for inactive). Dot scales 1.5x on hover.

### Navigation
- **Nav Bar:** Fixed, top-6, left-1/2 -translate-x-1/2. Glass surface with 24px padding, rounded-full, indigo-glow shadow. Logo: Geist Display, 20px, bold, Signal Indigo.
- **Nav Links:** Label Caps typography. Active: Bright Ore + 2px Signal Indigo bottom border. Inactive: Dim Steel, hover Bright Ore. Scroll-spy via Lenis listener.
- **Mobile:** Glass dropdown below nav, rounded-2xl, same link styling.

### Inputs / Fields (Contact Modal)
- **Style:** Rounded-md (6px), border-glass border, Deep Slate background, Bright Ore text, Body MD typography.
- **Focus:** Border shifts to Signal Indigo, `box-shadow: 0 0 0 1px signal-indigo`.
- **Error:** Text in error red (#ffb4ab), border unchanged.

### Signature: Magnetic Buttons
Magnetic hover interaction via GSAP `quickTo`. On mousemove: element translates 20% toward cursor from center + scales 1.05x. On mouseleave: instant reset to 0,0, scale 1. The effect uses `gsap.quickTo(x, {duration: 0.3, ease: 'power2.out'})` to prevent multiple tweens from stacking.

### Signature: Aurora Shader
WebGL fragment shader rendering animated light beams behind the hero section. Vertically fading rays, rotating through green/purple/red/white phases. Opacity 0.8, z-index behind content. Never used outside the hero — it's the hero's signature, not a global decoration.

## 6. Do's and Don'ts

### Do:
- **Do** use Signal Indigo (#c0c1ff) on ≤10% of any screen. One primary button, one nav highlight, one accent dot at a time.
- **Do** use glass panels (.glass-panel) for all major content containers — cards, nav, modals, info panels.
- **Do** pair every glass panel with a 1px border-glass border and 12px backdrop-blur. The border is structural; without it, glass panels dissolve into the background.
- **Do** use Label Caps typography for all navigation, buttons, and metadata (ROLE/TECH). Body typography for descriptions only.
- **Do** use Code Tag typography exclusively for system labels (SYS.*, ARSN-xx), tech stacks, and dates.
- **Do** use GSAP ScrollTrigger with `start: 'top 85%'` for section reveals. Content must be visible by default; the reveal enhances, it doesn't gate.

### Don't:
- **Don't** use box-shadow on cards, buttons, or text containers. The nav bar is the only element with a glow.
- **Don't** use gradient text (`background-clip: text`). Solid Signal Indigo or Bright Ore only.
- **Don't** use bounce or elastic easing curves. The system uses exponential ease-out (power2.out, power3.out) exclusively.
- **Don't** add an eyebrow (small all-caps kicker) above every section heading. One status badge in the hero is deliberate; repeating the pattern is template reflex.
- **Don't** use JetBrains Mono for headings, body copy, or navigation. It's for code-tag contexts only.
- **Don't** invent new colors. The palette is closed. If Signal Indigo doesn't work for a role, the answer is Dim Steel or Bright Ore, not a new hex.
- **Don't** ship animations without `@media (prefers-reduced-motion: reduce)`. Every animation has a `0.01ms` fallback (already in globals.css).
- **Don't** look like a template portfolio. Identical card grids, hero-metric layouts, and "About / Work / Contact" monotony are explicitly rejected.
