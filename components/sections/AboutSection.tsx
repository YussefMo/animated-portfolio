import Image from 'next/image';
import { about, personal } from '@/lib/data';
import SectionReveal from '@/components/components-parts/SectionReveal';
import GlassPanel from '@/components/components-parts/GlassPanel';

export default function AboutSection() {
  return (
    <SectionReveal>
      <section id="about" className="py-section-padding">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-gutter">
          <h2 className="mb-16 border-b border-border-glass pb-4 font-headline-lg text-headline-lg text-text-primary">
            Code & Me
          </h2>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-full shadow-indigo-glow lg:max-w-none">
                <Image
                  src={about.image}
                  alt={personal.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </div>

            <GlassPanel className="lg:col-span-8 p-8">
              <p className="mb-6 font-body-lg text-body-lg text-text-secondary">
                {about.short}
              </p>
              <div className="space-y-4">
                {about.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="font-body-md text-body-md text-text-secondary"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </GlassPanel>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
