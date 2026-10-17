import type { ComponentType, LazyExoticComponent } from "react";

export type CategoryId =
  | "heroes"
  | "navigation"
  | "footers"
  | "pricing"
  | "features"
  | "testimonials"
  | "ctas"
  | "forms"
  | "cards"
  | "utilities";

export type ComponentItem = {
  id: string;
  slug: string;
  category: CategoryId;
  title: string;
  description: string;
  tags: string[];
  isPremium: boolean;
  component: LazyExoticComponent<ComponentType>;
  source: () => Promise<string>;
  frame: { height: number; defaultBg: "light" | "dark"; scrollable?: boolean };
  dependencies?: string[];
  a11yNotes?: string;
};
