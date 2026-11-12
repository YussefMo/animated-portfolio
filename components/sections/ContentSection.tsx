import type { CSSProperties } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SiInstagram, SiTiktok, SiYoutube } from 'react-icons/si';
import { content } from '@/lib/data';
import GlassPanel from '@/components/components-parts/GlassPanel';
import SectionReveal from '@/components/components-parts/SectionReveal';

const icons = {
  youtube: SiYoutube,
  tiktok: SiTiktok,
  instagram: SiInstagram
};

export default function ContentSection() {
  return (
    <SectionReveal>
      <section id="content" className="py-section-padding">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-gutter">
          <div className="mb-4 flex items-center gap-3 font-code text-code-tag text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {content.eyebrow}
          </div>

          <h2 className="mb-4 font-headline-lg text-headline-lg text-text-primary">
            {content.title}
          </h2>
          <p className="mb-12 max-w-2xl font-body-lg text-body-lg text-text-secondary">
            {content.description}
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {content.platforms.map((platform) => {
              const Icon = icons[platform.icon as keyof typeof icons];

              return (
                <a
                  key={platform.label}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${platform.label} — ${platform.handle}`}
                  style={{ '--accent': platform.color } as CSSProperties}
                  className="group block h-full rounded-xl"
                >
                  <GlassPanel
                    hover
                    className="flex h-full flex-col border border-border-glass p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[color:var(--accent)] group-hover:shadow-[0_0_60px_-24px_var(--accent)]"
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <Icon className="h-7 w-7 text-[color:var(--accent)]" />
                      <ArrowUpRight className="h-4 w-4 text-text-secondary transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--accent)]" />
                    </div>

                    <div className="mb-1 font-label-caps text-label-caps text-text-primary">
                      {platform.label}
                    </div>
                    <div className="mb-4 font-code text-code-tag text-text-secondary">
                      {platform.handle}
                    </div>

                    <p className="font-body-md text-body-md text-text-secondary">
                      {platform.description}
                    </p>

                    <div className="mt-auto pt-6 font-code text-code-tag uppercase tracking-widest text-text-secondary opacity-60">
                      {platform.format}
                    </div>
                  </GlassPanel>
                </a>
              );
            })}
          </div>

          <p className="mt-6 font-code text-code-tag text-text-secondary">
            {content.note}
          </p>
        </div>
      </section>
    </SectionReveal>
  );
}
