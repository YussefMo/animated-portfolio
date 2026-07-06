'use client';

import Image from 'next/image';
import { ArrowUpRight, Code2 } from 'lucide-react';
import GlassPanel from './GlassPanel';
import MagneticButton from './MagneticButton';

interface ProjectShowcaseCardProps {
  project: Project;
  index: number;
  reversed?: boolean;
}

export default function ProjectShowcaseCard({
  project,
  index,
  reversed = false
}: ProjectShowcaseCardProps) {
  const formattedIndex = String(index + 1).padStart(2, '0');
  const categoryTag = project.category
    ? `${formattedIndex} // ${project.category.toUpperCase().replace(/-/g, '_')}`
    : `${formattedIndex} // PROJECT`;

  return (
    <div className="group grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
      {/* Image */}
      <div
        className={`relative lg:col-span-8 ${
          reversed ? 'lg:order-2' : 'lg:order-1'
        } ${reversed ? 'order-1' : 'order-2'}`}
      >
        <div className="absolute inset-0 rounded-xl bg-primary-container/5 blur-2xl transition-colors duration-500 group-hover:bg-primary-container/10" />
        <GlassPanel className="relative overflow-hidden p-2 shadow-2xl">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
          </div>
        </GlassPanel>
      </div>

      {/* Info */}
      <div
        className={`lg:col-span-4 ${
          reversed ? 'lg:order-1' : 'lg:order-2'
        } ${reversed ? 'order-2' : 'order-1'}`}
      >
        <GlassPanel className="flex h-full flex-col justify-center p-8">
          <div className="mb-4 font-code text-code-tag text-primary">
            {categoryTag}
          </div>
          <h3 className="mb-4 font-headline-md text-headline-md text-text-primary">
            {project.title}
          </h3>
          <p className="mb-6 font-body-md text-body-md text-text-secondary">
            {project.description}
          </p>

          <div className="mt-auto space-y-3 border-t border-border-glass pt-6">
            <div className="flex justify-between items-center">
              <span className="font-code text-code-tag text-text-secondary">ROLE</span>
              <span className="font-label-caps text-label-caps text-text-primary text-right">
                {project.role || 'Frontend Engineer'}
              </span>
            </div>
            <div className="flex justify-between items-center gap-4">
              <span className="font-code text-code-tag text-text-secondary">TECH</span>
              <span className="font-label-caps text-label-caps text-text-primary text-right">
                {project.tags.slice(0, 4).join(', ')}
              </span>
            </div>
            <div className="space-y-2 pt-2">
              <MagneticButton
                variant="glass"
                href={project.liveDemo || project.repo}
                icon={<ArrowUpRight className="h-4 w-4" />}
                className="w-full rounded-md px-4 py-3"
              >
                {project.ctaLabel || 'View Project'}
              </MagneticButton>
              <MagneticButton
                variant="glass"
                href={project.repo}
                icon={<Code2 className="h-4 w-4" />}
                className="w-full rounded-md px-4 py-3"
              >
                View Source
              </MagneticButton>
            </div>
          </div>
        </GlassPanel>
      </div>
    </div>
  );
}
