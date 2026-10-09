import React, { useState } from 'react';
import { VitolaGaugeMeter } from './VitolaGaugeMeter';
import { VITOLAS_DATA } from '../data/vitolas';
import { Vitola } from '../types';

interface VitolaGaugeConfiguratorProps {
  onInspect: (vitola: Vitola) => void;
  onAddToHumidor: (vitola: Vitola, unitType: 'single' | 'box') => void;
}

export const VitolaGaugeConfigurator: React.FC<VitolaGaugeConfiguratorProps> = ({
  onInspect,
  onAddToHumidor
}) => {
  const [gauge, setGauge] = useState(54);
  const [length, setLength] = useState(6.0);

  // Determine closest vitola format
  const getFormatClassification = (rg: number, len: number) => {
    if (rg <= 42 && len >= 7.0) return { name: 'Lancero Elegante', smokeTime: '55-65 min', smokeType: 'Intense, concentrated wrapper oils & cooler burn ribbon.' };
    if (rg <= 44 && len <= 5.5) return { name: 'Corona / Petit Corona', smokeTime: '40-50 min', smokeType: 'Quick, brisk burn with lively spice highlights.' };
    if (rg >= 50 && rg <= 54 && len >= 4.8 && len <= 5.5) return { name: 'Classic Robusto', smokeTime: '50-60 min', smokeType: 'Optimal harmony of wrapper-to-filler blend ratio.' };
    if (rg >= 52 && rg <= 56 && len >= 5.8 && len <= 6.5) return { name: 'Gran Toro / Toro Gordo', smokeTime: '70-85 min', smokeType: 'Luxuriously cool smoke volume and layered complexity.' };
    if (rg <= 50 && len >= 6.8) return { name: 'Churchill', smokeTime: '80-95 min', smokeType: 'Aristocratic smoking arc with three progressive flavor thirds.' };
    if (rg >= 50 && len >= 7.5) return { name: 'Doble Corona', smokeTime: '100-120 min', smokeType: 'Commanding multi-hour contemplation with velvety density.' };
    if (rg >= 58) return { name: 'Gordo / Gran Titan', smokeTime: '85-110 min', smokeType: 'Maximized airflow, cooler combustive temperature, lavish smoke.' };
    return { name: 'Special Atelier Cut', smokeTime: '60-75 min', smokeType: 'Custom hand-bunched proportion by master torcedor.' };
  };

  const currentClassification = getFormatClassification(gauge, length);

  // Find nearest vitola in data
  const nearestVitola = VITOLAS_DATA.reduce((prev, curr) => {
    const prevDiff = Math.abs(prev.ringGauge - gauge) + Math.abs(prev.lengthInches - length) * 5;
    const currDiff = Math.abs(curr.ringGauge - gauge) + Math.abs(curr.lengthInches - length) * 5;
    return currDiff < prevDiff ? curr : prev;
  });

  return (
    <section id="gauge-meter" className="py-24 bg-[#181615] border-b border-[#d4af37]/20 relative">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 md:px-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#d4af37] font-cinzel mb-2">
            Precision Vitola Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-[#ede6d9] mb-4">
            The Vitola Gauge Caliper
          </h2>
          <p className="text-xs sm:text-sm text-[#d0c5af] font-cinzel leading-relaxed">
            In classical Dominican rolling, the exact millimeter ratio of ring diameter to leaf length dictates burn velocity, draw tension, and smoke aeration.
          </p>
        </div>

        {/* Interactive Caliper Studio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-[#141312] border border-[#d4af37]/30 p-6 sm:p-8 space-y-8">
            <div>
              <div className="flex items-center justify-between text-xs font-cinzel uppercase tracking-[0.14em] text-[#d4af37] mb-2">
                <span>Ring Gauge Caliper</span>
                <span className="text-lg font-bold font-mono text-[#f4d06f] tabular-nums">
                  {gauge} RG ({( (gauge / 64) * 25.4 ).toFixed(1)} mm)
                </span>
              </div>
              <p className="text-[11px] text-[#99907c] font-cinzel mb-4">
                Measured in 64ths of an inch. Higher gauge retains a cooler burn cone; lower gauge intensifies wrapper oils.
              </p>
              
              <input
                type="range"
                min="38"
                max="60"
                step="2"
                value={gauge}
                onChange={(e) => setGauge(Number(e.target.value))}
                className="w-full accent-[#d4af37] bg-[#2b1a12] cursor-ew-resize h-2 border border-[#d4af37]/30"
              />
              
              <div className="flex justify-between text-[10px] text-[#99907c] font-mono mt-2 tracking-wider">
                <span>38 RG (Slim)</span>
                <span>48 RG (Classic)</span>
                <span>54 RG (Modern)</span>
                <span>60 RG (Gordo)</span>
              </div>
            </div>

            <div className="pt-6 border-t border-[#d4af37]/15">
              <div className="flex items-center justify-between text-xs font-cinzel uppercase tracking-[0.14em] text-[#d4af37] mb-2">
                <span>Vitola Length Caliper</span>
                <span className="text-lg font-bold font-mono text-[#f4d06f] tabular-nums">
                  {length.toFixed(2)}" ({ (length * 25.4).toFixed(0) } mm)
                </span>
              </div>
              <p className="text-[11px] text-[#99907c] font-cinzel mb-4">
                Length dictates the evolutionary smoking thirds: initial cedar introduction, core body, and intense spiced finish.
              </p>

              <input
                type="range"
                min="4.0"
                max="8.0"
                step="0.25"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full accent-[#d4af37] bg-[#2b1a12] cursor-ew-resize h-2 border border-[#d4af37]/30"
              />

              <div className="flex justify-between text-[10px] text-[#99907c] font-mono mt-2 tracking-wider">
                <span>4.0" (Express)</span>
                <span>5.5" (Robusto)</span>
                <span>6.5" (Toro)</span>
                <span>8.0" (Presidente)</span>
              </div>
            </div>

            {/* Real-time Rendered Gauge Meter */}
            <div className="pt-4">
              <VitolaGaugeMeter
                ringGauge={gauge}
                lengthInches={length}
                formatName={currentClassification.name}
              />
            </div>
          </div>

          {/* Dynamic Specimen Result Column */}
          <div className="lg:col-span-6 bg-[#141312] border border-[#d4af37]/30 p-6 sm:p-8 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#d4af37]/20 text-xs font-cinzel tracking-[0.16em] uppercase">
                <span className="text-[#99907c]">Calculated Vitola Format</span>
                <span className="text-[#d4af37] font-bold">{currentClassification.name}</span>
              </div>

              <div className="my-6 space-y-4 font-cinzel">
                <div className="bg-[#1b1918] p-4 border border-[#d4af37]/15">
                  <div className="text-[10px] uppercase text-[#99907c] tracking-widest mb-1">
                    Burn Dynamics & Thermal Arc
                  </div>
                  <p className="text-xs text-[#ede6d9] leading-relaxed">
                    {currentClassification.smokeType}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-[#1b1918] p-3 border border-[#d4af37]/15">
                    <span className="text-[10px] uppercase text-[#99907c] block">Estimated Session</span>
                    <span className="text-base font-bold text-[#f4d06f] font-mono">{currentClassification.smokeTime}</span>
                  </div>
                  <div className="bg-[#1b1918] p-3 border border-[#d4af37]/15">
                    <span className="text-[10px] uppercase text-[#99907c] block">Draw Resistance</span>
                    <span className="text-base font-bold text-[#ede6d9] font-mono">1.1 - 1.3 inHg</span>
                  </div>
                </div>
              </div>

              {/* Recommended Matching Blend From Cellar */}
              <div className="p-4 bg-[#2b1a12]/50 border border-[#d4af37]/30">
                <div className="flex items-center justify-between text-[11px] font-cinzel uppercase text-[#d4af37] mb-2 font-bold">
                  <span>Cellar Match Specimen</span>
                  <span className="text-[10px] text-[#99907c]">Near-Exact Caliper</span>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={nearestVitola.image}
                    alt={nearestVitola.name}
                    className="w-16 h-16 object-cover border border-[#d4af37]/30"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-serif font-semibold text-[#ede6d9]">
                      {nearestVitola.name}
                    </h4>
                    <p className="text-[11px] text-[#d0c5af] font-cinzel">
                      {nearestVitola.ringGauge} RG × {nearestVitola.lengthInches}" · ${nearestVitola.singlePrice}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#d4af37]/20 flex gap-3">
              <button
                onClick={() => onInspect(nearestVitola)}
                className="flex-1 gold-outline-btn py-3 text-xs text-center"
              >
                Inspect Calibrated Specimen
              </button>
              <button
                onClick={() => onAddToHumidor(nearestVitola, 'box')}
                className="flex-1 gold-foil-btn py-3 text-xs text-center"
              >
                Reserve Cellar Match
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
