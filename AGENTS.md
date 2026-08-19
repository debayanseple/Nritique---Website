# Repository Guidelines

## Project Structure & Module Organization

This is a TanStack Start, React, and Vite site for Nritya Dance Academy. Application code lives in `src/`:

- `src/routes/` contains file-based routes; `__root.tsx` is the application shell and `index.tsx` serves `/`.
- `src/components/` holds page sections, with reusable primitives in `src/components/ui/` and dialogs in `src/components/modals/`.
- `src/lib/` contains shared helpers, error handling, configuration, and server functions in `src/lib/api/*.functions.ts`.
- A `.server.ts` suffix (e.g. `src/lib/config.server.ts`) marks a module as server-only; Vite never bundles it into the client. Read `process.env` inside handlers/functions, never at module scope — on Cloudflare Workers module-scope reads resolve to `undefined`.
- `public/images/` contains static images. Keep asset names descriptive (for example, `workshops/abhinaya-intensive.png`).

Do not edit `src/routeTree.gen.ts`; it is generated from routes. See `src/routes/README.md` before adding routes, especially dynamic segments such as `$id.tsx`.

## Build, Test, and Development Commands

- `npm ci` installs the lockfile-pinned dependencies. Use npm, not bun — both `package-lock.json` and `bun.lock` exist; keep them in sync only if bun is introduced intentionally. `bunfig.toml` blocks packages newer than 24h (supply-chain guard) unless explicitly bypassed.
- `npm run dev` starts the local Vite development server.
- `npm run lint` checks TypeScript/React code with ESLint and Prettier rules.
- `npm run format` formats supported files with Prettier.
- `npm run build` creates the production Vite build and copies deployment functions.
- `npm run preview` serves the built output locally.

There is no automated test suite configured currently. At minimum, run `npm run lint` and `npm run build`, then manually check affected routes and form flows.

## Coding Style & Naming Conventions

Use TypeScript and functional React components. Follow Prettier’s output (two-space indentation, double quotes, trailing commas) rather than hand-formatting. Use PascalCase filenames and exports for components (`WorkshopRegisterModal.tsx`), camelCase for utilities, and `*.functions.ts` for server functions. Prefer the `@/` alias for imports from `src/`. Keep route files small by moving reusable UI into `components/` and validate server inputs with Zod.

## Configuration & Security

Local secrets belong in untracked `.env` files. `GOOGLE_SCRIPT_URL` enables registration submission; without it, development submissions are simulated. Never commit credentials or expose server-only values in client code. Preserve the Vite configuration’s note: its bundled plugins must not be added again manually.

Deployment is dual-targeted: `netlify.toml` builds from `dist` and serves server functions from `netlify/functions`, while `vite.config.ts` sets `nitro.preset = "vercel"`. `npm run build` finishes by running `copy-functions.js`, which copies the server bundle from `.netlify/functions-internal/server` into `netlify/functions/server` (generated — do not hand-edit).

## Commit & Pull Request Guidelines

Recent history uses short, imperative subjects, often Conventional Commit prefixes such as `feat:` and `fix:`. Use that pattern where appropriate: `feat: add workshop schedule` or `fix: validate registration phone`. Keep commits focused. Pull requests should summarize the user-visible change, link the relevant issue when available, list checks run, and include screenshots for visual or responsive changes.
