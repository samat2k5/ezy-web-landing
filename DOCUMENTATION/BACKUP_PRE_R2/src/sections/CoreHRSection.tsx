import React from 'react';
import { UserCheck, ShieldAlert, FileText, Network, Laptop, CheckCircle2, User, Key, BellRing } from 'lucide-react';

export const CoreHRSection: React.FC = () => {
  const coreHrGroups = [
    {
      title: 'Digital Employee Master Files',
      desc: 'Centralize essential employee data, employment contracts, identity documents, and personal details.',
      icon: UserCheck,
      items: ['Digital Employee Records', 'Employment & Promotion History', 'Custom Fields & Tags']
    },
    {
      title: 'Org Structure & Hierarchy',
      desc: 'Visual reporting lines, multi-level department trees, and manager approval chains.',
      icon: Network,
      items: ['Visual Org Chart', 'Department & Branch Grouping', 'Role Hierarchy']
    },
    {
      title: 'Self-Service Portals (ESS / MSS)',
      desc: 'Empower employees to update personal info and allow managers to review and approve requests instantly.',
      icon: User,
      items: ['Employee Self-Service (ESS)', 'Manager Self-Service (MSS)', 'Approval Workflows']
    },
    {
      title: 'Document Vault & Work Pass Expiry',
      desc: 'Automated notification alerts when Employment Passes (EP, S-Pass, WP) or certifications approach renewal.',
      icon: BellRing,
      items: ['Work Pass Expiry Alerts', 'E-Signature Policy Storage', 'Role-Based Document Access']
    },
    {
      title: 'Company Asset Management',
      desc: 'Track company laptops, mobile devices, security access badges, and hardware assigned to employees.',
      icon: Laptop,
      items: ['Asset Check-in / Check-out', 'Serial Number Records', 'Return Acknowledgment']
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            Foundation Module
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Centralize your people data with confidence.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            ezyHR transforms messy paper files into secure, cloud-hosted employee master records with automated expiry alerts and self-service capabilities.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreHrGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-blue-400 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{group.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">{group.desc}</p>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-800/80">
                  {group.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
