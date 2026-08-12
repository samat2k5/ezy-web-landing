import React from 'react';
import { Zap, Clock, ShieldCheck, FileCheck, Users, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

export const BusinessBenefitsSection: React.FC = () => {
  const businessOutcomes = [
    {
      title: 'Dramatically Reduced Administration',
      desc: 'Automate repetitive paper leave forms, manual attendance logs, and spreadsheet formulas.',
      icon: Zap
    },
    {
      title: 'Faster Payroll Processing',
      desc: 'Complete monthly Singapore statutory payroll calculation and GIRO file generation in minutes.',
      icon: Clock
    },
    {
      title: 'Centralized Employee Master Records',
      desc: 'Eliminate fragmented records. Keep all employee contracts, work passes, and records in one secure vault.',
      icon: Users
    },
    {
      title: 'Seamless Statutory Compliance Workflows',
      desc: 'Designed for Singapore statutory rules including CPF, SDL, SHG, IRAS AIS, and annual IR8A filing.',
      icon: ShieldCheck
    },
    {
      title: 'Real-time Executive Visibility',
      desc: 'Instant access to headcount distribution, overtime costs, leave utilization, and workforce analytics.',
      icon: TrendingUp
    },
    {
      title: 'Modern Employee Experience',
      desc: 'Give your team mobile access to check leave balances, submit claims, and view itemized payslips.',
      icon: Sparkles
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            Tangible Business Value
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Transforming HR operations into a competitive advantage.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            ezyHR empowers Singapore business owners, HR managers, and finance teams to spend less time on administration and more time growing.
          </p>
        </div>

        {/* Outcome Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessOutcomes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-900 flex items-center gap-1.5 text-emerald-400 text-[11px] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Proven Operational Impact
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
