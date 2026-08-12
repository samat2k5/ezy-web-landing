import React from 'react';
import { Settings, Upload, Rocket } from 'lucide-react';

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
    <section className="py-24 bg-white text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            Onboarding Methodology
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Getting started with ezyHR.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
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
                className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 relative hover:border-slate-300 transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-4xl font-black text-emerald-600 font-mono">{step.num}</span>
                    <div className="w-14 h-14 rounded-2xl bg-white text-emerald-600 flex items-center justify-center border border-slate-200 font-bold shadow-xs">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                </div>

                <div className="pt-6 mt-8 border-t border-slate-200 flex items-center text-xs text-emerald-700 font-bold">
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
