import { lazy } from "react";
import type { CategoryId, ComponentItem } from "./types";

export const categories: { id: CategoryId; title: string }[] = [
  { id: "heroes", title: "Heroes" },
  { id: "navigation", title: "Navigation" },
  { id: "footers", title: "Footers" },
  { id: "pricing", title: "Pricing" },
  { id: "features", title: "Features" },
  { id: "testimonials", title: "Testimonials" },
  { id: "ctas", title: "CTAs" },
  { id: "forms", title: "Forms" },
  { id: "cards", title: "Cards" },
  { id: "utilities", title: "Loaders and utilities" },
];

// Import category entry points so each category can grow as a separate chunk.
// Raw source is fetched only when someone opens the code panel.
export const componentRegistry: ComponentItem[] = [
  {
    id: "hero-split-product",
    slug: "split-product",
    category: "heroes",
    title: "Split product hero",
    description: "A product introduction with two actions and a device mockup for teams launching a focused digital product.",
    tags: ["product", "split", "device", "launch"],
    isPremium: false,
    component: lazy(() => import("./heroes").then((module) => ({ default: module.SplitProduct }))),
    source: () => import("./heroes/SplitProduct.tsx?raw").then((module) => module.default),
    frame: { height: 800, defaultBg: "light" },
    dependencies: [],
    a11yNotes: "The workspace link stays in the preview. The unconnected signup action is disabled. The device is HTML and CSS, with no external images.",
  },
  {
    id: "navigation-sticky-glass",
    slug: "sticky-glass",
    category: "navigation",
    title: "Sticky glass navigation",
    description: "A transparent header that turns solid on scroll, with a contained mobile drawer for studio and portfolio pages.",
    tags: ["navbar", "sticky", "glass", "drawer", "studio"],
    isPremium: true,
    component: lazy(() => import("./navigation").then((module) => ({ default: module.StickyGlass }))),
    source: () => import("./navigation/StickyGlass.tsx?raw").then((module) => module.default),
    frame: { height: 600, defaultBg: "dark", scrollable: true },
    dependencies: [],
    a11yNotes: "Scroll inside the preview to change the header. Menu uses a native modal dialog: Escape closes it and focus returns to Menu. Contact remains disabled.",
  },
];

export function getComponentItem(id: string) {
  return componentRegistry.find((item) => item.id === id);
}

export function getCategoryCounts() {
  return Object.fromEntries(categories.map((category) => [category.id, componentRegistry.filter((item) => item.category === category.id).length])) as Record<CategoryId, number>;
}

export function filterComponents(category: string, query: string) {
  const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  return componentRegistry.filter((item) => {
    const text = `${item.title} ${item.description} ${item.tags.join(" ")}`.toLowerCase();
    return (category === "all" || item.category === category) && words.every((word) => text.includes(word));
  });
}
