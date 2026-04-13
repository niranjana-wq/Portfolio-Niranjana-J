'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/utils/animations';
import SectionHeader from '@/components/SectionHeader';

const achievements = [
  {
    title: 'Best Poster Presentation Award',
    event: 'FutureScape\'26 International Project Expo',
    tag: 'Awarded',
    color: 'amber',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Semi-Finalist',
    event: 'ET GenAI Hackathon — AI Money Mentor',
    tag: 'Selected',
    color: 'violet',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Kaggle Knight ML Hackathon',
    event: 'IIT Jodhpur',
    tag: 'Finalist',
    color: 'blue',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Pulse Quest AI/ML Hackathon',
    event: 'IIT Hyderabad',
    tag: 'Finalist',
    color: 'teal',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const colorMap: Record<string, { bg: string; icon: string; tag: string; border: string; tagText: string }> = {
  amber:  { bg: 'bg-amber-50',  icon: 'text-amber-500',  tag: 'bg-amber-100',  tagText: 'text-amber-700',  border: 'border-amber-100 hover:border-amber-300'  },
  violet: { bg: 'bg-violet-50', icon: 'text-violet-500', tag: 'bg-violet-100', tagText: 'text-violet-700', border: 'border-violet-100 hover:border-violet-300' },
  blue:   { bg: 'bg-blue-50',   icon: 'text-blue-500',   tag: 'bg-blue-100',   tagText: 'text-blue-700',   border: 'border-blue-100 hover:border-blue-300'   },
  teal:   { bg: 'bg-teal-50',   icon: 'text-teal-500',   tag: 'bg-teal-100',   tagText: 'text-teal-700',   border: 'border-teal-100 hover:border-teal-300'   },
};

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Achievements & Activities"
          subtitle="Recognised at national-level competitions and international expos for applied AI work."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {achievements.map((a) => {
            const c = colorMap[a.color];
            return (
              <motion.div
                key={a.title}
                variants={fadeUp}
                className={`bg-white border ${c.border} rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4`}
              >
                <div className={`w-12 h-12 ${c.bg} ${c.icon} rounded-xl flex items-center justify-center`}>
                  {a.icon}
                </div>
                <div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${c.tag} ${c.tagText}`}>
                    {a.tag}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mt-3 leading-snug">{a.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">{a.event}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
