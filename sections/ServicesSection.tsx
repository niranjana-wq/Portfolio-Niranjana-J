'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, slideInRight } from '@/utils/animations';
import { personal } from '@/data/personal';
import Button from '@/components/Button';

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">
              What I do?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500 leading-relaxed mb-3">
              I specialise in building end-to-end AI products — from data pipelines to production
              deployments. My work covers LLM orchestration, real-time computer vision, and scalable
              backend APIs that power intelligent applications.
            </motion.p>
            <motion.p variants={fadeUp} className="text-slate-500 leading-relaxed mb-8">
              Every system I build is engineered for reliability, observability, and real-world
              performance — not just demo accuracy.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button
                onClick={() =>
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Say Hello!
              </Button>
            </motion.div>
          </motion.div>

          {/* Right — Service cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-4"
          >
            {personal.services.map((service, i) => (
              <motion.div
                key={service.title}
                variants={slideInRight}
                className={`p-6 rounded-2xl border transition-shadow duration-300 hover:shadow-card ${
                  i === 0
                    ? 'bg-violet-600 border-violet-600'
                    : 'bg-white border-slate-200'
                }`}
              >
                <h3
                  className={`font-bold text-base mb-2 ${
                    i === 0 ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    i === 0 ? 'text-violet-100' : 'text-slate-500'
                  }`}
                >
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
