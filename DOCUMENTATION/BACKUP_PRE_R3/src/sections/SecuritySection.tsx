import React from 'react';
import { ShieldCheck, Lock, Key, Server, UserCheck, Eye } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const securityPillars = [
    {
      title: 'Role-Based Access Control (RBAC)',
      desc: 'Granular role permissions ensure employees, managers, finance, and HR administrators only access data relevant to their authorized role.',
      icon: Key
    },
    {
      title: 'Data Encryption Protocols',
      desc: 'Bank-grade TLS 1.3 encryption for data in transit and AES-256 encryption for data at rest across cloud storage.',
      icon: Lock
    },
    {
      title: 'Multi-Factor Authentication (MFA)',
      desc: 'Enforce two-factor verification to safeguard administrative user accounts and employee portals.',
      icon: UserCheck
    },
    {
      title: 'Comprehensive Audit Logs',
      desc: 'Track all user activity, document accesses, and payroll modifications with immutable timestamp logs.',
      icon: Eye
    },
    {
      title: 'Secure Cloud Infrastructure',
      desc: 'Hosted on enterprise cloud infrastructure with automated redundant backups and disaster recovery preparedness.',
      icon: Server
    },
    {
      title: 'PDPA-Focused Privacy Practices',
      desc: 'Built in alignment with Singapore Personal Data Protection Act (PDPA) privacy guidelines and data retention protocols.',
      icon: ShieldCheck
    }
  ];

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

        {/* Security Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50 p-7 rounded-3xl border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white text-slate-900 flex items-center justify-center mb-5 border border-slate-200 shadow-xs">
                    <Icon className="w-6 h-6 text-emerald-600" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* PDPA Callout */}
        <div className="mt-14 max-w-4xl mx-auto bg-slate-900 text-white p-7 rounded-3xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Singapore PDPA Data Protection Aligned</h4>
              <p className="text-xs text-slate-400 mt-0.5">Strict consent mechanisms, role permissions, and secure data handling guidelines.</p>
            </div>
          </div>

          <span className="text-xs text-emerald-400 font-mono font-bold bg-emerald-500/10 px-4 py-2 rounded-xl border border-emerald-500/30">
            Encrypted & Protected
          </span>
        </div>

      </div>
    </section>
  );
};
