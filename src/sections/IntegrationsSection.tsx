import React from 'react';
import { Layers, RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';
import { getLogoPath, handleImageError } from '../utils/logoHelper';

export const IntegrationsSection: React.FC = () => {
  const integrations = [
    { name: 'Xero Accounting', cat: 'Finance & Ledger Export', status: 'AVAILABLE', icon: 'X' },
    { name: 'QuickBooks Online', cat: 'Accounting Sync', status: 'AVAILABLE', icon: 'Q' },
    { name: 'Microsoft 365', cat: 'Single Sign-On & Calendar', status: 'AVAILABLE', icon: 'M' },
    { name: 'Google Workspace', cat: 'Identity & SSO', status: 'AVAILABLE', icon: 'G' },
    { name: 'Slack', cat: 'Leave & Attendance Alerts', status: 'AVAILABLE', icon: 'S' },
    { name: 'Microsoft Teams', cat: 'Notifications & ESS', status: 'AVAILABLE', icon: 'T' },
    { name: 'Biometric Terminals', cat: 'Hardware Sync', status: 'AVAILABLE', icon: 'B' },
    { name: 'Developer REST API', cat: 'Custom Integrations', status: 'COMING SOON', icon: 'API' },
  ];

  return (
    <section className="py-24 bg-ambient-cyan text-slate-900 relative border-b border-cyan-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            Ecosystem Connectivity
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950">
            Connect ezyHR with your existing software stack.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Export payroll journal entries directly to accounting software and integrate employee identity with your corporate workspace.
          </p>
        </div>

        {/* Hub-and-Spoke Ecosystem Network Composition */}
        <div className="max-w-5xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-cyan-100 shadow-xl relative">
          
          {/* Central Hub Node */}
          <div className="flex justify-center mb-12">
            <div className="p-6 bg-slate-950 text-white rounded-3xl border-2 border-emerald-400 shadow-2xl flex flex-col items-center text-center space-y-2 relative z-10">
              <img 
                src={getLogoPath('fullDark')} 
                onError={(e) => handleImageError(e, 'Logos/ezyhr-full-logo-dark.png')}
                alt="ezyHR Core Platform" 
                className="h-10 w-auto object-contain" 
              />
              <span className="text-[11px] font-bold text-emerald-400 font-mono flex items-center gap-1">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Core Integration Hub
              </span>
            </div>
          </div>

          {/* Surrounding Connected Service Nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {integrations.map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 p-4.5 rounded-2xl border border-slate-200 hover:border-emerald-500 transition-all flex flex-col justify-between shadow-xs hover:shadow-md group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-white text-slate-900 font-black flex items-center justify-center text-xs border border-slate-200 shadow-xs group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full border ${
                    item.status === 'AVAILABLE'
                      ? 'bg-emerald-100 text-emerald-800 border-emerald-200'
                      : 'bg-amber-100 text-amber-800 border-amber-200'
                  }`}>
                    {item.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-slate-900">{item.name}</h3>
                  <span className="text-[10px] text-slate-500 block mt-0.5">{item.cat}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
