import React from 'react';
import { Zap, TrendingDown, Clock, AlertTriangle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      num: '01',
      headline: 'Spreadsheets break at scale',
      body: 'Managing CPF, SDL, SHG across dozens of employees in Excel leads to errors, audit risk and missed deadlines.',
      icon: TrendingDown,
    },
    {
      num: '02',
      headline: 'Attendance gaps cost money',
      body: 'Without automated GPS-verified clock-in, payroll disputes and unauthorised overtime are invisible until it is too late.',
      icon: Clock,
    },
    {
      num: '03',
      headline: 'Leave is still paper-based',
      body: 'Email approvals, WhatsApp messages and manual records create compliance gaps and employee frustration.',
      icon: AlertTriangle,
    },
  ];

  return (
    <section className="relative bg-slate-950 text-white overflow-hidden py-24 lg:py-32">

      {/* Atmospheric blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-gradient-to-br from-sky-900/40 to-transparent blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-gradient-to-tl from-teal-900/30 to-transparent blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Editorial headline */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 mb-6">
            <span className="text-[11px] font-black uppercase tracking-widest text-sky-400">The Problem</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
            HR shouldn't feel like<br />
            <span className="text-gradient-hero">spreadsheet management.</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-xl">
            Singapore employment compliance is complex. ezyHR brings it into one intelligent, automated platform.
          </p>
        </div>

        {/* Problem statements — horizontal editorial */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 rounded-2xl overflow-hidden">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className={`relative p-8 lg:p-10 ${i < problems.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/10' : ''}`}
              >
                <div className="absolute top-6 right-6 text-[80px] font-black text-white/[0.04] leading-none select-none">
                  {p.num}
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-sky-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{p.headline}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.body}</p>
              </div>
            );
          })}
        </div>

        {/* Solution bridge */}
        <div className="mt-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-800/60 to-transparent" />
          <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-sky-600/20 to-teal-600/20 border border-sky-700/40">
            <Zap className="w-4 h-4 text-sky-400" />
            <span className="text-sm font-bold text-sky-300">ezyHR brings it all together</span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-800/60 to-transparent" />
        </div>
      </div>
    </section>
  );
};
