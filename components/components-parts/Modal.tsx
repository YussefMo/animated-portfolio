'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { X } from 'lucide-react';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { cn } from '@/lib/utils';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export default function Modal({ isOpen, onClose, children, title, className }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useOutsideClick<HTMLDivElement>(onClose);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, ease: 'power2.out' });
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, scale: 0.95, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      );
    } else {
      document.body.style.overflow = '';
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.2, ease: 'power2.in' });
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, contentRef]);

  return (
    <div
      ref={overlayRef}
      className={cn(
        'fixed inset-0 z-[90] flex items-center justify-center bg-background/80 px-4 opacity-0 backdrop-blur-sm',
        !isOpen && 'pointer-events-none'
      )}
    >
      <div
        ref={contentRef}
        className={cn(
          'glass-panel relative w-full max-w-lg rounded-xl p-8',
          className
        )}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-text-secondary transition-colors hover:text-text-primary"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {title && (
          <h2 className="mb-6 font-headline-md text-headline-md text-text-primary">{title}</h2>
        )}

        {children}
      </div>
    </div>
  );
}
