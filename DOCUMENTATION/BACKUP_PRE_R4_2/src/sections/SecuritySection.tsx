import React from 'react';
import { ShieldCheck, Lock, Key, Server, Eye, FileCheck, CheckCircle2 } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const securityPillars = [
    { title: 'Role-Based Access Control (RBAC)', desc: 'Granular permissions restricting payroll and salary data to authorized HR and finance personnel.' },
    { title: 'Immutable Audit Trail Logging', desc: 'Every salary update, leave approval, and user action is logged with timestamped user records.' },
    { title: 'Singapore PDPA Data Protection', desc: 'Designed in compliance with Personal Data Protection Act requirements for employee records.' },
    { title: 'Encrypted Data Transmission', desc: 'TLS 1.3 in-transit encryption and AES-256 at-rest encryption for sensitive payroll files.' },
    { title: 'Daily Automated Cloud Backups', desc: 'Redundant cloud backups ensuring zero data loss and 99.9% platform availability.' },
  ];

  return (
    <section className="py-24 bg-white text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-700" /> Security & Compliance
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950">
            Security designed for modern businesses.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Protect your sensitive workforce data, salary records, and statutory compliance documents with enterprise-grade cloud security.
          </p>
        </div>

        {/* Asymmetric 2-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Crisp Light Security Posture Visual Dashboard */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-2xl space-y-5 text-slate-900">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span className="text-xs font-bold text-slate-950 uppercase tracking-wider">Security Control Center</span>
              </div>
              <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-extrabold border border-emerald-200">
                ACTIVE PRIVACY ENFORCED
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3 font-sans text-slate-800 font-bold">
                  <Lock className="w-4 h-4 text-blue-600" />
                  <span>Data Encryption Standard</span>
                </div>
                <span className="text-emerald-700 font-bold">AES-256 / TLS 1.3</span>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3 font-sans text-slate-800 font-bold">
                  <Key className="w-4 h-4 text-purple-600" />
                  <span>Identity Authentication</span>
                </div>
                <span className="text-blue-700 font-bold">2FA / SSO Enabled</span>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3 font-sans text-slate-800 font-bold">
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                  <span>Singapore PDPA Framework</span>
                </div>
                <span className="text-emerald-700 font-bold">Aligned & Audited</span>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3 font-sans text-slate-800 font-bold">
                  <Server className="w-4 h-4 text-cyan-600" />
                  <span>Automated Cloud Backups</span>
                </div>
                <span className="text-cyan-700 font-bold">Daily Redundant</span>
              </div>
            </div>
          </div>

          {/* Right Column: Security Pillars Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Complete data privacy and permission controls.
            </h3>
            
            <p className="text-base text-slate-600 leading-relaxed">
              Maintain granular control over who can view, edit, and export statutory payroll and personal employee information.
            </p>

            <div className="space-y-4 pt-2">
              {securityPillars.map((sp, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{sp.title}</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{sp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
