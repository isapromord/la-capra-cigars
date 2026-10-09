import React from 'react';
import { Vitola } from '../types';
import { GOAT_MEDALLION } from '../data/vitolas';
import { Language, TRANSLATIONS } from '../data/translations';

interface VitolaCardProps {
  vitola: Vitola;
  lang?: Language;
  onInspect: (vitola: Vitola) => void;
  onAddToHumidor: (vitola: Vitola, unitType: 'single' | 'box') => void;
}

export const VitolaCard: React.FC<VitolaCardProps> = ({
  vitola,
  lang = 'es',
  onInspect,
  onAddToHumidor
}) => {
  const t = TRANSLATIONS[lang];

  const ribbonColorClass = 
    vitola.footRibbon === 'scarlet'
      ? 'bg-[#a31621] text-[#ffdad6] border-[#a31621]'
      : vitola.footRibbon === 'emerald'
      ? 'bg-[#1b4d3e] text-[#bbf2de] border-[#1b4d3e]'
      : 'bg-[#d4af37] text-[#2b1a12] border-[#f4d06f]';

  // Format the Stitch tasting tag (e.g., "MADURO 58X5", "HABANO 2023")
  const tastingHeaderTag = `${vitola.collection.toUpperCase()} ${vitola.ringGauge}X${vitola.lengthInches.toFixed(1).replace('.0', '')}`;

  return (
    <div className="bg-[#1b1918] border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all duration-300 flex flex-col group relative">
      
      {/* Stitch Specification: Topped by uppercase tasting tags */}
      <div className="bg-[#141312] px-4 py-2 border-b border-[#d4af37]/20 flex items-center justify-between text-[11px] font-bold font-cinzel tracking-[0.18em] text-[#d4af37]">
        <span>{tastingHeaderTag}</span>
        <span className="text-[10px] text-[#99907c] font-mono">LOT {vitola.cellarLot.replace('Lot HR-', '')}</span>
      </div>

      {/* Designated Photography Window */}
      <div 
        onClick={() => onInspect(vitola)}
        className="relative h-64 overflow-hidden bg-[#121110] cursor-pointer border-b border-[#d4af37]/15 group"
      >
        <img
          src={vitola.image}
          alt={`${vitola.name} handmade cigar`}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95 contrast-105"
        />

        {/* Circular Signature Goat Emblem Wax Seal (Stitch exception) */}
        <div className="absolute top-3 left-3 w-8 h-8 rounded-full border border-[#d4af37] overflow-hidden shadow-md bg-[#141312] p-0.5 pointer-events-none">
          <img
            src={GOAT_MEDALLION}
            alt="Atelier Seal"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Foot Ribbon Accent Tag: Micro-badge in scarlet or emerald */}
        <div className="absolute top-3 right-3 z-10">
          <span className={`inline-block text-[10px] font-bold font-cinzel tracking-[0.14em] uppercase px-2 py-0.5 border ${ribbonColorClass} shadow-md`}>
            {vitola.footRibbonLabel}
          </span>
        </div>

        {/* Scrim Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b1918] via-transparent to-transparent opacity-80" />
        
        {/* Quick Inspect Hover Hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
          <span className="gold-outline-btn px-4 py-2 text-[11px]">
            {t.inspectSpecimen}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Format and Gauge */}
          <div className="flex items-center justify-between text-[11px] font-cinzel uppercase tracking-[0.16em] text-[#d4af37] mb-1.5">
            <span>{vitola.vitolaFormat}</span>
            <span className="text-[#99907c] tabular-nums font-mono">{vitola.ringGauge} RG × {vitola.lengthInches}"</span>
          </div>

          {/* Cigar Title */}
          <h3 
            onClick={() => onInspect(vitola)}
            className="text-xl font-serif font-semibold text-[#ede6d9] hover:text-[#f4d06f] cursor-pointer transition-colors leading-tight mb-2"
          >
            {vitola.name}
          </h3>

          {/* Wrapper Leaf Spec */}
          <div className="text-xs text-[#d0c5af] font-cinzel line-clamp-1 mb-3">
            <span className="text-[#99907c]">{t.wrapperLabel}</span> {vitola.wrapper}
          </div>

          {/* Stitch Chips & Badges: Sharp rectangular tags with 1px border, translucent wrapper brown (rgba(43, 26, 18, 0.6)), Cedar Cream (#E8D5B5) text */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {vitola.tastingNotes.slice(0, 3).map((note, index) => (
              <span 
                key={index}
                className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[rgba(43,26,18,0.7)] border border-[#d4af37]/30 text-[#e8d5b5]"
              >
                {note}
              </span>
            ))}
          </div>

          {/* Strength Bar: 1 to 5 Gold Ticks */}
          <div className="flex items-center justify-between py-2 border-t border-b border-[#d4af37]/15 text-xs font-cinzel text-[#d0c5af] mb-4">
            <span className="text-[11px] uppercase tracking-wider text-[#99907c]">{t.strengthLabel}</span>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((tick) => (
                <div
                  key={tick}
                  className={`w-3.5 h-1.5 border border-[#d4af37] ${
                    tick <= vitola.strength
                      ? 'bg-[#d4af37]'
                      : 'bg-transparent border-opacity-30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Pricing & Humidor Actions */}
        <div>
          <div className="flex items-baseline justify-between mb-3 text-xs font-cinzel">
            <div>
              <span className="text-lg font-bold text-[#f4d06f] tabular-nums font-mono">${vitola.singlePrice}</span>
              <span className="text-[#99907c] ml-1">/ stick</span>
            </div>
            <div className="text-right text-[11px] text-[#d0c5af]">
              <span className="text-[#ede6d9] font-bold tabular-nums font-mono">${vitola.boxPrice}</span>
              <span className="text-[#99907c] ml-1">/ cofre {vitola.boxCount}</span>
            </div>
          </div>

          {/* Action Button Row */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onAddToHumidor(vitola, 'single')}
              className="gold-outline-btn py-2 text-[11px] text-center"
            >
              {t.addSingle}
            </button>
            <button
              onClick={() => onAddToHumidor(vitola, 'box')}
              className="gold-foil-btn py-2 text-[11px] text-center"
            >
              {t.reserveBox}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
