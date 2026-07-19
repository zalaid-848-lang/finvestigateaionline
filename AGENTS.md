# AGENTS.md

## Project overview

This repository contains the finvestigativeai marketing site, a single-page landing experience for an AI financial investigation platform. It uses an editorial, evidence-led visual language built from warm beige, charcoal, grey, and a restrained rust accent.

## Architecture

- `src/routes/__root.tsx` defines the HTML document, global metadata, and shared stylesheet import.
- `src/routes/index.tsx` contains the home route, semantic page sections, reusable wordmark, and evidence graph illustration.
- `src/styles.css` is the main design system and includes tokens, layouts, responsive rules, animations, and interaction states.
- `src/router.tsx` initializes TanStack Router from its generated route tree.
- `public/` holds static assets such as the favicon.
- `netlify.toml` contains the Netlify build and deployment configuration.

## Coding conventions

- Use TypeScript and functional React components.
- Keep route files in `src/routes/` and follow TanStack Router file-based routing conventions.
- Prefer semantic HTML and preserve keyboard-visible, reduced-motion, and responsive behavior.
- Use CSS variables from `src/styles.css` instead of introducing isolated color values when a token already exists.
- Use Lucide icons rather than emoji or text symbols for interface iconography.
- Keep product copy specific, restrained, and focused on verifiable financial research.

## Design decisions

The landing page intentionally avoids a generic fintech dashboard aesthetic. Serif display typography, monospaced labels, document motifs, graph nodes, and visible evidence references create the tone of an investigative newsroom and research terminal. The relationship map and source document are implemented with HTML, CSS, and inline SVG so the experience remains sharp, responsive, and asset-light.

## Commands

- `npm run dev` starts the local Vite development server.
- `npm run build` creates the production build.
