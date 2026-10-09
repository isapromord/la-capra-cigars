import React from 'react';
import { X, Trash2, ShieldCheck, Sparkles } from 'lucide-react';
import { HumidorItem } from '../types';
import { GOAT_MEDALLION } from '../data/vitolas';
import { Language, TRANSLATIONS } from '../data/translations';

interface HumidorDrawerProps {
  isOpen: boolean;
  lang?: Language;
  onClose: () => void;
  items: HumidorItem[];
  onUpdateQuantity: (id: string, unitType: 'single' | 'box', delta: number) => void;
  onRemoveItem: (id: string, unitType: 'single' | 'box') => void;
  onOpenCheckout: () => void;
}

export const HumidorDrawer: React.FC<HumidorDrawerProps> = ({
  isOpen,
  lang = 'es',
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onOpenCheckout
}) => {
  if (!isOpen) return null;
  const t = TRANSLATIONS[lang];

  const subtotal = items.reduce((sum, item) => {
    const price = item.unitType === 'single' ? item.vitola.singlePrice : item.vitola.boxPrice;
    return sum + price * item.quantity;
  }, 0);

  const totalSticksCount = items.reduce((sum, item) => {
    const sticksPerUnit = item.unitType === 'single' ? 1 : item.vitola.boxCount;
    return sum + sticksPerUnit * item.quantity;
  }, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dimmed backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        {/* Drawer container: Dark wood tone background (#2B1A12) with gold-lined dividers */}
        <div className="w-screen max-w-md bg-[#2b1a12] border-l border-[#d4af37]/35 shadow-[0_0_50px_rgba(0,0,0,0.9)] flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="p-6 border-b border-[#d4af37]/25 bg-[#1f130d]">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                {/* Circular Medallion */}
                <div className="w-7 h-7 rounded-full border border-[#d4af37] overflow-hidden bg-[#141312] shrink-0">
                  <img
                    src={GOAT_MEDALLION}
                    alt="Atelier Medallion"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h2 className="text-sm font-bold tracking-[0.18em] uppercase text-[#ede6d9] font-cinzel">
                  {t.humidorDrawerTitle}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-1 text-[#d0c5af] hover:text-[#f4d06f] border border-[#d4af37]/20"
                aria-label="Cerrar humidor"
              >
                <X size={16} />
              </button>
            </div>

            {/* Stitch Status Stamps: "Aging 18 Months", "Ready for Extraction" */}
            <div className="flex items-center gap-2 pt-2 border-t border-[#d4af37]/15">
              <span className="inline-block px-2.5 py-0.5 text-[9px] font-bold font-cinzel uppercase tracking-[0.14em] bg-[#141312] border border-[#d4af37]/50 text-[#f4d06f]">
                {t.agingStamp}
              </span>
              <span className="inline-block px-2.5 py-0.5 text-[9px] font-bold font-cinzel uppercase tracking-[0.14em] bg-[#141312] border border-[#d4af37]/50 text-[#e8d5b5]">
                {t.readyStamp}
              </span>
            </div>
          </div>

          {/* Drawer Scrollable Item List */}
          <div className="flex-1 overflow-y-auto p-6 divide-y divide-[#d4af37]/20">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 text-[#d0c5af] font-cinzel">
                <div className="w-12 h-12 border border-[#d4af37]/30 flex items-center justify-center mb-4 text-[#d4af37]">
                  <Sparkles size={20} />
                </div>
                <p className="text-sm text-[#ede6d9] font-serif mb-2">{t.vacantDrawerTitle}</p>
                <p className="text-xs text-[#99907c] leading-relaxed mb-6">
                  {t.vacantDrawerDesc}
                </p>
                <button
                  onClick={onClose}
                  className="gold-outline-btn px-6 py-2.5 text-xs"
                >
                  {t.navCollection}
                </button>
              </div>
            ) : (
              items.map((item) => {
                const itemPrice = item.unitType === 'single' ? item.vitola.singlePrice : item.vitola.boxPrice;
                return (
                  <div key={`${item.vitola.id}-${item.unitType}`} className="py-4 flex gap-4 items-start">
                    <img
                      src={item.vitola.image}
                      alt={item.vitola.name}
                      className="w-16 h-20 object-cover border border-[#d4af37]/30 bg-[#121110] shrink-0"
                    />

                    <div className="flex-1 font-cinzel">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-xs font-serif font-bold text-[#ede6d9]">
                            {item.vitola.name}
                          </h4>
                          <span className="text-[10px] text-[#f4d06f] uppercase tracking-wider block">
                            {item.unitType === 'single' ? 'Ejemplar Individual' : `Cofre de Cedro (${item.vitola.boxCount} Unidades)`}
                          </span>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.vitola.id, item.unitType)}
                          className="text-[#99907c] hover:text-[#ffb4ab] p-1"
                          aria-label="Eliminar artículo"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>

                      <div className="text-[11px] text-[#99907c] mt-1 font-mono">
                        {item.vitola.ringGauge} RG × {item.vitola.lengthInches}" · Lote {item.vitola.cellarLot}
                      </div>

                      {/* Quantity & Unit Total */}
                      <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5">
                        <div className="flex items-center border border-[#d4af37]/30 bg-[#1a0f0a]">
                          <button
                            onClick={() => onUpdateQuantity(item.vitola.id, item.unitType, -1)}
                            className="px-2 py-0.5 text-xs text-[#d0c5af] hover:text-[#f4d06f]"
                          >
                            -
                          </button>
                          <span className="px-2.5 text-xs font-mono font-bold text-[#ede6d9] tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.vitola.id, item.unitType, 1)}
                            className="px-2 py-0.5 text-xs text-[#d0c5af] hover:text-[#f4d06f]"
                          >
                            +
                          </button>
                        </div>

                        <div className="text-right">
                          <span className="text-xs font-bold font-mono text-[#f4d06f] tabular-nums">
                            ${itemPrice * item.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Drawer Footer & Checkout Action */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#d4af37]/30 bg-[#1f130d] font-cinzel space-y-4">
              <div className="p-3 bg-[#141312] border border-[#d4af37]/20 flex items-center gap-2 text-[10px] text-[#d0c5af]">
                <ShieldCheck size={16} className="text-[#d4af37] shrink-0" />
                <span>
                  {lang === 'es'
                    ? 'Incluye astillas de cedro español y Boveda 69% HR calibrado.'
                    : 'Includes complimentary Boveda 69% pack & Spanish cedar spills.'}
                </span>
              </div>

              {/* Subtotal */}
              <div className="flex items-baseline justify-between pt-2">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#99907c] block">{t.totalAllocationValuation}</span>
                  <span className="text-[11px] text-[#ede6d9]">Total: {totalSticksCount} unidades</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold font-mono text-[#f4d06f] tabular-nums">
                    ${subtotal}
                  </span>
                </div>
              </div>

              {/* Request Allocation Button */}
              <button
                onClick={() => {
                  onClose();
                  onOpenCheckout();
                }}
                className="gold-foil-btn w-full py-3.5 text-xs text-center font-bold tracking-[0.16em] uppercase"
              >
                {t.requestAllocationBtn}
              </button>

              <p className="text-[10px] text-center text-[#99907c] tracking-widest uppercase">
                Inspección manual previa al despacho · Mayoría de edad 21+
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
