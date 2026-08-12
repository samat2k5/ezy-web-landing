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
    <section className="py-24 bg-slate-950 text-white relative border-b border-slate-900 overflow-hidden">
      
      {/* Soft Multi-colour Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-emerald-500/15 via-blue-600/15 to-purple-600/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Tangible Business Outcomes
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Transforming HR operations <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400">
              into a competitive advantage.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            ezyHR empowers Singapore business owners, HR leaders, and finance managers to spend less time on administration and more time growing.
          </p>
        </div>

        {/* 3 Large Horizontal Editorial Statements */}
        <div className="space-y-8">
          {primaryOutcomes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className={`bg-slate-900/90 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-slate-800 border-l-4 ${item.accent} shadow-2xl hover:border-slate-700 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-8 group`}
              >
                <div className="flex items-start gap-6 lg:gap-10">
                  <span className="text-5xl sm:text-7xl font-black font-mono text-slate-700 group-hover:text-emerald-400 transition-colors">
                    {item.num}
                  </span>
                  
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">{item.title}</h3>
                      <span className="px-3 py-1 bg-slate-800 text-emerald-400 text-xs font-bold rounded-lg border border-slate-700">
                        {item.subtitle}
                      </span>
                    </div>
                    <p className="text-xs sm:text-base text-slate-300 leading-relaxed pt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="flex-shrink-0 flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-slate-950 text-emerald-400 flex items-center justify-center border border-slate-800 font-bold group-hover:scale-110 transition-transform">
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
