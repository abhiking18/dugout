import React, { useState } from 'react';
import { CLUB_INFO, REVIEWS_DATA, ReviewItem } from '../data/clubData';
import { Star, MessageCircle, ExternalLink, Edit3, X, Check } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(REVIEWS_DATA);
  const [editingReview, setEditingReview] = useState<ReviewItem | null>(null);

  const handleSaveReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingReview) return;
    setReviews((prev) =>
      prev.map((r) => (r.id === editingReview.id ? editingReview : r))
    );
    setEditingReview(null);
  };

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#0B0D11] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rating Hero Block */}
        <div className="bg-gradient-to-br from-[#131720] via-[#10141C] to-[#0D1016] border border-white/10 rounded-2xl p-8 sm:p-12 mb-14 shadow-2xl relative overflow-hidden">
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF5A1F]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#FF5A1F] font-bold">
                <span className="w-5 h-[1.5px] bg-[#FF5A1F]" />
                <span>COMMUNITY REPUTATION</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight">
                VERIFIED GOOGLE REVIEWS
              </h2>
              <p className="text-sm text-neutral-400 max-w-xl">
                Sports enthusiasts, local footballers, and weekend teams trust DUGOUT for premium turf quality, night floodlights, and reliable slot booking in Bhangagarh, Guwahati.
              </p>
            </div>

            {/* Scorecard Display */}
            <div className="flex flex-col sm:flex-row items-baseline sm:items-center gap-6 p-6 rounded-xl bg-black/50 border border-white/10 backdrop-blur-md shrink-0">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-6xl font-black text-white tracking-tight">
                  {CLUB_INFO.rating}
                </span>
                <span className="text-xl text-neutral-400 font-medium">/ 5</span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < 4 ? 'fill-amber-400' : 'fill-amber-400/50'
                      }`}
                    />
                  ))}
                </div>
                <div className="text-xs font-semibold text-neutral-200">
                  {CLUB_INFO.reviewCount} Google Reviews
                </div>
                <div className="text-[11px] text-neutral-400">
                  Bhangagarh · Guwahati, Assam
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Notice regarding Placeholders */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
          <span className="text-xs font-mono uppercase text-neutral-400">
            Player Testimonials · Editable Placeholders
          </span>
          <a
            href={CLUB_INFO.mapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[#FF5A1F] hover:text-white transition-colors"
          >
            <span>View on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#131720] border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-white/20 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400">
                    {rev.date}
                  </span>
                </div>

                <p className="text-neutral-300 text-sm leading-relaxed italic">
                  {rev.quote}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 mt-6 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">
                    {rev.authorLabel}
                  </div>
                  <div className="text-[11px] text-neutral-500">
                    Google Review Verified
                  </div>
                </div>

                <button
                  onClick={() => setEditingReview(rev)}
                  className="p-1.5 rounded text-neutral-500 hover:text-white hover:bg-white/5 transition-colors"
                  title="Edit placeholder quote"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Edit Review Modal */}
      {editingReview && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <div className="bg-[#131720] border border-white/15 rounded-xl max-w-lg w-full p-6 text-white shadow-2xl relative">
            <button
              onClick={() => setEditingReview(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-5">
              <span className="text-xs font-mono uppercase text-[#FF5A1F]">Review Customizer</span>
              <h3 className="font-display text-2xl font-bold uppercase">Update Review Placeholder</h3>
              <p className="text-xs text-neutral-400 mt-1">
                Replace with actual player quotes from your Google Business profile.
              </p>
            </div>

            <form onSubmit={handleSaveReview} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">Author Label / Name</label>
                <input
                  type="text"
                  value={editingReview.authorLabel}
                  onChange={(e) => setEditingReview({ ...editingReview, authorLabel: e.target.value })}
                  className="w-full bg-[#0B0D11] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#FF5A1F]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">Quote Text</label>
                <textarea
                  rows={4}
                  value={editingReview.quote}
                  onChange={(e) => setEditingReview({ ...editingReview, quote: e.target.value })}
                  className="w-full bg-[#0B0D11] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#FF5A1F]"
                  required
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setEditingReview(null)}
                  className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#FF5A1F] hover:bg-[#E44810] rounded"
                >
                  Save Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
