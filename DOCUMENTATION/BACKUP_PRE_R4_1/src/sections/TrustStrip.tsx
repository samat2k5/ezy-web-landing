import React from 'react';
import { Building2, Cloud, Zap, Shield, Smartphone, Layers } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustPillars = [
    { icon: Building2, label: 'Singapore Payroll' },
    { icon: Cloud, label: 'Cloud HRMS' },
    { icon: Zap, label: 'CPF & Statutory Rules' },
    { icon: Shield, label: 'Employee Self Service' },
    { icon: Smartphone, label: 'AI-Assisted HR' },
    { icon: Layers, label: 'Mobile Ready' },
  ];

  return (
    <section className="bg-white border-y border-slate-200 py-8 text-slate-800 shadow-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 text-center">
          {trustPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="flex items-center justify-center gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition-all shadow-xs hover:shadow-sm hover:scale-[1.02] group"
              >
                <Icon className="w-4 h-4 text-emerald-600 flex-shrink-0 group-hover:animate-pulse" />
                <span className="text-xs font-bold tracking-tight text-slate-800">
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
