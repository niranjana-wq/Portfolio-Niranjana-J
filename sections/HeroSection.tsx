'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/utils/animations';
import { personal } from '@/data/personal';
import Button from '@/components/Button';

export default function HeroSection() {
  // Glow circle state
  const glowRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);
  const [isHoveringSection, setIsHoveringSection] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    section.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      // Ease factor: 0.08 = slow/smooth follow
      const ease = 0.08;
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * ease;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * ease;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${currentPos.current.x}px, ${currentPos.current.y}px) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
      onMouseEnter={() => setIsHoveringSection(true)}
      onMouseLeave={() => setIsHoveringSection(false)}
      style={{
        background:
          'linear-gradient(135deg, #ffffff 0%, #f5f3ff 30%, #ede9fe 60%, #fdf4ff 100%)',
      }}
    >
      {/* ── Glowing cursor-follow circle ── */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute top-0 left-0 z-10 transition-opacity duration-500"
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.55) 0%, rgba(167,139,250,0.25) 60%, transparent 80%)',
          filter: 'blur(12px)',
          opacity: isHoveringSection ? 1 : 0,
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      />

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
            {/* Available for work badge */}
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-white rounded-full shadow-md px-4 py-2 border border-slate-100">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <span className="text-xs font-semibold text-slate-600">Available for work</span>
              </div>
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
              <Button href="/resume.pdf" variant="outline" size="lg" download>
                ↓ Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Right — Profile Image with glow ring */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="flex items-center justify-center"
          >
            {/* Outer glow wrapper */}
            <div className="relative group">
              {/* Soft pulsing glow behind the circle */}
              <div
                className="absolute inset-0 rounded-full bg-violet-400/30 blur-2xl scale-110 group-hover:scale-125 transition-transform duration-700 pointer-events-none"
              />

              {/* Profile circle */}
              <div
                className="relative rounded-full overflow-hidden shadow-2xl border-4 border-violet-300 group-hover:scale-[1.03] transition-transform duration-500"
                style={{ width: '340px', height: '340px' }}
              >
                <Image
                  src="/profile.png"
                  alt="Niranjana J"
                  fill
                  className="object-cover object-top"
                  sizes="340px"
                  priority
                />
              </div>

            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
}