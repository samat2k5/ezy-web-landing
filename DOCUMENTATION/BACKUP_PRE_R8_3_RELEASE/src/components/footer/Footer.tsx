import React from 'react';
import { getLogoPath, handleImageError } from '../../utils/logoHelper';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-200 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">

          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="inline-block">
              <img
                src={getLogoPath('fullDark')}
                onError={(e) => handleImageError(e, 'Logos/ezyhr-full-logo-dark.png')}
                alt="ezyHR Singapore HRMS Platform"
                className="h-10 w-auto object-contain"
              />
            </a>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm font-medium">
              ezyHR is an intelligent cloud-based HRMS and statutory payroll platform built specifically for Singapore employment requirements.
            </p>

            <div className="pt-2 text-xs text-slate-300 space-y-1 font-medium">
              <p className="text-white font-bold">REALTEK ENGINEERING PTE. LTD.</p>
              <p>Singapore UEN: <span className="text-white font-mono font-bold">201723665M</span></p>
              <p>Support: <a href="mailto:support@hr.ezy.sg" className="text-emerald-400 hover:underline font-semibold">support@hr.ezy.sg</a></p>
            </div>
          </div>

          {/* Column 1: Platform & Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Platform & Modules</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#platform" className="text-slate-300 hover:text-emerald-400 transition-colors">Core HR Master File</a></li>
              <li><a href="#features" className="text-slate-300 hover:text-emerald-400 transition-colors">Attendance & GPS Radar</a></li>
              <li><a href="#payroll" className="text-slate-300 hover:text-emerald-400 transition-colors">Leave Management</a></li>
              <li><a href="#payroll" className="text-slate-300 hover:text-emerald-400 transition-colors">Singapore Statutory Payroll</a></li>
              <li><a href="#ai" className="text-slate-300 hover:text-purple-400 transition-colors">AI HR Assistant</a></li>
              <li><a href="#security" className="text-slate-300 hover:text-emerald-400 transition-colors">PDPA Aligned Security</a></li>
            </ul>
          </div>

          {/* Column 2: Resources & Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Singapore Statutory</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><span className="text-slate-300">2026 CPF OW Ceiling ($8,000)</span></li>
              <li><span className="text-slate-300">Skills Development Levy (SDL)</span></li>
              <li><span className="text-slate-300">Self-Help Group Funds (SHG)</span></li>
              <li><span className="text-slate-300">IRAS AIS & IR8A File Export</span></li>
              <li><span className="text-slate-300">Itemised Mobile Payslips</span></li>
              <li><span className="text-slate-300">Bank GIRO Disbursements</span></li>
            </ul>
          </div>

          {/* Column 3: Portals & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Portals & Links</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="https://hr.ezy.sg/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold hover:underline">
                  Customer Sign In (hr.ezy.sg)
                </a>
              </li>
              <li>
                <a href="https://ezy.sg/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                  Official Domain (ezy.sg)
                </a>
              </li>
              <li><a href="#pricing" className="text-slate-300 hover:text-white transition-colors">SME Plans & Pricing</a></li>
              <li><a href="#faq" className="text-slate-300 hover:text-white transition-colors">Statutory FAQ</a></li>
              <li><a href="/privacy-policy" className="text-slate-300 hover:text-white transition-colors">Privacy Policy (PDPA)</a></li>
              <li><a href="/terms-of-service" className="text-slate-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/payment-refund-policy" className="text-slate-300 hover:text-white transition-colors">Payment & Refund Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} ezyHR. Operating under ezy SaaS by REALTEK ENGINEERING PTE. LTD. All rights reserved.</p>
          <p className="text-slate-300 font-mono text-[11px] font-semibold">
            Singapore Employment Act • MOM Payslip • CPF Board Compliant
          </p>
        </div>

      </div>
    </footer>
  );
};
