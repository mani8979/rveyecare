import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Home, Calendar, Phone, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { availableServices } from '../data/services';

export default function NotFound() {
  return (
    <div className="not-found-page py-20 bg-[#F8FAFD] flex-1 flex items-center justify-center">
      <div className="container max-w-2xl text-center">
        <div className="w-20 h-20 rounded-3xl bg-[#EDF3FC] text-[#142F80] flex items-center justify-center mx-auto mb-6 shadow-sm border border-[#CBD9F5]">
          <Eye size={42} className="text-[#F36B16]" />
        </div>

        <span className="badge badge-orange font-mono text-xs mb-3">
          Error 404
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111B33] mb-3">
          Page Not Found
        </h1>

        <p className="text-base text-gray-600 max-w-md mx-auto mb-8">
          The page you are looking for might have been moved, renamed, or is unavailable. Please explore our hospital scope services below.
        </p>

        {/* Quick Links */}
        <div className="p-6 rounded-2xl bg-white border border-[#E3E9F4] shadow-sm mb-8 text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-3">
            Available Scope of Services:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            {availableServices.map((svc) => (
              <Link
                key={svc.id}
                to={`/services/${svc.slug}`}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-[#F3F6FC] text-[#142F80] hover:text-[#F36B16] transition-colors"
              >
                <span>{svc.title}</span>
                <span className="text-xs text-gray-400">Available</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mx-auto">
          <Link to="/" className="btn btn-primary w-full sm:w-auto justify-center">
            <Home size={17} />
            <span>Return to Homepage</span>
          </Link>

          <Link to="/contact" className="btn btn-outline-navy w-full sm:w-auto justify-center">
            <Phone size={17} />
            <span>Contact Helpdesk</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

