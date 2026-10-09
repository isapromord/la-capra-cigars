import React, { useState } from 'react';
import { TASTING_NOTES_PALETTE, VITOLAS_DATA } from '../data/vitolas';
import { Vitola } from '../types';

interface TastingSalonProps {
  onInspect: (vitola: Vitola) => void;
  onAddToHumidor: (vitola: Vitola, unitType: 'single' | 'box') => void;
}

export const TastingSalon: React.FC<TastingSalonProps> = ({
  onInspect,
  onAddToHumidor
}) => {
  const [selectedNote, setSelectedNote] = useState<string>('Spanish Cedar');

  const activeNoteData = TASTING_NOTES_PALETTE.find(n => n.note === selectedNote) || TASTING_NOTES_PALETTE[0];

  // Find vitolas containing this note
  const matchingVitolas = VITOLAS_DATA.filter(v => 
    v.tastingNotes.some(tn => tn.toLowerCase().includes(selectedNote.toLowerCase()) || selectedNote.toLowerCase().includes(tn.toLowerCase()))
  );

  return (
    <section id="tasting-salon" className="py-24 border-b border-[#d4af37]/20 relative">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 md:px-16">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-[#d4af37]/20">
          <div>
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#d4af37] font-cinzel mb-2">
              Sommelier Profiling & Sensory Notes
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-[#ede6d9]">
              The Tasting Salon
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#d0c5af] font-cinzel max-w-md leading-relaxed">
            The aroma of cured Cibao leaf reveals itself through the retrohale. Explore the foundational aromatic pillars and their corresponding cellar specimens.
          </p>
        </div>

        {/* Sensory Wheel Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {TASTING_NOTES_PALETTE.map((item) => (
            <button
              key={item.note}
              onClick={() => setSelectedNote(item.note)}
              className={`p-4 text-left border transition-all flex flex-col justify-between font-cinzel ${
                selectedNote === item.note
                  ? 'bg-[#2b1a12] border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.25)]'
                  : 'bg-[#181615] border-[#d4af37]/20 hover:border-[#d4af37]/50'
              }`}
            >
              <span className="text-[10px] text-[#99907c] uppercase tracking-wider block mb-2">
                {item.category}
              </span>
              <span className={`text-xs font-bold uppercase tracking-wider ${
                selectedNote === item.note ? 'text-[#f4d06f]' : 'text-[#ede6d9]'
              }`}>
                {item.note}
              </span>
            </button>
          ))}
        </div>

        {/* Active Sensory Focus Card */}
        <div className="bg-[#1b1918] border border-[#d4af37]/30 p-6 sm:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-cinzel uppercase tracking-[0.18em] text-[#d4af37]">
                Aromatic Compound: {activeNoteData.category}
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#ede6d9]">
                {activeNoteData.note}
              </h3>
              <p className="text-xs sm:text-sm text-[#d0c5af] font-cinzel leading-relaxed">
                {activeNoteData.description}
              </p>
              <div className="pt-4 border-t border-[#d4af37]/15 text-[11px] font-cinzel text-[#99907c] uppercase tracking-wider">
                Recommended Pairing: Aged 15-Year Dominican Dark Rum, Espresso Macchiato, or Single Malt Islay Scotch.
              </div>
            </div>

            {/* Matching Vitolas for this Note */}
            <div className="lg:col-span-7">
              <div className="text-xs font-cinzel uppercase tracking-[0.16em] text-[#f4d06f] mb-4 font-bold">
                Specimens Expressing {activeNoteData.note} ({matchingVitolas.length})
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {matchingVitolas.map((v) => (
                  <div key={v.id} className="bg-[#141312] border border-[#d4af37]/20 p-4 flex gap-3">
                    <img
                      src={v.image}
                      alt={v.name}
                      className="w-16 h-20 object-cover border border-[#d4af37]/20 shrink-0"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-sm font-serif font-semibold text-[#ede6d9] line-clamp-1">
                          {v.name}
                        </h4>
                        <div className="text-[10px] text-[#d4af37] font-cinzel uppercase tracking-wider">
                          {v.vitolaFormat} · {v.ringGauge} RG
                        </div>
                        <div className="text-[11px] text-[#ede6d9] font-mono mt-1 font-bold">
                          ${v.singlePrice} <span className="text-[#99907c] text-[10px]">/ stick</span>
                        </div>
                      </div>

                      <div className="flex gap-2 pt-2">
                        <button
                          onClick={() => onInspect(v)}
                          className="text-[10px] font-cinzel uppercase tracking-wider text-[#d0c5af] hover:text-[#f4d06f] underline decoration-[#d4af37]/40"
                        >
                          Inspect
                        </button>
                        <span className="text-[#4d4635]">·</span>
                        <button
                          onClick={() => onAddToHumidor(v, 'single')}
                          className="text-[10px] font-cinzel uppercase tracking-wider text-[#d4af37] hover:text-[#f4d06f] font-bold"
                        >
                          + Humidor
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
