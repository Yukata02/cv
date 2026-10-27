import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  hue: number;
  pulseSpeed: number;
}

export const CyberParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse coordinates for interactive repulsion / constellation
    const mouse = { x: -1000, y: -1000, radius: 140 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Create tactical particles
    const particleCount = Math.min(Math.floor((width * height) / 18000), 70);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.8,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: -Math.random() * 0.6 - 0.2, // Drift upward like energy sparks
        opacity: Math.random() * 0.6 + 0.2,
        hue: Math.random() > 0.3 ? 185 : 270, // Cyan (185) or Violet (270)
        pulseSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    const isDark = theme === 'dark' || document.documentElement.classList.contains('dark');

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw and update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move upward with gentle drift
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += Math.sin(Date.now() * 0.002 + i) * 0.005;

        // Wrap around screen boundaries
        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        // Gentle mouse interaction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 2.5;
          p.y -= (dy / dist) * force * 2.5;
        }

        // Particle rendering
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

        const currentOpacity = Math.max(0.1, Math.min(0.85, p.opacity));
        if (isDark) {
          ctx.fillStyle = p.hue === 185
            ? `rgba(0, 240, 255, ${currentOpacity})`
            : `rgba(168, 85, 247, ${currentOpacity * 0.85})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.hue === 185 ? 'rgba(0, 240, 255, 0.7)' : 'rgba(168, 85, 247, 0.5)';
        } else {
          ctx.fillStyle = `rgba(14, 165, 233, ${currentOpacity * 0.45})`;
          ctx.shadowBlur = 0;
        }

        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect nearby particles with subtle tactical laser constellation lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist2 < 95) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - dist2 / 95) * (isDark ? 0.15 : 0.06);
            ctx.strokeStyle = isDark ? `rgba(0, 240, 255, ${lineAlpha})` : `rgba(59, 130, 246, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-5 w-full h-full"
      style={{ opacity: 0.8 }}
      aria-hidden="true"
    />
  );
};
