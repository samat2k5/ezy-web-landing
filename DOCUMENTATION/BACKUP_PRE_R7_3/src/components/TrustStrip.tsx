import React from 'react';
import { ShieldCheck, FileCheck, Users, Clock, Lock, CheckCircle2 } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    { label: 'Singapore Statutory Payroll', sub: 'CPF • SDL • SHG • IRAS AIS', icon: FileCheck },
    { label: 'Employee Self-Service', sub: 'Mobile Payslips & Claims', icon: Users },
    { label: 'Attendance & Leave', sub: 'MOM Statutory Compliance', icon: Clock },
    { label: 'Audit Visibility', sub: 'Transparent Role Controls', icon: ShieldCheck },
    { label: 'Secure HR Data', sub: 'PDPA Compliant Platform', icon: Lock }
  ];

  return (
    <div className="bg-slate-950 border-y border-slate-800/80 py-6 text-slate-300 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 items-center">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/40 border border-slate-800/50">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 flex-shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-100 truncate">{item.label}</div>
                  <div className="text-[11px] text-slate-400 truncate">{item.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
