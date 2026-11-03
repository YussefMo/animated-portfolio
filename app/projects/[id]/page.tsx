import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight, Code2 } from 'lucide-react';
import { getAllProjects, getProjectById } from '@/lib/portfolioApi';
import { brand, personal } from '@/lib/data';
import BackgroundLayers from '@/components/components-parts/BackgroundLayers';
import GlassPanel from '@/components/components-parts/GlassPanel';
import MagneticButton from '@/components/components-parts/MagneticButton';
import ProjectMarkdown from '@/components/projects/ProjectMarkdown';

export const dynamicParams = true;
export const revalidate = 60;

/**
 * Render on-demand instead of at build time so `next build` never needs
 * Firestore credentials. Each project is then cached for `revalidate` seconds.
 */
export function generateStaticParams() {
  return [];
}

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

async function loadProject(id: string) {
  try {
    return await getProjectById(id);
  } catch (error) {
    console.error('Failed to load project', id, error);
    return null;
  }
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = await loadProject(id);

  if (!project) {
    return {
      title: 'Project not found — Youssef Mohammed Ali'
    };
  }

  const title = `${project.title} — Youssef Mohammed Ali`;
  const description = project.description;
  const hasAbsoluteImage = Boolean(
    project.image && /^https?:\/\//i.test(project.image)
  );

  return {
    title,
    description,
    alternates: {
      canonical: `${personal.website}/projects/${project.id}`
    },
    openGraph: {
      title,
      description,
      url: `${personal.website}/projects/${project.id}`,
      type: 'article',
      ...(hasAbsoluteImage
        ? { images: [{ url: project.image, alt: project.title }] }
        : {})
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(hasAbsoluteImage ? { images: [project.image] } : {})
    }
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = await loadProject(id);

  if (!project) notFound();

  const allProjects = (await getAllProjects().catch(() => null)) ?? [];
  const index = allProjects.findIndex((item) => item.id === project.id);
  const previous = index > 0 ? allProjects[index - 1] : null;
  const next =
    index >= 0 && index < allProjects.length - 1
      ? allProjects[index + 1]
      : null;

  const categoryLabel = project.category
    ? project.category.toUpperCase().replace(/-/g, '_')
    : 'PROJECT';
  const post = project.post?.trim();
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    image: project.image || undefined,
    url: `${personal.website}/projects/${project.id}`,
    author: {
      '@type': 'Person',
      name: personal.name,
      url: personal.website
    },
    keywords: project.tags?.join(', '),
    ...(project.liveDemo ? { sameAs: [project.liveDemo] } : {})
  };

  return (
    <>
      <BackgroundLayers />

      <main className="relative z-10 min-h-screen pb-section-padding">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <header className="sticky top-0 z-50 border-b border-border-glass bg-background/70 backdrop-blur-xl">
          <div className="mx-auto flex max-w-container-max items-center justify-between px-margin-mobile py-4 md:px-gutter">
            <Link
              href="/"
              className="font-display text-xl font-bold tracking-tighter text-primary"
            >
              {brand.logo}
            </Link>
            <Link
              href="/#showcase"
              className="inline-flex items-center gap-2 font-label-caps text-text-secondary transition-colors hover:text-text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to showcase
            </Link>
          </div>
        </header>

        <section className="mx-auto max-w-container-max px-margin-mobile pt-16 md:px-gutter">
          <div className="font-code-tag text-primary">
            {categoryLabel} // CASE STUDY
          </div>

          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-text-primary md:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-2xl font-body-lg text-body-lg text-text-secondary">
            {project.description}
          </p>

          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-y border-border-glass py-6">
            <div>
              <dt className="font-code-tag text-text-secondary">ROLE</dt>
              <dd className="mt-2 font-label-caps text-text-primary">
                {project.role || 'Frontend Engineer'}
              </dd>
            </div>
            <div>
              <dt className="font-code-tag text-text-secondary">CATEGORY</dt>
              <dd className="mt-2 font-label-caps text-text-primary">
                {categoryLabel}
              </dd>
            </div>
            <div className="min-w-0">
              <dt className="font-code-tag text-text-secondary">TECH</dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border-glass px-3 py-1 font-code text-[11px] text-text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            {project.liveDemo && (
              <MagneticButton
                href={project.liveDemo}
                icon={<ArrowUpRight className="h-4 w-4" />}
              >
                {project.ctaLabel || 'View Live Demo'}
              </MagneticButton>
            )}
            {project.repo && (
              <MagneticButton
                variant="glass"
                href={project.repo}
                icon={<Code2 className="h-4 w-4" />}
              >
                View Source
              </MagneticButton>
            )}
          </div>

          {project.image && (
            <div className="relative mt-14">
              <div className="absolute inset-0 rounded-xl bg-primary-container/5 blur-2xl" />
              <GlassPanel className="relative overflow-hidden p-2 shadow-2xl">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 1280px"
                  />
                </div>
              </GlassPanel>
            </div>
          )}
        </section>

        <section className="mx-auto mt-16 max-w-3xl px-margin-mobile md:px-0">
          <GlassPanel className="p-6 md:p-12">
            <div className="mb-8 font-code-tag text-text-secondary">
              {'//'} PROJECT WRITE-UP
            </div>

            {post ? (
              <ProjectMarkdown content={post} />
            ) : (
              <p className="font-body-md text-body-md text-text-secondary">
                The full write-up for this project is coming soon. In the
                meantime, explore the live demo or the source code for more
                details.
              </p>
            )}
          </GlassPanel>
        </section>

        {(previous || next) && (
          <nav
            aria-label="Project navigation"
            className="mx-auto mt-16 grid max-w-container-max gap-4 px-margin-mobile md:grid-cols-2 md:px-gutter"
          >
            {previous ? (
              <Link href={`/projects/${previous.id}`} className="group block">
                <GlassPanel className="h-full p-6 transition-colors duration-300 group-hover:bg-surface-glass/20">
                  <span className="flex items-center gap-2 font-code-tag text-text-secondary">
                    <ArrowLeft className="h-3 w-3" /> PREVIOUS
                  </span>
                  <span className="mt-3 block font-display text-lg font-semibold text-text-primary">
                    {previous.title}
                  </span>
                </GlassPanel>
              </Link>
            ) : (
              <span />
            )}

            {next && (
              <Link
                href={`/projects/${next.id}`}
                className="group block md:text-right"
              >
                <GlassPanel className="h-full p-6 transition-colors duration-300 group-hover:bg-surface-glass/20">
                  <span className="flex items-center gap-2 font-code-tag text-text-secondary md:justify-end">
                    NEXT <ArrowRight className="h-3 w-3" />
                  </span>
                  <span className="mt-3 block font-display text-lg font-semibold text-text-primary">
                    {next.title}
                  </span>
                </GlassPanel>
              </Link>
            )}
          </nav>
        )}
      </main>
    </>
  );
}
