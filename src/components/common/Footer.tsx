import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  HeartHandshake, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  CheckCircle2, 
  FileCheck,
  Shield,
  ArrowRight,
  Globe2
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#082542] via-[#051326] to-[#020A14] text-slate-300 pt-16 pb-12 border-t border-[#C99738]/30 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0073B7]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#C99738]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-700/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 bg-white rounded-xl p-1.5 flex items-center justify-center shadow-md border border-[#C99738]/40">
                <img src="/brand/sustune_emblem_standalone.svg" alt="Sustune Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-xl font-black text-white font-heading tracking-tight">SUSTUNE </span>
                <span className="text-xl font-black text-[#C99738] font-heading tracking-tight">CARE</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Institutional-grade Property Asset Stewardship &amp; Empathetic Parental Healthcare Concierge. Built exclusively for Non-Resident Indians across the USA, UK, UAE, Australia, and Canada.
            </p>

            <div className="space-y-2.5 text-xs text-slate-300 pt-2">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C99738] shrink-0" />
                <span>24/7 NRI Dispatch &amp; Time-zone Aligned Account Managers</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C99738] shrink-0" />
                <span>NRI Emergency Concierge: <a href="tel:+918007878863" className="text-white hover:text-[#C99738] font-bold">+91 800-SUSTUNE (+91 800-787-8863)</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C99738] shrink-0" />
                <span>concierge@sustunecare.com</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/918007878863?text=Hi%20Sustune%20Care%2C%20I%20am%20an%20NRI%20reaching%20out%20from%20the%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-all cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>Connect via WhatsApp NRI Desk</span>
              </a>
            </div>
          </div>

          {/* Aegis Property Shield */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-[#C99738] tracking-wider uppercase flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-[#0073B7]" />
              <span>Aegis Property</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link to="/aegis" className="hover:text-white transition-colors">Corporate Tenant Scouting &amp; KYC</Link></li>
              <li><Link to="/aegis" className="hover:text-white transition-colors">Rent Escrow &amp; Repatriation</Link></li>
              <li><Link to="/aegis" className="hover:text-white transition-colors">80-Point Inspection Reports</Link></li>
              <li><Link to="/aegis" className="hover:text-white transition-colors">Turnkey Maintenance &amp; Fit-outs</Link></li>
              <li><Link to="/aegis" className="hover:text-white transition-colors">Khata Mutation &amp; Property Tax</Link></li>
              <li><Link to="/aegis" className="hover:text-white transition-colors">TDS Form 15CA / 15CB Guidance</Link></li>
            </ul>
          </div>

          {/* Sparsh Parental Healthcare */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-[#C99738] tracking-wider uppercase flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4 text-[#0A8754]" />
              <span>Sparsh Healthcare</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link to="/sparsh" className="hover:text-white transition-colors">24/7 Rapid SOS &amp; ICU Beds</Link></li>
              <li><Link to="/sparsh" className="hover:text-white transition-colors">Certified Doctor Escorts &amp; OPD</Link></li>
              <li><Link to="/sparsh" className="hover:text-white transition-colors">Routine Vitals Telemetry</Link></li>
              <li><Link to="/sparsh" className="hover:text-white transition-colors">Doorstep Medicine Replenishment</Link></li>
              <li><Link to="/sparsh" className="hover:text-white transition-colors">Bedside Warm Companionship</Link></li>
              <li><Link to="/sparsh" className="hover:text-white transition-colors">NABH Hospital Partner Network</Link></li>
            </ul>
          </div>

          {/* Operational Hubs & Portals */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-[#C99738] tracking-wider uppercase">
              Operational Hubs
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Bengaluru (Whitefield &amp; Indiranagar)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Hyderabad (Jubilee Hills &amp; Hitec)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Delhi NCR (DLF Phase 5 &amp; Noida)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Pune (Koregaon Park &amp; Baner)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Chennai (OMR &amp; Adyar)</span>
              </li>
              <li className="pt-2">
                <Link to="/portal-preview" className="inline-flex items-center gap-1 text-[#C99738] hover:underline font-bold">
                  <span>Explore Client Portal Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Institutional Compliance Badges Bar */}
        <div className="py-6 border-b border-slate-700/60 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <FileCheck className="w-4 h-4 text-[#C99738]" />
              <span>RERA-Ready Asset Governance</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>NABH &amp; HIPAA Clinical Compliance</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-sky-400" />
              <span>ISO 9001:2015 Domiciliary Certified</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>SOC-2 Type II 256-Bit Telemetry Encryption</span>
            </span>
          </div>

          <div className="text-[11px] text-slate-400 font-medium">
            Registered under Indian Companies Act &bull; Healthcare Ref: SC-BGM-2026
          </div>
        </div>

        {/* Bottom Legal / Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <div>
            &copy; {new Date().getFullYear()} Sustune Care Private Limited. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-[11px]">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy &amp; Health Data Protection</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Asset Stewardship</span>
            <span className="hover:text-white cursor-pointer transition-colors">Security Protocol &amp; SLAs</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
