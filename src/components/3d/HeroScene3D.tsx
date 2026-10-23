import React, { useState, useRef, useEffect } from 'react';
import { 
  Building2, 
  HeartHandshake, 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  Lock, 
  Clock, 
  Radio, 
  Sparkles, 
  TrendingUp,
  MapPin,
  Ambulance
} from 'lucide-react';

interface HeroScene3DProps {
  onOpenConsultModal?: (division?: string) => void;
  onOpenVideoModal?: (videoSrc: string, title: string, subtitle?: string) => void;
}

export const HeroScene3D: React.FC<HeroScene3DProps> = ({ 
  onOpenConsultModal,
  onOpenVideoModal 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState<number>(6);
  const [rotateY, setRotateY] = useState<number>(-8);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate normalized rotation (-12deg to 12deg)
    const newRotateY = ((x - centerX) / centerX) * 12;
    const newRotateX = -((y - centerY) / centerY) * 12;

    setRotateX(newRotateX);
    setRotateY(newRotateY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(4);
    setRotateY(-6);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[560px] mx-auto h-[480px] sm:h-[540px] lg:h-[580px] perspective-1400 flex items-center justify-center select-none"
    >
      {/* Ambient background atmosphere glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full bg-gradient-to-tr from-[#0073B7]/25 via-[#C99738]/20 to-[#0A8754]/15 blur-[80px] sm:blur-[100px] animate-pulse-glow" />
      </div>

      {/* 3D Dimensional Stage */}
      <div
        className="relative w-full h-full preserve-3d transition-transform duration-300 ease-out flex items-center justify-center"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
      >
        {/* Layer 0: Concentric 3D Orbital Rings (Architectural & Surveillance Geometry) */}
        <div 
          className="absolute w-[360px] sm:w-[460px] h-[360px] sm:h-[460px] rounded-full border border-dashed border-[#C99738]/30 pointer-events-none animate-rotate-slow"
          style={{ transform: 'translateZ(-60px)' }}
        />
        <div 
          className="absolute w-[290px] sm:w-[370px] h-[290px] sm:h-[370px] rounded-full border border-[#0073B7]/25 pointer-events-none"
          style={{ transform: 'translateZ(-40px)' }}
        />
        <div 
          className="absolute w-[220px] sm:w-[280px] h-[220px] sm:h-[280px] rounded-full border border-emerald-500/20 pointer-events-none"
          style={{ transform: 'translateZ(-20px)' }}
        />

        {/* Central Holographic Emblem Disc */}
        <div
          className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-[#082542] via-[#0D3B66] to-[#051326] border-2 border-[#C99738]/60 shadow-[0_0_40px_rgba(201,151,56,0.35)] flex items-center justify-center p-3 preserve-3d group cursor-pointer"
          style={{ transform: 'translateZ(20px)' }}
          title="Sustune Care Dual-Shield Engine"
        >
          <img
            src="/brand/sustune_emblem_standalone.svg"
            alt="Sustune Care Core Emblem"
            className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform"
          />
          <div className="absolute -bottom-3 px-2 py-0.5 rounded-full bg-[#051326] border border-[#C99738]/50 text-[9px] font-extrabold uppercase text-[#C99738] tracking-widest shadow-md">
            Dual-Shield
          </div>
        </div>

        {/* Layer 1: Aegis Property Stewardship Card (Upper-Left Floating 3D Panel) */}
        <div
          className="absolute top-4 sm:top-6 left-0 sm:-left-4 w-[240px] sm:w-[280px] rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 bg-white/90 backdrop-blur-xl border border-sky-200/90 shadow-[0_15px_35px_rgba(0,115,183,0.18)] preserve-3d animate-float-slow cursor-pointer hover:border-[#0073B7] transition-all"
          style={{ transform: 'translateZ(70px)' }}
          onClick={() => onOpenConsultModal?.('aegis')}
        >
          {/* Card Top Pill */}
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-sky-100/80 text-[#0073B7] text-[10px] font-extrabold">
              <Building2 className="w-3 h-3 text-[#0073B7]" />
              <span>AEGIS PROPERTY</span>
            </div>
            <span className="flex items-center gap-1 text-[10px] text-emerald-700 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              Audited
            </span>
          </div>

          <h4 className="text-xs sm:text-sm font-extrabold text-[#0D3B66] font-heading leading-tight truncate">
            Prestige High Fields 3BHK
          </h4>
          <p className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5">
            <MapPin className="w-2.5 h-2.5 text-[#0073B7]" />
            Financial District, Hyderabad
          </p>

          <div className="mt-2.5 pt-2 border-t border-slate-100 grid grid-cols-2 gap-2 text-[10px]">
            <div className="bg-slate-50 p-1.5 rounded-lg border border-slate-200/60">
              <span className="text-[9px] text-slate-500 block">Rent Escrow</span>
              <span className="font-extrabold text-slate-800">₹65,000/mo</span>
            </div>
            <div className="bg-sky-50/70 p-1.5 rounded-lg border border-sky-100">
              <span className="text-[9px] text-[#0073B7] block">Audit Score</span>
              <span className="font-extrabold text-[#0073B7]">94% Grade A</span>
            </div>
          </div>

          <div className="mt-2 flex items-center justify-between text-[9px] text-slate-500">
            <span className="flex items-center gap-1 text-slate-600 font-medium">
              <Lock className="w-2.5 h-2.5 text-[#C99738]" />
              Biometric Lock Verified
            </span>
            <span className="text-[#0073B7] font-bold">Form 15CA ✓</span>
          </div>
        </div>

        {/* Layer 2: Sparsh Parental Care Clinical Telemetry Card (Lower-Right Floating 3D Panel) */}
        <div
          className="absolute bottom-4 sm:bottom-6 right-0 sm:-right-4 w-[250px] sm:w-[290px] rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 bg-white/90 backdrop-blur-xl border border-emerald-200/90 shadow-[0_15px_35px_rgba(10,135,84,0.18)] preserve-3d animate-float-reverse cursor-pointer hover:border-[#0A8754] transition-all"
          style={{ transform: 'translateZ(90px)' }}
          onClick={() => onOpenConsultModal?.('sparsh')}
        >
          {/* Card Top Pill */}
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-100/80 text-[#0A8754] text-[10px] font-extrabold">
              <HeartHandshake className="w-3 h-3 text-[#0A8754]" />
              <span>SPARSH HEALTHCARE</span>
            </div>
            <span className="flex items-center gap-1 text-[10px] text-[#0A8754] font-bold">
              <Activity className="w-3 h-3 text-[#0A8754] animate-pulse" />
              Live Vitals
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-xs sm:text-sm font-extrabold text-[#0D3B66] font-heading leading-tight">
                Resting Blood Pressure
              </h4>
              <p className="text-[10px] text-slate-500">Telemetry Log: Today 08:30 AM</p>
            </div>
            <div className="text-right">
              <span className="text-xs sm:text-sm font-extrabold text-emerald-700 font-heading">
                122 / 80
              </span>
              <span className="text-[9px] text-slate-500 block">mmHg (Optimal)</span>
            </div>
          </div>

          <div className="mt-2.5 p-2 rounded-xl bg-emerald-50/70 border border-emerald-200/50 flex items-center justify-between text-[10px]">
            <div className="flex items-center gap-1.5">
              <Ambulance className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
              <span className="font-semibold text-slate-800">Apollo Hospitals OPD Escort</span>
            </div>
            <span className="px-1.5 py-0.5 rounded text-[8px] font-extrabold bg-[#0A8754] text-white">
              Sister Mary
            </span>
          </div>

          <div className="mt-2 flex items-center justify-between text-[9px] text-slate-500">
            <span className="text-[#0A8754] font-bold">SpO2: 99% • Pulse: 72</span>
            <span className="text-slate-600 font-semibold">ICU Pre-Alert Ready ✓</span>
          </div>
        </div>

        {/* Floating Dimensional Badge 1: 24/7 Rapid SOS SLA (Top-Right) */}
        <div
          className="absolute top-12 sm:top-14 right-2 sm:right-6 px-3 py-1.5 rounded-xl bg-[#051326]/90 border border-[#C99738]/50 text-white backdrop-blur-md shadow-xl flex items-center gap-2 preserve-3d"
          style={{ transform: 'translateZ(110px)' }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <div className="text-left">
            <span className="text-[9px] text-amber-200 block uppercase font-bold tracking-wider">
              Clinical Command SLA
            </span>
            <span className="text-xs font-extrabold font-heading text-white">
              &lt; 14 Mins SOS Dispatch
            </span>
          </div>
        </div>

        {/* Floating Dimensional Badge 2: Institutional Asset Value (Bottom-Left) */}
        <div
          className="absolute bottom-12 sm:bottom-16 left-2 sm:left-6 px-3 py-1.5 rounded-xl bg-white/95 border border-sky-200 text-[#0D3B66] backdrop-blur-md shadow-xl flex items-center gap-2 preserve-3d"
          style={{ transform: 'translateZ(105px)' }}
        >
          <div className="w-6 h-6 rounded-lg bg-sky-100 flex items-center justify-center text-[#0073B7]">
            <TrendingUp className="w-3.5 h-3.5" />
          </div>
          <div className="text-left">
            <span className="text-[9px] text-slate-500 block uppercase font-bold tracking-wider">
              Assets Protected
            </span>
            <span className="text-xs font-extrabold font-heading text-[#0073B7]">
              ₹180 Cr+ NRI Portfolio
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
