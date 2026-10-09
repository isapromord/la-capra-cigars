import React, { useState, useMemo } from 'react';
import { Vitola } from '../types';
import { VitolaCard } from './VitolaCard';
import { Language, TRANSLATIONS } from '../data/translations';

interface VitolaCollectionProps {
  vitolas: Vitola[];
  lang?: Language;
  onInspect: (vitola: Vitola) => void;
  onAddToHumidor: (vitola: Vitola, unitType: 'single' | 'box') => void;
}

export const VitolaCollection: React.FC<VitolaCollectionProps> = ({
  vitolas,
  lang = 'es',
  onInspect,
  onAddToHumidor
}) => {
  const t = TRANSLATIONS[lang];
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'default' | 'ring-gauge' | 'strength' | 'price'>('default');

  const filterTabs = [
    { key: 'All', label: t.filterAll },
    { key: 'Maduro Reserve', label: t.filterMaduro },
    { key: 'Habano Sol', label: t.filterHabano },
    { key: 'Vintage 2019', label: t.filterVintage },
    { key: 'Grandes Vitolas', label: t.filterGrandes }
  ];

  const filteredAndSortedVitolas = useMemo(() => {
    let result = [...vitolas];
    if (activeFilter !== 'All') {
      result = result.filter(v => v.collection === activeFilter);
    }

    if (sortBy === 'ring-gauge') {
      result.sort((a, b) => b.ringGauge - a.ringGauge);
    } else if (sortBy === 'strength') {
      result.sort((a, b) => b.strength - a.strength);
    } else if (sortBy === 'price') {
      result.sort((a, b) => b.singlePrice - a.singlePrice);
    }

    return result;
  }, [vitolas, activeFilter, sortBy]);

  return (
    <section id="collection" className="py-24 border-b border-[#d4af37]/20 relative">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 md:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-[#d4af37]/20">
          <div>
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#d4af37] font-cinzel mb-2">
              {t.collectionKicker}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-[#ede6d9]">
              {t.collectionTitle}
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#d0c5af] font-cinzel max-w-md leading-relaxed">
            {t.collectionDesc}
          </p>
        </div>

        {/* Filter & Sort Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 pb-4 border-b border-[#d4af37]/15">
          {/* Segmented Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#181615] border border-[#d4af37]/25">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`px-3.5 py-1.5 text-xs font-cinzel uppercase tracking-[0.12em] transition-colors whitespace-nowrap ${
                  activeFilter === tab.key
                    ? 'bg-[#d4af37] text-[#121110] font-bold'
                    : 'text-[#d0c5af] hover:text-[#f4d06f] hover:bg-[#d4af37]/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 text-xs font-cinzel text-[#d0c5af]">
            <span className="text-[#99907c] uppercase tracking-wider text-[11px]">{t.sortByLabel}</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#181615] border border-[#d4af37]/30 px-3 py-1.5 text-xs text-[#ede6d9] focus:outline-none focus:border-[#d4af37] font-cinzel uppercase cursor-pointer"
            >
              <option value="default">{t.sortDefault}</option>
              <option value="ring-gauge">{t.sortRing}</option>
              <option value="strength">{t.sortStrength}</option>
              <option value="price">{t.sortPrice}</option>
            </select>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredAndSortedVitolas.map((vitola) => (
            <VitolaCard
              key={vitola.id}
              vitola={vitola}
              lang={lang}
              onInspect={onInspect}
              onAddToHumidor={onAddToHumidor}
            />
          ))}
        </div>

        {/* Cellar Lot Notice */}
        <div className="mt-14 p-6 bg-[#181615] border border-[#d4af37]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-cinzel">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-[#d4af37]" />
            <span className="text-[#ede6d9]">
              {lang === 'es' 
                ? 'Cada despacho de cofre incluye sello de preservación de cedro español y paquete higrómetro calibrado.'
                : 'Every box shipment includes a certified Spanish Cedar humidor preservation seal and hygrometer calibrated pack.'}
            </span>
          </div>
          <span className="text-[#99907c] uppercase tracking-widest whitespace-nowrap">
            LOTE ACTIVO HR-2026-ACT
          </span>
        </div>

      </div>
    </section>
  );
};
