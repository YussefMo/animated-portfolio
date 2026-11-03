import { MetadataRoute } from 'next';
import { getAllProjects } from '@/lib/portfolioApi';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://ymdev.me';

  const entries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1
    }
  ];

  // Firestore may be unreachable during a build without credentials — the
  // static home page entry should still be emitted in that case.
  try {
    const projects = await getAllProjects();

    projects?.forEach((project) => {
      entries.push({
        url: `${baseUrl}/projects/${project.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8
      });
    });
  } catch (error) {
    console.error('Sitemap: failed to load projects', error);
  }

  return entries;
}
