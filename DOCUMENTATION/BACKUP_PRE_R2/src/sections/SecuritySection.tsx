import React from 'react';
import { ShieldCheck, Lock, Key, FileCode, Server, UserCheck, Eye, RefreshCw } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const securityPillars = [
    {
      title: 'Data Encryption',
      desc: 'Bank-grade TLS 1.3 encryption in transit and AES-256 encryption for data stored at rest.',
      icon: Lock
    },
    {
      title: 'Role-Based Access Control (RBAC)',
      desc: 'Granular permissions ensure employees, managers, finance, and HR only see data relevant to their role.',
      icon: Key
    },
    {
      title: 'Multi-Factor Authentication (MFA)',
      desc: 'Enforce two-factor verification to safeguard administrative access and employee portals.',
      icon: UserCheck
    },
    {
      title: 'Comprehensive Audit Logs',
      desc: 'Track all user activity, document accesses, and payroll modifications with immutable timestamp logs.',
      icon: Eye
    },
    {
      title: 'Automated Cloud Backups',
      desc: 'Redundant automated cloud backups ensure maximum data resiliency and disaster recovery preparedness.',
      icon: RefreshCw
    },
    {
      title: 'Singapore PDPA Aligned',
      desc: 'Built in compliance with Singapore Personal Data Protection Act (PDPA) privacy frameworks.',
      icon: ShieldCheck
    }
  ];

  return (
    <section id="security" className="py-20 md:py-28 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" /> Data Protection & Privacy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Security designed for modern businesses.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            We safeguard your sensitive workforce and payroll data with enterprise-grade cloud architecture, encryption, and strict access controls.
          </p>
        </div>

        {/* Security Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* PDPA Callout Banner */}
        <div className="mt-12 max-w-4xl mx-auto bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Singapore PDPA Data Protection Aligned</h4>
              <p className="text-xs text-slate-400">Strict consent mechanisms, access policies, and data retention guidelines.</p>
            </div>
          </div>

          <span className="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/30">
            Encrypted & Protected
          </span>
        </div>

      </div>
    </section>
  );
};
