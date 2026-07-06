'use client';

import { useEffect, useState } from 'react';
import { getAllProjects } from '@/lib/portfolioApi';
import SectionReveal from '@/components/components-parts/SectionReveal';
import ProjectShowcaseCard from '@/components/components-parts/ProjectShowcaseCard';

export default function ShowcaseSection() {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getAllProjects();
        setProjects(data);
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'An error occurred';
        setError(message);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return (
    <section id="showcase" className="py-section-padding">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-gutter">
        <h2 className="mb-16 border-b border-border-glass pb-4 font-headline-lg text-headline-lg text-text-primary">
          Project Showcase
        </h2>

        {loading && (
          <div className="py-20 text-center font-code text-text-secondary">
            Loading projects...
          </div>
        )}

        {error && (
          <div className="py-20 text-center font-code text-error">
            Error: {error}
          </div>
        )}

        {!loading && !error && (!projects || projects.length === 0) && (
          <div className="py-20 text-center font-code text-text-secondary">
            No projects found.
          </div>
        )}

        <div className="flex flex-col gap-32">
          {projects?.map((project, index) => (
            <SectionReveal key={project.id}>
              <ProjectShowcaseCard
                project={project}
                index={index}
                reversed={index % 2 === 1}
              />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
