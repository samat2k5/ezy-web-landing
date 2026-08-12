import React from 'react';
import { Network, ArrowRight, CheckCircle2 } from 'lucide-react';

export const IntegrationsSection: React.FC = () => {
  const integrations = [
    { name: 'Xero Accounting', cat: 'Finance & Ledger', status: 'AVAILABLE' },
    { name: 'QuickBooks Online', cat: 'Accounting Sync', status: 'AVAILABLE' },
    { name: 'Microsoft 365', cat: 'Single Sign-On & Calendar', status: 'AVAILABLE' },
    { name: 'Google Workspace', cat: 'Identity & SSO', status: 'AVAILABLE' },
    { name: 'Slack', cat: 'Leave & Attendance Alerts', status: 'AVAILABLE' },
    { name: 'Microsoft Teams', cat: 'Notifications & ESS', status: 'AVAILABLE' },
    { name: 'Biometric Terminals', cat: 'Hardware Sync', status: 'AVAILABLE' },
    { name: 'Developer REST API', cat: 'Custom Integration', status: 'COMING SOON' },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            Ecosystem Connectivity
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Connect ezyHR with your existing software stack.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Export payroll journal entries directly to accounting software and integrate employee identity with your corporate workspace.
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {integrations.map((item, idx) => (
            <div 
              key={idx}
              className="bg-slate-950 p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full inline-block mb-3 border ${
                  item.status === 'AVAILABLE'
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                    : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                }`}>
                  {item.status}
                </span>

                <h3 className="text-sm font-bold text-white mb-1">{item.name}</h3>
                <span className="text-[11px] text-slate-400">{item.cat}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
