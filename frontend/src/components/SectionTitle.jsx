import React from 'react';

const SectionTitle = ({ eyebrow, title, subtitle, align = 'center', light = false }) => {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-3xl ${alignment} mb-12 md:mb-16`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] mb-4 ${
          light ? 'text-brand-300' : 'text-brand-600'
        }`}>
          <span className={`h-px w-8 ${light ? 'bg-brand-300' : 'bg-brand-600'}`}></span>
          {eyebrow}
          <span className={`h-px w-8 ${light ? 'bg-brand-300' : 'bg-brand-600'}`}></span>
        </div>
      )}
      <h2 className={`font-display text-3xl md:text-5xl font-medium leading-tight mb-4 ${
        light ? 'text-cream' : 'text-brand-900'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg leading-relaxed ${
          light ? 'text-brand-200/85' : 'text-earth-700'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
