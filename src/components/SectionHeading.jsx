import React from 'react';

/**
 * SectionHeading - Consistent section header with brand badge and typography
 */
export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  centered = false,
  light = false,
  className = ''
}) {
  return (
    <div className={`mb-12 ${centered ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2.5 mb-3.5 ${centered ? 'justify-center' : ''}`}>
          <span className={`badge ${light ? 'badge-white' : 'badge-navy'}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F36B16]" />
            {badge}
          </span>
        </div>
      )}

      <h2 className={`font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-tight mb-4 ${
        light ? 'text-white' : 'text-[#111B33]'
      }`}>
        {title}{' '}
        {highlight && (
          <span className="text-[#F36B16] inline-block">
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          light ? 'text-blue-100/90' : 'text-[#667085]'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
