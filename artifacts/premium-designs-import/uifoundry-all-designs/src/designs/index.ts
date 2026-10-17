import type { ComponentType } from 'react';
import TravelExplorer from './TravelExplorer';
import NordicLiving from './NordicLiving';
import HavenRealEstate from './HavenRealEstate';
import BakeBloom from './BakeBloom';
import AutoPartsPro from './AutoPartsPro';
import LayerPoultry from './LayerPoultry';
import CarBooking from './CarBooking';
import RoofingPro from './RoofingPro';

export const designComponents: Record<string, ComponentType> = {
  'travel-explorer': TravelExplorer,
  'nordic-living': NordicLiving,
  'haven-real-estate': HavenRealEstate,
  'bake-bloom': BakeBloom,
  'autoparts-pro': AutoPartsPro,
  'layer-poultry': LayerPoultry,
  'car-booking': CarBooking,
  'roofing-pro': RoofingPro,
};
