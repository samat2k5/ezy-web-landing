import React from 'react';
import { Calculator, Clock, CalendarX, FileSearch, MailWarning, AlertTriangle, ArrowDown, XCircle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider">
            Operational Challenges
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            HR shouldn't feel like spreadsheet management.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Growing businesses in Singapore waste countless hours on disconnected administrative tasks, manual formulas, and paper approvals.
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6 mb-16">
          
          {/* Bento Card 1: Large Featured Card (Col Span 7) */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100 font-bold">
                  <Calculator className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 bg-red-50 text-red-700 text-xs font-extrabold rounded-full border border-red-100">
                  HIGH RISK
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">Manual Payroll Spreadsheets</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Errors in CPF formulas, SDL caps, or SHG deductions cause costly adjustments, IRAS compliance headaches, and employee dissatisfaction.
              </p>
            </div>

            {/* Visual Formula Error Callout */}
            <div className="p-4 bg-red-50/60 rounded-2xl border border-red-100 text-xs font-mono space-y-1.5 text-red-900">
              <div className="flex items-center justify-between text-[11px] font-bold">
                <span className="flex items-center gap-1.5 text-red-700">
                  <XCircle className="w-4 h-4 text-red-600" /> Excel Formula Error (#REF!)
                </span>
                <span>Cell H42 Overwrite</span>
              </div>
              <p className="text-[11px] text-slate-600 font-sans">Manual CPF contribution ceiling override missed 2026 OW increase ($8,000).</p>
            </div>
          </div>

          {/* Bento Card 2: Standard Card (Col Span 5) */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-5 border border-red-100 font-bold">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Disjointed Attendance Logs</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Paper sign-in sheets, WhatsApp messages, and biometric terminal exports require hours of manual reconciliation before payroll processing.
              </p>
            </div>

            <div className="pt-4 text-xs font-semibold text-slate-500 flex items-center gap-1.5">
              <span>Avg 12 hrs/mo wasted on timecards</span>
            </div>
          </div>

          {/* Bento Card 3: Standard Card (Col Span 4) */}
          <div className="lg:col-span-4 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-5 border border-red-100 font-bold">
              <CalendarX className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Paper Leave Forms</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Employees constantly interrupt HR asking for leave entitlement updates and status of paper approval forms.
            </p>
          </div>

          {/* Bento Card 4: Large Featured Card (Col Span 8) */}
          <div className="lg:col-span-8 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100 font-bold">
                  <FileSearch className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-extrabold rounded-full border border-amber-200">
                  COMPLIANCE RISK
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">Fragmented Employee Files & Expiry Pass Overlooks</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Contracts, NRIC/FIN scans, and work passes buried in random folders with no automated expiry warnings lead to MOM compliance fines.
              </p>
            </div>

            <div className="pt-4 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 mt-4">
              <span>Unverified pass renewals cause operational stoppage</span>
              <span className="font-bold text-red-600">Zero Expiry Alerts</span>
            </div>
          </div>

        </div>

        {/* Transition Callout */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 animate-bounce border border-emerald-200 shadow-sm">
              <ArrowDown className="w-6 h-6" />
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              ezyHR brings everything together.
            </h3>
            <p className="text-sm sm:text-base text-emerald-700 font-bold mt-2">
              One unified platform to simplify your entire HR and Singapore payroll lifecycle.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
