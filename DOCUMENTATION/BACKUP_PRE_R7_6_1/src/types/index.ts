export type FeatureStatus = 'AVAILABLE' | 'COMING SOON' | 'PLANNED';

export interface ModuleItem {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  status: FeatureStatus;
  keyFeatures: string[];
  category: 'core' | 'workforce' | 'payroll' | 'ai';
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  targetAudience: string;
  popular?: boolean;
  features: {
    title: string;
    included: boolean;
    badge?: string;
  }[];
  ctaText: string;
  ctaAction: 'demo' | 'trial' | 'contact';
}

export interface DemoFormData {
  fullName: string;
  workEmail: string;
  phone: string;
  companyName: string;
  employeeCount: string;
  modules: string[];
  preferredDate?: string;
  notes?: string;
}
