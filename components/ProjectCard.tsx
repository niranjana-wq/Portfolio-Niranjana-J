'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/utils/animations';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  onReadMore: (project: Project) => void;
}

export default function ProjectCard({ project, onReadMore }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className="group bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden flex flex-col"
    >
      {/* Accent bar */}
      <div className={`h-1.5 bg-gradient-to-r ${project.color} flex-shrink-0`} />

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-slate-900 mb-1">{project.title}</h3>
        <p className="text-sm text-slate-500 mb-4 leading-relaxed">{project.tagline}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 text-xs font-medium bg-violet-50 text-violet-700 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2.5 py-0.5 text-xs font-medium bg-slate-100 text-slate-500 rounded-full">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Actions */}
        <div className="flex items-center gap-3 mt-4">
          <button
            onClick={() => onReadMore(project)}
            className="flex-1 py-2 text-sm font-semibold bg-violet-600 hover:bg-violet-700 text-white rounded-full transition-colors"
          >
            Read More
          </button>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center border border-slate-200 hover:border-violet-300 rounded-full transition-colors"
            title="GitHub"
          >
            <svg className="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-slate-200 hover:border-violet-300 rounded-full transition-colors"
              title="Demo"
            >
              <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
