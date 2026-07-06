// Type definitions for portfolio project

interface ExtraSection {
  gitHubRepoName: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveDemo: string;
  repo: string;
}

interface Project {
  id: string;
  category: string;
  gitHubRepoName: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveDemo: string;
  repo: string;
  role?: string;
  ctaLabel?: string;
  extraSections?: ExtraSection[];
  createdAt: string | { seconds: number; nanoseconds: number } | null;
}

interface ProjectsResponse {
  projects: Project[];
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  onClick?: () => void;
}

interface ContactFormProps {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  logo: string;
  skills: string[];
  description?: string;
}

interface SkillItem {
  name: string;
  icon: string;
  category: 'language' | 'framework' | 'tool';
}

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
