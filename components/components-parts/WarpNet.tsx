'use client';

import { useEffect, useRef } from 'react';

export default function WarpNet() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const canvasEl = canvas;
    const context = ctx;

    let width = 0;
    let height = 0;
    let mouseX = -1000;
    let mouseY = -1000;
    const points: { x: number; y: number }[] = [];
    const spacing = 55;
    let animationId: number;

    function initCanvas() {
      width = canvasEl.width = window.innerWidth;
      height = canvasEl.height = window.innerHeight;
      points.length = 0;
      for (let x = 0; x <= width + spacing; x += spacing) {
        for (let y = 0; y <= height + spacing; y += spacing) {
          points.push({ x, y });
        }
      }
    }

    function handleMouseMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    function handleMouseLeave() {
      mouseX = -1000;
      mouseY = -1000;
    }

    function animate() {
      context.clearRect(0, 0, width, height);

      points.forEach((p) => {
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 160;

        if (dist < maxDist) {
          const t = 1 - dist / maxDist;
          const eased = t * t;
          const size = 0.6 + eased * 3;
          const alpha = 0.12 + eased * 0.7;

          context.beginPath();
          context.arc(p.x, p.y, size + 3, 0, Math.PI * 2);
          context.fillStyle = `rgba(192, 193, 255, ${alpha * 0.25})`;
          context.fill();

          context.beginPath();
          context.arc(p.x, p.y, size, 0, Math.PI * 2);
          context.fillStyle = `rgba(192, 193, 255, ${alpha})`;
          context.fill();

          context.beginPath();
          context.arc(p.x, p.y, size * 0.35, 0, Math.PI * 2);
          context.fillStyle = `rgba(224, 223, 255, ${Math.min(1, alpha * 1.2)})`;
          context.fill();
        } else {
          context.beginPath();
          context.arc(p.x, p.y, 0.6, 0, Math.PI * 2);
          context.fillStyle = 'rgba(192, 193, 255, 0.355)';
          context.fill();
        }
      });

      animationId = requestAnimationFrame(animate);
    }

    initCanvas();
    animate();

    window.addEventListener('resize', initCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', initCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-20 opacity-80"
      aria-hidden="true"
    />
  );
}
