# Copilot Instructions for SCVP

Use [AGENTS.md](../AGENTS.md) as the source of truth for product positioning, UX laws, design system, architecture boundaries, and validation expectations. Use [README.md](../README.md) for setup, scripts, route inventory, and project structure.

## Project Context

- Product: Sou Concurseiro e Vou Passar (SCVP), a public-exam preparation mockup focused on conversion, authority, and strategic study efficiency.
- Stack: Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, shadcn/ui, Radix UI, lucide-react, npm.
- Main app root: `src/`.
- User-facing copy must stay in Portuguese (pt-BR).

## Before Changing Code

1. Check whether the change belongs in a route, view, shared view component, UI primitive, layout component, or `src/core`.
2. Reuse existing components from `src/components/ui`, `src/components/layout`, and `src/components/views/shared` before adding abstractions.
3. Check `src/core/types.ts`, `src/core/constants.ts`, and `src/core/services.ts` before introducing data shapes, mock data, or filtering logic.
4. For unfamiliar Next.js APIs, read the relevant local guide in `node_modules/next/dist/docs/` because this project uses Next.js 16.

## Architecture Rules

- Keep `src/app/*/page.tsx` lightweight; route files should delegate to View components and service functions.
- Put route-level UI/state composition in `src/components/views/*`.
- Put reusable route building blocks in `src/components/views/shared/*`.
- Keep generic primitives in `src/components/ui/*`; avoid SCVP-specific business logic there.
- Keep global chrome in `src/components/layout/*`.
- Keep types, seed data, services, and utilities in `src/core/*`.
- Mock API routes under `src/app/api/scvp/*` should remain thin `GET` handlers returning `NextResponse.json(...)`.

## UI and UX Rules

- Preserve the SCVP palette and visual language from [AGENTS.md](../AGENTS.md): Dark Navy, Teal Deep, Action Cyan, Elite Gold, Slate Gray, glass surfaces, cyan CTA emphasis.
- Conversion and capture flows should prefer modal or drawer interactions over full-page redirects.
- Critical CTAs must remain easy to reach on mobile, usually through the existing sticky CTA pattern.
- Use existing utilities such as `cta-cyan`, `glass-card`, `neon-shadow`, `hero-gradient`, `section-shell`, `section-kicker`, and `section-title` from `src/styles/globals.css`.
- Use lucide-react icons when icons are needed.
- For date fields or calendar UI, prefer popover/dialog patterns rather than inline calendars.

## Implementation Patterns

- Use `"use client"` only for components that need state, effects, browser APIs, or event handlers.
- Use `@/` imports for source files.
- Use `cn()` from `src/core/utils.ts` for Tailwind class merging.
- Use the existing `Button` `asChild` pattern with `next/link` for link buttons.
- Do not mutate mock data from `src/core/constants.ts`; derive filtered or mapped copies.
- Add or update filter/data-access functions in `src/core/services.ts` instead of placing ad hoc filtering inside page routes.

## Styling and Framework Gotchas

- Tailwind CSS v4 uses CSS-first imports in `src/styles/globals.css`; do not replace `@import "tailwindcss"` and `@theme inline` with older `@tailwind` directives.
- Server Components are the default in the App Router; keep client boundaries intentional and small.
- Prefer existing shadcn/Radix primitives before adding dependencies.
- Keep cards, dialogs, drawers, filter panels, and browse pages consistent with existing examples in `src/components/views/shared`.

## Validation

- For code changes, run `npm run lint` and `npm run build` when feasible before reporting completion.
- For UI changes, inspect the affected route on desktop and mobile, including sticky CTA behavior and modal/drawer flows.
- For documentation-only customization updates, review the diff for correctness and broken links.
