import { componentRegistry } from '../../components-library/registry';
import { effects } from '../../effects/catalog';
import { motionDemos } from '../../motion-native/demos';
import { templateThemes } from './themes';

/** Every library entry is assigned to a live template, without dropping any entries. */
export const templateLibraries = templateThemes.map((theme, index) => ({
  slug: theme.slug,
  sections: componentRegistry.filter(item => item.category === theme.ui),
  effects: effects.filter((_item, i) => i % templateThemes.length === index),
  motion: motionDemos.filter((_item, i) => i % templateThemes.length === index),
}));
