import React from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Building2, MessageSquare } from 'lucide-react';

interface PricingSectionProps {
  onOpenDemo: (planId?: 'general' | 'essential' | 'professional' | 'business') => void;
  onOpenTrial: (planId?: 'general' | 'essential' | 'professional' | 'business') => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenDemo, onOpenTrial }) => {
  const [billingCycle, setBillingCycle] = React.useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      id: 'essential',
      name: 'Essential',
      monthlyPrice: 4.00,
      annualMonthlyPrice: 3.40,
      annualYearlyPrice: 40.80,
      target: 'For small teams starting HR digitalisation.',
      popular: false,
      badge: null,
      theme: {
        accent: 'text-blue-600',
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        cardBorder: 'border-slate-200 hover:border-blue-300 shadow-sm',
        cta: 'bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors',
        icon: 'text-blue-600'
      },
      features: [
        'Core HR & Digital Employee Records',
        'Singapore Statutory Payroll (CPF / SDL / SHG)',
        'Leave Management & Statutory Entitlements',
        'Itemised Mobile & PDF Payslips',
        'Basic Attendance Tracking',
        'Employee Self-Service (ESS) Portal',
        'Email & Helpdesk Support',
      ],
      ctaText: 'Request Free Trial',
      onCtaClick: () => onOpenTrial('essential')
    },
    {
      id: 'professional',
      name: 'Professional',
      monthlyPrice: 7.00,
      annualMonthlyPrice: 5.95,
      annualYearlyPrice: 71.40,
      target: 'For growing Singapore SMEs.',
      popular: true,
      badge: 'MOST POPULAR',
      theme: {
        accent: 'text-emerald-700',
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        cardBorder: 'border-2 border-emerald-600 shadow-md shadow-slate-200/50 relative z-10',
        cta: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-colors',
        icon: 'text-emerald-600'
      },
      features: [
        'Everything in Essential',
        'GPS Geo-fenced Attendance & Shift Scheduling',
        'Expense Claims & Photo Receipt Upload',
        'IRAS AIS & IR8A Export File Generation',
        'Supported Singapore Bank GIRO Exports',
        'Enhanced Workforce Reporting',
        'Management Dashboards',
        'Priority Singapore Support',
      ],
      ctaText: 'Request Free Trial',
      onCtaClick: () => onOpenTrial('professional')
    },
    {
      id: 'business',
      name: 'Business',
      monthlyPrice: 10.00,
      annualMonthlyPrice: 8.50,
      annualYearlyPrice: 102.00,
      target: 'For organisations requiring advanced controls and workforce intelligence.',
      popular: false,
      badge: null,
      theme: {
        accent: 'text-[#1E3A5F]',
        bg: 'bg-slate-50',
        border: 'border-slate-200',
        cardBorder: 'border-slate-200 hover:border-[#1E3A5F]/50 shadow-sm',
        cta: 'bg-[#1E3A5F] hover:bg-[#152A46] text-white transition-colors',
        icon: 'text-[#1E3A5F]'
      },
      features: [
        'Everything in Professional',
        'Workforce Intelligence & Analytics',
        'Advanced Role-Based Permissions',
        'Detailed Audit Trail Access',
        'Advanced Payroll Anomaly Detection',
        'Supported Accounting Integrations',
        'Priority Support & Dedicated Onboarding',
      ],
      ctaText: 'Book a Demo',
      onCtaClick: () => onOpenDemo('business')
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50 text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200/50 border border-slate-300/50 text-slate-800 text-xs font-bold uppercase tracking-wider">
            PRICING
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950">
            Simple pricing for growing teams.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Start from <span className="font-extrabold text-slate-900">S$4 / employee / month</span>
            <span className="block mt-2 text-sm font-medium">GST included · No setup fee · Start in minutes</span>
          </p>

          {/* Billing Cycle Toggle */}
          <div className="pt-4 flex items-center justify-center">
            <div 
              role="group"
              aria-label="Billing cycle selector"
              className="inline-flex items-center p-1 bg-slate-100 border border-slate-200 rounded-2xl"
            >
              <button
                onClick={() => setBillingCycle('monthly')}
                aria-pressed={billingCycle === 'monthly'}
                className={`px-5 py-2 rounded-xl text-xs font-extrabold transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                aria-pressed={billingCycle === 'annual'}
                className={`px-5 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                  billingCycle === 'annual'
                    ? 'bg-emerald-500 text-slate-950 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <span>Annual</span>
                <span className="px-2 py-0.5 rounded-full bg-slate-950 text-emerald-400 text-[10px] font-black tracking-wider">
                  SAVE 15%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`bg-white rounded-2xl border flex flex-col transition-all ${plan.theme.cardBorder}`}
            >
              {/* Pale Accent Header Area */}
              <div className={`${plan.theme.bg} rounded-t-2xl border-b ${plan.theme.border} p-6 sm:p-7 relative`}>
                {/* Popular badge */}
                {plan.badge && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider shadow-sm whitespace-nowrap border border-emerald-700">
                      {plan.badge}
                    </span>
                  </div>
                )}
                <h3 className={`text-xl font-extrabold mb-1 ${plan.theme.accent}`}>{plan.name}</h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">{plan.target}</p>
              </div>

              <div className="flex-1 p-6 sm:p-7 pt-5 flex flex-col">
                {/* Price */}
                <div className="mb-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs font-bold text-slate-500 mt-1">S$</span>
                    <span className="text-5xl font-black text-slate-950 tracking-tight">
                      {billingCycle === 'monthly' 
                        ? plan.monthlyPrice.toFixed(0)
                        : plan.annualMonthlyPrice.toFixed(2)
                      }
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    / employee / month{billingCycle === 'annual' ? ' effective' : ''}
                  </div>
                  {billingCycle === 'annual' && (
                    <div className="mt-1 text-[11px] text-slate-400 font-medium">
                      S${plan.annualYearlyPrice.toFixed(2)} / employee / year · Billed annually
                    </div>
                  )}
                </div>

                <div className="py-4 border-b border-slate-100 mb-5">
                  <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">
                    GST included
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.theme.icon}`} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={plan.onCtaClick}
                  className={`mt-auto w-full py-3.5 px-4 font-extrabold text-sm rounded-xl flex items-center justify-center gap-2 ${plan.theme.cta}`}
                >
                  {plan.ctaText} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Commercial Reassurance Strip */}
        <div className="mt-10 max-w-4xl mx-auto flex flex-col items-center gap-3">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-xs text-slate-700 font-bold">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> GST included</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> No setup fee</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Guided onboarding</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Upgrade as you grow</span>
          </div>
          <p className="text-xs text-slate-500 font-medium text-center">
            No setup fee. Choose the plan that fits your team and scale as you grow.
          </p>
        </div>

        {/* Volume pricing footer */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-slate-200">
          <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-5 py-3">
            <MessageSquare className="w-4 h-4 text-slate-600 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-slate-900">100+ employees?</div>
              <button 
                onClick={() => onOpenDemo('general')}
                className="text-xs text-emerald-700 font-bold hover:text-emerald-900 transition-colors"
              >
                Talk to us about volume pricing →
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
