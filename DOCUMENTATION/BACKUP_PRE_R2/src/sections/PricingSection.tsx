import React from 'react';
import { CheckCircle2, ArrowRight, Sparkles, Building2, ShieldCheck } from 'lucide-react';

interface PricingSectionProps {
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenDemo, onOpenTrial }) => {
  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      target: 'Ideal for SMEs & Startups needing core HR & statutory payroll.',
      badge: 'SME Package',
      features: [
        'Up to 25 Active Employees',
        'Singapore Statutory Payroll Engine (CPF/SDL/SHG)',
        'IRAS AIS & IR8A Export File Generation',
        'Mobile & Web Attendance Check-in',
        'Leave Management & Statutory Entitlements',
        'Itemized Mobile & PDF Payslips',
        'Email & Helpdesk Support'
      ],
      ctaText: 'Book Demo for Starter',
      ctaAction: 'demo'
    },
    {
      id: 'professional',
      name: 'Professional',
      target: 'For growing companies seeking complete workforce automation & AI capabilities.',
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
      ctaAction: 'demo'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      target: 'For multi-branch entities, conglomerates, and complex statutory requirements.',
      badge: 'Custom Organization',
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
      ctaAction: 'contact'
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            Flexible SaaS Plans
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Transparent plans tailored for Singapore businesses.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Choose a plan aligned with your employee count and operational scale. Every plan includes full Singapore statutory compliance.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`bg-slate-950 p-8 rounded-3xl border relative flex flex-col justify-between transition-all ${
                plan.popular 
                  ? 'border-emerald-500 ring-2 ring-emerald-500/30 shadow-2xl shadow-emerald-500/10' 
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-extrabold text-white">{plan.name}</h3>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    plan.popular ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300'
                  }`}>
                    {plan.badge}
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-6 leading-relaxed">{plan.target}</p>

                <div className="py-4 border-y border-slate-800 mb-6">
                  <span className="text-sm font-semibold text-emerald-400 block">Custom Quotation</span>
                  <span className="text-xs text-slate-400">Tailored based on active employee volume</span>
                </div>

                <div className="space-y-3 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Features Included</span>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={onOpenDemo}
                  className={`w-full py-3.5 px-4 font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 text-white shadow-emerald-500/20'
                      : 'bg-slate-800 hover:bg-slate-700 text-white'
                  }`}
                >
                  {plan.ctaText} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Guarantee Footer */}
        <div className="mt-12 text-center text-xs text-slate-400 flex flex-wrap justify-center items-center gap-6">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> No Hidden Setup Fees
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Free Data Migration Support
          </span>
          <span className="flex items-center gap-1.5">
            <Building2 className="w-4 h-4 text-emerald-400" /> Multi-Company Discounts Available
          </span>
        </div>

      </div>
    </section>
  );
};
