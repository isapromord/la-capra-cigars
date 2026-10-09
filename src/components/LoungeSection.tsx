import React, { useState } from 'react';
import { CIUDADES_LOUNGE } from '../data/lacapra';

interface LoungeSectionProps {
  onShowToast: (msg: string) => void;
}

export const LoungeSection: React.FC<LoungeSectionProps> = ({ onShowToast }) => {
  const [selectedCity, setSelectedCity] = useState('santo-domingo');
  const [reservationName, setReservationName] = useState('');
  const [reservationPhone, setReservationPhone] = useState('');
  const [reservationDate, setReservationDate] = useState('2026-10-15');
  const [reservationTime, setReservationTime] = useState('19:30 hrs — Turno Principal');
  const [reservationRoom, setReservationRoom] = useState('Salón Principal & Sala de Cata');
  const [reservationConfirmed, setReservationConfirmed] = useState(false);

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    setReservationConfirmed(true);
    onShowToast(`Reserva confirmada para ${reservationName || 'Don Aficionado'} en Humo Real (${reservationDate} a las ${reservationTime}).`);
  };

  return (
    <section className="w-full py-20 bg-transparent relative z-10" id="lounges">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Header & City Selector */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[#f2ca50] mb-2">
            <span className="material-symbols-outlined text-sm">pin_drop</span>
            <span className="font-label-sm text-xs uppercase tracking-[0.28em]">
              Red de Cavas &amp; Lounges Autorizados
            </span>
          </div>
          <h2 className="font-headline-lg text-3xl md:text-4xl text-[#e6e1df]">
            Encuentra La Capra en Lounge &amp; Tiendas Exclusivas
          </h2>
          <p className="font-body-md text-sm text-[#d0c5af] mt-3">
            Espacios donde degustar nuestras vitolas con servicio de sommelier de tabaco y maridajes privados de destilados nobles.
          </p>

          {/* Selector / Buscador de Ciudades */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {CIUDADES_LOUNGE.map((ciudad) => (
              <button
                key={ciudad.id}
                onClick={() => setSelectedCity(ciudad.id)}
                className={`px-4 py-2 font-label-sm text-xs uppercase tracking-wider transition-colors ${
                  selectedCity === ciudad.id
                    ? 'bg-[#f2ca50] text-[#3c2f00] font-bold shadow-md'
                    : 'bg-[#211f1e] text-[#d0c5af] hover:text-[#f2ca50] border border-[#4d4635]/40'
                }`}
              >
                {ciudad.nombre}
              </button>
            ))}
          </div>
        </div>

        {/* Tarjeta Destacada de Lounge & Boutique */}
        <div className="bg-[#1d1b1a] border border-[#4d4635]/40 shadow-2xl p-6 md:p-10 relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#f2ca50]/5 rounded-full blur-[90px] pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Info Local / Business */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 bg-[#1B4D3E]/80 text-[#e6e1df] font-label-sm text-[10px] uppercase tracking-widest">
                  {selectedCity === 'santo-domingo' ? 'Sede Central & Flagship' : 'Cava Oficial Asociada'}
                </span>
                <span className="flex items-center gap-1 text-emerald-400 font-label-sm text-[10px] tracking-wider uppercase">
                  <span className="material-symbols-outlined text-xs">verified</span> LocalBusiness Verificado
                </span>
              </div>

              <h3 className="font-headline-md text-2xl md:text-3xl text-[#e6e1df]">
                Cava &amp; Lounge Privado "Humo Real {selectedCity === 'santo-domingo' ? 'Santo Domingo' : selectedCity.replace('-', ' ')}"
              </h3>

              <div className="flex flex-col gap-2 text-sm text-[#d0c5af] font-body-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#f2ca50] text-base">location_on</span>
                  <span>
                    {selectedCity === 'santo-domingo' && 'Av. República de Colombia 23, Santo Domingo, R.D.'}
                    {selectedCity === 'santiago' && 'Calle Del Sol & Reparto del Este, Santiago de los Caballeros, R.D.'}
                    {selectedCity === 'punta-cana' && 'Marina Boulevard, Cap Cana Resort, Punta Cana, R.D.'}
                    {selectedCity === 'miami' && 'Brickell Avenue Suite 1400, Miami, FL, EE.UU.'}
                    {selectedCity === 'madrid' && 'Calle Serrano & Velázquez, Distrito Salamanca, Madrid, España.'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#f2ca50] text-base">schedule</span>
                  <span>Martes a Domingo: 16:00 - 01:00 AM (Acceso previa confirmación de mesa)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#f2ca50] text-base">call</span>
                  <span>Concierge Desk: +1 (809) 582-CAPRA</span>
                </div>
              </div>

              {/* Embedded Map from Stitch */}
              <div className="mt-4 mb-2 overflow-hidden border border-[#4d4635]/40 shadow-xl bg-[#0f0e0d]/80 p-1.5">
                <div className="flex items-center justify-between px-2 py-1.5 mb-1.5 border-b border-[#4d4635]/20 text-xs">
                  <div className="flex items-center gap-1.5 text-[#f2ca50]">
                    <span className="material-symbols-outlined text-sm">map</span>
                    <span className="font-label-sm text-[10px] uppercase tracking-widest font-semibold">
                      Ubicación Satelital &amp; Cómo Llegar
                    </span>
                  </div>
                  <a 
                    href="https://maps.google.com/?q=18.506416,-69.984891" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-label-sm text-[9px] uppercase tracking-wider text-[#d0c5af] hover:text-[#f2ca50] transition-colors flex items-center gap-1"
                  >
                    Abrir en Maps <span className="material-symbols-outlined text-xs">open_in_new</span>
                  </a>
                </div>

                <div className="relative w-full h-[340px] overflow-hidden rounded-xl">
                  <iframe 
                    src="https://maps.google.com/maps?q=18.506416,-69.984891&hl=es&z=17&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'contrast(1.05) brightness(0.9)', display: 'block' }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Ubicación La Capra Cigars"
                  />
                  
                  {/* Pin Decorativo Stitch */}
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                    <div className="relative flex flex-col items-center -translate-y-4">
                      <div className="mb-1 px-2.5 py-1 bg-[#0f0e0d]/95 backdrop-blur-md border border-[#f2ca50]/40 shadow-2xl flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#A31621] animate-pulse"></span>
                        <span className="font-label-sm text-[9px] text-[#f2ca50] tracking-wider uppercase whitespace-nowrap font-bold">
                          La Capra Cigars • Av. Rep. de Colombia 23
                        </span>
                      </div>
                      
                      <div className="relative flex items-center justify-center">
                        <span className="absolute w-8 h-8 rounded-full bg-[#A31621]/30 animate-ping"></span>
                        <svg className="w-9 h-9 drop-shadow-[0_4px_10px_rgba(0,0,0,0.85)] filter" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" fill="#A31621" stroke="#F4D06F" strokeWidth="1.5"></path>
                          <circle cx="12" cy="9" r="3.5" fill="#141312" stroke="#ffe088" strokeWidth="1.2"></circle>
                        </svg>
                      </div>
                      <div className="w-3 h-1 bg-black/60 rounded-full blur-[1px] mt-0.5"></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Reserva de Mesa de Cata */}
            <div className="lg:col-span-5 bg-[#211f1e]/95 border border-[#4d4635]/40 shadow-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#f2ca50]/5 rounded-full blur-[60px] pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2 text-[#f2ca50]">
                  <span className="material-symbols-outlined text-base">wine_bar</span>
                  <span className="font-label-sm text-[10px] uppercase tracking-[0.24em] font-semibold">
                    Atención Personalizada
                  </span>
                </div>
                
                <h4 className="font-headline-sm text-xl md:text-2xl text-[#e6e1df] tracking-wide">
                  Reservar Mesa de Cata Privada
                </h4>
                
                <p className="font-body-sm text-xs text-[#d0c5af] mt-2 leading-relaxed">
                  Asegure su butaca exclusiva en nuestro santuario de cata para una experiencia sensorial guiada por nuestro sommelier maestro.
                </p>

                {reservationConfirmed ? (
                  <div className="mt-6 p-6 bg-[#0f0e0d] border border-[#f2ca50]/40 text-center space-y-3 font-cinzel">
                    <span className="material-symbols-outlined text-3xl text-[#f2ca50]">check_circle</span>
                    <h5 className="text-base text-[#e6e1df] font-bold">¡Reserva de Mesa Confirmada!</h5>
                    <p className="text-xs text-[#d0c5af]">
                      Su mesa ha sido asignada para el {reservationDate} ({reservationTime}) en {reservationRoom}. Nuestro Sommelier de guardia le esperará.
                    </p>
                    <button
                      onClick={() => setReservationConfirmed(false)}
                      className="text-[10px] uppercase tracking-wider text-[#f2ca50] underline pt-2 block mx-auto"
                    >
                      Hacer otra reserva
                    </button>
                  </div>
                ) : (
                  <form className="flex flex-col gap-4 mt-6" onSubmit={handleReservation}>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-sm text-[10px] text-[#f2ca50]/90 uppercase tracking-[0.16em]">
                        Nombre &amp; Apellidos
                      </label>
                      <input 
                        className="w-full bg-[#0f0e0d] text-[#e6e1df] px-3.5 py-2.5 text-xs border border-[#4d4635]/40 focus:outline-none focus:border-[#f2ca50] placeholder-[#d0c5af]/40 transition-colors" 
                        placeholder="ej. Don Carlos Martínez" 
                        required 
                        type="text" 
                        value={reservationName}
                        onChange={(e) => setReservationName(e.target.value)}
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-sm text-[10px] text-[#f2ca50]/90 uppercase tracking-[0.16em]">
                        Teléfono / WhatsApp Directo
                      </label>
                      <input 
                        className="w-full bg-[#0f0e0d] text-[#e6e1df] px-3.5 py-2.5 text-xs border border-[#4d4635]/40 focus:outline-none focus:border-[#f2ca50] placeholder-[#d0c5af]/40 transition-colors" 
                        placeholder="+1 (809) 000-0000" 
                        required 
                        type="tel" 
                        value={reservationPhone}
                        onChange={(e) => setReservationPhone(e.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-label-sm text-[10px] text-[#f2ca50]/90 uppercase tracking-[0.16em]">
                          Fecha Deseada
                        </label>
                        <input 
                          className="w-full bg-[#0f0e0d] text-[#e6e1df] px-3 py-2.5 text-xs border border-[#4d4635]/40 focus:outline-none focus:border-[#f2ca50] text-[#d0c5af] transition-colors" 
                          required 
                          type="date" 
                          value={reservationDate}
                          onChange={(e) => setReservationDate(e.target.value)}
                        />
                      </div>
                      
                      <div className="flex flex-col gap-1.5">
                        <label className="font-label-sm text-[10px] text-[#f2ca50]/90 uppercase tracking-[0.16em]">
                          Turno de Degustación
                        </label>
                        <select 
                          className="w-full bg-[#0f0e0d] text-[#e6e1df] px-3 py-2.5 text-xs border border-[#4d4635]/40 focus:outline-none focus:border-[#f2ca50] transition-colors cursor-pointer"
                          value={reservationTime}
                          onChange={(e) => setReservationTime(e.target.value)}
                        >
                          <option>17:00 hrs — Tardeo &amp; Café</option>
                          <option>19:30 hrs — Turno Principal</option>
                          <option>21:30 hrs — Maridaje Solera</option>
                          <option>23:00 hrs — Cierre Nocturno</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-sm text-[10px] text-[#f2ca50]/90 uppercase tracking-[0.16em]">
                        Preferencia de Sala
                      </label>
                      <select 
                        className="w-full bg-[#0f0e0d] text-[#e6e1df] px-3 py-2.5 text-xs border border-[#4d4635]/40 focus:outline-none focus:border-[#f2ca50] transition-colors cursor-pointer"
                        value={reservationRoom}
                        onChange={(e) => setReservationRoom(e.target.value)}
                      >
                        <option>Salón Principal &amp; Sala de Cata</option>
                        <option>Sala Privada de Destilados &amp; Barricas</option>
                        <option>Terraza al Aire Libre &amp; Cigar Lounge</option>
                      </select>
                    </div>

                    <button 
                      className="w-full mt-3 py-3 bg-gradient-to-r from-[#f2ca50] to-[#d4af37] hover:from-[#F4D06F] hover:to-[#f2ca50] text-[#3c2f00] font-label-sm text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-lg flex items-center justify-center gap-2" 
                      type="submit"
                    >
                      <span className="material-symbols-outlined text-sm">check_circle</span>
                      <span>Confirmar Mesa con Sommelier</span>
                    </button>
                    
                    <p className="text-center font-label-sm text-[9px] text-[#d0c5af]/70 uppercase tracking-widest mt-1">
                      Confirmación inmediata vía Concierge Desk
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
