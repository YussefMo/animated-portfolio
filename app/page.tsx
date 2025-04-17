import LoaderTrigger from '@/components/client/LoaderTrigger';
import CustomCursor from '@/components/custom-cursor';
import InteractiveShapes from '@/components/interactive-shapes';
import Navbar from '@/components/navbar';
import AboutSection from '@/sections/AboutSection';
import ContactSection from '@/sections/ContactSection';
import FooterSection from '@/sections/FooterSection';
import HeroSection from '@/sections/HeroSection';
import ServicesSection from '@/sections/ServicesSection';
import WorkSection from '@/sections/WorkSection';

export default function Home() {
  return (
    <LoaderTrigger>
      <CustomCursor />
      <Navbar />
      <InteractiveShapes />
      {/* Hero Section with Animated Boxes */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Change Work Section */}
      <WorkSection />

      {/* Change Contact Section */}
      <ContactSection />

      {/* Footer with Social Links */}
      <FooterSection />
    </LoaderTrigger>
  );
}
