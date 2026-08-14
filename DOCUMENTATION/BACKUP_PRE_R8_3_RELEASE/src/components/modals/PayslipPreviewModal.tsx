import React, { useRef } from 'react';
import { X, Download, ShieldCheck, Printer, CheckCircle } from 'lucide-react';
import { SampleEmployeePayroll } from '../../data/demoData';
import { useModalFocusTrap } from '../../utils/useModalFocusTrap';

interface PayslipPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  employee: SampleEmployeePayroll;
}

export const PayslipPreviewModal: React.FC<PayslipPreviewModalProps> = ({
  isOpen,
  onClose,
  employee
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useModalFocusTrap(isOpen, modalRef, onClose);

  const formatSGD = (val: number) => val.toLocaleString('en-SG', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const getAgeGroupId = (age: number) => {
    if (age <= 35) return 'under35';
    if (age <= 45) return '35to45';
    if (age <= 50) return '45to50';
    if (age <= 55) return '50to55';
    if (age <= 60) return '55to60';
    if (age <= 65) return '60to65';
    if (age <= 70) return '65to70';
    return 'above70';
  };

  const calculateCpfAllocation = (totalCpf: number, age: number) => {
    if (totalCpf === 0) return { oa: 0, saOrRa: 0, ma: 0, accountType: 'SA' };

    const ageGroupId = getAgeGroupId(age);
    let oaRatio = 0, saRaRatio = 0, maRatio = 0;
    let accountType = 'SA';

    if (ageGroupId === 'under35') { oaRatio = 0.6217; saRaRatio = 0.1621; maRatio = 0.2162; }
    else if (ageGroupId === '35to45') { oaRatio = 0.5677; saRaRatio = 0.1891; maRatio = 0.2432; }
    else if (ageGroupId === '45to50') { oaRatio = 0.5136; saRaRatio = 0.2162; maRatio = 0.2702; }
    else if (ageGroupId === '50to55') { oaRatio = 0.4055; saRaRatio = 0.3108; maRatio = 0.2837; }
    else if (ageGroupId === '55to60') { oaRatio = 0.3530; saRaRatio = 0.3382; maRatio = 0.3088; accountType = 'RA'; }
    else if (ageGroupId === '60to65') { oaRatio = 0.1400; saRaRatio = 0.4400; maRatio = 0.4200; accountType = 'RA'; }
    else if (ageGroupId === '65to70') { oaRatio = 0.0607; saRaRatio = 0.3030; maRatio = 0.6363; accountType = 'RA'; }
    else if (ageGroupId === 'above70') { oaRatio = 0.0800; saRaRatio = 0.0800; maRatio = 0.8400; accountType = 'RA'; }

    const ma = Math.round(totalCpf * maRatio * 100) / 100;
    const saOrRa = Math.round(totalCpf * saRaRatio * 100) / 100;
    const oa = Math.round((totalCpf - ma - saOrRa) * 100) / 100;

    return { oa, saOrRa, ma, accountType };
  };

  const totalCpf = employee.employeeCpf + employee.employerCpf;
  const allocation = calculateCpfAllocation(totalCpf, employee.age);

  const handleExportPDF = async () => {
    const printContent = document.getElementById('payslip-document');
    if (!printContent) return;

    if (!(window as any).html2pdf) {
      await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    }

    const opt = {
      margin:       1.5,
      filename:     `Payslip_${employee.name.replace(/\s+/g, '_')}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true, scrollY: 0, windowY: 0 },
      jsPDF:        { unit: 'cm', format: 'a4', orientation: 'portrait' }
    };

    (window as any).html2pdf().set(opt).from(printContent).save();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="payslip-modal-title"
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="px-2.5 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded uppercase tracking-wider">
              DEMO DATA
            </div>
            <div>
              <h3 id="payslip-modal-title" className="text-lg font-bold">Itemized Payslip Preview</h3>
              <p className="text-xs text-slate-400">Singapore Statutory Format • ezyHR Mobile & ESS</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={handleExportPDF} 
              aria-label="Export PDF payslip"
              className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg text-xs flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-4 h-4" /> Export PDF
            </button>
            <button 
              onClick={onClose}
              aria-label="Close payslip modal"
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Payslip Document Body */}
        <div className="p-6 overflow-y-auto flex-1">
          <div id="payslip-document" className="space-y-6 text-slate-800 text-xs bg-white">
            {/* Company & Period Header */}
            <div className="flex items-start justify-between border-b border-slate-200 pb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-extrabold text-lg text-slate-900">ezyHR Demo Org Pte Ltd</span>
                <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px]">UEN: 123456789X</span>
              </div>
              <p className="text-slate-500">10 Anson Road, #25-08 International Plaza, Singapore 079903</p>
            </div>
            <div className="text-right">
              <span className="block font-bold text-sm text-slate-900">PAYSLIP SUMMARY</span>
              <span className="block text-slate-500">Payment Date: 28 Aug 2026</span>
              <span className="block text-slate-500">Period: 01 Aug 2026 - 31 Aug 2026</span>
            </div>
          </div>

          {/* Employee Meta */}
          <div className="grid grid-cols-2 sm:grid-cols-4 print:grid-cols-4 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div>
              <span className="block text-[10px] uppercase font-bold text-slate-400">Employee Name</span>
              <span className="font-semibold text-slate-900">{employee.name}</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase font-bold text-slate-400">Job Title</span>
              <span className="font-semibold text-slate-900">{employee.role}</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase font-bold text-slate-400">Department</span>
              <span className="font-semibold text-slate-900">{employee.department}</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase font-bold text-slate-400">Residency Status</span>
              <span className="font-semibold text-emerald-700">{employee.residency === 'SC' ? 'Singapore Citizen' : employee.residency}</span>
            </div>
          </div>

          {/* Itemized Table */}
          <div className="border border-slate-200 rounded-xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                  <th className="py-2.5 px-4">Item Description</th>
                  <th className="py-2.5 px-4 text-right">Earnings (SGD)</th>
                  <th className="py-2.5 px-4 text-right">Deductions (SGD)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-2 px-4 font-medium text-slate-900">Basic Salary</td>
                  <td className="py-2 px-4 text-right font-mono">S${formatSGD(employee.monthlySalary)}</td>
                  <td className="py-2 px-4 text-right font-mono text-slate-400">-</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-medium text-slate-900">Employee CPF Deduction (20%)</td>
                  <td className="py-2 px-4 text-right font-mono text-slate-400">-</td>
                  <td className="py-2 px-4 text-right font-mono text-red-600">-S${formatSGD(employee.employeeCpf)}</td>
                </tr>
                {employee.shg > 0 && (
                  <tr>
                    <td className="py-2 px-4 font-medium text-slate-900">Self-Help Group Fund (SHG)</td>
                    <td className="py-2 px-4 text-right font-mono text-slate-400">-</td>
                    <td className="py-2 px-4 text-right font-mono text-red-600">-S${formatSGD(employee.shg)}</td>
                  </tr>
                )}
                <tr className="bg-emerald-50/50 font-bold">
                  <td className="py-3 px-4 text-slate-900">TOTAL NET PAYABLE</td>
                  <td className="py-3 px-4 text-right font-mono text-slate-400">-</td>
                  <td className="py-3 px-4 text-right font-mono text-emerald-700 text-sm">S${formatSGD(employee.netPay)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Employer Statutory Contributions (Informational) */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
            <span className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">
              Employer Statutory Contributions (Paid by Company, Non-deductible from Net Pay)
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 print:grid-cols-3 gap-4 text-xs">
              <div className="flex flex-col">
                <span className="text-slate-500 mb-0.5">Employer CPF (17%):</span>
                <strong className="font-mono text-slate-900 text-sm">S${formatSGD(employee.employerCpf)}</strong>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-500 mb-0.5">Skills Development Levy (SDL):</span>
                <strong className="font-mono text-slate-900 text-sm">S${formatSGD(employee.sdl)}</strong>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-500 mb-0.5">Total Employer Outlay:</span>
                <strong className="font-mono text-slate-900 text-sm">S${formatSGD(employee.grossPay + employee.employerCpf + employee.sdl)}</strong>
              </div>
            </div>
          </div>

          {/* CPF Allocation Breakdown (Informational) */}
          {employee.residency === 'SC' && totalCpf > 0 && (
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
              <div className="flex justify-between items-end">
                <span className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                  CPF Allocation Breakdown
                </span>
                <span className="text-[10px] text-slate-500 font-bold">TOTAL: S${formatSGD(totalCpf)}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 print:grid-cols-3 gap-3">
                <div className="bg-white p-3 rounded-lg border border-slate-200 flex flex-col justify-between h-full">
                  <div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase mb-0.5">Ordinary Account</div>
                    <div className="text-xs font-black text-slate-900">OA</div>
                  </div>
                  <div className="text-sm font-bold text-slate-900 font-mono mt-2">S${formatSGD(allocation.oa)}</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-slate-200 flex flex-col justify-between h-full">
                  <div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase mb-0.5">{allocation.accountType === 'SA' ? 'Special Account' : 'Retirement Account'}</div>
                    <div className="text-xs font-black text-slate-900">{allocation.accountType}{allocation.accountType === 'RA' ? '*' : ''}</div>
                  </div>
                  <div className="text-sm font-bold text-slate-900 font-mono mt-2">S${formatSGD(allocation.saOrRa)}</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-slate-200 flex flex-col justify-between h-full">
                  <div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase mb-0.5">MediSave Account</div>
                    <div className="text-xs font-black text-slate-900">MA</div>
                  </div>
                  <div className="text-sm font-bold text-slate-900 font-mono mt-2">S${formatSGD(allocation.ma)}</div>
                </div>
              </div>
            </div>
          )}


            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-100">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Digitally generated by ezyHR Cloud System
              </span>
              <span>Ref ID: PAY-202608-0042-DEMO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
