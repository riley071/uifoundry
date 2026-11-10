export interface Design {
  id: string;
  title: string;
  slug: string;
  category: string;
  style: string[];
  description: string;
  previewImage: string;
  isPremium: boolean;
  updatedAt: string;
  tags: string[];
}

export interface ComponentItem {
  id: string;
  title: string;
  category: string;
  description: string;
  previewImage: string;
  isPremium: boolean;
}

export interface AnimationItem {
  id: string;
  title: string;
  category: string;
  description: string;
  previewImage: string;
}

export type DesignSlug =
  | 'travel-explorer'
  | 'nordic-living'
  | 'haven-real-estate'
  | 'bake-bloom'
  | 'autoparts-pro'
  | 'layer-poultry'
  | 'car-booking'
  | 'roofing-pro'
  | 'orbit-observatory'
  | 'afterhours-festival'
  | 'forma-museum'
  | 'sprout-market'
  | 'vault-finance'
  | 'kin-running'
  | 'lumen-studio'
  | 'current-climate'
  | 'serein-retreat'
  | 'nova-developer'
  | 'oakfield-academy'
  | 'little-lantern-school'
  | 'maison-elan-salon'
  | 'chroma-hair-studio'
  | 'struct-construction'
  | 'brightside-cleaning'
  | 'good-cut-barbers'
  | 'crumb-and-co'
  | 'ember-table'
  | 'fieldwork-supply'
  | 'verde-furniture'
  | 'northline-property'
  | 'meridian-hospital'
  | 'ignition-motors';
