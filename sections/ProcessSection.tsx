'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/utils/animations';
import { personal } from '@/data/personal';
import SectionHeader from '@/components/SectionHeader';

export default function ProcessSection() {
  return (
    <section id="process" className="py-24" style={{ background: 'linear-gradient(135deg, #f5f3ff 0%, #ffffff 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Work Process"
          subtitle="How I approach every AI product from idea to production."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {personal.process.map((item, i) => (
            <motion.div
              key={item.step}
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 relative overflow-hidden"
            >
              {/* Step number background */}
              <span className="absolute -top-4 -right-4 text-8xl font-black text-violet-50 select-none pointer-events-none">
                {item.step}
              </span>
              <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white font-bold text-sm">{`0${i + 1}`}</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
