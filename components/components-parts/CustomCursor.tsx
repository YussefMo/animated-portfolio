'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const moveDot = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power3.out' });
    const moveDotY = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power3.out' });
    const moveRing = gsap.quickTo(ring, 'x', { duration: 0.25, ease: 'power3.out' });
    const moveRingY = gsap.quickTo(ring, 'y', { duration: 0.25, ease: 'power3.out' });

    function onMouseMove(e: MouseEvent) {
      moveDot(e.clientX);
      moveDotY(e.clientY);
      moveRing(e.clientX);
      moveRingY(e.clientY);
    }

    function onMouseEnter() {
      gsap.to(ring, { scale: 1.6, opacity: 0.6, duration: 0.3 });
    }

    function onMouseLeave() {
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.3 });
    }

    window.addEventListener('mousemove', onMouseMove);

    const interactive = document.querySelectorAll('a, button, [role="button"], input, textarea');
    interactive.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      interactive.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary md:block"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/50 md:block"
      />
    </>
  );
}
