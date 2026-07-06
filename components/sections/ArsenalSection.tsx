'use client';

import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';
import { heroSkills, skills } from '@/lib/data';
import SectionReveal from '@/components/components-parts/SectionReveal';
import SkillModule from '@/components/components-parts/SkillModule';
import TechTag from '@/components/components-parts/TechTag';
import MagneticButton from '@/components/components-parts/MagneticButton';

export default function ArsenalSection() {
  const [expanded, setExpanded] = useState(false);
  const extraRef = useRef<HTMLDivElement>(null);

  function toggleExpand() {
    if (!extraRef.current) return;

    if (!expanded) {
      gsap.to(extraRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
      });
      gsap.to(extraRef.current.querySelectorAll('.extra-skill'), {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.03,
        ease: 'power2.out'
      });
    } else {
      gsap.to(extraRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in'
      });
    }
    setExpanded(!expanded);
  }

  const extraSkills = skills.slice(8);

  return (
    <SectionReveal>
      <section id="arsenal" className="py-section-padding">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-gutter">
          <div className="mb-12 flex flex-col items-end justify-between gap-4 border-b border-border-glass pb-4 md:flex-row">
            <h2 className="font-headline-lg text-headline-lg text-text-primary">Code Arsenal</h2>
            <div className="font-code-tag text-text-secondary">
              SYS.MODULES_LOADED: {String(skills.length).padStart(2, '0')}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {heroSkills.map((skill, index) => (
              <SkillModule
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                code={`ARSN-${String(index + 1).padStart(2, '0')}`}
              />
            ))}
          </div>

          <div
            ref={extraRef}
            className="h-0 overflow-hidden opacity-0"
          >
            <div className="mt-6 flex flex-wrap gap-2">
              {extraSkills.map((skill) => (
                <TechTag
                  key={skill.name}
                  className="extra-skill translate-y-2 opacity-0"
                >
                  {skill.name}
                </TechTag>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <MagneticButton
              variant="glass"
              onClick={toggleExpand}
              icon={
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    expanded ? 'rotate-180' : ''
                  }`}
                />
              }
              className="px-6 py-3"
            >
              {expanded ? 'Collapse Modules' : 'View All Modules'}
            </MagneticButton>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
