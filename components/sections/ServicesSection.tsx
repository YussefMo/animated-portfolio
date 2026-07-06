import { services } from '@/lib/data';
import SectionReveal from '@/components/components-parts/SectionReveal';
import ServiceCard from '@/components/components-parts/ServiceCard';

export default function ServicesSection() {
  return (
    <SectionReveal>
      <section id="services" className="py-section-padding">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-gutter">
          <h2 className="mb-16 border-b border-border-glass pb-4 font-headline-lg text-headline-lg text-text-primary">
            My Expertise
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
