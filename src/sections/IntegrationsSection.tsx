import React from 'react';
import { RefreshCw, Cpu, Code2, ArrowRight } from 'lucide-react';
import { getLogoPath, handleImageError } from '../utils/logoHelper';

export const IntegrationsSection: React.FC = () => {

  // Real brand SVG icons inlined
  const XeroIcon = () => (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <circle cx="20" cy="20" r="20" fill="#13B5EA"/>
      <path d="M11 13L20 20M20 20L29 27M20 20L29 13M20 20L11 27" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const QuickBooksIcon = () => (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <circle cx="20" cy="20" r="20" fill="#2CA01C"/>
      <path d="M12 19c0-3.31 2.69-6 6-6s5 2.69 5 6v8M28 21c0 3.31-2.69 6-6 6s-5-2.69-5-6v-8" stroke="white" strokeWidth="3.2" strokeLinecap="round"/>
    </svg>
  );

  const Microsoft365Icon = () => (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <rect x="3" y="3" width="15.5" height="15.5" rx="1" fill="#F25022"/>
      <rect x="21.5" y="3" width="15.5" height="15.5" rx="1" fill="#7FBA00"/>
      <rect x="3" y="21.5" width="15.5" height="15.5" rx="1" fill="#00A4EF"/>
      <rect x="21.5" y="21.5" width="15.5" height="15.5" rx="1" fill="#FFB900"/>
    </svg>
  );

  const GoogleIcon = () => (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <path d="M37.5 20.5c0-1.34-.12-2.63-.34-3.86H20v7.3h9.83c-.42 2.45-1.72 4.53-3.67 5.92v4.92h5.94C34.96 31.53 37.5 26.46 37.5 20.5z" fill="#4285F4"/>
      <path d="M20 38c4.97 0 9.14-1.64 12.18-4.45l-5.94-4.61c-1.65 1.11-3.77 1.77-6.24 1.77-4.8 0-8.87-3.24-10.32-7.6H3.54v4.77C6.56 33.89 12.81 38 20 38z" fill="#34A853"/>
      <path d="M9.68 23.11c-.37-1.1-.58-2.27-.58-3.47s.21-2.37.58-3.47v-4.77H3.54C2.56 13.44 2 16.64 2 19.64s.56 6.2 1.54 8.24l6.14-4.77z" fill="#FBBC05"/>
      <path d="M20 7.94c2.72 0 5.16.94 7.08 2.78l5.31-5.31C29.13 2.54 24.97 1 20 1 12.81 1 6.56 5.11 3.54 11.4l6.14 4.77C11.13 11.18 15.2 7.94 20 7.94z" fill="#EA4335"/>
    </svg>
  );

  const SlackIcon = () => (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <path d="M9.5 24.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm0 0H26" stroke="#36C5F0" strokeWidth="4" strokeLinecap="round"/>
      <path d="M30.5 9.5a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 0V26" stroke="#2EB67D" strokeWidth="4" strokeLinecap="round"/>
      <path d="M30.5 30.5a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 0H14" stroke="#ECB22E" strokeWidth="4" strokeLinecap="round"/>
      <path d="M9.5 15.5a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 0V32" stroke="#E01E5A" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  );

  const TeamsIcon = () => (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <rect x="3" y="12" width="22" height="21" rx="3" fill="#5059C9"/>
      <path d="M9 19h10M14 19v9" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="30" cy="12" r="5" fill="#7B83EB"/>
      <path d="M25 21c0-3.31 2.24-6 5-6s5 2.69 5 6v7H25v-7z" fill="#7B83EB"/>
    </svg>
  );

  const integrations = [
    {
      name: 'Xero Accounting',
      cat: 'Finance & Ledger Export',
      status: 'Integration-ready',
      icon: XeroIcon,
      bgFrom: 'from-sky-50',
      bgTo: 'to-sky-100',
      border: 'border-sky-200',
      hoverBorder: 'hover:border-sky-400',
      badgeBg: 'bg-sky-100 text-sky-800 border-sky-300',
      dotColor: 'bg-sky-500'
    },
    {
      name: 'QuickBooks Online',
      cat: 'Accounting Sync',
      status: 'Integration-ready',
      icon: QuickBooksIcon,
      bgFrom: 'from-green-50',
      bgTo: 'to-emerald-100',
      border: 'border-green-200',
      hoverBorder: 'hover:border-green-400',
      badgeBg: 'bg-green-100 text-green-800 border-green-300',
      dotColor: 'bg-green-500'
    },
    {
      name: 'Microsoft 365',
      cat: 'Single Sign-On & Calendar',
      status: 'Integration-ready',
      icon: Microsoft365Icon,
      bgFrom: 'from-orange-50',
      bgTo: 'to-orange-100',
      border: 'border-orange-200',
      hoverBorder: 'hover:border-orange-400',
      badgeBg: 'bg-orange-100 text-orange-800 border-orange-300',
      dotColor: 'bg-orange-500'
    },
    {
      name: 'Google Workspace',
      cat: 'Identity & SSO',
      status: 'Integration-ready',
      icon: GoogleIcon,
      bgFrom: 'from-blue-50',
      bgTo: 'to-indigo-100',
      border: 'border-blue-200',
      hoverBorder: 'hover:border-blue-400',
      badgeBg: 'bg-blue-100 text-blue-800 border-blue-300',
      dotColor: 'bg-blue-500'
    },
    {
      name: 'Slack',
      cat: 'Leave & Attendance Alerts',
      status: 'Integration-ready',
      icon: SlackIcon,
      bgFrom: 'from-purple-50',
      bgTo: 'to-pink-100',
      border: 'border-purple-200',
      hoverBorder: 'hover:border-purple-400',
      badgeBg: 'bg-purple-100 text-purple-800 border-purple-300',
      dotColor: 'bg-purple-500'
    },
    {
      name: 'Microsoft Teams',
      cat: 'Notifications & ESS',
      status: 'Integration-ready',
      icon: TeamsIcon,
      bgFrom: 'from-indigo-50',
      bgTo: 'to-indigo-100',
      border: 'border-indigo-200',
      hoverBorder: 'hover:border-indigo-400',
      badgeBg: 'bg-indigo-100 text-indigo-800 border-indigo-300',
      dotColor: 'bg-indigo-500'
    },
    {
      name: 'Biometric Terminals',
      cat: 'Hardware Clock-In Sync',
      status: 'Integration-ready',
      icon: Cpu,
      bgFrom: 'from-teal-50',
      bgTo: 'to-cyan-100',
      border: 'border-teal-200',
      hoverBorder: 'hover:border-teal-400',
      badgeBg: 'bg-teal-100 text-teal-800 border-teal-300',
      dotColor: 'bg-teal-500',
      isLucide: true,
      lucideColor: 'text-teal-600'
    },
    {
      name: 'Developer REST API',
      cat: 'Custom Integrations',
      status: 'Custom Endpoint',
      icon: Code2,
      bgFrom: 'from-amber-50',
      bgTo: 'to-yellow-100',
      border: 'border-amber-200',
      hoverBorder: 'hover:border-amber-400',
      badgeBg: 'bg-amber-100 text-amber-800 border-amber-300',
      dotColor: 'bg-amber-500',
      isLucide: true,
      lucideColor: 'text-amber-600'
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-100 text-slate-900 relative border-b border-cyan-200 overflow-hidden">
      
      {/* Ambient Radial Backdrop */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-cyan-200/40 to-transparent blur-[140px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-bold uppercase tracking-wider shadow-sm">
            Ecosystem Connectivity
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950">
            Connect ezyHR with your existing software stack.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Export payroll journal entries directly to accounting software and integrate employee identity with your corporate workspace tools.
          </p>
        </div>

        {/* Central Hub Badge */}
        <div className="flex justify-center mb-12">
          <div className="relative inline-flex flex-col items-center text-center rounded-3xl shadow-2xl shadow-emerald-400/25 border-2 border-emerald-400 overflow-hidden min-w-[240px]">
            {/* White logo area — use fullLight (navy text) on white bg */}
            <div className="bg-white px-8 pt-7 pb-5 w-full flex justify-center">
              <img 
                src={getLogoPath('fullLight')} 
                onError={(e) => handleImageError(e, 'Logos/ezyhr-full-logo.png')}
                alt="ezyHR Core Platform" 
                className="h-11 w-auto object-contain" 
              />
            </div>
            {/* Coloured label strip */}
            <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-700 w-full px-6 py-2.5 flex items-center justify-center gap-2">
              <RefreshCw className="w-3.5 h-3.5 text-emerald-200 animate-spin flex-shrink-0" />
              <span className="text-[11px] font-bold text-emerald-100 font-mono">Core Integration Hub</span>
            </div>
          </div>
        </div>

        {/* Integration Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {integrations.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className={`
                  relative bg-gradient-to-br ${item.bgFrom} ${item.bgTo}
                  p-5 rounded-2xl border ${item.border} ${item.hoverBorder}
                  transition-all duration-200 flex flex-col gap-4
                  shadow-sm hover:shadow-lg hover:-translate-y-0.5
                  cursor-default group
                `}
              >
                {/* Top Row: Icon + Status Badge */}
                <div className="flex items-center justify-between">
                  {/* Brand Logo / Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white shadow-md border border-white/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {item.isLucide ? (
                      <IconComp className={`w-6 h-6 ${(item as any).lucideColor}`} />
                    ) : (
                      <IconComp />
                    )}
                  </div>

                  {/* Status Pill */}
                  <span className={`text-[9px] font-extrabold px-2.5 py-1 rounded-full border ${item.badgeBg} flex items-center gap-1 tracking-wider uppercase`}>
                    {item.status === 'AVAILABLE' && (
                      <span className={`w-1.5 h-1.5 rounded-full ${item.dotColor} inline-block`} />
                    )}
                    {item.status}
                  </span>
                </div>

                {/* Bottom Row: Name + Description */}
                <div className="space-y-0.5">
                  <h3 className="text-sm font-extrabold text-slate-900 leading-tight">{item.name}</h3>
                  <span className="text-[11px] text-slate-600 font-medium block leading-snug">{item.cat}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Connection Line Visual Accent */}
        <div className="flex justify-center mt-12">
          <p className="text-xs text-slate-500 font-medium text-center max-w-lg">
            All integration connections use encrypted API channels. Payroll journal entries and HR events sync automatically on every payroll run.
          </p>
        </div>

      </div>
    </section>
  );
};
