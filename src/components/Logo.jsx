import React from 'react';
import { Link } from 'react-router-dom';

/**
 * RV SUPERSPECIALITY EYE CARE Logo Component
 * High-impact hospital brand banner with large, clear presentation.
 */
export default function Logo({ 
  variant = 'default', // 'default', 'light' (for dark navy footer)
  className = '',
  onClick,
  showTagline
}) {
  const isLight = variant === 'light';

  const handleClick = (e) => {
    // Smoothly scroll to the very top (start) of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link 
      to="/" 
      onClick={handleClick}
      className={`inline-flex items-center group transition-all duration-200 hover:scale-[1.01] flex-shrink-0 cursor-pointer ${
        isLight ? 'bg-white p-2.5 sm:p-3 rounded-2xl shadow-md hover:shadow-lg hover:ring-2 hover:ring-[#F36B16]/50' : 'py-1'
      } ${className}`} 
      aria-label="RV Superspeciality Eye Care - Return to start of page / Home"
      title="RV Superspeciality Eye Care - Return to start of page"
    >
      <img 
        src="/rv-header-logo.png" 
        alt="RV Superspeciality Eye Care - Right Place For Your Bright Vision" 
        width={285}
        height={84}
        style={{ aspectRatio: '794 / 234' }}
        className={`${
          isLight 
            ? 'h-12 sm:h-14 md:h-16 w-auto object-contain' 
            : 'h-14 sm:h-16 md:h-20 lg:h-[84px] w-auto object-contain'
        }`}
        loading="eager"
        decoding="async"
      />
    </Link>
  );
}
