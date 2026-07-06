import { cn } from '@/lib/utils';

interface CategoryChipProps {
  children: React.ReactNode;
  className?: string;
}

export default function CategoryChip({ children, className }: CategoryChipProps) {
  return (
    <span
      className={cn(
        'inline-block rounded-full border border-border-glass px-4 py-1 font-code text-code-tag text-primary',
        className
      )}
    >
      {children}
    </span>
  );
}
