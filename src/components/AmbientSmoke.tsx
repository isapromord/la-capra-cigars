import React, { useRef, useState, useEffect } from 'react';

/**
 * AmbientSmoke — Cinematic Real Cigar Smoke Engine
 * Uses authentic high-definition video of genuine rising cigar smoke on a pure black backdrop,
 * blended with `mix-blend-mode: screen` so the black disappears completely, leaving only
 * the physical, silky, undulating plumes and curling wisps rising slowly behind the page.
 */
export const AmbientSmoke: React.FC = () => {
  const [intensity, setIntensity] = useState<'sutil' | 'elegante' | 'intenso'>('elegante');
  const videoPrimaryRef = useRef<HTMLVideoElement>(null);
  const videoTendrilRightRef = useRef<HTMLVideoElement>(null);
  const videoTendrilLeftRef = useRef<HTMLVideoElement>(null);

  // Calibrate opacity based on selected level
  const opacityMap = {
    sutil: 0.28,
    elegante: 0.46,
    intenso: 0.72,
  };

  const currentOpacity = opacityMap[intensity];

  useEffect(() => {
    // Majestic slow-motion rising smoke: 0.65x - 0.75x natural speed
    if (videoPrimaryRef.current) {
      videoPrimaryRef.current.playbackRate = 0.7;
    }
    if (videoTendrilRightRef.current) {
      videoTendrilRightRef.current.playbackRate = 0.6;
    }
    if (videoTendrilLeftRef.current) {
      videoTendrilLeftRef.current.playbackRate = 0.65;
    }
  }, []);

  return (
    <>
      {/* 
        SMOKE LAYER CONTAINER
        Fixed across entire viewport behind all cards and content (z-[1]).
        Pointer-events-none ensures zero interference with clicks.
      */}
      <div 
        className="fixed inset-0 pointer-events-none z-[1] overflow-hidden select-none"
        aria-hidden="true"
      >
        {/* =======================================================================
            LAYER 1: Panoramic Volumetric Smoke Atmosphere (Wide billowing curls)
            ======================================================================= */}
        <video
          ref={videoPrimaryRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover mix-blend-screen transition-opacity duration-700 pointer-events-none"
          style={{
            opacity: currentOpacity,
            filter: 'contrast(1.2) brightness(1.05) sepia(0.2) hue-rotate(5deg)',
          }}
        >
          <source src="/cigar-smoke.mp4" type="video/mp4" />
        </video>

        {/* =======================================================================
            LAYER 2: Right Column Silky Tendril (Pure vertical rising wisps)
            ======================================================================= */}
        <div 
          className="absolute -bottom-20 right-0 sm:right-[6%] w-[450px] sm:w-[650px] lg:w-[800px] h-[120%] mix-blend-screen transition-opacity duration-700 pointer-events-none overflow-hidden"
          style={{ opacity: currentOpacity * 0.95 }}
        >
          <video
            ref={videoTendrilRightRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover pointer-events-none"
            style={{
              filter: 'contrast(1.25) brightness(1.1) sepia(0.25) hue-rotate(10deg)',
            }}
          >
            <source src="/cigar-smoke-alt.mp4" type="video/mp4" />
          </video>
        </div>

        {/* =======================================================================
            LAYER 3: Left Column Mirrored Wisps (Subtle atmospheric depth)
            ======================================================================= */}
        <div 
          className="absolute -bottom-20 left-[-5%] sm:left-[2%] w-[400px] sm:w-[580px] lg:w-[700px] h-[120%] mix-blend-screen transition-opacity duration-700 pointer-events-none overflow-hidden"
          style={{ opacity: currentOpacity * 0.75 }}
        >
          <video
            ref={videoTendrilLeftRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transform scale-x-[-1] pointer-events-none"
            style={{
              filter: 'contrast(1.2) brightness(1.05) sepia(0.22)',
            }}
          >
            <source src="/cigar-smoke-alt.mp4" type="video/mp4" />
          </video>
        </div>

        {/* =======================================================================
            SOFT EDGE VIGNETTES
            Ensures seamless feathering into header and page edges
            ======================================================================= */}
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#141312] via-[#141312]/60 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#141312] to-transparent pointer-events-none" />
      </div>

      {/* 
        DISCREET AMBIANCE CONTROL PILL (Bottom Left)
      */}
      <aside 
        aria-label="Control de Humo Real"
        className="fixed bottom-4 left-4 z-40 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1d1b1a]/90 backdrop-blur-md border border-[#4d4635]/40 text-[10px] font-cinzel text-[#d0c5af] shadow-[0_4px_25px_rgba(0,0,0,0.8)] select-none hover:border-[#f2ca50]/50 transition-all"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#f2ca50] animate-pulse" />
        <span className="uppercase tracking-widest text-[#f2ca50] font-semibold">Humo Real</span>
        <span className="text-[#4d4635]">•</span>
        <button
          type="button"
          onClick={() => setIntensity('sutil')}
          className={`px-1.5 py-0.5 rounded transition-colors ${intensity === 'sutil' ? 'text-[#f2ca50] font-bold bg-[#f2ca50]/15' : 'text-[#d0c5af]/70 hover:text-[#e6e1df]'}`}
          title="Humo Sutil"
        >
          Sutil
        </button>
        <button
          type="button"
          onClick={() => setIntensity('elegante')}
          className={`px-1.5 py-0.5 rounded transition-colors ${intensity === 'elegante' ? 'text-[#f2ca50] font-bold bg-[#f2ca50]/15' : 'text-[#d0c5af]/70 hover:text-[#e6e1df]'}`}
          title="Humo Elegante de Cava"
        >
          Elegante
        </button>
        <button
          type="button"
          onClick={() => setIntensity('intenso')}
          className={`px-1.5 py-0.5 rounded transition-colors ${intensity === 'intenso' ? 'text-[#f2ca50] font-bold bg-[#f2ca50]/15' : 'text-[#d0c5af]/70 hover:text-[#e6e1df]'}`}
          title="Humo Intenso"
        >
          Intenso
        </button>
      </aside>
    </>
  );
};
