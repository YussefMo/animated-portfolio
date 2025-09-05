'use client';
import {
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaReact,
  FaSass
} from 'react-icons/fa';

import { BiLogoTypescript, BiLogoVisualStudio } from 'react-icons/bi';
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoLogoFirebase } from "react-icons/io5";
import {
  SiExpo,
  SiNextdotjs,
  SiReactquery,
  SiRedux,
  SiSupabase,
  SiTailwindcss,
  SiVercel
} from 'react-icons/si';

import Experience from '@/components/Experience';
import { motion } from 'framer-motion';
import Image from 'next/image';

const skillsData = {
  'Programming Languages': [
    { name: 'JavaScript', proficiency: 95, icon: FaJs },
    { name: 'TypeScript', proficiency: 95, icon: BiLogoTypescript },
    { name: 'HTML', proficiency: 95, icon: FaHtml5 },
    { name: 'SASS', proficiency: 80, icon: FaSass },
    { name: 'CSS', proficiency: 90, icon: FaCss3Alt },
  ],
  'Frameworks/Libraries': [
    { name: 'React', proficiency: 95, icon: FaReact },
    { name: 'React Native', proficiency: 85, icon: FaReact },
    { name: 'Next.js', proficiency: 90, icon: SiNextdotjs },
    { name: 'Expo', proficiency: 85, icon: SiExpo },
    { name: 'Tailwind CSS', proficiency: 90, icon: SiTailwindcss },
    { name: 'Redux Toolkit', proficiency: 85, icon: SiRedux },
    { name: 'React Query', proficiency: 90, icon: SiReactquery }
  ],
  Tools: [
    { name: 'Git', proficiency: 98, icon: FaGitAlt },
    { name: 'Vercel', proficiency: 85, icon: SiVercel },
    { name: 'Figma', proficiency: 75, icon: FaFigma },
    { name: 'VS Code', proficiency: 95, icon: BiLogoVisualStudio },
    { name: 'AI IDEs (trae.ai - cursor)', proficiency: 95, icon: GiArtificialIntelligence },
    { name: 'Firebase', proficiency: 90, icon: IoLogoFirebase },
    { name: 'Supabase', proficiency: 90, icon: SiSupabase }
  ]
};

export default function AboutMe() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-black to-gray-900 py-12"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Code & Me
            </span>
            <span className="ml-2">💻</span>
          </h2>
          {/* Profile Section */}
          <div className="mb-16 flex flex-col items-center gap-8 md:flex-row-reverse">
            <div className="md:w-1/3">
              <div className="relative mx-auto h-64 w-64">
                <Image
                  src="/me.jpg"
                  alt="Youssef Mohammed Ali"
                  fill
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="prose prose-invert max-w-none text-center md:text-left">
                {/* Mobile description */}
                <p className="text-lg leading-relaxed md:hidden">
                  Frontend Artisan 🎨 and Full Stack Explorer 🧠. Crafting
                  sleek, responsive apps with React & Next.js. From UI polish to
                  server logic—building smooth, modern web experiences. ⚛️💡🚀
                </p>

                {/* Desktop description */}
                <div className="hidden md:block">
                  <p className="mb-4 text-xl">
                    👋 <strong>Hey, I&apos;m Youssef Mohammed!</strong>
                  </p>
                  <p className="mb-4">
                    A passionate <strong>Frontend Engineer</strong> focused on building
                    modern, scalable, and user-friendly web applications. I specialize in
                    <strong> React.js</strong>, <strong>Next.js</strong>, and
                    <strong> Tailwind CSS</strong>, crafting responsive UIs and seamless
                    user experiences.
                  </p>
                  <p className="mb-4">
                    I have hands-on experience delivering <strong>SaaS platforms</strong>,
                    <strong>e-commerce dashboards</strong>, and apps powered by
                    <strong>AI integrations</strong> and <strong>REST APIs</strong>.
                    My projects include features like <strong>authentication</strong>,
                    <strong>dynamic routing</strong>, <strong>state management</strong> with
                    Redux & Context API, and optimized performance using
                    <strong> Next.js caching</strong> and <strong>PPR (Partial Pre-Rendering)</strong>.
                  </p>
                  <p className="mb-4">
                    Recently, I&apos;ve been expanding my skills into <strong>cross-platform
                      development</strong> using <strong>Expo</strong> and <strong>React Native</strong>,
                    where I&apos;ve translated key features of a <strong>SaaS web app</strong> into
                    a fully functional <strong>mobile application</strong>. This allows me to
                    deliver consistent user experiences across both web and mobile platforms.
                  </p>
                  <p>
                    I love turning ideas into polished products that are fast,
                    intuitive, and reliable. Let’s <strong>build impactful web
                      experiences</strong> together—because the web is evolving, and
                    <strong>I’m building for the future 🚀🔥</strong>
                  </p>
                </div>

              </div>
            </div>
          </div>

          <Experience />

          {/* Skills Section */}
          <div>
            <h3 className="mb-8 text-center text-2xl font-bold md:text-3xl">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Code Arsenal
              </span>
              <span className="ml-2 text-white">⚔️</span>
            </h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {Object.entries(skillsData).map(([category, skills]) => (
                <div
                  key={category}
                  className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm"
                >
                  <h4 className="mb-4 text-center text-xl font-bold text-purple-400 md:text-left">
                    {category}
                  </h4>
                  {skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      proficiency={skill.proficiency}
                      icon={skill.icon}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillBar({
  name,
  proficiency,
  icon: Icon
}: {
  name: string;
  proficiency: number;
  icon: React.ElementType;
}) {
  return (
    <div className="mb-4">
      <div className="mb-1 flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-300">
          <Icon className="h-5 w-5" />
          <span>{name}</span>
        </div>
        <span className="text-gray-400">{proficiency}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-gray-700">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
        />
      </div>
    </div>
  );
}
