# finvestigativeai

A polished marketing landing page for an AI-assisted financial investigation platform. The site presents the product as a rigorous research workspace for connecting entities, searching source material, mapping relationships, and preserving evidence trails.

## Technology

- TanStack Start and TanStack Router
- React 19 and TypeScript
- Tailwind CSS 4 with a custom global design system
- Lucide React icons
- Vite and Netlify deployment tooling

## Local development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

The production build is created with `npm run build` and is configured for Netlify in `netlify.toml`.

## Project structure

- `src/routes/index.tsx` contains the complete landing page and its content.
- `src/routes/__root.tsx` defines the document shell and page metadata.
- `src/styles.css` contains the responsive visual system, motion, and component styling.
- `public/` contains static browser assets.
