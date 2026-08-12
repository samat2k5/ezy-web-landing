import React from 'react';
import { Settings, Upload, Rocket, ArrowRight } from 'lucide-react';

export const ImplementationSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Configure System Rules',
      desc: 'Our team helps you set up company entities, Singapore statutory payroll rules, leave entitlements, and user permissions.',
      icon: Settings
    },
    {
      num: '02',
      title: 'Seamless Data Import',
      desc: 'Bulk import employee records, salary history, and leave balances via our standard Excel templates with built-in validation.',
      icon: Upload
    },
    {
      num: '03',
      title: 'Team Onboarding & Go Live',
      desc: 'Send mobile ESS invites to your employees, run your first automated Singapore payroll batch, and enjoy stress-free HR operations.',
      icon: Rocket
    }
  ];

  return (
    <section className="py-20 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            Onboarding Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Getting started with ezyHR.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A simple, guided 3-step onboarding process designed to get your organization operational within days.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-900 p-8 rounded-3xl border border-slate-800 relative hover:border-emerald-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-black text-emerald-400 font-mono">{step.num}</span>
                    <div className="w-12 h-12 rounded-2xl bg-slate-950 text-emerald-400 flex items-center justify-center border border-slate-800">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center text-xs text-emerald-400 font-semibold gap-1">
                  Guided Onboarding Support Included
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
