import React from 'react';
import { CLUB_INFO } from '../data/clubData';
import { Star, MapPin, Clock, ArrowRight } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreClick }) => {
  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Cinematic Image with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_sports_turf_1794213046282.jpg"
          alt="DUGOUT sports turf pitch under evening floodlights in Guwahati"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Deep charcoal and radial dark overlay for high contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D11] via-[#0B0D11]/75 to-[#0B0D11]/60" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0B0D11]/40 to-[#0B0D11]/90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Regional Location Label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs uppercase tracking-widest text-[#FF5A1F] font-semibold mb-4 bg-black/40 border border-[#FF5A1F]/30 rounded backdrop-blur-sm">
          <span>GUWAHATI</span>
          <span className="text-neutral-500 font-bold">•</span>
          <span>ASSAM</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-white uppercase leading-[0.92] text-balance mb-6 max-w-4xl drop-shadow-sm">
          WHERE THE GAME <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#FF5A1F]">
            COMES ALIVE.
          </span>
        </h1>

        {/* Supporting Line */}
        <p className="text-base sm:text-xl md:text-2xl text-neutral-300 font-normal tracking-wide max-w-2xl mb-8 text-balance">
          {CLUB_INFO.supportingLine}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto mb-10">
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm sm:text-base font-bold tracking-wider uppercase text-white bg-[#FF5A1F] hover:bg-[#E44810] active:scale-[0.98] transition-all rounded shadow-xl shadow-[#FF5A1F]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>BOOK YOUR SLOT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-sm sm:text-base font-semibold tracking-wide text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/15 active:scale-[0.98] transition-all rounded backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
          >
            EXPLORE DUGOUT
          </button>
        </div>

        {/* Social Proof & Rating Indicator */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 text-xs sm:text-sm text-neutral-300 bg-black/50 border border-white/10 px-5 py-2.5 rounded-lg backdrop-blur-md">
          <div className="flex items-center gap-1.5 font-semibold text-white">
            <div className="flex items-center text-amber-400">
              <Star className="w-4 h-4 fill-amber-400" />
            </div>
            <span>{CLUB_INFO.rating} / 5</span>
          </div>
          <span className="text-neutral-500 font-mono">|</span>
          <span className="text-neutral-300 font-medium">
            {CLUB_INFO.reviewCount} Google Reviews
          </span>
          <span className="hidden sm:inline text-neutral-500 font-mono">·</span>
          <span className="hidden sm:inline-flex items-center gap-1 text-neutral-400">
            <Clock className="w-3.5 h-3.5 text-[#FF5A1F]" />
            <span>Open until 11:00 PM</span>
          </span>
          <span className="hidden md:inline text-neutral-500 font-mono">·</span>
          <span className="hidden md:inline-flex items-center gap-1 text-neutral-400">
            <MapPin className="w-3.5 h-3.5 text-neutral-400" />
            <span>Bhangagarh</span>
          </span>
        </div>
      </div>

      {/* Subtle bottom edge gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0B0D11] to-transparent pointer-events-none" />
    </section>
  );
};
