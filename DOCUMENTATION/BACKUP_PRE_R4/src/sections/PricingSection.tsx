import React from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Building2 } from 'lucide-react';

interface PricingSectionProps {
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenDemo, onOpenTrial }) => {
  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      target: 'Best for SMEs & Startups needing core HR & statutory payroll.',
      badge: 'SME Package',
      features: [
        'Up to 25 Active Employees',
        'Singapore Statutory Payroll Engine (CPF/SDL/SHG)',
        'IRAS AIS & IR8A Export File Generation',
        'Mobile & Web Attendance Check-in',
        'Leave Management & Statutory Entitlements',
        'Itemised Mobile & PDF Payslips',
        'Email & Helpdesk Support'
      ],
      ctaText: 'Book Demo for Starter',
    },
    {
      id: 'professional',
      name: 'Professional',
      target: 'Best for growing companies seeking workforce automation & AI capabilities.',
      popular: true,
      badge: 'Most Popular',
      features: [
        'Up to 100 Active Employees',
        'Everything in Starter Plan',
        'AI HR Policy Q&A Assistant',
        'Payroll Anomaly Detection Engine',
        'GPS Geo-fenced Mobile Attendance',
        'Expense Claims & Photo Receipt Upload',
        'Xero & QuickBooks Accounting Integration',
        'Priority Singapore Support'
      ],
      ctaText: 'Book Demo for Professional',
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      target: 'Best for multi-branch entities, conglomerates, and complex statutory requirements.',
      badge: 'Custom Scale',
      features: [
        'Unlimited Employees & Multi-Entity Group',
        'Everything in Professional Plan',
        'Multi-Company Subsidiary Consolidation',
        'Custom Approval Chains & Custom Fields',
        'Dedicated Onboarding Account Manager',
        'Custom Data Migration & API Access',
        'SLA Guaranteed Response Times'
      ],
      ctaText: 'Contact Enterprise Sales',
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-100/70 text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            SaaS Plan Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Plans tailored for Singapore businesses.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Choose a plan aligned with your employee count and operational scale. Every plan supports Singapore statutory requirements.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`bg-white p-8 sm:p-10 rounded-3xl border relative flex flex-col justify-between transition-all ${
                plan.popular 
                  ? 'border-emerald-500 ring-2 ring-emerald-500/30 shadow-2xl' 
                  : 'border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-extrabold text-slate-900">{plan.name}</h3>
                  <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${
                    plan.popular ? 'bg-emerald-500 text-slate-950' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {plan.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed font-medium">{plan.target}</p>

                <div className="py-4 border-y border-slate-100 mb-6">
                  <span className="text-xs sm:text-sm font-bold text-emerald-700 block">Pricing Information Available on Request</span>
                  <span className="text-xs text-slate-500">Tailored based on active employee volume</span>
                </div>

                <div className="space-y-3 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Key Capabilities</span>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={onOpenDemo}
                  className={`w-full py-4 px-4 font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-emerald-500 hover:bg-emerald-600 text-slate-950 shadow-emerald-500/20'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  {plan.ctaText} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Guarantee Footer */}
        <div className="mt-14 text-center text-xs text-slate-600 font-medium flex flex-wrap justify-center items-center gap-8">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" /> Transparent Custom Quotation
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Free Data Migration Support
          </span>
          <span className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-emerald-600" /> Multi-Company Discounts Available
          </span>
        </div>

      </div>
    </section>
  );
};
