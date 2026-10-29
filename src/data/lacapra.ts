export const IMAGES = {
  logoOficial: '/logo-oficial.webp',
  heroAnillaEnMano: '/images/vitolas/hero-anilla-en-mano.webp',
  maduroDonJulio: '/images/vitolas/maduro-don-julio.webp',
  habanoCajaRoja: '/images/vitolas/habano-caja-roja.webp',
  connecticutEsmeralda: '/images/vitolas/connecticut-esmeralda.webp',
  humidorAngulo: '/images/vitolas/humidor-angulo.webp',
  humidorCofreCompleto: '/images/vitolas/humidor-cofre-completo.webp'
};

export interface VitolaItem {
  id: string;
  name: string;
  reservaBadge: string;
  subtitulo: string;
  cepoMedida: string;
  badge1: string;
  badge2: string;
  fortalezaTicks: number;
  fortalezaLabel: string;
  capa: string;
  capote: string;
  tripa: string;
  tiempo: string;
  notas: string;
  maridaje: string;
  image: string;
  alt: string;
}

export const VITOLAS_LIST: VitolaItem[] = [
  {
    id: 'toro-maduro-barrica',
    name: 'Toro Maduro Barrica',
    reservaBadge: 'Reserva Oro',
    subtitulo: 'Cinta Dorada • Tabaco Estacionado',
    cepoMedida: 'Cepo 58 x 5.5"',
    badge1: 'Maduro Especial',
    badge2: 'Cava Barrica',
    fortalezaTicks: 4,
    fortalezaLabel: 'Media - Fuerte',
    capa: 'San Andrés Maduro',
    capote: 'Olor Dominicano',
    tripa: 'Piloto & Criollo 98',
    tiempo: '75 - 90 min',
    notas: 'Cacao puro tostado, cuero añejo, madera de roble, café espresso intenso y estallido dulce de melaza con pimienta negra final.',
    maridaje: 'Tequila reposado de alta gama (Don Julio 1942) o Ron Dominicano Extraviejo.',
    image: IMAGES.maduroDonJulio,
    alt: 'La Capra Maduro con Don Julio Reposado'
  },
  {
    id: 'habano-seleccion-cava',
    name: 'Habano Selección Cava',
    reservaBadge: 'Cosecha Limitada',
    subtitulo: 'Caja de Cedro • Liga Especial',
    cepoMedida: 'Cepo 52 x 6.0"',
    badge1: 'Habano 2023',
    badge2: 'Cinta Carmesí',
    fortalezaTicks: 3,
    fortalezaLabel: 'Media Equilibrada',
    capa: 'Habano Ecuador Claro',
    capote: 'Corojo Dominicano',
    tripa: 'Piloto Cubano Mejorado',
    tiempo: '60 - 75 min',
    notas: 'Cedro fresco de caja, corteza de pan rústico, almendras tostadas, nuez moscada y sutiles toques de pimienta blanca.',
    maridaje: 'Bourbon Single Barrel o café americano de especialidad lavado.',
    image: IMAGES.habanoCajaRoja,
    alt: 'La Capra Habano 2023 en cofre de madera con cintas rojas'
  },
  {
    id: 'connecticut-reserva-seda',
    name: 'Connecticut Reserva Seda',
    reservaBadge: 'Corte Noble',
    subtitulo: 'Plata & Esmeralda • Humo Aterciopelado',
    cepoMedida: 'Cepo 50 x 5.0"',
    badge1: 'Connecticut',
    badge2: 'Cinta Esmeralda',
    fortalezaTicks: 2,
    fortalezaLabel: 'Suave - Media',
    capa: 'Connecticut Shade US',
    capote: 'San Vicente Dominicano',
    tripa: 'Criollo 98 & Olor Suave',
    tiempo: '50 - 65 min',
    notas: 'Crema de leche suave, vainilla bourbon, mantequilla clarificada, cedro rubio y toque final de flores silvestres.',
    maridaje: 'Espresso doble arábica, Oporto blanco o Champaña brut vintage.',
    image: IMAGES.connecticutEsmeralda,
    alt: 'La Capra Connecticut con anilla plateada, cinta verde y guillotina'
  }
];

export const GUÍAS_LIST = [
  {
    id: 'maridaje-maduro',
    tag: 'Maridajes Nobles',
    title: 'El Arte del Maridaje: Puros de Capa Maduro con Ron Añejo y Café Expreso',
    summary: 'Descubre cómo las notas terrosas y achocolatadas del maduro interactúan con destilados caribeños de alta solera y tuestes profundos.',
    readTime: '6 min',
    content: 'El tabaco con capa San Andrés Maduro posee azúcares naturales concentrados por su fermentación lenta. Al maridarlo con destilados caribeños añejados en barricas de roble americano o francés, se produce una sinergia en el paladar donde los taninos del humo limpian la riqueza alcohólica del ron, resaltando notas de vainilla, cacao y cuero.'
  },
  {
    id: 'guia-vitolas',
    tag: 'Anatomía del Puro',
    title: 'Guía Maestra de Vitolas y Calibres: Desde el Robusto 50 al Gran Toro 58',
    summary: 'Entendiendo la relación entre cepo, longitud y temperatura de combustión. Cómo el calibre altera la proporción de capa y tripa.',
    readTime: '8 min',
    content: 'El cepo o ring gauge se mide en 64avos de pulgada. Una vitola fina como la Corona o el Lancero ofrece un porcentaje mayor de capa en relación con la tripa, intensificando el impacto del tabaco exterior. Por el contrario, un Gran Toro (58 RG) proporciona mayor flujo de aire, humo más frío y permite ligar hasta 4 hojas diferentes de tripa para una evolución de tercios más pausada.'
  },
  {
    id: 'preservacion-cava',
    tag: 'Conservación de Cava',
    title: 'Preservación Sagrada: Conservación y Estacionamiento del Tabaco en Climas Tropicales',
    summary: 'Consejos prácticos para preservar los aceites esenciales, la elasticidad de la capa y el reposo en cedro.',
    readTime: '5 min',
    content: 'En climas cálidos y húmedos como el Caribe, el cuidado del tabaco exige equilibrio térmico y atmosférico para preservar los aceites esenciales de la hoja. El reposo en cajas de madera noble estabiliza la humedad natural de la tripa y evita la resequedad. Recomendamos resguardar tus cajas en ambientes templados y estables, lejos de la luz solar directa.'
  },
  {
    id: 'protocolo-regalos',
    tag: 'Protocolo & Regalos',
    title: 'La Selección Perfecta: Qué vitola regalar a un conocedor según la ocasión',
    summary: 'Criterios de etiqueta para celebraciones solemnes, reuniones de directorio o sobremesas relajadas entre caballeros del humo.',
    readTime: '7 min',
    content: 'Para celebrar cierres de negocios y aniversarios, un cofre de 20 vitolas Toro Maduro Barrica con grabado pirolítico transmite solemnidad y distinción. Para una tarde distendida o fumadores casuales, el Connecticut Reserva Seda con su capa dorada y humo aterciopelado es la elección más complaciente y refinada.'
  }
];

export const CIUDADES_LOUNGE = [
  { id: 'santiago', nombre: 'Santiago de los Caballeros', desc: 'Cava Madre • Reparto del Este' },
  { id: 'santo-domingo', nombre: 'Santo Domingo', desc: 'Av. República de Colombia 23' },
  { id: 'punta-cana', nombre: 'Punta Cana', desc: 'Resort Lounge & Beachfront' },
  { id: 'miami', nombre: 'Miami (Brickell)', desc: 'Brickell Vault Private Lounge' },
  { id: 'madrid', nombre: 'Madrid (Salamanca)', desc: 'Distrito Salamanca Tasting Club' }
];
