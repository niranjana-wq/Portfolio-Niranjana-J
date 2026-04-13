'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/utils/animations';
import SectionHeader from '@/components/SectionHeader';

const education = [
  {
    institution: 'KPR Institute of Engineering and Technology',
    degree: 'B.E. Computer Science & Engineering (AI/ML)',
    period: '2023 – 2027',
    score: 'CGPA: 9.09',
    scoreLabel: 'Current',
    type: 'University',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    accent: 'violet',
  },
  {
    institution: 'Crescent Castle Public School',
    degree: 'ISC (Class XII) & ICSE (Class X)',
    period: 'Completed 2023',
    score: '93.5%',
    scoreLabel: 'Both boards',
    type: 'School',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    accent: 'purple',
  },
];

const accentMap: Record<string, { bg: string; icon: string; text: string; badge: string; border: string; score: string }> = {
  violet: { bg: 'bg-violet-50', icon: 'text-violet-600', text: 'text-violet-700', badge: 'bg-violet-100 text-violet-700', border: 'border-violet-100 hover:border-violet-300', score: 'text-violet-600' },
  purple: { bg: 'bg-purple-50', icon: 'text-purple-600', text: 'text-purple-700', badge: 'bg-purple-100 text-purple-700', border: 'border-purple-100 hover:border-purple-300', score: 'text-purple-600' },
};

export default function EducationSection() {
  return (
    <section id="education" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          title="Education"
          subtitle="Academic foundation in computer science and artificial intelligence."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {education.map((edu) => {
            const c = accentMap[edu.accent];
            return (
              <motion.div
                key={edu.institution}
                variants={fadeUp}
                className={`bg-white border ${c.border} rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300`}
              >
                <div className={`w-12 h-12 ${c.bg} ${c.icon} rounded-xl flex items-center justify-center mb-5`}>
                  {edu.icon}
                </div>

                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${c.badge}`}>{edu.type}</span>

                <h3 className="text-base font-bold text-slate-900 mt-3 mb-1 leading-snug">{edu.institution}</h3>
                <p className="text-sm text-slate-500 mb-4">{edu.degree}</p>

                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {edu.period}
                  </span>
                  <div className="text-right">
                    <p className={`text-lg font-extrabold ${c.score}`}>{edu.score}</p>
                    <p className="text-xs text-slate-400">{edu.scoreLabel}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
