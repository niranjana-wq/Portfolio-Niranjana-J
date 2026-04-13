'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { modalContent, modalOverlay } from '@/utils/animations';
import { Project } from '@/data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="overlay"
          variants={modalOverlay}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            key="content"
            variants={modalContent}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className={`bg-gradient-to-br ${project.color} p-8 rounded-t-3xl relative`}>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Close"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <span className="text-5xl mb-3 block">{project.emoji}</span>
              <h2 className="text-2xl font-bold text-white">{project.title}</h2>
              <p className="text-white/80 mt-1 text-sm">{project.tagline}</p>
            </div>

            {/* Body */}
            <div className="p-8 space-y-6">
              {/* Tech Stack */}
              <div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium bg-violet-50 text-violet-700 rounded-full border border-violet-100">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Problem */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-500 text-xs">❗</span>
                  Problem
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{project.problem}</p>
              </div>

              {/* System Design */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 text-xs">⚙️</span>
                  System Design
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{project.systemDesign}</p>
              </div>

              {/* Impact */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-green-500 text-xs">📈</span>
                  Impact
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{project.impact}</p>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 text-sm font-semibold bg-slate-900 hover:bg-slate-700 text-white rounded-full text-center transition-colors"
                >
                  View on GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 text-sm font-semibold bg-violet-600 hover:bg-violet-700 text-white rounded-full text-center transition-colors"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
