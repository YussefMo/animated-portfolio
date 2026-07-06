'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, brand } from '@/lib/data';
import { useLenisContext } from './SmoothScrolling';
import MagneticButton from './MagneticButton';

interface NavigationProps {
  onConnect: () => void;
}

export default function Navigation({ onConnect }: NavigationProps) {
  const { lenis } = useLenisContext();
  const [active, setActive] = useState('matrix');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!lenis) return;

    const offset = 120; // nav height + buffer

    function updateActive() {
      let current = navLinks[0].href.replace('#', '');

      navLinks.forEach((link) => {
        const id = link.href.replace('#', '');
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset) {
          current = id;
        }
      });

      setActive(current);
    }

    lenis.on('scroll', updateActive);
    updateActive();

    return () => {
      lenis.off('scroll', updateActive);
    };
  }, [lenis]);

  function handleNavClick(href: string) {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;

    if (lenis) {
      lenis.scrollTo(el, { offset: -100 });
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <nav className="fixed left-1/2 top-6 z-50 flex w-[calc(100%-40px)] max-w-container-max -translate-x-1/2 items-center justify-between rounded-full border border-border-glass bg-surface-glass px-glass-padding py-4 shadow-indigo-glow backdrop-blur-xl transition-all duration-500">
        <a
          href="#matrix"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#matrix');
          }}
          className="font-display text-xl font-bold tracking-tighter text-primary"
        >
          {brand.logo}
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`font-label-caps text-label-caps transition-colors duration-300 ${
                  isActive
                    ? 'border-b-2 border-primary pb-1 text-text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <MagneticButton
            onClick={onConnect}
            className="px-6 py-2 text-xs"
          >
            Connect
          </MagneticButton>
        </div>

        <button
          className="text-text-primary lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 top-24 z-40 mx-auto w-[calc(100%-40px)] max-w-container-max overflow-hidden rounded-2xl border border-border-glass bg-surface-glass backdrop-blur-xl transition-all duration-300 lg:hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-4 p-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`font-label-caps text-label-caps ${
                active === link.href.replace('#', '')
                  ? 'text-text-primary'
                  : 'text-text-secondary'
              }`}
            >
              {link.label}
            </a>
          ))}
          <MagneticButton onClick={onConnect} className="mt-2 w-full py-3">
            Connect
          </MagneticButton>
        </div>
      </div>
    </>
  );
}
