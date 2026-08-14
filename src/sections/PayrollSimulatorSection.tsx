import React, { useState } from 'react';
import { Calculator, DollarSign, FileText, CheckCircle2, Shield, Sparkles, Info, HelpCircle } from 'lucide-react';
import { DEMO_PAYROLL_EMPLOYEES, SampleEmployeePayroll } from '../data/demoData';
import { Link } from '../components/Link';

interface PayrollSimulatorSectionProps {
  onOpenPayslipModal: (emp: SampleEmployeePayroll) => void;
}

export const PayrollSimulatorSection: React.FC<PayrollSimulatorSectionProps> = ({
  onOpenPayslipModal
}) => {
  const [salaryInput, setSalaryInput] = useState<number>(5500);
  const [ageGroup, setAgeGroup] = useState<'under35' | '35to45' | '45to50' | '50to55' | '55to60' | '60to65' | '65to70' | 'above70'>('under35');
  const [residency, setResidency] = useState<'SC' | 'EP'>('SC');
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const formatSGD = (val: number) => val.toLocaleString('en-SG', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  // Statutory Constants (2026 Singapore Rules) - 100% UNTOUCHED
  const CPF_OW_CEILING_2026 = 8000;

  // Calculate CPF preview based on Singapore statutory rules (100% UNTOUCHED)
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
    } else if (ageGroup === '65to70' || ageGroup === 'above70') {
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
  const totalCpf = currentCalc.empCpf + currentCalc.emprCpf;

  const calculateCpfAllocation = (totalCpf: number, ageGroupId: string) => {
    if (totalCpf === 0) return { oa: 0, saOrRa: 0, ma: 0, accountType: 'SA' };

    let oaRatio = 0, saRaRatio = 0, maRatio = 0;
    let accountType = 'SA';

    if (ageGroupId === 'under35') {
      oaRatio = 0.6217;
      saRaRatio = 0.1621;
      maRatio = 0.2162;
    } else if (ageGroupId === '35to45') {
      oaRatio = 0.5677;
      saRaRatio = 0.1891;
      maRatio = 0.2432;
    } else if (ageGroupId === '45to50') {
      oaRatio = 0.5136;
      saRaRatio = 0.2162;
      maRatio = 0.2702;
    } else if (ageGroupId === '50to55') {
      oaRatio = 0.4055;
      saRaRatio = 0.3108;
      maRatio = 0.2837;
    } else if (ageGroupId === '55to60') {
      oaRatio = 0.3530;
      saRaRatio = 0.3382;
      maRatio = 0.3088;
      accountType = 'RA';
    } else if (ageGroupId === '60to65') {
      oaRatio = 0.1400;
      saRaRatio = 0.4400;
      maRatio = 0.4200;
      accountType = 'RA';
    } else if (ageGroupId === '65to70') {
      oaRatio = 0.0607;
      saRaRatio = 0.3030;
      maRatio = 0.6363;
      accountType = 'RA';
    } else if (ageGroupId === 'above70') {
      oaRatio = 0.0800;
      saRaRatio = 0.0800;
      maRatio = 0.8400;
      accountType = 'RA';
    }

    const ma = Math.round(totalCpf * maRatio * 100) / 100;
    const saOrRa = Math.round(totalCpf * saRaRatio * 100) / 100;
    const oa = Math.round((totalCpf - ma - saOrRa) * 100) / 100;

    return { oa, saOrRa, ma, accountType };
  };

  const allocation = calculateCpfAllocation(totalCpf, ageGroup);

  const tooltips = {
    empCpf: "Employee CPF: Deducted from employee salary based on statutory age tiers (up to $8,000 OW ceiling). CPF Board requires rounding down to nearest dollar.",
    emprCpf: "Employer CPF: Mandatory employer contribution above gross salary based on statutory age tiers. Rounded to nearest dollar.",
    sdl: "Skills Development Levy (SDL): Mandatory employer contribution for all employees working in Singapore. Calculated as 0.25% of monthly remuneration (Min $2.00, Max $11.25).",
    shg: "Self-Help Group Funds (SHG): Statutory community fund contributions (CDAC, ECF, SINDA, MBMF) deducted based on employee ethnic group and salary band."
  };

  return (
    <section className="py-16 lg:py-24 bg-deep-navy text-white relative overflow-hidden border-b border-slate-800">
      
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-blue-600/20 via-cyan-500/15 to-violet-600/20 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-700/60 text-cyan-400 text-xs font-black uppercase tracking-widest backdrop-blur-md">
            <Calculator className="w-3.5 h-3.5 text-cyan-400" /> Live Singapore Statutory Calculator
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Singapore CPF &amp; Payroll Calculator 2026
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Estimate employee CPF, employer CPF, SDL, net pay and CPF account allocation using applicable 2026 Singapore CPF rates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start max-w-5xl mx-auto">
          
          {/* Controls Panel */}
          <div className="lg:col-span-6 bg-slate-900/90 p-6 sm:p-7 rounded-3xl border border-slate-800 space-y-5 shadow-product-ui backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                Salary &amp; Statutory Inputs
              </h3>
              <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold tracking-wider border border-emerald-500/30 font-mono">
                DEMO DATA
              </span>
            </div>

            {/* Salary Slider with Smooth Number Feedback */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs font-bold text-slate-300">Monthly Gross Salary (SGD)</label>
                <span className="text-xl font-black text-cyan-400 font-mono">
                  S${formatSGD(salaryInput)}
                </span>
              </div>
              <input
                type="range"
                min="2000"
                max="12000"
                step="250"
                value={salaryInput}
                onChange={(e) => setSalaryInput(Number(e.target.value))}
                className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 slider-amber-glow"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-2 font-mono font-medium">
                <span>$2,000</span>
                <span className="text-cyan-400 font-bold">$8,000 (2026 CPF OW Ceiling)</span>
                <span>$12,000</span>
              </div>
            </div>

            {/* Age Tier Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2.5">Employee Age Group <span className="font-normal text-slate-400">(Employee / Employer Rates)</span></label>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { id: 'under35', label: '35 & Below (20% / 17%)' },
                  { id: '35to45', label: '35 to 45 (20% / 17%)' },
                  { id: '45to50', label: '45 to 50 (20% / 17%)' },
                  { id: '50to55', label: '50 to 55 (20% / 17%)' },
                  { id: '55to60', label: '55 to 60 (15% / 12%)' },
                  { id: '60to65', label: '60 to 65 (9.5% / 9%)' },
                  { id: '65to70', label: '65 to 70 (5% / 7.5%)' },
                  { id: 'above70', label: 'Above 70 (5% / 7.5%)' }
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setAgeGroup(tier.id as any)}
                    className={`p-3 text-xs text-left rounded-xl border transition-all ${
                      ageGroup === tier.id
                        ? 'border-cyan-500 bg-cyan-950/60 text-cyan-300 font-bold shadow-xs'
                        : 'border-slate-800 bg-slate-950/50 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Residency Status */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2.5">Residency Status</label>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  onClick={() => setResidency('SC')}
                  className={`py-3 px-3 text-xs font-bold rounded-xl border transition-all ${
                    residency === 'SC'
                      ? 'border-cyan-500 bg-cyan-950/60 text-cyan-300 font-bold shadow-xs'
                      : 'border-slate-800 bg-slate-950/50 text-slate-400'
                  }`}
                >
                  Singapore Citizen / PR
                </button>
                <button
                  onClick={() => setResidency('EP')}
                  className={`py-3 px-3 text-xs font-bold rounded-xl border transition-all ${
                    residency === 'EP'
                      ? 'border-cyan-500 bg-cyan-950/60 text-cyan-300 font-bold shadow-xs'
                      : 'border-slate-800 bg-slate-950/50 text-slate-400'
                  }`}
                >
                  EP / S-Pass ($0 CPF)
                </button>
              </div>
            </div>
          </div>

          {/* Results Display with Tooltips */}
          <div className="lg:col-span-6 bg-slate-900/90 p-6 sm:p-7 rounded-3xl border border-slate-800 space-y-5 shadow-product-ui backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" /> Automated Statutory Breakdown
              </h3>
              <span className="text-xs text-slate-400 font-mono">SGD Currency</span>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center p-3.5 bg-slate-950/70 rounded-xl border border-slate-800 text-xs">
                <span className="text-slate-300 font-medium">Gross Monthly Salary:</span>
                <span className="font-mono font-bold text-white text-sm">S${formatSGD(salaryInput)}</span>
              </div>

              {/* Employee CPF with Tooltip */}
              <div className="relative">
                <div className="flex justify-between items-center p-3.5 bg-slate-950/70 rounded-xl border border-slate-800 text-xs">
                  <span className="text-slate-300 font-medium flex items-center gap-1.5">
                    Employee CPF Deduction:
                    <button 
                      onClick={() => setActiveTooltip(activeTooltip === 'empCpf' ? null : 'empCpf')}
                      className="text-slate-500 hover:text-cyan-400 focus:outline-none"
                      aria-label="Toggle Employee CPF definition"
                    >
                      <HelpCircle className="w-3.5 h-3.5" />
                    </button>
                  </span>
                  <span className="font-mono font-bold text-red-400 text-sm">-S${formatSGD(currentCalc.empCpf)}</span>
                </div>
                {activeTooltip === 'empCpf' && (
                  <div className="p-3 bg-slate-950 text-slate-200 rounded-xl text-[11px] mt-1.5 shadow-lg border border-slate-800">
                    {tooltips.empCpf}
                  </div>
                )}
              </div>

              {/* Employer CPF with Tooltip */}
              <div className="relative">
                <div className="flex justify-between items-center p-3.5 bg-slate-950/70 rounded-xl border border-slate-800 text-xs">
                  <span className="text-slate-300 font-medium flex items-center gap-1.5">
                    Employer CPF Contribution:
                    <button 
                      onClick={() => setActiveTooltip(activeTooltip === 'emprCpf' ? null : 'emprCpf')}
                      className="text-slate-500 hover:text-cyan-400 focus:outline-none"
                      aria-label="Toggle Employer CPF definition"
                    >
                      <HelpCircle className="w-3.5 h-3.5" />
                    </button>
                  </span>
                  <span className="font-mono font-bold text-cyan-400 text-sm">+S${formatSGD(currentCalc.emprCpf)}</span>
                </div>
                {activeTooltip === 'emprCpf' && (
                  <div className="p-3 bg-slate-950 text-slate-200 rounded-xl text-[11px] mt-1.5 shadow-lg border border-slate-800">
                    {tooltips.emprCpf}
                  </div>
                )}
              </div>

              {/* SDL with Tooltip */}
              <div className="relative">
                <div className="flex justify-between items-center p-3.5 bg-slate-950/70 rounded-xl border border-slate-800 text-xs">
                  <span className="text-slate-300 font-medium flex items-center gap-1.5">
                    Skills Development Levy (SDL):
                    <button 
                      onClick={() => setActiveTooltip(activeTooltip === 'sdl' ? null : 'sdl')}
                      className="text-slate-500 hover:text-cyan-400 focus:outline-none"
                      aria-label="Toggle SDL definition"
                    >
                      <HelpCircle className="w-3.5 h-3.5" />
                    </button>
                  </span>
                  <span className="font-mono font-bold text-slate-300 text-sm">+S${formatSGD(currentCalc.sdl)}</span>
                </div>
                {activeTooltip === 'sdl' && (
                  <div className="p-3 bg-slate-950 text-slate-200 rounded-xl text-[11px] mt-1.5 shadow-lg border border-slate-800">
                    {tooltips.sdl}
                  </div>
                )}
              </div>

              {/* SHG Deductions */}
              {residency === 'SC' && (
                <div className="relative">
                  <div className="flex justify-between items-center p-3.5 bg-slate-950/70 rounded-xl border border-slate-800 text-xs">
                    <span className="text-slate-300 font-medium flex items-center gap-1.5">
                      Self-Help Group (SHG Fund Demo):
                      <button 
                        onClick={() => setActiveTooltip(activeTooltip === 'shg' ? null : 'shg')}
                        className="text-slate-500 hover:text-cyan-400 focus:outline-none"
                        aria-label="Toggle SHG definition"
                      >
                        <HelpCircle className="w-3.5 h-3.5" />
                      </button>
                    </span>
                    <span className="font-mono font-bold text-red-400 text-sm">-S$3.00</span>
                  </div>
                  {activeTooltip === 'shg' && (
                    <div className="p-3 bg-slate-950 text-slate-200 rounded-xl text-[11px] mt-1.5 shadow-lg border border-slate-800">
                      {tooltips.shg}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Net Take-Home Pay Result */}
            <div className="p-5 bg-gradient-to-r from-sky-600 via-cyan-600 to-teal-600 text-white rounded-2xl border border-cyan-400/40 shadow-lg">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-xs uppercase font-extrabold tracking-wider block opacity-90">Estimated Net Take-Home</span>
                  <span className="text-2xl sm:text-3xl font-black font-mono mt-1 block">S${formatSGD(currentCalc.netPay)}</span>
                </div>
                
                <button
                  onClick={() => onOpenPayslipModal(DEMO_PAYROLL_EMPLOYEES[0])}
                  className="px-4 py-2.5 bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5 border border-slate-800"
                >
                  <FileText className="w-4 h-4 text-cyan-400" /> Itemised Payslip Preview
                </button>
              </div>
            </div>

            {/* CPF CONTRIBUTION BREAKDOWN */}
            {totalCpf > 0 && residency === 'SC' && (
              <div className="mt-6 pt-5 border-t border-slate-800">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <h4 className="text-sm font-extrabold text-white">CPF CONTRIBUTION BREAKDOWN</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1 cursor-pointer hover:text-cyan-400" onClick={() => setActiveTooltip(activeTooltip === 'cpfAlloc' ? null : 'cpfAlloc')}>
                      <Info className="w-3 h-3" /> How CPF is allocated
                    </p>
                    {activeTooltip === 'cpfAlloc' && (
                      <div className="mt-2 p-3 bg-slate-950 text-slate-200 rounded-xl text-[11px] shadow-lg border border-slate-800 relative z-20">
                        CPF allocation depends on age. Members below/through age 55 receive allocation to SA. For members above age 55, the corresponding retirement allocation is shown as RA. MA supports healthcare savings. Calculations use applicable 2026 CPF allocation rates. Actual RA/OA treatment may depend on FRS status.
                      </div>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Total CPF Contribution</div>
                    <div className="text-lg font-black text-cyan-400 font-mono">S${formatSGD(totalCpf)}</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 flex flex-col justify-between h-full">
                    <div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Ordinary Account</div>
                      <div className="text-xs font-black text-white">OA</div>
                    </div>
                    <div className="text-sm font-bold text-cyan-400 font-mono mt-3">S${formatSGD(allocation.oa)}</div>
                  </div>
                  <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 flex flex-col justify-between h-full">
                    <div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">{allocation.accountType === 'SA' ? 'Special Account' : 'Retirement Account'}</div>
                      <div className="text-xs font-black text-white">{allocation.accountType}{allocation.accountType === 'RA' ? '*' : ''}</div>
                    </div>
                    <div className="text-sm font-bold text-emerald-400 font-mono mt-3">S${formatSGD(allocation.saOrRa)}</div>
                  </div>
                  <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 flex flex-col justify-between h-full">
                    <div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">MediSave Account</div>
                      <div className="text-xs font-black text-white">MA</div>
                    </div>
                    <div className="text-sm font-bold text-blue-400 font-mono mt-3">S${formatSGD(allocation.ma)}</div>
                  </div>
                </div>
                {allocation.accountType === 'RA' && (
                  <p className="text-[9px] text-slate-500 mt-3 leading-tight">
                    *For members above age 55, the displayed amount reflects the standard CPF allocation ratio. Actual RA/OA allocation may vary where the applicable Full Retirement Sum has already been set aside.
                  </p>
                )}
              </div>
            )}

            <p className="text-[10px] text-slate-400 leading-tight">
              *Disclaimer: This interactive preview illustrates standard 2026 Singapore statutory CPF Ordinary Wage rates, Skills Development Levy (SDL) bounds ($2.00 min, $11.25 max), and demonstration SHG rates. Actual payroll output depends on specific employee citizenship dates, Voluntary CPF contributions, and Additional Wage (AW) ceilings. This tool is provided for informational and estimation purposes and does not constitute legal, tax, accounting or government advice. Customers remain responsible for reviewing employee inputs, payroll results and applicable statutory filing or payment obligations.
            </p>
          </div>

        </div>

        {/* Conversion Bridge — full-width, outside the grid */}
        <div
          id="payroll-bridge"
          className="mt-8 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-slate-800/60 border border-slate-700 rounded-2xl px-6 py-5"
        >
          <div className="w-full min-w-0">
            <p className="text-sm font-bold text-white leading-snug">
              Want payroll calculated automatically every month?
            </p>
            <p className="text-xs text-slate-400 font-medium mt-1">
              Plans from S$4 / employee / month, GST included.
            </p>
          </div>
          <Link
            href="/#pricing"
            className="w-full sm:w-auto sm:flex-shrink-0 flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md"
          >
            Explore ezyHR Plans →
          </Link>
        </div>

      </div>
    </section>
  );
};
