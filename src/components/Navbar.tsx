import React, { useState } from 'react';
import { IMAGES } from '../data/lacapra';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#141312]/60 backdrop-blur-lg border-b border-[#4d4635]/20 shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all">
      <div className="h-16 sm:h-18 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 flex items-center justify-between">
        
        {/* Brand & Official Logo - Sleek, balanced luxury proportion */}
        <a 
          className="flex items-center gap-3 sm:gap-3.5 focus:outline-none group py-1 shrink-0 mr-4 sm:mr-8 lg:mr-10" 
          href="#"
        >
          <img 
            alt="La Capra Cigars Logo Oficial" 
            referrerPolicy="no-referrer"
            className="h-11 sm:h-13 md:h-14 w-auto max-w-[100px] sm:max-w-[120px] object-contain filter drop-shadow-[0_2px_12px_rgba(242,202,80,0.4)] group-hover:scale-105 transition-transform shrink-0" 
            src={IMAGES.logoOficial} 
          />
          <div className="flex flex-col justify-center">
            <span className="font-headline-sm text-base sm:text-lg md:text-xl text-[#f2ca50] tracking-[0.16em] uppercase font-bold group-hover:text-[#F4D06F] transition-colors leading-tight whitespace-nowrap">
              LA CAPRA CIGARS
            </span>
            <span className="font-label-sm text-[8px] sm:text-[9px] text-[#d0c5af] tracking-[0.22em] uppercase whitespace-nowrap mt-0.5">
              Humo Real Dominicano
            </span>
          </div>
        </a>

        {/* Navigation Links - Single words with professional breathing room */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-10 text-xs font-semibold uppercase tracking-[0.22em] font-label-md text-[#d0c5af]">
          <a 
            className="hover:text-[#f2ca50] transition-colors py-1.5 relative hover:border-b-2 hover:border-[#f2ca50] whitespace-nowrap" 
            href="#catalogo"
            onClick={(e) => { e.preventDefault(); scrollTo('catalogo'); }}
          >
            VITOLAS
          </a>
          <a 
            className="hover:text-[#f2ca50] transition-colors py-1.5 relative hover:border-b-2 hover:border-[#f2ca50] whitespace-nowrap" 
            href="#lounges"
            onClick={(e) => { e.preventDefault(); scrollTo('lounges'); }}
          >
            LOUNGES
          </a>
          <a 
            className="hover:text-[#f2ca50] transition-colors py-1.5 relative hover:border-b-2 hover:border-[#f2ca50] whitespace-nowrap" 
            href="#guias"
            onClick={(e) => { e.preventDefault(); scrollTo('guias'); }}
          >
            GUÍAS
          </a>
          <a 
            className="hover:text-[#f2ca50] transition-colors py-1.5 relative hover:border-b-2 hover:border-[#f2ca50] whitespace-nowrap" 
            href="#club"
            onClick={(e) => { e.preventDefault(); scrollTo('club'); }}
          >
            MEMBRESÍA
          </a>
        </nav>

        {/* Action Button CTA - Clean single line button */}
        <div className="flex items-center gap-3 shrink-0 ml-4 lg:ml-8">
          <a 
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#f2ca50] to-[#d4af37] hover:from-[#F4D06F] hover:to-[#f2ca50] text-[#3c2f00] font-label-sm text-[11px] font-bold uppercase px-4 sm:px-5 py-2.5 tracking-[0.18em] shadow-lg transition-all duration-300 whitespace-nowrap" 
            href="#lounges"
            onClick={(e) => { e.preventDefault(); scrollTo('lounges'); }}
          >
            <span className="material-symbols-outlined text-sm">storefront</span>
            <span className="hidden sm:inline">VISITAR LOUNGE</span>
            <span className="sm:hidden">LOUNGE</span>
          </a>

          {/* Hamburger toggle for mobile / tablet screens */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#d0c5af] hover:text-[#f2ca50] border border-[#4d4635]/50 bg-[#1d1b1a]/80"
            aria-label="Alternar menú"
          >
            <span className="material-symbols-outlined text-xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#181615]/95 backdrop-blur-xl border-b border-[#4d4635]/40 px-6 py-5 flex flex-col gap-3 font-label-md text-xs uppercase tracking-[0.2em] shadow-2xl">
          <a 
            className="py-2.5 border-b border-white/5 text-[#e6e1df] hover:text-[#f2ca50] flex justify-between items-center" 
            href="#catalogo"
            onClick={(e) => { e.preventDefault(); scrollTo('catalogo'); }}
          >
            <span>VITOLAS</span>
            <span className="material-symbols-outlined text-sm text-[#f2ca50]">east</span>
          </a>
          <a 
            className="py-2.5 border-b border-white/5 text-[#e6e1df] hover:text-[#f2ca50] flex justify-between items-center" 
            href="#lounges"
            onClick={(e) => { e.preventDefault(); scrollTo('lounges'); }}
          >
            <span>LOUNGES</span>
            <span className="material-symbols-outlined text-sm text-[#f2ca50]">east</span>
          </a>
          <a 
            className="py-2.5 border-b border-white/5 text-[#e6e1df] hover:text-[#f2ca50] flex justify-between items-center" 
            href="#guias"
            onClick={(e) => { e.preventDefault(); scrollTo('guias'); }}
          >
            <span>GUÍAS</span>
            <span className="material-symbols-outlined text-sm text-[#f2ca50]">east</span>
          </a>
          <a 
            className="py-2.5 border-b border-white/5 text-[#e6e1df] hover:text-[#f2ca50] flex justify-between items-center" 
            href="#club"
            onClick={(e) => { e.preventDefault(); scrollTo('club'); }}
          >
            <span>MEMBRESÍA</span>
            <span className="material-symbols-outlined text-sm text-[#f2ca50]">east</span>
          </a>
          <div className="pt-2">
            <a
              href="#lounges"
              onClick={(e) => { e.preventDefault(); scrollTo('lounges'); }}
              className="w-full py-2.5 bg-[#f2ca50] text-[#3c2f00] text-center font-bold tracking-[0.18em] flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">storefront</span>
              <span>VISITAR LOUNGE</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
