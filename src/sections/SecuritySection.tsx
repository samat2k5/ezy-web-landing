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
          
          {/* Left Column: Large Security Dashboard */}
          <div className="lg:col-span-6 bg-slate-900 text-white p-7 sm:p-9 rounded-3xl border border-slate-800 shadow-product-ui space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-black text-white uppercase tracking-wider">Enterprise Security Dashboard</span>
              </div>
              <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold border border-emerald-500/40 font-mono">
                DEMO DATA
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3 font-sans text-slate-200 font-bold">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  <span>Data Encryption</span>
                </div>
                <span className="text-emerald-400 font-bold">AES-256 / TLS 1.3</span>
              </div>

              <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3 font-sans text-slate-200 font-bold">
                  <Key className="w-4 h-4 text-cyan-400" />
                  <span>Role Access Control</span>
                </div>
                <span className="text-cyan-400 font-bold">RBAC Enforced</span>
              </div>

              <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3 font-sans text-slate-200 font-bold">
                  <FileCheck className="w-4 h-4 text-teal-400" />
                  <span>Singapore PDPA Framework</span>
                </div>
                <span className="text-teal-400 font-bold">Data Privacy Aligned</span>
              </div>

              <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3 font-sans text-slate-200 font-bold">
                  <Server className="w-4 h-4 text-sky-400" />
                  <span>Cloud Storage Redundancy</span>
                </div>
                <span className="text-sky-400 font-bold">Daily Backups</span>
              </div>
            </div>
          </div>

          {/* Right Column: Audit Trail / Security Events */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Real-time security audit log &amp; event tracking.
              </h3>
              <p className="text-sm text-slate-600">
                Every sensitive HR and payroll operation creates an immutable, timestamped audit log entry.
              </p>
            </div>
            
            {/* Audit log events container */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3 font-mono text-xs">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-sans">
                Sample Audit Log Stream (DEMO DATA)
              </div>
              
              {[
                { time: '10:42:15 AM', event: 'Payroll access verified', user: 'Admin (TW)', status: 'Success', color: 'text-emerald-700 bg-emerald-100 border-emerald-200' },
                { time: '10:15:02 AM', event: 'Admin login recorded', user: 'HR Lead (NH)', status: 'Logged', color: 'text-blue-700 bg-blue-100 border-blue-200' },
                { time: '09:48:30 AM', event: 'Employee record updated', user: 'System', status: 'Updated', color: 'text-teal-700 bg-teal-100 border-teal-200' },
                { time: '09:05:12 AM', event: 'Permission change logged', user: 'SuperAdmin', status: 'Audited', color: 'text-purple-700 bg-purple-100 border-purple-200' }
              ].map((log, idx) => (
                <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200/90 flex items-center justify-between gap-3 shadow-xs">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-[10px] text-slate-400 flex-shrink-0">{log.time}</span>
                    <span className="font-bold text-slate-900 font-sans text-xs truncate">{log.event}</span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-[10px] text-slate-500 font-sans">{log.user}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${log.color}`}>
                      {log.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-2.5 pt-1">
              {securityPillars.map((sp, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 font-semibold">{sp.title}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
