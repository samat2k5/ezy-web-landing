import React from 'react';
import { Settings, Upload, Rocket } from 'lucide-react';

export const ImplementationSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Set Up Your Organisation',
      desc: 'Configure company details, HR policies and payroll settings.',
      icon: Settings
    },
    {
      num: '02',
      title: 'Add or Migrate Your People',
      desc: 'Add employees immediately or bring existing employee records into ezyHR.',
      icon: Upload
    },
    {
      num: '03',
      title: 'Start Working',
      desc: 'Invite your team and begin managing attendance, leave, payroll and employee self-service.',
      icon: Rocket
    }
  ];

  return (
    <section className="py-24 bg-white text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            GETTING STARTED WITH EZYHR
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
            Start in minutes. Migrate in hours.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            New organisations can configure ezyHR and start fresh within minutes. Existing HR data can be migrated and structured within hours, depending on data volume and readiness.
          </p>
        </div>

        {/* Three Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="relative bg-white rounded-2xl border border-slate-200 p-7 shadow-sm">
                {/* Step number watermark */}
                <div className="absolute top-5 right-6 text-[64px] font-black text-slate-100 leading-none select-none">
                  {step.num}
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-emerald-700" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-950 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">{step.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Timing note */}
        <div className="text-center space-y-1">
          <p className="text-sm font-semibold text-slate-700">
            Fresh setup in minutes · Existing-data migration typically within hours*
          </p>
          <p className="text-xs text-slate-400 font-medium">
            *Timing depends on data volume, format and complexity.
          </p>
        </div>

      </div>
    </section>
  );
};
