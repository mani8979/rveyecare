import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ 
  images, 
  currentIndex, 
  isOpen, 
  onClose, 
  onPrev, 
  onNext 
}) {
  // Handle keyboard events (Escape, Left, Right)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      {/* Top Controls Bar */}
      <div 
        className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-white/20">
            {currentImage.title}
          </span>
          <span className="text-xs text-gray-300">
            {currentIndex + 1} of {images.length}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          aria-label="Close Lightbox"
        >
          <X size={24} />
        </button>
      </div>

      {/* Main Image Container */}
      <div 
        className="relative max-w-4xl max-h-[80vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage.image}
          alt={currentImage.title}
          decoding="async"
          className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
        />

        {/* Caption */}
        <div className="mt-3 text-center max-w-xl">
          <h4 className="text-white font-bold text-lg">{currentImage.title}</h4>
        </div>
      </div>

      {/* Left Navigation Arrow */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#F36B16] text-white flex items-center justify-center transition-all z-20"
        aria-label="Previous image"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right Navigation Arrow */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#F36B16] text-white flex items-center justify-center transition-all z-20"
        aria-label="Next image"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
}

