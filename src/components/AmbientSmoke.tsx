import React, { useRef, useEffect } from 'react';

/**
 * AmbientSmoke — Cinematic Luxury Cigar Smoke (Foreground Layer + Interactive Breeze)
 * Permanent "Elegante" calibration: delicate, sinuous tendrils of authentic cigar smoke
 * rising slowly across the entire screen directly on top of letters, cards, and images (z-30).
 * 
 * Features:
 * 1. 100% full-screen continuous layer (no columns, cuts, or floating UI buttons).
 * 2. Elegante Calibration: Opacity strictly locked at 0.22 with warm cedar/amber tint.
 * 3. Interactive Breeze Physics: Smooth, GPU-accelerated parallax inertia that sways
 *    the smoke gently in response to cursor movement.
 * 4. High performance: Uses hardware video decoding (H.264 FastStart, ~3.9 MB),
 *    non-blocking async stream, and automatically pauses if the user switches browser tabs.
 */
export const AmbientSmoke: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
        className="w-full h-full object-cover mix-blend-screen pointer-events-none"
        style={{
          opacity: 0.22,
          filter: 'contrast(1.2) brightness(1.02) sepia(0.18) hue-rotate(6deg)',
        }}
      >
        <source src="/cigar-smoke-mobile.webm" type="video/webm" media="(max-width: 767px)" />
        <source src="/cigar-smoke-mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
        <source src="/cigar-smoke.webm" type="video/webm" />
        <source src="/cigar-smoke-720.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
