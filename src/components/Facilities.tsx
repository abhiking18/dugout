import React, { useState } from 'react';
import { FACILITIES_DATA, FacilityItem } from '../data/clubData';
import { Sparkles, CheckCircle2, Calendar, Edit3, X } from 'lucide-react';

interface FacilitiesProps {
  onSelectFacilityForBooking: (facilityTitle: string) => void;
}

export const Facilities: React.FC<FacilitiesProps> = ({ onSelectFacilityForBooking }) => {
  const [facilities, setFacilities] = useState<FacilityItem[]>(FACILITIES_DATA);
  const [editingItem, setEditingItem] = useState<FacilityItem | null>(null);
  const [showOwnerHelper, setShowOwnerHelper] = useState(false);

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;
    setFacilities((prev) =>
      prev.map((item) => (item.id === editingItem.id ? editingItem : item))
    );
    setEditingItem(null);
  };

  return (
    <section id="facilities" className="py-20 lg:py-28 bg-[#0D1016] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#FF5A1F] font-bold mb-3 flex items-center gap-2">
              <span className="w-5 h-[1.5px] bg-[#FF5A1F]" />
              <span>PITCH & CLUB GROUNDS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-tight leading-[1]">
              CLUB FACILITIES
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowOwnerHelper(!showOwnerHelper)}
              className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 px-3.5 py-2 rounded border border-white/10 transition-colors"
              title="Click to view owner customization instructions"
            >
              <Edit3 className="w-3.5 h-3.5 text-[#FF5A1F]" />
              <span>Owner Note: Editable Placeholders</span>
            </button>
          </div>
        </div>

        {/* Owner Guidance Banner (Collapsible/Informative) */}
        {showOwnerHelper && (
          <div className="mb-10 p-5 rounded-xl bg-black/60 border border-[#FF5A1F]/30 text-neutral-300 text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#FF5A1F] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Owner Notice: Ready for Custom Club Specifications</p>
                <p className="text-neutral-400 text-xs mt-1">
                  These facility cards are built as modular placeholders. You can click “Customize Card” below to edit titles, descriptions, and equipment specs in real-time, or update <code className="text-[#FF5A1F] font-mono">src/data/clubData.ts</code>.
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowOwnerHelper(false)}
              className="text-xs text-neutral-400 hover:text-white underline whitespace-nowrap self-end sm:self-center"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {facilities.map((fac) => (
            <div
              key={fac.id}
              className="group bg-[#131720] border border-white/10 rounded-xl overflow-hidden hover:border-[#FF5A1F]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#181E27]">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131720] via-[#131720]/40 to-transparent" />
                  
                  {/* Subtle placeholder indicator */}
                  <div className="absolute top-3 right-3 text-[10px] uppercase font-mono tracking-wider bg-black/70 text-neutral-300 px-2.5 py-1 rounded border border-white/10 backdrop-blur-sm">
                    Verified Specification
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#FF5A1F]">
                      {fac.subtitle}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                      {fac.title}
                    </h3>
                  </div>
                </div>

                {/* Description & Specs */}
                <div className="p-5 sm:p-6 space-y-4">
                  <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                    {fac.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/5">
                    {fac.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5A1F] shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 sm:p-6 pt-0 flex items-center justify-between gap-3 border-t border-white/5 mt-4">
                <button
                  onClick={() => setEditingItem(fac)}
                  className="text-xs font-medium text-neutral-400 hover:text-white inline-flex items-center gap-1.5 transition-colors py-2"
                >
                  <Edit3 className="w-3 h-3 text-neutral-400" />
                  <span>Customize Card</span>
                </button>

                <button
                  onClick={() => onSelectFacilityForBooking(fac.title)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#FF5A1F] hover:bg-[#E44810] rounded transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book This</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Edit Modal for Owner Customization */}
      {editingItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <div className="bg-[#131720] border border-white/15 rounded-xl max-w-lg w-full p-6 text-white shadow-2xl relative">
            <button
              onClick={() => setEditingItem(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-5">
              <span className="text-xs font-mono uppercase text-[#FF5A1F]">Owner Card Customizer</span>
              <h3 className="font-display text-2xl font-bold uppercase">Edit Facility Details</h3>
              <p className="text-xs text-neutral-400 mt-1">
                Update card info to match your exact turf setup or new club offerings.
              </p>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">Facility Name</label>
                <input
                  type="text"
                  value={editingItem.title}
                  onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                  className="w-full bg-[#0B0D11] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#FF5A1F]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">Subtitle / Category</label>
                <input
                  type="text"
                  value={editingItem.subtitle}
                  onChange={(e) => setEditingItem({ ...editingItem, subtitle: e.target.value })}
                  className="w-full bg-[#0B0D11] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#FF5A1F]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">Description</label>
                <textarea
                  rows={3}
                  value={editingItem.description}
                  onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                  className="w-full bg-[#0B0D11] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#FF5A1F]"
                  required
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setEditingItem(null)}
                  className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#FF5A1F] hover:bg-[#E44810] rounded"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
