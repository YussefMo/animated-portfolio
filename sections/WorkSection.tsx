'use client';

import Filter from '@/components/Filter';
import Modal from '@/components/Modal.jsx';
import ProjectModalContent from '@/components/ProjectModalContent';
import { getAllProjects } from '@/lib/portfolioApi';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { Suspense, useEffect, useState } from 'react';
import { Project, ProjectCardProps } from '@/types';
import Loader from '@/components/Loader';
import { useSearchParams } from 'next/navigation';

// Client component that fetches data
function ProjectsGrid() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get('category') ?? 'all';

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getAllProjects();
        setProjects(data.projects);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) return <Loader />;
  if (error)
    return <div className="text-center text-red-500">Error: {error}</div>;

  // Filter projects based on selected category
  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <Modal>
      {filteredProjects.length > 0 ? (
        filteredProjects.map((project) => (
          <React.Fragment key={project._id}>
            <Modal.Open opens={project._id}>
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
              />
            </Modal.Open>

            <Modal.Window name={project._id}>
              <ProjectModalContent {...project} />
            </Modal.Window>
          </React.Fragment>
        ))
      ) : (
        <div className="py-10 text-center text-white">
          No projects found for this category
        </div>
      )}
    </Modal>
  );
}

// Client component wrapper
function WorkSection() {
  return (
    <section
      id="work"
      className="bg-gradient-to-b from-gray-900 to-black py-20"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              What I&apos;ve Built
            </span>
            <span className="ml-2 text-white">🏗️</span>
          </h2>
          <div className="mb-6 w-full sm:mb-3">
            <div className="flex flex-wrap justify-end gap-2">
              <Filter />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 border border-gray-800 bg-gray-900 p-6 max-h-[650px] overflow-auto">
            <Suspense
              fallback={
                <div className="text-center text-white">
                  Loading projects...
                </div>
              }
            >
              <ProjectsGrid />
            </Suspense>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  tags,
  image,
  onClick
}: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="flex h-full cursor-pointer flex-col justify-between rounded-lg border border-gray-800 bg-gray-900 p-6 transition-transform duration-300 hover:scale-105 hover:border-purple-500"
    >
      <div>
        <div className="relative aspect-video w-[100%]">
          <Image
            src={image}
            alt={title}
            fill
            className="mb-4 h-48 w-full rounded-lg object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>
        <h3 className="mb-3 text-center text-xl font-bold text-white md:text-left">
          {title}
        </h3>
        <p className="mb-4 text-center text-gray-400 md:text-left">
          {description}
        </p>
      </div>

      <div className="mt-auto flex flex-wrap justify-center gap-2 pt-2 md:justify-start">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-2 py-1 text-xs text-purple-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default WorkSection;
