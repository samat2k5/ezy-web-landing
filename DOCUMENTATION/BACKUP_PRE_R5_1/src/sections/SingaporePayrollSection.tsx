import React from 'react';
import { Landmark, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

interface SingaporePayrollSectionProps {
  onOpenDemo?: () => void;
}

export const SingaporePayrollSection: React.FC<SingaporePayrollSectionProps> = ({ onOpenDemo }) => {
  const payrollWorkflow = [
    { step: '01', title: 'Employee Data', desc: 'Sync master records & residency status.' },
    { step: '02', title: 'Attendance', desc: 'Fetch verified clock-in hours & OT.' },
    { step: '03', title: 'Leave', desc: 'Deduct unpaid leave & statutory days.' },
    { step: '04', title: 'Claims', desc: 'Incorporate approved expense claims.' },
    { step: '05', title: 'CPF & SDL', desc: 'Automate CPF OW ceiling & SDL caps.' },
    { step: '06', title: 'SHG Funds', desc: 'Apply CDAC / SINDA / ECF / MBMF rates.' },
    { step: '07', title: 'Payroll & Payslip', desc: 'Disburse via GIRO & issue itemised payslips.' },
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
    <section id="payroll" className="py-24 lg:py-36 bg-deep-navy text-white relative overflow-hidden border-b border-amber-500/20">
      
      {/* Amber / Gold atmospheric radial field */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-tr from-amber-500/15 via-orange-500/10 to-transparent blur-[160px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-black uppercase tracking-widest backdrop-blur-md">
            Singapore Statutory Engine
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            Singapore payroll.<br />
            <span className="text-gradient-gold">
              Without the spreadsheet headache.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Automated statutory calculations, CPF Board rounding, SDL bounds, SHG deductions, and IRAS AIS tax reporting in one intelligent engine.
          </p>
        </div>

        {/* Workflow Steps — Amber/Gold Financial Flow */}
        <div className="mb-20">
          <h3 className="text-center text-xs font-black uppercase tracking-widest text-amber-400/90 mb-10 font-mono">
            Singapore Statutory Financial Flow Architecture
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3.5">
            {payrollWorkflow.map((s, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/90 p-5 rounded-2xl border border-amber-500/30 hover:border-amber-400 transition-all flex flex-col justify-between shadow-lg backdrop-blur-xl group"
              >
                <div>
                  <span className="text-2xl font-black text-amber-400 font-mono block mb-2 group-hover:scale-110 transition-transform origin-left">{s.step}</span>
                  <h4 className="text-xs font-black text-white mb-1">{s.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-tight font-medium">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Tech Statutory Panel */}
        <div className="bg-slate-900/95 text-white p-8 sm:p-11 rounded-3xl border border-amber-500/30 shadow-product-ui backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-3">
                <Landmark className="w-6 h-6 text-amber-400" /> Statutory Compliance Verification
              </h3>
              <p className="text-xs text-slate-300 font-medium mt-1">
                Aligned with Singapore Central Provident Fund Board (CPF), Skills Development Levy (SDL), and IRAS Auto-Inclusion Scheme.
              </p>
            </div>
            
            <div className="px-4 py-2 bg-amber-500/20 text-amber-300 border border-amber-400/40 rounded-xl text-xs font-black font-mono">
              2026 CPF OW Ceiling: $8,000
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {statutoryComponents.map((comp, idx) => (
              <div key={idx} className="p-5 bg-slate-950/80 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-colors flex items-start gap-3.5">
                <CheckCircle2 className="w-4.5 h-4.5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">{comp.name}</h4>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed font-medium">{comp.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
