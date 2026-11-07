import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  Sun, 
  Sparkles, 
  Activity, 
  ShieldCheck, 
  Glasses, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldAlert, 
  Calendar, 
  ArrowRight, 
  Info, 
  ChevronRight,
  X,
  FileText,
  ExternalLink
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import SymptomGuide from '../components/SymptomGuide';
import ScrollReveal from '../components/ScrollReveal';
import { availableServices, nonScopeServices } from '../data/services';

const iconMap = {
  Eye: Eye,
  Sun: Sun,
  Sparkles: Sparkles,
  Activity: Activity,
  ShieldCheck: ShieldCheck,
  Glasses: Glasses
};

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [showPosterModal, setShowPosterModal] = useState(false);

  return (
    <div className="services-page overflow-hidden">
      
      {/* Page Header / Hero Banner */}
      <section className="bg-gradient-to-br from-[#142F80] via-[#0E2364] to-[#0A1A4A] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F36B16]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          
          <ScrollReveal animation="fade-up" duration={600}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#F36B16] text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#F36B16]" />
              HOSPITAL CLINICAL SCOPE
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
              OUR SCOPE OF SERVICES
            </h1>

            <div className="text-xl sm:text-2xl font-telugu text-[#F36B16] font-semibold mb-4">
              లభించు వైద్య సేవలు
            </div>

            <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-2xl mx-auto mb-6">
              Comprehensive Ophthalmology Services. We take pride in transparent clinical care, clearly detailing all available treatments and statutory non-scope exclusions.
            </p>

            {/* Quick buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="#scope-list" 
                className="btn btn-primary"
              >
                <span>Explore Available Scope (6 Services)</span>
              </a>

              <a 
                href="#non-scope" 
                className="btn btn-outline-white"
              >
                <span>View Non-Scope Notice</span>
              </a>

              <button
                type="button"
                onClick={() => setShowPosterModal(true)}
                className="btn bg-white/15 text-white hover:bg-white/25 border-transparent text-xs sm:text-sm py-2 px-4"
              >
                <FileText size={15} />
                <span>View Original Hospital Scope Poster</span>
              </button>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* SECTION A: AVAILABLE SERVICES (Ophthalmology / ఆప్తమాలజీ) */}
      <section id="scope-list" className="section bg-white scroll-mt-20">
        <div className="container">
          
          <ScrollReveal animation="fade-up" duration={700}>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <div className="inline-flex flex-wrap items-center gap-2.5 mb-2">
                  <span className="badge badge-navy">OPHTHALMOLOGY</span>
                  <span className="badge-telugu bg-[#FFF5EE] text-[#F36B16] border border-[#FED7AA]">
                    ఆప్తమాలజీ
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111B33]">
                  Available Scope of Services <span className="text-[#F36B16]">(6 Services)</span>
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mt-1">
                  Verified clinical ophthalmology services provided on-site at RV Superspeciality Eye Care.
                </p>
              </div>

              <div className="mt-4 md:mt-0 text-xs text-gray-500 bg-[#F3F6FC] px-3.5 py-2 rounded-lg border border-[#E3E9F4]">
                Source: Official Hospital Poster Scope Schedule
              </div>
            </div>
          </ScrollReveal>

          {/* Detailed 6 Services Grid with Staggered Scroll Fade */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {availableServices.map((svc, index) => {
              const Icon = iconMap[svc.iconName] || Eye;
              return (
                <ScrollReveal 
                  key={svc.id}
                  animation="fade-up"
                  delay={(index % 3) * 100}
                  duration={650}
                  className="h-full"
                >
                  <div 
                    id={svc.id}
                    className="card card-hover group flex flex-col h-full bg-white border border-[#E3E9F4] rounded-2xl overflow-hidden scroll-mt-28"
                  >
                    {/* Image header */}
                    <div className="relative h-52 overflow-hidden bg-gray-100">
                      <img 
                        src={svc.image} 
                        alt={svc.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      {/* Index Number Badge */}
                      <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-[#142F80] text-white flex items-center justify-center font-bold text-sm shadow-md">
                        0{index + 1}
                      </div>

                      {/* Bottom Tag */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#F36B16] px-2.5 py-1 rounded">
                          <Icon size={13} />
                          <span>Available</span>
                        </span>
                        <span className="text-xs font-telugu font-semibold bg-white/90 text-[#142F80] px-2 py-0.5 rounded">
                          {svc.teluguTitle}
                        </span>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6 flex flex-col flex-1 justify-between">
                      <div>
                        <h3 className="text-xl font-extrabold text-[#142F80] group-hover:text-[#F36B16] transition-colors mb-1">
                          {svc.title}
                        </h3>
                        <div className="text-xs font-telugu font-semibold text-[#F36B16] mb-3">
                          {svc.teluguTitle}
                        </div>

                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                          {svc.shortDescription}
                        </p>

                        {/* Bullet Highlights */}
                        <div className="space-y-1.5 pt-3 border-t border-gray-100 mb-6">
                          <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1">
                            Key Clinical Focus:
                          </span>
                          {svc.keyHighlights.slice(0, 3).map((item, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                              <CheckCircle2 size={13} className="text-[#F36B16] flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-3">
                        <button
                          type="button"
                          onClick={() => setSelectedService(svc)}
                          className="text-xs sm:text-sm font-bold text-[#142F80] hover:text-[#F36B16] transition-colors inline-flex items-center gap-1"
                        >
                          <span>View Full Clinical Details</span>
                          <ChevronRight size={15} />
                        </button>

                        <Link
                          to={`/appointment?service=${svc.id}`}
                          className="btn btn-primary btn-sm"
                        >
                          <Calendar size={13} />
                          <span>Book</span>
                        </Link>
                      </div>

                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Interactive Symptoms Guidance Tool */}
          <div className="mt-16">
            <ScrollReveal animation="fade-up" duration={700}>
              <SymptomGuide />
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* SECTION B: NON-SCOPE OF SERVICES (Services Not Available) */}
      <section id="non-scope" className="section bg-[#FFF8F6] border-t-2 border-[#FED7AA] scroll-mt-20">
        <div className="container">
          
          {/* Statutory Notice Banner */}
          <ScrollReveal animation="fade-up" duration={700}>
            <div className="bg-white border-2 border-[#FDBA74] rounded-3xl p-6 sm:p-10 shadow-md mb-10">
              
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-orange-100 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF5EE] text-[#C2410C] flex items-center justify-center flex-shrink-0 border border-[#FDBA74]">
                    <ShieldAlert size={28} />
                  </div>
                  <div>
                    <div className="inline-flex flex-wrap items-center gap-2 mb-1">
                      <span className="badge badge-alert font-mono">
                        NON-SCOPE OF SERVICES
                      </span>
                      <span className="badge-telugu bg-orange-100 text-[#C2410C] border border-[#FED7AA]">
                        లభించని వైద్య సేవలు
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#9A3412]">
                      Services Not Available at This Facility
                    </h2>
                  </div>
                </div>

                <div className="text-xs text-[#9A3412] bg-[#FFF5EE] p-3 rounded-xl border border-[#FED7AA] max-w-sm">
                  <strong>Patient Transparency Notice:</strong> For regulatory compliance and patient safety, the following 3 specialized ophthalmic services are not provided at RV Superspeciality Eye Care.
                </div>
              </div>

              {/* Explanatory description */}
              <p className="text-sm text-gray-700 leading-relaxed mb-8">
                In strict accordance with our clinical scope disclosures, we do not perform, market, or admit patients for the treatments listed below. If your initial diagnostic evaluation identifies the need for any of these non-scope tertiary services, our senior consultants will provide emergency stabilization and formal clinical referral guidance to authorized tertiary centres and accredited institutions.
              </p>

              {/* 3 Non-Scope Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {nonScopeServices.map((item, idx) => (
                  <ScrollReveal key={item.id} animation="fade-up" delay={idx * 100}>
                    <div className="p-6 rounded-2xl bg-[#FFFDFB] border-2 border-orange-200/80 shadow-xs flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold font-mono text-[#C2410C] bg-orange-100/70 px-2 py-0.5 rounded">
                            Non-Scope #{idx + 1}
                          </span>
                          <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                            Not Available
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-[#7C2D12] mt-1 mb-0.5">
                          {item.title}
                        </h3>
                        <div className="text-xs font-telugu font-semibold text-[#C2410C] mb-3">
                          {item.teluguTitle}
                        </div>

                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-orange-100">
                        <span className="text-[11px] font-semibold text-gray-500 block">
                          Scope Category:
                        </span>
                        <span className="text-xs font-bold text-[#9A3412]">
                          {item.reasonNotice}
                        </span>
                        <div className="mt-2 text-[11px] text-gray-400 italic">
                          &times; No online booking or admissions permitted
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Informational Guidance Alert */}
              <div className="mt-8 p-4 rounded-xl bg-[#F8FAFD] border border-[#CBD5E1] flex items-start gap-3">
                <Info size={18} className="text-[#142F80] flex-shrink-0 mt-0.5" />
                <div className="text-xs text-gray-700 leading-relaxed">
                  <strong>Need Assistance or Clarification?</strong> If you are unsure whether your visual complaint falls under our available Scope of Services (General Check-up, Cataract, Cornea, Glaucoma, Medical Retina, or Opticals), please contact our hospital front desk for immediate assistance.
                </div>
              </div>

            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* POPUP MODAL: Detailed Clinical View for an Available Service */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 sm:p-6 animate-fadeIn"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-gray-200 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="pr-10 mb-6">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="badge badge-navy">AVAILABLE CLINICAL SERVICE</span>
                <span className="text-xs font-telugu font-semibold px-2 py-0.5 rounded bg-orange-50 text-[#F36B16]">
                  {selectedService.teluguTitle}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#142F80]">
                {selectedService.title}
              </h3>
            </div>

            {/* Overview */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-[#142F80] uppercase tracking-wider mb-2">
                Service Overview
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                {selectedService.overview}
              </p>
            </div>

            {/* Key Clinical Protocols */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-[#142F80] uppercase tracking-wider mb-2">
                Key Diagnostic & Clinical Protocols
              </h4>
              <div className="space-y-2">
                {selectedService.keyHighlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 size={16} className="text-[#F36B16] flex-shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Who Should Visit */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-[#142F80] uppercase tracking-wider mb-2">
                When to Schedule This Consultation
              </h4>
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-gray-700">
                {selectedService.whoShouldVisit.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Preparation */}
            <div className="p-4 rounded-xl bg-[#F3F6FC] border border-[#CBD9F5] mb-6 text-xs text-gray-700">
              <strong className="text-[#142F80] block mb-1">Patient Preparation Tip:</strong>
              {selectedService.preparation}
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="btn btn-outline-navy btn-sm"
              >
                Close Details
              </button>

              <Link
                to={`/appointment?service=${selectedService.id}`}
                className="btn btn-primary btn-sm"
                onClick={() => setSelectedService(null)}
              >
                <Calendar size={15} />
                <span>Book Consultation for {selectedService.title}</span>
              </Link>
            </div>

          </div>
        </div>
      )}

      {/* POPUP MODAL: View Original Hospital Scope Poster */}
      {showPosterModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4 sm:p-6 animate-fadeIn"
          onClick={() => setShowPosterModal(false)}
        >
          <div 
            className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowPosterModal(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600"
            >
              <X size={20} />
            </button>

            <h3 className="text-lg font-bold text-[#142F80] mb-1">
              Official Hospital Scope Poster Reference
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              Original on-premise notice defining Scope and Non-Scope services.
            </p>

            <div className="rounded-xl overflow-hidden border border-gray-200">
              <img 
                src="/rv-services-poster.jpg" 
                alt="RV Superspeciality Eye Care Scope of Services Poster" 
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={() => setShowPosterModal(false)}
                className="btn btn-navy btn-sm w-full"
              >
                Close Reference
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
