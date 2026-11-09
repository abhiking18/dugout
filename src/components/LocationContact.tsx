import React from 'react';
import { CLUB_INFO } from '../data/clubData';
import { MapPin, Phone, Clock, Navigation, MessageSquare, Copy, Check } from 'lucide-react';

export const LocationContact: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = React.useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${CLUB_INFO.name}, ${CLUB_INFO.address}`);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0D1016] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#FF5A1F] font-bold mb-3">
            <span className="w-5 h-[1.5px] bg-[#FF5A1F]" />
            <span>GROUND LOCATION & DIRECT CONTACT</span>
            <span className="w-5 h-[1.5px] bg-[#FF5A1F]" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-tight leading-[1]">
            FIND YOUR WAY TO DUGOUT.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-4">
            Conveniently situated in Bhangagarh, Guwahati. Easily accessible with dedicated player parking and late evening access until 11:00 PM.
          </p>
        </div>

        {/* Grid: Details on Left, Embedded Interactive Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Business Info & Action Hub (Span 5) */}
          <div className="lg:col-span-5 bg-[#131720] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase text-[#FF5A1F] tracking-wider">
                  Sports Club & Turf Arena
                </span>
                <h3 className="font-display text-3xl font-extrabold text-white uppercase mt-1">
                  {CLUB_INFO.name}
                </h3>
              </div>

              {/* Address Block */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#0B0D11] border border-white/5">
                <MapPin className="w-5 h-5 text-[#FF5A1F] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="text-xs uppercase font-bold text-neutral-400 tracking-wider">Address</div>
                  <p className="text-white text-sm font-medium leading-relaxed">
                    {CLUB_INFO.address}
                  </p>
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white pt-1 transition-colors"
                  >
                    {copiedAddress ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Address Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Full Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone Block */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#0B0D11] border border-white/5">
                <Phone className="w-5 h-5 text-[#FF5A1F] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="text-xs uppercase font-bold text-neutral-400 tracking-wider">Club Phone</div>
                  <a
                    href={`tel:${CLUB_INFO.phoneRaw}`}
                    className="text-white font-mono text-base font-semibold hover:text-[#FF5A1F] transition-colors block"
                  >
                    {CLUB_INFO.phoneDisplay}
                  </a>
                  <p className="text-[11px] text-neutral-400">Available for slot inquiries & match coordination.</p>
                </div>
              </div>

              {/* Hours Block */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#0B0D11] border border-white/5">
                <Clock className="w-5 h-5 text-[#FF5A1F] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="text-xs uppercase font-bold text-neutral-400 tracking-wider">Operating Schedule</div>
                  <p className="text-white text-sm font-semibold">
                    {CLUB_INFO.operatingHours}
                  </p>
                  <p className="text-[11px] text-neutral-400">
                    Open daily for morning practice and late-night floodlit matches.
                  </p>
                </div>
              </div>
            </div>

            {/* Triad of Action Buttons */}
            <div className="pt-6 border-t border-white/10 mt-6 space-y-2.5">
              <a
                href={CLUB_INFO.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#FF5A1F] hover:bg-[#E44810] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-[#FF5A1F]/20"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS ON GOOGLE MAPS</span>
              </a>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={`tel:${CLUB_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs tracking-wide transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#FF5A1F]" />
                  <span>CALL NOW</span>
                </a>

                <a
                  href={`https://wa.me/${CLUB_INFO.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-emerald-300 font-semibold text-xs tracking-wide transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>WHATSAPP</span>
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps Embed (Span 7) */}
          <div className="lg:col-span-7 bg-[#131720] border border-white/10 rounded-2xl overflow-hidden shadow-xl min-h-[380px] lg:min-h-full relative flex flex-col">
            <div className="p-4 bg-[#10141C] border-b border-white/10 flex items-center justify-between text-xs text-neutral-300">
              <div className="flex items-center gap-2 font-mono">
                <MapPin className="w-3.5 h-3.5 text-[#FF5A1F]" />
                <span>Bhangagarh · Guwahati 781005</span>
              </div>
              <span className="text-neutral-500 font-mono text-[11px]">Assam, India</span>
            </div>

            <div className="relative flex-1 w-full min-h-[320px] bg-[#0B0D11]">
              <iframe
                title="DUGOUT Location Map in Bhangagarh Guwahati"
                src={CLUB_INFO.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '360px', filter: 'invert(90%) hue-rotate(180deg) contrast(1.15) brightness(0.85)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
