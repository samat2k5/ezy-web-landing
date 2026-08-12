import React from 'react';

export const IntegrationsSection: React.FC = () => {
  const integrations = [
    { name: 'Xero Accounting', cat: 'Finance & Ledger Export', status: 'AVAILABLE' },
    { name: 'QuickBooks Online', cat: 'Accounting Sync', status: 'AVAILABLE' },
    { name: 'Microsoft 365', cat: 'Single Sign-On & Calendar', status: 'AVAILABLE' },
    { name: 'Google Workspace', cat: 'Identity & SSO', status: 'AVAILABLE' },
    { name: 'Slack', cat: 'Leave & Attendance Alerts', status: 'AVAILABLE' },
    { name: 'Microsoft Teams', cat: 'Notifications & ESS', status: 'AVAILABLE' },
    { name: 'Biometric Terminals', cat: 'Hardware Sync', status: 'AVAILABLE' },
    { name: 'Developer REST API', cat: 'Custom Integrations', status: 'COMING SOON' },
  ];

  return (
    <section className="py-24 bg-slate-50 text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Ecosystem Connectivity
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Connect ezyHR with your existing software stack.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Export payroll journal entries directly to accounting software and integrate employee identity with your corporate workspace.
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {integrations.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div>
                <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full inline-block mb-3 border ${
                  item.status === 'AVAILABLE'
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-200'
                    : 'bg-amber-100 text-amber-800 border-amber-200'
                }`}>
                  {item.status}
                </span>

                <h3 className="text-sm font-bold text-slate-900 mb-1">{item.name}</h3>
                <span className="text-[11px] text-slate-500 font-medium">{item.cat}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
