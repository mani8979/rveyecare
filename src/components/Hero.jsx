import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  ArrowRight, 
  Eye, 
  ShieldCheck, 
  CheckCircle,
  Microscope,
  HeartPulse
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFFFFF] via-[#F3F6FC] to-[#EDF3FC] pt-12 pb-20 md:py-24 border-b border-[#E3E9F4]">
      {/* Subtle Background Decorative Blur / Circles */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#142F80]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F36B16]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="hero-grid">
          
          {/* Left Column: Content */}
          <div className="flex flex-col items-start justify-center">
            
            {/* Small Label Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDF3FC] border border-[#CBD9F5] mb-5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#F36B16] animate-pulse flex-shrink-0" />
              <span className="text-xs font-bold tracking-wider text-[#142F80] uppercase">
                ADVANCED EYE CARE &bull; SUPER-SPECIALITY SERVICES
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl text-[#111B33] tracking-tight leading-[1.12] mb-5">
              Clear Vision.<br />
              <span className="text-[#F36B16]">Better Life.</span>
            </h1>

            {/* Tagline reminder badge */}
            <p className="text-xs sm:text-sm font-bold tracking-widest text-[#142F80] uppercase mb-4 flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#F36B16]" />
              RIGHT PLACE FOR YOUR BRIGHT VISION
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#202638] leading-relaxed mb-8 max-w-xl">
              Experience comprehensive eye care with advanced diagnostic facilities, modern treatment technology and compassionate patient care.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta-buttons flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Link
                to="/appointment"
                className="btn btn-primary btn-lg shadow-md hover:shadow-orange"
              >
                <Calendar size={19} />
                <span>Book an Appointment</span>
              </Link>

              <Link
                to="/services"
                className="btn btn-outline-navy btn-lg"
              >
                <span>Explore Our Services</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Below the buttons: Three Trust Highlights */}
            <div className="pt-6 border-t border-[#DDE5F4] w-full">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E3E9F4] shadow-xs flex items-center justify-center text-[#142F80] flex-shrink-0">
                    <Eye size={20} className="text-[#F36B16]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#142F80] leading-snug">
                      Advanced Eye Care
                    </h4>
                    <span className="text-[11.5px] text-gray-500 block">
                      Targeted clinical solutions
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E3E9F4] shadow-xs flex items-center justify-center text-[#142F80] flex-shrink-0">
                    <Microscope size={20} className="text-[#142F80]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#142F80] leading-snug">
                      Modern Diagnostics
                    </h4>
                    <span className="text-[11.5px] text-gray-500 block">
                      Precision examination
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E3E9F4] shadow-xs flex items-center justify-center text-[#142F80] flex-shrink-0">
                    <HeartPulse size={20} className="text-[#F36B16]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#142F80] leading-snug">
                      Patient-Centred Care
                    </h4>
                    <span className="text-[11.5px] text-gray-500 block">
                      Clear & gentle counseling
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Realistic Ophthalmologist Image with Brand Badges */}
          <div className="relative mt-8 lg:mt-0 flex justify-center">
            
            {/* Main Visual Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white max-w-md lg:max-w-none w-full">
              <img
                src="/images/hero-doctor.jpg"
                alt="RV Superspeciality Eye Care - Dr. Vishnu Vardhan Reddy performing clinical consultation"
                width={600}
                height={520}
                fetchPriority="high"
                decoding="async"
                className="w-full h-[420px] sm:h-[480px] lg:h-[520px] object-cover object-center"
                loading="eager"
              />
              
              {/* Subtle Gradient at Bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#142F80]/70 via-transparent to-transparent pointer-events-none" />

              {/* Bottom In-Image Info Bar */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-white/60 shadow-lg flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FFF5EE] flex items-center justify-center text-[#F36B16] flex-shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#142F80]">
                    Dr. Vishnu Vardhan Reddy
                  </div>
                  <span className="text-[11px] text-[#F36B16] font-semibold block">
                    Phaco Surgeon & Glaucoma Specialist
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Trust Card 1 - Top Left */}
            <div className="absolute top-4 left-4 sm:top-6 md:-left-6 bg-white p-3.5 rounded-2xl shadow-xl border border-[#E3E9F4] hidden lg:flex items-center gap-3 max-w-[210px] animate-fadeIn">
              <div className="w-10 h-10 rounded-xl bg-[#FFF5EE] flex items-center justify-center text-[#F36B16] flex-shrink-0">
                <CheckCircle size={22} />
              </div>
              <div className="leading-tight">
                <span className="text-xs font-bold text-[#142F80] block">
                  Ethical Practice
                </span>
                <span className="text-[11px] text-gray-500">
                  Transparent clinical guidance
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

