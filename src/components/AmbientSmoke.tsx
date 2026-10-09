import React, { useRef, useState, useEffect } from 'react';

/**
 * AmbientSmoke — Refined Luxury Cigar Smoke (Seamless Full Page)
 * Delicate, sinuous tendrils of authentic cigar smoke rising slowly across the entire screen.
 * 
 * Key refinements:
 * 1. 100% full-screen continuous layer — no columns, blocks, or visible vertical seams.
 * 2. Ultra-subtle, elegant opacity (calibrated to delicate luxury cigar references).
 * 3. Screen blend mode on deep black backdrop for feather-soft, organic transparency.
 * 4. Radial gradient mask prevents any rectangular edge cutoffs.
 */
export const AmbientSmoke: React.FC = () => {
  const [intensity, setIntensity] = useState<'sutil' | 'elegante' | 'intenso'>('elegante');
  const videoRef = useRef<HTMLVideoElement>(null);

  // Calibrated delicate opacities (soft, refined, non-intrusive)
  const opacityMap = {
    sutil: 0.14,
    elegante: 0.22,
    intenso: 0.35,
  };

  const currentOpacity = opacityMap[intensity];

  useEffect(() => {
    // Slower, graceful ascending motion (0.65x natural speed)
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.65;
    }
  }, []);

  return (
    <>
      {/* 
        UNIFIED FULL-PAGE SMOKE LAYER
        - Covers 100% of viewport seamlessly (fixed inset-0 w-full h-full)
        - z-[1] places it behind all editorial texts, vitola cards, and blocks
        - pointer-events-none guarantees zero interaction block
      */}
      <div 
        className="fixed inset-0 w-full h-full pointer-events-none z-[1] overflow-hidden select-none"
        aria-hidden="true"
        style={{
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 65%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse at 50% 50%, black 65%, transparent 100%)',
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover mix-blend-screen transition-opacity duration-700 pointer-events-none"
          style={{
            opacity: currentOpacity,
            filter: 'contrast(1.2) brightness(1.02) sepia(0.18) hue-rotate(6deg)',
          }}
        >
          <source src="/cigar-smoke-pure.mp4" type="video/mp4" />
        </video>

        {/* Soft edge feathering so smoke dissolves seamlessly at the very top and bottom */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#141312] via-[#141312]/40 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#141312] via-[#141312]/40 to-transparent pointer-events-none" />
      </div>

      {/* 
        DISCREET AMBIANCE CONTROL PILL (Bottom Left)
      */}
      <aside 
        aria-label="Control de Humo Real"
        className="fixed bottom-4 left-4 z-40 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1d1b1a]/85 backdrop-blur-md border border-[#4d4635]/40 text-[10px] font-cinzel text-[#d0c5af] shadow-[0_4px_25px_rgba(0,0,0,0.8)] select-none hover:border-[#f2ca50]/50 transition-all"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#f2ca50] animate-pulse" />
        <span className="uppercase tracking-widest text-[#f2ca50] font-semibold">Humo Real</span>
        <span className="text-[#4d4635]">•</span>
        <button
          type="button"
          onClick={() => setIntensity('sutil')}
          className={`px-1.5 py-0.5 rounded transition-colors ${intensity === 'sutil' ? 'text-[#f2ca50] font-bold bg-[#f2ca50]/15' : 'text-[#d0c5af]/70 hover:text-[#e6e1df]'}`}
          title="Humo Sutil y Tenue"
        >
          Sutil
        </button>
        <button
          type="button"
          onClick={() => setIntensity('elegante')}
          className={`px-1.5 py-0.5 rounded transition-colors ${intensity === 'elegante' ? 'text-[#f2ca50] font-bold bg-[#f2ca50]/15' : 'text-[#d0c5af]/70 hover:text-[#e6e1df]'}`}
          title="Humo Elegante y Equilibrado"
        >
          Elegante
        </button>
        <button
          type="button"
          onClick={() => setIntensity('intenso')}
          className={`px-1.5 py-0.5 rounded transition-colors ${intensity === 'intenso' ? 'text-[#f2ca50] font-bold bg-[#f2ca50]/15' : 'text-[#d0c5af]/70 hover:text-[#e6e1df]'}`}
          title="Humo de Mayor Presencia"
        >
          Intenso
        </button>
      </aside>
    </>
  );
};
