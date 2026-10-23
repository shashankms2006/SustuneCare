import React, { useState } from 'react';
import { 
  Building2, 
  ShieldCheck, 
  FileText, 
  Wrench, 
  Users, 
  Receipt, 
  CheckCircle2, 
  AlertCircle, 
  Play, 
  ArrowRight, 
  Camera, 
  Droplets, 
  Zap, 
  FileCheck, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  Clock,
  Sparkles,
  MapPin,
  Lock
} from 'lucide-react';
import { SAMPLE_INSPECTION_REPORT } from '../data/mockData';
import { useCurrency } from '../context/CurrencyContext';
import { useVideoMetadata } from '../hooks/useVideoMetadata';

interface AegisPageProps {
  onOpenConsultModal: (division?: string) => void;
  onOpenVideoModal: (videoSrc: string, title: string, subtitle?: string) => void;
}

export const AegisPage: React.FC<AegisPageProps> = ({
  onOpenConsultModal,
  onOpenVideoModal,
}) => {
  const { formatPrice } = useCurrency();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const videoMeta = useVideoMetadata('/videos/aegis_overview.mp4');

  const categories = ['All', 'Structural', 'Electrical', 'Plumbing', 'Carpentry & Fixtures', 'Safety & Compliance'];

  const filteredItems = activeCategory === 'All' 
    ? SAMPLE_INSPECTION_REPORT.items 
    : SAMPLE_INSPECTION_REPORT.items.filter(i => i.category === activeCategory);

  const faqs = [
    {
      q: 'How does Sustune verify prospective tenants for my Indian property?',
      a: 'We enforce an institutional 5-tier screening process: CIBIL credit score analysis, current corporate employment validation (with HR letters), permanent address verification, Aadhaar biometric verification, and mandatory police verification with the local police station before the lease is executed.',
    },
    {
      q: 'How is rent remitted to my overseas bank account or Indian NRE/NRO account?',
      a: 'Rent is collected into our RERA-compliant escrow trust account on the 1st of every month. After deducting applicable TDS and approved maintenance expenses, proceeds are disbursed on the 5th of each month directly into your designated NRO or NRE account. We provide annual Form 15CA and 15CB documentation prepared by chartered accountants for hassle-free repatriation.',
    },
    {
      q: 'What happens if a tenant requests a major repair or appliances malfunction?',
      a: 'Our field technicians conduct a physical assessment within 24 hours. If repair costs are below your pre-authorized approval limit (e.g. ₹5,000), we fix it immediately and upload the timestamped receipt. For larger repairs or replacements, we submit 2 itemized quotes to your client portal for 1-click digital approval. We charge strictly zero contractor markups.',
    },
    {
      q: 'Can Sustune manage property taxes, Khata mutation, and society maintenance payments?',
      a: 'Yes. Our legal and municipal liaison stewards track BBMP / GHMC / MCGM property tax schedules, handle municipal Khata transfers, attend society AGM meetings as your proxy, and disburse society maintenance fees from rental escrow.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Banner with atmospheric lighting */}
      <section className="relative hero-radial-bg py-16 lg:py-24 border-b border-slate-200 overflow-hidden">
        {/* Ambient background light orbs */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#0073B7]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-5 left-10 w-96 h-96 bg-[#C99738]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-[#0073B7] text-xs font-black uppercase tracking-wider mb-4 border border-sky-200 shadow-xs">
              <Building2 className="w-3.5 h-3.5" />
              <span>Aegis Real Estate Stewardship</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0D3B66] font-heading tracking-tight leading-tight">
              Institutional Asset Management for High-Yield Indian Real Estate
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Designed specifically for NRIs who refuse to settle for unorganized brokers. We provide corporate tenant vetting, automated rent escrow remittance, 80-point quarterly forensic audits, and zero-markup turnkey maintenance in Bengaluru, Hyderabad &amp; Delhi NCR.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenConsultModal('aegis')}
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-[#0073B7] to-[#0D3B66] hover:brightness-110 shadow-lg transition-all cursor-pointer"
              >
                Schedule Property Evaluation
              </button>

              <button
                onClick={() => onOpenVideoModal('/videos/aegis_overview.mp4', 'Aegis Property Stewardship', 'Forensic Asset Management for NRI Landlords')}
                className="flex items-center gap-2.5 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#0D3B66] bg-white border border-[#0073B7]/30 hover:bg-sky-50 transition-colors cursor-pointer shadow-xs"
              >
                <div className="w-5 h-5 rounded-full bg-[#0073B7] text-white flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
                <span>Watch Division Reel ({videoMeta.formattedDuration})</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The 5 Pillars of Aegis */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0D3B66] font-heading">
              The Five Disciplines of Aegis Stewardship
            </h2>
            <p className="mt-3.5 text-sm sm:text-base text-slate-600">
              Every property entrusted to Sustune Care is administered under strict institutional operating standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] space-y-3.5 hover:border-[#0073B7] hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-[#0073B7] flex items-center justify-center shadow-xs">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900 font-heading">
                1. Corporate Tenant Scouting
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We market your asset to multinational corporate executives and vetted diaspora professionals. Includes CIBIL credit scores, employment background checks, and local police verification.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] space-y-3.5 hover:border-[#0073B7] hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-[#0073B7] flex items-center justify-center shadow-xs">
                <Receipt className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900 font-heading">
                2. Escrow Rent &amp; Tax Compliance
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Rent is paid directly into escrow on the 1st and remitted to your NRE/NRO account by the 5th. We handle 31.2% NRI TDS deductions and assist with Form 15CA/15CB CA certification.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] space-y-3.5 hover:border-[#0073B7] hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-[#0073B7] flex items-center justify-center shadow-xs">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900 font-heading">
                3. Quarterly 80-Point Inspections
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our certified civil engineers audit wall dampness with ultrasonic sensors, inspect concealed electrical wiring, and test plumbing valves to prevent costly hidden structural damage.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] space-y-3.5 hover:border-[#0073B7] hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-[#0073B7] flex items-center justify-center shadow-xs">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900 font-heading">
                4. Turnkey Maintenance &amp; Fit-Outs
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Full restoration between tenancies, modular kitchen deep cleaning, and appliance servicing. You review verified invoices on your portal before approving a single rupee.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] space-y-3.5 hover:border-[#0073B7] hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-[#0073B7] flex items-center justify-center shadow-xs">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900 font-heading">
                5. Legal &amp; Municipal Governance
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Biometric digital lease renewals, municipal property tax filings (BBMP, GHMC, MCGM), Khata certificate updates, and society representation to ensure 100% legal compliance.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-gradient-to-br from-[#0D3B66] via-[#082542] to-[#041021] text-white shadow-xl border border-[#C99738]/50 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#C99738]">
                  Dual-Shield Synergy
                </span>
                <h3 className="text-lg font-black font-heading mt-1.5 mb-2">
                  Have Parents in India as Well?
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Combine Aegis Property Stewardship with Sparsh Parental Healthcare to unlock unified reporting and a 15% discount across all services.
                </p>
              </div>

              <button
                onClick={() => onOpenConsultModal('bundle')}
                className="mt-5 w-full py-3 px-4 rounded-xl text-xs font-black text-[#082542] bg-gradient-to-r from-[#F59E0B] to-[#C99738] hover:brightness-110 shadow-md transition-all cursor-pointer"
              >
                Inquire About Dual-Shield Bundle
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Digital Inspection Report Viewer */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-black uppercase tracking-wider mb-3.5 border border-emerald-200">
              <Camera className="w-3.5 h-3.5 text-emerald-600" />
              <span>Interactive Client Feature</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0D3B66] font-heading tracking-tight">
              Sample 80-Point Digital Inspection Audit
            </h2>
            <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed">
              Explore how Sustune Care field engineers audit and report on your property every quarter. Every check is timestamped, geofenced, and accessible via your client portal.
            </p>
          </div>

          {/* Inspection Report Container */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-slate-50 border border-slate-300/80 shadow-2xl overflow-hidden">
            
            {/* Report Header */}
            <div className="bg-gradient-to-r from-[#0D3B66] via-[#082542] to-[#0D3B66] text-white p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase bg-[#C99738] text-[#082542]">
                    Report Ref: {SAMPLE_INSPECTION_REPORT.propertyId}
                  </span>
                  <span className="text-xs text-amber-200 font-medium">{SAMPLE_INSPECTION_REPORT.inspectionDate}</span>
                </div>
                <h3 className="text-lg sm:text-2xl font-black font-heading mt-1.5">
                  {SAMPLE_INSPECTION_REPORT.propertyName}
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  {SAMPLE_INSPECTION_REPORT.location}
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Inspected By: <strong className="text-white">{SAMPLE_INSPECTION_REPORT.inspectorName}</strong>
                </p>
              </div>

              {/* Health Score Pill */}
              <div className="p-4 rounded-2xl bg-[#082542] border border-[#C99738]/50 text-center shrink-0 shadow-lg">
                <span className="text-[10px] uppercase font-bold text-slate-300 tracking-wider block">
                  Property Asset Health
                </span>
                <span className="text-3xl font-black text-[#C99738] font-heading">
                  {SAMPLE_INSPECTION_REPORT.overallScore} / 100
                </span>
                <span className="text-[10px] font-bold text-emerald-400 block mt-0.5">
                  Institutional Grade: Optimal
                </span>
              </div>
            </div>

            {/* Category Filter Tabs */}
            <div className="p-4 bg-slate-100 border-b border-slate-200 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#0073B7] text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Checklist Items */}
            <div className="p-6 divide-y divide-slate-200">
              {filteredItems.map((item) => (
                <div key={item.id} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        {item.category}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase ${
                          item.status === 'Pass'
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                            : 'bg-amber-100 text-amber-800 border border-amber-200'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 font-heading">
                      {item.item}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.notes}
                    </p>
                  </div>

                  <div className="shrink-0 flex sm:flex-col items-center sm:items-end gap-2 text-right">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0073B7] bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-100">
                      <Camera className="w-3 h-3" />
                      <span>HD Audit Photo Logged</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Footer */}
            <div className="p-4 bg-slate-100 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Geofenced &amp; Signed via Sustune Mobile Field App</span>
              </span>
              <button
                onClick={() => onOpenConsultModal('aegis')}
                className="text-xs font-bold text-[#0073B7] hover:underline"
              >
                Request a Free 80-Point Inspection on Your Property &rarr;
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Pricing Comparison Table */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D3B66] font-heading">
              Transparent Aegis Pricing
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              No hidden broker kickbacks. Clear, audited fee structures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Tier 1 */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">Tenant Placement Only</h3>
                <p className="text-xs text-slate-500 mt-1">For landlords who prefer handling monthly rent directly.</p>
                <div className="my-6">
                  <div className="text-2xl font-extrabold text-[#0D3B66] font-heading">15 Days Rent</div>
                  <div className="text-xs text-slate-500">One-time fee upon successful lease execution</div>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0073B7]" /> Multi-portal syndicated listings</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0073B7]" /> Accompanied physical viewings</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0073B7]" /> CIBIL &amp; corporate KYC checks</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0073B7]" /> Police verification paperwork</li>
                </ul>
              </div>
              <button
                onClick={() => onOpenConsultModal('aegis')}
                className="mt-8 w-full py-3 rounded-xl text-xs font-bold text-[#0D3B66] bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                Choose Tenant Placement
              </button>
            </div>

            {/* Tier 2: Popular */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#0D3B66] text-white border-2 border-[#C99738] shadow-2xl relative flex flex-col justify-between">
              <span className="absolute -top-3 right-6 px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-[#C99738] text-[#082542] shadow-sm">
                Most Popular for NRIs
              </span>
              <div>
                <h3 className="text-lg font-bold font-heading">Complete Aegis Stewardship</h3>
                <p className="text-xs text-amber-200/90 mt-1">Total hands-off asset governance and peace of mind.</p>
                <div className="my-6">
                  <div className="text-3xl font-extrabold text-white font-heading">8% <span className="text-xs font-normal text-slate-300">of monthly rent</span></div>
                  <div className="text-xs text-slate-300">Min. $60 / mo (billed quarterly)</div>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-200">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C99738]" /> Everything in Tenant Placement</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C99738]" /> Escrow rent payout on the 5th</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C99738]" /> Quarterly 80-point inspection audits</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C99738]" /> Zero contractor markup guarantee</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C99738]" /> Annual Form 15CA/15CB assistance</li>
                </ul>
              </div>
              <button
                onClick={() => onOpenConsultModal('aegis')}
                className="mt-8 w-full py-3.5 rounded-xl text-xs font-bold text-[#082542] bg-[#C99738] hover:bg-[#F59E0B] transition-colors shadow-lg cursor-pointer"
              >
                Enroll in Complete Aegis
              </button>
            </div>

            {/* Tier 3: Portfolio */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">VIP Portfolio Stewardship</h3>
                <p className="text-xs text-slate-500 mt-1">For investors holding 3+ units across Indian metros.</p>
                <div className="my-6">
                  <div className="text-2xl font-extrabold text-[#0D3B66] font-heading">Custom Retainer</div>
                  <div className="text-xs text-slate-500">Volume discounted rates (6.5% - 7%)</div>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0073B7]" /> Dedicated Senior Portfolio Director</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0073B7]" /> Multi-city consolidated NRI tax ledger</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0073B7]" /> Turnkey interior furnishing oversight</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0073B7]" /> Society AGM voting representation</li>
                </ul>
              </div>
              <button
                onClick={() => onOpenConsultModal('aegis')}
                className="mt-8 w-full py-3 rounded-xl text-xs font-bold text-[#0D3B66] bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                Request Portfolio Proposal
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D3B66] font-heading">
              Aegis Real Estate FAQ
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500">
              Clear answers to the most common questions asked by NRI property owners.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex justify-between items-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <span className="text-sm font-bold text-slate-900 font-heading pr-4">
                    {faq.q}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#0073B7] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="p-4 sm:p-5 bg-white border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onOpenConsultModal('aegis')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0073B7] to-[#0D3B66] hover:brightness-110 shadow-md transition-all cursor-pointer"
            >
              <span>Have a Specific Property Question? Talk to an Aegis Steward</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
