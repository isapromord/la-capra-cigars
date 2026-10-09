import React from 'react';
import { ATELIER_CHAPTERS, HUMIDOR_IMAGE } from '../data/vitolas';

export const ProvenanceStory: React.FC = () => {
  return (
    <section id="provenance" className="py-24 bg-[#141312] border-b border-[#d4af37]/20 relative">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 md:px-16">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#d4af37] font-cinzel mb-2">
            The Dominican Lineage · Est. 1928
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-[#ede6d9] mb-4">
            The Ritual of Patience & Spanish Cedar
          </h2>
          <p className="text-sm sm:text-base text-[#d0c5af] font-cinzel leading-relaxed">
            In Santiago de los Caballeros, tobacco rolling is not a manufacture; it is an uninterrupted monastic tradition passed between master torcedores.
          </p>
        </div>

        {/* 2-Column Split: Visual & Editorial Chapters */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Humidor Vitrine Feature Card */}
          <div className="lg:col-span-5 relative bg-[#181615] border border-[#d4af37]/30 p-4">
            <div className="relative overflow-hidden h-[420px] border border-[#d4af37]/20">
              <img
                src={HUMIDOR_IMAGE}
                alt="Spanish cedar humidor vitrine with brass hygrometer and aged cigar boxes"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-transparent to-transparent opacity-80" />
            </div>

            <div className="p-4 pt-5 font-cinzel space-y-2">
              <div className="flex items-center justify-between text-[11px] text-[#d4af37] tracking-[0.16em] uppercase font-bold">
                <span>Private Cellar Locker #08</span>
                <span>Santiago Vault</span>
              </div>
              <p className="text-xs text-[#d0c5af] leading-relaxed">
                Every Atelier box rests in seasoned virgin Spanish cedar boxes at a constant 69% relative humidity and 19.5°C before release.
              </p>
              <div className="pt-3 border-t border-[#d4af37]/15 flex justify-between text-[10px] text-[#99907c] uppercase tracking-wider font-mono">
                <span>Curing Temperature: 19.5°C</span>
                <span>Relative Humidity: 69.2%</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Chapters */}
          <div className="lg:col-span-7 space-y-8">
            {ATELIER_CHAPTERS.map((chapter) => (
              <div 
                key={chapter.chapter}
                className="border-b border-[#d4af37]/15 pb-6 last:border-b-0"
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#d4af37] font-cinzel">
                    {chapter.chapter}
                  </span>
                  <span className="text-[#a3802a]">·</span>
                  <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#ede6d9]">
                    {chapter.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#d0c5af] font-cinzel leading-relaxed pl-0 sm:pl-4 border-l-0 sm:border-l border-[#d4af37]/20">
                  {chapter.content}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
