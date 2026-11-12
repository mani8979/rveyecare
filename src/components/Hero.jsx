import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  ArrowRight, 
  Eye, 
  Microscope, 
  HeartPulse 
} from 'lucide-react';

export default function Hero() {
  return (
    <section 
      className="relative overflow-hidden bg-white border-b border-[#E3E9F4] pt-6 pb-10 sm:pt-9 sm:pb-12 lg:pt-14 lg:pb-16 min-h-0 lg:min-h-[640px] flex items-center w-full"
    >
      {/* Desktop Background Image Layer (Active on desktop lg+ 1024px+, hidden on mobile/tablet < lg) */}
      <div 
        className="hidden lg:block absolute inset-0 bg-cover bg-no-repeat lg:bg-[position:right_center]"
        style={{
          backgroundImage: "url('/images/Modern%20Ophthalmology%20Clinic%20Examination.png')",
        }}
        aria-hidden="true"
      >
        {/* Subtle gradient overlay for desktop: protects text readability without washing out the photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-white/10 to-transparent pointer-events-none" />
      </div>

      <div className="container relative z-10 w-full px-4 sm:px-6">
        
        {/* Main Content Area (Text + Buttons) */}
        <div className="w-full max-w-xl lg:max-w-[540px] xl:max-w-[580px] flex flex-col items-center text-center lg:items-start lg:text-left mx-auto lg:mx-0">
          
          {/* Small Label Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#EDF3FC] border border-[#CBD9F5] mb-3.5 sm:mb-5 shadow-xs max-w-full min-w-0">
            <span className="w-2 h-2 rounded-full bg-[#F36B16] animate-pulse flex-shrink-0" />
            <span className="text-[9.5px] xs:text-[10px] sm:text-xs font-bold tracking-normal sm:tracking-wider text-[#142F80] uppercase truncate min-w-0">
              ADVANCED EYE CARE &bull; SUPER-SPECIALITY SERVICES
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-extrabold text-2xl xs:text-3xl sm:text-3.5xl md:text-4xl lg:text-[44px] xl:text-[48px] text-[#0E2364] tracking-tight leading-[1.15] mb-3 sm:mb-4 w-full">
            Clear Vision.<br />
            <span className="text-[#F36B16]">Better Life.</span>
          </h1>

          {/* Tagline */}
          <p className="text-[10.5px] xs:text-[11px] sm:text-xs md:text-sm font-bold tracking-normal sm:tracking-widest text-[#142F80] uppercase mb-3.5 sm:mb-4 flex items-center justify-center lg:justify-start gap-1.5 sm:gap-2 max-w-full min-w-0">
            <span className="h-[2px] w-3 sm:w-6 bg-[#F36B16] flex-shrink-0" />
            <span className="text-center truncate min-w-0">RIGHT PLACE FOR YOUR BRIGHT VISION</span>
            <span className="h-[2px] w-3 sm:w-6 bg-[#F36B16] flex-shrink-0" />
          </p>

          {/* Description (occupies approximately two lines on desktop, clean readability on mobile) */}
          <p className="text-sm sm:text-base lg:text-[17px] text-[#202638] leading-relaxed mb-6 sm:mb-7 lg:mb-8 max-w-[560px] w-full px-0">
            Experience comprehensive eye care with advanced diagnostic facilities, modern treatment technology and compassionate patient care.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-buttons flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              to="/appointment"
              className="btn btn-primary btn-lg shadow-md hover:shadow-orange flex items-center justify-center gap-2 text-sm sm:text-base px-6 sm:px-7 py-3.5 sm:py-3.5 w-full sm:w-auto transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 min-h-[48px]"
            >
              <Calendar size={18} />
              <span>Book an Appointment</span>
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/services"
              className="btn btn-outline-navy btn-lg bg-white/95 backdrop-blur-xs flex items-center justify-center gap-2 text-sm sm:text-base px-6 sm:px-7 py-3.5 sm:py-3.5 w-full sm:w-auto transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 min-h-[48px]"
            >
              <span>Explore Our Services</span>
              <ArrowRight size={17} />
            </Link>
          </div>

        </div>

        {/* Three Trust Highlights */}
        <div className="w-full max-w-3xl lg:max-w-4xl mt-8 sm:mt-10 lg:mt-14 pt-0 sm:pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            
            {/* Card 1 */}
            <div className="flex items-center justify-start gap-3.5 bg-white p-3.5 sm:p-4 rounded-2xl border border-[#E3E9F4] shadow-xs hover:shadow-md hover:border-[#142F80]/20 transition-all duration-300 transform hover:-translate-y-0.5">
              <div className="w-10 h-10 rounded-xl bg-[#EDF3FC] border border-[#CBD9F5] shadow-xs flex items-center justify-center text-[#F36B16] flex-shrink-0">
                <Eye size={20} className="text-[#F36B16]" />
              </div>
              <div className="text-left min-w-0 flex-1">
                <h4 className="text-sm sm:text-[14px] font-bold text-[#142F80] leading-snug">
                  Advanced Eye Care
                </h4>
                <span className="text-[11.5px] text-gray-500 font-medium block">
                  Targeted clinical solutions
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center justify-start gap-3.5 bg-white p-3.5 sm:p-4 rounded-2xl border border-[#E3E9F4] shadow-xs hover:shadow-md hover:border-[#142F80]/20 transition-all duration-300 transform hover:-translate-y-0.5">
              <div className="w-10 h-10 rounded-xl bg-[#EDF3FC] border border-[#CBD9F5] shadow-xs flex items-center justify-center text-[#142F80] flex-shrink-0">
                <Microscope size={20} className="text-[#142F80]" />
              </div>
              <div className="text-left min-w-0 flex-1">
                <h4 className="text-sm sm:text-[14px] font-bold text-[#142F80] leading-snug">
                  Modern Diagnostics
                </h4>
                <span className="text-[11.5px] text-gray-500 font-medium block">
                  Precision examination
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-center justify-start gap-3.5 bg-white p-3.5 sm:p-4 rounded-2xl border border-[#E3E9F4] shadow-xs hover:shadow-md hover:border-[#142F80]/20 transition-all duration-300 transform hover:-translate-y-0.5">
              <div className="w-10 h-10 rounded-xl bg-[#FFF5EE] border border-[#FED7AA] shadow-xs flex items-center justify-center text-[#F36B16] flex-shrink-0">
                <HeartPulse size={20} className="text-[#F36B16]" />
              </div>
              <div className="text-left min-w-0 flex-1">
                <h4 className="text-sm sm:text-[14px] font-bold text-[#142F80] leading-snug">
                  Patient-Centred Care
                </h4>
                <span className="text-[11.5px] text-gray-500 font-medium block">
                  Clear & gentle counseling
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
