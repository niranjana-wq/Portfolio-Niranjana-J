'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/utils/animations';
import SectionHeader from '@/components/SectionHeader';

const experiences = [
  {
    role: 'Software Developer Intern',
    company: 'Lennox India Technology Center',
    duration: 'Jun 2025 – Aug 2025',
    type: 'Upcoming',
    bullets: [
      'Developed scalable backend services using Java, Python, and SQL for enterprise applications',
      'Designed and implemented RESTful APIs, improving service integration and response reliability',
      'Optimised system performance through profiling, debugging, and targeted refactoring',
      'Collaborated in Agile sprints and participated in peer code reviews',
    ],
    accent: 'violet',
  },
  {
    role: 'Machine Learning Intern',
    company: 'Ether InfoTech',
    duration: 'Jan 2025 – Feb 2025',
    type: 'Completed',
    bullets: [
      'Built and optimised end-to-end ML pipelines on real-world datasets from preprocessing to deployment',
      'Developed regression, classification, and clustering models using Scikit-learn and TensorFlow',
      'Evaluated model performance with precision, recall, F1, and ROC-AUC metrics',
      'Assisted in exposing trained models via Python REST APIs for downstream consumption',
    ],
    accent: 'purple',
  },
];

const accentMap: Record<string, { border: string; badge: string; badgeText: string; dot: string; line: string }> = {
  violet: { border: 'border-violet-100 hover:border-violet-300', badge: 'bg-violet-100 text-violet-700', badgeText: 'text-violet-600', dot: 'bg-violet-500', line: 'bg-violet-200' },
  purple: { border: 'border-purple-100 hover:border-purple-300', badge: 'bg-purple-100 text-purple-700', badgeText: 'text-purple-600', dot: 'bg-purple-500', line: 'bg-purple-200' },
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          title="Professional Experience"
          subtitle="Hands-on industry exposure building real systems — from ML pipelines to enterprise backends."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="relative space-y-8 pl-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200"
        >
          {experiences.map((exp) => {
            const c = accentMap[exp.accent];
            return (
              <motion.div key={exp.role} variants={fadeUp} className="relative">
                {/* Timeline dot */}
                <span className={`absolute -left-[18px] top-5 w-3 h-3 rounded-full ${c.dot} ring-2 ring-white`} />

                <div className={`bg-white border ${c.border} rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300`}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-base font-bold text-slate-900">{exp.role}</h3>
                      <p className={`text-sm font-semibold ${c.badgeText}`}>{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${c.badge}`}>
                        {exp.type}
                      </span>
                      <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                        <svg className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
