import React, { useState } from 'react';
import { VitolaItem } from './data/lacapra';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { CatalogoVitolas } from './components/CatalogoVitolas';
import { LoungeSection } from './components/LoungeSection';
import { GuiasAficionado } from './components/GuiasAficionado';
import { ClubMembresia } from './components/ClubMembresia';
import { Footer } from './components/Footer';
import { AsignacionModal } from './components/AsignacionModal';
import { AmbientSmoke } from './components/AmbientSmoke';

export default function App() {
  const [selectedVitolaForAllocation, setSelectedVitolaForAllocation] = useState<VitolaItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3800);
  };

  const handleConfirmAllocation = (vitola: VitolaItem, count: number, name: string) => {
    setSelectedVitolaForAllocation(null);
    showToast(`Asignación reservada con éxito: ${count} cofre(s) de ${vitola.name} para ${name || 'Don Connoisseur'}.`);
  };

  return (
    <div className="bg-[#141312] font-body-md text-[#e6e1df] antialiased selection:bg-[#d4af37] selection:text-[#554300] min-h-screen flex flex-col relative overflow-x-hidden">
      
      {/* AMBIENT CIGAR SMOKE (OPTION A: SVG Turbulence + GPU CSS) */}
      <AmbientSmoke />

      {/* NAVBAR HEADER */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="w-full pt-16 sm:pt-18 md:pt-20 bg-transparent flex-1 relative z-10">
        {/* HERO SECTION EDITORIAL */}
        <Hero />

        {/* MARQUEE CAVA STATEMENT */}
        <Marquee />

        {/* CATÁLOGO DIGITAL DE SELECCIÓN PREMIUM */}
        <CatalogoVitolas 
          onSelectVitola={(vitola) => setSelectedVitolaForAllocation(vitola)}
        />

        {/* INTENCIÓN LOCAL & CIGAR LOUNGE */}
        <LoungeSection 
          onShowToast={showToast}
        />

        {/* GUÍAS DEL AFICIONADO */}
        <GuiasAficionado />

        {/* CÍRCULO PRIVADO & CLUB DE ASIGNACIÓN */}
        <ClubMembresia 
          onShowToast={showToast}
        />
      </main>

      {/* FOOTER INTEGRAL */}
      <Footer 
        onShowToast={showToast}
      />

      {/* Asignación Modal */}
      <AsignacionModal
        vitola={selectedVitolaForAllocation}
        onClose={() => setSelectedVitolaForAllocation(null)}
        onConfirm={handleConfirmAllocation}
      />

      {/* Toast Feedback */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#1d1b1a] border border-[#f2ca50] px-6 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.95)] flex items-center gap-3 max-w-md text-center">
          <span className="material-symbols-outlined text-[#f2ca50] text-xl shrink-0">
            verified
          </span>
          <span className="text-xs font-cinzel text-[#e6e1df] uppercase tracking-wider">
            {toastMessage}
          </span>
        </div>
      )}

    </div>
  );
}
