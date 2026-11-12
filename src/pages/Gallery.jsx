import React, { useState } from 'react';
import { Maximize2, Camera, Info } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Lightbox from '../components/Lightbox';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';
import { galleryImages, galleryCategories } from '../data/gallery';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Filter images by active category
  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="gallery-page overflow-hidden">
      <SEO
        title="Hospital Facilities & Diagnostic Gallery | Pendurthi, Vizag"
        description="View photographs of RV Superspeciality Eye Care facilities in Pendurthi: modern slit-lamp examination suites, consultation rooms, and optical centre."
        path="/gallery"
      />
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#142F80] via-[#0E2364] to-[#0A1A4A] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <ScrollReveal animation="fade-up" duration={600}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#F36B16] text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#F36B16]" />
              FACILITY & INFRASTRUCTURE
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Hospital Photo Gallery
            </h1>

            <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-2xl mx-auto">
              Explore our consultation suites, modern diagnostic rooms, patient reception, and dedicated optical care dispensing unit.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Gallery Grid Section */}
      <section className="section bg-[#F8FAFD]">
        <div className="container">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-[#142F80] text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-[#EDF3FC] border border-[#E3E9F4]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid with Staggered Scroll Fade: 2 columns on mobile (side by side), 3 on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2.5 sm:gap-4 md:gap-6">
            {filteredImages.map((item, index) => (
              <ScrollReveal 
                key={item.id} 
                animation="fade-up" 
                delay={(index % 3) * 60}
                duration={500}
              >
                <div
                  onClick={() => openLightbox(index)}
                  className="group relative h-40 sm:h-56 md:h-64 rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer bg-gray-100 shadow-xs hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={288}
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Subtle Vignette Overlay for Clear Badge Visibility */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/20 opacity-70 group-hover:opacity-85 transition-opacity" />

                  {/* Top-Left Name Badge: Compact, refined & perfectly placed without dominating mobile cards */}
                  <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 z-20 max-w-[92%] pointer-events-none">
                    <span className="inline-flex items-center px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg bg-white/95 text-[#142F80] text-[9.5px] sm:text-xs md:text-[13px] font-bold tracking-tight sm:tracking-normal shadow-xs border border-white/60 backdrop-blur-xs group-hover:bg-[#F36B16] group-hover:text-white transition-colors duration-200">
                      {item.title}
                    </span>
                  </div>

                  {/* Zoom Icon Hover Effect on Top-Right */}
                  <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-black/40 text-white hidden sm:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 shadow-md">
                    <Maximize2 size={13} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Interactive Lightbox Component */}
          <Lightbox
            images={filteredImages}
            currentIndex={lightboxIndex}
            isOpen={isLightboxOpen}
            onClose={() => setIsLightboxOpen(false)}
            onPrev={handlePrev}
            onNext={handleNext}
          />

        </div>
      </section>

    </div>
  );
}
