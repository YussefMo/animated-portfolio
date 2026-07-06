# Portfolio — Youssef Mohammed Ali

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?style=flat-square&logo=tailwind-css)
![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?style=flat-square&logo=greensock)

A modern portfolio built with Next.js and Tailwind v4, featuring a glassmorphic dark theme, WebGL backgrounds, and GSAP-powered animations.

**[ymdev.me](https://ymdev.me)**

## Tech stack

- **Next.js 16** — App Router, Turbopack
- **React 19** — server components, strict TypeScript
- **Tailwind CSS v4** — CSS-driven config, no `tailwind.config.js`
- **GSAP** — animations, ScrollTrigger reveals, magnetic hovers
- **Lenis** — smooth scrolling synced to GSAP's ticker
- **Firebase Admin** — server actions for projects and contact form
- **Fonts** — Geist, Inter, JetBrains Mono via `next/font/google`
- **React Hook Form + Sonner** — contact form with toast notifications
- **Vercel Analytics & Speed Insights** — performance monitoring

## Getting started

```bash
npm install
npm run dev     # starts Turbopack dev server on http://localhost:3000
```

Environment variables in `.env.local` (Firebase Admin):

```
FIREBASE_PROJECT_ID
FIREBASE_CLIENT_EMAIL
FIREBASE_PRIVATE_KEY
```

## Verification

```bash
npm run lint          # ESLint
npm run type-check    # tsc --noEmit
npm run build         # production build
```

## Project structure

```
app/                           # App Router (layout, page, globals.css)
├── globals.css                # Tailwind v4 @theme tokens, utilities
└── layout.tsx                 # Fonts, metadata, analytics, scroll wrapper

components/
├── components-parts/          # Animated & shared components
│   ├── Navigation.tsx         # Floating pill nav with scroll-spy
│   ├── ContactModal.tsx       # Contact form → Firestore
│   ├── AuroraShader.tsx       # WebGL background shader
│   ├── WarpNet.tsx            # Interactive canvas net
│   ├── SmoothScrolling.tsx    # Lenis + GSAP ticker
│   ├── MagneticButton.tsx     # Magnetic hover CTA
│   ├── SectionReveal.tsx      # GSAP ScrollTrigger wrapper
│   └── ...                    # GlassPanel, SkillModule, ProjectShowcaseCard, etc.
└── sections/                  # Page sections
    ├── HeroSection.tsx        # Matrix — hero with aurora + CTAs
    ├── TrajectorySection.tsx  # Experience timeline
    ├── ArsenalSection.tsx     # Skills grid (expandable)
    ├── ShowcaseSection.tsx    # Projects (Firestore)
    ├── AboutSection.tsx       # Bio + profile
    ├── ServicesSection.tsx    # Expertise cards
    └── FooterSection.tsx      # Socials + copyright

lib/
├── data.ts                    # All static data (bio, skills, experience, socials)
├── portfolioApi.ts            # Server actions (getAllProjects, createContactReq)
├── utils.ts                   # cn() classname merge
└── seed.ts                    # Firestore seed utility

firebase/
└── admin.ts                   # Firebase Admin SDK init

hooks/
└── useOutsideClick.ts         # Click-outside hook

types/
└── index.d.ts                 # Project, ContactFormProps, ExperienceItem, etc.
```

## Design system

The visual style follows an "Elite Engineering Dark" theme — glassmorphism with a deep indigo palette, backdrop blurs, and pill-shaped UI elements.

- **Colors** defined as Tailwind v4 `@theme` tokens in `app/globals.css`
- **Glass panels** via `.glass-panel` utility (`rgba(255,255,255,0.03)` + `blur(12px)` + `border`)
- **Typography** — Geist for headings, Inter for body, JetBrains Mono for code tags
- **Animation** — GSAP stagger reveals, magnetic hover buttons, Lenis smooth scroll

## Data

All static content lives in `lib/data.ts`. Projects are fetched from Firestore via `getAllProjects()`. The `Project` type supports optional `role` and `ctaLabel` fields for the showcase cards.

`stitch_elite_engineering_signature_portfolio/` is a design reference folder. It is not source code.
