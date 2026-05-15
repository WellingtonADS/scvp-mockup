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
- When creating new pages (e.g. `alertas`, `cursos`, `hub`, `institucional`), keep:
  - strong hero framing,
  - clear filter/action zones,
  - card-based scanning layout,
  - high-contrast CTA.

## 7) Documentation Linking

- For implementation details already documented elsewhere, link instead of duplicating content.
- If external product/design master documents are provided in task attachments, treat them as authoritative for UI and product decisions in that task.
