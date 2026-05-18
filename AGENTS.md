<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# SCVP Project Definitions (Source of Truth for Agents)

Use this file as the operational guide for coding agents in this repository.

## 1) Product Positioning

- Product: Sou Concurseiro e Vou Passar (SCVP)
- North star: transform study effort into public exam approval with strategic efficiency, authority, and measurable outcomes.
- Core promise: Metodo 80/20, proven authority (16 years), and guided mentorship journey.
- Primary personas:
  - Gen Z candidate: speed, objective flows, social-like UX, low friction.
  - Millennial candidate: trust, authority, and clear path to stability.

## 2) Design System Rules (Mandatory)

All UI work must follow the SCVP visual system from the approved references.

- Core colors:
  - Dark Navy: `#020617` (main background)
  - Teal Deep: `#002D37` (surfaces, sections)
  - Action Cyan: `#00F0FF` (CTA and highlights)
  - Elite Gold: `#F59E0B` (authority/elite badges)
  - Slate Gray: `#94A3B8` (secondary text)
- Surface language:
  - Glass cards with blur and subtle white border.
  - Cyan glow for primary action emphasis.
- Interaction language:
  - CTA hierarchy must be visually explicit.
  - Important numeric value (salary/pricing) gets highest contrast after title.

## 3) UX Laws (Do Not Break)

- Zero Redirection: capture/login flows should prefer modal or drawer over full page redirects.
- Mobile conversion priority: critical CTA must remain easy to reach on small screens.
- Authority visibility: institutional authority elements should remain present on conversion-focused pages.
- Value hierarchy: key objective value must be immediately scannable.

## 4) Codebase Conventions

- Main implementation root is `src/`.
  - Use `src/app` for routes.
  - Use `src/components/ui` for base UI primitives.
  - Use `src/components/layout` for global page chrome.
  - Use `src/components/views` for route-level screens.
  - Use `src/components/views/shared` for reusable view components.
  - Use `src/core` for types, mock data, services, and utilities.
  - Use `src/styles/globals.css` for tokens/utilities.
- Avoid introducing new app structure outside `src/` unless explicitly requested.
- Existing visual utility classes (`glass-card`, `neon-shadow`, `hero-gradient`) are the baseline style primitives.
- Keep `src/app/*/page.tsx` lightweight. Route files should import the corresponding View and server-side data functions, then delegate rendering.
- Put route-level state and composition in `src/components/views/*`; put reusable route building blocks in `src/components/views/shared/*`.
- Keep mock data shapes in `src/core/types.ts`, seed data in `src/core/constants.ts`, data access/filtering in `src/core/services.ts`, and shared helpers in `src/core/utils.ts`.
- Use `@/` imports for source files; the alias maps to `./src/*`.

## 5) Current Stack and Commands

- Framework: Next.js 16 + React 19 + TypeScript
- Styling: Tailwind CSS v4 + shadcn/ui
- Package manager: npm (default unless user asks otherwise)
- Standard commands:
  - `npm run dev`
  - `npm run build`
  - `npm run lint`
  - `npm run start`

## 6) Implementation Guidance for Agents

- Prefer incremental UI changes that preserve SCVP visual identity.
- Reuse components from `src/components/ui`, `src/components/layout`, and `src/components/views/shared` before creating new abstractions.
- Keep copy in Portuguese (pt-BR) for user-facing text.
- Use `"use client"` only for components that need React state, effects, browser APIs, or event-driven interactivity.
- Prefer service functions from `src/core/services.ts` over inline filtering or ad hoc data shaping inside views.
- Do not mutate arrays or objects from `src/core/constants.ts`; derive filtered or mapped copies.
- Use `cn()` from `src/core/utils.ts` for Tailwind class merging instead of manual string concatenation.
- For links styled as buttons, use the existing `Button` `asChild` pattern with `next/link`.
- For capture, lead, login, and detail interactions, prefer `Dialog` or `Drawer` patterns already present in shared components.
- When creating new pages (e.g. `alertas`, `cursos`, `hub`, `institucional`), keep:
  - strong hero framing,
  - clear filter/action zones,
  - card-based scanning layout,
  - high-contrast CTA.

## 7) Architecture Patterns

- Standard route flow: `src/app/[route]/page.tsx` -> `src/components/views/[route]-view.tsx` -> shared components and UI primitives.
- Browse pages can reuse `BrowsePage` and `ConversionPage` from `src/components/views/shared` when they follow the hero + sticky CTA + filter/list pattern.
- Global page chrome belongs in `src/components/layout` (`Navbar`, `Footer`, `PageShell`, `StickyMobileCta`).
- UI primitives in `src/components/ui` should stay generic and variant-driven; domain-specific copy or SCVP business logic belongs in views/shared components.
- Mock API routes live under `src/app/api/scvp/*` and should remain thin `GET` handlers returning `NextResponse.json(...)` from `src/core` data/services.
- Reference examples before adding patterns:
  - `src/app/page.tsx` for lightweight route entry.
  - `src/components/views/home-view.tsx` for client-side coordination.
  - `src/components/views/shared/conversion-page.tsx` and `browse-page.tsx` for reusable page composition.
  - `src/components/ui/button.tsx` for CVA/Radix `asChild` primitive style.

## 8) Framework and Styling Pitfalls

- Next.js 16 is intentionally called out above: check the local docs in `node_modules/next/dist/docs/` before using unfamiliar or recently changed Next APIs.
- Server Components are the default in App Router; add `"use client"` deliberately and keep the client boundary as low as practical.
- Tailwind CSS v4 uses CSS-first imports in `src/styles/globals.css` (`@import "tailwindcss"`, `@theme inline`). Do not replace these with older `@tailwind` directives.
- Preserve SCVP tokens and utilities in `src/styles/globals.css`; avoid one-off color systems that drift from the approved palette.
- shadcn/Radix primitives are already available. Prefer existing primitives and lucide-react icons before introducing new UI dependencies.

## 9) Validation Expectations

- For code changes, run `npm run lint` and `npm run build` before claiming completion when feasible.
- For UI changes, manually inspect the affected route and also check mobile behavior, especially sticky CTA and modal/drawer flows.
- For documentation-only customization updates, a diff review is enough unless code or config was changed.

## 10) Documentation Linking

- For implementation details already documented elsewhere, link instead of duplicating content.
- If external product/design master documents are provided in task attachments, treat them as authoritative for UI and product decisions in that task.
- Use `README.md` for setup, scripts, route inventory, and repository structure instead of duplicating those sections here.
