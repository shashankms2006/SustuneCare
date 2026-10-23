export type Currency = 'USD' | 'GBP' | 'EUR' | 'AED' | 'CAD' | 'AUD' | 'INR';

export interface CurrencyRate {
  code: Currency;
  symbol: string;
  rate: number;
  prefix: string;
}

export type IndianCity = 'Bengaluru' | 'Hyderabad' | 'Delhi NCR' | 'Pune' | 'Chennai';

export type ServiceDivision = 'bundle' | 'aegis' | 'sparsh';

export interface PropertyInspectionItem {
  id: string;
  category: 'Structural' | 'Electrical' | 'Plumbing' | 'Carpentry & Fixtures' | 'Safety & Compliance';
  item: string;
  status: 'Pass' | 'Attention Needed' | 'Critical Repair';
  notes: string;
  photoUrl?: string;
}

export interface InspectionReport {
  propertyId: string;
  propertyName: string;
  location: string;
  inspectionDate: string;
  inspectorName: string;
  overallScore: number;
  items: PropertyInspectionItem[];
}

export interface ParentVitalRecord {
  id: string;
  timestamp: string;
  metric: string;
  value: string;
  status: 'Normal' | 'Elevated' | 'Optimal';
  notes: string;
}

export interface DoctorVisitSummary {
  id: string;
  date: string;
  doctorName: string;
  specialty: string;
  hospital: string;
  diagnosis: string;
  prescriptions: string[];
  nextFollowUp: string;
  companionNotes: string;
}
