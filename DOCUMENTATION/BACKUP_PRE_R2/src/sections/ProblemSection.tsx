import React from 'react';
import { Calculator, Clock, CalendarX, FileSearch, MailWarning, AlertTriangle, FileSpreadsheet, RefreshCw, ArrowDown } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const painPoints = [
    {
      icon: Calculator,
      title: 'Manual Payroll Math',
      desc: 'Errors in CPF formulas, SDL caps, or SHG deductions cause costly corrections and employee frustration.'
    },
    {
      icon: Clock,
      title: 'Scattered Attendance Logs',
      desc: 'Paper sign-in sheets, WhatsApp messages, and biometric punch logs require tedious manual reconciliation.'
    },
    {
      icon: CalendarX,
      title: 'Unclear Leave Balances',
      desc: 'Employees constantly message HR asking for leave entitlement updates and status of paper leave forms.'
    },
    {
      icon: FileSearch,
      title: 'Lost Employee Files',
      desc: 'Contracts, NRIC/FIN passes, and certifications buried in random folders or email threads with no expiry alerts.'
    },
    {
      icon: MailWarning,
      title: 'Expense Claims via Email',
      desc: 'Lost paper receipts, delayed manager approvals, and manual double-entry into payroll or accounting.'
    },
    {
      icon: AlertTriangle,
      title: 'Compliance Pressure',
      desc: 'Tight deadlines for IRAS AIS filings, IR8A forms, and statutory Singapore employer compliance.'
    },
    {
      icon: FileSpreadsheet,
      title: 'Spreadsheet Fatigue',
      desc: 'Managing workforce data across dozens of fragile Excel sheets prone to broken links and data loss.'
    },
    {
      icon: RefreshCw,
      title: 'Repetitive Administration',
      desc: 'Hours wasted every month on routine data entry instead of high-value business growth and people management.'
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-wider">
            Common Operational Friction
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            HR shouldn't feel like spreadsheet management.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Growing businesses in Singapore waste countless hours on disconnected administrative tasks, manual formulas, and paper approvals.
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-red-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Transition Callout */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3 animate-bounce">
              <ArrowDown className="w-5 h-5" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              ezyHR brings everything together.
            </h3>
            <p className="text-sm text-emerald-400 font-medium mt-1">
              One unified platform to simplify your entire HR and Singapore payroll lifecycle.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
