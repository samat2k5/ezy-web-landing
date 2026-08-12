import React from 'react';
import { Mail, ShieldCheck, ExternalLink, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-extrabold text-sm shadow-md">
                ezy
              </span>
              <span className="text-2xl font-black text-white tracking-tight">ezyHR</span>
            </div>
            
            <p className="text-slate-200 font-bold text-sm">
              Smart HR. Simple Payroll.
            </p>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Cloud HRMS and Singapore statutory payroll software designed to simplify everyday HR operations for Singapore SMEs and growing teams.
            </p>

            <div className="pt-2 text-[11px] text-slate-400 space-y-1 bg-slate-900/80 p-3 rounded-xl border border-slate-800/80">
              <p className="text-slate-300 font-bold">Legal Entity & Parent Initiative:</p>
              <p>
                ezyHR is a SaaS product developed and operated under the <strong className="text-slate-200">ezy SaaS</strong> technology initiative of <strong className="text-slate-200">REALTEK ENGINEERING PTE. LTD.</strong>
              </p>
              <p className="text-emerald-400 font-mono">Singapore UEN: 201723665M</p>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Product & Platform</h4>
            <ul className="space-y-2.5">
              <li><a href="#platform" className="hover:text-emerald-400 transition-colors">Platform Ecosystem</a></li>
              <li><a href="#features" className="hover:text-emerald-400 transition-colors">Core HR Management</a></li>
              <li><a href="#payroll" className="hover:text-emerald-400 transition-colors">Singapore Statutory Payroll</a></li>
              <li><a href="#ai" className="hover:text-emerald-400 transition-colors">AI HR Assistant</a></li>
              <li><a href="#security" className="hover:text-emerald-400 transition-colors">Security & PDPA Alignment</a></li>
              <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing Plans</a></li>
            </ul>
          </div>

          {/* Company & Support Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Company & Support</h4>
            <ul className="space-y-2.5">
              <li><a href="https://ezy.sg/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1">About ezyHR <ExternalLink className="w-3 h-3 text-slate-500" /></a></li>
              <li><a href="mailto:support@hr.ezy.sg" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-emerald-400" /> support@hr.ezy.sg</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">Help Center & FAQ</a></li>
              <li><a href="https://hr.ezy.sg/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Customer Portal Login</a></li>
            </ul>
          </div>

          {/* Legal & Privacy Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Legal & Privacy</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">PDPA Compliance Notice</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Security Architecture</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} ezyHR. Operating under ezy SaaS initiative of REALTEK ENGINEERING PTE. LTD. (UEN: 201723665M). All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <Globe className="w-3.5 h-3.5 text-emerald-400" /> https://ezy.sg/
            </span>
            <span>•</span>
            <span>Singapore Cloud Infrastructure</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
