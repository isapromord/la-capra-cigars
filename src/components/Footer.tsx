import React, { useState } from 'react';
import { IMAGES } from '../data/lacapra';

interface FooterProps {
  onShowToast: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onShowToast }) => {
  const [email, setEmail] = useState('');

  const handleGazette = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onShowToast(`Registrado con éxito en la Gazette del Sommelier con ${email}.`);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-[#0f0e0d] border-t border-[#4d4635]/30">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12 pt-16 pb-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-[#4d4635]/20">
          
          {/* Identidad con Logo Oficial (Double Sizing) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-5 sm:gap-6">
              <img 
                alt="La Capra Cigars Logo Oficial" 
                referrerPolicy="no-referrer"
                className="h-40 sm:h-48 md:h-52 w-auto max-w-[240px] sm:max-w-[280px] object-contain filter drop-shadow-[0_6px_24px_rgba(242,202,80,0.5)] shrink-0" 
                src={IMAGES.logoOficial} 
              />
              <div className="flex flex-col justify-center">
                <span className="font-headline-sm text-2xl sm:text-3xl text-[#f2ca50] uppercase font-bold tracking-widest block leading-tight">
                  LA CAPRA CIGARS
                </span>
                <span className="font-label-sm text-xs sm:text-sm text-[#d0c5af] uppercase tracking-[0.26em] mt-2">
                  Humo Real Dominicano • 2023
                </span>
              </div>
            </div>
            
            <p className="text-xs text-[#d0c5af] leading-relaxed max-w-sm mt-2">
              Elaborado a mano con tripas largas añejadas en la República Dominicana. Cuatro generaciones de celo artesanal y pasión por el tabaco premium.
            </p>
          </div>

          {/* Enlaces Directorio con palabras individuales */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <span className="font-label-md text-xs uppercase text-[#f2ca50] tracking-[0.2em] font-bold">
              Directorio
            </span>
            <div className="flex flex-col gap-2 text-xs font-label-md uppercase tracking-[0.16em]">
              <a className="text-[#d0c5af] hover:text-[#f2ca50] transition-colors" href="#catalogo">
                Vitolas
              </a>
              <a className="text-[#d0c5af] hover:text-[#f2ca50] transition-colors" href="#lounges">
                Lounges
              </a>
              <a className="text-[#d0c5af] hover:text-[#f2ca50] transition-colors" href="#guias">
                Guías
              </a>
              <a className="text-[#d0c5af] hover:text-[#f2ca50] transition-colors" href="#club">
                Membresía
              </a>
            </div>
          </div>

          {/* Ciudades & Presencia */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="font-label-md text-xs uppercase text-[#f2ca50] tracking-[0.16em]">
              Presencia &amp; Cavas
            </span>
            <div className="flex flex-col gap-1.5 text-xs text-[#d0c5af]">
              <span>• Santiago de los Caballeros (Cava Madre)</span>
              <span>• Santo Domingo (Av. República de Colombia 23)</span>
              <span>• Punta Cana (Resort Lounge)</span>
              <span>• Miami, FL (Brickell Vault)</span>
              <span>• Madrid (Distrito Salamanca)</span>
            </div>
          </div>

          {/* Suscripción a Gazette */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="font-label-md text-xs uppercase text-[#f2ca50] tracking-[0.16em]">
              Gazette del Sommelier
            </span>
            <p className="text-xs text-[#d0c5af]">
              Reciba noticias sobre aperturas de barricas y lanzamientos de nuevas cosechas.
            </p>
            <form onSubmit={handleGazette} className="flex items-center gap-2 mt-1">
              <input 
                className="w-full bg-[#211f1e] text-[#e6e1df] px-3 py-2 text-xs border border-[#4d4635]/40 focus:outline-none focus:border-[#f2ca50] placeholder-[#d0c5af]/40" 
                placeholder="Su correo electrónico" 
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button 
                className="px-3 py-2 bg-[#f2ca50] hover:bg-[#F4D06F] text-[#3c2f00] font-label-sm text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer"
                type="submit"
              >
                Unirse
              </button>
            </form>
          </div>

        </div>

        {/* Legal Notice & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-[#d0c5af] font-label-sm">
          <p className="tracking-wider uppercase">
            Aviso Legal de Edad: Debe tener al menos 21 años para adquirir tabaco. Fumar es perjudicial para la salud.
          </p>
          <p className="tracking-wider uppercase">
            © 2024 La Capra Cigars SRL. Hecho en República Dominicana. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};
