import React from 'react';
import { Users, CheckCircle2, Globe, Phone, FileText, Heart, Shield, ArrowRight } from 'lucide-react';

const annotations = [
  { label: 'Work Pass Verified', color: 'text-sky-600 bg-sky-50 border-sky-200', top: '12%', right: '-8%' },
  { label: 'CPF Enrolled', color: 'text-emerald-600 bg-emerald-50 border-emerald-200', top: '35%', right: '-10%' },
  { label: 'Leave Balance: 14d', color: 'text-amber-600 bg-amber-50 border-amber-200', bottom: '30%', right: '-6%' },
  { label: 'Emergency Contact', color: 'text-violet-600 bg-violet-50 border-violet-200', bottom: '12%', left: '-6%' },
];

export const CoreHRSection: React.FC = () => {
  return (
    <section className="relative bg-ambient-ice py-24 lg:py-36 overflow-hidden">

      {/* Atmospheric glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[700px] h-[500px] -translate-y-1/2 bg-gradient-to-r from-sky-200/30 to-transparent blur-[120px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-gradient-to-bl from-blue-100/40 to-transparent blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-lg">
            <Users className="w-4 h-4 text-white" />
          </div>
          <span className="text-xs font-black uppercase tracking-widest text-sky-700">Core HR</span>
        </div>

        {/* Two-column asymmetric layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

          {/* Left — editorial copy */}
          <div className="lg:w-[40%] space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.05]">
              One place for every employee.
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              A complete digital employee record — work history, documents, work passes, CPF enrolment, emergency contacts and more — accessible by HR, manager and employee.
            </p>

            <div className="space-y-4">
              {[
                'Digital employee master records with full audit trail',
                'Work pass management and expiry alerts (EP, SP, WP)',
                'Organisation chart and department structure',
                'Role-based access control',
                'New hire onboarding workflow',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4.5 h-4.5 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-2 text-sm font-bold text-sky-700 hover:text-sky-900 transition-colors group">
              See Core HR in action <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Right — large employee profile UI */}
          <div className="lg:w-[60%] relative">
            <div className="relative">
              {/* Main employee record card */}
              <div className="bg-white rounded-3xl shadow-product-ui overflow-hidden border border-slate-200/60">

                {/* Profile header */}
                <div className="bg-gradient-to-r from-sky-600 to-blue-700 px-7 py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 border-2 border-white/40 flex items-center justify-center text-white text-2xl font-black">
                      TW
                    </div>
                    <div className="text-white">
                      <div className="text-xl font-black">Tan Wei Ming</div>
                      <div className="text-sky-200 text-sm font-medium">Senior Software Engineer · Engineering</div>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full">EMP-0001</span>
                        <span className="text-[10px] font-bold bg-emerald-400/30 text-emerald-200 px-2 py-0.5 rounded-full">Active</span>
                        <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full">Singapore Citizen</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Record details grid */}
                <div className="p-6 grid grid-cols-2 gap-4">
                  {[
                    { label: 'NRIC', value: 'S●●●●●●8A', icon: FileText },
                    { label: 'Date Joined', value: '15 Mar 2022', icon: CheckCircle2 },
                    { label: 'Base Salary', value: '$6,800 / mth', icon: null },
                    { label: 'CPF Rate', value: '20% / 17%', icon: null },
                    { label: 'Department', value: 'Engineering', icon: null },
                    { label: 'Work Status', value: 'Singapore Citizen', icon: null },
                    { label: 'Annual Leave', value: '14 days remaining', icon: null },
                    { label: 'Next Review', value: '15 Mar 2027', icon: null },
                  ].map((field, i) => (
                    <div key={i} className="bg-slate-50 rounded-xl p-3.5 border border-slate-100">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">{field.label}</div>
                      <div className="text-sm font-bold text-slate-800">{field.value}</div>
                    </div>
                  ))}
                </div>

                {/* Document chips */}
                <div className="px-6 pb-5">
                  <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-2.5">Linked Documents</div>
                  <div className="flex flex-wrap gap-2">
                    {['Employment Contract', 'NRIC Copy', 'Payslip History', 'Leave Records', 'IR8A 2025'].map(doc => (
                      <span key={doc} className="text-[10px] font-semibold px-2.5 py-1.5 bg-sky-50 text-sky-700 border border-sky-200 rounded-lg flex items-center gap-1">
                        <FileText className="w-3 h-3" />{doc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating annotation tags */}
              {annotations.map((a, i) => (
                <div
                  key={i}
                  className={`absolute hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-xl border text-[11px] font-bold ${a.color} shadow-sm backdrop-blur-sm`}
                  style={{ top: a.top, bottom: a.bottom, right: a.right, left: a.left }}
                >
                  <CheckCircle2 className="w-3 h-3" />
                  {a.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
