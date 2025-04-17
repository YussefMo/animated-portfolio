// Type definitions for portfolio project

export interface ExtraSection {
  gitHubRepoName: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveDemo: string;
  repo: string;
}

export interface Project {
  _id: number | string;
  category: string;
  gitHubRepoName: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveDemo: string;
  repo: string;
  extraSections?: ExtraSection[];
}

export interface ProjectsResponse {
  projects: Project[];
}

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  onClick?: () => void;
}

export interface ContactFormProps {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}
