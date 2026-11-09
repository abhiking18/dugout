import React, { useState } from 'react';
import { CLUB_INFO, TIME_SLOTS, FACILITIES_DATA } from '../data/clubData';
import { Calendar, Clock, Users, Phone, User, MessageSquare, AlertCircle, CheckCircle, ArrowRight, Copy } from 'lucide-react';

interface BookingSectionProps {
  preselectedFacility?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ preselectedFacility }) => {
  // Today's date in YYYY-MM-DD
  const todayStr = new Date().toISOString().split('T')[0];

  const [facility, setFacility] = useState(preselectedFacility || FACILITIES_DATA[0].title);
  const [date, setDate] = useState(todayStr);
  const [slotId, setSlotId] = useState(TIME_SLOTS[7].id); // default 06:00 PM evening slot
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [playerCount, setPlayerCount] = useState('10 - 12 Players (5v5 / 6v6)');
  const [note, setNote] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const [submittedRequest, setSubmittedRequest] = useState<boolean>(false);

  // Sync if preselected facility changes externally
  React.useEffect(() => {
    if (preselectedFacility) {
      setFacility(preselectedFacility);
    }
  }, [preselectedFacility]);

  const selectedSlotObj = TIME_SLOTS.find((s) => s.id === slotId) || TIME_SLOTS[0];

  // Validate form
  const validate = () => {
    const errs: Record<string, string> = {};

    if (!name.trim()) {
      errs.name = 'Please enter your full name';
    }

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = 'Please provide a valid 10-digit phone number';
    }

    if (!date) {
      errs.date = 'Please select a date';
    } else if (date < todayStr) {
      errs.date = 'Past dates cannot be selected';
    }

    if (!slotId) {
      errs.slot = 'Please select an available time slot';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Construct message
  const constructWhatsAppMessage = () => {
    return `*DUGOUT SPORTS CLUB — SLOT BOOKING REQUEST*
----------------------------------------
• *Customer Name:* ${name.trim()}
• *Contact Number:* ${phone.trim()}
• *Facility / Ground:* ${facility}
• *Date:* ${date}
• *Requested Slot:* ${selectedSlotObj.label} (${selectedSlotObj.category})
• *Team / Players:* ${playerCount}
${note.trim() ? `• *Special Note:* ${note.trim()}\n` : ''}----------------------------------------
_Hello DUGOUT team, please verify pitch availability for this slot. Thank you!_`;
  };

  const handleRequestBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    const message = constructWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CLUB_INFO.whatsappRaw}?text=${encodedMessage}`;

    setSubmittedRequest(true);

    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyMessage = () => {
    const message = constructWhatsAppMessage();
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="booking" className="py-20 lg:py-28 bg-[#0D1016] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#FF5A1F] font-bold mb-3">
            <span className="w-5 h-[1.5px] bg-[#FF5A1F]" />
            <span>DIRECT PITCH RESERVATION</span>
            <span className="w-5 h-[1.5px] bg-[#FF5A1F]" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-tight leading-[1]">
            REQUEST YOUR SLOT
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-4">
            Select your preferred time slot up to 11:00 PM. All booking requests are processed directly via WhatsApp with the DUGOUT management team.
          </p>
        </div>

        {/* 2-Column Booking Layout: Interactive Form on Left, Real-Time Summary on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Booking Form (Span 7) */}
          <div className="lg:col-span-7 bg-[#131720] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
            <form onSubmit={handleRequestBooking} className="space-y-6" noValidate>
              {/* 1. Facility Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  1. Select Facility / Activity
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {FACILITIES_DATA.map((fac) => (
                    <button
                      key={fac.id}
                      type="button"
                      onClick={() => setFacility(fac.title)}
                      className={`text-left px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm font-medium transition-all ${
                        facility === fac.title
                          ? 'border-[#FF5A1F] bg-[#FF5A1F]/10 text-white font-semibold'
                          : 'border-white/10 bg-white/5 text-neutral-400 hover:text-white hover:border-white/20'
                      }`}
                    >
                      <div className="text-white truncate">{fac.title}</div>
                      <div className="text-[11px] text-neutral-400 truncate mt-0.5">{fac.subtitle}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Date and Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    2. Choose Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      min={todayStr}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#0B0D11] border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#FF5A1F] transition-colors"
                      required
                    />
                  </div>
                  {errors.date && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.date}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    3. Select Time Slot
                  </label>
                  <select
                    value={slotId}
                    onChange={(e) => setSlotId(e.target.value)}
                    className="w-full bg-[#0B0D11] border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#FF5A1F] transition-colors"
                  >
                    <optgroup label="Prime Evening Floodlights (Recommended)">
                      {TIME_SLOTS.filter((s) => s.category.includes('Prime')).map((slot) => (
                        <option key={slot.id} value={slot.id}>
                          {slot.label} (Floodlights)
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Late Slot (Open until 11 PM)">
                      {TIME_SLOTS.filter((s) => s.category.includes('Final')).map((slot) => (
                        <option key={slot.id} value={slot.id}>
                          {slot.label}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Morning Slots">
                      {TIME_SLOTS.filter((s) => s.category === 'Morning').map((slot) => (
                        <option key={slot.id} value={slot.id}>
                          {slot.label}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Afternoon Slots">
                      {TIME_SLOTS.filter((s) => s.category === 'Afternoon').map((slot) => (
                        <option key={slot.id} value={slot.id}>
                          {slot.label}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                  {errors.slot && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.slot}
                    </p>
                  )}
                </div>
              </div>

              {/* 3. Customer Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    4. Your Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#0B0D11] border border-white/15 rounded-lg pl-10 pr-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#FF5A1F] transition-colors"
                      required
                    />
                  </div>
                  {errors.name && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    5. Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      placeholder="e.g. 9864000151"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#0B0D11] border border-white/15 rounded-lg pl-10 pr-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#FF5A1F] transition-colors"
                      required
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* 4. Players and Notes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    6. Number of Players
                  </label>
                  <select
                    value={playerCount}
                    onChange={(e) => setPlayerCount(e.target.value)}
                    className="w-full bg-[#0B0D11] border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#FF5A1F] transition-colors"
                  >
                    <option value="10 - 12 Players (5v5 / 6v6)">10 - 12 Players (5v5 / 6v6)</option>
                    <option value="14 - 16 Players (7v7)">14 - 16 Players (7v7)</option>
                    <option value="6 - 8 Players (Casual / Practice)">6 - 8 Players (Casual / Practice)</option>
                    <option value="Tournament / Multi-Team Match">Tournament / Multi-Team Match</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    7. Additional Message (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Need match balls / bibs"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full bg-[#0B0D11] border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#FF5A1F] transition-colors"
                  />
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-lg text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-[#FF5A1F] hover:bg-[#E44810] active:scale-[0.99] transition-all shadow-xl shadow-[#FF5A1F]/20"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>REQUEST A BOOKING VIA WHATSAPP</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>

              {/* Booking Request Policy Disclaimer */}
              <div className="p-3.5 rounded-lg bg-black/40 border border-white/10 text-xs text-neutral-400 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-[#FF5A1F] shrink-0 mt-0.5" />
                <p>
                  <strong className="text-neutral-200">Request Notice:</strong> Submitting this form sends your booking request directly to DUGOUT at <span className="text-white font-mono">+91 98640 00151</span>. Your slot is confirmed only after our management team verifies turf availability and responds to you.
                </p>
              </div>
            </form>
          </div>

          {/* Booking Summary Card (Span 5) */}
          <div className="lg:col-span-5 bg-[#131720] border border-white/10 rounded-2xl p-6 sm:p-7 space-y-6 sticky top-24">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs font-mono uppercase text-[#FF5A1F] tracking-wider">Live Preview</span>
              <h3 className="font-display text-2xl font-bold uppercase text-white mt-1">
                BOOKING SUMMARY
              </h3>
              <p className="text-xs text-neutral-400">
                Review your requested match parameters before transmitting to DUGOUT.
              </p>
            </div>

            <div className="space-y-3.5 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-neutral-400 text-xs uppercase tracking-wider">Facility</span>
                <span className="text-white font-semibold text-right max-w-[200px] truncate">{facility}</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-neutral-400 text-xs uppercase tracking-wider">Date</span>
                <span className="text-white font-mono font-medium">{date || 'Select date'}</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-neutral-400 text-xs uppercase tracking-wider">Time Slot</span>
                <span className="text-[#FF5A1F] font-semibold text-right">{selectedSlotObj.label}</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-neutral-400 text-xs uppercase tracking-wider">Players</span>
                <span className="text-white text-right">{playerCount}</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-neutral-400 text-xs uppercase tracking-wider">Customer</span>
                <span className="text-white font-medium text-right">{name.trim() || '—'}</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-neutral-400 text-xs uppercase tracking-wider">Phone</span>
                <span className="text-white font-mono text-right">{phone.trim() || '—'}</span>
              </div>

              {note.trim() && (
                <div className="py-2 border-b border-white/5">
                  <span className="text-neutral-400 text-xs uppercase tracking-wider block mb-1">Note</span>
                  <span className="text-neutral-300 text-xs italic">{note}</span>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="pt-2 space-y-2.5">
              <button
                type="button"
                onClick={handleCopyMessage}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-neutral-300 border border-white/10 transition-colors"
              >
                {copied ? (
                  <>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Message Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Copy Booking Text</span>
                  </>
                )}
              </button>

              <div className="text-[11px] text-center text-neutral-500">
                DUGOUT Bhangagarh · Official WhatsApp: +91 98640 00151
              </div>
            </div>

            {submittedRequest && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-200">
                <div className="flex items-center gap-2 font-bold mb-1">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Opened!</span>
                </div>
                If the window did not open, click the copy button above and send directly to <strong className="text-white">+91 98640 00151</strong>.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
