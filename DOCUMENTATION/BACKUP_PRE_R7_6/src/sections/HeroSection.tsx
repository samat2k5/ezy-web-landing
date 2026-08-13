import React, { useState } from 'react';
import {
  ArrowRight, CheckCircle, Users, DollarSign, Clock,
  Calendar, TrendingUp, Bell, ShieldCheck, ChevronRight,
  CheckCircle2, Sparkles, BarChart3, FileText, Globe, Zap
} from 'lucide-react';
import { DEMO_DASHBOARD_STATS, DEMO_PAYROLL_EMPLOYEES } from '../data/demoData';
import { getLogoPath, handleImageError } from '../utils/logoHelper';

interface HeroSectionProps {
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemo, onOpenTrial }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'payroll' | 'attendance'>('overview');

  const tabs = [
    { id: 'overview' as const, label: 'Dashboard', icon: BarChart3 },
    { id: 'payroll' as const, label: 'Payroll', icon: DollarSign },
    { id: 'attendance' as const, label: 'Attendance', icon: Clock },
  ];

  return (
    <section className="relative min-h-screen flex flex-col bg-hero-atmosphere text-slate-900 overflow-hidden">

      {/* ── Atmospheric radial light fields (Refined & Restrained) ── */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute top-0 left-1/4 w-[800px] h-[600px] bg-gradient-to-br from-sky-300/15 via-cyan-200/10 to-transparent blur-[140px] rounded-full" />
        <div className="absolute top-1/3 right-0 w-[600px] h-[500px] bg-gradient-to-bl from-emerald-200/12 via-teal-200/10 to-transparent blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 lg:pt-36 pb-0 relative z-10 flex-1 flex flex-col">

        {/* ── Two-column editorial layout ── */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-8 xl:gap-16 flex-1">

          {/* LEFT — Headline + CTAs */}
          <div className="lg:w-[42%] xl:w-[38%] flex flex-col justify-center pt-4 lg:pt-16 xl:pt-24 space-y-8">

            {/* Platform badge */}
            <div className="inline-flex items-center gap-2.5 self-start px-4 py-2 rounded-full bg-white/90 border border-sky-200 shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-black uppercase tracking-widest text-emerald-700">ezyHR SaaS Platform</span>
              <span className="text-slate-300">•</span>
              <span className="text-[11px] font-semibold text-slate-600">Built for Singapore</span>
            </div>

            {/* Editorial headline */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.02] text-slate-950">
                HR &amp; Payroll,
              </h1>
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.02]">
                <span className="text-gradient-hero">Simplified for</span>
              </h1>
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.02] text-slate-950">
                Singapore.
              </h1>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed max-w-sm">
              One intelligent cloud platform for employees, attendance, leave, claims and Singapore-compliant payroll.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenDemo}
                className="group flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-sky-600 via-cyan-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 text-white font-bold rounded-2xl text-[15px] shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Book a Free Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={onOpenTrial}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/90 hover:bg-white text-slate-800 font-semibold rounded-2xl text-[15px] border border-slate-200 shadow-sm transition-all hover:shadow-md backdrop-blur-sm"
              >
                Start Free Trial
              </button>
            </div>

            {/* Singapore Trust Microcopy */}
            <p className="text-[12px] text-slate-500 font-medium flex items-center gap-1.5 pt-0.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              Built around Singapore HR &amp; payroll workflows. No credit card required.
            </p>

            {/* Credibility indicators */}
            <div className="flex flex-wrap gap-x-6 gap-y-2.5">
              {['Singapore Payroll', 'CPF Automation', 'Cloud HRMS', 'Employee Self Service'].map(item => (
                <span key={item} className="flex items-center gap-1.5 text-xs font-semibold text-slate-600">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>

            {/* Demo data disclosure */}
            <p className="text-[11px] text-slate-400 font-medium">
              All dashboard data shown is demonstration data only.
            </p>
          </div>

          {/* RIGHT — Large Product UI Composition */}
          <div className="lg:w-[58%] xl:w-[62%] relative flex items-end lg:items-end self-end lg:self-auto">

            {/* Main product window — extends beyond section */}
            <div className="relative w-full">

              {/* Browser chrome */}
              <div className="relative w-full rounded-t-2xl overflow-hidden shadow-product-ui"
                style={{ transform: 'perspective(1400px) rotateX(3deg) rotateY(-2deg)', transformOrigin: 'center bottom' }}>

                {/* Chrome bar */}
                <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="flex items-center gap-2 px-4 py-1.5 bg-white rounded-lg border border-slate-200 text-xs text-slate-500 font-medium">
                      <img
                        src={getLogoPath('icon')}
                        onError={(e) => handleImageError(e, 'Logos/logo-icon.png')}
                        alt="ezyHR"
                        className="h-4 w-auto"
                      />
                      app.ezy.sg/dashboard
                    </div>
                  </div>
                  <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded font-bold">DEMO DATA</span>
                </div>

                {/* Dashboard content */}
                <div className="bg-white">

                  {/* Tabs */}
                  <div className="border-b border-slate-100 px-4 flex gap-1 pt-2">
                    {tabs.map(tab => {
                      const Icon = tab.icon;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold rounded-t-lg transition-colors ${
                            activeTab === tab.id
                              ? 'bg-white border border-b-white border-slate-200 -mb-px text-sky-700'
                              : 'text-slate-500 hover:text-slate-700'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                          {tab.label}
                        </button>
                      );
                    })}
                  </div>

                  {/* Dashboard body */}
                  <div className="p-5 bg-slate-50 min-h-[340px]">

                    {activeTab === 'overview' && (
                      <div className="space-y-4">
                        {/* KPI row */}
                        <div className="grid grid-cols-4 gap-3">
                          {[
                            { label: 'Total Employees', value: '247', change: '+3', icon: Users, color: 'text-sky-600', bg: 'bg-sky-50' },
                            { label: 'On Leave Today', value: '12', change: '-2', icon: Calendar, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                            { label: 'Monthly Payroll', value: '$847K', change: '', icon: DollarSign, color: 'text-amber-600', bg: 'bg-amber-50' },
                            { label: 'Attendance Rate', value: '96.8%', change: '+0.4%', icon: TrendingUp, color: 'text-teal-600', bg: 'bg-teal-50' },
                          ].map((stat, i) => (
                            <div key={i} className={`${stat.bg} rounded-xl p-3.5 border border-white shadow-sm`}>
                              <div className="flex items-center justify-between mb-2">
                                <stat.icon className={`w-4 h-4 ${stat.color}`} />
                                {stat.change && (
                                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded-full">
                                    {stat.change}
                                  </span>
                                )}
                              </div>
                              <div className={`text-xl font-black ${stat.color}`}>{stat.value}</div>
                              <div className="text-[10px] text-slate-500 font-medium mt-0.5">{stat.label}</div>
                            </div>
                          ))}
                        </div>

                        {/* Recent activity table */}
                        <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                          <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-700">Recent Payroll Activity</span>
                            <span className="text-[10px] text-sky-600 font-semibold cursor-pointer">View all →</span>
                          </div>
                          <div className="divide-y divide-slate-50">
                            {DEMO_PAYROLL_EMPLOYEES.slice(0, 3).map((emp, i) => (
                              <div key={i} className="px-4 py-3 flex items-center gap-3">
                                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-sky-400 to-teal-500 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
                                  {emp.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-xs font-semibold text-slate-800 truncate">{emp.name}</div>
                                  <div className="text-[10px] text-slate-500">{emp.role}</div>
                                </div>
                                <div className="text-right flex-shrink-0">
                                  <div className="text-xs font-bold text-slate-800">${emp.netPay.toLocaleString()}</div>
                                  <div className="text-[10px] text-emerald-600">Net Pay</div>
                                </div>
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Mini chart placeholder */}
                        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-bold text-slate-700">Headcount Trend</span>
                            <span className="text-[10px] text-slate-400">Last 6 months</span>
                          </div>
                          <div className="flex items-end gap-1.5 h-16">
                            {[60, 72, 68, 82, 88, 100].map((h, i) => (
                              <div key={i} className="flex-1 rounded-t-sm" style={{
                                height: `${h}%`,
                                background: i === 5
                                  ? 'linear-gradient(180deg, #0EA5E9, #0D9488)'
                                  : '#E0F2FE'
                              }} />
                            ))}
                          </div>
                          <div className="flex justify-between mt-1.5">
                            {['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map(m => (
                              <span key={m} className="text-[9px] text-slate-400">{m}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'payroll' && (
                      <div className="space-y-3">
                        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200 p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <div className="text-xs font-black text-amber-800 uppercase tracking-wider">July 2026 Payroll Run</div>
                              <div className="text-2xl font-black text-slate-900 mt-1">$847,240</div>
                              <div className="text-xs text-slate-500">Total payroll disbursement</div>
                            </div>
                            <div className="px-3 py-1.5 bg-emerald-100 border border-emerald-200 rounded-full text-xs font-bold text-emerald-700 flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              Approved
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            {[
                              { label: 'Employee CPF', value: '$169,440' },
                              { label: 'Employer CPF', value: '$144,024' },
                              { label: 'SDL', value: '$2,118' },
                            ].map((item, i) => (
                              <div key={i} className="bg-white/70 rounded-lg p-2.5">
                                <div className="text-[10px] text-slate-500">{item.label}</div>
                                <div className="text-sm font-bold text-slate-800">{item.value}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                          <div className="px-4 py-3 border-b border-slate-100">
                            <span className="text-xs font-bold text-slate-700">Employee Payroll Summary</span>
                          </div>
                          {DEMO_PAYROLL_EMPLOYEES.slice(0, 4).map((emp, i) => (
                            <div key={i} className="px-4 py-3 flex items-center gap-3 border-b border-slate-50 last:border-0">
                              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-[10px] font-bold">
                                {emp.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-xs font-semibold text-slate-800 truncate">{emp.name}</div>
                                <div className="text-[10px] text-slate-500">{emp.residency} · CPF ${emp.employeeCpf.toLocaleString()}</div>
                              </div>
                              <div className="text-xs font-bold text-amber-700">${emp.grossPay.toLocaleString()}</div>
                              <div className="text-xs font-black text-slate-900">${emp.netPay.toLocaleString()}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === 'attendance' && (
                      <div className="space-y-3">
                        <div className="bg-gradient-to-r from-sky-50 to-cyan-50 rounded-xl border border-sky-200 p-4">
                          <div className="text-xs font-black text-sky-800 uppercase tracking-wider mb-3">Live Attendance — Today</div>
                          <div className="grid grid-cols-3 gap-3">
                            {[
                              { label: 'Clocked In', value: '203', color: 'text-emerald-600', bg: 'bg-emerald-100' },
                              { label: 'On Leave', value: '12', color: 'text-amber-600', bg: 'bg-amber-100' },
                              { label: 'Not In', value: '32', color: 'text-red-500', bg: 'bg-red-100' },
                            ].map((s, i) => (
                              <div key={i} className={`${s.bg} rounded-xl p-3 text-center`}>
                                <div className={`text-2xl font-black ${s.color}`}>{s.value}</div>
                                <div className="text-[10px] text-slate-600 font-medium">{s.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                          <div className="px-4 py-3 border-b border-slate-100">
                            <span className="text-xs font-bold text-slate-700">Recent Clock-ins</span>
                          </div>
                          {[
                            { name: 'Tan Wei Ming', time: '08:32 AM', type: 'Office', gps: 'Verified' },
                            { name: 'Nurul Huda', time: '08:45 AM', type: 'Remote', gps: 'Verified' },
                            { name: 'Kavitha Ramasamy', time: '09:02 AM', type: 'Office', gps: 'Verified' },
                            { name: 'Rajesh Kumar', time: '09:15 AM', type: 'Remote', gps: 'Pending' },
                          ].map((emp, i) => (
                            <div key={i} className="px-4 py-3 flex items-center gap-3 border-b border-slate-50 last:border-0">
                              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center text-white text-[10px] font-bold">
                                {emp.name.split(' ').map(n => n[0]).join('').slice(0,2)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-xs font-semibold text-slate-800">{emp.name}</div>
                                <div className="text-[10px] text-slate-500">{emp.type} · {emp.time}</div>
                              </div>
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${emp.gps === 'Verified' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                                {emp.gps}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom gradient fade — product extends into next section */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/60 to-transparent z-10" />
            </div>

            {/* Floating notification cards (R5 5-card contextual suite) */}
            <div className="absolute top-12 -left-6 z-20 animate-float-slow hidden xl:block">
              <div className="glass-panel-light rounded-2xl px-4 py-3 shadow-editorial border border-emerald-200/90 flex items-center gap-3 min-w-[210px] backdrop-blur-md">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">Payroll Batch Approved</div>
                  <div className="text-[10px] text-emerald-700 font-bold">Jul 2026 · 247 employees</div>
                  <span className="text-[9px] font-mono text-slate-400 block mt-0.5 font-semibold">DEMO DATA</span>
                </div>
              </div>
            </div>

            <div className="absolute top-44 -right-4 lg:-right-8 z-20 animate-float hidden xl:block" style={{ animationDelay: '1.5s' }}>
              <div className="glass-panel-light rounded-2xl px-4 py-3 shadow-editorial border border-sky-200/90 flex items-center gap-3 min-w-[200px] backdrop-blur-md">
                <div className="w-8 h-8 rounded-xl bg-sky-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-sky-600" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">Attendance Recorded</div>
                  <div className="text-[10px] text-sky-700 font-bold">203 Clocked In · 96.8%</div>
                  <span className="text-[9px] font-mono text-slate-400 block mt-0.5 font-semibold">DEMO DATA</span>
                </div>
              </div>
            </div>

            <div className="absolute top-[48%] -left-8 z-20 animate-float-slow hidden xl:block" style={{ animationDelay: '2.5s' }}>
              <div className="glass-panel-light rounded-2xl px-4 py-3 shadow-editorial border border-amber-200/90 flex items-center gap-3 min-w-[200px] backdrop-blur-md">
                <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">CPF Calculated</div>
                  <div className="text-[10px] text-amber-700 font-bold">2026 OW Ceiling ($8k)</div>
                  <span className="text-[9px] font-mono text-slate-400 block mt-0.5 font-semibold">DEMO DATA</span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-24 -right-6 z-20 animate-float hidden xl:block" style={{ animationDelay: '3.5s' }}>
              <div className="glass-panel-light rounded-2xl px-4 py-3 shadow-editorial border border-teal-200/90 flex items-center gap-3 min-w-[190px] backdrop-blur-md">
                <div className="w-8 h-8 rounded-xl bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-4 h-4 text-teal-600" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">Leave Approved</div>
                  <div className="text-[10px] text-teal-700 font-bold">TW · Annual Leave</div>
                  <span className="text-[9px] font-mono text-slate-400 block mt-0.5 font-semibold">DEMO DATA</span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 -left-4 z-20 animate-float-slow hidden xl:block" style={{ animationDelay: '4.2s' }}>
              <div className="glass-panel-light rounded-2xl px-4 py-3 shadow-editorial border border-violet-200/90 flex items-center gap-3 min-w-[200px] backdrop-blur-md">
                <div className="w-8 h-8 rounded-xl bg-violet-100 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-violet-600" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">AI Insight</div>
                  <div className="text-[10px] text-violet-700 font-bold">0 Payroll Anomalies</div>
                  <span className="text-[9px] font-mono text-slate-400 block mt-0.5 font-semibold">DEMO DATA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
