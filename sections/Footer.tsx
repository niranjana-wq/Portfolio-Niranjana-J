'use client';

import { personal } from '@/data/personal';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold text-sm">
              NJ
            </span>
            <span className="font-semibold text-white">{personal.name}</span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { href: personal.linkedin, title: 'LinkedIn', icon: 'in' },
              { href: personal.github, title: 'GitHub', icon: 'gh' },
              { href: personal.leetcode, title: 'LeetCode', icon: 'lc' },
            ].map((s) => (
              <a
                key={s.title}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.title}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-violet-600 flex items-center justify-center text-xs text-white transition-colors font-bold"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {personal.name}. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
