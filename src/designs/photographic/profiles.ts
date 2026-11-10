import { businessThemes } from '../business/data';
export const photo = (key: string) => `/photos/${key}.jpg`;
export const templatePhotos: Record<string, string[]> = {
  'travel-explorer': ['travel','kyoto','lisbon','mountain','ocean'],
  'nordic-living': ['living','sofa','bedroom','dining','chair','office'],
  'haven-real-estate': ['villa','home','estate','architecture','living'],
  'bake-bloom': ['cake','croissant','cookies','bread','breakfast','chef'],
  'autoparts-pro': ['garage','tools','car','car-city','sports-car'],
  'layer-poultry': ['farm','poultry','forest','farm'],
  'car-booking': ['car','car-road','sports-car','car-city','mountain'],
  'roofing-pro': ['roof','construction','tools','home','architecture'],
  'oakfield-academy': ['campus','classroom','running','music','office'],
  'little-lantern-school': ['classroom','campus','music','art','running'],
  'maison-elan-salon': ['salon','beauty','salon','spa','barber'],
  'chroma-hair-studio': ['beauty','salon','beauty','barber','spa'],
  'struct-construction': ['construction','architecture','home','tools','estate'],
  'brightside-cleaning': ['cleaning','living','bedroom','office','home'],
  'good-cut-barbers': ['barber','salon','barber','beauty','shop'],
  'crumb-and-co': ['bread','croissant','cake','cookies','breakfast','chef'],
  'ember-table': ['steak','pasta','salad','pizza','restaurant','chef'],
  'fieldwork-supply': ['backpack','backpack','shop','forest','mountain'],
  'verde-furniture': ['bedroom','living','dining','chair','sofa','office'],
  'northline-property': ['estate','villa','living','home','architecture'],
  'meridian-hospital': ['doctor','medical','care','hospital','doctor'],
  'ignition-motors': ['sports-car','car','car-city','car-road','garage'],
  'orbit-observatory': ['space','space','mountain','forest'],
  'afterhours-festival': ['concert','music','concert','music'],
  'forma-museum': ['gallery','art','gallery','architecture'],
  'sprout-market': ['farm','salad','farm','breakfast'],
  'vault-finance': ['finance','office','studio','architecture'],
  'kin-running': ['running','mountain','running','forest'],
  'lumen-studio': ['studio','art','office','gallery'],
  'current-climate': ['ocean','forest','mountain','farm'],
  'serein-retreat': ['spa','bedroom','forest','mountain'],
  'nova-developer': ['code','studio','office','finance'],
};
export const photosFor = (slug: string) => (templatePhotos[slug] ?? ['living','home','office']).map(photo);
export type PhotoCard = { title: string; detail: string; price?: number; category: string; image: string };
export type PhotoProfile = {
  slug: string; name: string; category: string; variant: string; ink: string; accent: string;
  headline: string; description: string; action: string; kicker: string; cards: PhotoCard[];
  story: string; feature: string; shop: boolean;
};
type Seed = Omit<PhotoProfile, 'cards' | 'story' | 'feature' | 'shop'> & { titles: string[]; prices?: number[]; groups?: string[]; shop?: boolean; story?: string; feature?: string };
const profile = (seed: Seed): PhotoProfile => {
  const { titles, prices, groups, ...rest } = seed;
  const images = photosFor(seed.slug);
  return { ...rest, shop: seed.shop ?? false, story: seed.story ?? 'A little more care.\nIn every detail.', feature: seed.feature ?? 'Thoughtfully chosen.\nBeautifully brought together.', cards: titles.map((title, i) => ({ title, detail: seed.variant.includes('property') ? ['Thoughtful spaces. Exceptional surroundings.','Considered interiors. Room to make it yours.'][i % 2] : 'Considered details, personal service, and a finish that feels right.', price: prices?.[i], category: groups?.[i] ?? title.split(' ')[0], image: images[(i + 1) % images.length] })) };
};

const legacy: Seed[] = [
  { slug:'nordic-living',name:'FJORD',category:'Furniture',variant:'furniture',ink:'#052d25',accent:'#f5d584',headline:'Beautiful spaces start\nwith thoughtful furniture.',description:'Considered pieces, natural materials, and a little more comfort. Find furniture that makes your space feel like you.',action:'Explore the collection',kicker:'Furniture for the way you live',titles:['Living room','Bedroom','Dining room','Office','Accent pieces','Outdoor living'],prices:[899,1299,740,520,399,690],groups:['Living','Bedroom','Dining','Office','Living','Outdoor'],shop:true },
  { slug:'haven-real-estate',name:'HAVEN',category:'Real Estate',variant:'property',ink:'#062d38',accent:'#ead195',headline:'Find your dream property.\nA place to call your own.',description:'From thoughtful family homes to exceptional city spaces, discover a selection of places with possibility.',action:'Explore properties',kicker:'Exceptional spaces. Personal perspective.',titles:['The garden residence','The modern terrace','The coastal retreat','The city apartment'],prices:[2450000,1890000,3200000,1250000],groups:['House','Townhouse','Villa','Apartment'] },
  { slug:'bake-bloom',name:'BLOOM',category:'Food',variant:'bakery',ink:'#05372a',accent:'#f0ce75',headline:'Goodness baked\ninto every bite.',description:'From our oven to your table. Slow-fermented breads, buttery pastry, and cakes made for the moments worth sharing.',action:'Shop the counter',kicker:'Freshly baked. Always a little special.',titles:['Celebration cake','Butter croissant','Chocolate cookies','Country sourdough','Morning pastries','Seasonal specials'],prices:[320,32,45,65,48,85],groups:['Cakes','Pastry','Cookies','Bread','Pastry','Cakes'],shop:true,story:'More than\na neighbourhood bakery.' },
  { slug:'car-booking',name:'VISTA',category:'Travel',variant:'rental',ink:'#061c34',accent:'#f4ce54',headline:'Drive your\nnext journey.',description:'Choose the car that fits your plans. Beautiful vehicles, a clear booking process, and more room for the road ahead.',action:'Search the fleet',kicker:'Your journey starts with a better choice',titles:['Sport coupe','City sedan','Weekend SUV','Executive saloon'],prices:[890,540,1200,950],groups:['Sport','Sedan','SUV','Sedan'] },
  { slug:'roofing-pro',name:'RIDGE.',category:'Construction',variant:'roofing',ink:'#081f35',accent:'#f4ca45',headline:'Stronger roofs.\nSafer tomorrow.',description:'From a careful repair to a complete new roof. Practical expertise, considered materials, and attention to every detail.',action:'Request an estimate',kicker:'Care above everything',titles:['Roof installation','Roof repair','Metal roofing','Roof inspection','Flat roofing','Gutters & drainage'],groups:['Installation','Repair','Installation','Inspection','Installation','Repair'],story:'Reliable roofing.\nBuilt on good relationships.' },
  { slug:'autoparts-pro',name:'AXLE',category:'E-commerce',variant:'commerce',ink:'#092333',accent:'#f3cc63',headline:'The right part.\nThe next great drive.',description:'Search our sample parts collection by model, category, or component. Everything starts with getting the details right.',action:'Find your parts',kicker:'For the people who love the drive',titles:['Ceramic brake pad set','Oil filter housing','Spark plug set','LED headlamp assembly'],prices:[890,340,280,1560],groups:['Braking','Filters','Engine','Lighting'],shop:true },
  { slug:'travel-explorer',name:'ATLAS',category:'Travel',variant:'travel',ink:'#07382d',accent:'#f0d590',headline:'Find a little wonder.\nTake the long way.',description:'Independent routes, meaningful places, and the pleasure of going somewhere you have never been before.',action:'Find your next route',kicker:'Travel with a different point of view',titles:['Kyoto, slowly','A Lisbon weekend','Mountains & morning light','Coastal interlude'],prices:[4500,3200,5800,2900],groups:['City','City','Nature','Coastal'] },
  { slug:'layer-poultry',name:'LAYER',category:'Services',variant:'farm',ink:'#0a3b2c',accent:'#e5d27e',headline:'Good farming starts\nwith thoughtful care.',description:'Practical poultry advisory for the people doing the work. Clear plans for healthy flocks and better everyday routines.',action:'Arrange a farm visit',kicker:'Practical knowledge. A considered approach.',titles:['Flock planning','Welfare & housing','Feed & performance','Farm visits'],groups:['Planning','Welfare','Feed','Advisory'] },
];
const additions: Seed[] = [
  { slug:'verde-furniture',name:'VERDE / HOME',category:'Furniture',variant:'furniture-editorial',ink:'#042e24',accent:'#e8c97a',headline:'Elegant spaces.\nBetter living.',description:'Furniture that blends comfort, quiet character, and honest materials. Create a home that feels entirely yours.',action:'Explore collection',kicker:'Modern furniture. More meaning.',titles:['Living room','Bedroom','Dining room','Accent furniture','Storage solutions','Home office'],prices:[1299,1890,950,399,740,590],groups:['Living','Bedroom','Dining','Living','Storage','Office'],shop:true,feature:'Timeless pieces.\nFor every space.' },
  { slug:'northline-property',name:'NORTHLINE',category:'Real Estate',variant:'property-sidebar',ink:'#102f26',accent:'#bc805a',headline:'Find a place\nthat fits your life.',description:'A personal perspective on exceptional homes. Discover thoughtfully selected spaces for your next chapter.',action:'Search properties',kicker:'Your next chapter starts here',titles:['Parkway residence','The Meridian tower','Valley-view villa','Garden townhouse'],prices:[2450000,1280000,3200000,1780000],groups:['House','Apartment','Villa','Townhouse'] },
  { slug:'meridian-hospital',name:'MERIDIAN',category:'Healthcare',variant:'hospital',ink:'#06395c',accent:'#66cafa',headline:'Thoughtful healthcare.\nA healthier tomorrow.',description:'A welcoming place for everyday care and specialist consultations. Explore departments and try our appointment request flow.',action:'Request an appointment',kicker:'Care that begins with listening',titles:['Family medicine','Heart health','Bone & joint care','Children’s care','Specialist consultations','Preventive care'],groups:['General','Specialist','Specialist','Family','Specialist','General'],story:'A human approach.\nAt every step.',feature:'Connected care.\nAround your needs.' },
  { slug:'ignition-motors',name:'IGNITION',category:'Automotive',variant:'dealership',ink:'#092234',accent:'#f37738',headline:'Find your next drive.\nMake it a good one.',description:'Browse a carefully selected sample fleet, compare your favourites, and start a conversation about your next car.',action:'Browse cars',kicker:'Good cars. A clearer way to choose.',titles:['Grand touring coupe','Premium city saloon','Adventure SUV','Weekend convertible'],prices:[649000,429000,569000,729000],groups:['Coupe','Sedan','SUV','Convertible'],feature:'More than a car.\nYour next chapter.' },
];

export const photoProfiles: PhotoProfile[] = [
  ...legacy.map(profile),
  ...businessThemes.map(theme => ({
    ...profile({ slug:theme.slug,name:theme.name,category:theme.category,variant:theme.kind,ink:theme.kind === 'restaurant' ? '#06352b' : theme.kind === 'cleaning' ? '#063b36' : theme.kind === 'construction' ? '#0a2637' : theme.kind === 'barber' ? '#312421' : theme.kind === 'color-studio' ? '#302039' : '#0a372e',accent:theme.kind === 'color-studio' ? '#e4c5f0' : theme.kind === 'construction' ? '#efbd53' : '#edcc7b',headline:theme.headline,description:theme.description,action:theme.action,kicker:theme.kicker,titles:[],shop:['bakery','shop'].includes(theme.kind) }),
    cards: theme.items.map((item,i) => ({ title:item.name,detail:item.detail,price:item.price || undefined,category:item.category,image:photosFor(theme.slug)[(i+1)%photosFor(theme.slug).length] })),
  })),
  ...additions.map(profile),
];
export const newPhotoProfiles = photoProfiles.filter(item => additions.some(seed => seed.slug === item.slug));
