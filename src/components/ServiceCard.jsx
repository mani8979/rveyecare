import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Eye, 
  Sun, 
  Sparkles, 
  Activity, 
  ShieldCheck, 
  Glasses,
  CheckCircle2
} from 'lucide-react';

const iconMap = {
  Eye: Eye,
  Sun: Sun,
  Sparkles: Sparkles,
  Activity: Activity,
  ShieldCheck: ShieldCheck,
  Glasses: Glasses
};

export default function ServiceCard({ service }) {
  const IconComponent = iconMap[service.iconName] || Eye;

  return (
    <div className="card card-hover group flex flex-col h-full bg-white border border-[#E3E9F4] rounded-2xl overflow-hidden transition-all duration-300">
      {/* Image Thumbnail Container */}
      <div className="relative h-48 overflow-hidden bg-[#EDF3FC]">
        <img 
          src={service.image} 
          alt={`${service.title} - RV Superspeciality Eye Care`} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        
        {/* Floating Category Badge */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#142F80]/90 text-white text-xs font-semibold backdrop-blur-sm">
            <IconComponent size={13} className="text-[#F36B16]" />
            <span>Scope Service</span>
          </span>
          <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-white/95 text-[#142F80]">
            Advanced Eye Care
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* Service Title */}
          <h3 className="text-xl font-bold text-[#142F80] group-hover:text-[#F36B16] transition-colors mb-2">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {service.shortDescription}
          </p>

          {/* Key highlights bullet preview */}
          {service.keyHighlights && service.keyHighlights.length > 0 && (
            <div className="space-y-1.5 pt-3 border-t border-gray-100 mb-5">
              {service.keyHighlights.slice(0, 2).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                  <CheckCircle2 size={13} className="text-[#F36B16] flex-shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Link: "View More" linking to dedicated service detail page */}
        <div className="pt-2">
          <Link
            to={`/services/${service.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#142F80] group-hover:text-[#F36B16] transition-colors"
          >
            <span>View More</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
