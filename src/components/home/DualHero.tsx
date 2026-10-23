import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Building2, 
  HeartHandshake, 
  Play, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  TrendingUp,
  Activity,
  Lock,
  Globe2
} from 'lucide-react';
import { ServiceDivision } from '../../types';
import { HeroScene3D } from '../3d/HeroScene3D';
import { useVideoMetadata } from '../../hooks/useVideoMetadata';

interface DualHeroProps {
  onOpenConsultModal: (division?: string) => void;
  onOpenVideoModal: (videoSrc: string, title: string, subtitle?: string) => void;
}

export const DualHero: React.FC<DualHeroProps> = ({
  onOpenConsultModal,
  onOpenVideoModal,
}) => {
  const [activeTab, setActiveTab] = useState<ServiceDivision>('bundle');
  const launchVideoMeta = useVideoMetadata('/videos/sustune_launch.mp4');

  return (
    <section className="relative hero-radial-bg pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200 overflow-hidden">
      {/* Ambient background light orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#C99738]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-[-100px] w-[500px] h-[500px] bg-[#0073B7]/12 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-[#0A8754]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Eyebrow Announcement Pill */}
        <div className="flex justify-start sm:justify-center mb-6 lg:mb-8">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-[#C99738]/40 shadow-xs backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-[#0A8754] animate-ping" />
            <Globe2 className="w-3.5 h-3.5 text-[#0073B7]" />
            <span className="text-[11px] sm:text-xs font-bold text-[#0D3B66] tracking-wide">
              Institutional NRI Stewardship &bull; USA &bull; UK &bull; UAE &bull; Australia &bull; Canada
            </span>
          </div>
        </div>

        {/* Coordinated Two-Area Hero: Left Side Brand & Headline | Right Side Signature 3D Scene */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* =========================================================
              LEFT SIDE: BRAND LOGO (100-150px) BESIDE HEADLINE & MESSAGE
              ========================================================= */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Logo and Headline Cohesive Brand Composition */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              {/* Actual Sustune Care Logo - approx 100-150px wide desktop */}
              <div className="shrink-0">
                <div className="w-[110px] sm:w-[135px] lg:w-[145px] p-2.5 rounded-2xl bg-white/95 border-2 border-[#C99738]/40 shadow-[0_10px_30px_rgba(201,151,56,0.18)] backdrop-blur-md flex items-center justify-center transition-transform hover:scale-105 duration-300">
                  <img
                    src="/brand/sustune_emblem_standalone.svg"
                    alt="Sustune Care Master Logo"
                    className="w-full h-auto aspect-square object-contain"
                  />
                </div>
              </div>

              {/* Title & Brand Headline beside the logo */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black tracking-widest text-[#0073B7] uppercase">
                    SUSTUNE CARE TOTAL
                  </span>
                  <span className="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-[#C99738]/15 text-[#8B601C] border border-[#C99738]/30">
                    Dual-Shield Framework
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#0D3B66] font-heading tracking-tight leading-[1.12]">
                  Care for your property. <br />
                  <span className="text-[#0073B7]">Care for your parents.</span> <br />
                  <span className="gold-gradient-text">Peace of mind for you.</span>
                </h1>
              </div>
            </div>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl">
              Eliminating the <strong className="text-slate-900 font-bold">Anxiety of Distance</strong> for global Non-Resident Indians. Institutional-grade real estate stewardship combined with 24/7 clinical emergency and heartfelt geriatric healthcare in Bengaluru, Hyderabad, and Delhi NCR.
            </p>

            {/* Interactive Split Switcher */}
            <div className="pt-1 flex flex-wrap items-center gap-2">
              <div className="inline-flex p-1.5 bg-slate-200/80 rounded-2xl shadow-inner gap-1 border border-slate-300/40">
                <button
                  onClick={() => setActiveTab('bundle')}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === 'bundle'
                      ? 'bg-gradient-to-r from-[#0D3B66] to-[#0073B7] text-white shadow-md'
                      : 'text-slate-600 hover:text-[#0D3B66]'
                  }`}
                >
                  <Shield className="w-3.5 h-3.5 text-[#C99738]" />
                  <span>Dual-Shield (Both)</span>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-[#C99738] text-white shadow-xs">
                    Save 15%
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab('aegis')}
                  className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === 'aegis'
                      ? 'bg-[#0073B7] text-white shadow-md'
                      : 'text-slate-600 hover:text-[#0073B7]'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Aegis (Property)</span>
                </button>

                <button
                  onClick={() => setActiveTab('sparsh')}
                  className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === 'sparsh'
                      ? 'bg-[#0A8754] text-white shadow-md'
                      : 'text-slate-600 hover:text-[#0A8754]'
                  }`}
                >
                  <HeartHandshake className="w-3.5 h-3.5" />
                  <span>Sparsh (Parental Care)</span>
                </button>
              </div>
            </div>

            {/* Prominent Action Calls To Action (Primary visible above the fold) */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={() => onOpenConsultModal(activeTab)}
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-[#0073B7] via-[#0D3B66] to-[#082542] hover:brightness-110 shadow-[0_10px_25px_rgba(0,115,183,0.3)] transition-all cursor-pointer flex items-center gap-2 group"
              >
                <span>Book Virtual NRI Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onOpenVideoModal(
                  '/videos/sustune_launch.mp4', 
                  'Sustune Care Total: The Diaspora Dilemma Solved', 
                  'Official Launch Film (00:22)'
                )}
                className="px-4 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#0D3B66] bg-white border border-[#C99738]/40 hover:bg-amber-50/60 shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-[#C99738] text-white flex items-center justify-center shrink-0">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch Story ({launchVideoMeta.formattedDuration})</span>
              </button>

              <Link
                to="/portal-preview"
                className="px-4 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-700 hover:text-[#0073B7] bg-slate-100/90 hover:bg-slate-200 transition-colors"
              >
                Live Portal Demo
              </Link>
            </div>

            {/* Trust Indicators Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#0073B7]" />
                Strict CIBIL &amp; Police Verification
              </span>
              <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#0A8754]" />
                Apollo, Fortis &amp; Manipal ICU Pre-Alert
              </span>
              <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#C99738]" />
                Form 15CA/15CB Escrow Repatriation
              </span>
            </div>

          </div>

          {/* =========================================================
              RIGHT SIDE: SIGNATURE 3D COMPOSITION
              ========================================================= */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <HeroScene3D 
              onOpenConsultModal={onOpenConsultModal}
              onOpenVideoModal={onOpenVideoModal}
            />
          </div>

        </div>

        {/* Dynamic Dual-Shield Cards Grid (Refined glassmorphic presentation) */}
        <div className="mt-14 lg:mt-18 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Aegis Property Shield */}
          <div
            className={`p-6 sm:p-8 rounded-3xl transition-all border ${
              activeTab === 'aegis' || activeTab === 'bundle'
                ? 'bg-white shadow-[0_20px_45px_rgba(0,115,183,0.12)] border-[#0073B7]/50 ring-2 ring-[#0073B7]/10'
                : 'bg-white/60 border-slate-200/80 opacity-60'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-100/90 border border-sky-200 flex items-center justify-center text-[#0073B7] shadow-xs">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-sky-50 text-[#0073B7] border border-sky-200/80">
                Aegis Property Shield
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-extrabold text-[#0D3B66] font-heading mb-2">
              Institutional Real Estate Stewardship
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
              Complete hands-off protection for premier residential &amp; commercial assets in Hyderabad, Bengaluru &amp; Delhi NCR.
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-700 mb-6">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0073B7] shrink-0 mt-0.5" />
                <span>Corporate tenant scouting, strict CIBIL &amp; police background checks</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0073B7] shrink-0 mt-0.5" />
                <span>Automated rent escrow with TDS Form 15CA/15CB repatriation paperwork</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0073B7] shrink-0 mt-0.5" />
                <span>Quarterly 80-point photographic forensic inspection audit reports</span>
              </li>
            </ul>

            <div className="pt-3 flex items-center justify-between border-t border-slate-100">
              <Link
                to="/aegis"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0073B7] hover:text-[#0D3B66] transition-colors"
              >
                <span>Explore Aegis Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => onOpenVideoModal('/videos/aegis_overview.mp4', 'Aegis Property Stewardship', 'Forensic Asset Management for NRI Landlords')}
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#0073B7] transition-colors cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current text-[#0073B7]" />
                <span>Watch Reel (00:38)</span>
              </button>
            </div>
          </div>

          {/* Card 2: Sparsh Parental Care Shield */}
          <div
            className={`p-6 sm:p-8 rounded-3xl transition-all border ${
              activeTab === 'sparsh' || activeTab === 'bundle'
                ? 'bg-white shadow-[0_20px_45px_rgba(10,135,84,0.12)] border-[#0A8754]/50 ring-2 ring-[#0A8754]/10'
                : 'bg-white/60 border-slate-200/80 opacity-60'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100/90 border border-emerald-200 flex items-center justify-center text-[#0A8754] shadow-xs">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-50 text-[#0A8754] border border-emerald-200/80">
                Sparsh Parental Care
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-extrabold text-[#0D3B66] font-heading mb-2">
              Empathetic Geriatric &amp; Clinical Concierge
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
              A trusted, clinical family presence when you are thousands of miles away across global time zones.
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-700 mb-6">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0A8754] shrink-0 mt-0.5" />
                <span>24/7 Rapid SOS dispatch with pre-alerted Apollo, Fortis &amp; Manipal ICUs</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0A8754] shrink-0 mt-0.5" />
                <span>Certified Healthcare Companions for hospital OPD escorts &amp; notes transcription</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0A8754] shrink-0 mt-0.5" />
                <span>Bi-weekly home vitals telemetry, doorstep medicine sorting &amp; warm social visits</span>
              </li>
            </ul>

            <div className="pt-3 flex items-center justify-between border-t border-slate-100">
              <Link
                to="/sparsh"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A8754] hover:text-[#076740] transition-colors"
              >
                <span>Explore Sparsh Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => onOpenVideoModal('/videos/sparsh_overview.mp4', 'Sparsh Parental Healthcare', 'Clinical Precision & Sustainable Compassion for Aging Parents')}
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#0A8754] transition-colors cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current text-[#0A8754]" />
                <span>Watch Reel (00:46)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Live Metrics Row with dimensional glass badges */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
          <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-[0_10px_25px_rgba(0,0,0,0.03)] backdrop-blur-sm">
            <div className="text-xl sm:text-2xl font-black text-[#0D3B66] font-heading">₹180Cr+</div>
            <div className="text-xs text-slate-500 font-semibold mt-0.5">Assets Under Stewardship</div>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-[0_10px_25px_rgba(0,0,0,0.03)] backdrop-blur-sm">
            <div className="text-xl sm:text-2xl font-black text-[#0A8754] font-heading">&lt; 14 Mins</div>
            <div className="text-xs text-slate-500 font-semibold mt-0.5">Average SOS Dispatch</div>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-[0_10px_25px_rgba(0,0,0,0.03)] backdrop-blur-sm">
            <div className="text-xl sm:text-2xl font-black text-[#0073B7] font-heading">99.8%</div>
            <div className="text-xs text-slate-500 font-semibold mt-0.5">On-Time Rent Escrow</div>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-[0_10px_25px_rgba(0,0,0,0.03)] backdrop-blur-sm">
            <div className="text-xl sm:text-2xl font-black text-[#C99738] font-heading">4.9 / 5.0</div>
            <div className="text-xs text-slate-500 font-semibold mt-0.5">Verified Diaspora Rating</div>
          </div>
        </div>

      </div>
    </section>
  );
};
