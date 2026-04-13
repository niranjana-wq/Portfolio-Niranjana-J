import { cn } from '@/utils/cn';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && 'text-center', 'mb-12', className)}>
      <h2
        className={cn(
          'text-3xl md:text-4xl font-bold tracking-tight',
          light ? 'text-white' : 'text-slate-900'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-3 text-base md:text-lg max-w-2xl',
            centered && 'mx-auto',
            light ? 'text-slate-300' : 'text-slate-500'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
