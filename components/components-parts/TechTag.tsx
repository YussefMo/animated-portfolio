import { cn } from '@/lib/utils';

interface TechTagProps {
  children: React.ReactNode;
  className?: string;
}

export default function TechTag({ children, className }: TechTagProps) {
  return (
    <span
      className={cn(
        'rounded-md border border-border-glass bg-surface-container px-3 py-1 font-code text-code-tag text-text-primary',
        className
      )}
    >
      {children}
    </span>
  );
}
