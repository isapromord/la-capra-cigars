import React, { useState, useEffect } from 'react';

const HERO_SLIDES = [
  {
    url: '/images/hero/slide-1.webp',
    title: 'Edición Limitada Oro & Azul',
    kicker: 'Anilla de Autor',
    badge: 'Capa Añejada',
    alt: 'Puro La Capra con anilla de autor de Edición Limitada Oro y Azul'
  },
  {
    url: '/images/hero/slide-2.webp',
    title: 'Cava de Barricas & Reposo',
    kicker: 'Añejamiento Litúrgico',
    badge: 'Maduro & Habano',
    alt: 'Selección La Capra Cigars en cava de barricas'
  },
  {
    url: '/images/hero/slide-3.webp',
    title: 'Presentación Coleccionista',
    kicker: 'Cofre de Autor',
    badge: 'Cava 2023',
    alt: 'Caja y vitolas exclusivas La Capra Cigars'
  }
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel smoothly every 4 seconds (between 3 and 5s)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-transparent py-16 lg:py-24 border-b border-[#4d4635]/20">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[750px] h-[550px] bg-[#f2ca50]/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute right-0 top-1/4 w-[450px] h-[450px] bg-[#2B1A12]/40 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Editorial Statement */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="inline-block w-8 h-[1px] bg-[#f2ca50]"></span>
              <span className="font-label-sm text-xs uppercase tracking-[0.28em] text-[#f2ca50]">
                Edición Limitada Hecho a Mano • Valle del Cibao
              </span>
            </div>

            <h1 className="font-headline-xl text-4xl sm:text-5xl lg:text-6xl text-[#e6e1df] leading-[1.1] tracking-[-0.02em]">
              La Capra Cigars — <span className="italic text-[#f2ca50] font-normal">Humo Real Dominicano</span>
            </h1>

            <p className="font-body-lg text-base lg:text-lg text-[#d0c5af] leading-relaxed max-w-2xl">
              Cava privada de tabacos añejados con devoción litúrgica en Santiago de los Caballeros. Cada vitola representa el pináculo de la tradición artesanal dominicana: ligadas reservadas, tiro milimétrico y anillado de colección para los paladares más exigentes del mundo.
            </p>

            {/* Buttons CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                className="inline-flex items-center justify-center bg-[#f2ca50] hover:bg-[#F4D06F] text-[#3c2f00] font-label-md text-xs uppercase px-7 py-3.5 tracking-[0.2em] shadow-[0_4px_20px_rgba(242,202,80,0.3)] transition-all duration-300 font-bold" 
                href="#catalogo"
                onClick={(e) => { e.preventDefault(); scrollTo('catalogo'); }}
              >
                Explorar Catálogo Digital
              </a>
              <a 
                className="inline-flex items-center justify-center bg-[#2b2a28] hover:bg-[#3b3937] text-[#e6e1df] border border-[#4d4635]/60 font-label-md text-xs uppercase px-6 py-3.5 tracking-[0.18em] transition-all duration-300" 
                href="#lounges"
                onClick={(e) => { e.preventDefault(); scrollTo('lounges'); }}
              >
                <span className="text-[#f2ca50] mr-2">✦</span> Visitar Nuestro Lounge
              </a>
            </div>

            {/* Strip de Indicadores de Cata & Calidad */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#4d4635]/30 max-w-xl">
              <div>
                <p className="font-headline-sm text-2xl text-[#f2ca50] font-semibold">100%</p>
                <p className="font-label-sm text-[10px] text-[#d0c5af] uppercase tracking-wider mt-1">Tripa Larga Seleccionada</p>
              </div>
              <div>
                <p className="font-headline-sm text-2xl text-[#f2ca50] font-semibold">5 Años</p>
                <p className="font-label-sm text-[10px] text-[#d0c5af] uppercase tracking-wider mt-1">Añejamiento en Fardo</p>
              </div>
              <div>
                <p className="font-headline-sm text-2xl text-[#f2ca50] font-semibold">70% HR</p>
                <p className="font-label-sm text-[10px] text-[#d0c5af] uppercase tracking-wider mt-1">Cava Cedro Español</p>
              </div>
            </div>
          </div>

          {/* Asymmetric Hero Visuals: Smooth Animated Cross-Dissolve Carousel */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] max-w-[480px] mx-auto">
              
              {/* Macro Cigar Image Container with Smooth Animation */}
              <div className="w-full h-full bg-[#0f0e0d] border border-[#4d4635]/40 shadow-2xl overflow-hidden relative group">
                
                {/* Image Slides with Ken Burns and Cross-Dissolve Fade */}
                {HERO_SLIDES.map((slide, idx) => {
                  const isActive = idx === currentSlide;
                  return (
                    <div 
                      key={slide.url}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                    >
                      <img 
                        alt={slide.alt}
                        decoding="async"
                        {...(idx === 0 ? { fetchPriority: 'high' as const } : {})}
                        className={`w-full h-full object-cover object-center filter brightness-95 transition-transform duration-[4000ms] ease-out ${
                          isActive ? 'scale-105' : 'scale-100'
                        }`} 
                        src={slide.url} 
                      />
                    </div>
                  );
                })}

                {/* Scrim Gradient for Legibility */}
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#141312]/95 via-transparent to-transparent pointer-events-none"></div>

                {/* Elegant Slide Indicators (Top Right) */}
                <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 bg-[#0f0e0d]/75 backdrop-blur-md px-2.5 py-1.5 border border-[#4d4635]/50">
                  {HERO_SLIDES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`h-1.5 transition-all duration-500 cursor-pointer ${
                        i === currentSlide 
                          ? 'w-6 bg-[#f2ca50]' 
                          : 'w-2 bg-[#d0c5af]/40 hover:bg-[#d0c5af]'
                      }`}
                      aria-label={`Ver diapositiva ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Bottom Dynamic Captions */}
                <div className="absolute bottom-5 left-5 right-5 z-30 flex items-center justify-between">
                  <div>
                    <span className="font-label-sm text-[10px] uppercase text-[#f2ca50] tracking-widest block transition-all">
                      {HERO_SLIDES[currentSlide].kicker}
                    </span>
                    <h3 className="font-headline-sm text-xl text-[#e6e1df] transition-all">
                      {HERO_SLIDES[currentSlide].title}
                    </h3>
                  </div>
                  <span className="px-3 py-1 bg-[#2B1A12] text-[#f2ca50] font-label-sm text-[10px] uppercase tracking-wider border border-[#f2ca50]/30 shrink-0">
                    {HERO_SLIDES[currentSlide].badge}
                  </span>
                </div>
              </div>

              {/* Badge Flotante Artesanal */}
              <div className="absolute -bottom-4 -left-4 z-40 bg-[#2b2a28]/95 backdrop-blur-md px-4 py-2 border border-[#4d4635]/60 shadow-lg flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-label-sm text-[10px] text-[#e6e1df] uppercase tracking-wider">
                  Cava República Dominicana
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
