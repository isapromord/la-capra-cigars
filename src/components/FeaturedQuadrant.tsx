import React from 'react';
import { GOAT_MEDALLION, VITOLAS_DATA } from '../data/vitolas';
import { TRANSLATIONS, Language } from '../data/translations';
import { Vitola } from '../types';

interface FeaturedQuadrantProps {
  lang: Language;
  onInspect: (vitola: Vitola) => void;
  onAddToHumidor: (vitola: Vitola, unitType: 'single' | 'box') => void;
}

export const FeaturedQuadrant: React.FC<FeaturedQuadrantProps> = ({
  lang,
  onInspect,
  onAddToHumidor
}) => {
  const t = TRANSLATIONS[lang];
  const flagship = VITOLAS_DATA[0]; // Imperio Gran Toro Maduro

  return (
    <section className="py-20 bg-[#161413] border-b border-[#d4af37]/20 relative">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 md:px-16">
        
        {/* Header with Circular Goat Medallion */}
        <div className="flex flex-col items-center text-center mb-12">
          {/* Circular Goat Emblem Medallion as specified in Stitch */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#d4af37] shadow-[0_0_25px_rgba(212,175,55,0.4)] p-0.5 bg-[#141312] mb-5">
            <img
              src={GOAT_MEDALLION}
              alt="Atelier Humo Real Signature Goat Emblem Medallion"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-full filter brightness-105 contrast-110"
            />
          </div>

          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#d4af37] font-cinzel mb-2">
            {t.featuredSpecimenSubtitle}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-[#ede6d9] mb-3">
            {flagship.name} · {flagship.collection}
          </h2>
          <p className="text-xs sm:text-sm text-[#d0c5af] font-cinzel max-w-xl">
            {flagship.description}
          </p>
        </div>

        {/* The Mandatory Quadrant Layout from Stitch specifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto font-cinzel">
          
          {/* Quadrant 1: Flavor Profile */}
          <div className="bg-[#1b1918] border border-[#d4af37]/30 p-6 space-y-3">
            <div className="flex items-center justify-between border-b border-[#d4af37]/15 pb-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#f4d06f]">
                {t.quadrantFlavorTitle}
              </span>
              <span className="text-[10px] text-[#99907c] uppercase">6 Años Añejamiento</span>
            </div>
            
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-[#99907c] text-[10px] uppercase block">Aromas Primarios:</span>
                <p className="text-[#ede6d9] font-medium">{t.quadrantFlavorPrimary}</p>
              </div>
              <div>
                <span className="text-[#99907c] text-[10px] uppercase block">Evolución de Medio Tercio:</span>
                <p className="text-[#d0c5af]">{t.quadrantFlavorSecondary}</p>
              </div>
              <div>
                <span className="text-[#99907c] text-[10px] uppercase block">Retrogusto y Tercio Final:</span>
                <p className="text-[#d0c5af]">{t.quadrantFlavorFinish}</p>
              </div>
            </div>
          </div>

          {/* Quadrant 2: Burn & Draw */}
          <div className="bg-[#1b1918] border border-[#d4af37]/30 p-6 space-y-3">
            <div className="flex items-center justify-between border-b border-[#d4af37]/15 pb-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#f4d06f]">
                {t.quadrantBurnTitle}
              </span>
              <span className="text-[10px] text-[#99907c] uppercase">Tiro Entubar</span>
            </div>
            
            <p className="text-xs text-[#d0c5af] leading-relaxed">
              {t.quadrantBurnDesc}
            </p>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-[#99907c] uppercase text-[10px]">Tiempo de Fumada:</span>
              <span className="text-[#f4d06f] font-mono font-bold">{flagship.smokingTimeMinutes} Minutos</span>
            </div>
          </div>

          {/* Quadrant 3: Strength */}
          <div className="bg-[#1b1918] border border-[#d4af37]/30 p-6 space-y-3">
            <div className="flex items-center justify-between border-b border-[#d4af37]/15 pb-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#f4d06f]">
                {t.quadrantStrengthTitle}
              </span>
              <span className="text-[10px] text-[#99907c] uppercase">Escala 1 a 5</span>
            </div>

            {/* Strength 1 to 5 Scale Shown as Gold Ticks (Stitch requirement) */}
            <div className="py-2">
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((tick) => (
                  <div
                    key={tick}
                    className={`h-4 flex-1 border border-[#d4af37] ${
                      tick <= flagship.strength
                        ? 'bg-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.4)]'
                        : 'bg-transparent border-opacity-30'
                    }`}
                  />
                ))}
              </div>
              <div className="flex justify-between text-[10px] text-[#99907c] font-mono mt-1.5 uppercase">
                <span>Suave</span>
                <span>Medio</span>
                <span className="text-[#f4d06f] font-bold">Fuerte (Nivel 4)</span>
                <span>Intenso</span>
              </div>
            </div>

            <div className="text-xs text-[#ede6d9] pt-1">
              <span className="text-[#99907c] text-[10px] uppercase block">Cuerpo:</span>
              {t.quadrantStrengthBody}
            </div>
          </div>

          {/* Quadrant 4: Origin */}
          <div className="bg-[#1b1918] border border-[#d4af37]/30 p-6 space-y-3">
            <div className="flex items-center justify-between border-b border-[#d4af37]/15 pb-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#f4d06f]">
                {t.quadrantOriginTitle}
              </span>
              <span className="text-[10px] text-[#99907c] uppercase">Lote {flagship.cellarLot}</span>
            </div>

            <div className="space-y-2 text-xs">
              <p className="text-[#ede6d9] font-medium leading-relaxed">
                {t.quadrantOriginTerroir}
              </p>
              <div className="pt-2 text-[11px] text-[#99907c] border-t border-white/5 flex justify-between">
                <span>Capa: San Andrés Maduro</span>
                <span className="text-[#d4af37]">Cepo 56 × 6.0"</span>
              </div>
            </div>
          </div>

        </div>

        {/* Action Buttons for this Featured Specimen */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => onInspect(flagship)}
            className="gold-outline-btn px-6 py-3 text-xs"
          >
            {t.inspectSpecimen}
          </button>
          <button
            onClick={() => onAddToHumidor(flagship, 'box')}
            className="gold-foil-btn px-8 py-3 text-xs"
          >
            {t.reserveBox} (${flagship.boxPrice})
          </button>
        </div>

      </div>
    </section>
  );
};
