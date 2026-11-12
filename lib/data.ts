export const brand = {
  logo: 'YoussefMo',
  tag: 'YmDev',
  signature: 'YOUSSEF\nMOHAMMED\nALI'
};

export const personal = {
  name: 'Youssef Mohammed Ali',
  aliases: ['YoussefMo', 'YmDev'],
  role: 'Software Engineer',
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
  { label: 'Content', href: '#content' },
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
    label: 'YouTube',
    href: 'https://www.youtube.com/@ymdeve',
    icon: 'Youtube'
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@ym.deve',
    icon: 'Tiktok'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/ymdeve',
    icon: 'Instagram'
  },
  {
    label: 'Discord',
    href: 'https://discord.com/users/sp_savage',
    icon: 'MessageSquare'
  }
];

export const content = {
  eyebrow: 'CONTENT // BEYOND THE CODE',
  title: 'I explain the work',
  description:
    'Short videos on architecture, backend decisions, and the parts of shipping that never make it into a README.',
  note: 'New breakdowns weekly. Same handle everywhere: @ymdeve.',
  platforms: [
    {
      label: 'YouTube',
      handle: '@ymdeve',
      href: 'https://www.youtube.com/@ymdeve',
      icon: 'youtube',
      color: '#FF0033',
      format: 'Long-form',
      description:
        'Architecture walkthroughs and the tradeoffs behind them, explained end to end.'
    },
    {
      label: 'TikTok',
      handle: '@ym.deve',
      href: 'https://www.tiktok.com/@ym.deve',
      icon: 'tiktok',
      color: '#25F4EE',
      format: 'Shorts',
      description:
        'One engineering idea per video, under a minute, no filler.'
    },
    {
      label: 'Instagram',
      handle: '@ymdeve',
      href: 'https://www.instagram.com/ymdeve',
      icon: 'instagram',
      color: '#E1306C',
      format: 'Build logs',
      description:
        'Screens, slices, and what shipping actually looks like day to day.'
    }
  ]
};

export const hero = {
  status: 'SYS.STATUS: ONLINE',
  headline: 'Youssef Mohammed Ali Software Engineer',
  subheadline: 'I build SaaS products end to end.',
  description:
    'Product engineering across web, mobile, and server. React and Next.js on the client, React Native on mobile, Node and Laravel behind it, AI and automation where they earn their place.',
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
    role: 'Frontend Engineer (Full-Stack Scope)',
    period: 'Jun 2025 — Present',
    location: 'UAE',
    type: 'Full-time (Remote)',
    logo: '/diagnosit.jpg',
    description:
      'Software engineering on a production dental SaaS used by real clinics. Re-architected the Next.js application into a modular codebase, cutting feature delivery time by ~50%. Led the UI/UX redesign and built the design system adopted across the product. Shipped the Live Patient Link and a PDF generation pipeline covering 33 dental and hair widgets. Architected the React Native (Expo) app with full web parity. Integrated 500+ REST endpoints with TanStack Query, plus internationalization, RBAC, realtime, and AI-ready frontend infrastructure.',
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
    period: 'Apr 2025 — Jun 2025',
    location: 'Egypt',
    type: 'Internship (Remote)',
    logo: '/web-masters.jpg',
    description:
      'Built responsive React and Next.js interfaces from Figma designs in an Agile team. Refactored legacy components into clean, production-ready code. Collaborated through Git workflows, code reviews, and version control best practices.',
    skills: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS']
  }
];

export const skills: SkillItem[] = [
  { name: 'TypeScript', icon: 'code_blocks', category: 'language' },
  { name: 'React', icon: 'terminal', category: 'framework' },
  { name: 'Next.js', icon: 'layers', category: 'framework' },
  { name: 'React Native', icon: 'smartphone', category: 'framework' },
  { name: 'Node.js', icon: 'hub', category: 'framework' },
  { name: 'Laravel', icon: 'route', category: 'framework' },
  { name: 'PHP', icon: 'code', category: 'language' },
  { name: 'PostgreSQL', icon: 'database', category: 'language' },
  { name: 'MongoDB', icon: 'storage', category: 'language' },
  { name: 'Tailwind CSS', icon: 'css', category: 'framework' },
  { name: 'TanStack Query', icon: 'cached', category: 'framework' },
  { name: 'AI / LLMs', icon: 'auto_awesome', category: 'tool' },
  { name: 'JavaScript', icon: 'javascript', category: 'language' },
  { name: 'SQL', icon: 'database', category: 'language' },
  { name: 'Expo', icon: 'view_in_ar', category: 'framework' },
  { name: 'Express', icon: 'api', category: 'framework' },
  { name: 'Redis', icon: 'bolt', category: 'tool' },
  { name: 'BullMQ', icon: 'account_tree', category: 'tool' },
  { name: 'Playwright', icon: 'smart_toy', category: 'tool' },
  { name: 'Stripe', icon: 'payments', category: 'tool' },
  { name: 'n8n', icon: 'account_tree', category: 'tool' },
  { name: 'Three.js', icon: 'view_in_ar', category: 'framework' },
  { name: 'Vitest', icon: 'science', category: 'tool' },
  { name: 'Git', icon: 'terminal', category: 'tool' },
  { name: 'Vercel', icon: 'cloud', category: 'tool' },
  { name: 'Figma', icon: 'design_services', category: 'tool' },
  { name: 'Firebase', icon: 'local_fire_department', category: 'tool' },
  { name: 'Supabase', icon: 'database', category: 'tool' }
];

// First 12 skills rendered as the hero arsenal modules (ARSN-01..12)
export const heroSkills = skills.slice(0, 12);

export const services: ServiceItem[] = [
  {
    title: 'Product Engineering',
    description:
      'Ownership from architecture to ship. Web, mobile, and API delivered as one product instead of three disconnected surfaces.',
    icon: 'Layers'
  },
  {
    title: 'Backend & APIs',
    description:
      'Node and Laravel services with PostgreSQL or MongoDB, queue workers, payments, and typed contracts the client can trust.',
    icon: 'Server'
  },
  {
    title: 'Frontend Architecture',
    description:
      'Modular Next.js and React architectures that survive contact with product. Server Components, routing, data-layer strategy, bundle control.',
    icon: 'Component'
  },
  {
    title: 'Mobile Engineering',
    description:
      'React Native and Expo apps with feature parity to web authentication, realtime data, push notifications, deep links, store builds.',
    icon: 'Smartphone'
  },
  {
    title: 'AI & Automation',
    description:
      'LLM features and agent workflows with deterministic checks and human gates. Local models, n8n orchestration, structured outputs.',
    icon: 'Bot'
  },
  {
    title: 'Performance & Reliability',
    description:
      'Measurable gains, not claims. 60% faster page loads, 70% smaller bundles, render issues halved, tests and type checks gating every change.',
    icon: 'Zap'
  }
];

export const about = {
  short:
    'I am a software engineer who ships complete products web, mobile, API, and the automation around them. Three years in, most of it on a production SaaS used by real clinics.',
  paragraphs: [
    'At Diagnosit I work across a dental SaaS: re-architected a large Next.js codebase into modules, built the shared design system, shipped the public Live Patient Link and a 33-widget PDF pipeline, and architected the React Native app to full web parity.',
    'Outside work I build the other side of the stack: Node APIs with queues, Playwright and Lighthouse workers, Laravel multi-tenant backends with Stripe billing, and agent pipelines that turn a topic into a finished video with local models.',
    'What I optimise for is boring on purpose architecture that holds under product pressure, measurable performance, and codebases that are faster to work in six months after I leave them.'
  ],
  image: '/image0.png'
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
    role: 'Software Engineer',
    ctaLabel: 'Initialize Demo',
    extraSections: [],
    post: '',
    createdAt: new Date().toDateString()
  }
];
