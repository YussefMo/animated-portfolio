'use client';

import { useState } from 'react';
import BackgroundLayers from '@/components/components-parts/BackgroundLayers';
import CustomCursor from '@/components/components-parts/CustomCursor';
import Loader from '@/components/components-parts/Loader';
import Navigation from '@/components/components-parts/Navigation';
import ContactModal from '@/components/components-parts/ContactModal';
import HeroSection from '@/components/sections/HeroSection';
import TrajectorySection from '@/components/sections/TrajectorySection';
import ArsenalSection from '@/components/sections/ArsenalSection';
import ShowcaseSection from '@/components/sections/ShowcaseSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import FooterSection from '@/components/sections/FooterSection';

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
        <HeroSection onConnect={() => setContactOpen(true)} />
        <TrajectorySection />
        <ArsenalSection />
        <ShowcaseSection />
        <AboutSection />
        <ServicesSection />
        <FooterSection />
      </main>

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
