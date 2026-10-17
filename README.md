# UIFoundry

A curated design-to-code platform for developers and designers.

**Discover. Explore. Build.**

Browse website designs, explore component and animation catalogs, and preview responsive layouts before adapting them for your projects.

## Features

- Search and filter the design gallery by category, style, and premium status.
- Sort designs by popularity or likes.
- Explore eight implemented website designs with responsive live previews.
- Browse component and Motion Lab catalogs by category and search.
- View design sections, design tokens, code examples, and pricing plans.

This is currently a frontend showcase backed by local catalog data. Some actions, including copying code, saving designs, component and animation demos, and pricing buttons, are placeholders. Framer Motion is referenced in the animation catalog but is not installed.

## Tech Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 3 with PostCSS and Autoprefixer
- React Router DOM 7

## Getting Started

Install Node.js compatible with Vite 6 and npm, then run these commands from the repository root:

```bash
npm install
npm run dev
```

Open the URL printed by Vite, usually http://localhost:5173. No environment variables or backend setup are required. External images require an internet connection.

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start the development server with hot reload. |
| `npm run build` | Build TypeScript projects and generate production files in `dist/`. |
| `npm run preview` | Serve the production build locally after building. |
| `npm run lint` | Run Oxlint. Its executable must be available separately; it is not currently declared as a dependency. |

## Routes

| Route | Page |
|-------|------|
| `/` | Home |
| `/explore` | Design gallery |
| `/design/:slug` | Design details and embedded preview |
| `/preview/:slug` | Standalone design preview |
| `/components` | Component catalog |
| `/motion` | Motion Lab |
| `/pricing` | Pricing plans |

The app uses `BrowserRouter`. Configure production hosting to serve `index.html` for application routes so direct links and page refreshes work.

## Live Preview System

Every design has a live interactive preview:

- **Design Detail page** (`/design/:slug`) shows an embedded live preview with Desktop / Tablet / Mobile controls
- **Full Preview** (`/preview/:slug`) renders the pure design without any UIFoundry chrome (perfect for iframes or full-screen viewing)

The detail page embeds the standalone preview in an iframe. Viewport controls use the full available width for desktop, 768px for tablet, and 375px for mobile.

### Update an existing design

Edit its component in `src/designs/`. The registered preview automatically uses the updated implementation.

### Add a new design

1. Create `src/designs/YourDesign.tsx` and default-export a React component. Use `DesignSkeleton.tsx` as a starting point if helpful.
2. Add the slug to the `DesignSlug` union in `src/types/index.ts`.
3. Import the component and register its slug in `designComponents` in `src/designs/index.ts`.
4. Add a matching `Design` entry in `src/data/designs.ts`. Update the category and style lists there if needed.
5. Check `/design/your-slug` and `/preview/your-slug`, including tablet and mobile previews.

### Current Designs

All eight designs have implementations. `DesignSkeleton.tsx` remains available for future designs.

| Slug                | Title              | Status   |
|---------------------|--------------------|----------|
| travel-explorer     | Travel Explorer    | Implemented |
| nordic-living       | Nordic Living      | Implemented |
| haven-real-estate   | Haven Real Estate  | Implemented |
| bake-bloom          | Bake & Bloom       | Implemented |
| autoparts-pro       | AutoParts Pro      | Implemented |
| layer-poultry       | Layer Poultry      | Implemented |
| car-booking         | Car Booking        | Implemented |
| roofing-pro         | Roofing Pro        | Implemented |

## Project Structure

```
src/
├── designs/          # Live design components (one file per design)
│   ├── index.ts      # Registry
│   ├── DesignSkeleton.tsx
│   └── *.tsx         # Individual designs
├── data/             # Metadata for the gallery
├── assets/           # Bundled images and assets
├── layouts/          # Shared navigation, footer, and main layout
├── pages/
│   ├── DesignDetail.tsx  # Shows live preview + tokens + code
│   ├── Preview.tsx       # Pure design renderer
│   └── *.tsx             # Home, Explore, Components, MotionLab, Pricing
├── types/            # Shared interfaces and design slug types
├── App.tsx           # Application routes
├── index.css         # Global styles and Tailwind layers
└── main.tsx          # React entry point
```

## License

MIT
