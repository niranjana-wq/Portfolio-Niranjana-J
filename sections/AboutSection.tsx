'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/utils/animations';
import { personal } from '@/data/personal';
import Button from '@/components/Button';
import SectionHeader from '@/components/SectionHeader';

const socialLinks = [
  {
    label: 'LinkedIn',
    href: personal.linkedin,
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: 'text-blue-600 hover:bg-blue-50',
  },
  {
    label: 'GitHub',
    href: personal.github,
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
    color: 'text-slate-800 hover:bg-slate-100',
  },
  {
    label: 'LeetCode',
    href: personal.leetcode,
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.823-.662l-4.847-4.845c-.467-.467-.708-1.022-.708-1.729 0-.622.241-1.178.708-1.645L9.08 9.28l-4.923 9.512 12.83-.012-.885-.85zm7.461-.006l-4.846-4.844c-.317-.317-.752-.45-1.247-.45-.496 0-.93.133-1.247.45l-.003.003L21.96 18.4l1.603-1.476zM7.43 4.15l8.558 8.557c.317.317.468.752.468 1.247s-.151.93-.468 1.246l-4.848 4.847c-.317.317-.752.468-1.247.468s-.93-.151-1.247-.468L4 15.2c-.317-.317-.468-.752-.468-1.247s.151-.93.468-1.247l4.847-4.847c.317-.317.752-.468 1.247-.468s.93.151 1.247.468l.089.089V4.15z" />
      </svg>
    ),
    color: 'text-orange-500 hover:bg-orange-50',
  },
  {
    label: 'HackerRank',
    href: personal.hackerrank,
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24C10.715 24 2.25 19.114 1.608 18 .963 16.886.963 7.116 1.608 6 2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V7.057c0-.143-.117-.258-.26-.258H8.108c-.143 0-.26.115-.26.258v9.886c0 .143.117.258.26.258h1.595c.143 0 .26-.115.26-.258v-4.098h4.074v4.098c0 .143.117.258.258.258h1.596c.142 0 .259-.115.259-.258V7.057c0-.143-.117-.258-.26-.258h-1.595z" />
      </svg>
    ),
    color: 'text-green-600 hover:bg-green-50',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="bg-white rounded-3xl shadow-card border border-slate-100 overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left — Profile */}
            <div className="flex flex-col items-center justify-center p-12 bg-gradient-to-br from-violet-50 to-purple-50">
              <motion.div variants={fadeUp} className="text-center">
                {/* Profile photo */}
                <div className="w-36 h-36 rounded-full mx-auto shadow-xl mb-5 overflow-hidden border-4 border-white ring-2 ring-violet-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/profile.png"
                    alt="Niranjana J"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{personal.name}</h3>
                <p className="text-violet-600 text-sm font-medium mt-1">{personal.role}</p>

                {/* Social Icons */}
                <div className="flex items-center justify-center gap-3 mt-5">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={s.label}
                      className={`w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center transition-colors ${s.color}`}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <Button
                    size="sm"
                    onClick={() =>
                      document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                    }
                  >
                    My Projects
                  </Button>
                  <Button href="/resume.pdf" variant="outline" size="sm" download>
                    ↓ Download CV
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Right — Bio */}
            <motion.div variants={fadeUp} className="p-12 flex flex-col justify-center">
              <SectionHeader
                title="I am a Professional AI/ML Engineer"
                centered={false}
                className="mb-6"
              />
              <p className="text-slate-600 leading-relaxed mb-5">{personal.about}</p>
              <p className="text-slate-600 leading-relaxed">
                My focus is on building systems that are not just accurate, but{' '}
                <span className="text-violet-600 font-semibold">production-ready</span> — with
                observability, memory, and graceful failure handling baked in from day one.
              </p>

              {/* Quick-facts */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  {
                    icon: (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    label: 'Location',
                    value: 'India',
                  },
                  {
                    icon: (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    ),
                    label: 'Degree',
                    value: 'B.E CSE(AIML)',
                  },
                  {
                    icon: (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    label: 'Availability',
                    value: 'Open to work',
                  },
                  {
                    icon: (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    ),
                    label: 'Languages',
                    value: 'Python, Java, SQL',
                  },
                ].map((fact) => (
                  <div key={fact.label} className="flex items-start gap-2">
                    <span className="mt-0.5 text-violet-500">{fact.icon}</span>
                    <div>
                      <p className="text-xs text-slate-400">{fact.label}</p>
                      <p className="text-sm font-semibold text-slate-800">{fact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
