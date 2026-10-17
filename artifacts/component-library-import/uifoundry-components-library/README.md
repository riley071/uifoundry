# UIFoundry components-library

Copy this folder to `src/components-library/` in your deployed UIFoundry repo.

## Expected imports (match your pages)

- `../components-library/registry`
- `../components-library/shared/PreviewFrame`
- `../components-library/shared/CodePanel`
- `../components-library/shared/Tabs`
- `../components-library/shared/ComponentScene`

## Route for full preview

```tsx
<Route path="/components/preview/:id" element={<ComponentPreview />} />
```

## Counts: 9 per category × 10 categories = 90 components

Heroes · Navigation · Footers · Pricing · Features · Testimonials · CTAs · Forms · Cards · Utilities

## Tailwind

Ensure `brand-*`, `font-display` (Syne), `font-sans` / `font-catalog` (DM Sans), `shadow-card`, `shadow-card-hover` exist.
