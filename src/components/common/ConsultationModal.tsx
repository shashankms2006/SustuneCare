import React, { useState, useEffect } from 'react';
import { X, MessageSquare, CheckCircle, Shield, Building2, HeartHandshake, Clock } from 'lucide-react';
import { IndianCity, ServiceDivision } from '../../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultInterest?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultInterest = 'bundle',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nriCountry, setNriCountry] = useState('USA');
  const [city, setCity] = useState<IndianCity>('Bengaluru');
  const [division, setDivision] = useState<ServiceDivision>(
    (defaultInterest as ServiceDivision) || 'bundle'
  );
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Body scroll lock & ESC key listener
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppLink = () => {
    const text = `Hi Sustune Care NRI Desk,
My name is ${name || 'an NRI'}.
Resident Country: ${nriCountry}
Target City in India: ${city}
Interested Division: ${division.toUpperCase()}
Phone: ${phone}
Email: ${email}
Notes: ${notes || 'Looking to discuss asset stewardship / parent care options.'}`;

    return `https://wa.me/918007878863?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true"></div>

      <div className="relative z-10 w-full max-w-xl bg-slate-900/95 text-slate-100 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.7)] border border-white/10 overflow-hidden my-8 backdrop-blur-xl">
        {/* Top accent bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-cyan-500 via-[#C99738] to-emerald-500"></div>

        {/* Modal Header */}
        <div className="bg-slate-900/90 text-white p-6 sm:p-7 relative border-b border-white/5">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-slate-400 hover:text-white p-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#C99738] shadow-[0_0_8px_rgba(201,151,56,0.8)]"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#C99738]">
              Confidential NRI Consultation
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-white">
            Schedule Your Dual-Shield Briefing
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 font-light">
            Connect with a dedicated NRI Care Director aligned to your overseas time zone. Zero obligation.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-500/15 border border-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.25)]">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-white font-heading">
                Consultation Request Received!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed font-light">
                Thank you, <strong className="text-white">{name}</strong>. Our NRI Stewardship Director for <strong className="text-cyan-400">{city}</strong> has been notified and will reach out via WhatsApp &amp; Email within 4 hours.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant Connect on WhatsApp Desk</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-5 py-3 rounded-xl font-semibold text-xs text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Division Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Select Scope of Stewardship
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setDivision('bundle')}
                    className={`py-2.5 px-2 rounded-xl text-xs font-bold flex flex-col items-center gap-1.5 border transition-all cursor-pointer ${
                      division === 'bundle'
                        ? 'border-[#C99738] bg-[#C99738]/20 text-amber-200 shadow-[0_0_15px_rgba(201,151,56,0.2)]'
                        : 'border-white/10 bg-white/[0.03] text-slate-400 hover:bg-white/[0.07] hover:text-slate-200'
                    }`}
                  >
                    <Shield className={`w-4 h-4 ${division === 'bundle' ? 'text-amber-400' : 'text-slate-400'}`} />
                    <span className="text-[11px]">Dual-Shield Bundle</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDivision('aegis')}
                    className={`py-2.5 px-2 rounded-xl text-xs font-bold flex flex-col items-center gap-1.5 border transition-all cursor-pointer ${
                      division === 'aegis'
                        ? 'border-cyan-500 bg-cyan-500/20 text-cyan-200 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                        : 'border-white/10 bg-white/[0.03] text-slate-400 hover:bg-white/[0.07] hover:text-slate-200'
                    }`}
                  >
                    <Building2 className={`w-4 h-4 ${division === 'aegis' ? 'text-cyan-400' : 'text-slate-400'}`} />
                    <span className="text-[11px]">Aegis Property</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDivision('sparsh')}
                    className={`py-2.5 px-2 rounded-xl text-xs font-bold flex flex-col items-center gap-1.5 border transition-all cursor-pointer ${
                      division === 'sparsh'
                        ? 'border-emerald-500 bg-emerald-500/20 text-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                        : 'border-white/10 bg-white/[0.03] text-slate-400 hover:bg-white/[0.07] hover:text-slate-200'
                    }`}
                  >
                    <HeartHandshake className={`w-4 h-4 ${division === 'sparsh' ? 'text-emerald-400' : 'text-slate-400'}`} />
                    <span className="text-[11px]">Sparsh Care</span>
                  </button>
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3 py-2 text-xs bg-slate-950/70 text-slate-100 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="rahul.sharma@domain.com"
                    className="w-full px-3 py-2 text-xs bg-slate-950/70 text-slate-100 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600"
                  />
                </div>
              </div>

              {/* Country & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Where are you based? (NRI Country)
                  </label>
                  <select
                    value={nriCountry}
                    onChange={(e) => setNriCountry(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-950 text-slate-100 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all cursor-pointer"
                  >
                    <option value="USA">United States (PST / CST / EST)</option>
                    <option value="UK">United Kingdom (GMT / BST)</option>
                    <option value="UAE">United Arab Emirates (GST)</option>
                    <option value="Australia">Australia (AEST / AWST)</option>
                    <option value="Canada">Canada (EST / PST)</option>
                    <option value="Singapore">Singapore / SEA (SGT)</option>
                    <option value="Europe">Europe (CET)</option>
                    <option value="Other">Other Global Diaspora</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (408) 555-0192"
                    className="w-full px-3 py-2 text-xs bg-slate-950/70 text-slate-100 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600"
                  />
                </div>
              </div>

              {/* Target City in India */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Target Metropolitan Hub in India *
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {(['Bengaluru', 'Hyderabad', 'Delhi NCR', 'Pune', 'Chennai'] as IndianCity[]).map(
                    (c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setCity(c)}
                        className={`py-2 px-1.5 rounded-xl text-xs font-semibold border text-center transition-all cursor-pointer ${
                          city === c
                            ? 'border-cyan-400 bg-cyan-500/20 text-cyan-200 shadow-[0_0_12px_rgba(6,182,212,0.25)]'
                            : 'border-white/10 bg-white/[0.03] text-slate-400 hover:bg-white/[0.07] hover:text-slate-200'
                        }`}
                      >
                        {c}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Specific Requirements or Property/Health Notes
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. 3BHK flat in Hitec City needing tenant + elderly parents needing weekly hospital OPD companions."
                  className="w-full px-3 py-2 text-xs bg-slate-950/70 text-slate-100 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all text-center cursor-pointer"
                >
                  Schedule NRI Consultation Call
                </button>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3.5 px-4 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Direct WhatsApp</span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center pt-1">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Our stewards adapt to USA, UK, UAE &amp; Australia working hours.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
