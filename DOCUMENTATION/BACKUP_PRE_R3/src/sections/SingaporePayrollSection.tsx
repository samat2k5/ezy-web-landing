import React from 'react';
import { Landmark, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

interface SingaporePayrollSectionProps {
  onOpenDemo?: () => void;
}

export const SingaporePayrollSection: React.FC<SingaporePayrollSectionProps> = ({ onOpenDemo }) => {
  const payrollWorkflow = [
    { step: '01', title: 'Employee Master', desc: 'Sync residency & statutory status.' },
    { step: '02', title: 'Attendance', desc: 'Fetch approved timesheets & OT math.' },
    { step: '03', title: 'Leave & Claims', desc: 'Factor unpaid leave & approved expenses.' },
    { step: '04', title: 'Payroll Math', desc: 'Auto-calculate CPF, SDL, and SHG.' },
    { step: '05', title: 'CPF Submission', desc: 'Generate CPF monthly submission file.' },
    { step: '06', title: 'Payslip & GIRO', desc: 'Issue payslips & export bank GIRO files.' },
    { step: '07', title: 'IRAS Tax Filing', desc: 'Export IRAS AIS & annual IR8A forms.' },
  ];

  const statutoryComponents = [
    { name: 'CPF Calculation Engine', detail: 'Automated SC & PR rates across age tiers (2026 OW Ceiling: $8,000)' },
    { name: 'Skills Development Levy (SDL)', detail: 'Automated 0.25% calculation with min $2 / max $11.25 caps' },
    { name: 'Self-Help Group Funds (SHG)', detail: 'CDAC, ECF, SINDA, MBMF statutory deduction rules' },
    { name: 'IRAS AIS & IR8A / IR8S Export', detail: 'Auto-Inclusion Scheme tax file export generation' },
    { name: 'Bank GIRO Batch Disbursement', detail: 'Supported by DBS, OCBC, UOB, HSBC, StanChart' },
    { name: 'Itemised Mobile Payslips', detail: 'MOM-aligned itemized payslip format for mobile ESS' }
  ];

  return (
    <section id="payroll" className="py-24 bg-slate-50 text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            Singapore Core Differentiator
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Singapore payroll <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
              without the spreadsheet headache.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Reduce payroll errors with automated calculations. Built for Singapore employment requirements and statutory contribution rules.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="mb-16">
          <h3 className="text-center text-xs font-bold uppercase tracking-wider text-slate-500 mb-8">
            End-to-End ezyHR Singapore Statutory Payroll Workflow
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3.5">
            {payrollWorkflow.map((s, idx) => (
              <div 
                key={idx}
                className="bg-white p-4.5 rounded-2xl border border-slate-200 relative hover:border-emerald-500 transition-all flex flex-col justify-between shadow-xs"
              >
                <div>
                  <span className="text-2xl font-black text-emerald-600 font-mono block mb-2">{s.step}</span>
                  <h4 className="text-xs font-bold text-slate-900 mb-1">{s.title}</h4>
                  <p className="text-[11px] text-slate-500 leading-tight">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statutory Features Panel */}
        <div className="bg-white p-7 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
            <div>
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-emerald-600" /> Supports Singapore Statutory Payroll Requirements
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Built around Singapore statutory requirements for CPF contributions, SDL levies, SHG funds, and IRAS tax filing.
              </p>
            </div>
            
            <div className="px-4 py-1.5 bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-xl text-xs font-extrabold">
              Itemized Payslip Standard
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {statutoryComponents.map((comp, idx) => (
              <div key={idx} className="p-4.5 bg-slate-50 rounded-2xl border border-slate-200 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{comp.name}</h4>
                  <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">{comp.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
