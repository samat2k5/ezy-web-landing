import React from 'react';
import { DollarSign, CheckCircle2, FileText, Landmark, ShieldCheck, ArrowRight, Layers, FileCheck } from 'lucide-react';

export const SingaporePayrollSection: React.FC = () => {
  const payrollSteps = [
    { step: '01', title: 'Employee Data Sync', desc: 'Sync residency, salary history, and statutory status.' },
    { step: '02', title: 'Attendance & OT', desc: 'Fetch approved timesheets and overtime multiplier.' },
    { step: '03', title: 'Leave & Claims', desc: 'Factor in unpaid leave deductions and approved expenses.' },
    { step: '04', title: 'CPF & Statutory Math', desc: 'Auto-calculate Employee/Employer CPF, SDL, and SHG.' },
    { step: '05', title: 'Bank GIRO Export', desc: 'Generate bank batch disbursement files for DBS, OCBC, UOB.' },
    { step: '06', title: 'IRAS AIS & IR8A', desc: 'Export audit-ready IRAS tax files and annual IR8A forms.' },
  ];

  const statutoryComponents = [
    { name: 'CPF Calculation', detail: 'Automated age-tiered Citizen & PR rates' },
    { name: 'Skills Development Levy (SDL)', detail: 'Automated 0.25% calculation with capping rules' },
    { name: 'Self-Help Group (SHG) Funds', detail: 'CDAC, ECF, SINDA, MBMF deductions' },
    { name: 'IRAS AIS & IR8A / IR8S', detail: 'Auto-inclusion scheme tax export' },
    { name: 'Bank GIRO Batch Export', detail: 'Supported by all major Singapore banks' },
    { name: 'Itemized Mobile Payslips', detail: 'MOM-compliant itemized payslips' }
  ];

  return (
    <section id="payroll" className="py-20 md:py-28 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            Singapore Core Capability
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Singapore Payroll, <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-200">
              without the spreadsheet headache.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Designed for Singapore payroll requirements. ezyHR automates CPF contributions, SDL levies, SHG funds, IRAS AIS filings, and bank GIRO exports with 100% precision.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="mb-16">
          <h3 className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-8">
            End-to-End Singapore Statutory Payroll Workflow
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {payrollSteps.map((s, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 relative hover:border-emerald-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-extrabold text-emerald-400 block mb-2">{s.step}</span>
                  <h4 className="text-xs font-bold text-white mb-1">{s.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-tight">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statutory Components Grid */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Landmark className="w-5 h-5 text-emerald-400" /> Singapore Statutory Compliance Features
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Supports Singapore statutory contribution rules & IRAS tax regulations
              </p>
            </div>
            
            <div className="px-3 py-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-xl text-xs font-semibold">
              MOM Itemized Payslip Aligned
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {statutoryComponents.map((comp, idx) => (
              <div key={idx} className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">{comp.name}</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">{comp.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
