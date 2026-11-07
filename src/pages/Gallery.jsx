import React, { useState } from 'react';
import { Maximize2, Camera, Info } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Lightbox from '../components/Lightbox';
import ScrollReveal from '../components/ScrollReveal';
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

          {/* Image Grid with Staggered Scroll Fade */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((item, index) => (
              <ScrollReveal 
                key={item.id} 
                animation="fade-up" 
                delay={(index % 3) * 100}
                duration={650}
              >
                <div
                  onClick={() => openLightbox(index)}
                  className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer bg-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="badge badge-navy text-[11px] bg-white/95 text-[#142F80] shadow-xs">
                      {item.category}
                    </span>
                  </div>

                  {/* Zoom Icon Hover Effect */}
                  <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={16} />
                  </div>

                  {/* Bottom Details */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-bold leading-tight mb-1 group-hover:text-[#F36B16] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-300 line-clamp-2">
                      {item.description}
                    </p>
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
