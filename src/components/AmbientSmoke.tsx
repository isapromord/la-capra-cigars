import React, { useRef, useState, useEffect } from 'react';

/**
 * AmbientSmoke — Refined Luxury Cigar Smoke (Seamless Full Page + Interactive Breeze)
 * Delicate, sinuous tendrils of authentic cigar smoke rising slowly across the entire screen.
 * 
 * Features:
 * 1. 100% full-screen continuous layer — no columns, blocks, or visible vertical seams.
 * 2. Interactive Breeze Physics: Smooth, GPU-accelerated parallax inertia that sways
 *    the smoke gently in response to cursor movement (like air drifting in a cigar lounge).
 * 3. High performance: Uses hardware video decoding (H.264 FastStart, ~3.9 MB),
 *    non-blocking async stream, and automatically pauses if the user switches browser tabs.
 */
export const AmbientSmoke: React.FC = () => {
  const [intensity, setIntensity] = useState<'sutil' | 'elegante' | 'intenso'>('elegante');
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

  // Smooth Interactive Breeze Physics (Mouse Hover Reactivity)
  useEffect(() => {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let currentRotate = 0;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Normalized between -1 and 1
      const normX = (e.clientX / innerWidth - 0.5) * 2;
      const normY = (e.clientY / innerHeight - 0.5) * 2;

      // Gentle displacement range: up to 38px horizontal breeze, 18px vertical, subtle tilt
      targetX = normX * 38;
      targetY = normY * 18;
    };

    const updatePhysics = () => {
      // Fluid spring/lerp easing for natural air resistance and inertia
      currentX += (targetX - currentX) * 0.04;
      currentY += (targetY - currentY) * 0.04;
      currentRotate += ((targetX * 0.03) - currentRotate) * 0.04;

      if (containerRef.current) {
        containerRef.current.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0) rotate(${currentRotate.toFixed(2)}deg) scale(1.05)`;
      }

      animId = requestAnimationFrame(updatePhysics);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animId = requestAnimationFrame(updatePhysics);

    // Resource Optimization: Pause video decode when tab is in background
    const handleVisibilityChange = () => {
      if (document.hidden) {
        videoRef.current?.pause();
      } else {
        videoRef.current?.play().catch(() => {});
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* 
        UNIFIED FULL-PAGE SMOKE LAYER WITH BREEZE PARALLAX (ON TOP OF CONTENT)
        - z-30 floats gently ON TOP of letters, cards, blocks, and images
        - pointer-events-none ensures 100% of clicks pass through seamlessly
        - mix-blend-screen overlays only luminous smoke curls without dimming text
      */}
      <div 
        ref={containerRef}
        className="fixed inset-[-4%] w-[108%] h-[108%] pointer-events-none z-30 overflow-hidden select-none will-change-transform"
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
          preload="metadata"
          className="w-full h-full object-cover mix-blend-screen transition-opacity duration-700 pointer-events-none"
          style={{
            opacity: currentOpacity,
            filter: 'contrast(1.2) brightness(1.02) sepia(0.18) hue-rotate(6deg)',
          }}
        >
          <source src="/cigar-smoke-pure.mp4" type="video/mp4" />
        </video>
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
