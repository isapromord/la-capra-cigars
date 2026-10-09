import React, { useState } from 'react';
import { GUÍAS_LIST } from '../data/lacapra';

export const GuiasAficionado: React.FC = () => {
  const [selectedGuia, setSelectedGuia] = useState<(typeof GUÍAS_LIST)[0] | null>(null);

  return (
    <section className="w-full py-20 bg-transparent border-t border-[#4d4635]/30 relative z-10" id="guias">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-[#f2ca50] mb-2">
              <span className="material-symbols-outlined text-sm">local_library</span>
              <span className="font-label-sm text-xs uppercase tracking-[0.25em]">La Biblioteca del Humo</span>
            </div>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-[#e6e1df]">
              Guías del Aficionado &amp; Sabiduría Tabacalera
            </h2>
            <p className="font-body-md text-sm text-[#d0c5af] mt-2 max-w-xl">
              Artículos de fondo y guías maestras para perfeccionar el corte, el encendido, el maridaje y el cuidado de tu colección de tabacos.
            </p>
          </div>
          
          <button 
            onClick={() => setSelectedGuia(GUÍAS_LIST[0])}
            className="inline-flex items-center gap-2 font-label-sm text-xs text-[#f2ca50] uppercase tracking-widest hover:underline text-left cursor-pointer"
          >
            Ver todas las publicaciones <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        {/* Grid 4 Guías */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GUÍAS_LIST.map((guia) => (
            <article 
              key={guia.id}
              onClick={() => setSelectedGuia(guia)}
              className="bg-[#211f1e] p-6 border border-[#4d4635]/30 flex flex-col justify-between hover:border-[#f2ca50]/50 transition-all group cursor-pointer"
            >
              <div>
                <span className="font-label-sm text-[10px] text-[#f2ca50] uppercase tracking-widest block mb-2">
                  {guia.tag}
                </span>
                <h3 className="font-title-lg text-base text-[#e6e1df] group-hover:text-[#f2ca50] transition-colors leading-snug">
                  {guia.title}
                </h3>
                <p className="text-xs text-[#d0c5af] mt-3 leading-relaxed">
                  {guia.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#4d4635]/20 flex items-center justify-between">
                <span className="font-label-sm text-[10px] text-[#d0c5af] uppercase">
                  Lectura: {guia.readTime}
                </span>
                <span className="material-symbols-outlined text-[#f2ca50] text-sm group-hover:translate-x-1 transition-transform">
                  east
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Reader Modal */}
      {selectedGuia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#1d1b1a] border border-[#f2ca50]/50 max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setSelectedGuia(null)}
              className="absolute top-4 right-4 p-1 text-[#d0c5af] hover:text-[#f2ca50] border border-[#4d4635]/30"
              aria-label="Cerrar artículo"
            >
              <span className="material-symbols-outlined text-base">close</span>
            </button>

            <span className="font-label-sm text-[10px] text-[#f2ca50] uppercase tracking-widest block mb-2">
              {selectedGuia.tag} • Lectura: {selectedGuia.readTime}
            </span>
            <h3 className="font-headline-sm text-xl sm:text-2xl text-[#e6e1df] mb-4">
              {selectedGuia.title}
            </h3>
            <p className="font-body-md text-xs sm:text-sm text-[#d0c5af] leading-relaxed mb-6">
              {selectedGuia.content}
            </p>
            <div className="pt-4 border-t border-[#4d4635]/30 flex justify-end">
              <button
                onClick={() => setSelectedGuia(null)}
                className="bg-[#f2ca50] text-[#3c2f00] font-label-sm text-xs uppercase px-5 py-2 font-bold"
              >
                Cerrar Lectura
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
