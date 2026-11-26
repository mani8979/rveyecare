import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare, CheckCircle2 } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide every 7s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonialsData[currentIndex];

  return (
    <div className="max-w-3xl mx-auto px-1 sm:px-4">
      {/* Testimonial Card */}
      <div className="card relative p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-white border border-[#E3E9F4] shadow-md transition-all">
        
        {/* Quote Motif Top Left */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-[#EDF3FC] pointer-events-none">
          <Quote size={40} className="text-[#EDF3FC] sm:w-14 sm:h-14" />
        </div>

        {/* Header: Google Rating Badge & Source */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-gray-100">
          <div className="flex items-center gap-1.5">
            {/* Google G icon */}
            <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span className="text-xs font-bold text-gray-700">
              Verified Google Review
            </span>
            <CheckCircle2 size={13} className="text-emerald-500" />
          </div>

          {/* Stars */}
          <div className="flex items-center gap-0.5 text-[#F36B16]">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} size={15} fill="#F36B16" />
            ))}
            <span className="text-xs font-bold text-gray-600 ml-1">5.0</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="relative z-10 flex flex-col items-center text-center">
          
          {/* Review Text */}
          <blockquote className="text-sm sm:text-base md:text-lg text-[#202638] font-medium leading-relaxed max-w-2xl mb-5 italic">
            "{current.quote}"
          </blockquote>

          {/* Doctor / Hospital Response (if available) */}
          {current.ownerResponse && (
            <div className="w-full max-w-xl bg-[#F8FAFD] border border-[#E3E9F4] rounded-xl p-3 sm:p-3.5 mb-5 text-left text-xs text-gray-600">
              <div className="flex items-center gap-1.5 font-bold text-[#142F80] mb-1">
                <MessageSquare size={13} className="text-[#F36B16]" />
                <span>Response from RV Superspeciality Eye Care:</span>
              </div>
              <p className="m-0 leading-relaxed text-[11.5px] sm:text-xs text-gray-600">
                "{current.ownerResponse}"
              </p>
            </div>
          )}

          {/* Patient Details */}
          <div className="flex flex-col items-center">
            <div className="font-extrabold text-[#142F80] text-sm sm:text-base">
              {current.patientName}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-gray-500 mt-0.5">
              {current.badge && (
                <span className="inline-block px-2 py-0.5 rounded-full bg-[#EDF3FC] text-[#142F80] font-semibold text-[10.5px]">
                  {current.badge}
                </span>
              )}
              <span>&bull;</span>
              <span>{current.category}</span>
              <span>&bull;</span>
              <span>{current.date}</span>
            </div>
          </div>

        </div>

        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-1.5 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/95 border border-[#CBD9F5] shadow-md flex items-center justify-center text-[#142F80] hover:text-[#F36B16] hover:scale-105 transition-all z-10"
          aria-label="Previous Review"
        >
          <ChevronLeft size={16} />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-1.5 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/95 border border-[#CBD9F5] shadow-md flex items-center justify-center text-[#142F80] hover:text-[#F36B16] hover:scale-105 transition-all z-10"
          aria-label="Next Review"
        >
          <ChevronRight size={16} />
        </button>

        {/* Dots Indicators & Counter */}
        <div className="flex flex-col items-center gap-2 mt-6">
          <div className="flex items-center justify-center gap-1.5">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-6 bg-[#F36B16]' : 'w-2 bg-gray-200 hover:bg-gray-300'
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
          <span className="text-[11px] text-gray-400 font-semibold">
            {currentIndex + 1} of {testimonialsData.length} Reviews
          </span>
        </div>

      </div>

      {/* Official Google Reviews Link / Note */}
      <div className="mt-3.5 text-center">
        <a 
          href="https://www.google.com/maps/place/RV+SUPERSPECIALITY+EYE+CARE/@17.8033596,83.2092257,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3967437b24e9bb:0x98714ec42492ed93!8m2!3d17.8033596!4d83.2092257!16s%2Fg%2F11syxd8sfs"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-[#142F80] hover:text-[#F36B16] font-semibold transition-colors hover:underline"
        >
          <span>View all verified patient reviews on Google Maps &rarr;</span>
        </a>
      </div>
    </div>
  );
}
