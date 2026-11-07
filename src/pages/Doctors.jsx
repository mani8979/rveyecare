import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Calendar, 
  Clock, 
  Award, 
  CheckCircle2, 
  Languages, 
  ShieldCheck, 
  ArrowRight,
  Info
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { doctorsData, doctorSpecialities } from '../data/doctors';

export default function Doctors() {
  const [selectedSpeciality, setSelectedSpeciality] = useState('All Specialities');

  const filteredDoctors = selectedSpeciality === 'All Specialities'
    ? doctorsData
    : doctorsData.filter(d => d.specialisation.toLowerCase().includes(selectedSpeciality.toLowerCase()));

  return (
    <div className="doctors-page overflow-hidden">
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#142F80] via-[#0E2364] to-[#0A1A4A] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <ScrollReveal animation="fade-up" duration={600}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#F36B16] text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#F36B16]" />
              OPHTHALMIC FACULTY & SPECIALISTS
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
              Our Medical Specialists
            </h1>

            <div className="text-xl font-telugu text-[#F36B16] font-semibold mb-4">
              కంటి వైద్య నిపుణులు
            </div>

            <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-2xl mx-auto">
              Experienced ophthalmic clinicians dedicated to accurate diagnosis, patient education, and compassionate treatment across all 6 core scope disciplines.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-[#F8FAFD]">
        <div className="container">
          
          {/* Informational Disclaimer Banner */}
          <ScrollReveal animation="fade-up" duration={600}>
            <div className="p-4 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] flex items-start gap-3 max-w-4xl mx-auto mb-10 shadow-xs">
              <Info size={20} className="text-[#D97706] flex-shrink-0 mt-0.5" />
              <div className="text-xs text-[#92400E] leading-relaxed">
                <strong>Hospital Administration Notice:</strong> The doctor profiles listed below represent standardized clinical placeholders. Exact doctor credentials, names, and consultation slots will be synchronized directly with RV Superspeciality Eye Care's official administrative roster upon final deployment.
              </div>
            </div>
          </ScrollReveal>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {doctorSpecialities.map((spec) => (
              <button
                key={spec}
                type="button"
                onClick={() => setSelectedSpeciality(spec)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedSpeciality === spec
                    ? 'bg-[#142F80] text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-[#EDF3FC] border border-[#E3E9F4]'
                }`}
              >
                {spec}
              </button>
            ))}
          </div>

          {/* Doctors Grid with Staggered Scroll Fade */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {filteredDoctors.map((doc, idx) => (
              <ScrollReveal key={doc.id} animation="fade-up" delay={idx * 120} duration={650}>
                <div className="card card-hover bg-white border border-[#E3E9F4] rounded-3xl overflow-hidden flex flex-col justify-between h-full">
                  <div>
                    {/* Top Doctor Profile Header */}
                    <div className="p-6 sm:p-7 flex flex-col sm:flex-row gap-5 items-start sm:items-center border-b border-gray-100">
                      <img 
                        src={doc.image} 
                        alt={doc.name} 
                        className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover object-top border-2 border-[#142F80]/15 shadow-sm flex-shrink-0"
                      />

                      <div>
                        <span className="badge badge-orange text-[10px] mb-2 font-mono">
                          Verified Scope Specialist
                        </span>
                        <h3 className="text-xl font-extrabold text-[#142F80] leading-tight">
                          {doc.name}
                        </h3>
                        <p className="text-xs text-[#F36B16] font-bold mt-0.5">
                          {doc.designation}
                        </p>
                        <p className="text-xs text-gray-500 mt-1 font-mono">
                          {doc.qualifications}
                        </p>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-6 sm:p-7 space-y-4">
                      
                      {/* Speciality & Experience */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-[#F8FAFD] p-3.5 rounded-xl border border-gray-100">
                        <div>
                          <span className="text-gray-400 block font-semibold">Specialisation:</span>
                          <strong className="text-gray-800">{doc.specialisation}</strong>
                        </div>
                        <div>
                          <span className="text-gray-400 block font-semibold">Clinical Experience:</span>
                          <strong className="text-gray-800">{doc.experience}</strong>
                        </div>
                      </div>

                      {/* Bio */}
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {doc.bio}
                      </p>

                      {/* Areas of Focus */}
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">
                          Clinical Focus:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-gray-700">
                          {doc.areasOfFocus.map((focus, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-1.5">
                              <CheckCircle2 size={13} className="text-[#F36B16] flex-shrink-0" />
                              <span className="line-clamp-1">{focus}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Consultation Schedule & Languages */}
                      <div className="space-y-1.5 pt-3 border-t border-gray-100 text-xs text-gray-600">
                        <div className="flex items-center gap-2">
                          <Clock size={14} className="text-[#142F80] flex-shrink-0" />
                          <span><strong>OPD Timings:</strong> {doc.timings}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Languages size={14} className="text-[#142F80] flex-shrink-0" />
                          <span><strong>Languages:</strong> {doc.languages}</span>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="p-6 sm:p-7 pt-0">
                    <Link
                      to="/appointment"
                      className="btn btn-primary w-full py-2.5 shadow-sm hover:shadow-orange"
                    >
                      <Calendar size={16} />
                      <span>Book Consultation</span>
                    </Link>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
