import { InspectionReport, ParentVitalRecord, DoctorVisitSummary } from '../types';

export const OPERATIONAL_HUBS = [
  {
    city: 'Bengaluru',
    state: 'Karnataka',
    microMarkets: ['Indiranagar', 'Whitefield', 'Koramangala', 'Sarjapur Road', 'Sadashivanagar'],
    officeAddress: 'Level 4, Prestige Meridian, MG Road, Bengaluru 560001',
    leadSteward: 'Naveen Rajagopal',
    responseSla: '< 14 mins SOS dispatch',
    activeAssets: '₹74 Cr+',
  },
  {
    city: 'Hyderabad',
    state: 'Telangana',
    microMarkets: ['Jubilee Hills', 'Banjara Hills', 'Gachibowli', 'Hitec City', 'Financial District'],
    officeAddress: 'Level 7, Cyber Towers, Hitec City, Hyderabad 500081',
    leadSteward: 'Pooja Reddy',
    responseSla: '< 12 mins SOS dispatch',
    activeAssets: '₹62 Cr+',
  },
  {
    city: 'Delhi NCR',
    state: 'National Capital Region',
    microMarkets: ['DLF Phase 5', 'Golf Course Road', 'Vasant Vihar', 'Greater Kailash', 'Noida Expwy'],
    officeAddress: 'Tower B, DLF Cyber City, Gurugram 122002',
    leadSteward: 'Kavita Mathur',
    responseSla: '< 16 mins SOS dispatch',
    activeAssets: '₹45 Cr+',
  },
  {
    city: 'Pune',
    state: 'Maharashtra',
    microMarkets: ['Koregaon Park', 'Kalyani Nagar', 'Baner', 'Aundh', 'Viman Nagar'],
    officeAddress: 'ICC Trade Tower, Senapati Bapat Road, Pune 411016',
    leadSteward: 'Aditya Kulkarni',
    responseSla: '< 15 mins SOS dispatch',
    activeAssets: '₹28 Cr+',
  },
  {
    city: 'Chennai',
    state: 'Tamil Nadu',
    microMarkets: ['Adyar', 'Besant Nagar', 'OMR (IT Corridor)', 'Anna Nagar', 'Boat Club'],
    officeAddress: 'Tidal Park, Rajiv Gandhi Salai, Taramani, Chennai 600113',
    leadSteward: 'Subhashini Ramanathan',
    responseSla: '< 13 mins SOS dispatch',
    activeAssets: '₹31 Cr+',
  },
];

export const TESTIMONIALS = [
  {
    id: 't1',
    quote:
      'Managing my 4BHK villa in Gachibowli while ensuring my 78-year-old diabetic father had hospital escorts at Apollo was an ongoing emotional nightmare from London. Sustune transformed everything. The Aegis team found an executive tenant within 18 days, and Sparsh’s care companion Sister Mary personally accompanies Appa for every checkup. The peace of mind is priceless.',
    author: 'Dr. Vikramaditya Reddy',
    role: 'Interventional Cardiologist, NHS London',
    location: 'London, UK',
    hub: 'Hyderabad (Jubilee Hills & Gachibowli)',
    division: 'Dual-Shield Bundle (Aegis + Sparsh)',
    rating: 5,
  },
  {
    id: 't2',
    quote:
      'When mom had an acute vertigo episode at 2:00 AM India time, the Sparsh SOS protocol dispatched their paramedic and care steward in 12 minutes flat. They pre-checked her into Manipal Hospital before we even woke up in California. Furthermore, our Whitefield apartment is maintained with surgical precision. The portal inspection reports leave zero room for doubt.',
    author: 'Ananya & Rohan Sengupta',
    role: 'VP of Engineering & Staff AI Researcher',
    location: 'San Jose, CA (Silicon Valley)',
    hub: 'Bengaluru (Indiranagar & Whitefield)',
    division: 'Dual-Shield Bundle',
    rating: 5,
  },
  {
    id: 't3',
    quote:
      "Most Indian property managers are unorganized brokers who disappear when there's a water seepage or tenant conflict. Sustune’s institutional escrows and quarterly photographic audits are Wall-Street grade. My rental proceeds arrive in my NRE account on the 5th of every month with Form 15CA already drafted. Truly exemplary.",
    author: 'Farhan Siddiqui',
    role: 'Managing Director, Private Equity',
    location: 'Dubai, UAE (DIFC)',
    hub: 'Delhi NCR (DLF Phase 5, Gurugram)',
    division: 'Aegis Complete Stewardship',
    rating: 5,
  },
  {
    id: 't4',
    quote:
      'My mother lives alone in Pune and has mild cognitive decline. I was constantly panicked about her medications and nutrition. The Sparsh daily check-in logs, biometric blood pressure telemetry, and weekly companionship visits have restored joy to her life and given me uninterrupted sleep in Toronto.',
    author: 'Meera Deshmukh',
    role: 'Director of Risk Governance, RBC',
    location: 'Toronto, Canada',
    hub: 'Pune (Koregaon Park & Kalyani Nagar)',
    division: 'Sparsh Full Concierge',
    rating: 5,
  },
];

export const HOSPITAL_PARTNERS = [
  { name: 'Apollo Hospitals', cities: ['Hyderabad', 'Bengaluru', 'Chennai', 'Delhi NCR'] },
  { name: 'Manipal Hospitals', cities: ['Bengaluru', 'Delhi NCR', 'Pune'] },
  { name: 'Fortis Healthcare', cities: ['Bengaluru', 'Delhi NCR', 'Chennai'] },
  { name: 'Max Super Speciality', cities: ['Delhi NCR'] },
  { name: 'Care Hospitals', cities: ['Hyderabad', 'Pune'] },
  { name: 'KIMS Hospitals', cities: ['Hyderabad', 'Bengaluru'] },
];

export const SAMPLE_INSPECTION_REPORT: InspectionReport = {
  propertyId: 'PRP-HYD-782',
  propertyName: 'Prestige High Fields Luxury 3BHK',
  location: 'Tower 4, Flat 1802, Financial District, Hyderabad',
  inspectionDate: 'October 18, 2026',
  inspectorName: 'Suresh Varma (Lead Field Engineer #SC-44)',
  overallScore: 94,
  items: [
    {
      id: 'i1',
      category: 'Structural',
      item: 'Balcony Weatherproofing & Wall Dampness Sensor Audit',
      status: 'Pass',
      notes: 'Infrared moisture detector logged normal levels (6-8%). No dampness spots detected post-monsoon.',
    },
    {
      id: 'i2',
      category: 'Electrical',
      item: 'MCB Trip Test & Geyser Earthing Calibration',
      status: 'Pass',
      notes: 'All 16 breaker circuits triggered within 25ms SLA. Master earth resistance verified at 1.8 ohms.',
    },
    {
      id: 'i3',
      category: 'Plumbing',
      item: 'Master Bath Concealed Diverter & Flush Valve Seal',
      status: 'Attention Needed',
      notes: 'Slight silicone gasket calcification in Kohler shower valve. Preventive replacement scheduled with authorized technician.',
    },
    {
      id: 'i4',
      category: 'Carpentry & Fixtures',
      item: 'Modular Kitchen Blum Soft-Close Hinges & Granite Seal',
      status: 'Pass',
      notes: 'All 24 cabinet shutters realigned and lubricated. Granite perimeter sealed with anti-fungal silicone.',
    },
    {
      id: 'i5',
      category: 'Safety & Compliance',
      item: 'Fire Smoke Detectors & Main Door Smart Lock Biometrics',
      status: 'Pass',
      notes: 'Yale biometric lock battery replaced (100% capacity). Dual optical smoke sensors tested with synthetic aerosol.',
    },
  ],
};

export const SAMPLE_VITALS: ParentVitalRecord[] = [
  {
    id: 'v1',
    timestamp: 'Today, 08:30 AM IST',
    metric: 'Blood Pressure',
    value: '122 / 80 mmHg',
    status: 'Optimal',
    notes: 'Taken resting. Consistently stable within target range for past 3 weeks.',
  },
  {
    id: 'v2',
    timestamp: 'Today, 08:35 AM IST',
    metric: 'Fasting Blood Glucose',
    value: '106 mg/dL',
    status: 'Optimal',
    notes: 'Post overnight fast. HbA1c trajectory estimated at 6.3%.',
  },
  {
    id: 'v3',
    timestamp: 'Yesterday, 06:15 PM IST',
    metric: 'Pulse & SpO2',
    value: '72 bpm | 99% SpO2',
    status: 'Normal',
    notes: 'Measured post-evening stroll in society garden with Care Companion Sister Mary.',
  },
  {
    id: 'v4',
    timestamp: 'Oct 21, 10:00 AM IST',
    metric: 'Body Weight & BMI',
    value: '67.4 kg (BMI 23.6)',
    status: 'Normal',
    notes: 'Stable weight trend. Hydration levels optimal.',
  },
];

export const SAMPLE_DOCTOR_VISIT: DoctorVisitSummary = {
  id: 'doc-994',
  date: 'October 15, 2026',
  doctorName: 'Dr. Srinivas Murthy, MD (Cardiology)',
  specialty: 'Senior Consultant Cardiologist',
  hospital: 'Apollo Hospitals, Jubilee Hills, Hyderabad',
  diagnosis: 'Controlled Hypertension & Type-2 Diabetes Under Optimal Medical Management',
  prescriptions: [
    'Telmisartan 40mg (Morning - Post Breakfast)',
    'Metformin ER 500mg (Night - Post Dinner)',
    'Atorvastatin 10mg (Night)',
    'Vitamin D3 60k IU (Every Sunday)',
  ],
  nextFollowUp: 'November 15, 2026 (Pre-booked by Sparsh Concierge)',
  companionNotes:
    'Patient arrived comfortably in Sparsh executive vehicle. Sister Mary sat through the entire consultation, noted questions from son Vikram in London, and clarified diet sodium limits with the doctor. Prescriptions sourced and sorted into pill dispenser upon return.',
};
