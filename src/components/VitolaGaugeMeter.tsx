import React from 'react';

interface VitolaGaugeMeterProps {
  ringGauge: number;
  lengthInches: number;
  formatName?: string;
  showDetails?: boolean;
}

export const VitolaGaugeMeter: React.FC<VitolaGaugeMeterProps> = ({
  ringGauge,
  lengthInches,
  formatName,
  showDetails = true
}) => {
  // Ring gauge standard range: 38 (slim) to 60 (gordo)
  const minRing = 38;
  const maxRing = 60;
  const ringPercent = Math.min(Math.max(((ringGauge - minRing) / (maxRing - minRing)) * 100, 0), 100);

  // Length range: 4.0 to 8.0 inches
  const minLength = 4.0;
  const maxLength = 8.0;
  const lengthPercent = Math.min(Math.max(((lengthInches - minLength) / (maxLength - minLength)) * 100, 0), 100);

  // Conversion: ring gauge / 64 inches = diameter in mm
  const diameterMm = ((ringGauge / 64) * 25.4).toFixed(1);
  const lengthMm = (lengthInches * 25.4).toFixed(0);

  return (
    <div className="bg-[#181615] border border-[#d4af37]/25 p-4 flex flex-col gap-3 font-cinzel">
      {/* Header bar */}
      <div className="flex items-center justify-between text-xs tracking-[0.14em] uppercase text-[#d0c5af] border-b border-[#d4af37]/15 pb-2">
        <span className="text-[#f4d06f] font-semibold">Vitola Gauge Matrix</span>
        {formatName && <span className="text-[#ede6d9] font-medium">{formatName}</span>}
      </div>

      {/* Circular Ring Gauge Gauge (Stitch Ornamental Exception) + Horizontal Notched Bar */}
      <div className="flex items-center gap-4 py-1">
        
        {/* Circular Gauge Dial */}
        <div className="relative w-16 h-16 rounded-full border-2 border-[#d4af37] bg-[#121110] flex flex-col items-center justify-center p-1 shadow-[0_0_12px_rgba(212,175,55,0.25)] shrink-0">
          <div className="w-12 h-12 rounded-full border border-dashed border-[#d4af37]/40 flex flex-col items-center justify-center bg-[#2b1a12]">
            <span className="text-[11px] font-bold font-mono text-[#f4d06f] tabular-nums leading-none">
              {ringGauge}
            </span>
            <span className="text-[7px] text-[#99907c] font-cinzel uppercase mt-0.5">
              /64"
            </span>
          </div>
        </div>

        {/* Ring Gauge Horizontal Track */}
        <div className="flex-1 flex flex-col gap-1.5">
          <div className="flex justify-between text-[11px] uppercase tracking-wider text-[#99907c]">
            <span>Cepo: <strong className="text-[#f4d06f] font-bold tabular-nums font-mono">{ringGauge} RG</strong> ({diameterMm} mm)</span>
            <span className="text-[10px] text-[#99907c]">{ringGauge < 46 ? 'Fino' : ringGauge <= 52 ? 'Clásico' : 'Gordo'}</span>
          </div>
          
          {/* Notched graduated track */}
          <div className="relative h-5 bg-[#121110] border border-[#d4af37]/30 flex items-center px-1">
            {/* Fine graduation notches */}
            <div className="absolute inset-0 flex justify-between px-2 pointer-events-none items-center opacity-30">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} className={`w-[1px] bg-[#d4af37] ${i % 3 === 0 ? 'h-3' : 'h-1.5'}`} />
              ))}
            </div>

            {/* Active fill */}
            <div 
              className="h-2 bg-gradient-to-r from-[#8a3c1b] via-[#a3802a] to-[#d4af37] transition-all duration-300"
              style={{ width: `${ringPercent}%` }}
            />

            {/* Caliper indicator pin */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-[#f4d06f] shadow-[0_0_8px_#f4d06f] transition-all duration-300"
              style={{ left: `calc(${ringPercent}% - 2px)` }}
            />
          </div>
          <div className="flex justify-between text-[9px] text-[#99907c] tracking-widest font-mono">
            <span>38 RG</span>
            <span>44 RG</span>
            <span>50 RG</span>
            <span>54 RG</span>
            <span>60 RG</span>
          </div>
        </div>

      </div>

      {/* Length Track */}
      <div className="flex flex-col gap-1.5 pt-1">
        <div className="flex justify-between text-[11px] uppercase tracking-wider text-[#99907c]">
          <span>Longitud: <strong className="text-[#f4d06f] font-bold tabular-nums font-mono">{lengthInches.toFixed(1)}"</strong> ({lengthMm} mm)</span>
          <span className="text-[10px] text-[#99907c]">{lengthInches >= 7 ? 'Sesión Prolongada' : 'Fumada Estándar'}</span>
        </div>
        
        {/* Notched graduated track */}
        <div className="relative h-5 bg-[#121110] border border-[#d4af37]/30 flex items-center px-1">
          {/* Fine graduation notches */}
          <div className="absolute inset-0 flex justify-between px-2 pointer-events-none items-center opacity-30">
            {Array.from({ length: 17 }).map((_, i) => (
              <span key={i} className={`w-[1px] bg-[#d4af37] ${i % 4 === 0 ? 'h-3.5' : 'h-2'}`} />
            ))}
          </div>

          {/* Active fill */}
          <div 
            className="h-2 bg-gradient-to-r from-[#2b1a12] via-[#8a3c1b] to-[#d4af37] transition-all duration-300"
            style={{ width: `${lengthPercent}%` }}
          />

          {/* Caliper indicator pin */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-[#f4d06f] shadow-[0_0_8px_#f4d06f] transition-all duration-300"
            style={{ left: `calc(${lengthPercent}% - 2px)` }}
          />
        </div>
        <div className="flex justify-between text-[9px] text-[#99907c] tracking-widest font-mono">
          <span>4.0"</span>
          <span>5.0"</span>
          <span>6.0"</span>
          <span>7.0"</span>
          <span>8.0"</span>
        </div>
      </div>

      {showDetails && (
        <div className="mt-1 pt-2 border-t border-[#d4af37]/15 flex items-center justify-between text-[10px] text-[#99907c] tracking-widest uppercase">
          <span>Calibración de Taller</span>
          <span className="text-[#d4af37]">Entubar Rolling Calibrated</span>
        </div>
      )}
    </div>
  );
};
