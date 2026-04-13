'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/utils/animations';

export default function CTABanner() {
  const scrollToContact = () =>
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Do you have a Project Idea?
            <br />
            <span className="text-violet-400">Let&apos;s discuss your project!</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            Whether it&apos;s an AI pipeline, LLM integration, or a scalable backend system — I&apos;m ready to
            build it.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-full transition-colors shadow-lg"
          >
            Let&apos;s work Together
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
