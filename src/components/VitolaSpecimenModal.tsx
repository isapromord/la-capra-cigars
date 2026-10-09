import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { Vitola } from '../types';
import { VitolaGaugeMeter } from './VitolaGaugeMeter';

interface VitolaSpecimenModalProps {
  vitola: Vitola | null;
  onClose: () => void;
  onAddToHumidor: (vitola: Vitola, unitType: 'single' | 'box', quantity: number) => void;
}

export const VitolaSpecimenModal: React.FC<VitolaSpecimenModalProps> = ({
  vitola,
  onClose,
  onAddToHumidor
}) => {
  if (!vitola) return null;

  const [selectedUnit, setSelectedUnit] = useState<'single' | 'box'>('box');
  const [qty, setQty] = useState(1);
  const [addedToast, setAddedToast] = useState(false);

  const handleAdd = () => {
    onAddToHumidor(vitola, selectedUnit, qty);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2200);
  };

  const currentPrice = selectedUnit === 'single' ? vitola.singlePrice * qty : vitola.boxPrice * qty;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl bg-[#1b1918] border border-[#d4af37]/40 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(138,60,27,0.2)] my-8">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#d4af37]/25 bg-[#141312]">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#d4af37] font-cinzel">
              Specimen Archive #{vitola.cellarLot}
            </span>
            <span className="text-xs text-[#99907c]">·</span>
            <span className="text-[11px] uppercase tracking-wider text-[#d0c5af] font-cinzel">
              Rolled {vitola.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#d0c5af] hover:text-[#f4d06f] border border-[#d4af37]/30 hover:border-[#d4af37]"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Main Body */}
        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
          {/* Top Overview: Photography & Primary Data */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-6 border-b border-[#d4af37]/20">
            {/* Image Column */}
            <div className="md:col-span-5 relative bg-[#121110] border border-[#d4af37]/20 overflow-hidden h-72 md:h-full min-h-[260px]">
              <img
                src={vitola.image}
                alt={vitola.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter brightness-95"
              />
              <div className="absolute bottom-3 left-3 bg-[#141312]/90 border border-[#d4af37]/30 px-3 py-1 text-[10px] font-cinzel uppercase text-[#f4d06f] tracking-widest">
                Aging Cellar: {vitola.agingYears} Years Spanish Cedar
              </div>
            </div>

            {/* Title & Quick Blend Specs */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <div>
                <div className="text-xs font-cinzel uppercase tracking-[0.18em] text-[#d4af37] mb-1">
                  {vitola.collection} · {vitola.vitolaFormat}
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#ede6d9] mb-3 leading-tight">
                  {vitola.name}
                </h2>
                <p className="text-xs text-[#d0c5af] font-cinzel leading-relaxed mb-4">
                  {vitola.description}
                </p>

                {/* Blend Composition Sheet */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-cinzel bg-[#141312] p-3 border border-[#d4af37]/15 mb-4">
                  <div>
                    <span className="text-[#99907c] uppercase">Wrapper:</span>
                    <div className="text-[#e8d5b5] font-medium mt-0.5">{vitola.wrapper}</div>
                  </div>
                  <div>
                    <span className="text-[#99907c] uppercase">Binder:</span>
                    <div className="text-[#e8d5b5] font-medium mt-0.5">{vitola.binder}</div>
                  </div>
                  <div className="sm:col-span-2 pt-1 border-t border-white/5">
                    <span className="text-[#99907c] uppercase">Filler Leaf:</span>
                    <div className="text-[#e8d5b5] font-medium mt-0.5">{vitola.filler}</div>
                  </div>
                </div>
              </div>

              {/* Vitola Gauge Meter */}
              <VitolaGaugeMeter
                ringGauge={vitola.ringGauge}
                lengthInches={vitola.lengthInches}
                formatName={vitola.vitolaFormat}
              />
            </div>
          </div>

          {/* THE TASTING PROFILE QUADRANT (Mandatory Domain Component) */}
          <div className="py-6">
            <h3 className="text-xs font-cinzel uppercase tracking-[0.2em] text-[#d4af37] mb-4 flex items-center gap-2">
              <span>Sensory Tasting Quadrant</span>
              <span className="flex-1 h-[1px] bg-[#d4af37]/20" />
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Quadrant 1: Flavor Profile */}
              <div className="bg-[#141312] border border-[#d4af37]/20 p-4">
                <div className="text-[10px] font-cinzel uppercase tracking-[0.16em] text-[#f4d06f] mb-2 font-bold">
                  I. Flavor Architecture
                </div>
                <div className="space-y-2 text-xs font-cinzel">
                  <div>
                    <span className="text-[#99907c] text-[10px] uppercase">Primary Notes:</span>
                    <p className="text-[#ede6d9] font-medium">{vitola.flavorProfile.primary}</p>
                  </div>
                  <div>
                    <span className="text-[#99907c] text-[10px] uppercase">Mid-Third & Secondary:</span>
                    <p className="text-[#d0c5af]">{vitola.flavorProfile.secondary}</p>
                  </div>
                  <div>
                    <span className="text-[#99907c] text-[10px] uppercase">Finish & Retrohale:</span>
                    <p className="text-[#d0c5af]">{vitola.flavorProfile.finish}</p>
                  </div>
                </div>
              </div>

              {/* Quadrant 2: Burn & Draw */}
              <div className="bg-[#141312] border border-[#d4af37]/20 p-4">
                <div className="text-[10px] font-cinzel uppercase tracking-[0.16em] text-[#f4d06f] mb-2 font-bold">
                  II. Burn Mechanics & Draw
                </div>
                <p className="text-xs text-[#d0c5af] font-cinzel leading-relaxed mb-3">
                  {vitola.burnAndDraw}
                </p>
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-cinzel">
                  <span className="text-[#99907c]">Estimated Draw Session:</span>
                  <span className="text-[#ede6d9] font-bold tabular-nums font-mono">{vitola.smokingTimeMinutes} Minutes</span>
                </div>
              </div>

              {/* Quadrant 3: Strength */}
              <div className="bg-[#141312] border border-[#d4af37]/20 p-4">
                <div className="text-[10px] font-cinzel uppercase tracking-[0.16em] text-[#f4d06f] mb-2 font-bold">
                  III. Nicotine Strength & Body
                </div>
                <div className="flex items-center gap-2 my-2">
                  {[1, 2, 3, 4, 5].map((tick) => (
                    <div
                      key={tick}
                      className={`h-3 flex-1 border border-[#d4af37] ${
                        tick <= vitola.strength
                          ? 'bg-[#d4af37]'
                          : 'bg-transparent border-opacity-30'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex justify-between items-center text-xs font-cinzel mt-2">
                  <span className="text-[#99907c]">Body:</span>
                  <span className="text-[#ede6d9] font-medium">{vitola.flavorProfile.body}</span>
                </div>
              </div>

              {/* Quadrant 4: Origin & Terroir */}
              <div className="bg-[#141312] border border-[#d4af37]/20 p-4">
                <div className="text-[10px] font-cinzel uppercase tracking-[0.16em] text-[#f4d06f] mb-2 font-bold">
                  IV. Origin & Terroir
                </div>
                <div className="text-xs font-cinzel space-y-1.5">
                  <div className="text-[#ede6d9] font-medium">Humo Real Estate, Dominican Republic</div>
                  <div className="text-[#99907c] text-[11px]">{vitola.origin}</div>
                  <div className="text-[#d4af37] text-[11px] pt-1">Cellar Lot: {vitola.cellarLot}</div>
                </div>
              </div>

            </div>
          </div>

          {/* Allocation Selection / Add to Humidor Bar */}
          <div className="pt-6 border-t border-[#d4af37]/25 bg-[#141312] -mx-6 -mb-6 md:-mx-8 md:-mb-8 p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Unit selection toggle */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="flex border border-[#d4af37]/40 bg-[#121110]">
                  <button
                    onClick={() => setSelectedUnit('single')}
                    className={`px-3.5 py-2 text-xs font-cinzel uppercase tracking-wider transition-colors ${
                      selectedUnit === 'single'
                        ? 'bg-[#d4af37] text-[#121110] font-bold'
                        : 'text-[#d0c5af] hover:text-[#ede6d9]'
                    }`}
                  >
                    Single (${vitola.singlePrice})
                  </button>
                  <button
                    onClick={() => setSelectedUnit('box')}
                    className={`px-3.5 py-2 text-xs font-cinzel uppercase tracking-wider transition-colors ${
                      selectedUnit === 'box'
                        ? 'bg-[#d4af37] text-[#121110] font-bold'
                        : 'text-[#d0c5af] hover:text-[#ede6d9]'
                    }`}
                  >
                    Box of {vitola.boxCount} (${vitola.boxPrice})
                  </button>
                </div>

                {/* Quantity */}
                <div className="flex items-center border border-[#d4af37]/40 bg-[#121110]">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="px-2.5 py-2 text-xs text-[#d0c5af] hover:text-[#f4d06f]"
                  >
                    -
                  </button>
                  <span className="px-3 text-xs font-mono font-bold text-[#ede6d9] tabular-nums">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="px-2.5 py-2 text-xs text-[#d0c5af] hover:text-[#f4d06f]"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Total & Action */}
              <div className="flex items-center justify-between sm:justify-end gap-5 w-full sm:w-auto">
                <div className="text-right">
                  <span className="text-[10px] text-[#99907c] font-cinzel block uppercase">Total Allocation</span>
                  <span className="text-xl font-bold font-mono text-[#f4d06f] tabular-nums">${currentPrice}</span>
                </div>

                <button
                  onClick={handleAdd}
                  className="gold-foil-btn px-6 py-3 text-xs font-bold tracking-[0.16em] uppercase flex items-center gap-2"
                >
                  {addedToast ? (
                    <>
                      <Check size={14} /> Vaulted
                    </>
                  ) : (
                    'Add to Humidor'
                  )}
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
