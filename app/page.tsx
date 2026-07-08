'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Loader from '@/components/components-parts/Loader';
import Navigation from '@/components/components-parts/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import TrajectorySection from '@/components/sections/TrajectorySection';
import DiagnositCaseStudy from '@/components/sections/DiagnositCaseStudy';
import ArsenalSection from '@/components/sections/ArsenalSection';
import ServicesSection from '@/components/sections/ServicesSection';
import FooterSection from '@/components/sections/FooterSection';
import ContactModal from '@/components/components-parts/ContactModal';

const CustomCursor = dynamic(
  () => import('@/components/components-parts/CustomCursor'),
  { ssr: false }
);

const BackgroundLayers = dynamic(
  () => import('@/components/components-parts/BackgroundLayers'),
  { ssr: false }
);

const ShowcaseSection = dynamic(
  () => import('@/components/sections/ShowcaseSection'),
  { ssr: false }
);

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <CustomCursor />
      <BackgroundLayers />
      <Navigation onConnect={() => setContactOpen(true)} />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <TrajectorySection />
        <DiagnositCaseStudy />
        <ArsenalSection />
        <ShowcaseSection />
        <ServicesSection />
        <FooterSection />
      </main>

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
