import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  ArrowRight, 
  Eye, 
  Microscope, 
  HeartHandshake 
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFFFFF] via-[#F1F6FD] to-[#E6F0FA] pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-16 border-b border-[#E3E9F4]">
      
      {/* Background Soft Ambient Light Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-[#F36B16]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="container relative z-10">
        
        {/* Main 2-Column Row: Left Content + Right Slit-Lamp Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Text Content & CTA Buttons (Cols 1 to 7) */}
          <div className="lg:col-span-7 flex flex-col items-start justify-center">
            
            {/* 1. Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDF4FD] border border-[#CBDFF8] mb-5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#F36B16] animate-pulse flex-shrink-0" />
              <span className="text-[11px] sm:text-xs font-bold tracking-wider text-[#102A6B] uppercase">
                ADVANCED EYE CARE &bull; SUPER-SPECIALITY SERVICES
              </span>
            </div>

            {/* 2. Main Heading */}
            <h1 className="font-extrabold text-3.5xl sm:text-4.5xl md:text-5xl lg:text-[54px] text-[#0E2364] tracking-tight leading-[1.1] mb-4">
              Clear Vision.<br />
              <span className="text-[#F36B16]">Better Life.</span>
            </h1>

            {/* 3. Tagline with Dual Orange Accent Lines */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="h-[2px] w-6 sm:w-8 bg-[#F36B16] flex-shrink-0" />
              <p className="text-xs sm:text-sm font-bold tracking-widest text-[#0E2364] uppercase">
                RIGHT PLACE FOR YOUR BRIGHT VISION
              </p>
              <span className="h-[2px] w-6 sm:w-8 bg-[#F36B16] flex-shrink-0" />
            </div>

            {/* 4. Description */}
            <p className="text-sm sm:text-base lg:text-[17px] text-[#374151] leading-relaxed mb-8 max-w-xl">
              Experience comprehensive eye care with advanced diagnostic facilities, modern treatment technology and compassionate patient care.
            </p>

            {/* 5. Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-2">
              <Link
                to="/appointment"
                className="btn btn-primary inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl sm:rounded-full text-white font-bold text-sm sm:text-base shadow-md hover:shadow-orange bg-[#F36B16] hover:bg-[#D95A0B] transition-all duration-200"
              >
                <Calendar size={18} className="text-white flex-shrink-0" />
                <span>Book an Appointment</span>
                <ArrowRight size={18} className="text-white flex-shrink-0" />
              </Link>

              <Link
                to="/services"
                className="btn inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl sm:rounded-full bg-white hover:bg-[#F3F6FC] text-[#0E2364] font-bold text-sm sm:text-base border-2 border-[#0E2364] transition-all duration-200 shadow-xs"
              >
                <span>Explore Our Services</span>
                <ArrowRight size={18} className="text-[#0E2364] flex-shrink-0" />
              </Link>
            </div>

          </div>

          {/* Right Column: Visual of Ophthalmologist & Patient with Slit-Lamp (Cols 8 to 12) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center mt-4 lg:mt-0">
            <div className="relative w-full max-w-md lg:max-w-none flex justify-center lg:justify-end">
              <img
                src="/images/hero-slit-lamp.png"
                alt="Ophthalmologist examining patient with modern slit-lamp diagnostics at RV Superspeciality Eye Care"
                width={604}
                height={576}
                fetchPriority="high"
                decoding="async"
                className="w-full h-auto max-h-[360px] sm:max-h-[420px] lg:max-h-[460px] object-contain object-center lg:object-right select-none pointer-events-none drop-shadow-sm"
                loading="eager"
              />
            </div>
          </div>

        </div>

        {/* 6. Trust Indicators (Three White Rounded Cards at Bottom) */}
        <div className="mt-8 sm:mt-10 lg:mt-12 pt-6 border-t border-[#DDE5F4]/80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5">
            
            {/* Card 1: Advanced Eye Care */}
            <div className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl border border-[#CBDFF8]/60 shadow-md shadow-blue-900/5 flex items-center gap-3.5 hover:shadow-lg transition-all duration-200 group">
              <div className="w-12 h-12 rounded-xl bg-[#FFF5EE] border border-[#FED7AA] flex items-center justify-center text-[#F36B16] flex-shrink-0 group-hover:scale-105 transition-transform">
                <Eye size={22} />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm sm:text-[14.5px] font-bold text-[#0E2364] leading-snug">
                  Advanced Eye Care
                </h4>
                <span className="text-xs text-gray-500 font-medium block mt-0.5">
                  Targeted clinical solutions
                </span>
              </div>
            </div>

            {/* Card 2: Modern Diagnostics */}
            <div className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl border border-[#CBDFF8]/60 shadow-md shadow-blue-900/5 flex items-center gap-3.5 hover:shadow-lg transition-all duration-200 group">
              <div className="w-12 h-12 rounded-xl bg-[#EDF3FC] border border-[#CBD9F5] flex items-center justify-center text-[#0E2364] flex-shrink-0 group-hover:scale-105 transition-transform">
                <Microscope size={22} />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm sm:text-[14.5px] font-bold text-[#0E2364] leading-snug">
                  Modern Diagnostics
                </h4>
                <span className="text-xs text-gray-500 font-medium block mt-0.5">
                  Precision examination
                </span>
              </div>
            </div>

            {/* Card 3: Patient-Centred Care */}
            <div className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl border border-[#CBDFF8]/60 shadow-md shadow-blue-900/5 flex items-center gap-3.5 hover:shadow-lg transition-all duration-200 group">
              <div className="w-12 h-12 rounded-xl bg-[#FFF5EE] border border-[#FED7AA] flex items-center justify-center text-[#F36B16] flex-shrink-0 group-hover:scale-105 transition-transform">
                <HeartHandshake size={22} />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm sm:text-[14.5px] font-bold text-[#0E2364] leading-snug">
                  Patient-Centred Care
                </h4>
                <span className="text-xs text-gray-500 font-medium block mt-0.5">
                  Clear & gentle counseling
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Decorative Bottom Curved Waves (Navy Wave Left, Orange Wave Right) */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden h-7 sm:h-9 z-0">
        <svg
          viewBox="0 0 1440 50"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          {/* Navy Curved Wave on Left */}
          <path
            d="M0 50V12C120 32 260 45 420 48L0 50Z"
            fill="#0E2364"
          />
          {/* Orange Accent Curve on Right */}
          <path
            d="M1040 48C1180 44 1310 32 1440 10V50H1040Z"
            fill="#F36B16"
          />
          {/* Navy Base Under Orange Accent */}
          <path
            d="M1120 49C1240 46 1350 36 1440 22V50H1120Z"
            fill="#0E2364"
          />
        </svg>
      </div>

    </section>
  );
}
