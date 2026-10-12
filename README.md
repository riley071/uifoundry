# UIFoundry

A curated design-to-code platform for developers and designers.

**Discover. Explore. Build.**

Beautiful website designs, components and animations ready for real projects.

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- React Router DOM

## Getting Started

```bash
cd uifoundry
npm install
npm run dev
```

Open http://localhost:5173

## Live Preview System

Every design has a live interactive preview:

- **Design Detail page** (`/design/:slug`) shows an embedded live preview with Desktop / Tablet / Mobile controls
- **Full Preview** (`/preview/:slug`) renders the pure design without any UIFoundry chrome (perfect for iframes or full-screen viewing)

### How to add a real design

1. Open `src/designs/YourDesign.tsx`
2. Replace the `DesignSkeleton` with your full implementation
3. That’s it — the preview system will automatically pick it up

### Current Designs (Skeletons ready)

| Slug                | Title              | Status   |
|---------------------|--------------------|----------|
| travel-explorer     | Travel Explorer    | Skeleton |
| nordic-living       | Nordic Living      | Skeleton |
| haven-real-estate   | Haven Real Estate  | Skeleton |
| bake-bloom          | Bake & Bloom       | Skeleton |
| autoparts-pro       | AutoParts Pro      | Skeleton |
| layer-poultry       | Layer Poultry      | Skeleton |
| car-booking         | Car Booking        | Skeleton |
| roofing-pro         | Roofing Pro        | Skeleton |

## Project Structure

```
src/
├── designs/          # Live design components (one file per design)
│   ├── index.ts      # Registry
│   ├── DesignSkeleton.tsx
│   └── *.tsx         # Individual designs
├── data/             # Metadata for the gallery
├── layouts/
├── pages/
│   ├── DesignDetail.tsx  # Shows live preview + tokens + code
│   └── Preview.tsx       # Pure design renderer
└── types/
```

## License

MIT
