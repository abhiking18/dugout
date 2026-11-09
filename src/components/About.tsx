import React from 'react';
import { CLUB_INFO } from '../data/clubData';
import { ArrowUpRight, ShieldCheck, Flame, Users } from 'lucide-react';

interface AboutProps {
  onBookClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onBookClick }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0B0D11] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Layout: Image on Left, Editorial on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Photographic Feature Column */}
          <div className="lg:col-span-6 relative group">
            <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-[4/3] bg-[#13171F]">
              <img
                src="/src/assets/images/about_sports_facility_1794213048746.jpg"
                alt="DUGOUT sports training grounds and modern fieldhouse facility"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Photo Caption Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-300 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-lg border border-white/10">
                <span className="font-semibold text-white">DUGOUT Facility Grounds</span>
                <span className="font-mono text-[#FF5A1F]">Bhangagarh · 781005</span>
              </div>
            </div>

            {/* Subtle corner graphic detail */}
            <div className="absolute -bottom-2 -right-2 w-24 h-24 border-r-2 border-b-2 border-[#FF5A1F]/40 rounded-br-xl -z-0 pointer-events-none" />
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="text-xs uppercase tracking-widest text-[#FF5A1F] font-bold mb-3 flex items-center gap-2">
              <span className="w-5 h-[1.5px] bg-[#FF5A1F]" />
              <span>THE DUGOUT PHILOSOPHY</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-tight leading-[1] mb-6">
              MORE THAN JUST <br />
              <span className="text-[#FF5A1F]">A GAME.</span>
            </h2>

            <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed font-normal mb-8">
              <p>
                Nestled on Shaktigarh Path in Bhangagarh, <strong className="text-white font-semibold">DUGOUT</strong> was created to give Guwahati’s athletes, local teams, and sports enthusiasts a dedicated arena where competitive passion meets premium playing standards.
              </p>
              <p className="text-neutral-400 text-sm sm:text-base">
                Whether you are organizing a high-intensity evening match under our floodlights, sharpening your touch with friends, or bringing the community together, DUGOUT offers the space, team atmosphere, and energy to play at your best until 11:00 PM every night.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 mb-8">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <Flame className="w-4 h-4 text-[#FF5A1F]" />
                  <span>Night Play</span>
                </div>
                <p className="text-xs text-neutral-400">Floodlit match slots daily until 11:00 PM.</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#FF5A1F]" />
                  <span>Quality Turf</span>
                </div>
                <p className="text-xs text-neutral-400">All-weather synthetic grass surface.</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <Users className="w-4 h-4 text-[#FF5A1F]" />
                  <span>Community</span>
                </div>
                <p className="text-xs text-neutral-400">Rated 4.6/5 by local sports enthusiasts.</p>
              </div>
            </div>

            {/* Action Link */}
            <div>
              <button
                onClick={onBookClick}
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#FF5A1F] hover:text-white transition-colors group"
              >
                <span>Reserve Your Team Slot</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
