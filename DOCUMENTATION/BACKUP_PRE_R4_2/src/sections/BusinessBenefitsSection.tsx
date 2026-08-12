import React from 'react';
import { Zap, Clock, TrendingUp, ArrowRight } from 'lucide-react';

interface BusinessBenefitsSectionProps {
  onOpenDemo?: () => void;
}

export const BusinessBenefitsSection: React.FC<BusinessBenefitsSectionProps> = ({ onOpenDemo }) => {
  const primaryOutcomes = [
    {
      num: '01',
      title: 'LESS HR ADMIN',
      subtitle: 'Automate repetitive HR workflows & paper forms',
      desc: 'Eliminate paper leave requests, manual spreadsheet formulas, lost receipts, and fragmented employee document files.',
      icon: Zap,
      accent: 'border-l-emerald-500'
    },
    {
      num: '02',
      title: 'FASTER PAYROLL',
      subtitle: 'Connect employee data, attendance, leave & payroll',
      desc: 'Complete monthly Singapore statutory payroll calculation, CPF submission files, and GIRO batch disbursement in minutes.',
      icon: Clock,
      accent: 'border-l-blue-500'
    },
    {
      num: '03',
      title: 'BETTER VISIBILITY',
      subtitle: 'Give managers real-time workforce insights',
      desc: 'Instant executive visibility into headcount growth, overtime outlay, attendance compliance, and employee retention trends.',
      icon: TrendingUp,
      accent: 'border-l-purple-500'
    }
  ];

  return (
    <section className="py-28 bg-ambient-indigo text-slate-900 relative border-b border-indigo-100 overflow-hidden">
      
      {/* Soft Multi-colour Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[520px] bg-gradient-to-tr from-indigo-200/40 via-blue-200/30 to-emerald-200/40 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-800 text-xs font-bold uppercase tracking-wider">
            Tangible Business Outcomes
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
            Transforming HR operations <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-blue-700 to-teal-600">
              into a competitive advantage.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            ezyHR empowers Singapore business owners, HR leaders, and finance managers to spend less time on administration and more time growing.
          </p>
        </div>

        {/* 3 Large Horizontal Editorial Statements on Ambient Canvas */}
        <div className="space-y-8">
          {primaryOutcomes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className={`bg-white/95 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-indigo-100 border-l-4 ${item.accent} shadow-xl hover:border-indigo-300 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-8 group`}
              >
                <div className="flex items-start gap-6 lg:gap-10">
                  <span className="text-6xl sm:text-8xl font-black font-mono text-indigo-300 group-hover:text-indigo-600 transition-colors">
                    {item.num}
                  </span>
                  
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-950">{item.title}</h3>
                      <span className="px-3 py-1 bg-indigo-50 text-indigo-900 text-xs font-bold rounded-lg border border-indigo-100">
                        {item.subtitle}
                      </span>
                    </div>
                    <p className="text-xs sm:text-base text-slate-600 leading-relaxed pt-1 font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="flex-shrink-0 flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center border border-indigo-100 font-bold group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
