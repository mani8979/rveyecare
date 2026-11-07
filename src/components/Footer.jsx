import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube,
  AlertCircle
} from 'lucide-react';
import Logo from './Logo';
import { availableServices } from '../data/services';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1C4D] text-gray-300 pt-16 pb-8 border-t border-[#142F80]">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Hospital Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Logo variant="light" />
              <p className="mt-4 text-sm text-gray-300 leading-relaxed max-w-sm">
                RV Superspeciality Eye Care is committed to protecting and enhancing vision through advanced clinical diagnostics, modern ophthalmology treatments, and ethical, compassionate patient care.
              </p>

              {/* Scope Compliance Badge */}
              <div className="mt-5 p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                <ShieldCheck className="text-[#F36B16] flex-shrink-0 mt-0.5" size={20} />
                <div className="text-xs">
                  <span className="font-bold text-white block">Scope of Services Transparency</span>
                  <span className="text-gray-300 text-[11.5px]">
                    We maintain clear, statutory patient disclosures regarding in-house available treatments and non-scope services.
                  </span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-6">
              <span className="text-xs uppercase tracking-wider text-gray-400 font-bold block mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-2.5">
                {[
                  { name: 'Facebook', icon: Facebook, href: '#facebook' },
                  { name: 'Instagram', icon: Instagram, href: '#instagram' },
                  { name: 'YouTube', icon: Youtube, href: '#youtube' },
                  { name: 'LinkedIn', icon: Linkedin, href: '#linkedin' }
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#F36B16] text-white flex items-center justify-center transition-all duration-200"
                    aria-label={s.name}
                  >
                    <s.icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Available Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#F36B16] pl-2.5">
              Scope of Services
            </h4>
            <ul className="space-y-2 text-sm">
              {availableServices.map((svc) => (
                <li key={svc.id}>
                  <Link
                    to={`/services/${svc.slug}`}
                    className="flex items-center justify-between text-gray-300 hover:text-white hover:translate-x-1 transition-all group py-1"
                  >
                    <span className="group-hover:text-[#F36B16] transition-colors">{svc.title}</span>
                    <ArrowRight size={13} className="text-gray-500 group-hover:text-[#F36B16]" />
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/services#non-scope"
                  className="text-xs text-orange-300 hover:text-orange-200 flex items-center gap-1 font-semibold"
                >
                  <AlertCircle size={13} />
                  <span>View Non-Scope Notice</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#F36B16] pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Doctors Directory', path: '/doctors' },
                { name: 'Hospital Gallery', path: '/gallery' },
                { name: 'Eye Health Blogs', path: '/blogs' },
                { name: 'Contact & Location', path: '/contact' },
                { name: 'Book Appointment', path: '/appointment' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-1.5 text-gray-300 hover:text-[#F36B16] transition-colors py-0.5"
                  >
                    <ArrowRight size={13} className="text-[#F36B16]" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Timings (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#F36B16] pl-2.5">
              Hospital Contact
            </h4>
            
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#F36B16] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold block text-sm">Hospital Location:</span>
                  <a 
                    href="https://www.google.com/maps/place/RV+SUPERSPECIALITY+EYE+CARE/@17.8033596,83.2092257,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3967437b24e9bb:0x98714ec42492ed93!8m2!3d17.8033596!4d83.2092257!16s%2Fg%2F11syxd8sfs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-300 hover:text-[#F36B16] transition-colors leading-relaxed block mt-0.5"
                  >
                    RV Superspeciality Eye Care<br />
                    Araku - Srungavarapukota Road, Ratnagiri Nagar,<br />
                    Pendurthi, Visakhapatnam, AP – 530051
                  </a>
                  <a
                    href="https://www.google.com/maps/place/RV+SUPERSPECIALITY+EYE+CARE/@17.8033596,83.2092257,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3967437b24e9bb:0x98714ec42492ed93!8m2!3d17.8033596!4d83.2092257!16s%2Fg%2F11syxd8sfs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-[#F36B16] font-semibold hover:underline mt-1"
                  >
                    <span>Open in Google Maps &rarr;</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={18} className="text-[#F36B16] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold block">Phone / Helpline:</span>
                  <a href="tel:+918523815336" className="text-xs text-gray-200 hover:text-[#F36B16]">
                    +91 85238 15336
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} className="text-[#F36B16] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold block">Email Address:</span>
                  <a href="mailto:info@rveyecare.com" className="text-xs text-gray-200 hover:text-[#F36B16]">
                    info@rveyecare.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={18} className="text-[#F36B16] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold block">OPD Working Hours:</span>
                  <span className="text-xs text-gray-300 block">
                    Mon – Sat: 9:00 AM – 7:30 PM
                  </span>
                  <span className="text-xs text-gray-400 block">
                    Sun: 9:00 AM – 1:00 PM (Emergency on-call)
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Medical Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>
            &copy; {currentYear} <strong className="text-white">RV SUPERSPECIALITY EYE CARE</strong>. All rights reserved.
          </p>

          <p className="text-center md:text-right max-w-xl text-[11px] text-gray-400">
            Medical Disclaimer: Content on this website is for patient education and awareness only and does not constitute formal medical diagnosis. Consult an ophthalmologist for personalized medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}

