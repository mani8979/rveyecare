import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * TopBar Component - Information banner above main navigation
 * Contains editable contact info placeholders, timings, and quick links
 */
export default function TopBar() {
  return (
    <div className="bg-[#0B1C4D] text-white text-xs border-b border-[#1E3A8A]/40 hidden md:block">
      <div className="container flex items-center justify-between py-2">
        {/* Left: Contact Details & Working Hours */}
        <div className="flex items-center gap-6 text-gray-200">
          <div className="flex items-center gap-2">
            <Phone size={13} className="text-[#F36B16]" />
            <span>Emergency / Helpline:</span>
            <a 
              href="tel:+919876543210" 
              className="text-white font-medium hover:text-[#F36B16] transition-colors"
            >
              +91 98765 43210 <span className="text-gray-400 text-[11px]">(Placeholder)</span>
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Clock size={13} className="text-[#F36B16]" />
            <span>Mon – Sat: 9:00 AM – 7:30 PM | Sun: 9:00 AM – 1:00 PM</span>
          </div>
        </div>

        {/* Right: Location & Quick Services Notice */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1.5 text-gray-300">
            <MapPin size={13} className="text-[#F36B16]" />
            <span>[Hospital Address / City Placeholder]</span>
          </div>

          <div className="h-3 w-[1px] bg-blue-900/80" />

          <Link 
            to="/services" 
            className="text-[#F36B16] hover:underline font-semibold flex items-center gap-1 text-[11.5px]"
          >
            <span>Scope of Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

