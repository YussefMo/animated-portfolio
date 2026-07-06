import { socials, footer, personal } from '@/lib/data';
import SectionReveal from '@/components/components-parts/SectionReveal';
import SocialIcon from '@/components/components-parts/SocialIcon';

export default function FooterSection() {
  return (
    <SectionReveal>
      <footer className="relative z-10 mt-section-padding border-t border-border-glass bg-transparent">
        <div className="mx-auto flex max-w-container-max flex-col items-center justify-between gap-6 px-gutter py-8 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <div className="font-code-tag text-primary">{footer.copyright}</div>
            <a
              href={`mailto:${personal.email}`}
              className="font-code-tag text-text-secondary transition-colors hover:text-primary"
            >
              {personal.email}
            </a>
          </div>

          <div className="flex items-center gap-6">
            {socials.map((social) => (
              <SocialIcon
                key={social.label}
                href={social.href}
                label={social.label}
                icon={social.icon}
              />
            ))}
            <a
              href={footer.source}
              target="_blank"
              rel="noopener noreferrer"
              className="font-code-tag text-code-tag text-text-secondary transition-colors hover:text-primary"
            >
              Source
            </a>
          </div>
        </div>
      </footer>
    </SectionReveal>
  );
}
