# Loome (React + Vite + TypeScript)

A small e-commerce starter built with React, TypeScript, Vite, Tailwind CSS and shadcn-ui. Includes a cart context, responsive navbar and simple product pages.

## Tech stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn-ui
- lucide-react (icons)
- npm

## Live - https://loome-sooty.vercel.app/

## Quick start

Prerequisite: Node.js and npm installed.

1. Clone the repo:

2. Install dependencies:

3. Run dev server:

4. Open the URL shown in the terminal (usually `http://localhost:5173`).

## Scripts

- `npm run dev` — start dev server with hot reload  
- `npm run build` — create production build in `dist`  
- `npm run preview` — preview the production build locally  
- `npm test` — run tests (if configured)

## Project structure (important files)

- `src/` — application source  
- `src/components/` — UI components (e.g. `Navbar.tsx`)  
- `src/contexts/` — React contexts (e.g. `CartContext`)  
- `src/assets/` — images and static assets  
- `vite.config.ts` — Vite config and aliases  
- `tsconfig.json` — TypeScript config and path mappings

## Aliases and image imports

If you use the `@` alias in imports, ensure `vite.config.ts` and `tsconfig.json` both map `@` to `src`. Example `vite.config.ts`:
```ts
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});

5. {
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["src/*"] }
  },
  "include": ["src"]
}

