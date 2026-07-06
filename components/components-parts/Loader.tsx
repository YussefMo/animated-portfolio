'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface LoaderProps {
  onComplete?: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onUpdate() {
          setProgress(Math.round(tl.progress() * 100));
        },
        onComplete: () => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.6,
            ease: 'power2.inOut',
            onComplete: () => {
              onComplete?.();
            }
          });
        }
      });

      tl.to(barRef.current, {
        width: '100%',
        duration: 2.5,
        ease: 'power2.inOut'
      });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    >
      <div className="mb-8 font-code text-sm tracking-[0.2em] text-primary-container">
        SYS.INIT
      </div>

      <div className="relative h-1 w-64 overflow-hidden rounded-full bg-surface-container">
        <div
          ref={barRef}
          className="h-full w-0 bg-gradient-to-r from-primary-container to-secondary-container"
        />
      </div>

      <div className="mt-4 font-code text-xs text-text-secondary">
        LOADING... {progress}%
      </div>
    </div>
  );
}
