export const brand = {
  logo: 'YoussefMo',
  tag: 'YmDev',
  signature: 'YOUSSEF\nMOHAMMED\nALI'
};

export const personal = {
  name: 'Youssef Mohammed Ali',
  aliases: ['YoussefMo', 'YmDev'],
  role: 'Frontend Engineer',
  email: 'youssefmohammed12090@gmail.com',
  website: 'https://ymdev.me',
  location: 'Egypt / Remote',
  cv: 'https://drive.google.com/file/d/1FMO9RbfcUPc3BRRhHgAQ57SWDThEJxej/view'
};

export const navLinks = [
  { label: 'Matrix', href: '#matrix' },
  { label: 'About', href: '#about' },
  { label: 'Trajectory', href: '#trajectory' },
  { label: 'Diagnosit', href: '#diagnosit' },
  { label: 'Arsenal', href: '#arsenal' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Services', href: '#services' }
];

export const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/YussefMo',
    icon: 'Github'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ymdev',
    icon: 'Linkedin'
  },
  {
    label: 'Discord',
    href: 'https://discord.com/users/sp_savage',
    icon: 'MessageSquare'
  }
];

export const hero = {
  status: 'SYS.STATUS: ONLINE',
  headline: 'Youssef Mohammed Ali Frontend Engineer',
  subheadline: 'I build SaaS products that ship.',
  description:
    'Frontend architecture for production web and mobile applications. AI-powered experiences, reusable design systems, cross-platform delivery.',
  primaryCta: {
    label: 'Explore My Work',
    href: '#showcase',
    icon: 'ArrowRight'
  },
  secondaryCta: {
    label: 'View Source',
    href: 'https://github.com/YussefMo',
    icon: 'Code'
  }
};

export const experiences: ExperienceItem[] = [
  {
    company: 'Diagnosit',
    role: 'Frontend Engineer',
    period: 'Jun 2025 Present',
    location: 'UAE',
    type: 'Full-time (Remote)',
    logo: '/diagnosit.jpg',
    description:
      'Re-architected a large Next.js SaaS platform into modular architecture, accelerating feature delivery by ~50%. Led a full UI/UX redesign that reduced rendering issues by ~50% and improved consistency across the product. Optimized landing page performance, cutting load times by 60%. Architected the React Native (Expo) mobile app with full feature parity. Integrated 500+ REST API endpoints with TanStack Query and Axios. Built a reusable design system that reduced new feature development time by 45%. Implemented internationalization, complex state management, and AI-ready frontend architecture.',
    skills: [
      'Next.js',
      'React',
      'TypeScript',
      'React Native',
      'Expo',
      'Tailwind CSS',
      'TanStack Query',
      'Axios'
    ]
  },
  {
    company: 'Web Masters',
    role: 'Frontend Developer Intern',
    period: 'Apr 2025 Jun 2025',
    location: 'Egypt',
    type: 'Internship (Remote)',
    logo: '/web-masters.jpg',
    description:
      'Built responsive React and Next.js interfaces from Figma designs in an Agile team. Refactored legacy components into clean, production-ready code. Collaborated through Git workflows, code reviews, and version control best practices.',
    skills: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS']
  }
];

export const skills: SkillItem[] = [
  { name: 'JavaScript', icon: 'javascript', category: 'language' },
  { name: 'TypeScript', icon: 'code_blocks', category: 'language' },
  { name: 'React', icon: 'terminal', category: 'framework' },
  { name: 'Next.js', icon: 'layers', category: 'framework' },
  { name: 'React Native', icon: 'smartphone', category: 'framework' },
  { name: 'Expo', icon: 'view_in_ar', category: 'framework' },
  { name: 'Tailwind CSS', icon: 'css', category: 'framework' },
  { name: 'AI / LLMs', icon: 'auto_awesome', category: 'tool' },
  { name: 'Tanstack Query', icon: 'database', category: 'framework' },
  { name: 'Axios', icon: 'database', category: 'framework' },
  { name: 'Git', icon: 'terminal', category: 'tool' },
  { name: 'Vercel', icon: 'cloud', category: 'tool' },
  { name: 'Figma', icon: 'design_services', category: 'tool' },
  { name: 'Firebase', icon: 'local_fire_department', category: 'tool' },
  { name: 'Supabase', icon: 'database', category: 'tool' }
];

// First 8 skills rendered as the hero arsenal modules (ARSN-01..08)
export const heroSkills = skills.slice(0, 8);

export const services: ServiceItem[] = [
  {
    title: 'Frontend Architecture',
    description:
      'Modular Next.js architectures that ship fast and scale. Server Components, route design, data-layer strategy, bundle optimization.',
    icon: 'Layers'
  },
  {
    title: 'Performance Engineering',
    description:
      '60% faster landing pages. 70% smaller bundles. Render optimization, asset pipelines, caching strategies that deliver measurable results.',
    icon: 'Zap'
  },
  {
    title: 'Design Systems',
    description:
      'Reusable component libraries adopted across products. 45% faster feature development through shared primitives, consistent APIs, and documented patterns.',
    icon: 'Component'
  },
  {
    title: 'Mobile (React Native)',
    description:
      'Cross-platform apps with full feature parity to web. Expo, native navigation, push notifications, real-time data architected from web patterns.',
    icon: 'Smartphone'
  },
  {
    title: 'AI Interfaces',
    description:
      'LLM-powered features, conversational agents, tool-augmented chatbots. Streaming responses, RAG, OpenAI API integration patterns.',
    icon: 'Bot'
  },
  {
    title: 'Product Engineering',
    description:
      'Ownership from architecture to ship. Complex state management, internationalization, 500+ API integrations, and AI-ready frontend infrastructure.',
    icon: 'Globe'
  }
];

export const about = {
  short:
    'I build production SaaS scalable architecture, measurable performance, cross-platform delivery. Web and mobile. AI-ready frontends. Design systems that ship.',
  paragraphs: [
    'I focus on the systems behind the surface modular Next.js architectures, reusable design systems, and mobile apps with full feature parity. At Diagnosit, I re-architected a SaaS platform from monolith to modular, cutting feature delivery time by half and landing page load times by 60%.',
    'I build for performance and maintainability. Bundle sizes down 70%. Render issues halved. 500+ API endpoints integrated with type-safe data layers. React Native apps that mirror web functionality without compromise.',
    'I ship across the stack architecture decisions, state management strategy, internationalization, AI integration patterns not just components. The kind of engineering that makes codebases faster to work in and products faster to market.'
  ],
  image: '/me.jpg'
};

export const footer = {
  copyright: `© ${new Date().getFullYear()} Youssef Mohammed Ali. All rights reserved.`,
  source: 'https://github.com/YussefMo/portfolio'
};

// Seed / reference project with new fields
export const seedProjects = [
  {
    category: 'next',
    gitHubRepoName: 'e-commerce-dashboard',
    title: 'E Commerce Dashboard',
    description:
      'E commerce Dashboard Powerd With Ai Agent To assist You In Your Journy Can Help You With Web Searching Data Analyse And More',
    tags: [
      'Next.js',
      'Firebase',
      'Tailwind CSS',
      'Cloudinary',
      'shadcn UI',
      'Vercel AI SDK'
    ],
    image:
      'https://res.cloudinary.com/dum6jn15h/image/upload/v1748886944/Screenshot_2025-06-02_205534_kcryso.png',
    liveDemo: 'https://e-commerce-dashboard-theta.vercel.app/',
    repo: 'https://github.com/YussefMo/e-commerce-dashboard',
    role: 'Fullstack Dev',
    ctaLabel: 'Initialize Demo',
    extraSections: [],
    createdAt: new Date().toDateString()
  }
];
