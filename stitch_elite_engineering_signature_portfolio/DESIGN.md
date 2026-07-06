---
name: Elite Engineering Dark
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#c7c5d0'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#918f9a'
  outline-variant: '#46464f'
  surface-tint: '#c0c1ff'
  primary: '#e1dfff'
  on-primary: '#292b5e'
  primary-container: '#c0c1ff'
  on-primary-container: '#4b4d83'
  inverse-primary: '#585990'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#ffdcc5'
  on-tertiary: '#4f2500'
  tertiary-container: '#ffb783'
  on-tertiary-container: '#79461c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#131449'
  on-primary-fixed-variant: '#404176'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb783'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#6b3a11'
  background: '#030303'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
  surface-glass: rgba(255, 255, 255, 0.03)
  border-glass: rgba(255, 255, 255, 0.08)
  indigo-glow: rgba(99, 102, 241, 0.15)
  text-primary: '#F8FAFC'
  text-secondary: '#94A3B8'
typography:
  display-hero:
    fontFamily: Geist
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  code-tag:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  section-padding: 120px
  gutter: 24px
  margin-mobile: 20px
  glass-padding: 32px
---

## Brand & Style
The brand identity is centered around "Elite Engineering"—conveying precision, technical mastery, and a forward-thinking developer aesthetic. The target audience includes high-end tech recruiters, collaborators, and engineering leads who value clean architecture and refined aesthetics.

The visual style is a sophisticated blend of **Glassmorphism** and **Minimalism**. It utilizes a deep indigo and slate palette with high-contrast primary accents to create a "command center" feel. The interface feels immersive and fluid, characterized by interactive shaders, backdrop blurs, and subtle motion (staggered reveals and magnetic hovers) that suggest a high-performance, well-engineered product.

## Colors
The palette is built on a "True Dark" foundation (`#030303`) to allow glass layers and glows to pop. 
- **Primary:** A bright, desaturated lavender (`#c0c1ff`) used for high-visibility actions and headline accents.
- **Secondary:** A vibrant violet (`#8b5cf6`) primarily used in background gradients and interactive states.
- **Surface Strategy:** Instead of solid grays, the system uses "Glass Panels"—semi-transparent white overlays with heavy backdrop blurs (`blur-12px`) to create depth without losing the background animation.
- **Accents:** Tertiary orange is used sparingly for category tagging (AI/EdTech), while indigo glows provide a soft, atmospheric lighting effect around cards and navigation.

## Typography
The system uses **Geist** for all display and labeling tasks to lean into the "technical/developer" brand. Its high-contrast geometry works well for massive hero text. **Inter** is used for body copy to ensure maximum legibility and a neutral, utilitarian feel in longer descriptions.

Key rules:
- **Tight Leading:** Headlines use tight line-heights (1.1 to 1.3) to feel punchy and modern.
- **Letter Spacing:** Negative tracking is applied to hero text to increase visual impact, while positive tracking is used on all-caps labels for readability.
- **Hierarchy:** Primary information uses `#F8FAFC`, while secondary information and metadata use `#94A3B8`.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy centered within a 1280px container. 

- **Vertical Rhythm:** Generous section padding (120px) ensures that each content block feels intentional and distinct. 
- **The "Floating" Nav:** The primary navigation is a pill-shaped floating bar, detached from the top edge, reinforcing the "object-oriented" glassmorphic feel.
- **Responsiveness:** At mobile widths, the horizontal margins shrink to 20px, and section padding reduces. Content primarily flows in a single-column stack, with images typically appearing above text to establish visual context immediately.

## Elevation & Depth
Depth is created through transparency and optical effects rather than traditional drop shadows.

- **The Backdrop:** A WebGL shader provides a dynamic, low-frequency movement that sits behind all layers.
- **Glassmorphism:** Components (Nav, Cards, Buttons) use `rgba(255, 255, 255, 0.03)` with a `12px` blur and a thin `1px` border (`rgba(255, 255, 255, 0.08)`). This creates a "frosted" look that separates the content from the background noise.
- **Luminance:** Key elements (the profile photo, primary buttons) use an `indigo-glow` (low-opacity indigo shadow) to suggest they are light-emitting objects within the dark environment.

## Shapes
The shape language uses a "progressive rounding" strategy:
- **Standard Cards/Panels:** Use `rounded-xl` (approx. 12px-24px) to feel soft and modern.
- **Interactive Triggers:** Buttons and the navigation bar are "Full" (Pill-shaped) to clearly distinguish them as clickable UI elements.
- **Images:** Profile photos are perfectly circular (`rounded-full`) to contrast against the rectangular grid of the project cards.

## Components
- **Primary Button:** Pill-shaped, solid `#c0c1ff` background with dark navy text. Features a "magnetic" hover effect (slight scale up).
- **Glass Button:** Transparent with a white border and backdrop blur. Used for secondary actions (e.g., "Explore Work").
- **Chips / Tags:** 
    - *Category Chips:* Pill-shaped, border-only, using `label-caps` typography.
    - *Tech Tags:* Small, rectangular `rounded-md` blocks with a subtle `surface-container` background and monospaced font.
- **Project Cards:** Large glass panels with inner `8px` padding around images. Hovering should scale the internal image slightly to create a "looking through glass" effect.
- **Navigation:** A floating, pill-shaped glass container with a subtle indigo glow and blurred background.