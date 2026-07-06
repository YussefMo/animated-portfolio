# Agent Notes

## Verification order
Run checks in this order before finishing:

```bash
npm run lint
npm run type-check
npm run build
```

There are no tests. `npm run dev` starts the Turbopack dev server on `http://localhost:3000`.

## Architecture

- Next.js 16 App Router, React 19, TypeScript strict.
- Tailwind CSS v4 is configured **entirely in CSS** (`app/globals.css` via `@theme`). There is no `tailwind.config.js`.
- Path alias `@/*` maps to `./*`.
- `components/components-parts/` — shared and animated components (buttons, cards, nav, modals, backgrounds, cursor, loader).
- `components/sections/` — page sections (Hero, Trajectory, Arsenal, Showcase, About, Services, Footer).
- `lib/data.ts` — single source of truth for all static portfolio data (bio, experience, skills, services, socials).
- `lib/portfolioApi.ts` — server actions that talk to Firebase Admin. Do not import this into client components.

## Animations

- GSAP is used for all animations (no Framer Motion).
- `ScrollTrigger` is registered inside components that need scroll reveals.
- Lenis powers smooth scrolling. `components/components-parts/SmoothScrolling.tsx` syncs Lenis to GSAP's ticker and exposes the Lenis instance via `useLenisContext()`.

## Firebase / backend

- Uses Firebase Admin SDK (`firebase/admin.ts`), not the client SDK.
- Required env vars in `.env.local`:
  - `FIREBASE_PROJECT_ID`
  - `FIREBASE_CLIENT_EMAIL`
  - `FIREBASE_PRIVATE_KEY`
- Server actions:
  - `getAllProjects()` — reads `projects` collection.
  - `createContactReq(data)` — writes to `messages` collection.
- `lib/seed.ts` contains a server-only helper to seed Firestore. It is not wired to the UI; run it manually.

## Images

- Next.js Image component is used.
- Only `res.cloudinary.com` is allowed in `next.config.ts`. Add new hosts there if project images change.

## Styling conventions

- Material Symbols Outlined are loaded from Google Fonts in `app/layout.tsx`. Use `<span className="material-symbols-outlined">icon_name</span>`.
- Fonts: Geist (display), Inter (body), JetBrains Mono (code) via `next/font/google`.
- Prettier: `singleQuote: true`, `printWidth: 80`, `trailingComma: none`.

## Common pitfalls

- Do not add `tailwind.config.js`; Tailwind v4 expects config in CSS.
- Keep `lib/portfolioApi.ts` server-only. Importing it into a client component will crash the build.
- The `Project` type has optional `role` and `ctaLabel`. Existing Firestore docs may lack these; the UI falls back gracefully.
- `stitch_elite_engineering_signature_portfolio/` is a design reference, not source code.
