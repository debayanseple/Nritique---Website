# Repository Guidelines

## Project Structure & Module Organization

This is a TanStack Start, React, and Vite site for Nritya Dance Academy. Application code lives in `src/`:

- `src/routes/` contains file-based routes; `__root.tsx` is the application shell and `index.tsx` serves `/`.
- `src/components/` holds page sections, with reusable primitives in `src/components/ui/` and dialogs in `src/components/modals/`.
- `src/lib/` contains shared helpers, error handling, configuration, and server functions in `src/lib/api/*.functions.ts`.
- A `.server.ts` suffix (e.g. `src/lib/config.server.ts`) marks a module as server-only; Vite never bundles it into the client. Read `process.env` inside handlers/functions, never at module scope — on Cloudflare Workers module-scope reads resolve to `undefined`.
- ESLint forbids the Next.js `server-only` package (see `eslint.config.js`). Use `.server.ts` or the `@tanstack/react-start/server-only` marker instead.
- Server logic lives in `src/lib/api/*.functions.ts` via `createServerFn({ method: "POST" })` with `.validator()` (or `.inputValidator()`) and validate inputs with Zod.
- `vite.config.ts` overrides TanStack Start's default server entry to `src/server.ts` (`tanstackStart: { server: { entry: "server" } }`). That entry wraps SSR with its own error rendering; the underlying h3/nitro server swallows handler throws into a generic 500 JSON body, so `server.ts` recovers the original error out-of-band via `src/lib/error-capture.ts`. Keep this wrapper intact.
- `public/images/` contains static images. Keep asset names descriptive (for example, `workshops/abhinaya-intensive.png`).

Do not edit `src/routeTree.gen.ts`; it is generated from routes. See `src/routes/README.md` before adding routes, especially dynamic segments such as `$id.tsx`.

## Content & Data Sources

- Workshop listings are fetched client-side from public Google Sheets via `gviz/tq?tqx=out:csv` (no auth, CORS-enabled). Hardcoded sheet IDs live in `src/lib/api/workshops.functions.ts`. Rows are matched by header name (case-insensitive) via the `col()` helper: `Cover Photo`, `Status?`, `Seats left`, `Price (INR)`, `Registration link`, `Workshop title`. Renaming a sheet header silently breaks the map (status becomes empty, so workshops drop out). Drive links in `Cover Photo` are converted to `drive.google.com/thumbnail?...` URLs.
- Despite the `.functions.ts` suffix, `fetchLiveWorkshops` is a plain async function that runs in the browser (used as a react-query `queryFn`), not a `createServerFn`. Only `submitRegistration` in `register.functions.ts` is a real server function.
- Registrations/enquiries (`submitRegistration`, `createServerFn` POST) post to a Google Apps Script Web App whose URL is `GOOGLE_SCRIPT_URL` (set in `.env`); without it the handler simulates success so dev works offline. `google-apps-script.js` at the repo root is the standalone Apps Script to paste into Google Sheets (Extensions > Apps Script) — it is not part of the app build and is not bundled anywhere.

## Build, Test, and Development Commands

- `npm ci` installs the lockfile-pinned dependencies. Use npm, not bun — both `package-lock.json` and `bun.lock` exist; keep them in sync only if bun is introduced intentionally. `bunfig.toml` blocks packages newer than 24h (supply-chain guard) unless explicitly bypassed.
- `npm run dev` starts the local Vite development server.
- `npm run build:dev` builds with `vite build --mode development` (skips the `copy-functions.js` step).
- `npm run lint` checks TypeScript/React code with ESLint and Prettier rules.
- `npm run format` formats supported files with Prettier.
- Verification order: `npm run lint` then `npm run build` (no test suite exists).
- `npm run build` runs `vite build && node copy-functions.js`. The `copy-functions.js` step is part of the build (runs last) and copies `.netlify/functions-internal/server` to `netlify/functions/server`. Do not skip it on Netlify deploys — the published functions directory is generated.
- `npm run preview` serves the built output locally.

There is no automated test suite configured currently. At minimum, run `npm run lint` and `npm run build`.

## Coding Style & Naming Conventions

Use TypeScript and functional React components. Follow Prettier’s output (two-space indentation, double quotes, trailing commas) rather than hand-formatting. Use PascalCase filenames and exports for components (`WorkshopRegisterModal.tsx`), camelCase for utilities, and `*.functions.ts` for server functions. Prefer the `@/` alias for imports from `src/`. Keep route files small by moving reusable UI into `components/` and validate server inputs with Zod.

## Configuration & Security

Local secrets belong in untracked `.env` files. `GOOGLE_SCRIPT_URL` enables registration submission; without it, development submissions are simulated. Never commit credentials or expose server-only values in client code. Preserve the Vite configuration’s note: its bundled plugins must not be added again manually.

Deployment is dual-targeted: `netlify.toml` builds from `dist` and serves server functions from `netlify/functions`, while `vite.config.ts` sets `nitro.preset = "vercel"` (`.server.ts` modules and handler bodies are bundled into the nitro/server entry, not the client bundle).

## Commit & Pull Request Guidelines

Recent history uses short, imperative subjects, often Conventional Commit prefixes such as `feat:` and `fix:`. Use that pattern where appropriate: `feat: add workshop schedule` or `fix: validate registration phone`. Keep commits focused. Pull requests should summarize the user-visible change, link the relevant issue when available, list checks run, and include screenshots for visual or responsive changes.
