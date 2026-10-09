## Estado Actual del Proyecto
- **Fecha de Actualización:** 2026-10-09
- **Fuente de Origen:** Exportación oficial de Google AI Studio (`la-capra-cigars-—-humo-real-dominicano.zip`).
- **Arquitectura:** **Vite 8 + React 19 + TypeScript + Tailwind CSS 4 + Motion**.
- **Motor de Humo de Autor Activo:**
  - `AmbientSmoke.tsx`: Motor nativo HTML5 Canvas (60 FPS) con partículas pre-renderizadas en marfil y ámbar tabaco.
  - Efecto inmediato al abrir la página (pre-warmed across viewport).
  - 3 tendones sinuosos en curvas de Bézier ondulantes (emulando el humo continuo del puro encendido).
  - Interactividad con el mouse (brisa atmosférica al mover el cursor).
  - Fondos de secciones (`Hero`, `CatalogoVitolas`, `LoungeSection`, `GuiasAficionado`, `ClubMembresia`) ajustados a transparentes para que el humo viaje nítidamente **detrás de los textos, tarjetas, bloques e imágenes**.
  - Mini-controlador discreto en la esquina inferior izquierda con 3 niveles: **Sutil**, **Elegante**, **Intenso**.
- **Barra de Navegación & Logo:**
  - Logo duplicado de tamaño (`h-18` a `h-26` / hasta 220px de ancho) para máxima presencia y legibilidad del emblema dorado.
  - Altura del header ajustada a `min-h-[88px] sm:min-h-[104px] md:min-h-[114px]` con padding superior en `<main>` para conservar holgura y simetría editorial.
- **Preparación para Vercel:**
  - `vercel.json` configurado con framework `vite`, rewrites SPA (`/index.html`), cache inmutable para media/video y headers de seguridad.
  - `.npmrc` con `legacy-peer-deps=true` para garantizar instalación automatizada sin conflictos de pares en el runner de Vercel.
  - `vite.config.ts` optimizado con `process.cwd()` (cero warnings).
  - Repositorio remoto sincronizado en GitHub: **`https://github.com/isapromord/la-capra-cigars`**.

## Estado del Proyecto
- **100% Preparado y Listo para Desplegar en Vercel con 1 Clic.**
