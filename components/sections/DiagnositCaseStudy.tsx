'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Layers,
  Zap,
  Smartphone,
  Globe,
  Box,
  Gauge,
  Code2
} from 'lucide-react';
import GlassPanel from '@/components/components-parts/GlassPanel';
import TechTag from '@/components/components-parts/TechTag';

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { value: '~50%', label: 'Faster Feature Delivery' },
  { value: '60%', label: 'Faster Page Loads' },
  { value: '70%', label: 'Smaller Bundle Size' },
  { value: '500+', label: 'API Endpoints Integrated' },
  { value: '~50%', label: 'Fewer Render Issues' },
  { value: '45%', label: 'Faster Dev Time (DS)' }
];

const highlights = [
  {
    icon: Layers,
    title: 'Architecture',
    body: 'Re-architected a large Next.js SaaS monolith into a modular, scalable codebase. Feature delivery accelerated by ~50%. Routes, data layer, and state management were restructured for clarity and speed.'
  },
  {
    icon: Zap,
    title: 'Performance',
    body: 'Reduced landing page load time by 60% through render optimization, asset pipeline improvements, and strategic code splitting. The Live Patient Link feature shipped with 45% lower initial load and a 70% smaller bundle.'
  },
  {
    icon: Smartphone,
    title: 'React Native',
    body: 'Architected the Expo-based mobile application from the web platform\'s patterns. Full feature parity — authentication, real-time dashboards, push notifications (FCM) — rebuilt natively without compromise.'
  },
  {
    icon: Box,
    title: 'Design System',
    body: 'Designed and shipped a reusable component library adopted across the product. Standardized primitives, consistent APIs, documented patterns. New feature development time dropped by 45%.'
  },
  {
    icon: Globe,
    title: 'Internationalization',
    body: 'Implemented full i18n support across web and mobile. Locale-aware routing, translated UI, RTL layouts — architected from the data layer up rather than patched at the surface.'
  },
  {
    icon: Gauge,
    title: 'API Layer',
    body: 'Integrated and maintained 500+ REST API endpoints with TanStack Query and Axios. Type-safe data fetching, optimistic updates, cache invalidation, and error boundaries at scale.'
  }
];

const stack = [
  'Next.js', 'React', 'TypeScript', 'React Native', 'Expo',
  'Tailwind CSS', 'TanStack Query', 'Axios', 'FCM', 'i18n'
];

export default function DiagnositCaseStudy() {
  const sectionRef = useRef<HTMLElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        metricsRef.current?.children || [],
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: metricsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="diagnosit" className="py-section-padding">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-gutter">
        <div className="mb-4 font-code text-code-tag text-primary">
          CASE STUDY
        </div>
        <h2 className="mb-4 font-headline-lg text-headline-lg text-text-primary">
          Diagnosit
        </h2>
        <p className="mb-16 max-w-2xl font-body-lg text-body-lg text-text-secondary">
          A SaaS healthcare platform serving real users. Re-architected from monolith to modular. Web + mobile. AI-ready.
        </p>

        {/* Metrics */}
        <div
          ref={metricsRef}
          className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6"
        >
          {metrics.map((m) => (
            <GlassPanel key={m.label} className="p-6 text-center">
              <div className="mb-2 font-display text-3xl font-bold text-primary md:text-4xl">
                {m.value}
              </div>
              <div className="font-body-md text-body-md text-text-secondary">
                {m.label}
              </div>
            </GlassPanel>
          ))}
        </div>

        {/* Highlights */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h) => (
            <GlassPanel key={h.title} className="p-8">
              <h.icon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-3 font-headline-md text-headline-md text-text-primary">
                {h.title}
              </h3>
              <p className="font-body-md text-body-md text-text-secondary">
                {h.body}
              </p>
            </GlassPanel>
          ))}
        </div>

        {/* Stack */}
        <GlassPanel className="p-8">
          <div className="mb-4 flex items-center gap-2 font-label-caps text-label-caps text-text-secondary">
            <Code2 className="h-4 w-4" />
            Technology Stack
          </div>
          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <TechTag key={tech}>{tech}</TechTag>
            ))}
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}
