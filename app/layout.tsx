import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Niranjana J — AI/ML Engineer',
  description:
    'Portfolio of Niranjana J, an AI/ML engineer building production-ready AI systems using LLMs, real-time pipelines, and scalable backend architectures.',
  keywords: ['AI engineer', 'ML engineer', 'LLM', 'portfolio', 'Niranjana J', 'computer vision'],
  authors: [{ name: 'Niranjana J', url: 'http://www.linkedin.com/in/niranjanaj/' }],
  openGraph: {
    title: 'Niranjana J — AI/ML Engineer',
    description: 'Building Production-Ready AI Systems, Not Just Models.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
