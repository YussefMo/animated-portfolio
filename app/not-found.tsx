'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import MagneticButton from '@/components/components-parts/MagneticButton';

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.notfound-code',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );
      gsap.fromTo(
        '.notfound-text',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center"
    >
      <div className="notfound-code mb-4 font-display text-[120px] font-bold leading-none text-transparent md:text-[180px]">
        <span className="bg-gradient-to-b from-primary-container to-secondary-container bg-clip-text">
          404
        </span>
      </div>
      <h1 className="notfound-text mb-6 font-headline-md text-headline-md text-text-primary">
        Page Not Found
      </h1>
      <p className="notfound-text mb-10 max-w-md font-body-md text-body-md text-text-secondary">
        The requested route could not be located in this system.
      </p>
      <Link href="/" className="notfound-text inline-block">
        <MagneticButton>Return Home</MagneticButton>
      </Link>
    </div>
  );
}
