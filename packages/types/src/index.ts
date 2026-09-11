export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle?: string;
  category: 'tax' | 'accounting' | 'compliance';
  categoryLabel: string;
  iconName: string;
  shortDescription: string;
  fullOverview: string;
  keyHighlights: string[];
  whatWeHelpWith: string[];
  keyBenefits: string[];
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  requiredDocuments?: string[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceRequired: string;
  subject?: string;
  message: string;
}

export interface ContactSubmissionResponse {
  success: boolean;
  message: string;
  referenceId?: string;
  timestamp: string;
}

export interface ConsultationRequestData {
  fullName: string;
  phone: string;
  preferredTime?: string;
  serviceCategory: string;
  notes?: string;
}

export interface FirmInfo {
  name: string;
  legalStatus: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    cityArea: string;
    state: string;
    fullText: string;
  };
  whatsappUrl: string;
  businessHours: string;
}
