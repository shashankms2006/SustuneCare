import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Building2, 
  HeartHandshake, 
  LayoutDashboard, 
  MessageSquare, 
  Menu, 
  X, 
  Globe, 
  Clock,
  Shield,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { useCurrency } from '../../context/CurrencyContext';
import { Currency } from '../../types';

interface NavbarProps {
  onOpenConsultModal: (initialInterest?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();
  const location = useLocation();

  const currencies: Currency[] = ['USD', 'GBP', 'EUR', 'AED', 'CAD', 'AUD', 'INR'];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_25px_rgba(13,59,102,0.04)] transition-all">
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#051326] text-white text-[11px] sm:text-xs py-1.5 px-4 border-b border-[#C99738]/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Active Metro Desks */}
          <div className="flex items-center gap-2.5">
            <span className="flex items-center gap-1.5 font-bold text-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Active Concierge Desks:
            </span>
            <span className="hidden sm:inline text-amber-200/90 font-semibold tracking-wide">
              Bengaluru &bull; Hyderabad &bull; Delhi NCR &bull; Pune &bull; Chennai
            </span>
            <span className="sm:hidden text-amber-200 font-semibold">5 Indian Metros</span>
          </div>

          {/* Hotline & Currency Picker */}
          <div className="flex items-center gap-4 text-slate-200">
            <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
              <PhoneCall className="w-3.5 h-3.5 text-[#C99738]" />
              <span className="hidden md:inline font-medium">24/7 NRI Emergency Hotline:</span>
              <a 
                href="tel:+918007878863" 
                className="font-extrabold text-white hover:text-[#C99738] transition-colors"
                title="Call 24/7 NRI Hotline"
              >
                +91 800-SUSTUNE
              </a>
            </div>

            {/* Currency Switcher */}
            <div className="flex items-center gap-1.5 bg-[#082542] px-2.5 py-0.5 rounded-lg border border-[#C99738]/40 shadow-xs">
              <Globe className="w-3 h-3 text-[#C99738]" />
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as Currency)}
                className="bg-transparent text-white font-black text-[11px] focus:outline-none cursor-pointer"
                aria-label="Select Currency"
              >
                {currencies.map((c) => (
                  <option key={c} value={c} className="bg-[#0D3B66] text-white">
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Branding */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 flex items-center justify-center bg-white rounded-2xl shadow-[0_4px_15px_rgba(201,151,56,0.15)] border border-slate-200 group-hover:border-[#C99738] transition-all p-1.5 overflow-hidden">
              <img 
                src="/brand/sustune_emblem_standalone.svg" 
                alt="Sustune Care Emblem" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tight text-[#0D3B66] font-heading group-hover:text-[#0073B7] transition-colors">
                  SUSTUNE
                </span>
                <span className="text-xl font-black tracking-tight text-[#C99738] font-heading">
                  CARE
                </span>
              </div>
              <span className="text-[10px] tracking-wider text-slate-500 font-bold uppercase">
                Dual-Shield NRI Stewardship
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link
              to="/"
              className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-all ${
                isActive('/') 
                  ? 'text-[#0073B7] bg-sky-50 shadow-xs' 
                  : 'text-slate-700 hover:text-[#0073B7] hover:bg-slate-50'
              }`}
            >
              Overview
            </Link>

            <Link
              to="/aegis"
              className={`px-3.5 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${
                isActive('/aegis') 
                  ? 'text-[#0073B7] bg-sky-50 shadow-xs' 
                  : 'text-slate-700 hover:text-[#0073B7] hover:bg-slate-50'
              }`}
            >
              <Building2 className="w-4 h-4 text-[#0073B7]" />
              <span>Aegis Property</span>
            </Link>

            <Link
              to="/sparsh"
              className={`px-3.5 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${
                isActive('/sparsh') 
                  ? 'text-[#0A8754] bg-emerald-50 shadow-xs' 
                  : 'text-slate-700 hover:text-[#0A8754] hover:bg-slate-50'
              }`}
            >
              <HeartHandshake className="w-4 h-4 text-[#0A8754]" />
              <span>Sparsh Parental Care</span>
            </Link>

            <Link
              to="/portal-preview"
              className={`px-3.5 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${
                isActive('/portal-preview') 
                  ? 'text-[#0D3B66] bg-slate-100 shadow-xs' 
                  : 'text-slate-700 hover:text-[#0D3B66] hover:bg-slate-50'
              }`}
            >
              <LayoutDashboard className="w-4 h-4 text-[#C99738]" />
              <span>Portal Demo</span>
              <span className="px-1.5 py-0.5 text-[9px] uppercase tracking-wider font-black bg-[#C99738]/20 text-[#8B601C] rounded-md">
                Live
              </span>
            </Link>

            <Link
              to="/contact"
              className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-all ${
                isActive('/contact') 
                  ? 'text-[#0073B7] bg-sky-50 shadow-xs' 
                  : 'text-slate-700 hover:text-[#0073B7] hover:bg-slate-50'
              }`}
            >
              Contact &amp; Intake
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://wa.me/918007878863?text=Hi%20Sustune%20Care%2C%20I%20am%20an%20NRI%20looking%20for%20information%20regarding%20Aegis%20Property%20and%20Sparsh%20Parental%20Care."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50/90 border border-emerald-300 hover:bg-emerald-100 transition-colors shadow-xs"
            >
              <MessageSquare className="w-4 h-4 fill-emerald-600 text-emerald-600" />
              <span>WhatsApp Desk</span>
            </a>

            <button
              onClick={() => onOpenConsultModal()}
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-[#0073B7] to-[#0D3B66] hover:brightness-110 shadow-[0_4px_15px_rgba(0,115,183,0.25)] transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenConsultModal()}
              className="px-3.5 py-1.5 rounded-lg text-xs font-extrabold text-white bg-gradient-to-r from-[#0073B7] to-[#0D3B66] shadow-xs"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0073B7] rounded-xl focus:outline-none"
              aria-label="Toggle mobile navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 px-5 py-5 space-y-3 shadow-2xl animate-fadeIn">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800 hover:text-[#0073B7]"
          >
            Overview (Dual-Shield)
          </Link>
          <Link
            to="/aegis"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 py-2 text-sm font-bold text-[#0073B7]"
          >
            <Building2 className="w-4 h-4" />
            <span>Aegis Property Stewardship</span>
          </Link>
          <Link
            to="/sparsh"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 py-2 text-sm font-bold text-[#0A8754]"
          >
            <HeartHandshake className="w-4 h-4" />
            <span>Sparsh Parental Healthcare</span>
          </Link>
          <Link
            to="/portal-preview"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between py-2 text-sm font-bold text-slate-800"
          >
            <div className="flex items-center gap-2.5">
              <LayoutDashboard className="w-4 h-4 text-[#C99738]" />
              <span>Client Portal Demo</span>
            </div>
            <span className="px-2 py-0.5 text-[9px] font-black uppercase bg-[#C99738]/20 text-[#8B601C] rounded">
              Interactive
            </span>
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800 hover:text-[#0073B7]"
          >
            Contact &amp; NRI Intake
          </Link>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href="https://wa.me/918007878863"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-300"
            >
              <MessageSquare className="w-4 h-4 fill-emerald-600 text-emerald-600" />
              <span>Connect via WhatsApp Desk</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultModal();
              }}
              className="w-full py-3 rounded-xl text-xs font-extrabold text-white bg-gradient-to-r from-[#0073B7] to-[#0D3B66] text-center shadow-md cursor-pointer"
            >
              Book Virtual NRI Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
