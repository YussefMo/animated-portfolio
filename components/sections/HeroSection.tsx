'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Code } from 'lucide-react';
import { hero, brand, personal } from '@/lib/data';
import AuroraShader from '@/components/components-parts/AuroraShader';
import CategoryChip from '@/components/components-parts/CategoryChip';
import MagneticButton from '@/components/components-parts/MagneticButton';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        statusRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1 },
          '-=0.5'
        )
        .fromTo(
          subRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          ctaRef.current?.children || [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          '-=0.4'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="matrix"
      className="pb-section-padding relative flex min-h-screen items-center justify-center overflow-hidden pt-32"
    >
      <div className="hero-text-bg font-display text-center">
        {brand.signature.split('\n').map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </div>

      <div className="px-margin-mobile md:px-gutter relative z-10 mx-auto max-w-3xl text-center">
        <div ref={statusRef} className="opacity-0">
          <CategoryChip className="mb-8">{hero.status}</CategoryChip>
        </div>

        <h1
          ref={titleRef}
          className="font-display-hero-mobile md:font-display-hero text-text-primary mb-6 opacity-0"
        >
          {hero.headline}
        </h1>

        <p ref={subRef} className="font-headline-md text-headline-md text-text-secondary mb-6 opacity-0">
          {hero.subheadline}
        </p>

        <p
          ref={descRef}
          className="font-body-lg text-body-lg text-text-secondary mx-auto mb-10 max-w-2xl opacity-0"
        >
          {hero.description}
        </p>

        <div
          ref={ctaRef}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <MagneticButton
            onClick={() => {
              const el = document.getElementById('showcase');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            icon={<ArrowRight className="h-4 w-4" />}
          >
            {hero.primaryCta.label}
          </MagneticButton>
          <MagneticButton
            variant="glass"
            href={hero.secondaryCta.href}
            icon={<Code className="h-4 w-4" />}
          >
            {hero.secondaryCta.label}
          </MagneticButton>
        </div>

        <div className="font-code text-code-tag text-text-secondary mt-8 opacity-60">
          {personal.name} // {personal.role}
        </div>
      </div>
      <AuroraShader />
    </section>
  );
}
