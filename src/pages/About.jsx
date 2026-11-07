import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  Target, 
  Heart, 
  ShieldCheck, 
  Award, 
  Users, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Stethoscope,
  Microscope,
  Clock
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';

export default function About() {
  return (
    <div className="about-page overflow-hidden">
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#142F80] via-[#0E2364] to-[#0A1A4A] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <ScrollReveal animation="fade-up" duration={600}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#F36B16] text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#F36B16]" />
              DEDICATED OPHTHALMIC INSTITUTION
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
              About RV Superspeciality Eye Care
            </h1>

            <div className="text-lg sm:text-xl font-bold tracking-widest text-[#F36B16] uppercase mb-4">
              RIGHT PLACE FOR YOUR BRIGHT VISION
            </div>

            <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-2xl mx-auto">
              Committed to advancing ophthalmic standards, delivering transparent patient care, and safeguarding sight through modern diagnostics and clinical excellence.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 1: INTRODUCTION */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 6 cols: Editorial Intro */}
            <div className="lg:col-span-6">
              <ScrollReveal animation="fade-right" duration={700}>
                <SectionHeading
                  badge="OUR STORY & PHILOSOPHY"
                  badgeTelugu="మా ప్రస్థానం"
                  title="Dedicated to Protecting"
                  highlight="Your Sight"
                  subtitle="RV Superspeciality Eye Care was established with a clear mandate: to make high-quality, ethical, and modern ophthalmic care accessible, transparent, and patient-centered."
                />

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  Vision is our most cherished sensory link to the world. Whether diagnosing early-stage glaucoma before peripheral sight is compromised, restoring crystal-clear vision through precision cataract evaluation, or managing diabetic retinal health, our hospital is driven by a deep sense of responsibility.
                </p>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                  Our super-speciality facility integrates certified diagnostic workstations, comfortable consultation suites, and an in-house precision optical center. We take particular pride in our statutory scope transparency—ensuring patients receive verified in-house treatments while maintaining clear referral channels for tertiary interventions.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  <div className="p-3.5 rounded-xl bg-[#F3F6FC] border border-[#CBD9F5]">
                    <span className="text-xl sm:text-2xl font-extrabold text-[#142F80] block">
                      6 Scope
                    </span>
                    <span className="text-xs text-gray-600 font-semibold">
                      Core Clinical Disciplines
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#FFF5EE] border border-[#FED7AA]">
                    <span className="text-xl sm:text-2xl font-extrabold text-[#F36B16] block">
                      Patient-First
                    </span>
                    <span className="text-xs text-gray-600 font-semibold">
                      Ethical Medical Protocols
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right 6 cols: Hospital Images */}
            <div className="lg:col-span-6">
              <ScrollReveal animation="fade-left" duration={700}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl overflow-hidden shadow-md">
                    <img 
                      src="/images/about-hospital.jpg" 
                      alt="RV Superspeciality Eye Care Facility" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-md pt-6">
                    <img 
                      src="/images/gallery-consultation.jpg" 
                      alt="Consultation Chambers" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
                <div className="mt-4 p-4 rounded-2xl bg-[#EDF3FC] border border-[#CBD9F5] text-center">
                  <span className="text-xs text-[#142F80] font-bold block">
                    RV Superspeciality Eye Care – Clean, Modern & Accessible
                  </span>
                  <span className="text-[11px] text-gray-500">
                    Consultation Chambers &bull; Diagnostic Workstations &bull; In-House Opticals
                  </span>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: VISION & MISSION */}
      <section className="section bg-[#F3F6FC] border-y border-[#E3E9F4]">
        <div className="container">
          <ScrollReveal animation="fade-up" duration={700}>
            <SectionHeading
              badge="PURPOSE & VALUES"
              badgeTelugu="లక్ష్యం & ధ్యేయం"
              title="Our Guiding"
              highlight="Vision & Mission"
              subtitle="The core principles that shape our clinical decisions, staff conduct, and daily patient interactions."
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Vision Card */}
            <ScrollReveal animation="fade-up" delay={50} duration={650}>
              <div className="card p-8 bg-white rounded-3xl border border-[#E3E9F4] shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="w-14 h-14 rounded-2xl bg-[#FFF5EE] text-[#F36B16] flex items-center justify-center mb-6 border border-[#FED7AA]">
                  <Target size={28} />
                </div>
                <div className="text-xs font-bold text-[#F36B16] uppercase tracking-wider mb-1">
                  OUR VISION
                </div>
                <h3 className="text-2xl font-extrabold text-[#142F80] mb-3">
                  Clear Vision for Every Life
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  To be the most trusted, patient-centric super-speciality eye care institution in the region, recognized for diagnostic accuracy, clinical integrity, and modern ophthalmic solutions that enhance quality of life.
                </p>
                <div className="space-y-2 pt-2 border-t border-gray-100 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#F36B16]" />
                    <span>Unwavering commitment to evidence-based medicine</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#F36B16]" />
                    <span>Continuous technological and clinical upgrades</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Mission Card */}
            <ScrollReveal animation="fade-up" delay={150} duration={650}>
              <div className="card p-8 bg-white rounded-3xl border border-[#E3E9F4] shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="w-14 h-14 rounded-2xl bg-[#EDF3FC] text-[#142F80] flex items-center justify-center mb-6 border border-[#CBD9F5]">
                  <Heart size={28} />
                </div>
                <div className="text-xs font-bold text-[#142F80] uppercase tracking-wider mb-1">
                  OUR MISSION
                </div>
                <h3 className="text-2xl font-extrabold text-[#142F80] mb-3">
                  Compassionate & Precise Care
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  To deliver comprehensive eye examinations, accurate diagnoses, and personalized treatment plans with utmost transparency, warmth, and clinical responsibility for every patient who walks through our doors.
                </p>
                <div className="space-y-2 pt-2 border-t border-gray-100 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#142F80]" />
                    <span>Transparent communication of all diagnoses and costs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#142F80]" />
                    <span>Respectful care that values the patient's time and peace of mind</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* SECTION 3: OUR APPROACH TO PATIENT CARE */}
      <section className="section bg-white">
        <div className="container">
          <ScrollReveal animation="fade-up" duration={700}>
            <SectionHeading
              badge="CLINICAL METHODOLOGY"
              badgeTelugu="మా చికిత్సా విధానం"
              title="Our Approach to"
              highlight="Patient Care"
              subtitle="How we structure your clinical consultation to ensure accuracy, comfort, and informed decision-making."
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Step 1 */}
            <ScrollReveal animation="fade-up" delay={50}>
              <div className="card p-6 bg-[#F8FAFD] rounded-2xl border border-[#E3E9F4] text-center h-full">
                <div className="w-12 h-12 rounded-full bg-[#142F80] text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  1
                </div>
                <h4 className="text-base font-bold text-[#142F80] mb-2">
                  Detailed History & Vision Test
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We begin by recording your symptoms, lifestyle habits, screen habits, and systemic medical history.
                </p>
              </div>
            </ScrollReveal>

            {/* Step 2 */}
            <ScrollReveal animation="fade-up" delay={150}>
              <div className="card p-6 bg-[#F8FAFD] rounded-2xl border border-[#E3E9F4] text-center h-full">
                <div className="w-12 h-12 rounded-full bg-[#142F80] text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  2
                </div>
                <h4 className="text-base font-bold text-[#142F80] mb-2">
                  Objective Diagnostics
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Slit-lamp examination, tonometry for eye pressure, and dilated fundus screening as clinically indicated.
                </p>
              </div>
            </ScrollReveal>

            {/* Step 3 */}
            <ScrollReveal animation="fade-up" delay={250}>
              <div className="card p-6 bg-[#F8FAFD] rounded-2xl border border-[#E3E9F4] text-center h-full">
                <div className="w-12 h-12 rounded-full bg-[#142F80] text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  3
                </div>
                <h4 className="text-base font-bold text-[#142F80] mb-2">
                  Doctor Consultation & Counseling
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Our ophthalmologist reviews findings directly with you in simple language, presenting all viable choices.
                </p>
              </div>
            </ScrollReveal>

            {/* Step 4 */}
            <ScrollReveal animation="fade-up" delay={350}>
              <div className="card p-6 bg-[#F8FAFD] rounded-2xl border border-[#E3E9F4] text-center h-full">
                <div className="w-12 h-12 rounded-full bg-[#F36B16] text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  4
                </div>
                <h4 className="text-base font-bold text-[#142F80] mb-2">
                  Tailored Care & Follow-Up
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  From precision spectacles to medical therapies, with structured follow-up scheduling for visual wellbeing.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* SECTION 4: COMMITMENT TO SCOPE & TRANSPARENCY */}
      <section className="section bg-[#EDF3FC] border-t border-[#CBD9F5]">
        <div className="container">
          <ScrollReveal animation="zoom-in" duration={700}>
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-md border border-[#CBD9F5]">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck size={28} className="text-[#142F80]" />
                <h3 className="text-2xl font-bold text-[#142F80]">
                  Our Commitment to Scope Integrity
                </h3>
              </div>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                In healthcare, clarity is as vital as competence. At RV Superspeciality Eye Care, we strictly practice within our declared clinical capabilities. We transparently publish our Scope of Services (covering General Check-ups, Cataract, Cornea, Glaucoma, Medical Retina, and Opticals) and openly disclose Non-Scope procedures.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 w-full">
                <Link to="/services" className="btn btn-primary w-full sm:w-auto justify-center">
                  <span>View Scope of Services Directory</span>
                  <ArrowRight size={17} />
                </Link>
                
                <Link to="/appointment" className="btn btn-outline-navy w-full sm:w-auto justify-center">
                  <span>Schedule a Consultation</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
