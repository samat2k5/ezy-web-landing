import React, { useState } from 'react';
import { Building2, UserCheck, Calculator, Briefcase, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface PersonaSelectorProps {
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

type PersonaId = 'owner' | 'hr' | 'finance' | 'md';

interface Persona {
  id: PersonaId;
  title: string;
  role: string;
  badge: string;
  quote: string;
  icon: React.ElementType;
  benefits: string[];
  ctaPrimaryText: string;
}

const PERSONAS: Persona[] = [
  {
    id: 'owner',
    title: 'Singapore SME Owner',
    role: 'Business Owner & Founder',
    badge: 'SME Growth & Compliance',
    quote: 'I need payroll and HR to run accurately without taking up my weekends or risking MOM penalties.',
    icon: Building2,
    benefits: [
      'Statutory 2026 CPF, SDL, and SHG automated with zero manual spreadsheet calculations',
      'One-click IRAS AIS IR8A export ready for annual tax reporting',
      'Transparent employee self-service to reduce routine administrative interruptions'
    ],
    ctaPrimaryText: 'See SME Demo'
  },
  {
    id: 'hr',
    title: 'HR Manager',
    role: 'HR Lead & Administrator',
    badge: 'Workforce Productivity',
    quote: 'I want a unified platform for employee records, leave approvals, attendance tracking, and onboarding.',
    icon: UserCheck,
    benefits: [
      'Digital employee master profiles with automated work pass and contract renewal alerts',
      'MOM-compliant leave balances and real-time leave entitlement tracking',
      'GPS-verified mobile clock-in/out for shift workers and remote staff'
    ],
    ctaPrimaryText: 'Explore HR Workflows'
  },
  {
    id: 'finance',
    title: 'Finance / Payroll',
    role: 'Finance Manager & Payroll Lead',
    badge: 'Financial Audit & GIRO',
    quote: 'I need bank-ready GIRO files, accurate cost allocation, and audit visibility before payroll release.',
    icon: Calculator,
    benefits: [
      'Instant Singapore bank GIRO file generation (DBS, OCBC, UOB, HSBC, Maybank)',
      'Itemised digital payslips sent securely to employee mobile devices',
      'Pre-run anomaly checks to flag overtime spikes or statutory cap overrides'
    ],
    ctaPrimaryText: 'Test Payroll Engine'
  },
  {
    id: 'md',
    title: 'Managing Director',
    role: 'Executive & Business Leader',
    badge: 'Executive Oversight',
    quote: 'I want clear visibility into headcount cost trends, attrition risk, and workforce productivity.',
    icon: Briefcase,
    benefits: [
      'Executive management dashboards tracking monthly payroll variance and overtime trends',
      'Granular role-based access controls to safeguard confidential executive compensation',
      'Predictive workforce analytics to support headcount planning and hiring budgets'
    ],
    ctaPrimaryText: 'Request Executive Preview'
  }
];

export const PersonaSelector: React.FC<PersonaSelectorProps> = ({ onOpenDemo, onOpenTrial }) => {
  const [activePersonaId, setActivePersonaId] = useState<PersonaId>('owner');

  const activePersona = PERSONAS.find(p => p.id === activePersonaId) || PERSONAS[0];

  return (
    <section className="py-20 bg-slate-50 text-slate-900 relative border-b border-slate-200 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" /> Built for Your Role
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
            How <span className="text-gradient-hero">ezyHR Works for You</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Tailored HR and payroll workflows engineered for Singapore business owners, HR managers, finance leaders, and executives.
          </p>
        </div>

        {/* Persona Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          {PERSONAS.map(persona => {
            const Icon = persona.icon;
            const isActive = persona.id === activePersonaId;
            return (
              <button
                key={persona.id}
                onClick={() => setActivePersonaId(persona.id)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col gap-2.5 ${
                  isActive
                    ? 'bg-white border-2 border-emerald-500 shadow-md text-slate-950'
                    : 'bg-white/80 border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                <div className={`p-2 rounded-xl w-fit ${isActive ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold leading-tight text-slate-950">{persona.title}</div>
                  <div className="text-[11px] text-slate-500 font-medium">{persona.role}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Persona Dynamic Detail Card (Light Canvas + Rich Content) */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Detail Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 bg-emerald-100 border border-emerald-200 text-emerald-800 text-[11px] font-bold tracking-wider rounded-full">
                {activePersona.badge}
              </div>

              <blockquote className="text-lg sm:text-xl font-medium text-slate-900 italic border-l-2 border-emerald-500 pl-4 py-1">
                "{activePersona.quote}"
              </blockquote>

              <div className="space-y-3 pt-2">
                {activePersona.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={() => {
                    trackEvent('Demo CTA Click', { source: 'features' });
                    onOpenDemo();
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md"
                >
                  {activePersona.ctaPrimaryText} <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenTrial}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-xl transition-all shadow-xs"
                >
                  Start Free Trial
                </button>
              </div>
            </div>

            {/* Right Summary Box (Dark Component Anchor) */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 space-y-4 shadow-md">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Outcome</div>
              <div className="text-2xl font-black text-white leading-tight">
                Clear, Compliant HR &amp; Payroll Administration
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                ezyHR aligns with Singapore MOM guidelines, statutory CPF Board parameters, and IRAS AIS standards to keep your business 100% compliant.
              </p>
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>UEN: 201723665M</span>
                <span className="text-emerald-400 font-semibold">Demo Sandbox Ready</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
