import GlassPanel from './GlassPanel';
import TechTag from './TechTag';

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  skills: string[];
  active?: boolean;
}

export default function ExperienceCard({
  company,
  period,
  location,
  type,
  description,
  skills,
  active = false
}: ExperienceCardProps) {
  return (
    <div className="group relative">
      <div
        className={`absolute -left-[41px] top-1 z-10 h-4 w-4 rounded-full border-2 border-background transition-all duration-300 md:-left-[57px] ${
          active
            ? 'bg-primary-container shadow-indigo-glow group-hover:scale-150'
            : 'bg-surface-variant group-hover:bg-primary-container'
        }`}
      />
      <GlassPanel hover className="p-8 md:w-2/3">
        <div className="mb-4 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h3 className="font-headline-md text-headline-md text-text-primary">{company}</h3>
            <div className="mt-1 font-body-md text-body-md text-text-secondary">
              {location}, {type}
            </div>
          </div>
          <div className="rounded-md bg-surface-container-highest px-3 py-1 font-code text-code-tag text-primary">
            {period}
          </div>
        </div>

        <p className="mb-6 font-body-md text-body-md text-text-secondary">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <TechTag key={skill}>{skill}</TechTag>
          ))}
        </div>
      </GlassPanel>
    </div>
  );
}
