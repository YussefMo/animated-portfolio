'use client';

import { motion } from 'framer-motion';
import { Braces, FileText, Github, MessageSquare } from 'lucide-react';

function ServicesSection() {
  return (
    <section id="services" className="bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              My Expertise
            </span>
            <span className="ml-2 text-white">🛠️</span>
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={<Braces className="h-10 w-10 text-purple-500" />}
              title="Full Stack Development"
              description="Crafting responsive and dynamic web apps with React, Next.js, and Supabase. Frontend to backend—seamless and scalable."
            />
            <ServiceCard
              icon={<FileText className="h-10 w-10 text-pink-500" />}
              title="React & Next.js Apps"
              description="Building interactive UIs using React Server Components, Suspense, and App Router. Embracing new features to optimize user experience."
            />
            <ServiceCard
              icon={<Github className="h-10 w-10 text-purple-500" />}
              title="API Integration"
              description="Working with RESTful APIs, Supabase endpoints, and Next.js server functions to power real-time and data-driven apps."
            />
            <div className="flex justify-center lg:col-span-3">
              <ServiceCard
                icon={<MessageSquare className="h-10 w-10 text-pink-500" />}
                title="Frontend Engineering"
                description="Crafting pixel-perfect UIs with Tailwind CSS, React Hook Form, and modern hooks like useTransition and useOptimistic."
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-gray-800 bg-gray-900 p-6 text-center transition-all duration-300 hover:border-purple-500 md:text-left">
      <div className="mb-4 flex justify-center md:justify-start">{icon}</div>
      <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default ServicesSection;
