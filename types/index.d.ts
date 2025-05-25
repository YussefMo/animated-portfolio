/* eslint-disable no-unused-vars */
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
