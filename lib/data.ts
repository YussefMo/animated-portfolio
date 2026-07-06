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
  headline: 'Frontend Engineer',
  description:
    'Architecting high-fidelity digital experiences. Merging deep technical expertise with precise UI execution to build scalable, interactive web and mobile applications.',
  primaryCta: { label: 'Deploy Project', href: '#contact', icon: 'ArrowRight' },
  secondaryCta: { label: 'View Source', href: 'https://github.com/YussefMo', icon: 'Code' }
};

export const experiences: ExperienceItem[] = [
  {
    company: 'Diagnosit',
    role: 'Front End Engineer',
    period: '2025 - Present',
    location: 'Turkey',
    type: 'Full-time (Remote)',
    logo: '/diagnosit.jpg',
    description:
      'Leading mobile frontend development. Architecting robust cross-platform solutions with React Native and Expo.',
    skills: ['React', 'Next.js', 'TypeScript', 'React Native', 'Expo', 'Tailwind CSS', 'FCM']
  },
  {
    company: 'Web Masters',
    role: 'Front End Developer',
    period: '2025 - 2025',
    location: 'Egypt',
    type: 'Internship',
    logo: '/web-masters.jpg',
    description:
      'Developed core UI components and integrated complex state management protocols for production web apps.',
    skills: ['JavaScript', 'React', 'Next.js', 'Tailwind CSS']
  }
];

export const skills: SkillItem[] = [
  // Languages
  { name: 'JavaScript', icon: 'javascript', category: 'language' },
  { name: 'TypeScript', icon: 'code_blocks', category: 'language' },
  { name: 'Tailwind CSS', icon: 'css', category: 'language' },
  { name: 'CSS', icon: 'css', category: 'language' },
  // Frameworks / Libraries
  { name: 'React', icon: 'terminal', category: 'framework' },
  { name: 'React Native', icon: 'smartphone', category: 'framework' },
  { name: 'Next.js', icon: 'layers', category: 'framework' },
  { name: 'Expo', icon: 'view_in_ar', category: 'framework' },
  { name: 'Tailwind CSS', icon: 'css', category: 'framework' },
  { name: 'Redux Toolkit', icon: 'database', category: 'framework' },
  { name: 'Tanstack Query', icon: 'database', category: 'framework' },
  // Tools
  { name: 'Git', icon: 'terminal', category: 'tool' },
  { name: 'Vercel', icon: 'cloud', category: 'tool' },
  { name: 'Figma', icon: 'design_services', category: 'tool' },
  { name: 'VS Code', icon: 'code_blocks', category: 'tool' },
  { name: 'AI IDEs', icon: 'auto_awesome', category: 'tool' },
  { name: 'Firebase', icon: 'local_fire_department', category: 'tool' },
  { name: 'Supabase', icon: 'database', category: 'tool' }
];

// First 8 skills rendered as the hero arsenal modules (ARSN-01..08)
export const heroSkills = skills.slice(0, 8);

export const services: ServiceItem[] = [
  {
    title: 'Full Stack Development',
    description:
      'End-to-end web apps with React, Next.js, and Supabase. Server components, API routes, databases, auth wired and deployed.',
    icon: 'Globe'
  },
  {
    title: 'React & Next.js Apps',
    description:
      'Component architecture with Server Components, Suspense, and App Router. Performance tuned from the bundler up.',
    icon: 'Component'
  },
  {
    title: 'API Integration',
    description:
      'REST APIs, WebSocket connections, and server actions. Real-time data flows, third-party services, Supabase and Firebase backends.',
    icon: 'Webhook'
  },
  {
    title: 'Frontend Engineering',
    description:
      'Pixel-precise UIs with Tailwind CSS, React Hook Form, and React 19 hooks including useTransition and useOptimistic.',
    icon: 'Monitor'
  }
];

export const about = {
  short:
    'Frontend Engineer shipping production-grade apps with React, Next.js, and React Native. SaaS platforms, AI integrations, cross-platform mobile.',
  paragraphs: [
    "I'm Youssef Mohammed Ali a Frontend Engineer focused on the layer between architecture and pixels. I build with React, Next.js, and TypeScript for the web, Expo and React Native for mobile, and Tailwind CSS for precision styling.",
    'I ship SaaS platforms, e-commerce websites, and AI-integrated tools backed by REST APIs and real-time data. My work covers authentication, dynamic routing, state management (Redux, Context, Tanstack Query), and performance optimization through Next.js caching and Partial Pre-Rendering.',
    'I translate web-scale features into fully functional websites and mobile apps. Key flows from production SaaS web apps authentication, real-time dashboards, push notifications rebuilt natively with Expo and React Native.',
    'Portfolio anchored at ymdev.me, built with the same stack and standards I apply to production. Open to full-time roles, contract work, and engineering-led teams building things that ship.'
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
    tags: ['Next.js', 'Firebase', 'Tailwind CSS', 'Cloudinary', 'shadcn UI', 'Vercel AI SDK'],
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
