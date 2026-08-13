import React from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Building2, MessageSquare } from 'lucide-react';

interface PricingSectionProps {
  onOpenDemo: () => void;
  onOpenTrial: () => void;
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
      features: [
        'Core HR & Digital Employee Records',
        'Singapore Statutory Payroll (CPF / SDL / SHG)',
        'Leave Management & Statutory Entitlements',
        'Itemised Mobile & PDF Payslips',
        'Basic Attendance Tracking',
        'Employee Self-Service (ESS) Portal',
        'Email & Helpdesk Support',
      ],
      ctaText: 'Get Started',
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
      ctaText: 'Get Started',
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
      features: [
        'Everything in Professional',
        'Workforce Intelligence & Analytics',
        'Advanced Role-Based Permissions',
        'Detailed Audit Trail Access',
        'Advanced Payroll Anomaly Detection',
        'Supported Accounting Integrations',
        'Priority Support & Dedicated Onboarding',
      ],
      ctaText: 'Get Started',
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50 text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950">
            Simple pricing for growing teams.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Built for Singapore SMEs — from growing teams to established multi-department organisations. All prices are GST-inclusive.
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
              className={`bg-white p-7 sm:p-8 rounded-2xl border relative flex flex-col transition-all ${
                plan.popular 
                  ? 'border-2 border-emerald-500 shadow-xl shadow-slate-900/8' 
                  : 'border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-sm whitespace-nowrap">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="flex-1">
                {/* Plan name */}
                <h3 className="text-xl font-extrabold text-slate-950 mb-1">{plan.name}</h3>
                <p className="text-xs text-slate-500 font-medium mb-5 leading-relaxed">{plan.target}</p>

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
                    per employee / month{billingCycle === 'annual' ? ' effective' : ''}
                  </div>
                  {billingCycle === 'annual' && (
                    <div className="mt-1 text-[11px] text-slate-400 font-medium">
                      S${plan.annualYearlyPrice.toFixed(2)} / employee / year · Billed annually
                    </div>
                  )}
                </div>

                <div className="py-4 border-t border-slate-100 mt-4 mb-5">
                  <span className="text-[11px] text-emerald-700 font-bold">
                    All prices include GST
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-2.5 mb-6">
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={onOpenDemo}
                className={`mt-auto w-full py-3.5 px-4 font-extrabold text-sm rounded-xl transition-all flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-slate-950 shadow-md'
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
              >
                {plan.ctaText} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Pricing notes */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center">
          <p className="text-xs text-slate-500 font-medium">
            Minimum subscription S$30/month, GST included. Annual plans from S$306/year minimum.
          </p>
        </div>

        {/* Volume pricing + trust footer */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-slate-200">
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-6 text-xs text-slate-600 font-semibold">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Singapore statutory payroll included
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> No hidden fees
            </span>
            <span className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-emerald-600" /> All plans include GST
            </span>
          </div>
          <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-5 py-3">
            <MessageSquare className="w-4 h-4 text-slate-600 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-slate-900">100+ employees?</div>
              <button 
                onClick={onOpenDemo}
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
