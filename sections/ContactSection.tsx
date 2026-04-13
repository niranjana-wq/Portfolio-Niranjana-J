'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/utils/animations';
import { personal } from '@/data/personal';
import SectionHeader from '@/components/SectionHeader';

const contactItems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: personal.phone,
    href: `tel:${personal.phone}`,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/niranjanaj',
    href: personal.linkedin,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/niranjana-wq',
    href: personal.github,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.483 0a1.374 1.374 0 00-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 00-1.209 2.104 5.35 5.35 0 00-.125.513 5.527 5.527 0 00.062 2.362 5.83 5.83 0 00.349 1.017 5.938 5.938 0 001.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 00-1.951-.003l-2.396 2.392a3.021 3.021 0 01-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 01.066-.523 2.545 2.545 0 01.619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 00-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l1.997-2.134A1.384 1.384 0 0013.483 0zm-2.866 12.815a1.38 1.38 0 00-1.38 1.382 1.38 1.38 0 001.38 1.382A1.38 1.38 0 0011.998 15a1.38 1.38 0 00-1.381-1.185z" />
      </svg>
    ),
    label: 'LeetCode',
    value: 'leetcode.com/Niranjana_J',
    href: personal.leetcode,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24C10.715 24 2.25 19.114 1.608 18 .963 16.886.963 7.116 1.608 6 2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V7.057c0-.143-.117-.258-.26-.258H8.108c-.143 0-.26.115-.26.258v9.886c0 .143.117.258.26.258h1.595c.143 0 .26-.115.26-.258v-4.098h4.074v4.098c0 .143.117.258.258.258h1.596c.142 0 .259-.115.259-.258V7.057c0-.143-.117-.258-.26-.258h-1.595z" />
      </svg>
    ),
    label: 'HackerRank',
    value: 'hackerrank.com/niranjana',
    href: personal.hackerrank,
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}\n\nMessage:\n${form.message}`;
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Let's discuss your Project"
          subtitle="Reach out through any channel or drop a message below."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Contact Links */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-4"
          >
            {contactItems.map((item) => (
              <motion.a
                key={item.label}
                variants={fadeUp}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-card hover:border-violet-200 transition-all duration-200 group"
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-violet-50 text-violet-600 flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="text-xs text-slate-400 font-medium">{item.label}</p>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-violet-600 transition-colors">
                    {item.value}
                  </p>
                </div>
                <svg
                  className="w-4 h-4 text-slate-300 group-hover:text-violet-400 ml-auto transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            ))}
          </motion.div>

          {/* Right — Form */}
          <motion.form
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-card border border-slate-100 p-8 space-y-5"
          >
            <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5">Your Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5">Email Address</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition"
                />
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <label className="block text-xs font-semibold text-slate-500 mb-1.5">Subject</label>
              <input
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="Project Collaboration / Job Opportunity"
                className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <label className="block text-xs font-semibold text-slate-500 mb-1.5">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project or opportunity..."
                className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition resize-none"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <button
                type="submit"
                className="w-full py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-full transition-colors shadow-md hover:shadow-lg"
              >
                Send Message →
              </button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
