'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'glass';
  href?: string;
  icon?: React.ReactNode;
}

export default function MagneticButton({
  children,
  className,
  variant = 'primary',
  href,
  icon,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const element = el;
    const moveX = gsap.quickTo(element, 'x', { duration: 0.3, ease: 'power2.out' });
    const moveY = gsap.quickTo(element, 'y', { duration: 0.3, ease: 'power2.out' });

    function onMouseMove(e: Event) {
      const event = e as MouseEvent;
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      moveX(x * 0.2);
      moveY(y * 0.2);
      gsap.to(element, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
    }

    function onMouseLeave() {
      moveX(0);
      moveY(0);
      gsap.to(element, { scale: 1, duration: 0.3, ease: 'power2.out' });
    }

    element.addEventListener('mousemove', onMouseMove);
    element.addEventListener('mouseleave', onMouseLeave);

    return () => {
      element.removeEventListener('mousemove', onMouseMove);
      element.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-label-caps transition-colors duration-300 cursor-pointer';

  const variants = {
    primary: 'bg-primary-container text-on-primary-container hover:bg-primary-fixed-dim',
    glass: 'glass-panel text-text-primary hover:bg-surface-glass/20'
  };

  const content = (
    <>
      <span>{children}</span>
      {icon && <span className="text-[18px]">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={cn(baseStyles, variants[variant], className)}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {content}
    </button>
  );
}
