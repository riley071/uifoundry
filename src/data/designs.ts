import { newPhotoProfiles, photosFor } from '../designs/photographic/profiles';
import { businessThemes } from '../designs/business/data';
import { templateThemes } from '../designs/collection/themes';
import type { Design } from '../types';

export const designs: Design[] = [
  ...newPhotoProfiles.map((profile, index) => ({
    id: `photo-${index + 1}`, title: profile.name, slug: profile.slug, category: profile.category,
    style: ['Editorial', 'Luxury'], description: profile.description, previewImage: photosFor(profile.slug)[0],
    isPremium: false, updatedAt: 'New', tags: [profile.category, 'Photographic', 'Interactive'],
  })),
  ...businessThemes.map((theme, index) => ({
    id: `business-${index + 1}`,
    title: theme.name,
    slug: theme.slug,
    category: theme.category,
    style: ['Editorial', ...(['restaurant','color-studio','construction'].includes(theme.kind) ? ['Bold'] : ['Soft'])],
    description: theme.description,
    previewImage: `/business/${theme.slug}.svg`,
    isPremium: false,
    updatedAt: 'New',
    tags: [theme.category, 'Business Collection', 'Interactive', theme.kind],
  })),
  {
    id: '1',
    title: 'Atlas',
    slug: 'travel-explorer',
    category: 'Travel',
    style: ['Editorial', 'Soft'],
    description: 'Independent travel routes — journal-led, large type, muted earth palette. Side streets over checklists.',
    previewImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
    isPremium: true,


    updatedAt: 'Refreshed',
    tags: ['Travel', 'Editorial', 'Itinerary'],
  },
  {
    id: '2',
    title: 'Fjord',
    slug: 'nordic-living',
    category: 'Furniture',
    style: ['Minimal', 'Soft'],
    description: 'Scandinavian furniture house — stone palette, material honesty, quiet product photography.',
    previewImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
    isPremium: true,


    updatedAt: 'Refreshed',
    tags: ['Furniture', 'Minimal', 'Materials'],
  },
  {
    id: '3',
    title: 'Haven',
    slug: 'haven-real-estate',
    category: 'Real Estate',
    style: ['Luxury', 'Dark'],
    description: 'Private property sales — charcoal canvas, restrained gold line, off-market positioning.',
    previewImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    isPremium: true,


    updatedAt: 'Refreshed',
    tags: ['Real Estate', 'Luxury', 'Private'],
  },
  {
    id: '4',
    title: 'Bloom',
    slug: 'bake-bloom',
    category: 'Food',
    style: ['Soft', 'Warm'],
    description: 'Neighbourhood bakery — cream paper, terracotta accent, serif headlines, daily counter.',
    previewImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
    isPremium: false,


    updatedAt: 'Refreshed',
    tags: ['Bakery', 'Food', 'Local'],
  },
  {
    id: '5',
    title: 'Axle',
    slug: 'autoparts-pro',
    category: 'E-commerce',
    style: ['Dark', 'Bold'],
    description: 'Fitment-first auto parts — VIN lookup, dense catalog, electric blue on near-black.',
    previewImage: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80',
    isPremium: false,


    updatedAt: 'Refreshed',
    tags: ['Auto', 'Parts', 'Commerce'],
  },
  {
    id: '6',
    title: 'Layer',
    slug: 'layer-poultry',
    category: 'Services',
    style: ['Minimal', 'Professional'],
    description: 'Layer farm advisory — welfare, biosecurity, audit-ready records. Trust without the template look.',
    previewImage: 'https://images.unsplash.com/photo-1548550023-2bdb3ff3da1d?w=800&q=80',
    isPremium: true,


    updatedAt: 'Refreshed',
    tags: ['Agriculture', 'Services', 'Welfare'],
  },
  {
    id: '7',
    title: 'Vista',
    slug: 'car-booking',
    category: 'Travel',
    style: ['Dark', 'Luxury', 'Editorial'],
    description: 'Private fleet rental — door delivery, app unlock, photographic dark UI, amber accent.',
    previewImage: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80',
    isPremium: true,


    updatedAt: 'Refreshed',
    tags: ['Car Rental', 'Dark', 'Luxury'],
  },
  {
    id: '8',
    title: 'Ridge',
    slug: 'roofing-pro',
    category: 'Services',
    style: ['Bold', 'Professional'],
    description: 'Roofing trade brand — navy field, safety orange, project proof, written guarantees.',
    previewImage: 'https://images.unsplash.com/photo-1632759145351-1d592919fbb1?w=800&q=80',
    isPremium: false,


    updatedAt: 'Refreshed',
    tags: ['Roofing', 'Trade', 'Construction'],
  },
  ...templateThemes.map((theme, index) => ({
    id: `creative-${index + 1}`,
    title: theme.name,
    slug: theme.slug,
    category: theme.category,
    style: ['Editorial', ...(theme.bg.startsWith('#0') || theme.bg.startsWith('#1') ? ['Dark'] : ['Bold'])],
    description: theme.description,
    previewImage: `/templates/${theme.slug}.svg`,
    isPremium: false,


    updatedAt: 'New',
    tags: [theme.category, 'Interactive', 'Motion', 'Creative Collection'],
  })),
].map(design => ({ ...design, previewImage: photosFor(design.slug)[0] }));

export const categories = [
  'All',
  'Travel',
  'Furniture',
  'Real Estate',
  'E-commerce',
  'Services',
  'Food',
  'Science',
  'Entertainment',
  'Arts & Culture',
  'Finance',
  'Lifestyle',
  'Creative',
  'Technology',
  'Wellness',
  'Education',
  'Beauty',
  'Construction',
  'Cleaning',
  'Healthcare',
  'Automotive',
];

export const styles = [
  'Minimal',
  'Luxury',
  'Bold',
  'Soft',
  'Dark',
  'Editorial',
  'Warm',
  'Professional',
];
