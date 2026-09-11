import React from 'react';
import { Badge } from './Badge';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  centered = false,
  light = false,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`mb-3.5 ${centered ? 'flex justify-center' : ''}`}>
          <Badge variant={light ? 'gold' : 'green'}>{badge}</Badge>
        </div>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-[40px] leading-[1.2] font-heading font-medium tracking-tight ${
          light ? 'text-white' : 'text-[#17201D]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? 'text-[#DDECE4]' : 'text-[#66736D]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
