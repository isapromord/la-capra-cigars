export type VitolaFormat = 
  | 'Robusto'
  | 'Gran Toro'
  | 'Doble Corona'
  | 'Churchill'
  | 'Torpedo'
  | 'Lancero'
  | 'Gordo';

export type FootRibbonType = 'scarlet' | 'emerald' | 'gold';

export interface Vitola {
  id: string;
  name: string;
  collection: 'Maduro Reserve' | 'Habano Sol' | 'Vintage 2019' | 'Grandes Vitolas';
  vitolaFormat: VitolaFormat;
  ringGauge: number;
  lengthInches: number;
  wrapper: string;
  binder: string;
  filler: string;
  strength: 1 | 2 | 3 | 4 | 5;
  burnAndDraw: string;
  flavorProfile: {
    primary: string;
    secondary: string;
    finish: string;
    body: string;
  };
  tastingNotes: string[];
  smokingTimeMinutes: number;
  origin: string;
  agingYears: number;
  cellarLot: string;
  footRibbon: FootRibbonType;
  footRibbonLabel: string;
  singlePrice: number;
  boxPrice: number;
  boxCount: number;
  inStockSingles: number;
  inStockBoxes: number;
  image: string;
  year: number;
  description: string;
}

export interface HumidorItem {
  vitola: Vitola;
  unitType: 'single' | 'box';
  quantity: number;
  addedAt: string;
  customEngraving?: string;
}

export interface AllocationOrder {
  orderId: string;
  customerName: string;
  email: string;
  phone: string;
  deliveryAddress: string;
  city: string;
  country: string;
  postalCode: string;
  includeCedarSpills: boolean;
  includeBovedaPacks: boolean;
  customEngravingText?: string;
  items: HumidorItem[];
  subtotal: number;
  createdAt: string;
  status: 'Allocated' | 'In Humidor Conditioning' | 'En Route';
}
