import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Info } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  // Optional auto-slide with clean timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonialsData[currentIndex];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Testimonial Card */}
      <div className="card relative p-8 sm:p-12 rounded-3xl bg-white border border-[#E3E9F4] shadow-md">
        
        {/* Quote Motif Top Left */}
        <div className="absolute top-6 left-6 text-[#EDF3FC]">
          <Quote size={56} className="text-[#EDF3FC]" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          
          {/* Star Rating */}
          <div className="flex items-center gap-1 mb-4 text-[#F36B16]">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} size={18} fill="#F36B16" />
            ))}
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-lg sm:text-xl text-[#202638] font-medium leading-relaxed max-w-2xl mb-6 italic">
            "{current.quote}"
          </blockquote>

          {/* Category Tag */}
          <span className="badge badge-navy text-xs mb-3 font-semibold">
            {current.category}
          </span>

          {/* Patient Attribution Placeholder */}
          <div className="font-bold text-[#142F80] text-base">
            {current.patientName}
          </div>
          <div className="text-xs text-gray-500">
            {current.location} &bull; {current.date}
          </div>

        </div>

        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 border border-[#E3E9F4] shadow-md flex items-center justify-center text-[#142F80] hover:text-[#F36B16] hover:scale-105 transition-all z-10"
          aria-label="Previous Testimonial"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 border border-[#E3E9F4] shadow-md flex items-center justify-center text-[#142F80] hover:text-[#F36B16] hover:scale-105 transition-all z-10"
          aria-label="Next Testimonial"
        >
          <ChevronRight size={18} />
        </button>

        {/* Dots Indicators */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-[#F36B16]' : 'w-2.5 bg-gray-200 hover:bg-gray-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Transparent Disclaimer Note */}
      <div className="mt-4 text-center">
        <span className="inline-flex items-center gap-1.5 text-xs text-gray-400">
          <Info size={13} />
          <span>Representative patient feedback template awaiting verified hospital submissions.</span>
        </span>
      </div>
    </div>
  );
}

