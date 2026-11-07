import React from 'react';
import { Link } from 'react-router-dom';

/**
 * RV SUPERSPECIALITY EYE CARE Logo Component
 * High-impact hospital brand banner with large, clear presentation.
 */
export default function Logo({ 
  variant = 'default', // 'default', 'light' (for dark navy footer)
  className = '',
  onClick
}) {
  const isLight = variant === 'light';

  return (
    <Link 
      to="/" 
      onClick={onClick}
      className={`inline-flex items-center group transition-transform duration-200 hover:scale-[1.01] flex-shrink-0 ${
        isLight ? 'bg-white p-2.5 sm:p-3 rounded-2xl shadow-md' : 'py-1'
      } ${className}`} 
      aria-label="RV Superspeciality Eye Care - Home"
    >
      <img 
        src="/rv-header-logo.png" 
        alt="RV Superspeciality Eye Care - Right Place For Your Bright Vision" 
        className={`${
          isLight 
            ? 'h-12 sm:h-14 md:h-16 w-auto object-contain' 
            : 'h-14 sm:h-17 md:h-20 lg:h-[84px] w-auto object-contain'
        }`}
        loading="eager"
      />
    </Link>
  );
}
