import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowLeft, 
  Calendar, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  ShieldCheck, 
  Info, 
  Eye, 
  Sun, 
  Sparkles, 
  Activity, 
  Glasses,
  ChevronRight
} from 'lucide-react';
import { availableServices, nonScopeServices } from '../data/services';
import ScrollReveal from '../components/ScrollReveal';

const iconMap = {
  Eye: Eye,
  Sun: Sun,
  Sparkles: Sparkles,
  Activity: Activity,
  ShieldCheck: ShieldCheck,
  Glasses: Glasses
};

export default function ServiceDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find matching service by slug or id
  const service = availableServices.find(
    (s) => s.slug === slug || s.id === slug
  );

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-white">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-2xl bg-orange-50 text-[#F36B16] flex items-center justify-center mx-auto mb-4">
            <AlertCircle size={32} />
          </div>
          <h2 className="text-2xl font-bold text-[#142F80] mb-2">Service Not Found</h2>
          <p className="text-sm text-gray-600 mb-6">
            The requested ophthalmic service could not be located in our official hospital catalogue.
          </p>
          <Link to="/services" className="btn btn-primary inline-flex items-center gap-2">
            <ArrowLeft size={16} />
            <span>Return to Services Directory</span>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[service.iconName] || Eye;
  const otherServices = availableServices.filter((s) => s.id !== service.id);

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-[#0B1C4D] via-[#142F80] to-[#1E3A8A] text-white pt-12 pb-16 relative overflow-hidden">
        {/* Background decorative aura */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F36B16]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center flex-wrap gap-2 text-xs text-blue-200">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li><ChevronRight size={13} className="text-blue-300/60" /></li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li><ChevronRight size={13} className="text-blue-300/60" /></li>
              <li className="text-[#F36B16] font-semibold">{service.title}</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            {/* Category Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 mb-4 text-xs font-semibold text-orange-200">
              <IconComponent size={14} className="text-[#F36B16]" />
              <span>RV Scope of Services &bull; Super-Speciality Eye Care</span>
            </div>

            <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight mb-4">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-blue-100 leading-relaxed mb-8 max-w-2xl">
              {service.shortDescription}
            </p>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                to={`/appointment?service=${service.id}`}
                className="btn btn-primary btn-lg shadow-lg hover:shadow-orange justify-center"
              >
                <Calendar size={18} />
                <span>Book Appointment for {service.title}</span>
              </Link>

              <a
                href="tel:+918523815336"
                className="btn btn-outline-white btn-lg justify-center"
              >
                <Phone size={16} />
                <span>Call Helpline: +91 85238 15336</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="section bg-[#F8FAFD]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left 8 Cols: Detailed Medical Information */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Authentic Service Photograph */}
              <ScrollReveal animation="fade-up" duration={600}>
                <div className="card bg-white p-3 sm:p-4 rounded-3xl border border-[#E3E9F4] shadow-sm overflow-hidden">
                  <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden bg-gray-100">
                    <img
                      src={service.image}
                      alt={`${service.title} - Clinical Consultation`}
                      width={800}
                      height={400}
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                      <span className="font-semibold bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
                        RV Superspeciality Eye Care &bull; Clinical Unit
                      </span>
                      <span className="bg-[#142F80] px-3 py-1.5 rounded-full font-bold">
                        Pendurthi, Visakhapatnam
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Clinical Overview */}
              <ScrollReveal animation="fade-up" duration={650}>
                <div className="card bg-white p-6 sm:p-8 rounded-3xl border border-[#E3E9F4] shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#142F80] uppercase tracking-wider mb-2">
                    <Info size={16} className="text-[#F36B16]" />
                    <span>Clinical Overview</span>
                  </div>
                  <h2 className="text-2xl font-bold text-[#142F80] mb-4">
                    About {service.title}
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {service.overview}
                  </p>
                </div>
              </ScrollReveal>

              {/* Key Diagnostic Procedures & Highlights */}
              {service.keyHighlights && service.keyHighlights.length > 0 && (
                <ScrollReveal animation="fade-up" duration={700}>
                  <div className="card bg-white p-6 sm:p-8 rounded-3xl border border-[#E3E9F4] shadow-xs">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#142F80] uppercase tracking-wider mb-2">
                      <CheckCircle2 size={16} className="text-[#F36B16]" />
                      <span>Diagnostic Focus</span>
                    </div>
                    <h2 className="text-2xl font-bold text-[#142F80] mb-5">
                      Key Clinical Highlights & Facilities
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {service.keyHighlights.map((highlight, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8FAFD] border border-[#CBD9F5]/60"
                        >
                          <CheckCircle2 size={18} className="text-[#F36B16] flex-shrink-0 mt-0.5" />
                          <span className="text-sm font-semibold text-gray-800 leading-snug">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* Who Needs This Consultation */}
              {service.whoShouldVisit && service.whoShouldVisit.length > 0 && (
                <ScrollReveal animation="fade-up" duration={750}>
                  <div className="card bg-white p-6 sm:p-8 rounded-3xl border border-[#E3E9F4] shadow-xs">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#142F80] uppercase tracking-wider mb-2">
                      <AlertCircle size={16} className="text-[#F36B16]" />
                      <span>Patient Advisory</span>
                    </div>
                    <h2 className="text-2xl font-bold text-[#142F80] mb-5">
                      Who Should Schedule This Consultation?
                    </h2>
                    <ul className="space-y-3">
                      {service.whoShouldVisit.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                          <span className="w-5 h-5 rounded-full bg-orange-100 text-[#F36B16] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              )}

              {/* Patient Preparation Instructions */}
              {service.preparation && (
                <ScrollReveal animation="fade-up" duration={800}>
                  <div className="card bg-[#EDF3FC] p-6 sm:p-8 rounded-3xl border border-[#CBD9F5]">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#142F80] uppercase tracking-wider mb-2">
                      <Clock size={16} className="text-[#F36B16]" />
                      <span>Before Your Visit</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#142F80] mb-3">
                      Patient Preparation Guidelines
                    </h3>
                    <p className="text-sm sm:text-base text-gray-800 leading-relaxed mb-4">
                      {service.preparation}
                    </p>
                    <div className="text-xs text-gray-500 font-medium">
                      Need clarification before arriving? Reach our desk at{' '}
                      <a href="tel:+918523815336" className="text-[#142F80] font-bold underline">
                        +91 85238 15336
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* Bottom Consultation Booking Action */}
              <div className="card bg-gradient-to-r from-[#142F80] to-[#1E3A8A] text-white p-7 sm:p-8 rounded-3xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-1">
                    Ready to Consult for {service.title}?
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-100">
                    Book your consultation slot with RV Superspeciality Eye Care today.
                  </p>
                </div>
                <Link
                  to={`/appointment?service=${service.id}`}
                  className="btn btn-primary btn-lg shadow-md hover:shadow-orange flex-shrink-0 w-full sm:w-auto justify-center"
                >
                  <Calendar size={18} />
                  <span>Book Appointment</span>
                </Link>
              </div>

            </div>

            {/* Right 4 Cols: Sidebar Widgets */}
            <aside className="lg:col-span-4 space-y-6">
              
              {/* Quick Consultation Card */}
              <div className="card bg-white p-6 rounded-3xl border border-[#E3E9F4] shadow-xs">
                <span className="badge badge-navy text-[10px] mb-3">
                  CLINIC DETAILS
                </span>
                <h4 className="text-lg font-bold text-[#142F80] mb-4">
                  Hospital Consultation Info
                </h4>

                <div className="space-y-4 text-xs text-gray-700">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-[#F36B16] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-gray-900">Hospital Location:</strong>
                      <span>RV Superspeciality Eye Care</span><br />
                      <span>Araku - Srungavarapukota Road, Ratnagiri Nagar,</span><br />
                      <span>Pendurthi, Visakhapatnam – 530051</span><br />
                      <a
                        href="https://www.google.com/maps/place/RV+SUPERSPECIALITY+EYE+CARE/@17.8033596,83.2092257,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3967437b24e9bb:0x98714ec42492ed93!8m2!3d17.8033596!4d83.2092257!16s%2Fg%2F11syxd8sfs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F36B16] font-bold hover:underline inline-block mt-1"
                      >
                        Open in Google Maps &rarr;
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-gray-100">
                    <Clock size={16} className="text-[#F36B16] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-gray-900">Consultation Timings:</strong>
                      <span>Monday – Saturday: 9:00 AM – 7:30 PM</span><br />
                      <span>Sunday: 9:00 AM – 1:00 PM</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-gray-100">
                    <Phone size={16} className="text-[#F36B16] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-gray-900">Helpline / Desk:</strong>
                      <a href="tel:+918523815336" className="text-[#142F80] font-bold hover:text-[#F36B16]">
                        +91 85238 15336
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-100">
                  <Link
                    to={`/appointment?service=${service.id}`}
                    className="btn btn-primary w-full justify-center shadow-xs"
                  >
                    <span>Schedule Visit</span>
                  </Link>
                </div>
              </div>

              {/* Other Scope Services Navigation */}
              <div className="card bg-white p-6 rounded-3xl border border-[#E3E9F4] shadow-xs">
                <div className="mb-4">
                  <h4 className="text-base font-bold text-[#142F80]">
                    Other Scope Services
                  </h4>
                </div>

                <div className="space-y-1.5">
                  {otherServices.map((other) => (
                    <Link
                      key={other.id}
                      to={`/services/${other.slug}`}
                      className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-[#F3F6FC] transition-colors"
                    >
                      <span className="text-xs font-semibold text-gray-700 group-hover:text-[#F36B16] transition-colors">
                        {other.title}
                      </span>
                      <ArrowRight size={13} className="text-gray-300 group-hover:text-[#F36B16] group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100">
                  <Link
                    to="/services"
                    className="text-xs font-bold text-[#142F80] hover:text-[#F36B16] flex items-center justify-between"
                  >
                    <span>View All Services Directory</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              {/* Non-Scope Statutory Clarification Card */}
              <div className="card bg-orange-50/70 p-5 rounded-3xl border border-orange-200">
                <div className="flex items-center gap-2 text-xs font-bold text-[#C2410C] uppercase tracking-wider mb-2">
                  <AlertCircle size={15} />
                  <span>Statutory Non-Scope Notice</span>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed mb-3">
                  In compliance with transparent hospital disclosures, procedures outside our clinical scope (Eye Bank, Squint Surgery, and Vitreoretinal Surgery) are not performed on-site.
                </p>
                <Link
                  to="/services#non-scope"
                  className="text-xs font-bold text-[#C2410C] hover:text-[#9A3412] inline-flex items-center gap-1 underline"
                >
                  <span>Read Non-Scope Notice</span>
                  <ArrowRight size={12} />
                </Link>
              </div>

            </aside>

          </div>
        </div>
      </section>
    </div>
  );
}

