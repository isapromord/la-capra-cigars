import React, { useState } from 'react';

interface ClubMembresiaProps {
  onShowToast: (msg: string) => void;
}

export const ClubMembresia: React.FC<ClubMembresiaProps> = ({ onShowToast }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [vitolaFav, setVitolaFav] = useState('Toro Maduro Barrica (Media-Fuerte)');
  const [ageCheck, setAgeCheck] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ageCheck) return;
    setSubmitted(true);
    onShowToast(`Solicitud de membresía recibida con éxito para ${nombre || 'Don Aficionado'}. Nuestro Concierge se comunicará a la brevedad.`);
  };

  return (
    <section className="w-full py-20 bg-transparent relative z-10" id="club">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="relative bg-[#0f0e0d] border border-[#4d4635]/40 p-8 md:p-14 shadow-2xl">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#f2ca50]/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="flex items-center gap-2 text-[#f2ca50]">
                <span className="material-symbols-outlined text-sm">vpn_key</span>
                <span className="font-label-sm text-xs uppercase tracking-[0.25em]">
                  Membresía por Invitación &amp; Reserva
                </span>
              </div>

              <h2 className="font-headline-lg text-3xl md:text-4xl text-[#e6e1df]">
                Círculo Privado de Selección <span className="italic text-[#f2ca50] font-normal">La Capra</span>
              </h2>

              <p className="font-body-md text-sm md:text-base text-[#d0c5af] leading-relaxed">
                Un círculo de asignación exclusiva para aficionados que desean asegurar lotes numerados de fábrica antes de que salgan a salones comerciales, con cofres personalizados en fuego y degustaciones a puerta cerrada.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2 text-xs text-[#d0c5af]">
                  <span className="material-symbols-outlined text-[#f2ca50] text-base">check</span>
                  <span>Prioridad en vitolas de tirada única</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#d0c5af]">
                  <span className="material-symbols-outlined text-[#f2ca50] text-base">check</span>
                  <span>Cofres con grabado de iniciales en fuego</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#d0c5af]">
                  <span className="material-symbols-outlined text-[#f2ca50] text-base">check</span>
                  <span>Invitación a salones de cata en Santiago y Miami</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#d0c5af]">
                  <span className="material-symbols-outlined text-[#f2ca50] text-base">check</span>
                  <span>Concierge personal para pedidos especiales</span>
                </div>
              </div>
            </div>

            {/* Formulario de Ingreso */}
            <div className="lg:col-span-5 bg-[#211f1e] p-6 border border-[#4d4635]/40 shadow-xl">
              <h4 className="font-title-lg text-lg text-[#e6e1df]">
                Solicitar Membresía de Cava
              </h4>
              <p className="text-xs text-[#d0c5af] mt-1 mb-4">
                Complete sus datos para entrar a la lista de espera de asignación.
              </p>

              {submitted ? (
                <div className="py-8 text-center space-y-3 font-cinzel">
                  <span className="material-symbols-outlined text-3xl text-[#f2ca50]">verified</span>
                  <h5 className="text-base text-[#e6e1df] font-bold">Solicitud Registrada en Cava</h5>
                  <p className="text-xs text-[#d0c5af]">
                    Hemos asignado su turno de verificación. Nuestro Concierge de Santiago se comunicará con usted en menos de 24 horas laborables.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[10px] text-[#f2ca50] uppercase tracking-wider underline pt-2 block mx-auto"
                  >
                    Enviar otra solicitud
                  </button>
                </div>
              ) : (
                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                  <div>
                    <label className="font-label-sm text-[10px] text-[#d0c5af] uppercase tracking-wider block mb-1">
                      Nombre Completo
                    </label>
                    <input 
                      className="w-full bg-[#0f0e0d] text-[#e6e1df] px-3 py-2 text-xs border border-[#4d4635]/40 focus:outline-none focus:border-[#f2ca50] placeholder-[#d0c5af]/40" 
                      placeholder="ej. Don Alejandro Morales" 
                      required 
                      type="text" 
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="font-label-sm text-[10px] text-[#d0c5af] uppercase tracking-wider block mb-1">
                      Correo Electrónico Privado
                    </label>
                    <input 
                      className="w-full bg-[#0f0e0d] text-[#e6e1df] px-3 py-2 text-xs border border-[#4d4635]/40 focus:outline-none focus:border-[#f2ca50] placeholder-[#d0c5af]/40" 
                      placeholder="ej. aficionado@club.com" 
                      required 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="font-label-sm text-[10px] text-[#d0c5af] uppercase tracking-wider block mb-1">
                      Vitola Favorita de Referencia
                    </label>
                    <select 
                      className="w-full bg-[#0f0e0d] text-[#e6e1df] px-3 py-2 text-xs border border-[#4d4635]/40 focus:outline-none focus:border-[#f2ca50] cursor-pointer"
                      value={vitolaFav}
                      onChange={(e) => setVitolaFav(e.target.value)}
                    >
                      <option>Toro Maduro Barrica (Media-Fuerte)</option>
                      <option>Habano Selección Cava (Media)</option>
                      <option>Connecticut Reserva Seda (Suave-Media)</option>
                      <option>Surtido Personalizado de Vitolas</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <input 
                      className="accent-[#f2ca50] cursor-pointer" 
                      id="age-check" 
                      required 
                      type="checkbox" 
                      checked={ageCheck}
                      onChange={(e) => setAgeCheck(e.target.checked)}
                    />
                    <label 
                      className="text-[11px] text-[#d0c5af] font-label-sm uppercase select-none cursor-pointer" 
                      htmlFor="age-check"
                    >
                      Certifico tener más de 21 años de edad
                    </label>
                  </div>

                  <button 
                    className="w-full mt-2 py-3 bg-[#f2ca50] hover:bg-[#F4D06F] text-[#3c2f00] font-label-sm text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-md cursor-pointer" 
                    type="submit"
                  >
                    Enviar Solicitud a la Cava
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
