import React, { useState } from 'react';
import { Calculator, DollarSign, FileText, CheckCircle2, Shield, Sparkles, Info } from 'lucide-react';
import { DEMO_PAYROLL_EMPLOYEES, SampleEmployeePayroll } from '../data/demoData';

interface PayrollSimulatorSectionProps {
  onOpenPayslipModal: (emp: SampleEmployeePayroll) => void;
}

export const PayrollSimulatorSection: React.FC<PayrollSimulatorSectionProps> = ({
  onOpenPayslipModal
}) => {
  const [salaryInput, setSalaryInput] = useState<number>(5500);
  const [ageGroup, setAgeGroup] = useState<'under55' | '55to60' | '60to65' | 'above65'>('under55');
  const [residency, setResidency] = useState<'SC' | 'EP'>('SC');

  // Statutory Constants (2026 Singapore Rules)
  const CPF_OW_CEILING_2026 = 8000;

  // Calculate CPF preview based on Singapore statutory rules
  const calculateCpf = () => {
    if (residency === 'EP') {
      const sdl = Math.max(2.00, Math.min(salaryInput * 0.0025, 11.25));
      return { empCpf: 0, emprCpf: 0, sdl, netPay: salaryInput };
    }

    const cappedSalary = Math.min(salaryInput, CPF_OW_CEILING_2026); // 2026 CPF OW ceiling ($8,000)
    let empRate = 0.20;
    let emprRate = 0.17;

    if (ageGroup === '55to60') {
      empRate = 0.15;
      emprRate = 0.12;
    } else if (ageGroup === '60to65') {
      empRate = 0.095;
      emprRate = 0.09;
    } else if (ageGroup === 'above65') {
      empRate = 0.05;
      emprRate = 0.075;
    }

    // CPF Board Rule: Employee CPF is rounded down to nearest dollar
    const empCpf = Math.floor(cappedSalary * empRate);
    // Employer CPF is rounded to nearest dollar
    const emprCpf = Math.round(cappedSalary * emprRate);
    
    // SSG Rule: 0.25% with min $2.00 and max $11.25
    const sdl = Math.max(2.00, Math.min(salaryInput * 0.0025, 11.25));
    
    // Demonstration SHG Value (CDAC top tier sample)
    const shg = 3.00;
    const netPay = salaryInput - empCpf - shg;

    return { empCpf, emprCpf, sdl, netPay };
  };

  const currentCalc = calculateCpf();

  return (
    <section className="py-20 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" /> Interactive Product Demonstration
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Test Singapore Payroll Calculations Live
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Adjust salary parameters below to see how ezyHR automates Singapore CPF, SDL, SHG deductions, and net salary calculations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Controls Panel */}
          <div className="lg:col-span-6 bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-base font-bold text-white">Salary & Statutory Inputs</h3>
              <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold tracking-wider border border-emerald-500/30">
                DEMO DATA
              </span>
            </div>

            {/* Salary Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-slate-300">Monthly Gross Salary (SGD)</label>
                <span className="text-base font-extrabold text-emerald-400 font-mono">
                  ${salaryInput.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="2000"
                max="12000"
                step="250"
                value={salaryInput}
                onChange={(e) => setSalaryInput(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>$2,000</span>
                <span>$8,000 (2026 CPF Ceiling)</span>
                <span>$12,000</span>
              </div>
            </div>

            {/* Age Tier Selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Employee Age Group</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'under55', label: '55 & Below (20% / 17%)' },
                  { id: '55to60', label: '55 to 60 (15% / 12%)' },
                  { id: '60to65', label: '60 to 65 (9.5% / 9%)' },
                  { id: 'above65', label: 'Above 65 (5% / 7.5%)' }
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setAgeGroup(tier.id as any)}
                    className={`p-2.5 text-xs text-left rounded-xl border transition-all ${
                      ageGroup === tier.id
                        ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400 font-semibold'
                        : 'border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Residency Status */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Residency Status</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setResidency('SC')}
                  className={`py-2 px-3 text-xs font-medium rounded-xl border transition-all ${
                    residency === 'SC'
                      ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400 font-semibold'
                      : 'border-slate-800 bg-slate-900 text-slate-400'
                  }`}
                >
                  Singapore Citizen / SPR
                </button>
                <button
                  onClick={() => setResidency('EP')}
                  className={`py-2 px-3 text-xs font-medium rounded-xl border transition-all ${
                    residency === 'EP'
                      ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400 font-semibold'
                      : 'border-slate-800 bg-slate-900 text-slate-400'
                  }`}
                >
                  Employment Pass / S-Pass
                </button>
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="lg:col-span-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" /> Automated Calculation Output
              </h3>
              <span className="text-xs text-slate-400">SGD Currency</span>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs">
                <span className="text-slate-300">Gross Monthly Salary:</span>
                <span className="font-mono font-bold text-white">${salaryInput.toFixed(2)}</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs">
                <span className="text-slate-300">Employee CPF Deduction:</span>
                <span className="font-mono font-bold text-red-400">-${currentCalc.empCpf.toFixed(2)}</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs">
                <span className="text-slate-300">Employer CPF Contribution:</span>
                <span className="font-mono font-bold text-blue-400">+${currentCalc.emprCpf.toFixed(2)}</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs">
                <span className="text-slate-300">Skills Development Levy (SDL):</span>
                <span className="font-mono font-bold text-slate-300">${currentCalc.sdl.toFixed(2)}</span>
              </div>

              <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/30 flex justify-between items-center">
                <div>
                  <span className="text-xs font-bold text-emerald-400 block">ESTIMATED NET PAYABLE</span>
                  <span className="text-[10px] text-slate-400">Disbursed to Employee Bank Account</span>
                </div>
                <span className="text-2xl font-extrabold font-mono text-emerald-400">
                  ${currentCalc.netPay.toFixed(2)}
                </span>
              </div>
            </div>

            {/* SHG Explicit Demonstration Note */}
            <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800/80 text-[11px] text-slate-400 flex items-start gap-2">
              <Info className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>
                SHG shown is demonstration data. Actual CDAC, ECF, SINDA or MBMF contributions depend on the applicable employee contribution rules.
              </span>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenPayslipModal({
                  id: 'sim-01',
                  name: 'Simulated Employee',
                  role: 'Department Specialist',
                  department: 'Operations',
                  monthlySalary: salaryInput,
                  age: 30,
                  residency: residency,
                  grossPay: salaryInput,
                  employeeCpf: currentCalc.empCpf,
                  employerCpf: currentCalc.emprCpf,
                  sdl: currentCalc.sdl,
                  shg: 3.00,
                  netPay: currentCalc.netPay
                })}
                className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl border border-slate-700 transition-all flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-emerald-400" /> View Sample Itemized Payslip Preview
              </button>
            </div>
          </div>

        </div>

        {/* Mandatory Statutory UX Disclaimer Below Simulator */}
        <div className="mt-10 max-w-5xl mx-auto text-center">
          <p className="text-xs text-slate-400 bg-slate-950 p-4 rounded-2xl border border-slate-800/80 max-w-3xl mx-auto leading-relaxed">
            Payroll calculations shown are estimates for demonstration purposes only. Actual CPF, SDL, SHG and payroll deductions depend on employee profile, residency, age, salary components and prevailing Singapore statutory rules.
          </p>
        </div>

      </div>
    </section>
  );
};
