# LA CAPRA CIGARS — MEMORY.md (Compound Wisdom Log)

## [2026-10-09] — Importación e Inicialización del Proyecto
- **Contexto:** Importación del prototipo diseñado en Google AI Studio (Stitch luxury cigar brand showcase).
- **Hallazgo 1 (Independencia de Assets):** Google AI Studio genera URLs efímeras en `lh3.googleusercontent.com/aida-public/...`. Si no se descargan localmente, los enlaces expiran o pueden fallar en entornos locales/offline. Se descargaron todas las imágenes a `assets/images/` y se vincularon con rutas relativas estables.
- **Hallazgo 2 (Modularización):** El código original contenía estilos embebidos y scripts sin separar. Se separaron en `assets/css/style.css` y `assets/js/main.js`, añadiendo interactividad adicional como selector dinámico de ciudades con mapas satelitales actualizables, menú móvil responsive y sistema de notificaciones toast.
- **Hallazgo 3 (Integración Multimedia):** Se organizaron los videos reels y fotos de Instagram encontrados en descargas para futuras secciones de galería o video de fondo.
