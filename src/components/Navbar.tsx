import React, { useState, useEffect } from 'react';
import { CLUB_INFO } from '../data/clubData';
import { Menu, X, Phone, MessageSquare, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0D11]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Wordmark */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('home');
              }}
              className="group flex items-baseline gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F] rounded"
            >
              <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-wider text-white transition-colors group-hover:text-[#FF5A1F]">
                {CLUB_INFO.name}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#FF5A1F] translate-y-[-2px]"></span>
            </a>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('about');
                }}
                className="whitespace-nowrap hover:text-white transition-colors relative py-1 hover:after:w-full after:transition-all after:duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF5A1F]"
              >
                About
              </a>
              <a
                href="#facilities"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('facilities');
                }}
                className="whitespace-nowrap hover:text-white transition-colors relative py-1 hover:after:w-full after:transition-all after:duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF5A1F]"
              >
                Facilities
              </a>
              <a
                href="#gallery"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('gallery');
                }}
                className="whitespace-nowrap hover:text-white transition-colors relative py-1 hover:after:w-full after:transition-all after:duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF5A1F]"
              >
                Gallery
              </a>
              <a
                href="#reviews"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('reviews');
                }}
                className="whitespace-nowrap hover:text-white transition-colors relative py-1 hover:after:w-full after:transition-all after:duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF5A1F]"
              >
                Reviews
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('contact');
                }}
                className="whitespace-nowrap hover:text-white transition-colors relative py-1 hover:after:w-full after:transition-all after:duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF5A1F]"
              >
                Contact & Location
              </a>
            </nav>

            {/* Zone 3: Primary Action CTA */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onBookClick}
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-white bg-[#FF5A1F] hover:bg-[#E44810] active:scale-[0.98] transition-all rounded shadow-lg shadow-[#FF5A1F]/20 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF5A1F] focus-visible:ring-offset-[#0B0D11]"
              >
                BOOK NOW
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay & Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md md:hidden pt-20 px-6 pb-8 flex flex-col justify-between"
        >
          <div className="space-y-4 pt-4">
            <div className="pb-3 border-b border-white/10 flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-neutral-400">Navigation Menu</span>
              <span className="text-xs text-[#FF5A1F] font-mono">Bhangagarh · Guwahati</span>
            </div>
            <nav className="flex flex-col space-y-3">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About the Club', id: 'about' },
                { label: 'Facilities & Turf', id: 'facilities' },
                { label: 'Club Gallery', id: 'gallery' },
                { label: 'Google Rating & Reviews', id: 'reviews' },
                { label: 'Location & Directions', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="flex items-center justify-between text-left py-2.5 text-lg font-medium text-white hover:text-[#FF5A1F] transition-colors"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-neutral-500" />
                </button>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full flex items-center justify-center py-3.5 px-4 rounded text-sm font-bold tracking-wider uppercase text-white bg-[#FF5A1F] hover:bg-[#E44810] transition-colors"
            >
              BOOK YOUR SLOT
            </button>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href={`tel:${CLUB_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded bg-white/5 text-neutral-200 border border-white/10 hover:bg-white/10"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF5A1F]" />
                <span>Call Club</span>
              </a>
              <a
                href={`https://wa.me/${CLUB_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded bg-white/5 text-neutral-200 border border-white/10 hover:bg-white/10"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
