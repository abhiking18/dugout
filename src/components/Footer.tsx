import React from 'react';
import { CLUB_INFO } from '../data/clubData';
import { Phone, MapPin, Clock, ArrowUp, Instagram, Facebook, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090C] border-t border-white/10 text-neutral-400 text-xs">
      {/* Upper Footer Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Column (Span 4) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-3xl font-black tracking-wider text-white">
                {CLUB_INFO.name}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
            </div>
            <p className="text-sm text-neutral-300 font-medium">
              Premium Sports Club · Bhangagarh, Guwahati
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Your home for synthetic turf matches, late-night floodlights, and competitive sports in Assam. Open daily until 11:00 PM.
            </p>

            {/* Social media placeholders */}
            <div className="pt-2 flex items-center gap-2">
              <a
                href="#social-instagram-placeholder"
                onClick={(e) => e.preventDefault()}
                aria-label="DUGOUT Instagram"
                className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:border-[#FF5A1F] transition-colors"
                title="Instagram profile placeholder"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#social-facebook-placeholder"
                onClick={(e) => e.preventDefault()}
                aria-label="DUGOUT Facebook"
                className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:border-[#FF5A1F] transition-colors"
                title="Facebook page placeholder"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${CLUB_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DUGOUT WhatsApp"
                className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                title="Direct WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (Span 3) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Navigation
            </div>
            <ul className="space-y-2">
              {[
                { label: 'Home Arena', href: '#home' },
                { label: 'About the Club', href: '#about' },
                { label: 'Facilities & Turf', href: '#facilities' },
                { label: 'Club Gallery', href: '#gallery' },
                { label: 'Verified Reviews', href: '#reviews' },
                { label: 'Book Your Slot', href: '#booking' },
                { label: 'Location & Map', href: '#contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (Span 5) */}
          <div className="md:col-span-5 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Club Details
            </div>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5 text-neutral-300">
                <MapPin className="w-4 h-4 text-[#FF5A1F] shrink-0 mt-0.5" />
                <span>{CLUB_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5 text-neutral-300">
                <Phone className="w-4 h-4 text-[#FF5A1F] shrink-0" />
                <a href={`tel:${CLUB_INFO.phoneRaw}`} className="hover:text-white font-mono">
                  {CLUB_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-neutral-300">
                <Clock className="w-4 h-4 text-[#FF5A1F] shrink-0" />
                <span>{CLUB_INFO.operatingHours}</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#booking"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded bg-[#FF5A1F] hover:bg-[#E44810] text-white font-bold text-xs uppercase tracking-wider transition-colors"
              >
                REQUEST A MATCH SLOT
              </a>
            </div>
          </div>
        </div>

        {/* Closing Banner Line */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-wider uppercase">
            SEE YOU ON THE FIELD.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Legal and Copyright */}
        <div className="mt-6 text-[11px] text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-white/5 pt-4">
          <div>
            © {new Date().getFullYear()} DUGOUT Sports Club. All rights reserved.
          </div>
          <div className="text-neutral-400 font-mono">
            Shaktigarh Path · Bhangagarh, Guwahati 781005
          </div>
        </div>
      </div>
    </footer>
  );
};
