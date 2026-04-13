'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/utils/animations';
import SectionHeader from '@/components/SectionHeader';

const skillCategories = [
  {
    title: 'Programming',
    color: 'violet',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: ['Python', 'Java', 'HTML', 'CSS', 'SQL'],
  },
  {
    title: 'Machine Learning',
    color: 'purple',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
      </svg>
    ),
    skills: ['Classification', 'Regression', 'Clustering', 'CNN', 'LSTM', 'Accuracy / F1 / ROC-AUC'],
  },
  {
    title: 'LLM & GenAI',
    color: 'fuchsia',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    skills: ['Prompt Engineering', 'RAG', 'NLP', 'Hugging Face Transformers'],
  },
  {
    title: 'Frameworks & Libraries',
    color: 'blue',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    skills: ['Scikit-learn', 'TensorFlow', 'Flask'],
  },
  {
    title: 'Data Engineering',
    color: 'teal',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    skills: ['Pandas', 'NumPy', 'Data Cleaning', 'Feature Engineering'],
  },
  {
    title: 'Databases',
    color: 'amber',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    skills: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Tools',
    color: 'slate',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    skills: ['Git', 'VS Code'],
  },
];

const colorMap: Record<string, { bg: string; text: string; pill: string; icon: string; border: string }> = {
  violet: { bg: 'bg-violet-50', text: 'text-violet-700', pill: 'bg-violet-100 text-violet-700 hover:bg-violet-200', icon: 'text-violet-500', border: 'border-violet-100 hover:border-violet-300' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-700', pill: 'bg-purple-100 text-purple-700 hover:bg-purple-200', icon: 'text-purple-500', border: 'border-purple-100 hover:border-purple-300' },
  fuchsia: { bg: 'bg-fuchsia-50', text: 'text-fuchsia-700', pill: 'bg-fuchsia-100 text-fuchsia-700 hover:bg-fuchsia-200', icon: 'text-fuchsia-500', border: 'border-fuchsia-100 hover:border-fuchsia-300' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-700', pill: 'bg-blue-100 text-blue-700 hover:bg-blue-200', icon: 'text-blue-500', border: 'border-blue-100 hover:border-blue-300' },
  teal: { bg: 'bg-teal-50', text: 'text-teal-700', pill: 'bg-teal-100 text-teal-700 hover:bg-teal-200', icon: 'text-teal-500', border: 'border-teal-100 hover:border-teal-300' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-700', pill: 'bg-amber-100 text-amber-700 hover:bg-amber-200', icon: 'text-amber-500', border: 'border-amber-100 hover:border-amber-300' },
  slate: { bg: 'bg-slate-50', text: 'text-slate-700', pill: 'bg-slate-100 text-slate-700 hover:bg-slate-200', icon: 'text-slate-500', border: 'border-slate-200 hover:border-slate-300' },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Skills & Technologies"
          subtitle="A comprehensive toolkit spanning ML systems, LLMs, data engineering, and backend development."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {skillCategories.map((cat) => {
            const c = colorMap[cat.color];
            return (
              <motion.div
                key={cat.title}
                variants={fadeUp}
                className={`bg-white rounded-2xl border ${c.border} p-5 shadow-sm hover:shadow-md transition-all duration-300 group`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`w-8 h-8 ${c.bg} ${c.icon} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    {cat.icon}
                  </span>
                  <h3 className={`text-sm font-bold ${c.text}`}>{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs font-medium px-2.5 py-1 rounded-full transition-colors duration-200 cursor-default ${c.pill}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
