import { experiences } from '@/lib/data';
import SectionReveal from '@/components/components-parts/SectionReveal';
import ExperienceCard from '@/components/components-parts/ExperienceCard';

export default function TrajectorySection() {
  return (
    <SectionReveal>
      <section id="trajectory" className="relative py-section-padding">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-gutter">
          <h2 className="mb-16 border-b border-border-glass pb-4 font-headline-lg text-headline-lg text-text-primary">
            Professional Trajectory
          </h2>

          <div className="tech-rail relative ml-4 pl-8 md:pl-12">
            {experiences.map((exp, index) => (
              <div key={exp.company} className="mb-16 last:mb-0">
                <ExperienceCard
                  company={exp.company}
                  role={exp.role}
                  period={exp.period}
                  location={exp.location}
                  type={exp.type}
                  description={exp.description || ''}
                  skills={exp.skills}
                  active={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
