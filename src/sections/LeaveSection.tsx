import React from 'react';
import { Calendar as CalendarIcon, CheckCircle2, ShieldCheck, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface LeaveSectionProps {
  onOpenDemo?: () => void;
}

export const LeaveSection: React.FC<LeaveSectionProps> = ({ onOpenDemo }) => {
  const leaveBenefits = [
    'Real-time statutory leave balance calculation (MOM guidelines)',
    'Instant mobile & email manager approval notifications',
    'Shared team leave calendar for workload visibility',
    'Custom company leave policies & unrecorded leave types',
    'Automatic sync to statutory Singapore payroll'
  ];

  return (
    <section className="py-24 bg-slate-50 text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            Automated Leave Workflows
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
            Leave management <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
              without the paperwork.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Real-time statutory balance tracking, instant manager approval workflows, and team calendar visibility that keeps your business running smoothly.
          </p>
        </div>

        {/* Two-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Crisp Light UI Team Calendar */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-2xl space-y-5 text-slate-900">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-bold">Team Leave Calendar</span>
                  <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-extrabold border border-emerald-200">
                    DEMO DATA
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-950 mt-1">August 2026 Overview</h4>
              </div>
              
              <div className="flex items-center gap-1.5">
                <button className="p-2 bg-slate-50 text-slate-600 hover:text-slate-950 rounded-xl border border-slate-200">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="p-2 bg-slate-50 text-slate-600 hover:text-slate-950 rounded-xl border border-slate-200">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Calendar Event Rows */}
            <div className="space-y-3.5">
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                    TW
                  </div>
                  <div>
                    <span className="font-bold text-slate-950 block">Tan Wei Ming</span>
                    <span className="text-[11px] text-slate-600">Annual Leave (Approved)</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-800 font-bold bg-emerald-100 px-3 py-1 rounded-lg border border-emerald-200">
                  18 Aug - 20 Aug
                </span>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xs">
                    NH
                  </div>
                  <div>
                    <span className="font-bold text-slate-950 block">Nurul Huda</span>
                    <span className="text-[11px] text-slate-600">Medical Leave (MC Verified)</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-amber-800 font-bold bg-amber-100 px-3 py-1 rounded-lg border border-amber-200">
                  12 Aug (1 Day)
                </span>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-xs">
                    KR
                  </div>
                  <div>
                    <span className="font-bold text-slate-950 block">Kavitha R.</span>
                    <span className="text-[11px] text-slate-600">Childcare Leave (Approved)</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-800 font-bold bg-emerald-100 px-3 py-1 rounded-lg border border-emerald-200">
                  25 Aug (1 Day)
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Benefits */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Clear statutory leave entitlement tracking for every employee.
            </h3>
            
            <p className="text-base text-slate-600 leading-relaxed">
              MOM-aligned annual leave, medical leave, and childcare leave balance tracking with instant notification workflows.
            </p>

            <div className="space-y-3 pt-2">
              {leaveBenefits.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => {
                  trackEvent('Demo CTA Click', { source: 'features' });
                  if (onOpenDemo) onOpenDemo();
                }}
                className="px-6 py-3.5 bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center gap-2"
              >
                Explore Leave Module <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
