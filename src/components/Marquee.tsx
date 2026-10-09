import React from 'react';

export const Marquee: React.FC = () => {
  return (
    <div className="w-full bg-[#0f0e0d] py-3.5 border-y border-[#4d4635]/30 overflow-hidden select-none">
      <div className="flex items-center justify-around gap-8 text-[#99907c] uppercase font-label-sm text-xs tracking-[0.3em] opacity-85 whitespace-nowrap px-4">
        <span>✦ Valle Del Cibao</span>
        <span>•</span>
        <span>Capa San Andrés &amp; Habano</span>
        <span>•</span>
        <span>Entubado Manual Tradicional</span>
        <span>•</span>
        <span>Guillotina de Doble Hoja</span>
        <span>•</span>
        <span>Control Higrométrico 70% HR</span>
        <span>•</span>
        <span>Cigar Lounge Concierge</span>
      </div>
    </div>
  );
};
