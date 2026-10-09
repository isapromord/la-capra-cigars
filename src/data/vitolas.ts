import { Vitola } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_cigar_atelier_1791418614742.jpg';
export const MADURO_IMAGE = '/src/assets/images/vitola_maduro_gran_toro_1791418625154.jpg';
export const HABANO_IMAGE = '/src/assets/images/vitola_habano_robusto_1791418633907.jpg';
export const HUMIDOR_IMAGE = '/src/assets/images/private_humidor_vitrine_1791418643381.jpg';
export const GOAT_MEDALLION = '/src/assets/images/goat_emblem_medallion_1791419092943.jpg';

export const VITOLAS_DATA: Vitola[] = [
  {
    id: 'imperio-gran-toro-maduro',
    name: 'Imperio Gran Toro',
    collection: 'Maduro Reserve',
    vitolaFormat: 'Gran Toro',
    ringGauge: 56,
    lengthInches: 6.0,
    wrapper: 'San Andrés Negro (Fermented 6 Years)',
    binder: 'Dominican Olor (Ocoa Valley)',
    filler: 'Piloto Cubano Ligero & San Vicente Viso',
    strength: 4,
    burnAndDraw: 'Razor-even burn ring with dense silver-white ash cylinder; silky, cool draw with rich smoke density.',
    flavorProfile: {
      primary: 'Bittersweet Cacao & Roasted Espresso',
      secondary: 'Charred Spanish Cedar, Vanilla Bean & Dark Plum',
      finish: 'Aged Leather, Truffle and Cracked Peppercorn',
      body: 'Full-Bodied & Richly Viscous'
    },
    tastingNotes: ['Cacao Nibs', 'Spanish Cedar', 'Espresso Crema', 'Aged Leather', 'Dark Plum'],
    smokingTimeMinutes: 75,
    origin: 'Cibao Valley & Santiago de los Caballeros, Dominican Republic',
    agingYears: 6,
    cellarLot: 'Lot HR-MAD-2019-B',
    footRibbon: 'scarlet',
    footRibbonLabel: 'Maduro 2019 Cellar',
    singlePrice: 46,
    boxPrice: 440,
    boxCount: 10,
    inStockSingles: 18,
    inStockBoxes: 8,
    image: MADURO_IMAGE,
    year: 2019,
    description: 'The crowning jewel of the Maduro cellar. Rolled from leaves fermented under strict anaerobic conditions, yielding rich oils and deep espresso warmth.'
  },
  {
    id: 'soberano-robusto-habano',
    name: 'Soberano Robusto Especial',
    collection: 'Habano Sol',
    vitolaFormat: 'Robusto',
    ringGauge: 52,
    lengthInches: 5.25,
    wrapper: 'Dominican Habano Sun-Grown (Estate Yaque del Norte)',
    binder: 'Criollo 98 (Navarrete Terroir)',
    filler: 'San Vicente Seco, Olor Dominicano & Corojo 2006',
    strength: 3,
    burnAndDraw: 'Effortless pencil-thin carbon line, firm salt-and-pepper ash, velvety medium-dense draw.',
    flavorProfile: {
      primary: 'Toasted Almond, Spiced Cedar & Brioche',
      secondary: 'Orange Blossom Honey, Dried Nutmeg & Cream',
      finish: 'Subtle White Pepper and Toasted Macadamia',
      body: 'Medium-Full & Harmonious'
    },
    tastingNotes: ['Spiced Cedar', 'Toasted Almond', 'Nutmeg', 'Orange Blossom', 'Cream'],
    smokingTimeMinutes: 55,
    origin: 'Yaque del Norte River Basin, Dominican Republic',
    agingYears: 4,
    cellarLot: 'Lot HR-HAB-2021-S',
    footRibbon: 'emerald',
    footRibbonLabel: 'Habano Sol 2021',
    singlePrice: 38,
    boxPrice: 360,
    boxCount: 10,
    inStockSingles: 24,
    inStockBoxes: 12,
    image: HABANO_IMAGE,
    year: 2021,
    description: 'Basked in the golden Caribbean afternoon sun along the Yaque riverbed. Balanced aromatic spice with luscious almond pastry undertones.'
  },
  {
    id: 'legado-doble-corona-2019',
    name: 'Legado Doble Corona',
    collection: 'Vintage 2019',
    vitolaFormat: 'Doble Corona',
    ringGauge: 50,
    lengthInches: 7.6,
    wrapper: 'Vintage Corojo Vintage Reserve (100% Sun Cure)',
    binder: 'Dominican Piloto Cubano Especial',
    filler: 'Rare Medio Tiempo & San Vicente Ligero',
    strength: 5,
    burnAndDraw: 'Slow, cool graduation burn requiring no relights; crystalline draw with deep billowing clouds.',
    flavorProfile: {
      primary: 'Earth, Damp Forest Cedar & Heavy Spice',
      secondary: 'Dark Molasses, Vintage Port & Smoked Pecan',
      finish: 'Long, resonating black roast tobacco and dark cocoa',
      body: 'Intense, Majestic & Complex'
    },
    tastingNotes: ['Dark Cocoa', 'Smoked Pecan', 'Molasses', 'Spanish Cedar', 'Vintage Port'],
    smokingTimeMinutes: 110,
    origin: 'Santiago Private Reserve Vault, Dominican Republic',
    agingYears: 7,
    cellarLot: 'Lot HR-LEG-2019-V',
    footRibbon: 'gold',
    footRibbonLabel: 'Vintage 2019 Archive',
    singlePrice: 62,
    boxPrice: 590,
    boxCount: 10,
    inStockSingles: 9,
    inStockBoxes: 4,
    image: MADURO_IMAGE,
    year: 2019,
    description: 'An expansive ninety-minute meditation. Incorporates prized Medio Tiempo leaves—sparingly harvested from top sun leaf pairs—delivering authoritative power.'
  },
  {
    id: 'rector-churchill-habano',
    name: 'El Rector Churchill',
    collection: 'Habano Sol',
    vitolaFormat: 'Churchill',
    ringGauge: 48,
    lengthInches: 7.0,
    wrapper: 'Dominican Habano Natural Oscuro',
    binder: 'Dominican Olor Navarrate',
    filler: 'Piloto Cubano, Criollo 98 & Carbonell Vintage',
    strength: 3,
    burnAndDraw: 'Pristine sharp burn; tight, firm draw favored by traditional British and Caribbean gentlemen.',
    flavorProfile: {
      primary: 'Cinnamon Bark, Sweet Cedar & Hazelnut',
      secondary: 'Cardamom Pod, Dried Fig & Caramelized Sugar',
      finish: 'Gentle warmth with roasted grain and sweet oak',
      body: 'Medium Bodied & Refined'
    },
    tastingNotes: ['Cinnamon', 'Sweet Cedar', 'Hazelnut', 'Dried Fig', 'Caramelized Sugar'],
    smokingTimeMinutes: 85,
    origin: 'Villa González Terroir, Dominican Republic',
    agingYears: 5,
    cellarLot: 'Lot HR-CH-2020-E',
    footRibbon: 'emerald',
    footRibbonLabel: 'Habano 2020 Estate',
    singlePrice: 44,
    boxPrice: 420,
    boxCount: 10,
    inStockSingles: 16,
    inStockBoxes: 7,
    image: HABANO_IMAGE,
    year: 2020,
    description: 'Classic grand Churchill elegance. Designed for contemplative evenings with vintage cognac, unfolding in three distinct aromatic tiers.'
  },
  {
    id: 'nocturno-lancero-maduro',
    name: 'Nocturno Elegante Lancero',
    collection: 'Maduro Reserve',
    vitolaFormat: 'Lancero',
    ringGauge: 40,
    lengthInches: 7.25,
    wrapper: 'Aged Maduro Broadleaf (Midnight Fermentation)',
    binder: 'Dominican Olor Ocoa Valley',
    filler: 'Hand-Selected Piloto Cubano Viso',
    strength: 4,
    burnAndDraw: 'Unmatched wrapper-to-filler flavor concentration; deliberate razor burn with cool aromatic ribbon.',
    flavorProfile: {
      primary: 'Intense Dark Cocoa & Black Licorice',
      secondary: 'Espresso Crema, Smoked Cedar & Blackberry',
      finish: 'Piquant black pepper and velvety dark chocolate',
      body: 'Concentrated & Expressive'
    },
    tastingNotes: ['Dark Cocoa', 'Black Licorice', 'Espresso Crema', 'Blackberry', 'Black Pepper'],
    smokingTimeMinutes: 60,
    origin: 'Santiago Master Cellar, Dominican Republic',
    agingYears: 6,
    cellarLot: 'Lot HR-LAN-2019-N',
    footRibbon: 'scarlet',
    footRibbonLabel: 'Maduro 2019 Reserve',
    singlePrice: 42,
    boxPrice: 400,
    boxCount: 10,
    inStockSingles: 14,
    inStockBoxes: 6,
    image: MADURO_IMAGE,
    year: 2019,
    description: 'The connoisseur’s vitola format. Only three master torcedores in the atelier possess the hand sensitivity required to roll this slim, flawless specimen.'
  },
  {
    id: 'monarca-gordo-58',
    name: 'Monarca Gordo 58',
    collection: 'Grandes Vitolas',
    vitolaFormat: 'Gordo',
    ringGauge: 58,
    lengthInches: 5.75,
    wrapper: 'Oily Dominican Habano Oscuro 2018',
    binder: 'Dominican Criollo 98 & Olor',
    filler: 'Triple Fermented Cibao Ligero & Seco Blend',
    strength: 4,
    burnAndDraw: 'Massive, cool-smoking chamber with lush billowing clouds; straight concentric burn lines.',
    flavorProfile: {
      primary: 'Toasted Walnut, Rich Pipe Tobacco & Molasses',
      secondary: 'Cacao Butter, Charred Oak & Warm Clove',
      finish: 'Creamy lingering cedar with toasted barley note',
      body: 'Full, Voluminous & Sumptuous'
    },
    tastingNotes: ['Toasted Walnut', 'Cacao Butter', 'Charred Oak', 'Warm Clove', 'Pipe Tobacco'],
    smokingTimeMinutes: 90,
    origin: 'Cibao Foothills, Dominican Republic',
    agingYears: 5,
    cellarLot: 'Lot HR-GOR-2018-M',
    footRibbon: 'gold',
    footRibbonLabel: 'Grand Vitola 58',
    singlePrice: 48,
    boxPrice: 460,
    boxCount: 10,
    inStockSingles: 20,
    inStockBoxes: 9,
    image: HABANO_IMAGE,
    year: 2018,
    description: 'Commanding 58 ring gauge stature engineered for leisurely afternoons. Stays remarkably cool from first light through to the final gilded band.'
  }
];

export const TASTING_NOTES_PALETTE = [
  { note: 'Spanish Cedar', category: 'Wood & Terroir', description: 'Freshly milled and humidor-cured Spanish cedar aromatics with warm resinous sweetness.' },
  { note: 'Espresso Crema', category: 'Roast & Earth', description: 'Dark roasted Dominican Arabica with a thick, bittersweet crema finish.' },
  { note: 'Bittersweet Cacao', category: 'Sweet & Confection', description: '85% single-origin cacao nibs fermented alongside tobacco leaf bales.' },
  { note: 'Aged Leather', category: 'Savoury & Aged', description: 'Warm antique saddle leather evocative of historic private gentlemen’s libraries.' },
  { note: 'Spiced Nutmeg', category: 'Baking Spices', description: 'Gently grated Caribbean nutmeg and allspice warming the palate.' },
  { note: 'Toasted Walnut', category: 'Nutty & Cream', description: 'Roasted walnut skin and almond paste providing unctuous mouthfeel.' }
];

export const ATELIER_CHAPTERS = [
  {
    chapter: 'Chapter I',
    title: 'The Yaque Terroir & Cibao Silt',
    content: 'Our tobacco plants drink from the subterranean mineral veins of the Yaque del Norte river basin. Here, the dark volcanic silt and afternoon trade winds create tobacco leaves of exceptional elasticity and dense resin reserves.'
  },
  {
    chapter: 'Chapter II',
    title: 'Anaerobic Fermentation & The Pilón',
    content: 'True flavor cannot be rushed. Our leaves undergo five to seven years of carefully monitored thermal fermentation in Spanish cedar pilones, manually turned by master curing masters when internal heat crosses 128 degrees Fahrenheit.'
  },
  {
    chapter: 'Chapter III',
    title: 'The Torcedor’s Solemn Vow',
    content: 'Each vitola is constructed by a single pair of hands using the traditional entubar bunching method—ensuring flawless cylindrical air channels from head to foot. Zero molds are mass-pressed; every specimen is weighed to a tenth of a gram.'
  },
  {
    chapter: 'Chapter IV',
    title: 'Spanish Cedar Maturation',
    content: 'Before a single allocation box is sealed with our scarlet wax emblem, the rolled vitolas rest for a minimum of 18 months inside dark, humidity-controlled vaults lined exclusively with unvarnished Spanish cedar from historic harvests.'
  }
];
