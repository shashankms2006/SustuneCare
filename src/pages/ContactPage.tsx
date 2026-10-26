import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 

  ShieldCheck, 
  Building2, 
  HeartHandshake, 
  CheckCircle2, 
  Send 
} from 'lucide-react';
// Official crisp WhatsApp vector icon
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);
import { OPERATIONAL_HUBS } from '../data/mockData';
import { IndianCity, ServiceDivision } from '../types';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nriCountry, setNriCountry] = useState('USA');
  const [city, setCity] = useState<IndianCity>('Bengaluru');
  const [division, setDivision] = useState<ServiceDivision>('bundle');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppLink = () => {
    const text = `Hi Sustune Care NRI Concierge,
I would like to schedule an NRI consultation.
Name: ${name || 'an NRI'}
Resident Country: ${nriCountry}
Target Indian City: ${city}
Division: ${division.toUpperCase()}
Phone: ${phone}
Email: ${email}
Notes: ${notes || 'Looking forward to speaking with a care director.'}`;

    return `https://wa.me/918007878863?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="relative bg-slate-950 text-slate-100 min-h-screen py-16 sm:py-24 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-0"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#C99738]/10 rounded-full blur-[140px] pointer-events-none -z-0"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>24/7 Global NRI Concierge Desk</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            Schedule a Confidential <span className="bg-gradient-to-r from-white via-slate-100 to-amber-200 bg-clip-text text-transparent">Diaspora Consultation</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Our Care Directors align consultations to your local time zone across the USA, UK, UAE, Australia, and Canada. Zero pressure, complete institutional clarity.
          </p>
        </div>

        {/* Main Grid: Form + Office Contacts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Form Column (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-10 bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-[#C99738] to-emerald-500"></div>

            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-bold text-white font-heading">
                  Consultation Request Registered
                </h2>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{name}</strong>. Our NRI Lead Steward for <strong className="text-cyan-400">{city}</strong> has received your brief. We will send you a calendar invite aligned with your <strong className="text-amber-300">{nriCountry}</strong> time zone within 4 hours.
                </p>

                <div className="pt-6 flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Instant WhatsApp Handover</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3.5 rounded-xl font-semibold text-xs text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                    Scope of Interest
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setDivision('bundle')}
                      className={`p-3.5 rounded-2xl text-xs font-bold border transition-all flex flex-col items-center gap-2 cursor-pointer ${
                        division === 'bundle'
                          ? 'border-[#C99738] bg-[#C99738]/15 text-amber-200 shadow-[0_0_20px_rgba(201,151,56,0.2)]'
                          : 'border-white/10 bg-white/[0.02] text-slate-400 hover:bg-white/[0.05] hover:text-slate-200'
                      }`}
                    >
                      <ShieldCheck className={`w-5 h-5 ${division === 'bundle' ? 'text-amber-400' : 'text-slate-400'}`} />
                      <span>Dual-Shield Bundle</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setDivision('aegis')}
                      className={`p-3.5 rounded-2xl text-xs font-bold border transition-all flex flex-col items-center gap-2 cursor-pointer ${
                        division === 'aegis'
                          ? 'border-cyan-500 bg-cyan-500/15 text-cyan-200 shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                          : 'border-white/10 bg-white/[0.02] text-slate-400 hover:bg-white/[0.05] hover:text-slate-200'
                      }`}
                    >
                      <Building2 className={`w-5 h-5 ${division === 'aegis' ? 'text-cyan-400' : 'text-slate-400'}`} />
                      <span>Aegis Property</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setDivision('sparsh')}
                      className={`p-3.5 rounded-2xl text-xs font-bold border transition-all flex flex-col items-center gap-2 cursor-pointer ${
                        division === 'sparsh'
                          ? 'border-emerald-500 bg-emerald-500/15 text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                          : 'border-white/10 bg-white/[0.02] text-slate-400 hover:bg-white/[0.05] hover:text-slate-200'
                      }`}
                    >
                      <HeartHandshake className={`w-5 h-5 ${division === 'sparsh' ? 'text-emerald-400' : 'text-slate-400'}`} />
                      <span>Sparsh Parental Care</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Dr. Rohan Sengupta"
                      className="w-full px-4 py-3 text-xs bg-slate-950/70 text-slate-100 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="rohan.sengupta@example.com"
                      className="w-full px-4 py-3 text-xs bg-slate-950/70 text-slate-100 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Where are you based? (NRI Country) *
                    </label>
                    <select
                      value={nriCountry}
                      onChange={(e) => setNriCountry(e.target.value)}
                      className="w-full px-4 py-3 text-xs bg-slate-950 text-slate-100 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all cursor-pointer"
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
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      WhatsApp Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (408) 555-0192"
                      className="w-full px-4 py-3 text-xs bg-slate-950/70 text-slate-100 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    Target Indian City for Property or Parents *
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {(['Bengaluru', 'Hyderabad', 'Delhi NCR', 'Pune', 'Chennai'] as IndianCity[]).map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setCity(c)}
                        className={`py-2.5 px-2 rounded-xl text-xs font-semibold border text-center transition-all cursor-pointer ${
                          city === c
                            ? 'border-cyan-400 bg-cyan-500/20 text-cyan-200 shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                            : 'border-white/10 bg-white/[0.03] text-slate-400 hover:bg-white/[0.07] hover:text-slate-200'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Describe Your Property or Parents’ Health Context
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="E.g., Looking for tenant for our 3BHK flat in Jubilee Hills and need bi-weekly vitals screening + doctor escorts for 81-year-old mother."
                    className="w-full px-4 py-3 text-xs bg-slate-950/70 text-slate-100 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-4 px-6 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Confirm Consultation Request</span>
                  </button>

                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-4 px-5 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp Direct</span>
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Contact Details & Operating Hubs Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 text-white border border-[#C99738]/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-5 relative overflow-hidden backdrop-blur-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C99738]/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold font-heading text-white">
                  NRI Direct Concierge
                </h3>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-bold text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  Active Now
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Connect immediately with an NRI Care Director. We coordinate seamlessly across Eastern, Central, Pacific, GMT, GST, and AEST time zones.
              </p>

              <div className="space-y-3.5 text-xs text-slate-200">
                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="w-9 h-9 rounded-xl bg-[#C99738]/15 border border-[#C99738]/30 flex items-center justify-center text-[#C99738] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Toll-Free NRI Hotline</span>
                    <a href="tel:+918007878863" className="font-bold text-white hover:text-[#C99738] transition-colors">
                      +91 800-SUSTUNE (+91 800-787-8863)
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Direct Email</span>
                    <span className="font-bold text-white">concierge@sustunecare.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <WhatsAppIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">WhatsApp NRI Desk</span>
                    <span className="font-bold text-white">+91 800 787 8863</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-[#C99738]/20 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-amber-300 font-bold">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Rapid SLA Guarantee</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  All diaspora inquiries receive a personalized consultation brief within 4 business hours.
                </p>
              </div>
            </div>

            {/* Hub Addresses Box */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/10 shadow-lg space-y-3.5 backdrop-blur-xl">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Corporate &amp; Field Offices in India</span>
              </div>
              <div className="space-y-3 text-xs text-slate-400">
                {OPERATIONAL_HUBS.slice(0, 3).map((h) => (
                  <div key={h.city} className="pb-3 border-b border-white/5 last:border-b-0 last:pb-0">
                    <strong className="text-slate-200 block font-heading mb-0.5">{h.city} Hub:</strong>
                    <span className="text-slate-400 text-[11px] leading-relaxed">{h.officeAddress}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
