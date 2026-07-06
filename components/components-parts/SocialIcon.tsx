import * as Lucide from 'lucide-react';

interface SocialIconProps {
  href: string;
  label: string;
  icon: string;
}

export default function SocialIcon({ href, label, icon }: SocialIconProps) {
  const Icon = Lucide[icon as keyof typeof Lucide] as React.ComponentType<{
    className?: string;
  }>;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border-glass bg-surface-glass text-text-secondary transition-colors duration-300 hover:border-primary-container/50 hover:text-primary"
    >
      {Icon ? <Icon className="h-5 w-5" /> : null}
      <span className="sr-only">{label}</span>
    </a>
  );
}
