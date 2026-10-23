import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Ambulance, 
  UserCheck, 
  Activity, 
  Pill, 
  Heart, 
  ShieldCheck, 
  Play, 
  CheckCircle2, 
  PhoneCall, 
  Clock, 
  Building, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  Smile,
  Sparkles,
  MapPin
} from 'lucide-react';
import { HOSPITAL_PARTNERS } from '../data/mockData';
import { useCurrency } from '../context/CurrencyContext';
import { useVideoMetadata } from '../hooks/useVideoMetadata';

interface SparshPageProps {
  onOpenConsultModal: (division?: string) => void;
  onOpenVideoModal: (videoSrc: string, title: string, subtitle?: string) => void;
}

export const SparshPage: React.FC<SparshPageProps> = ({
  onOpenConsultModal,
  onOpenVideoModal,
}) => {
  const { formatPrice } = useCurrency();
  const [selectedPlan, setSelectedPlan] = useState<'essential' | 'comprehensive' | 'concierge'>('comprehensive');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const videoMeta = useVideoMetadata('/videos/sparsh_overview.mp4');

  const faqs = [
    {
      q: 'How does the 24/7 SOS Emergency Response actually operate?',
      a: 'When an emergency button or call is triggered, our 24/7 clinical command center dispatches the nearest advanced life support (ALS) ambulance within minutes. Concurrently, a dedicated Sparsh Care Companion arrives on-site to handle immediate logistics, while our medical desk pre-authorizes an emergency ICU or ward admission at partnered hospital networks (Apollo, Fortis, Manipal). Overseas children receive continuous real-time telemetry updates and phone briefings.',
    },
    {
      q: 'Who are the Care Companions, and how are they vetted?',
      a: 'All Sparsh Care Companions are either certified nurses, geriatric social workers, or professionally trained healthcare associates. They undergo strict background checks, psychological suitability evaluations, and training in patient dignity, active listening, and emergency basic life support (BLS).',
    },
    {
      q: 'Can a Care Companion escort my parents to routine doctor appointments and test labs?',
      a: 'Yes! That is one of our most loved services. The companion picks up your parents from home in an air-conditioned sanitized vehicle, assists them with hospital check-in, sits with them through the doctor consultation, takes notes on the physician’s specific advice, asks your pre-written questions, and uploads the audio and written summary into your private client portal.',
    },
    {
      q: 'How does doorstep medicine sorting work?',
      a: 'We source 100% verified, authentic medicines directly from accredited clinical pharmacies (eliminating counterfeit risks). Our nurse sorts them into sealed weekly morning, afternoon, and night pill dispensers so your parents never mix up heart medications or insulin doses.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Banner with emerald atmospheric glow */}
      <section className="relative hero-radial-bg py-16 lg:py-24 border-b border-slate-200 overflow-hidden">
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#0A8754]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-5 left-10 w-96 h-96 bg-[#C99738]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-[#0A8754] text-xs font-black uppercase tracking-wider mb-4 border border-emerald-200 shadow-xs">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Sparsh Parental Healthcare Concierge</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0D3B66] font-heading tracking-tight leading-tight">
              A Dignified, Loving Presence Back Home When You Are Across Oceans
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Designed exclusively for Non-Resident Indians whose aging parents live alone in India. We combine rapid 24/7 emergency clinical dispatch with heartfelt bedside warmth, OPD doctor escorts, bi-weekly biometric vitals, and weekly companionship visits.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenConsultModal('sparsh')}
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-[#0A8754] to-[#076740] hover:brightness-110 shadow-lg transition-all cursor-pointer"
              >
                Arrange Parental Health Assessment
              </button>

              <button
                onClick={() => onOpenVideoModal('/videos/sparsh_overview.mp4', 'Sparsh Healthcare Story', 'Clinical Precision & Sustainable Compassion')}
                className="flex items-center gap-2.5 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#0D3B66] bg-white border border-[#0A8754]/30 hover:bg-emerald-50 transition-colors cursor-pointer shadow-xs"
              >
                <div className="w-5 h-5 rounded-full bg-[#0A8754] text-white flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
                <span>Watch Sparsh Reel ({videoMeta.formattedDuration})</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The 5 Pillars of Sparsh */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0D3B66] font-heading">
              Comprehensive Domiciliary Healthcare Governance
            </h2>
            <p className="mt-3.5 text-sm sm:text-base text-slate-600">
              Balancing hospital-grade clinical precision with person-centered family warmth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] space-y-3.5 hover:border-[#0A8754] hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#0A8754] flex items-center justify-center shadow-xs">
                <Ambulance className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900 font-heading">
                1. 24/7 Rapid SOS &amp; Pre-Alerted ICUs
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Emergency response SLA under 14 minutes. We pre-authorize admission at top multi-speciality tertiary hospitals so there are zero delays at the emergency bay.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] space-y-3.5 hover:border-[#0A8754] hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#0A8754] flex items-center justify-center shadow-xs">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900 font-heading">
                2. Certified Doctor Escorts
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A dedicated geriatric companion escorts your parents to OPD clinics, manages waiting times, transcribes doctor instructions, and uploads audio notes to your portal.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] space-y-3.5 hover:border-[#0A8754] hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#0A8754] flex items-center justify-center shadow-xs">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900 font-heading">
                3. Routine Telemetry &amp; Vitals
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Regular checks of blood pressure, blood glucose, pulse oximetry, and body weight. Our medical advisory board reviews trends to catch health risks early.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] space-y-3.5 hover:border-[#0A8754] hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#0A8754] flex items-center justify-center shadow-xs">
                <Pill className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900 font-heading">
                4. Doorstep Medicine Replenishment
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We coordinate monthly prescription renewals, source authentic medications, and organize them in weekly segmented pill boxes so your parents take the right doses.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] space-y-3.5 hover:border-[#0A8754] hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#0A8754] flex items-center justify-center shadow-xs">
                <Smile className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900 font-heading">
                5. Warm Social Companionship
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Loneliness is the silent health crisis of Indian elders. Our companions visit to chat, read books, share evening walks in the garden, and share photo updates with overseas children.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-gradient-to-br from-[#0D3B66] via-[#082542] to-[#041021] text-white shadow-xl border border-[#C99738]/50 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#C99738]">
                  Dual-Shield Synergy
                </span>
                <h3 className="text-lg font-black font-heading mt-1.5 mb-2">
                  Own Property in India Too?
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Combine Sparsh Parental Care with Aegis Property Stewardship to enjoy unified monthly billing and a 15% synergy rebate.
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

      {/* Hospital Partner Network */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-black text-slate-500 uppercase tracking-wider block mb-4">
            Institutional Hospital Networks &amp; Emergency Protocols
          </span>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-slate-700 font-bold text-base sm:text-lg">
            {HOSPITAL_PARTNERS.map((h) => (
              <div key={h.name} className="flex items-center gap-2 p-3.5 bg-slate-50 rounded-2xl border border-slate-200 shadow-xs hover:border-[#0073B7] transition-all">
                <Building className="w-5 h-5 text-[#0073B7]" />
                <span>{h.name}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-4 max-w-2xl mx-auto leading-relaxed">
            Pre-authorized cashless admission facilities, priority ICU alerts, and doctor consultations across Bengaluru, Hyderabad, Delhi NCR, Pune and Chennai.
          </p>
        </div>
      </section>

      {/* Sparsh Care Plans & Pricing */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D3B66] font-heading">
              Tailored Parental Healthcare Plans
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Select the level of clinical support and companionship suited to your parents&apos; needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Plan 1 */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">Essential SOS Shield</h3>
                <p className="text-xs text-slate-500 mt-1">For independent parents who need 24/7 safety fallback.</p>
                <div className="my-6">
                  <div className="text-3xl font-extrabold text-[#0D3B66] font-heading">{formatPrice(55)} <span className="text-xs font-normal text-slate-500">/ mo</span></div>
                  <div className="text-xs text-slate-500">Billed quarterly or annually</div>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0A8754]" /> 24/7 Rapid SOS ambulance dispatch</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0A8754]" /> Pre-alerted hospital admission coordination</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0A8754]" /> Monthly baseline home vitals screening</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0A8754]" /> Emergency SOS mobile button kit</li>
                </ul>
              </div>
              <button
                onClick={() => onOpenConsultModal('sparsh')}
                className="mt-8 w-full py-3 rounded-xl text-xs font-bold text-[#0D3B66] bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                Choose Essential SOS
              </button>
            </div>

            {/* Plan 2: Popular */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#0D3B66] text-white border-2 border-[#0A8754] shadow-2xl relative flex flex-col justify-between">
              <span className="absolute -top-3 right-6 px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-[#0A8754] text-white shadow-sm">
                Most Popular
              </span>
              <div>
                <h3 className="text-lg font-bold font-heading">Comprehensive Concierge</h3>
                <p className="text-xs text-emerald-200/90 mt-1">Full medical companionship and proactive routine monitoring.</p>
                <div className="my-6">
                  <div className="text-3xl font-extrabold text-white font-heading">{formatPrice(118)} <span className="text-xs font-normal text-slate-300">/ mo</span></div>
                  <div className="text-xs text-slate-300">Billed quarterly (Save 15% when bundled)</div>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-200">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Everything in Essential SOS</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Dedicated Doctor Escorts (2 OPDs / mo)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Bi-weekly home vitals telemetry screenings</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Doorstep medicine sorting &amp; pillbox refills</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Weekly warm social companionship visits</li>
                </ul>
              </div>
              <button
                onClick={() => onOpenConsultModal('sparsh')}
                className="mt-8 w-full py-3.5 rounded-xl text-xs font-bold text-white bg-[#0A8754] hover:bg-[#076740] transition-colors shadow-lg cursor-pointer"
              >
                Enroll in Comprehensive Care
              </button>
            </div>

            {/* Plan 3: Full Concierge */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">Full Bedside Concierge</h3>
                <p className="text-xs text-slate-500 mt-1">For elderly parents recovering from illness or requiring intensive care.</p>
                <div className="my-6">
                  <div className="text-3xl font-extrabold text-[#0D3B66] font-heading">{formatPrice(195)} <span className="text-xs font-normal text-slate-500">/ mo</span></div>
                  <div className="text-xs text-slate-500">Custom nursing hours available</div>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0A8754]" /> Unlimited OPD hospital escorts</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0A8754]" /> 3x weekly companionship &amp; rehab visits</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0A8754]" /> Dedicated Senior Clinical Case Manager</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0A8754]" /> Home diagnostic lab test pickups</li>
                </ul>
              </div>
              <button
                onClick={() => onOpenConsultModal('sparsh')}
                className="mt-8 w-full py-3 rounded-xl text-xs font-bold text-[#0D3B66] bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                Choose Full Concierge
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
              Sparsh Parental Care FAQ
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500">
              Compassionate, transparent answers regarding your parents&apos; well-being.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden transition-all">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex justify-between items-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <span className="text-sm font-bold text-slate-900 font-heading pr-4">
                    {faq.q}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#0A8754] shrink-0" />
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
              onClick={() => onOpenConsultModal('sparsh')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#0A8754] hover:bg-[#076740] transition-colors cursor-pointer shadow-md"
            >
              <span>Speak with a Sparsh Clinical Care Director</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
