import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  Phone, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  FileText,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import AppointmentForm from '../components/AppointmentForm';
import { availableServices } from '../data/services';

export default function Appointment() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  return (
    <div className="appointment-page">
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#142F80] via-[#0E2364] to-[#0A1A4A] text-white py-14 md:py-18 relative overflow-hidden">
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#F36B16] text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#F36B16]" />
            ONLINE CONSULTATION BOOKING
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Book an Eye Consultation
          </h1>

          <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-2xl mx-auto">
            Schedule an appointment with our ophthalmic specialists. Prompt consultation slots with verified scope procedures.
          </p>
        </div>
      </section>

      {/* Main Booking Section */}
      <section className="section bg-[#F8FAFD]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left 8 cols: The Form */}
            <div className="lg:col-span-8">
              <AppointmentForm preselectedService={preselectedService} />
            </div>

            {/* Right 4 cols: Guidance & Scope Transparency */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Card 1: Available Scope Summary */}
              <div className="card p-6 bg-white border border-[#E3E9F4] rounded-2xl shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold text-[#142F80] uppercase tracking-wider mb-3">
                  <ShieldCheck size={16} className="text-[#F36B16]" />
                  <span>Available Scope Services</span>
                </div>
                <p className="text-xs text-gray-500 mb-3">
                  Booking is available exclusively for these 6 verified ophthalmic treatments:
                </p>
                <ul className="space-y-2 text-xs">
                  {availableServices.map((svc) => (
                    <li key={svc.id} className="flex items-center justify-between py-1 border-b border-gray-50 last:border-0">
                      <span className="font-semibold text-gray-800">{svc.title}</span>
                      <span className="text-[11px] text-[#16803C] font-semibold">Available</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 2: Non-Scope Warning */}
              <div className="card p-5 bg-[#FFF8F6] border border-[#FED7AA] rounded-2xl">
                <div className="flex items-center gap-2 text-xs font-bold text-[#C2410C] uppercase tracking-wider mb-2">
                  <AlertCircle size={16} />
                  <span>Non-Scope Notice</span>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed mb-3">
                  The following 3 services are <strong>NOT offered</strong> at RV Superspeciality Eye Care:
                </p>
                <div className="space-y-1 text-xs text-[#9A3412] font-semibold">
                  <div>&times; Eye Bank</div>
                  <div>&times; Squint Surgery</div>
                  <div>&times; Vitreoretinal Surgery</div>
                </div>
                <div className="mt-3 pt-2 border-t border-orange-200">
                  <Link to="/services#non-scope" className="text-xs font-bold text-[#C2410C] hover:underline inline-flex items-center gap-1">
                    <span>Read Non-Scope Disclosure</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              {/* Card 3: Visit Preparation Advice */}
              <div className="card p-6 bg-white border border-[#E3E9F4] rounded-2xl shadow-xs">
                <h4 className="text-sm font-bold text-[#142F80] uppercase tracking-wider mb-3">
                  Check-up Preparation
                </h4>
                <div className="space-y-2.5 text-xs text-gray-600 leading-relaxed">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#F36B16] flex-shrink-0 mt-0.5" />
                    <span>Bring all current eyeglasses and past prescriptions.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#F36B16] flex-shrink-0 mt-0.5" />
                    <span>Pupillary dilation drops may blur near vision for 2-3 hours.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#F36B16] flex-shrink-0 mt-0.5" />
                    <span>We suggest bringing sunglasses and an accompanying family member.</span>
                  </div>
                </div>
              </div>

              {/* Card 4: Frontdesk Direct Help */}
              <div className="p-5 rounded-2xl bg-[#142F80] text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Phone size={16} className="text-[#F36B16]" />
                  <span className="text-xs font-bold uppercase tracking-wider">Need Immediate Help?</span>
                </div>
                <p className="text-xs text-blue-100 mb-3">
                  Call our hospital front desk for same-day walk-in guidance or emergency assistance.
                </p>
                <a
                  href="tel:+918523815336"
                  className="btn btn-primary btn-sm w-full font-bold justify-center"
                >
                  Call +91 85238 15336
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

