import React from 'react';
import { Calculator, Clock, CalendarX, FileSearch, MailWarning, AlertTriangle, ArrowDown } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const painPoints = [
    {
      icon: Calculator,
      title: 'Manual Payroll Spreadsheets',
      desc: 'Errors in CPF formulas, SDL caps, or SHG deductions cause costly corrections and employee frustration.'
    },
    {
      icon: Clock,
      title: 'Disjointed Attendance Logs',
      desc: 'Paper sign-in sheets, WhatsApp messages, and biometric logs require tedious manual reconciliation.'
    },
    {
      icon: CalendarX,
      title: 'Paper Leave Requests',
      desc: 'Employees constantly message HR asking for leave entitlement updates and status of paper leave forms.'
    },
    {
      icon: FileSearch,
      title: 'Fragmented Employee Files',
      desc: 'Contracts, NRIC/FIN passes, and certifications buried in random folders with no automated expiry alerts.'
    },
    {
      icon: MailWarning,
      title: 'Lost Expense Receipts',
      desc: 'Lost paper receipts, delayed manager approvals, and manual double-entry into payroll or accounting.'
    },
    {
      icon: AlertTriangle,
      title: 'Statutory Compliance Stress',
      desc: 'Tight deadlines for IRAS AIS filings, IR8A forms, and statutory Singapore employer compliance.'
    }
  ];

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

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-7 rounded-3xl border border-slate-200 hover:border-slate-300 transition-all group shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-red-100 font-bold">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Transition Visual Callout */}
        <div className="mt-20 text-center">
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
