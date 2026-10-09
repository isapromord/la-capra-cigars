import React, { useEffect, useRef, useState } from 'react';

/**
 * AmbientSmoke — Luxury Cigar Smoke Engine
 * High-performance HTML5 Canvas simulation delivering authentic, silky,
 * curling cigar smoke rising continuously behind text, cards, and images.
 */
export const AmbientSmoke: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [intensity, setIntensity] = useState<'delicado' | 'elegante' | 'intenso'>('elegante');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetBreeze = 0;
    let currentBreeze = 0;

    // Multipliers based on intensity
    const intensityMultiplier = intensity === 'delicado' ? 0.7 : intensity === 'intenso' ? 1.4 : 1.0;
    const particleCount = Math.floor(48 * intensityMultiplier);

    // =========================================================================
    // 1. PRE-RENDERED HIGH-FIDELITY SMOKE PUFF SPRITES (Offscreen Canvas)
    // =========================================================================
    const createPuffSprite = (colorInner: string, colorMid: string, colorEdge: string) => {
      const size = 128;
      const offCanvas = document.createElement('canvas');
      offCanvas.width = size;
      offCanvas.height = size;
      const offCtx = offCanvas.getContext('2d');
      if (!offCtx) return offCanvas;

      const half = size / 2;
      const grad = offCtx.createRadialGradient(half, half, 0, half, half, half);
      grad.addColorStop(0, colorInner);
      grad.addColorStop(0.35, colorMid);
      grad.addColorStop(0.7, colorEdge);
      grad.addColorStop(1, 'rgba(20, 19, 18, 0)');

      offCtx.fillStyle = grad;
      offCtx.beginPath();
      offCtx.arc(half, half, half, 0, Math.PI * 2);
      offCtx.fill();
      return offCanvas;
    };

    // Warm Ivory smoke puff (Core)
    const ivorySprite = createPuffSprite(
      'rgba(255, 250, 240, 0.75)',
      'rgba(240, 230, 210, 0.45)',
      'rgba(220, 205, 180, 0.18)'
    );

    // Golden tobacco amber wisp
    const goldenSprite = createPuffSprite(
      'rgba(244, 208, 111, 0.65)',
      'rgba(212, 175, 55, 0.38)',
      'rgba(142, 91, 61, 0.12)'
    );

    // =========================================================================
    // 2. PARTICLE DEFINITION & SPAWNING
    // =========================================================================
    interface SmokeParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      maxSize: number;
      alpha: number;
      maxAlpha: number;
      rotation: number;
      rotSpeed: number;
      swayPhase: number;
      swayFreq: number;
      swayAmp: number;
      type: 'ivory' | 'golden';
    }

    const particles: SmokeParticle[] = [];

    const spawnParticle = (yPos?: number): SmokeParticle => {
      // Spawn near bottom or distributed across height on init
      const startY = yPos !== undefined ? yPos : height + Math.random() * 80;
      // 4 natural cigar smoke origin bands across the page width
      const clusters = [0.15, 0.35, 0.62, 0.85];
      const cluster = clusters[Math.floor(Math.random() * clusters.length)];
      const startX = (cluster + (Math.random() - 0.5) * 0.22) * width;

      const isGolden = Math.random() < 0.28;

      return {
        x: startX,
        y: startY,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -(0.55 + Math.random() * 0.75), // Steady graceful rise
        size: 35 + Math.random() * 40,
        maxSize: 130 + Math.random() * 110,
        alpha: 0,
        maxAlpha: (isGolden ? 0.38 : 0.48) * intensityMultiplier,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.006,
        swayPhase: Math.random() * Math.PI * 2,
        swayFreq: 0.0018 + Math.random() * 0.002,
        swayAmp: 1.2 + Math.random() * 2.0,
        type: isGolden ? 'golden' : 'ivory'
      };
    };

    // =========================================================================
    // 3. SILKY TENDRIL RIBBONS (Sinuous Cigar Tip Smoke)
    // =========================================================================
    interface SmokeTendril {
      baseXFraction: number;
      speed: number;
      amplitude: number;
      frequency: number;
      phase: number;
      color: string;
      glowColor: string;
      width: number;
    }

    const tendrils: SmokeTendril[] = [
      {
        baseXFraction: 0.22,
        speed: 0.0012,
        amplitude: 38,
        frequency: 0.0035,
        phase: 0,
        color: 'rgba(245, 238, 220, 0.32)',
        glowColor: 'rgba(244, 208, 111, 0.2)',
        width: 3.5
      },
      {
        baseXFraction: 0.52,
        speed: 0.0009,
        amplitude: 52,
        frequency: 0.0028,
        phase: Math.PI / 2,
        color: 'rgba(255, 248, 230, 0.38)',
        glowColor: 'rgba(212, 175, 55, 0.25)',
        width: 4.2
      },
      {
        baseXFraction: 0.78,
        speed: 0.0015,
        amplitude: 44,
        frequency: 0.0042,
        phase: Math.PI,
        color: 'rgba(244, 208, 111, 0.30)',
        glowColor: 'rgba(180, 100, 50, 0.15)',
        width: 3.0
      }
    ];

    // Resize handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.resetTransform();
      ctx.scale(dpr, dpr);

      // Pre-warm particles across full screen height so smoke is instantly visible
      if (particles.length === 0) {
        for (let i = 0; i < particleCount; i++) {
          const warmY = Math.random() * height;
          const p = spawnParticle(warmY);
          // Scale size and alpha according to existing height
          const progress = 1 - warmY / height;
          p.size = p.size + (p.maxSize - p.size) * progress;
          p.alpha = p.maxAlpha * (0.3 + 0.7 * Math.sin(progress * Math.PI));
          particles.push(p);
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Mouse movement interaction (Soft breeze)
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      targetBreeze = ((e.clientX / width) - 0.5) * 1.8;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // =========================================================================
    // 4. MAIN ANIMATION LOOP
    // =========================================================================
    let lastTime = performance.now();

    const render = (currentTime: number) => {
      const dt = Math.min((currentTime - lastTime) / 16.667, 2.5); // normalized frame step
      lastTime = currentTime;

      // Smooth breeze dampening
      currentBreeze += (targetBreeze - currentBreeze) * 0.03 * dt;

      // Clear with blend mode
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'screen';

      // -----------------------------------------------------------------------
      // A. Draw Silky Tendril Ribbons
      // -----------------------------------------------------------------------
      for (const t of tendrils) {
        t.phase += t.speed * dt * 16.667;
        const baseX = t.baseXFraction * width + currentBreeze * 40;

        ctx.save();
        ctx.strokeStyle = t.color;
        ctx.shadowColor = t.glowColor;
        ctx.shadowBlur = 18;
        ctx.lineWidth = t.width;
        ctx.beginPath();

        const stepY = 25;
        let first = true;
        for (let y = height + 40; y >= -40; y -= stepY) {
          const normY = y / height;
          // Harmonic wave motion (cigar tip curl)
          const curl =
            Math.sin(y * t.frequency + t.phase) * t.amplitude * (1.2 - normY * 0.4) +
            Math.sin(y * t.frequency * 2.1 - t.phase * 0.7) * (t.amplitude * 0.35);

          const drift = currentBreeze * (1 - normY) * 60;
          const x = baseX + curl + drift;

          if (first) {
            ctx.moveTo(x, y);
            first = false;
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
        ctx.restore();
      }

      // -----------------------------------------------------------------------
      // B. Draw Volumetric Smoke Puffs
      // -----------------------------------------------------------------------
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Rise upwards
        p.y += p.vy * dt;
        p.swayPhase += p.swayFreq * dt * 16.667;
        p.x += (p.vx + Math.sin(p.swayPhase) * p.swayAmp + currentBreeze * 0.6) * dt;
        p.rotation += p.rotSpeed * dt;

        // Progress from bottom (0) to top (1)
        const progress = Math.max(0, Math.min(1, 1 - p.y / height));

        // Grow in size as smoke expands into room
        const currentSize = p.size + (p.maxSize - p.size) * progress;

        // Smooth alpha envelope: fade in at bottom, stay visible in middle, fade out at top
        if (progress < 0.15) {
          p.alpha = (progress / 0.15) * p.maxAlpha;
        } else if (progress > 0.8) {
          p.alpha = ((1 - progress) / 0.2) * p.maxAlpha;
        } else {
          p.alpha = p.maxAlpha;
        }

        // Draw pre-rendered sprite
        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, p.alpha));
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        const sprite = p.type === 'golden' ? goldenSprite : ivorySprite;
        const halfSize = currentSize / 2;
        ctx.drawImage(sprite, -halfSize, -halfSize, currentSize, currentSize);
        ctx.restore();

        // Respawn when exiting screen top or margins
        if (p.y < -120 || p.x < -150 || p.x > width + 150) {
          particles[i] = spawnParticle(height + Math.random() * 40);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity]);

  return (
    <>
      {/* 
        CANVAS SMOKE LAYER
        Fixed across entire viewport at z-[2] (Behind main content z-10, above base dark background)
      */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[2] w-full h-full select-none"
        aria-hidden="true"
      />

      {/* 
        SUBTLE SMOKE AMBIANCE CONTROLLER (Floating discreet luxury pill in bottom-left)
      */}
      <aside 
        aria-label="Control de Humo de Autor"
        className="fixed bottom-4 left-4 z-40 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1d1b1a]/85 backdrop-blur-md border border-[#4d4635]/40 text-[10px] font-cinzel text-[#d0c5af] shadow-[0_4px_20px_rgba(0,0,0,0.6)] select-none hover:border-[#f2ca50]/50 transition-all"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#f2ca50] animate-pulse" />
        <span className="uppercase tracking-widest text-[#f2ca50] font-semibold">Humo de Autor</span>
        <span className="text-[#4d4635]">•</span>
        <button
          type="button"
          onClick={() => setIntensity('delicado')}
          className={`px-1.5 py-0.5 rounded transition-colors ${intensity === 'delicado' ? 'text-[#f2ca50] font-bold bg-[#f2ca50]/10' : 'text-[#d0c5af]/70 hover:text-[#e6e1df]'}`}
          title="Humo Sutil y Delicado"
        >
          Sutil
        </button>
        <button
          type="button"
          onClick={() => setIntensity('elegante')}
          className={`px-1.5 py-0.5 rounded transition-colors ${intensity === 'elegante' ? 'text-[#f2ca50] font-bold bg-[#f2ca50]/10' : 'text-[#d0c5af]/70 hover:text-[#e6e1df]'}`}
          title="Humo Equilibrado de Cava"
        >
          Elegante
        </button>
        <button
          type="button"
          onClick={() => setIntensity('intenso')}
          className={`px-1.5 py-0.5 rounded transition-colors ${intensity === 'intenso' ? 'text-[#f2ca50] font-bold bg-[#f2ca50]/10' : 'text-[#d0c5af]/70 hover:text-[#e6e1df]'}`}
          title="Humo Denso de Tertulia"
        >
          Intenso
        </button>
      </aside>
    </>
  );
};
