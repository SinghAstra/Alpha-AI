# alphashots

React + Vite + Tailwind CSS project.

## Development Server

Run the Vite development server with `pnpm dev`. It listens on `$PORT` (default 8443).

- Preview URL: `http://localhost:8443`
- Hot reload: Changes to source files are reflected immediately

## Project Structure

This is the canonical project structure. Start with task-relevant files below. Only follow imports or inspect other files when required, when a documented path is missing, or when the repository contradicts this guide.

- `src/main.tsx` - React entrypoint; imports `src/index.css` and mounts `src/app.tsx` into the `#root` element
- `src/app.tsx` - App shell; handles route state, page selection, and shared navigation/footer
- `src/pages/` - Page-level compositions: retail, institutional, pricing, and login
- `src/sections/` - Feature sections grouped by page area (retail, institutional, pricing, auth)
- `src/components/` - Reusable UI pieces such as Icon, Logo, Navbar, Footer, and modals
- `src/components/ui/` - shadcn/ui primitives (Button, Input, Label, Dialog, Accordion)
- `src/lib/utils.ts` - `cn` class merge helper used by shadcn components
- `src/data/` - Static copy and feature data used by sections
- `src/router.ts` - URL path helpers and route parsing
- `src/types.ts` - Shared `Mode` and `View` types
- `src/index.css` - Tailwind CSS v4 import, theme tokens, and base styles
- `components.json` - shadcn/ui configuration
- `index.html` - Vite HTML shell containing the `#root` element and loading `src/main.tsx`
- `package.json` - Project dependencies and the Vite build, development, preview, and formatting scripts
- `vite.config.ts` - Vite configuration with React, Tailwind CSS v4, and the `@` alias for `src`
- `.mise.toml` - Toolchain versions for Node.js and pnpm

## Dependencies

- Runtime: React 19 and React DOM 19
- Styling: Tailwind CSS v4 with the `@tailwindcss/vite` plugin
- UI: shadcn/ui primitives built on Radix UI, with lucide-react icons
- Build tooling: Vite 8, TypeScript 5.7, and `@vitejs/plugin-react`
- Formatting: oxfmt

## Styling

This project uses **Tailwind CSS v4** through the `@tailwindcss/vite` plugin configured in `vite.config.ts`. `src/index.css` imports Tailwind with `@import 'tailwindcss';`, defines the design tokens in `@theme inline`, and keeps only base element styles in `@layer base`. All component and page styling is written as Tailwind utility classes in JSX.

Use the shadcn primitives in `src/components/ui/` for interactive controls, and the `cn` helper from `src/lib/utils.ts` for conditional class merging. Add new primitives with the shadcn CLI or by creating standard shadcn components in that folder. Do not add page-specific CSS classes; extend the theme tokens instead.

`src/main.tsx` imports `src/index.css`, so global font wiring belongs in `src/index.css`. Keep CSS `@import` statements first, then add any `@font-face` rules and font-family defaults there.

Tailwind emits utility classes in `@layer utilities`, and CSS outside any cascade layer overrides every layer regardless of specificity. Put global element styles, such as resets and defaults for `body`, headings, `button`, or `input`, inside `@layer base { ... }` so utility classes on those elements still apply. Tailwind's Preflight already applies `box-sizing: border-box`, removes default margins, and sets `font: inherit` on form controls, so do not repeat those rules.
