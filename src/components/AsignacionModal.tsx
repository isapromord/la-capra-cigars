import React, { useState } from 'react';
import { VitolaItem } from '../data/lacapra';

interface AsignacionModalProps {
  vitola: VitolaItem | null;
  onClose: () => void;
  onConfirm: (vitola: VitolaItem, count: number, name: string) => void;
}

export const AsignacionModal: React.FC<AsignacionModalProps> = ({
  vitola,
  onClose,
  onConfirm
}) => {
  if (!vitola) return null;

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [formato, setFormato] = useState<'individual' | 'caja'>('caja');
  const [cantidad, setCantidad] = useState(1);
  const [ciudad, setCiudad] = useState('Santo Domingo');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm(vitola, cantidad, nombre);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
      <div className="bg-[#1d1b1a] border border-[#f2ca50]/50 max-w-xl w-full p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-[#d0c5af] hover:text-[#f2ca50] border border-[#4d4635]/40"
          aria-label="Cerrar modal"
        >
          <span className="material-symbols-outlined text-base">close</span>
        </button>

        <div className="flex items-center gap-3 mb-4">
          <img
            src={vitola.image}
            alt={vitola.name}
            className="w-16 h-20 object-cover border border-[#4d4635]/50 bg-[#0f0e0d]"
          />
          <div>
            <span className="font-label-sm text-[10px] text-[#f2ca50] uppercase tracking-widest block">
              Solicitud de Asignación • {vitola.reservaBadge}
            </span>
            <h3 className="font-headline-sm text-xl text-[#e6e1df]">
              {vitola.name}
            </h3>
            <p className="font-label-sm text-xs text-[#d0c5af]">
              {vitola.cepoMedida} • {vitola.capa}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 font-cinzel text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="font-label-sm text-[10px] uppercase text-[#f2ca50] block mb-1">
                Presentación
              </label>
              <select
                value={formato}
                onChange={(e) => setFormato(e.target.value as any)}
                className="w-full bg-[#0f0e0d] text-[#e6e1df] p-2.5 border border-[#4d4635]/40 focus:border-[#f2ca50] outline-none"
              >
                <option value="caja">Cofre de Cedro (20 Puros)</option>
                <option value="individual">Selección de 5 Puros Sueltos</option>
              </select>
            </div>

            <div>
              <label className="font-label-sm text-[10px] uppercase text-[#f2ca50] block mb-1">
                Cantidad de Cofres / Lotes
              </label>
              <input
                type="number"
                min="1"
                max="10"
                value={cantidad}
                onChange={(e) => setCantidad(Number(e.target.value))}
                className="w-full bg-[#0f0e0d] text-[#e6e1df] p-2.5 border border-[#4d4635]/40 focus:border-[#f2ca50] outline-none"
              />
            </div>
          </div>

          <div>
            <label className="font-label-sm text-[10px] uppercase text-[#f2ca50] block mb-1">
              Nombre Completo del Connoisseur
            </label>
            <input
              type="text"
              required
              placeholder="ej. Don Fernando De La Rosa"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full bg-[#0f0e0d] text-[#e6e1df] p-2.5 border border-[#4d4635]/40 focus:border-[#f2ca50] outline-none placeholder-[#d0c5af]/40"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="font-label-sm text-[10px] uppercase text-[#f2ca50] block mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                required
                placeholder="fernando@cava.do"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#0f0e0d] text-[#e6e1df] p-2.5 border border-[#4d4635]/40 focus:border-[#f2ca50] outline-none placeholder-[#d0c5af]/40"
              />
            </div>

            <div>
              <label className="font-label-sm text-[10px] uppercase text-[#f2ca50] block mb-1">
                Teléfono / WhatsApp
              </label>
              <input
                type="tel"
                required
                placeholder="+1 (809) 555-0199"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className="w-full bg-[#0f0e0d] text-[#e6e1df] p-2.5 border border-[#4d4635]/40 focus:border-[#f2ca50] outline-none placeholder-[#d0c5af]/40"
              />
            </div>
          </div>

          <div>
            <label className="font-label-sm text-[10px] uppercase text-[#f2ca50] block mb-1">
              Punto de Entrega o Retiro en Lounge
            </label>
            <select
              value={ciudad}
              onChange={(e) => setCiudad(e.target.value)}
              className="w-full bg-[#0f0e0d] text-[#e6e1df] p-2.5 border border-[#4d4635]/40 focus:border-[#f2ca50] outline-none"
            >
              <option value="Santo Domingo">Lounge Flagship Santo Domingo (Av. Rep. de Colombia 23)</option>
              <option value="Santiago">Cava Madre Santiago de los Caballeros</option>
              <option value="Punta Cana">Cigar Lounge Resort Punta Cana</option>
              <option value="Envio">Envío Privado Climatizado a Residencia</option>
            </select>
          </div>

          <div className="pt-3 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 border border-[#4d4635]/60 text-[#d0c5af] hover:text-[#e6e1df] font-label-sm text-xs uppercase"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 bg-[#f2ca50] hover:bg-[#F4D06F] text-[#3c2f00] font-label-sm text-xs uppercase font-bold tracking-wider"
            >
              Confirmar Asignación
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
