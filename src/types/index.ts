export interface Design {
  id: string;
  title: string;
  slug: string;
  category: string;
  style: string[];
  description: string;
  previewImage: string;
  isPremium: boolean;
  likes: number;
  views: number;
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
  | 'roofing-pro';
