import type { ComponentType } from "react";

export type CategoryId =
  | "heroes"
  | "navbars"
  | "footers"
  | "pricing"
  | "features"
  | "testimonials"
  | "ctas"
  | "forms"
  | "cards"
  | "utilities";

export type FrameConfig = {
  height: number;
  scrollable?: boolean;
  /** Default background for full preview */
  defaultBg: "light" | "dark";
  /** Aspect hint for the scaled canvas */
  aspect?: "wide" | "tall" | "square";
  /** Min height of the live preview area in the catalog card */
  minHeight?: number;
};

export type LibraryEntry = {
  id: string;
  category: CategoryId;
  title: string;
  description: string;
  tags: string[];
  isPremium?: boolean;
  a11yNotes: string;
  frame: Omit<FrameConfig, "height">;
  /** Live React component rendered in PreviewFrame + ComponentScene */
  Component: ComponentType;
  /** Source shown in CodePanel — keep short and honest */
  source: string;
};

export type ComponentItem = Omit<LibraryEntry, "Component" | "source" | "frame"> & {
  component: ComponentType;
  source: () => Promise<string>;
  frame: FrameConfig;
  dependencies?: string[];
};

export type CategoryMeta = {
  id: CategoryId;
  title: string;
  description: string;
};
