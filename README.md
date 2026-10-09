# 🐐 La Capra Cigars — Humo Real Dominicano

> **Cava privada de tabacos añejados con devoción litúrgica en Santiago de los Caballeros, República Dominicana.**  
> Cada vitola representa el pináculo de la tradición artesanal dominicana: ligadas reservadas, tiro milimétrico y anillado de colección para los paladares más exigentes del mundo.

---

## 🌟 Experiencia Digital & Características

- **Atmósfera de Humo Cinematográfico Real:** Metraje real en alta definición de auténtico humo de tabaco sobre fondo negro con `mix-blend-mode: screen`, optimizado para streaming instantáneo con FastStart y aceleración por GPU.
- **Física de Brisa Interactiva:** El humo responde con inercia y vaivén suave al movimiento del cursor del usuario, simulando el desplazamiento de aire en una cava privada.
- **Carrusel Editorial Hero:** Transición continua cross-dissolve y paneo Ken Burns con anillas de autor y presentaciones de cofre.
- **Compendio de Vitolas de Autor:** Fichas sensoriales con cepo, capa, capote, tripa, fortaleza y maridajes recomendados (Bourbon, Ron Añejo, Café Espresso).
- **Sistema de Asignación y Reservas:** Módulo interactivo de solicitud de cupo en cava y reservas de salón para Santo Domingo, Santiago y Punta Cana.
- **Diseño Ultra-Luxury Dark:** Tipografías clásicas *Playfair Display* y *Cinzel*, acentos en pan de oro (`#f2ca50`, `#d4af37`), cuero y cedro español.

---

## 🛠️ Stack Tecnológico

- **Framework:** [React 19](https://react.dev/) + [TypeScript 5.7](https://www.typescriptlang.org/)
- **Bundler & Tooling:** [Vite 8](https://vitejs.dev/)
- **Estilos & Animaciones:** [Tailwind CSS v4](https://tailwindcss.com/) + CSS GPU Compositing + [Motion](https://motion.dev/)
- **Iconografía:** Material Symbols Outlined & Lucide Icons
- **Multimedia:** Video streaming H.264 acelerado por hardware

---

## 🚀 Instalación y Desarrollo Local

### Prerrequisitos
- [Node.js](https://nodejs.org/) (versión 18+ o superior)
- `npm`

### Pasos

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/isapromord/la-capra-cigars.git
   cd la-capra-cigars
   ```

2. **Instalar dependencias:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

4. **Compilar para producción:**
   ```bash
   npm run build
   ```
   Genera los archivos optimizados listos para desplegar en la carpeta `dist/`.

---

## 📁 Estructura del Proyecto

```text
la-capra-cigars/
├── public/
│   ├── cigar-smoke-pure.mp4    # Video optimizado de humo real
│   ├── logo-oficial.png        # Emblema oficial en alta resolución
│   └── images/                 # Fotografías de vitolas y cavas
├── src/
│   ├── components/
│   │   ├── AmbientSmoke.tsx    # Motor de humo real con física de brisa
│   │   ├── Navbar.tsx          # Cabecera luxury con logo prominente
│   │   ├── Hero.tsx            # Carrusel editorial con Ken Burns
│   │   ├── Marquee.tsx         # Cinta rotativa de sellos de origen
│   │   ├── CatalogoVitolas.tsx # Catálogo de puros de selección privada
│   │   ├── LoungeSection.tsx   # Lounges y reservas de cava
│   │   ├── GuiasAficionado.tsx # Enciclopedia de corte, encendido y maridaje
│   │   ├── ClubMembresia.tsx   # Círculo privado de asignación
│   │   ├── AsignacionModal.tsx # Modal interactivo de asignación
│   │   └── Footer.tsx          # Pie de página institucional y advertencias
│   ├── data/
│   │   └── lacapra.ts          # Datos maestros de vitolas, notas y fotos
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .mbos/                      # Gobernanza y compound memory log
└── package.json
```

---

## 📜 Licencia & Derechos

© 2026 **La Capra Cigars** • Santiago de los Caballeros, República Dominicana.  
Desarrollado y mantenido por [IsaPromo RD](https://github.com/isapromord). Todos los derechos reservados.
