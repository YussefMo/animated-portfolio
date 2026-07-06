import { cn } from '@/lib/utils';

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export default function GlassPanel({
  children,
  className,
  hover = false,
  ...props
}: GlassPanelProps) {
  return (
    <div
      className={cn(
        'glass-panel rounded-xl',
        hover && 'transition-colors duration-300 hover:bg-surface-glass/10',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
