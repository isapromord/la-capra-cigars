## Estado Actual del Proyecto
- **Fecha de Actualización:** 2026-10-09
- **Fuente de Origen:** Exportación oficial de Google AI Studio (`la-capra-cigars-—-humo-real-dominicano.zip`).
- **Arquitectura:** **Vite 8 + React 19 + TypeScript + Tailwind CSS 4 + Motion**.
- **Motor de Humo de Autor Activo:**
  - `AmbientSmoke.tsx`: Motor nativo HTML5 Canvas (60 FPS) con partículas pre-renderizadas en marfil y ámbar tabaco.
  - Efecto inmediato al abrir la página (pre-warmed across viewport).
  - 3 tendones sinuosos en curvas de Bézier ondulantes (emulando el humo continuo del puro encendido).
  - Interactividad con el mouse (brisa atmosférica al mover el cursor).
- **Capa de Humo Real en Primer Plano (Fijada en Modo Elegante):**
  - Elevada a `z-30` de forma fija y permanente en el modo **Elegante** (opacidad óptima `0.22`, filtro cálido cedro/oro y velocidad litúrgica a 0.65x).
  - Se eliminaron por completo los modos alternativos (Sutil/Intenso) y el botón flotante de control, dejando la interfaz 100% limpia y despejada.
  - Mantiene intacta la física de brisa inercial con el mouse y la aceleración por GPU.
- **Barra de Navegación & Footer Calibrados:**
  - El logo del Footer fue restaurado a su tamaño original equilibrado y limpio (`h-12` a `h-16`).
  - El logo de la cabecera (Navbar) se calibró con precisión a exactamente el **doble (2x)** de su tamaño original (`h-14` a `h-18` sobre el PNG recortado), con altura de barra elegante (`h-20` a `h-24`), logrando una escala lujosa, visible y armónica sin saturar.
- **Preparación para Vercel:**
  - `vercel.json` configurado con framework `vite`, rewrites SPA (`/index.html`), cache inmutable para media/video y headers de seguridad.
  - `.npmrc` con `legacy-peer-deps=true` para garantizar instalación automatizada sin conflictos de pares en el runner de Vercel.
  - `vite.config.ts` optimizado con `process.cwd()` (cero warnings).
  - Repositorio remoto sincronizado en GitHub: **`https://github.com/isapromord/la-capra-cigars`**.

## Estado del Proyecto
- **100% Preparado y Listo para Desplegar en Vercel con 1 Clic.**
