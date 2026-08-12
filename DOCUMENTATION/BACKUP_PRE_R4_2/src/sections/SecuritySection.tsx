import React from 'react';
import { ShieldCheck, Lock, Key, Server, UserCheck, Eye, CheckCircle2 } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  return (
    <section id="security" className="py-24 bg-white text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" /> Data Protection & Privacy
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Security designed for modern businesses.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            We safeguard your sensitive workforce and payroll data with enterprise-grade cloud architecture, encryption, and strict role access controls.
          </p>
        </div>

        {/* Asymmetrical Bento Layout for Security */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6 mb-12">
          
          {/* Card 1: Primary Large Feature Card (Col 8) */}
          <div className="lg:col-span-8 bg-slate-950 text-white p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-extrabold rounded-full border border-emerald-500/30">
                  PDPA ALIGNED
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-3">Singapore PDPA Privacy Guidelines Aligned</h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                Built in strict alignment with Singapore Personal Data Protection Act (PDPA) rules. Granular role permissions ensure managers and administrators only access authorized employee information.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Granular Role Permissions
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Explicit Consent Management
              </div>
            </div>
          </div>

          {/* Card 2: Standard Card (Col 4) */}
          <div className="lg:col-span-4 bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white text-emerald-600 flex items-center justify-center mb-5 border border-slate-200 shadow-xs">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">TLS 1.3 & AES-256 Encryption</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Bank-grade encryption for all workforce data in transit and at rest across secure cloud storage containers.
              </p>
            </div>
          </div>

          {/* Card 3: Standard Card (Col 4) */}
          <div className="lg:col-span-4 bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-white text-emerald-600 flex items-center justify-center mb-5 border border-slate-200 shadow-xs">
              <Key className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Role-Based Access Control</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Define custom access policies for HR managers, line supervisors, accountants, and staff members.
            </p>
          </div>

          {/* Card 4: Standard Card (Col 4) */}
          <div className="lg:col-span-4 bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-white text-emerald-600 flex items-center justify-center mb-5 border border-slate-200 shadow-xs">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Immutable Audit Logs</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Track all system accesses, document downloads, and payroll adjustments with timestamped audit logs.
            </p>
          </div>

          {/* Card 5: Standard Card (Col 4) */}
          <div className="lg:col-span-4 bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-white text-emerald-600 flex items-center justify-center mb-5 border border-slate-200 shadow-xs">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Redundant Cloud Backups</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Automated daily backups and high-availability cloud hosting ensure business continuity and zero data loss.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
