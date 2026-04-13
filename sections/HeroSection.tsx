'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/utils/animations';
import { personal } from '@/data/personal';
import Button from '@/components/Button';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #ffffff 0%, #f5f3ff 30%, #ede9fe 60%, #fdf4ff 100%)',
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-violet-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-100 text-violet-700 text-sm font-medium rounded-full">
                <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
                {personal.role}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
            >
              {personal.tagline}
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-slate-500 leading-relaxed max-w-lg">
              {personal.subtext}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 bg-violet-600 hover:bg-violet-700 text-white shadow-md hover:shadow-lg active:scale-95 px-8 py-3 text-base"
              >
                View Projects
              </a>
              <Button
                href="/resume.pdf"
                variant="outline"
                size="lg"
                download
              >
                ↓ Download Resume
              </Button>
            </motion.div>


          </motion.div>

          {/* Right — Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="flex flex-col items-center lg:items-end gap-4"
          >
            {/* Card */}
            <div className="relative w-[260px] h-[310px] md:w-[280px] md:h-[330px] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              {/* Image */}
              <Image
                src="/profile.jpeg"
                alt="Niranjana J"
                fill
                className="object-cover object-[50%_20%]"
                sizes="(max-width: 768px) 320px, 360px"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Name overlay */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold text-base leading-tight">{personal.name}</h3>
                <p className="text-sm opacity-80">{personal.role}</p>
              </div>
            </div>

            {/* Available badge — outside card, no overlap */}
            <div className="bg-white rounded-full shadow-md px-5 py-2 border border-slate-100 flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-xs font-semibold text-slate-600">Available for work</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
