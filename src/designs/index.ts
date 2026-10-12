import type { ComponentType } from 'react';
import type { DesignSlug } from '../types';
import TravelExplorer from './TravelExplorer';
import NordicLiving from './NordicLiving';
import HavenRealEstate from './HavenRealEstate';
import BakeBloom from './BakeBloom';
import AutoPartsPro from './AutoPartsPro';
import LayerPoultry from './LayerPoultry';
import CarBooking from './CarBooking';
import RoofingPro from './RoofingPro';

export const designComponents: Record<DesignSlug, ComponentType> = {
  'travel-explorer': TravelExplorer,
  'nordic-living': NordicLiving,
  'haven-real-estate': HavenRealEstate,
  'bake-bloom': BakeBloom,
  'autoparts-pro': AutoPartsPro,
  'layer-poultry': LayerPoultry,
  'car-booking': CarBooking,
  'roofing-pro': RoofingPro,
};

export function getDesignComponent(slug: string): ComponentType | null {
  return designComponents[slug as DesignSlug] || null;
}
