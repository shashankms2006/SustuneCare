import React, { useState } from 'react';
import { MapPin, Clock, Shield, Building, Phone, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { OPERATIONAL_HUBS } from '../../data/mockData';

interface HubsMapProps {
  onOpenConsultModal: (city?: string) => void;
}

export const HubsMap: React.FC<HubsMapProps> = ({ onOpenConsultModal }) => {
  const [selectedHub, setSelectedHub] = useState(OPERATIONAL_HUBS[0]);

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#0073B7]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#0A8754]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-black uppercase tracking-wider mb-3.5 border border-emerald-200 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>On-Ground Physical Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D3B66] font-heading tracking-tight leading-tight">
            Direct Physical Field Teams in Top NRI Hometowns
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed">
            Zero third-party broker proxies. Sustune Care operates localized field desks with full-time Property Stewards, licensed electrical/plumbing technicians, and certified Clinical Care Companions.
          </p>
        </div>

        {/* City Hub Cards Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-8">
          {OPERATIONAL_HUBS.map((hub) => (
            <button
              key={hub.city}
              type="button"
              onClick={() => setSelectedHub(hub)}
              className={`p-4 sm:p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                selectedHub.city === hub.city
                  ? 'border-[#0073B7] bg-sky-50/90 shadow-md ring-2 ring-[#0073B7]/25'
                  : 'border-slate-200/90 bg-slate-50/70 hover:bg-white text-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{hub.state}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="text-base sm:text-lg font-black text-[#0D3B66] font-heading">{hub.city}</div>
              <div className="text-xs text-[#0073B7] font-bold mt-1">{hub.responseSla}</div>
            </button>
          ))}
        </div>

        {/* Selected Hub Detailed Card */}
        <div className="p-7 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0D3B66] via-[#082542] to-[#041021] text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] border border-[#C99738]/40 relative overflow-hidden">
          {/* Subtle light bar at the top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C99738] to-transparent opacity-80" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#C99738] text-[#082542] shadow-sm">
                  Active Field Hub
                </span>
                <span className="text-xs text-amber-200 font-bold">
                  {selectedHub.activeAssets} Assets Under Stewardship
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-white">
                {selectedHub.city} Regional Directorate
              </h3>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C99738] shrink-0 mt-0.5" />
                  <span>Physical Address: <strong className="text-white">{selectedHub.officeAddress}</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Lead City Steward: <strong className="text-white">{selectedHub.leadSteward}</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Emergency Dispatch SLA: <strong className="text-white">{selectedHub.responseSla}</strong></span>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-xs font-bold text-[#C99738] uppercase tracking-wider block mb-2.5">
                  Covered Micro-Markets &amp; Gated Communities:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedHub.microMarkets.map((market) => (
                    <span
                      key={market}
                      className="px-3 py-1 rounded-xl text-xs font-semibold bg-white/10 border border-white/15 text-slate-200 backdrop-blur-xs"
                    >
                      {market}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-xl p-6 sm:p-7 rounded-2xl border border-white/20 shadow-xl flex flex-col justify-between space-y-4">
              <div>
                <h4 className="text-base sm:text-lg font-black text-white font-heading mb-1.5">
                  Connect With {selectedHub.city} Field Steward
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Have a residential apartment in {selectedHub.city} or elderly parents living in {selectedHub.microMarkets[0]}? Request an immediate on-site assessment.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() => onOpenConsultModal(selectedHub.city)}
                  className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-black text-[#082542] bg-[#C99738] hover:bg-[#F59E0B] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Request {selectedHub.city} Field Review</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <a
                  href={`https://wa.me/918007878863?text=Hi%20Sustune%20Care%2C%20I%20have%20an%20inquiry%20regarding%20${encodeURIComponent(selectedHub.city)}%20stewardship.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {selectedHub.city} Concierge</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
