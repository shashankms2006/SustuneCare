import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  HeartHandshake, 
  Users, 
  Receipt, 
  Search, 
  Wrench, 
  Ambulance, 
  UserCheck, 
  Activity, 
  Pill, 
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface ServiceMatrixProps {
  onOpenConsultModal: (division?: string) => void;
}

export const ServiceMatrix: React.FC<ServiceMatrixProps> = ({ onOpenConsultModal }) => {
  const [activeTab, setActiveTab] = useState<'aegis' | 'sparsh'>('aegis');

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Soft atmospheric background lights */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#0073B7]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C99738]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-[#0073B7] text-xs font-black uppercase tracking-wider mb-3.5 border border-sky-200 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C99738]" />
            <span>Modular Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D3B66] font-heading tracking-tight leading-tight">
            Dual-Shield Service Matrix
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed">
            Switch between our two specialized divisions. Tailor them separately or bundle them together for complete diaspora coverage and a 15% synergy rebate.
          </p>

          {/* Division Toggle Pills */}
          <div className="mt-7 inline-flex p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200/90 gap-1.5 shadow-inner">
            <button
              onClick={() => setActiveTab('aegis')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                activeTab === 'aegis'
                  ? 'bg-[#0073B7] text-white shadow-md'
                  : 'text-slate-600 hover:text-[#0073B7]'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Aegis (Property Stewardship)</span>
            </button>

            <button
              onClick={() => setActiveTab('sparsh')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                activeTab === 'sparsh'
                  ? 'bg-[#0A8754] text-white shadow-md'
                  : 'text-slate-600 hover:text-[#0A8754]'
              }`}
            >
              <HeartHandshake className="w-4 h-4" />
              <span>Sparsh (Parental Healthcare)</span>
            </button>
          </div>
        </div>

        {/* Matrix Grid */}
        {activeTab === 'aegis' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#0073B7] hover:shadow-[0_15px_35px_rgba(0,115,183,0.12)] transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-13 h-13 rounded-2xl bg-sky-100/80 text-[#0073B7] flex items-center justify-center mb-5 group-hover:bg-[#0073B7] group-hover:text-white transition-colors shadow-xs">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-base font-extrabold text-[#0D3B66] font-heading mb-2.5">
                  Corporate Tenant Scouting
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Multi-portal listing syndication, physical accompanied viewings, CIBIL credit validation, employment background checks, and local police verification before keys are issued.
                </p>
              </div>
              <Link to="/aegis" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0073B7] group-hover:translate-x-0.5 transition-transform">
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#0073B7] hover:shadow-[0_15px_35px_rgba(0,115,183,0.12)] transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-13 h-13 rounded-2xl bg-sky-100/80 text-[#0073B7] flex items-center justify-center mb-5 group-hover:bg-[#0073B7] group-hover:text-white transition-colors shadow-xs">
                  <Receipt className="w-6 h-6" />
                </div>
                <h3 className="text-base font-extrabold text-[#0D3B66] font-heading mb-2.5">
                  Escrow Rent &amp; Tax Compliance
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Automated rent collection through bank-grade escrow accounts. Guaranteed 5th-of-the-month direct wire transfer into your NRE/NRO account with annual Form 15CA/15CB support.
                </p>
              </div>
              <Link to="/aegis" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0073B7] group-hover:translate-x-0.5 transition-transform">
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#0073B7] hover:shadow-[0_15px_35px_rgba(0,115,183,0.12)] transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-13 h-13 rounded-2xl bg-sky-100/80 text-[#0073B7] flex items-center justify-center mb-5 group-hover:bg-[#0073B7] group-hover:text-white transition-colors shadow-xs">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-base font-extrabold text-[#0D3B66] font-heading mb-2.5">
                  Periodic 80-Point Inspections
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Quarterly forensic audits with timestamped high-resolution photos, electrical checkups, plumbing leak detection, and interactive digital inspection reports.
                </p>
              </div>
              <Link to="/aegis" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0073B7] group-hover:translate-x-0.5 transition-transform">
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 4 */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#0073B7] hover:shadow-[0_15px_35px_rgba(0,115,183,0.12)] transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-13 h-13 rounded-2xl bg-sky-100/80 text-[#0073B7] flex items-center justify-center mb-5 group-hover:bg-[#0073B7] group-hover:text-white transition-colors shadow-xs">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="text-base font-extrabold text-[#0D3B66] font-heading mb-2.5">
                  Turnkey Maintenance &amp; Fit-outs
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Vetted electricians, plumbers, and interior craftsmen operating under strict corporate SLAs with zero contractor markup surprises. Itemized quote pre-approvals via portal.
                </p>
              </div>
              <Link to="/aegis" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0073B7] group-hover:translate-x-0.5 transition-transform">
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sparsh 1 */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#0A8754] hover:shadow-[0_15px_35px_rgba(10,135,84,0.12)] transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-13 h-13 rounded-2xl bg-emerald-100/80 text-[#0A8754] flex items-center justify-center mb-5 group-hover:bg-[#0A8754] group-hover:text-white transition-colors shadow-xs">
                  <Ambulance className="w-6 h-6" />
                </div>
                <h3 className="text-base font-extrabold text-[#0D3B66] font-heading mb-2.5">
                  24/7 SOS &amp; Pre-Alerted ICUs
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Dedicated clinical dispatch under 14 minutes, with emergency hospital admissions pre-authorized at Apollo, Fortis, Manipal and Max Healthcare.
                </p>
              </div>
              <Link to="/sparsh" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A8754] group-hover:translate-x-0.5 transition-transform">
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Sparsh 2 */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#0A8754] hover:shadow-[0_15px_35px_rgba(10,135,84,0.12)] transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-13 h-13 rounded-2xl bg-emerald-100/80 text-[#0A8754] flex items-center justify-center mb-5 group-hover:bg-[#0A8754] group-hover:text-white transition-colors shadow-xs">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="text-base font-extrabold text-[#0D3B66] font-heading mb-2.5">
                  Certified Healthcare Companions
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  A trained nurse or geriatric escort accompanies parents to every doctor consultation, takes notes, clarifies dosages, and uploads medical summaries to your portal.
                </p>
              </div>
              <Link to="/sparsh" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A8754] group-hover:translate-x-0.5 transition-transform">
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Sparsh 3 */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#0A8754] hover:shadow-[0_15px_35px_rgba(10,135,84,0.12)] transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-13 h-13 rounded-2xl bg-emerald-100/80 text-[#0A8754] flex items-center justify-center mb-5 group-hover:bg-[#0A8754] group-hover:text-white transition-colors shadow-xs">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-base font-extrabold text-[#0D3B66] font-heading mb-2.5">
                  Routine Telemetry &amp; Home Vitals
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Bi-weekly resting blood pressure, blood glucose, pulse oximetry, and body weight screenings. Real-time alert notifications if values exceed thresholds.
                </p>
              </div>
              <Link to="/sparsh" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A8754] group-hover:translate-x-0.5 transition-transform">
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Sparsh 4 */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#0A8754] hover:shadow-[0_15px_35px_rgba(10,135,84,0.12)] transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-13 h-13 rounded-2xl bg-emerald-100/80 text-[#0A8754] flex items-center justify-center mb-5 group-hover:bg-[#0A8754] group-hover:text-white transition-colors shadow-xs">
                  <Pill className="w-6 h-6" />
                </div>
                <h3 className="text-base font-extrabold text-[#0D3B66] font-heading mb-2.5">
                  Medication Replenishment &amp; Visits
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Doorstep sourcing of genuine prescribed medicines, pre-sorted into weekly morning/noon/night pill organizers. Regular warm companionship check-ins to alleviate loneliness.
                </p>
              </div>
              <Link to="/sparsh" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A8754] group-hover:translate-x-0.5 transition-transform">
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* Dual-Shield Bundle Synergy Callout Banner */}
        <div className="mt-14 p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-r from-[#0D3B66] via-[#082542] to-[#0D3B66] border border-[#C99738]/50 shadow-[0_20px_60px_rgba(0,0,0,0.3)] text-white flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C99738]/20 border border-[#C99738]/40 text-[#C99738] text-xs font-extrabold uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Diaspora Bundle Advantage</span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-heading">
              Bundle Aegis + Sparsh for a 15% Synergy Rebate
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Unified monthly reporting, dedicated dual account steward back in India, and prioritized 24/7 hotline dispatch across GMT, EST, PST, GST &amp; AEST.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0 z-10">
            <button
              onClick={() => onOpenConsultModal('bundle')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold text-[#082542] bg-gradient-to-r from-[#F59E0B] to-[#C99738] hover:brightness-110 shadow-lg transition-all cursor-pointer text-center"
            >
              Claim Dual-Shield Bundle
            </button>
            <Link
              to="/portal-preview"
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-center"
            >
              Preview Portal
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
