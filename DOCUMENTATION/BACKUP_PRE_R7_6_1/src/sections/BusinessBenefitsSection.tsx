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
    <section className="py-28 pb-36 lg:pb-44 bg-white text-slate-900 relative border-b border-slate-200 overflow-hidden">
      
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

        {/* 3 Large Horizontal Editorial Manifesto Statements */}
        <div className="space-y-10">
          {primaryOutcomes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white/90 backdrop-blur-xl p-8 sm:p-14 rounded-3xl border border-slate-200/80 shadow-product-ui hover:shadow-2xl transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-8 group"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 flex-1">
                  <span className="editorial-number text-indigo-300/80 group-hover:text-indigo-600 transition-colors font-mono select-none">
                    {item.num}
                  </span>
                  
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 uppercase">{item.title}</h3>
                    </div>
                    <p className="text-sm sm:text-lg font-bold text-slate-800">
                      {item.subtitle}
                    </p>
                    <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-medium max-w-3xl">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="flex-shrink-0 flex items-center">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center border border-indigo-200 font-bold group-hover:scale-110 transition-transform shadow-sm">
                    <Icon className="w-8 h-8" />
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
