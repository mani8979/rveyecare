import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  ShieldCheck, 
  Microscope, 
  Users, 
  Calendar, 
  ArrowRight, 
  CheckCircle, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Award, 
  HeartHandshake, 
  Stethoscope, 
  Smile, 
  Glasses 
} from 'lucide-react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import TestimonialSlider from '../components/TestimonialSlider';
import ScrollReveal from '../components/ScrollReveal';
import { availableServices } from '../data/services';

export default function Home() {
  return (
    <div className="home-page overflow-hidden">
      {/* SECTION 1: HERO */}
      <Hero />

      {/* SECTION 2: TRUST AND HIGHLIGHTS */}
      <section className="section section-sm bg-white border-b border-[#E3E9F4]">
        <div className="container">
          
          {/* Section Heading for Doctors */}
          <ScrollReveal animation="fade-up" duration={700}>
            <SectionHeading
              badge="EXPERT OPHTHALMOLOGISTS"
              title="Meet Our Experienced"
              highlight="Doctors"
              subtitle="Dedicated ophthalmic surgeons and retina specialists providing advanced eye diagnostics, surgical excellence, and compassionate patient care."
              centered
            />
          </ScrollReveal>

          {/* Doctor Cards at Top: Male First (Dr. Vishnu Vardhan Reddy), Female Second (Dr. Rachana) */}
          <ScrollReveal animation="fade-up" duration={700}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16 md:mb-20">
              
              {/* Card 1: Male Doctor - Dr. Vishnu Vardhan Reddy */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white w-full group">
                <img
                  src="/images/doctor-vishnuvardhan.jpg"
                  alt="RV Superspeciality Eye Care - Dr. Vishnu Vardhan Reddy performing clinical consultation"
                  width={600}
                  height={520}
                  decoding="async"
                  className="w-full h-[380px] sm:h-[420px] md:h-[460px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                />
                
                {/* Subtle Gradient at Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#142F80]/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Trust Card - Top Left */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 bg-white/95 backdrop-blur-sm p-2.5 sm:p-3 rounded-2xl shadow-lg border border-[#E3E9F4] hidden sm:flex items-center gap-2.5 max-w-[200px]">
                  <div className="w-8 h-8 rounded-xl bg-[#FFF5EE] flex items-center justify-center text-[#F36B16] flex-shrink-0">
                    <CheckCircle size={18} />
                  </div>
                  <div className="leading-tight">
                    <span className="text-xs font-bold text-[#142F80] block">
                      Ethical Practice
                    </span>
                    <span className="text-[10.5px] text-gray-500">
                      Transparent clinical guidance
                    </span>
                  </div>
                </div>

                {/* Bottom In-Image Info Bar */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-white/60 shadow-lg flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF5EE] flex items-center justify-center text-[#F36B16] flex-shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-bold text-[#142F80] truncate">
                      Dr. Vishnu Vardhan Reddy
                    </div>
                    <span className="text-[11px] text-[#F36B16] font-semibold block truncate">
                      Phaco Surgeon & Glaucoma Specialist
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2: Female Doctor - Dr. Rachana */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white w-full group">
                <img
                  src="/images/doctor-rachana.jpg"
                  alt="RV Superspeciality Eye Care - Dr. Rachana performing retina consultation"
                  width={600}
                  height={520}
                  decoding="async"
                  className="w-full h-[380px] sm:h-[420px] md:h-[460px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                />
                
                {/* Subtle Gradient at Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#142F80]/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Trust Card - Top Left */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 bg-white/95 backdrop-blur-sm p-2.5 sm:p-3 rounded-2xl shadow-lg border border-[#E3E9F4] hidden sm:flex items-center gap-2.5 max-w-[200px]">
                  <div className="w-8 h-8 rounded-xl bg-[#EDF3FC] flex items-center justify-center text-[#142F80] flex-shrink-0">
                    <CheckCircle size={18} className="text-[#142F80]" />
                  </div>
                  <div className="leading-tight">
                    <span className="text-xs font-bold text-[#142F80] block">
                      Retina Specialist
                    </span>
                    <span className="text-[10.5px] text-gray-500">
                      Comprehensive eye care
                    </span>
                  </div>
                </div>

                {/* Bottom In-Image Info Bar */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-white/60 shadow-lg flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF5EE] flex items-center justify-center text-[#F36B16] flex-shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-bold text-[#142F80] truncate">
                      Dr. Rachana
                    </div>
                    <span className="text-[11px] text-[#F36B16] font-semibold block truncate">
                      Consultant Ophthalmologist and Retina Specialist
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" duration={700}>
            <SectionHeading
              badge="EXCELLENCE IN VISION"
              title="Your Vision Deserves"
              highlight="Expert Care"
              subtitle="RV Superspeciality Eye Care brings together clinical expertise, modern diagnostic tools, and dedicated attention to protect your sight."
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <ScrollReveal animation="fade-up" delay={50} duration={650}>
              <div className="card p-6 bg-white border border-[#E3E9F4] rounded-2xl hover:border-[#142F80]/30 hover:shadow-md transition-all group h-full">
                <div className="w-12 h-12 rounded-xl bg-[#EDF3FC] group-hover:bg-[#142F80] group-hover:text-white text-[#142F80] flex items-center justify-center mb-4 transition-colors">
                  <Eye size={24} className="group-hover:text-[#F36B16] transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-[#142F80] mb-2">
                  1. Advanced Eye Care
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Evidence-based clinical protocols tailored to individual ocular conditions and visual wellness goals.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 2 */}
            <ScrollReveal animation="fade-up" delay={150} duration={650}>
              <div className="card p-6 bg-white border border-[#E3E9F4] rounded-2xl hover:border-[#142F80]/30 hover:shadow-md transition-all group h-full">
                <div className="w-12 h-12 rounded-xl bg-[#EDF3FC] group-hover:bg-[#142F80] group-hover:text-white text-[#142F80] flex items-center justify-center mb-4 transition-colors">
                  <Microscope size={24} className="group-hover:text-[#F36B16] transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-[#142F80] mb-2">
                  2. Comprehensive Diagnostics
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Precision tonometry, slit-lamp biomicroscopy, and fundus evaluations to detect subtle early changes.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 3 */}
            <ScrollReveal animation="fade-up" delay={250} duration={650}>
              <div className="card p-6 bg-white border border-[#E3E9F4] rounded-2xl hover:border-[#142F80]/30 hover:shadow-md transition-all group h-full">
                <div className="w-12 h-12 rounded-xl bg-[#EDF3FC] group-hover:bg-[#142F80] group-hover:text-white text-[#142F80] flex items-center justify-center mb-4 transition-colors">
                  <HeartHandshake size={24} className="group-hover:text-[#F36B16] transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-[#142F80] mb-2">
                  3. Personalised Patient Care
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Unhurried consultations where our specialists take time to explain conditions, options, and lifestyle tips.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 4 */}
            <ScrollReveal animation="fade-up" delay={350} duration={650}>
              <div className="card p-6 bg-white border border-[#E3E9F4] rounded-2xl hover:border-[#142F80]/30 hover:shadow-md transition-all group h-full">
                <div className="w-12 h-12 rounded-xl bg-[#EDF3FC] group-hover:bg-[#142F80] group-hover:text-white text-[#142F80] flex items-center justify-center mb-4 transition-colors">
                  <Stethoscope size={24} className="group-hover:text-[#F36B16] transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-[#142F80] mb-2">
                  4. Modern Treatment Facilities
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Clean clinical suites, dedicated consultation chambers, and in-house precision optical dispensing unit.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* SECTION 3: ABOUT RV SUPERSPECIALITY EYE CARE */}
      <section className="section bg-[#F3F6FC]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 6 cols: Hospital Visual */}
            <div className="lg:col-span-6 relative">
              <ScrollReveal animation="fade-right" duration={700}>
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
                  <img 
                    src="/images/about-hospital.jpg" 
                    alt="RV Superspeciality Eye Care Facility" 
                    width={600}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/60 shadow-md">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#142F80]">
                      <Sparkles size={16} className="text-[#F36B16]" />
                      <span>RV Superspeciality Ophthalmology Center</span>
                    </div>
                    <span className="text-xs text-gray-600">
                      Committed to ethical, transparent super-speciality eye healthcare.
                    </span>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute bottom-4 right-4 bg-[#142F80] text-white p-4 rounded-2xl shadow-xl max-w-[210px] hidden md:block">
                  <div className="text-2xl font-extrabold text-[#F36B16]">
                    RIGHT PLACE
                  </div>
                  <div className="text-xs font-semibold text-gray-200">
                    FOR YOUR BRIGHT VISION
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right 6 cols: Description & Highlights */}
            <div className="lg:col-span-6">
              <ScrollReveal animation="fade-left" duration={700}>
                <SectionHeading
                  badge="ABOUT RV EYE CARE"
                  title="Dedicated to Protecting"
                  highlight="Your Vision"
                  subtitle="RV Superspeciality Eye Care is focused on comprehensive ophthalmic care, accurate eye diagnosis and personalised treatment. Our aim is to support patients with professional eye-care services and a comfortable healthcare experience."
                />

                <div className="space-y-3.5 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#F36B16] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700 m-0">
                      <strong>Comprehensive Examination:</strong> Thorough visual acuity checks, refraction, and biomicroscopic anterior segment screening.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#F36B16] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700 m-0">
                      <strong>Statutory Scope Transparency:</strong> Clear distinction of 6 available ophthalmic services and transparent referral policies for non-scope care.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#F36B16] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700 m-0">
                      <strong>Integrated Optical Support:</strong> Directly matched prescription lenses, anti-glare coatings, and lightweight frames on-site.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 w-full pt-2">
                  <Link to="/about" className="btn btn-navy w-full sm:w-auto justify-center">
                    <span>Learn More About Us</span>
                    <ArrowRight size={17} />
                  </Link>

                  <Link to="/services" className="btn btn-outline-navy w-full sm:w-auto justify-center">
                    <span>View Scope Poster</span>
                  </Link>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: OUR EYE CARE SERVICES */}
      <section className="section bg-white">
        <div className="container">
          <ScrollReveal animation="fade-up" duration={700}>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <SectionHeading
                badge="OUR AVAILABLE SERVICES"
                title="Comprehensive Eye Care"
                highlight="Services"
                subtitle="Explore our range of ophthalmology services designed to support your eye health and vision, exactly as listed in our official hospital scope catalogue."
                className="mb-0"
              />

              <div className="mt-4 md:mt-0">
                <Link 
                  to="/services" 
                  className="btn btn-outline-navy inline-flex items-center gap-2"
                >
                  <span>View Full Scope & Non-Scope</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* 6 Attractive Service Cards with Staggered Scroll Fade In */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {availableServices.map((svc, index) => (
              <ScrollReveal 
                key={svc.id} 
                animation="fade-up" 
                delay={(index % 3) * 100}
                duration={650}
              >
                <ServiceCard service={svc} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY CHOOSE US */}
      <section className="section bg-[#F3F6FC] border-y border-[#E3E9F4]">
        <div className="container">
          <ScrollReveal animation="fade-up" duration={700}>
            <SectionHeading
              badge="WHY PATIENTS TRUST US"
              title="Why Choose"
              highlight="RV Superspeciality Eye Care?"
              subtitle="We believe clear vision starts with careful listening, precise diagnostic evaluation, and ethical medical care."
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Feature 1 */}
            <ScrollReveal animation="fade-up" delay={50}>
              <div className="card p-7 bg-white rounded-2xl border border-[#E3E9F4] flex items-start gap-4 hover:shadow-md transition-shadow h-full">
                <div className="w-12 h-12 rounded-xl bg-[#FFF5EE] text-[#F36B16] flex items-center justify-center flex-shrink-0">
                  <Eye size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#142F80] mb-1.5">
                    Comprehensive Ophthalmology Services
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    From everyday vision screening and spectacles dispensing to specialized cataract, cornea, glaucoma, and medical retina evaluations under one roof.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Feature 2 */}
            <ScrollReveal animation="fade-up" delay={150}>
              <div className="card p-7 bg-white rounded-2xl border border-[#E3E9F4] flex items-start gap-4 hover:shadow-md transition-shadow h-full">
                <div className="w-12 h-12 rounded-xl bg-[#EDF3FC] text-[#142F80] flex items-center justify-center flex-shrink-0">
                  <Microscope size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#142F80] mb-1.5">
                    Focus on Accurate Diagnostics
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Accurate clinical diagnosis forms the cornerstone of our treatment recommendations. We emphasize standardized tonometry, biometry, and fundus inspection.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Feature 3 */}
            <ScrollReveal animation="fade-up" delay={250}>
              <div className="card p-7 bg-white rounded-2xl border border-[#E3E9F4] flex items-start gap-4 hover:shadow-md transition-shadow h-full">
                <div className="w-12 h-12 rounded-xl bg-[#FFF5EE] text-[#F36B16] flex items-center justify-center flex-shrink-0">
                  <Smile size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#142F80] mb-1.5">
                    Patient-Friendly Approach
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We maintain a comfortable environment with supportive counseling. We patiently explain test findings so you understand every aspect of your eye health.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Feature 4 */}
            <ScrollReveal animation="fade-up" delay={350}>
              <div className="card p-7 bg-white rounded-2xl border border-[#E3E9F4] flex items-start gap-4 hover:shadow-md transition-shadow h-full">
                <div className="w-12 h-12 rounded-xl bg-[#EDF3FC] text-[#142F80] flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#142F80] mb-1.5">
                    Dedicated Vision Care
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Our hospital strictly adheres to verified medical ethics, avoiding unnecessary procedures while ensuring continuous follow-up for progressive sight health.
                  </p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* SECTION 6: PATIENT EXPERIENCE */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 6 cols: Text */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <ScrollReveal animation="fade-right" duration={700}>
                <SectionHeading
                  badge="PATIENT EXPERIENCE"
                  title="Care That Puts"
                  highlight="Patients First"
                  subtitle="We recognize that visiting an eye doctor can be daunting. We have structured our clinic workflows to provide a calm, dignified, and supportive environment at every step."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                  <div className="p-4 rounded-xl bg-[#F8FAFD] border border-[#E3E9F4]">
                    <h4 className="text-sm font-bold text-[#142F80] mb-1">
                      Comfortable Consultation
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Spacious waiting lounge, temperature-controlled clinics, and gentle diagnostic procedures.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F8FAFD] border border-[#E3E9F4]">
                    <h4 className="text-sm font-bold text-[#142F80] mb-1">
                      Clear Communication
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Consultations conducted with patient-first empathy and straightforward explanations.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F8FAFD] border border-[#E3E9F4]">
                    <h4 className="text-sm font-bold text-[#142F80] mb-1">
                      Professional Guidance
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Practical advice on lifestyle habits, screen ergonomics, and preventive eye safety.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F8FAFD] border border-[#E3E9F4]">
                    <h4 className="text-sm font-bold text-[#142F80] mb-1">
                      Personalised Attention
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Individualized care plans rather than rushed, one-size-fits-all treatments.
                    </p>
                  </div>
                </div>

                <Link to="/contact" className="btn btn-navy">
                  <span>Contact Hospital Desk</span>
                  <ArrowRight size={16} />
                </Link>
              </ScrollReveal>
            </div>

            {/* Right 6 cols: Patient Care Visual */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <ScrollReveal animation="fade-left" duration={700}>
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
                  <img 
                    src="/images/about-care.jpg" 
                    alt="Patient Experience at RV Superspeciality Eye Care" 
                    width={600}
                    height={420}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-[420px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/60 shadow-md flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-[#142F80] block">
                        Gentle & Thorough Eye Evaluations
                      </span>
                      <span className="text-xs text-gray-500">
                        Caring for seniors, working adults, and youth.
                      </span>
                    </div>
                    <span className="badge badge-orange text-[10px]">
                      Patient First
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7: APPOINTMENT CTA */}
      <section className="section section-navy bg-[#142F80] relative overflow-hidden">
        {/* Background Decorative Rings */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-white/10 pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border border-white/10 pointer-events-none" />

        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <ScrollReveal animation="zoom-in" duration={700}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#F36B16] text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#F36B16]" />
              BOOK YOUR VISIT
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Take the First Step Towards <span className="text-[#F36B16]">Better Vision</span>
            </h2>

            <p className="text-base sm:text-lg text-blue-100/90 mb-8 max-w-xl mx-auto">
              Schedule your eye-care consultation with RV Superspeciality Eye Care today. Our team is ready to evaluate your vision with precision and care.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xl mx-auto">
              <Link to="/appointment" className="btn btn-primary btn-lg w-full sm:w-auto justify-center shadow-lg hover:shadow-orange">
                <Calendar size={19} />
                <span>Book an Appointment</span>
              </Link>

              <Link to="/contact" className="btn btn-outline-white btn-lg w-full sm:w-auto justify-center">
                <span>View Clinic Location & Timings</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 8: TESTIMONIALS */}
      <section className="section bg-[#F8FAFD] border-t border-[#E3E9F4]">
        <div className="container">
          <ScrollReveal animation="fade-up" duration={700}>
            <SectionHeading
              badge="PATIENT EXPERIENCES"
              title="What Patients Say About"
              highlight="Our Care"
              subtitle="Read representative feedback reflecting our commitment to patient-centred eye diagnostics and compassionate communication."
              centered
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={100} duration={700}>
            <TestimonialSlider />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
