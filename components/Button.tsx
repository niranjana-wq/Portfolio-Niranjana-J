import { cn } from '@/utils/cn';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  href?: string;
  download?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  href,
  download,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2';

  const variants = {
    primary: 'bg-violet-600 hover:bg-violet-700 text-white shadow-md hover:shadow-lg active:scale-95',
    outline:
      'border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white active:scale-95',
    ghost: 'text-violet-600 hover:bg-violet-50 active:scale-95',
  };

  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3 text-base',
  };

  const cls = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={cls} download={download} target={!download ? '_blank' : undefined} rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
