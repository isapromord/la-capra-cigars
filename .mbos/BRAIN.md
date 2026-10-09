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

## 4. Estructura de Directorios Modular (Vite + React + TypeScript)
```text
la-capra-cigars/
├── .mbos/                             # Gobierno y memoria MBOS369
│   ├── BRAIN.md
│   ├── HANDOFF.md
│   └── MEMORY.md
├── public/                            # Assets públicos estáticos (imágenes, logos, videos)
│   └── images/
├── src/                               # Código fuente modular
│   ├── assets/                        # Imágenes optimizadas
│   ├── components/                    # Componentes modulares
│   │   ├── Hero.tsx                   # Hero con carrusel animado (Ken Burns & Cross-Dissolve)
│   │   ├── Navbar.tsx                 # Barra de navegación con logo escalado y links directos
│   │   ├── Marquee.tsx                # Marquee de cata
│   │   ├── CatalogoVitolas.tsx        # Fichas de cata y vitolas
│   │   ├── LoungeSection.tsx          # Lounges con mapa y reservas
│   │   ├── GuiasAficionado.tsx        # Artículos de cata y maridaje
│   │   ├── ClubMembresia.tsx          # Formulario de membresía de cava
│   │   ├── AsignacionModal.tsx        # Modal interactivo de asignación
│   │   └── Footer.tsx                 # Footer integral
│   ├── data/                          # Data estructurada (vitolas, imágenes, textos)
│   │   ├── lacapra.ts
│   │   └── vitolas.ts
│   ├── types/                         # Tipos TypeScript
│   ├── App.tsx                        # Aplicación principal
│   ├── main.tsx                       # Entrypoint React 19
│   └── index.css                      # Estilos globales y Tailwind CSS
├── index.html                         # Host HTML
├── package.json                       # Dependencias (React 19, Vite 8, Tailwind 4, Motion)
├── tsconfig.json                      # Configuración TypeScript
└── vite.config.ts                     # Configuración de Vite
```

## 5. Destino de Despliegue
- **Localhost:** Puerto 8080 (servidor local activo).
- **GitHub Target:** Usuario `isapromord` (https://github.com/isapromord).
