import React from 'react';
import { VITOLAS_LIST, VitolaItem } from '../data/lacapra';

interface CatalogoVitolasProps {
  onSelectVitola: (vitola: VitolaItem) => void;
}

export const CatalogoVitolas: React.FC<CatalogoVitolasProps> = ({ onSelectVitola }) => {
  return (
    <section className="w-full py-20 bg-transparent relative z-10" id="catalogo">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-[#f2ca50] mb-2">
              <span className="material-symbols-outlined text-sm">menu_book</span>
              <span className="font-label-sm text-xs uppercase tracking-[0.25em]">
                Catálogo de Vitolas de Autor
              </span>
            </div>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-[#e6e1df]">
              Compendio de Selección Privada
            </h2>
            <p className="font-body-md text-sm text-[#d0c5af] mt-2 max-w-xl">
              Fichas técnicas y sensoriales elaboradas por nuestros maestros ligadores. Disponibilidad por asignación en cava o en boutiques asociadas.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-label-sm text-xs uppercase tracking-widest text-[#d0c5af]">Lotes Activos:</span>
            <span className="px-3 py-1 bg-[#211f1e] text-[#f2ca50] font-label-sm text-xs border border-[#f2ca50]/20">
              Cosecha 2023 - 2024
            </span>
          </div>
        </div>

        {/* Grid 3 Vitolas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {VITOLAS_LIST.map((vitola) => (
            <article 
              key={vitola.id}
              className="bg-[#1d1b1a] border border-[#4d4635]/30 flex flex-col shadow-xl hover:border-[#f2ca50]/50 transition-all duration-300 group"
            >
              {/* Image Container with Badges */}
              <div className="relative w-full aspect-[4/5] bg-[#0f0e0d] overflow-hidden">
                <img 
                  alt={vitola.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                  src={vitola.image} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1d1b1a] via-transparent to-transparent"></div>
                
                {/* Badges Top Left */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`font-label-sm text-[10px] uppercase px-2.5 py-1 tracking-widest ${
                    vitola.id === 'toro-maduro-barrica' 
                      ? 'bg-[#2B1A12] text-[#f2ca50] border border-[#f2ca50]/30'
                      : vitola.id === 'habano-seleccion-cava'
                      ? 'bg-[#A31621] text-[#e6e1df]'
                      : 'bg-[#1B4D3E] text-[#e6e1df]'
                  }`}>
                    {vitola.badge1}
                  </span>
                  <span className={`font-label-sm text-[10px] uppercase px-2 py-1 tracking-widest ${
                    vitola.id === 'toro-maduro-barrica'
                      ? 'bg-[#f2ca50] text-[#3c2f00] font-bold'
                      : 'bg-[#363433] text-[#e6e1df] border border-[#4d4635]/30'
                  }`}>
                    {vitola.badge2}
                  </span>
                </div>

                {/* Cepo Badge Bottom Right */}
                <div className="absolute bottom-4 right-4 bg-[#363433]/90 backdrop-blur-sm px-3 py-1 border border-[#4d4635]/40">
                  <span className="font-label-sm text-[10px] text-[#e6e1df] uppercase tracking-wider">
                    {vitola.cepoMedida}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col flex-1 justify-between gap-5">
                <div>
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-headline-sm text-2xl text-[#e6e1df]">
                      {vitola.name}
                    </h3>
                    <span className="font-label-sm text-xs text-[#f2ca50] uppercase tracking-widest font-bold">
                      {vitola.reservaBadge}
                    </span>
                  </div>
                  
                  <p className="font-label-sm text-[11px] text-[#d0c5af] uppercase mt-1 tracking-wider">
                    {vitola.subtitulo}
                  </p>

                  {/* Barra de Fortaleza */}
                  <div className="flex items-center justify-between my-4 bg-[#211f1e] p-2.5 border border-[#4d4635]/20">
                    <span className="font-label-sm text-[10px] uppercase text-[#d0c5af]">Fortaleza</span>
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((tick) => (
                        <span 
                          key={tick}
                          className={`w-4 h-2 ${
                            tick <= vitola.fortalezaTicks ? 'bg-[#f2ca50]' : 'bg-[#363433]'
                          }`}
                        />
                      ))}
                      <span className="font-label-sm text-[10px] text-[#e6e1df] ml-2">
                        {vitola.fortalezaLabel}
                      </span>
                    </div>
                  </div>

                  {/* Especificaciones Técnicas de Cata */}
                  <div className="grid grid-cols-2 gap-2 text-xs bg-[#0f0e0d] p-3 border border-[#4d4635]/20 mb-4 font-body-sm">
                    <div>
                      <span className="text-[#d0c5af] font-label-sm text-[10px] block">CAPA</span> 
                      {vitola.capa}
                    </div>
                    <div>
                      <span className="text-[#d0c5af] font-label-sm text-[10px] block">CAPOTE</span> 
                      {vitola.capote}
                    </div>
                    <div>
                      <span className="text-[#d0c5af] font-label-sm text-[10px] block">TRIPA</span> 
                      {vitola.tripa}
                    </div>
                    <div>
                      <span className="text-[#d0c5af] font-label-sm text-[10px] block">TIEMPO</span> 
                      {vitola.tiempo}
                    </div>
                  </div>

                  {/* Notas Sensoriales & Maridaje */}
                  <div className="flex flex-col gap-2">
                    <p className="text-xs text-[#d0c5af] leading-relaxed">
                      <strong className="text-[#f2ca50] font-label-sm tracking-wider uppercase block text-[10px]">
                        Notas Sensoriales:
                      </strong>
                      {vitola.notas}
                    </p>
                    <p className="text-xs text-[#d0c5af] mt-1 leading-relaxed bg-[#211f1e] p-2 border-l-2 border-[#f2ca50]">
                      <strong className="text-[#f2ca50] font-label-sm tracking-wider uppercase block text-[10px]">
                        Maridaje de Autor:
                      </strong>
                      {vitola.maridaje}
                    </p>
                  </div>
                </div>

                {/* Action CTA */}
                <button 
                  onClick={() => onSelectVitola(vitola)}
                  className="w-full text-center py-2.5 bg-[#f2ca50] hover:bg-[#F4D06F] text-[#3c2f00] font-label-sm text-[11px] uppercase tracking-[0.2em] font-bold transition-all shadow-md mt-2" 
                >
                  Solicitar Asignación / Consultar Disponibilidad
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
