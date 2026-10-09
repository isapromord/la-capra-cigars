# LA CAPRA CIGARS — BRAIN.md (Master Rules & Design Tokens)

## 1. Identidad de Marca & Filosofía
- **Marca:** La Capra Cigars (Humo Real Dominicano)
- **Origen:** Santiago de los Caballeros / Valle del Cibao, República Dominicana
- **Concepto:** Cava privada de tabacos artesanales añejados en cedro español con devoción litúrgica.
- **Aesthetic Movement:** Minimalist Editorial Luxury + Subtle Skeuomorphic Depth (Gilded Hairlines, Smoked Obsidian, Spanish Cedar, Hot-stamped Gold Foil).
- **Esquinas & Formas:** Sharp architectural edges (`roundedness: 0` para cajas, tarjetas y botones; solo circular para sellos y anillos).

## 2. Paleta Cromática (Tokens de Color)
- **Primary (`#D4AF37` / `#F2CA50`):** Vintage Gold Leaf / Oro Viejo para acentos principales, monogramas y CTA primarios.
- **Surface / Background (`#141312` / `#0F0E0D`):** Smoked Obsidian / Lienzo carbón cálido.
- **Cigar Wrapper Maduro (`#2B1A12`):** Marrón capa maduro para contenedores y paneles elevados.
- **Spanish Cedar (`#E8D5B5`, `#8E5B3D`):** Madera de cedro claro y crudo para tipografía de contraste y divisores.
- **Ribbon Feet Accents:**
  - Scarlet Crimson (`#A31621`): Habano 2023.
  - Emerald Green (`#1B4D3E`): Connecticut Reserva Seda.

## 3. Tipografía
- **Headlines:** `Playfair Display`, serif.
- **Body & Labels:** `Cinzel`, serif (Tracking amplio: `0.14em` - `0.28em` en mayúsculas).

## 4. Estructura de Directorios Modular
```text
la-capra-cigars/
├── .mbos/
│   ├── BRAIN.md
│   ├── HANDOFF.md
│   └── MEMORY.md
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   ├── images/
│   │   ├── logo-oficial.png
│   │   ├── logo-emblem.png
│   │   ├── hero-puro-mano.jpg
│   │   ├── maduro-don-julio.jpg
│   │   ├── habano-2023-cofre.jpg
│   │   ├── connecticut-anilla.jpg
│   │   ├── humidor-reposando.jpg
│   │   └── caja-completa.jpg
│   ├── videos/
│   │   └── (reels de elaboración de puros)
│   └── docs/
│       └── DESIGN.md
├── index.html
└── .gitignore
```

## 5. Destino de Despliegue
- **Localhost:** Puerto 3000 o servidor local estático.
- **GitHub Target:** Organización / Cuenta `isapromord` (`isapromord-eng`).
