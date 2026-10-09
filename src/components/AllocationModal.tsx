import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { HumidorItem, AllocationOrder } from '../types';
import { Language, TRANSLATIONS } from '../data/translations';
import { GOAT_MEDALLION } from '../data/vitolas';

interface AllocationModalProps {
  isOpen: boolean;
  lang?: Language;
  onClose: () => void;
  items: HumidorItem[];
  onOrderSuccess: (order: AllocationOrder) => void;
  onClearHumidor: () => void;
}

export const AllocationModal: React.FC<AllocationModalProps> = ({
  isOpen,
  lang = 'es',
  onClose,
  items,
  onOrderSuccess,
  onClearHumidor
}) => {
  if (!isOpen) return null;
  const t = TRANSLATIONS[lang];

  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    deliveryAddress: '',
    city: '',
    country: 'República Dominicana',
    postalCode: '',
    includeCedarSpills: true,
    includeBovedaPacks: true,
    customEngravingText: '',
    termsConfirmed: true
  });

  const [submittedOrder, setSubmittedOrder] = useState<AllocationOrder | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subtotal = items.reduce((sum, item) => {
    const price = item.unitType === 'single' ? item.vitola.singlePrice : item.vitola.boxPrice;
    return sum + price * item.quantity;
  }, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const newOrder: AllocationOrder = {
        orderId: `HR-${Date.now().toString().slice(-6)}`,
        customerName: formData.customerName || 'Connoisseur Member',
        email: formData.email,
        phone: formData.phone,
        deliveryAddress: formData.deliveryAddress,
        city: formData.city,
        country: formData.country,
        postalCode: formData.postalCode,
        includeCedarSpills: formData.includeCedarSpills,
        includeBovedaPacks: formData.includeBovedaPacks,
        customEngravingText: formData.customEngravingText,
        items: [...items],
        subtotal,
        createdAt: new Date().toLocaleDateString(lang === 'es' ? 'es-DO' : 'en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        status: 'Allocated'
      };

      setSubmittedOrder(newOrder);
      onOrderSuccess(newOrder);
      onClearHumidor();
      setIsSubmitting(false);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-[#1b1918] border border-[#d4af37]/45 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(138,60,27,0.2)] my-8">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#d4af37]/25 bg-[#141312]">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full border border-[#d4af37] overflow-hidden bg-[#141312]">
              <img
                src={GOAT_MEDALLION}
                alt="Atelier Medallion"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#d4af37] font-cinzel">
              {submittedOrder 
                ? (lang === 'es' ? 'Certificado Oficial de Asignación' : 'Official Allocation Certificate')
                : t.checkoutTitle}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#d0c5af] hover:text-[#f4d06f] border border-[#d4af37]/30 hover:border-[#d4af37]"
            aria-label="Cerrar modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[82vh] overflow-y-auto">
          {submittedOrder ? (
            /* Post-Submission Certificate */
            <div className="space-y-6 font-cinzel text-center">
              <div className="w-16 h-16 mx-auto border-2 border-[#d4af37] flex items-center justify-center text-[#d4af37] bg-[#141312] shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                <Check size={28} />
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#d4af37] block mb-1">
                  {lang === 'es' ? 'Asignación de Bóveda Privada Registrada' : 'Private Cellar Allocation Confirmed'}
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#ede6d9]">
                  {lang === 'es' ? `Cédula de Bóveda #${submittedOrder.orderId}` : `Certificate #${submittedOrder.orderId}`}
                </h3>
                <p className="text-xs text-[#99907c] mt-1">
                  {submittedOrder.createdAt} · Santiago de los Caballeros
                </p>
              </div>

              {/* Certificate Details */}
              <div className="bg-[#141312] border border-[#d4af37]/30 p-6 text-left space-y-4 text-xs">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-[#99907c] uppercase">Destinatario:</span>
                  <span className="text-[#ede6d9] font-medium">{submittedOrder.customerName}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-[#99907c] uppercase">Bóveda de Origen:</span>
                  <span className="text-[#d4af37]">Atelier Humo Real — Santiago de los Caballeros</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-[#99907c] uppercase">Destino:</span>
                  <span className="text-[#ede6d9]">{submittedOrder.deliveryAddress}, {submittedOrder.city}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-[#99907c] uppercase">Condicionamiento:</span>
                  <span className="text-[#f4d06f] font-bold uppercase tracking-wider">69% HR Cedro Español Sellado</span>
                </div>

                {/* Items Summary */}
                <div className="pt-2">
                  <span className="text-[#99907c] text-[10px] uppercase tracking-wider block mb-2">Vitolas Asignadas:</span>
                  <div className="space-y-1.5 font-mono text-[11px]">
                    {submittedOrder.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between text-[#d0c5af]">
                        <span>{item.quantity}× {item.vitola.name} ({item.unitType === 'single' ? 'Ejemplar' : 'Cofre'})</span>
                        <span className="text-[#ede6d9] font-bold">
                          ${(item.unitType === 'single' ? item.vitola.singlePrice : item.vitola.boxPrice) * item.quantity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#d4af37]/20 flex justify-between items-baseline text-sm">
                  <span className="text-[#d4af37] font-cinzel uppercase font-bold">{t.totalAllocationValuation}</span>
                  <span className="text-xl font-bold font-mono text-[#f4d06f] tabular-nums">${submittedOrder.subtotal}</span>
                </div>
              </div>

              <div className="flex gap-3 justify-center pt-2">
                <button
                  onClick={onClose}
                  className="gold-foil-btn px-8 py-3 text-xs uppercase tracking-wider"
                >
                  {lang === 'es' ? 'Volver al Atelier' : 'Return to Atelier'}
                </button>
              </div>
            </div>
          ) : (
            /* Allocation Request Form */
            <form onSubmit={handleSubmit} className="space-y-6 font-cinzel">
              
              <div className="border-b border-[#d4af37]/20 pb-4">
                <h3 className="text-xl font-serif font-medium text-[#ede6d9] mb-1">
                  {t.checkoutTitle}
                </h3>
                <p className="text-xs text-[#d0c5af]">
                  {lang === 'es'
                    ? 'Indique los datos de su bóveda receptora. Cada cofre es numerado, sellado con cera y empacado con control higrométrico bidireccional.'
                    : 'Please specify your delivery vault credentials. All shipments are hand-inspected and sealed in cedar boxes with calibrated humidity packs.'}
                </p>
              </div>

              {/* Form Input fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Full Name */}
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-[0.16em] text-[#d4af37] font-bold mb-1">
                    {t.connoisseurName}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ej. Don Fernando De La Rosa"
                    value={formData.customerName}
                    onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                    className="bg-[#161514] border-0 border-b border-[#e8d5b5]/30 focus:border-[#d4af37] focus:outline-none text-[#ede6d9] text-xs px-2 py-2.5 transition-colors font-cinzel placeholder:text-[#99907c]/40"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-[0.16em] text-[#d4af37] font-bold mb-1">
                    {t.confidentialEmail}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ej. fernando@delarosa.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-[#161514] border-0 border-b border-[#e8d5b5]/30 focus:border-[#d4af37] focus:outline-none text-[#ede6d9] text-xs px-2 py-2.5 transition-colors font-cinzel placeholder:text-[#99907c]/40"
                  />
                </div>

                {/* Telephone */}
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-[0.16em] text-[#d4af37] font-bold mb-1">
                    {t.telephone}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (809) 555-0192"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-[#161514] border-0 border-b border-[#e8d5b5]/30 focus:border-[#d4af37] focus:outline-none text-[#ede6d9] text-xs px-2 py-2.5 transition-colors font-cinzel placeholder:text-[#99907c]/40"
                  />
                </div>

                {/* City */}
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-[0.16em] text-[#d4af37] font-bold mb-1">
                    {t.city}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Santo Domingo / Santiago / Miami"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="bg-[#161514] border-0 border-b border-[#e8d5b5]/30 focus:border-[#d4af37] focus:outline-none text-[#ede6d9] text-xs px-2 py-2.5 transition-colors font-cinzel placeholder:text-[#99907c]/40"
                  />
                </div>

                {/* Address */}
                <div className="sm:col-span-2 flex flex-col">
                  <label className="text-[10px] uppercase tracking-[0.16em] text-[#d4af37] font-bold mb-1">
                    {t.deliveryAddress}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Av. Anacaona, Torre Real, Residencia 16"
                    value={formData.deliveryAddress}
                    onChange={(e) => setFormData({ ...formData, deliveryAddress: e.target.value })}
                    className="bg-[#161514] border-0 border-b border-[#e8d5b5]/30 focus:border-[#d4af37] focus:outline-none text-[#ede6d9] text-xs px-2 py-2.5 transition-colors font-cinzel placeholder:text-[#99907c]/40"
                  />
                </div>

                {/* Brass Inscription */}
                <div className="sm:col-span-2 flex flex-col">
                  <label className="text-[10px] uppercase tracking-[0.16em] text-[#d4af37] font-bold mb-1">
                    {t.brassEngraving}
                  </label>
                  <input
                    type="text"
                    maxLength={36}
                    placeholder="ej. BODEGA PARTICULAR DE LA ROSA · 2026"
                    value={formData.customEngravingText}
                    onChange={(e) => setFormData({ ...formData, customEngravingText: e.target.value })}
                    className="bg-[#161514] border-0 border-b border-[#e8d5b5]/30 focus:border-[#d4af37] focus:outline-none text-[#ede6d9] text-xs px-2 py-2.5 transition-colors font-cinzel placeholder:text-[#99907c]/40"
                  />
                </div>

              </div>

              {/* Checkboxes: Exact Stitch Sharp 14px by 14px with inner solid gold inlay */}
              <div className="pt-4 border-t border-[#d4af37]/20 space-y-3">
                
                {/* Checkbox 1: Spills */}
                <div 
                  onClick={() => setFormData({ ...formData, includeCedarSpills: !formData.includeCedarSpills })}
                  className="flex items-center gap-3 cursor-pointer select-none group"
                >
                  <div className="w-[14px] h-[14px] border border-[#d4af37] bg-[#121110] flex items-center justify-center shrink-0">
                    {formData.includeCedarSpills && (
                      <div className="w-[8px] h-[8px] bg-[#d4af37]" />
                    )}
                  </div>
                  <span className="text-xs text-[#d0c5af] group-hover:text-[#ede6d9] transition-colors">
                    {t.spillsCheck}
                  </span>
                </div>

                {/* Checkbox 2: Boveda */}
                <div 
                  onClick={() => setFormData({ ...formData, includeBovedaPacks: !formData.includeBovedaPacks })}
                  className="flex items-center gap-3 cursor-pointer select-none group"
                >
                  <div className="w-[14px] h-[14px] border border-[#d4af37] bg-[#121110] flex items-center justify-center shrink-0">
                    {formData.includeBovedaPacks && (
                      <div className="w-[8px] h-[8px] bg-[#d4af37]" />
                    )}
                  </div>
                  <span className="text-xs text-[#d0c5af] group-hover:text-[#ede6d9] transition-colors">
                    {t.bovedaCheck}
                  </span>
                </div>

                {/* Checkbox 3: Legal age */}
                <div 
                  onClick={() => setFormData({ ...formData, termsConfirmed: !formData.termsConfirmed })}
                  className="flex items-center gap-3 cursor-pointer select-none group"
                >
                  <div className="w-[14px] h-[14px] border border-[#d4af37] bg-[#121110] flex items-center justify-center shrink-0">
                    {formData.termsConfirmed && (
                      <div className="w-[8px] h-[8px] bg-[#d4af37]" />
                    )}
                  </div>
                  <span className="text-xs text-[#d0c5af] group-hover:text-[#ede6d9] transition-colors">
                    {t.ageCheck}
                  </span>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#d4af37]/25 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#99907c] block">
                    {t.totalAllocationValuation}
                  </span>
                  <span className="text-2xl font-bold font-mono text-[#f4d06f] tabular-nums">
                    ${subtotal}
                  </span>
                </div>

                <div className="flex gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    className="gold-outline-btn px-5 py-3 text-xs w-full sm:w-auto"
                  >
                    {lang === 'es' ? 'Cancelar' : 'Cancel'}
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.termsConfirmed}
                    className="gold-foil-btn px-8 py-3 text-xs w-full sm:w-auto disabled:opacity-50"
                  >
                    {isSubmitting 
                      ? (lang === 'es' ? 'Sellando Asignación...' : 'Sealing Reservation...') 
                      : t.confirmAllocationBtn}
                  </button>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
