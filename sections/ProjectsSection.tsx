'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/utils/animations';
import { projects, Project } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import SectionHeader from '@/components/SectionHeader';

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Projects"
          subtitle="AI systems I've designed, built, and shipped to production."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onReadMore={(p) => setSelected(p)}
            />
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
