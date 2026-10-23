import React, { useState } from 'react';
import { Star, Quote, MapPin, Building2, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../../data/mockData';

export const DiasporaTestimonials: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'bundle' | 'aegis' | 'sparsh'>('all');

  const filtered = TESTIMONIALS.filter((t) => {
    if (filter === 'all') return true;
    if (filter === 'bundle') return t.division.toLowerCase().includes('bundle');
    if (filter === 'aegis') return t.division.toLowerCase().includes('aegis');
    if (filter === 'sparsh') return t.division.toLowerCase().includes('sparsh');
    return true;
  });

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] border-b border-slate-200 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#C99738]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-[#0073B7]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-[#8B601C] text-xs font-black uppercase tracking-wider mb-3.5 border border-amber-200/80 shadow-xs">
            <Star className="w-3.5 h-3.5 fill-[#C99738] text-[#C99738]" />
            <span>Diaspora Trust &amp; Validation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D3B66] font-heading tracking-tight leading-tight">
            Trusted Across 6 Time Zones
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed">
            From Silicon Valley to London, Dubai and Toronto, see how global Indians protect their family homes and care for their aging parents with Sustune.
          </p>

          {/* Filter Pills */}
          <div className="mt-7 inline-flex p-1.5 bg-slate-200/80 rounded-2xl border border-slate-300/40 gap-1.5 shadow-inner">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                filter === 'all' ? 'bg-white text-[#0D3B66] shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Client Stories
            </button>
            <button
              onClick={() => setFilter('bundle')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                filter === 'bundle' ? 'bg-white text-[#0D3B66] shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Dual-Shield Bundles
            </button>
            <button
              onClick={() => setFilter('aegis')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                filter === 'aegis' ? 'bg-white text-[#0073B7] shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Aegis Property
            </button>
            <button
              onClick={() => setFilter('sparsh')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                filter === 'sparsh' ? 'bg-white text-[#0A8754] shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Sparsh Healthcare
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-5xl mx-auto">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="p-7 sm:p-8 rounded-3xl bg-white/95 border border-slate-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,115,183,0.1)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Top Row: Division Badge & Star Rating */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-100 text-[#0D3B66] border border-slate-200">
                    {item.division}
                  </span>
                  <div className="flex items-center text-[#C99738] gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                <Quote className="w-8 h-8 text-[#C99738]/40 group-hover:text-[#C99738] transition-colors" />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author & Hub Details */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 font-heading">
                    {item.author}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">{item.role}</p>
                  <p className="text-xs text-[#0073B7] font-bold flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-[#0073B7]" />
                    <span>{item.location}</span>
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">
                    Managed Hub
                  </span>
                  <span className="text-xs font-extrabold text-[#0D3B66] block mt-0.5">
                    {item.hub}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
