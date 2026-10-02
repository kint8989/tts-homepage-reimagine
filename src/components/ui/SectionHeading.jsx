import React from 'react';
import ScrollReveal from '../animation/ScrollReveal';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center', // 'left', 'center', 'right'
  theme = 'light' // 'light', 'dark'
}) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  };

  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const subtitleColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';

  return (
    <div className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignClasses[align]}`}>
      {badge && (
        <ScrollReveal variant="fadeIn">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#60BAB1]/15 text-[#007A83] border border-[#60BAB1]/30 mb-4">
            {badge}
          </span>
        </ScrollReveal>
      )}

      {title && (
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${textColor}`}>
            {title}
          </h2>
        </ScrollReveal>
      )}

      {subtitle && (
        <ScrollReveal variant="fadeUp" delay={0.2}>
          <p className={`mt-4 text-base md:text-lg leading-relaxed ${subtitleColor}`}>
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
