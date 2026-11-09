import React, { useState } from 'react';
import { GALLERY_DATA, GalleryItem } from '../data/clubData';
import { Maximize2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % GALLERY_DATA.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + GALLERY_DATA.length) % GALLERY_DATA.length
      );
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#0B0D11] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#FF5A1F] font-bold mb-3 flex items-center gap-2">
              <span className="w-5 h-[1.5px] bg-[#FF5A1F]" />
              <span>VISUAL PERSPECTIVE</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-tight leading-[1]">
              PITCH & CLUB GALLERY
            </h2>
          </div>
          <p className="text-xs text-neutral-400 max-w-sm flex items-center gap-2">
            <Camera className="w-4 h-4 text-[#FF5A1F] shrink-0" />
            <span>High-grade synthetic turf, match-ready floodlights, and player dugout seating in Bhangagarh.</span>
          </p>
        </div>

        {/* Gallery Grid with Varied Aspect Ratios */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Item 1: Large Feature (Span 7) */}
          <div
            onClick={() => openLightbox(0)}
            className="md:col-span-7 group relative rounded-xl overflow-hidden cursor-pointer border border-white/10 aspect-[16/10] bg-[#13171F]"
          >
            <img
              src={GALLERY_DATA[0].image}
              alt={GALLERY_DATA[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
            
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <span className="text-xs font-mono text-[#FF5A1F] uppercase tracking-wider">
                  {GALLERY_DATA[0].category}
                </span>
                <h3 className="font-display text-2xl font-bold text-white uppercase">
                  {GALLERY_DATA[0].title}
                </h3>
                <p className="text-xs text-neutral-300 mt-1">{GALLERY_DATA[0].caption}</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-[#FF5A1F] text-white flex items-center justify-center backdrop-blur-sm transition-colors">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Item 2: Medium Feature (Span 5) */}
          <div
            onClick={() => openLightbox(1)}
            className="md:col-span-5 group relative rounded-xl overflow-hidden cursor-pointer border border-white/10 aspect-[16/10] md:aspect-auto bg-[#13171F]"
          >
            <img
              src={GALLERY_DATA[1].image}
              alt={GALLERY_DATA[1].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
            
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <span className="text-xs font-mono text-[#FF5A1F] uppercase tracking-wider">
                  {GALLERY_DATA[1].category}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase">
                  {GALLERY_DATA[1].title}
                </h3>
                <p className="text-xs text-neutral-300 mt-1">{GALLERY_DATA[1].caption}</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-[#FF5A1F] text-white flex items-center justify-center backdrop-blur-sm transition-colors">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Item 3: (Span 5) */}
          <div
            onClick={() => openLightbox(2)}
            className="md:col-span-5 group relative rounded-xl overflow-hidden cursor-pointer border border-white/10 aspect-[16/10] md:aspect-auto bg-[#13171F]"
          >
            <img
              src={GALLERY_DATA[2].image}
              alt={GALLERY_DATA[2].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
            
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <span className="text-xs font-mono text-[#FF5A1F] uppercase tracking-wider">
                  {GALLERY_DATA[2].category}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase">
                  {GALLERY_DATA[2].title}
                </h3>
                <p className="text-xs text-neutral-300 mt-1">{GALLERY_DATA[2].caption}</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-[#FF5A1F] text-white flex items-center justify-center backdrop-blur-sm transition-colors">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Item 4: (Span 7) */}
          <div
            onClick={() => openLightbox(3)}
            className="md:col-span-7 group relative rounded-xl overflow-hidden cursor-pointer border border-white/10 aspect-[16/10] bg-[#13171F]"
          >
            <img
              src={GALLERY_DATA[3].image}
              alt={GALLERY_DATA[3].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
            
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <span className="text-xs font-mono text-[#FF5A1F] uppercase tracking-wider">
                  {GALLERY_DATA[3].category}
                </span>
                <h3 className="font-display text-2xl font-bold text-white uppercase">
                  {GALLERY_DATA[3].title}
                </h3>
                <p className="text-xs text-neutral-300 mt-1">{GALLERY_DATA[3].caption}</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-[#FF5A1F] text-white flex items-center justify-center backdrop-blur-sm transition-colors">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
        >
          <button
            onClick={closeLightbox}
            aria-label="Close image lightbox"
            className="absolute top-5 right-5 z-10 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-[#FF5A1F] transition-colors border border-white/10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-[#FF5A1F] transition-colors border border-white/10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl max-h-[85vh] flex flex-col items-center"
          >
            <img
              src={GALLERY_DATA[selectedImageIndex].image}
              alt={GALLERY_DATA[selectedImageIndex].title}
              className="max-w-full max-h-[75vh] object-contain rounded-lg border border-white/10"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 text-center">
              <h4 className="font-display text-xl text-white uppercase">
                {GALLERY_DATA[selectedImageIndex].title}
              </h4>
              <p className="text-xs text-neutral-400 mt-1">
                {GALLERY_DATA[selectedImageIndex].caption} · Bhangagarh, Guwahati
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
