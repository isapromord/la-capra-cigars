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
  - Emblema del carnero duplicado a escala monumental (`h-28` en móvil, `h-36` en tablet, `h-42` en desktop) eliminando limitaciones de `max-w`.
  - Título ampliado a `text-2xl sm:text-3xl md:text-4xl lg:text-5xl` con `tracking-[0.18em]`.
  - Altura del header expandida a `min-h-[110px] sm:min-h-[135px] md:min-h-[150px]` con padding superior en `<main>` (`pt-32 sm:pt-40 md:pt-46`) para armonía total.
- **Preparación para Vercel:**
  - `vercel.json` configurado con framework `vite`, rewrites SPA (`/index.html`), cache inmutable para media/video y headers de seguridad.
  - `.npmrc` con `legacy-peer-deps=true` para garantizar instalación automatizada sin conflictos de pares en el runner de Vercel.
  - `vite.config.ts` optimizado con `process.cwd()` (cero warnings).
  - Repositorio remoto sincronizado en GitHub: **`https://github.com/isapromord/la-capra-cigars`**.

## Estado del Proyecto
- **100% Preparado y Listo para Desplegar en Vercel con 1 Clic.**
