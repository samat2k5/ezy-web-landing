import React, { useState } from 'react';
import { Building2, Users, Calculator, Briefcase, ArrowRight, CheckCircle2, Shield, Sparkles } from 'lucide-react';

interface PersonaSelectorProps {
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

type PersonaId = 'owner' | 'hrmanager' | 'finance' | 'md';

interface PersonaData {
  id: PersonaId;
  title: string;
  role: string;
  icon: React.ComponentType<{ className?: string }>;
  quote: string;
  benefits: string[];
  ctaPrimaryText: string;
  badge: string;
}

const PERSONAS: PersonaData[] = [
  {
    id: 'owner',
    title: 'SME Owner',
    role: 'Business Leadership',
    icon: Building2,
    quote: 'I need HR and payroll handled correctly without building a large HR department.',
    benefits: [
      'Spend less time on HR administration and more time growing your business',
      'Automated Singapore CPF, SDL, and statutory calculations built-in',
      'Risk-free setup with zero heavy software infrastructure overhead'
    ],
    ctaPrimaryText: 'Book a Free Demo',
    badge: 'FOR BUSINESS OWNERS'
  },
  {
    id: 'hrmanager',
    title: 'HR Manager',
    role: 'People Operations',
    icon: Users,
    quote: 'I need one place to manage employees, attendance, leave and payroll.',
    benefits: [
      'Manage employee records, leave approvals, and time tracking in one workspace',
      'Empower staff with mobile Employee Self-Service (ESS) for claims and payslips',
      'Automate repetitive workflows and eliminate manual spreadsheet tracking'
    ],
    ctaPrimaryText: 'Book a Free Demo',
    badge: 'FOR HR TEAMS'
  },
  {
    id: 'finance',
    title: 'Finance & Payroll',
    role: 'Financial Compliance',
    icon: Calculator,
    quote: 'I need 100% accurate payroll, bank GIRO files, and statutory reporting.',
    benefits: [
      'Exact Singapore statutory rounding (Math.floor() employee CPF, Math.round() employer CPF)',
      'Export audit-ready bank GIRO files (DBS, UOB, OCBC, HSBC) and IRAS AIS (.xml)',
      'Complete transparency across gross-to-net calculations, SDL, and SHG'
    ],
    ctaPrimaryText: 'Book a Free Demo',
    badge: 'FOR PAYROLL MANAGERS'
  },
  {
    id: 'md',
    title: 'Managing Director',
    role: 'Executive Management',
    icon: Briefcase,
    quote: 'I need visibility and control without getting buried in HR administration.',
    benefits: [
      'Clear management intelligence dashboards for headcount, leave, and payroll costs',
      'Role-based access controls and audit trails to keep company HR data secure',
      'Unified visibility across multi-branch teams and departments'
    ],
    ctaPrimaryText: 'Book a Free Demo',
    badge: 'FOR EXECUTIVE LEADERS'
  }
];

export const PersonaSelector: React.FC<PersonaSelectorProps> = ({ onOpenDemo, onOpenTrial }) => {
  const [activePersonaId, setActivePersonaId] = useState<PersonaId>('owner');

  const activePersona = PERSONAS.find(p => p.id === activePersonaId) || PERSONAS[0];

  return (
    <section className="py-20 bg-slate-900 text-white relative border-b border-slate-800 overflow-hidden">
      
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-sky-600/10 via-emerald-600/10 to-transparent blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Built for Your Role
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            How <span className="text-gradient-hero">ezyHR Works for You</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
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
                    ? 'bg-slate-800/90 border-emerald-500/50 shadow-glow-emerald text-white'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className={`p-2 rounded-xl w-fit ${isActive ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold leading-tight">{persona.title}</div>
                  <div className="text-[11px] text-slate-400 font-medium">{persona.role}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Persona Dynamic Detail Card */}
        <div className="max-w-4xl mx-auto bg-slate-950/80 rounded-3xl border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Detail Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold tracking-wider rounded-full">
                {activePersona.badge}
              </div>

              <blockquote className="text-lg sm:text-xl font-medium text-slate-100 italic border-l-2 border-emerald-500 pl-4 py-1">
                "{activePersona.quote}"
              </blockquote>

              <div className="space-y-3 pt-2">
                {activePersona.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={onOpenDemo}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md"
                >
                  {activePersona.ctaPrimaryText} <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenTrial}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm rounded-xl transition-all border border-slate-700"
                >
                  Start Free Trial
                </button>
              </div>
            </div>

            {/* Right Summary Box */}
            <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Outcome</div>
              <div className="text-2xl font-black text-white leading-tight">
                Clear, Compliant HR &amp; Payroll Administration
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                ezyHR aligns with Singapore MOM guidelines, statutory CPF Board parameters, and IRAS AIS standards to keep your business 100% compliant.
              </p>
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
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
