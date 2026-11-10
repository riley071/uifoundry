import { lazy, createElement } from 'react';
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

const CreativeTemplate = lazy(() => import('./collection/CreativeTemplate'));

const BusinessTemplate = lazy(() => import('./business/BusinessTemplate'));

const PhotoDesign = lazy(() => import('./photographic/PhotoDesign'));

export const designComponents: Record<DesignSlug, ComponentType> = {
  'travel-explorer': TravelExplorer,
  'nordic-living': NordicLiving,
  'haven-real-estate': HavenRealEstate,
  'bake-bloom': BakeBloom,
  'autoparts-pro': AutoPartsPro,
  'layer-poultry': LayerPoultry,
  'car-booking': CarBooking,
  'roofing-pro': RoofingPro,
  'verde-furniture': () => createElement(PhotoDesign, { slug: 'verde-furniture' }),
  'northline-property': () => createElement(PhotoDesign, { slug: 'northline-property' }),
  'meridian-hospital': () => createElement(PhotoDesign, { slug: 'meridian-hospital' }),
  'ignition-motors': () => createElement(PhotoDesign, { slug: 'ignition-motors' }),

  'oakfield-academy': () => createElement(BusinessTemplate, { slug: 'oakfield-academy' }),
  'little-lantern-school': () => createElement(BusinessTemplate, { slug: 'little-lantern-school' }),
  'maison-elan-salon': () => createElement(BusinessTemplate, { slug: 'maison-elan-salon' }),
  'chroma-hair-studio': () => createElement(BusinessTemplate, { slug: 'chroma-hair-studio' }),
  'struct-construction': () => createElement(BusinessTemplate, { slug: 'struct-construction' }),
  'brightside-cleaning': () => createElement(BusinessTemplate, { slug: 'brightside-cleaning' }),
  'good-cut-barbers': () => createElement(BusinessTemplate, { slug: 'good-cut-barbers' }),
  'crumb-and-co': () => createElement(BusinessTemplate, { slug: 'crumb-and-co' }),
  'ember-table': () => createElement(BusinessTemplate, { slug: 'ember-table' }),
  'fieldwork-supply': () => createElement(BusinessTemplate, { slug: 'fieldwork-supply' }),

  'orbit-observatory': () => createElement(CreativeTemplate, { slug: 'orbit-observatory' }),
  'afterhours-festival': () => createElement(CreativeTemplate, { slug: 'afterhours-festival' }),
  'forma-museum': () => createElement(CreativeTemplate, { slug: 'forma-museum' }),
  'sprout-market': () => createElement(CreativeTemplate, { slug: 'sprout-market' }),
  'vault-finance': () => createElement(CreativeTemplate, { slug: 'vault-finance' }),
  'kin-running': () => createElement(CreativeTemplate, { slug: 'kin-running' }),
  'lumen-studio': () => createElement(CreativeTemplate, { slug: 'lumen-studio' }),
  'current-climate': () => createElement(CreativeTemplate, { slug: 'current-climate' }),
  'serein-retreat': () => createElement(CreativeTemplate, { slug: 'serein-retreat' }),
  'nova-developer': () => createElement(CreativeTemplate, { slug: 'nova-developer' }),

};

export function getDesignComponent(slug: string): ComponentType | null {
  return designComponents[slug as DesignSlug] || null;
}
