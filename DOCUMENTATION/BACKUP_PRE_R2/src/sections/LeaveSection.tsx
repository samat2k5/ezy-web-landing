import React, { useState } from 'react';
import { Calendar as CalendarIcon, CheckCircle2, Clock, UserCheck, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

export const LeaveSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'statutory' | 'custom'>('statutory');

  const leaveTypes = [
    { name: 'Annual Leave', days: '14 - 21 Days', type: 'statutory', badge: 'MOM Standard' },
    { name: 'Outpatient Medical (MC)', days: '14 Days', type: 'statutory', badge: 'Paid Sick Leave' },
    { name: 'Hospitalisation Leave', days: '60 Days (incl. MC)', type: 'statutory', badge: 'Statutory' },
    { name: 'Childcare Leave', days: '6 Days', type: 'statutory', badge: 'MOM Statutory' },
    { name: 'Paternity / Maternity', days: '2 - 16 Weeks', type: 'statutory', badge: 'Government Paid' },
    { name: 'Marriage / Compassionate', days: '3 Days', type: 'custom', badge: 'Company Entitlement' },
    { name: 'Unpaid Leave (NPL)', days: 'Flexible', type: 'custom', badge: 'Manager Approval' },
    { name: 'Exam / Study Leave', days: '2 - 5 Days', type: 'custom', badge: 'Custom Category' },
  ];

  const filteredLeave = leaveTypes.filter(l => selectedCategory === 'statutory' ? l.type === 'statutory' : true);

  return (
    <section className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider">
            Automated Leave Management
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Leave management without the paperwork.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Real-time balance tracking, instant manager approvals, and team calendar visibility that keeps your business running smoothly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Leave Types */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Singapore Leave Entitlements</h3>
              
              <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
                <button
                  onClick={() => setSelectedCategory('statutory')}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                    selectedCategory === 'statutory' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400'
                  }`}
                >
                  Statutory
                </button>
                <button
                  onClick={() => setSelectedCategory('custom')}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                    selectedCategory === 'custom' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400'
                  }`}
                >
                  All Categories
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {filteredLeave.map((leave, idx) => (
                <div 
                  key={idx}
                  className="p-4 bg-slate-950 rounded-xl border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center font-bold text-xs">
                      <CalendarIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{leave.name}</h4>
                      <span className="text-xs text-slate-400">{leave.badge}</span>
                    </div>
                  </div>

                  <span className="text-xs font-semibold px-3 py-1 bg-slate-900 text-emerald-400 rounded-lg border border-slate-800">
                    {leave.days}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Leave Calendar Mockup */}
          <div className="lg:col-span-6 bg-slate-950 p-6 rounded-3xl border border-slate-800 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-bold">Team Leave Calendar</span>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  August 2026 Overview
                </h4>
              </div>
              
              <div className="flex items-center gap-1">
                <button className="p-1.5 bg-slate-900 text-slate-400 hover:text-white rounded-lg border border-slate-800">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="p-1.5 bg-slate-900 text-slate-400 hover:text-white rounded-lg border border-slate-800">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Calendar Mock Grid */}
            <div className="space-y-3">
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                    TW
                  </div>
                  <div>
                    <span className="font-bold text-white block">Tan Wei Ming</span>
                    <span className="text-[11px] text-slate-400">Annual Leave (Approved)</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded">
                  18 Aug - 20 Aug
                </span>
              </div>

              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                    NH
                  </div>
                  <div>
                    <span className="font-bold text-white block">Nurul Huda</span>
                    <span className="text-[11px] text-slate-400">Medical Leave (Pending MC Upload)</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded">
                  12 Aug (1 Day)
                </span>
              </div>

              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs">
                    KR
                  </div>
                  <div>
                    <span className="font-bold text-white block">Kavitha R.</span>
                    <span className="text-[11px] text-slate-400">Childcare Leave (Approved)</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded">
                  25 Aug (1 Day)
                </span>
              </div>
            </div>

            <div className="pt-2 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Automated statutory balance calculation & manager notification</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
