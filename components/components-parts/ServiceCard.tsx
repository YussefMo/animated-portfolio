import GlassPanel from './GlassPanel';
import * as Lucide from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const Icon = Lucide[icon as keyof typeof Lucide] as React.ComponentType<{
    className?: string;
  }>;

  return (
    <GlassPanel hover className="p-6 text-center transition-all duration-300 md:text-left">
      <div className="mb-4 flex justify-center md:justify-start">
        {Icon ? <Icon className="h-10 w-10 text-primary" /> : null}
      </div>
      <h3 className="mb-3 font-headline-md text-headline-md text-text-primary">{title}</h3>
      <p className="font-body-md text-body-md text-text-secondary">{description}</p>
    </GlassPanel>
  );
}
