import React from 'react';
import { Zap, Clock, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

interface BusinessBenefitsSectionProps {
  onOpenDemo?: () => void;
}

export const BusinessBenefitsSection: React.FC<BusinessBenefitsSectionProps> = ({ onOpenDemo }) => {
  const primaryOutcomes = [
    {
      num: '01',
      title: 'LESS HR ADMIN',
      subtitle: 'Automate repetitive HR workflows',
      desc: 'Eliminate paper leave requests, manual spreadsheet formulas, lost receipts, and fragmented employee document files.',
      icon: Zap
    },
    {
      num: '02',
      title: 'FASTER PAYROLL',
      subtitle: 'Connect employee data, attendance, leave & payroll',
      desc: 'Complete monthly Singapore statutory payroll calculation, CPF submission files, and GIRO batch disbursement in minutes.',
      icon: Clock
    },
    {
      num: '03',
      title: 'BETTER VISIBILITY',
      subtitle: 'Give managers real-time workforce insights',
      desc: 'Instant executive visibility into headcount growth, overtime outlay, attendance compliance, and employee retention trends.',
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-24 bg-slate-950 text-white relative border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Tangible Business Outcomes
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Transforming HR operations <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">
              into a competitive advantage.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            ezyHR empowers Singapore business owners, HR leaders, and finance managers to spend less time on administration and more time growing.
          </p>
        </div>

        {/* 3 Large Outcome Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {primaryOutcomes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between shadow-2xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-4xl font-black font-mono text-emerald-400">{item.num}</span>
                    <div className="w-14 h-14 rounded-2xl bg-slate-950 text-emerald-400 flex items-center justify-center border border-slate-800 font-bold group-hover:scale-105 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  <h3 className="text-xl font-black tracking-tight text-white mb-2">{item.title}</h3>
                  <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-4">{item.subtitle}</h4>
                  
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                </div>

                <div className="pt-6 mt-8 border-t border-slate-800 flex items-center text-xs font-bold text-emerald-400 gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Proven Operational Impact
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
