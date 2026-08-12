import React from 'react';
import { Building2, Cloud, Zap, Shield, Smartphone, Layers } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustPillars = [
    { icon: Building2, label: 'Singapore-Focused HRMS' },
    { icon: Cloud, label: '100% Cloud Native' },
    { icon: Zap, label: 'Payroll Automation' },
    { icon: Shield, label: 'Role-Based Security' },
    { icon: Smartphone, label: 'Mobile-Ready ESS' },
    { icon: Layers, label: 'Multi-Company Capable' },
  ];

  return (
    <section className="bg-slate-950 border-y border-slate-800/80 py-6 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 text-center">
          {trustPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="flex items-center justify-center gap-2.5 p-2 rounded-xl bg-slate-900/60 border border-slate-800/60 hover:border-slate-700 transition-colors"
              >
                <Icon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-xs font-semibold tracking-tight text-slate-200">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
