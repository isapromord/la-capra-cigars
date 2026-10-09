import React, { useEffect, useRef } from 'react';

/**
 * AmbientSmoke — Luxury Cigar Smoke Component (Option A: SVG Turbulence + GPU CSS)
 * Renders atmospheric, slow-rising smoke wisps behind cards, typography, and images.
 * Pure vector SVG & CSS accelerated — 60 FPS, zero CPU bottleneck.
 */
export const AmbientSmoke: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30; // Max 15px drift
      const y = (e.clientY / innerHeight - 0.5) * 20;
      containerRef.current.style.setProperty('--breeze-x', `${x}px`);
      containerRef.current.style.setProperty('--breeze-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* SVG Filters Definition (Fractal Turbulence & Displacement) */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <filter id="cigar-smoke-filter" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012 0.008"
              numOctaves="4"
              seed="5"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="65"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
            <feGaussianBlur in="displaced" stdDeviation="18" result="blurred" />
          </filter>

          <filter id="cigar-smoke-filter-fine" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.018 0.012"
              numOctaves="3"
              seed="12"
              result="noise2"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise2"
              scale="45"
              xChannelSelector="R"
              yChannelSelector="B"
            />
            <feGaussianBlur stdDeviation="12" />
          </filter>
        </defs>
      </svg>

      {/* Atmospheric Smoke Layer Container */}
      <div
        ref={containerRef}
        className="fixed inset-0 pointer-events-none overflow-hidden z-[2] mix-blend-screen opacity-90 transition-transform duration-1000 ease-out"
        style={{
          transform: 'translate(var(--breeze-x, 0px), var(--breeze-y, 0px))',
        }}
        aria-hidden="true"
      >
        {/* Layer 1: Ambient Base Haze (Deep warm cedar & tobacco leaf undertone) */}
        <div className="absolute inset-0 smoke-drift-base opacity-25">
          <div className="w-[120%] h-[200%] -top-[50%] -left-[10%] bg-[radial-gradient(ellipse_at_center,_rgba(138,60,27,0.12)_0%,_rgba(43,26,18,0.06)_40%,_transparent_70%)]" />
        </div>

        {/* Layer 2: Main Rising Smoke Plumes (Filtered with SVG Turbulence) */}
        <div className="absolute inset-0" style={{ filter: 'url(#cigar-smoke-filter)' }}>
          {/* Plume 1 - Left / Center Rising Column */}
          <div className="absolute bottom-[-20%] left-[15%] w-[420px] h-[900px] smoke-rise-slow opacity-35 bg-[radial-gradient(ellipse_at_bottom,_rgba(244,208,111,0.18)_0%,_rgba(232,213,181,0.1)_35%,_rgba(138,60,27,0.05)_65%,_transparent_80%)] rounded-full" />

          {/* Plume 2 - Right / Hero Column */}
          <div className="absolute bottom-[-30%] right-[12%] w-[480px] h-[1100px] smoke-rise-mid opacity-40 bg-[radial-gradient(ellipse_at_bottom,_rgba(242,202,80,0.16)_0%,_rgba(232,213,181,0.08)_40%,_rgba(43,26,18,0.04)_70%,_transparent_85%)] rounded-full" />

          {/* Plume 3 - Center Atmospheric Swirl */}
          <div className="absolute bottom-[-10%] left-[45%] w-[520px] h-[950px] smoke-rise-deep opacity-30 bg-[radial-gradient(ellipse_at_bottom,_rgba(232,213,181,0.14)_0%,_rgba(163,128,42,0.07)_45%,_transparent_75%)] rounded-full" />
        </div>

        {/* Layer 3: Fine Tendrils & Shimmer (Higher frequency, extra silky wisps) */}
        <div className="absolute inset-0" style={{ filter: 'url(#cigar-smoke-filter-fine)' }}>
          {/* Ribbon 1 */}
          <div className="absolute bottom-[-15%] left-[28%] w-[260px] h-[850px] smoke-rise-ribbon-1 opacity-25 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,235,180,0.2)_0%,_rgba(212,175,55,0.08)_50%,_transparent_80%)] rounded-full" />

          {/* Ribbon 2 */}
          <div className="absolute bottom-[-25%] right-[25%] w-[290px] h-[920px] smoke-rise-ribbon-2 opacity-30 bg-[radial-gradient(ellipse_at_bottom,_rgba(244,208,111,0.18)_0%,_rgba(138,60,27,0.06)_55%,_transparent_80%)] rounded-full" />
        </div>

        {/* Top Vignette Fade (Ensures smoke seamlessly dissolves before hitting top header) */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#141312] via-[#141312]/60 to-transparent pointer-events-none" />
      </div>
    </>
  );
};
