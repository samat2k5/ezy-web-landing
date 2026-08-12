import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Users, DollarSign, Clock, Calendar, Sparkles, TrendingUp, Bell, Bot, ShieldCheck, ChevronRight, CheckCircle2 } from 'lucide-react';
import { DEMO_DASHBOARD_STATS, DEMO_PAYROLL_EMPLOYEES } from '../data/demoData';
import { getLogoPath, handleImageError } from '../utils/logoHelper';

interface HeroSectionProps {
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemo, onOpenTrial }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'payroll' | 'attendance'>('overview');

  return (
    <section className="relative pt-32 pb-28 lg:pt-44 lg:pb-40 bg-ambient-ice text-slate-900 overflow-hidden border-b border-slate-200/80">
      
      {/* Soft Multi-colour Radial Light Fields */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-gradient-to-tr from-blue-200/40 via-cyan-200/30 to-emerald-200/40 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[650px] h-[500px] bg-purple-200/30 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tagline Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/95 border border-slate-200 text-xs text-slate-700 backdrop-blur-md shadow-sm">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-extrabold text-emerald-700 uppercase tracking-wider text-[11px]">ezyHR SaaS Platform</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-700 font-semibold">Built for Singapore Employment Requirements</span>
          </div>
        </div>

        {/* Hero Editorial Headline & Narrative Copy */}
        <div className="text-center max-w-5xl mx-auto space-y-7">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-slate-950 leading-[1.05]">
            HR & Payroll, <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-700">
              Simplified for Singapore.
            </span>
          </h1>
          
          <p className="text-lg sm:text-2xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto">
            Manage employees, attendance, leave, claims and payroll in one intelligent cloud platform.
          </p>

          {/* Primary & Secondary Conversion CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-9 py-4.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-slate-950 font-black rounded-2xl text-base shadow-xl shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 ring-1 ring-emerald-400/40"
            >
              <span>Book a Free Demo</span>
              <ArrowRight className="w-5 h-5 text-slate-950" />
            </button>

            <button
              onClick={onOpenTrial}
              className="w-full sm:w-auto px-9 py-4.5 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-2xl text-base border border-slate-200 shadow-sm transition-all flex items-center justify-center gap-2"
            >
              Start Free Trial
            </button>
          </div>

          {/* Credibility Indicators */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs sm:text-sm font-bold text-slate-700">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" /> Singapore Payroll
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" /> CPF Automation
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" /> Cloud HRMS
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" /> Employee Self Service
            </span>
          </div>
        </div>

        {/* Oversized Light SaaS Product Hero Dashboard (70% Visual Area with Crisp Light Theme) */}
        <div className="mt-16 lg:mt-24 max-w-6xl mx-auto relative">
          
          {/* Overlapping Floating Status Badge 1: Top Right */}
          <div className="hidden sm:flex absolute -top-6 -right-6 z-20 items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-emerald-500/40 text-xs font-extrabold text-emerald-800 shadow-2xl backdrop-blur-md animate-float">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>Payroll Batch Approved</span>
          </div>

          {/* Overlapping Floating Status Badge 2: Left Middle */}
          <div className="hidden sm:flex absolute top-1/2 -left-8 z-20 items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-cyan-500/40 text-xs font-extrabold text-cyan-800 shadow-2xl backdrop-blur-md animate-float" style={{ animationDelay: '1.5s' }}>
            <Clock className="w-5 h-5 text-cyan-600" />
            <span>Attendance Recorded</span>
          </div>

          {/* Overlapping Floating Status Badge 3: Bottom Right */}
          <div className="hidden sm:flex absolute -bottom-6 right-8 z-20 items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-purple-500/40 text-xs font-extrabold text-purple-800 shadow-2xl backdrop-blur-md animate-float" style={{ animationDelay: '2.5s' }}>
            <Sparkles className="w-5 h-5 text-purple-600" />
            <span>AI Anomaly Checked</span>
          </div>

          <div className="relative rounded-3xl bg-white border border-slate-200/90 shadow-2xl overflow-hidden group">
            
            {/* Browser Frame Bar */}
            <div className="bg-slate-100/90 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
                
                {/* Official Logo Brand Indicator */}
                <div className="ml-4 pl-4 border-l border-slate-300 flex items-center gap-2.5">
                  <img 
                    src={getLogoPath('icon')} 
                    onError={(e) => handleImageError(e, 'Logos/logo-icon.png')}
                    alt="ezyHR Icon" 
                    className="h-5 w-auto" 
                  />
                  <span className="text-xs font-mono text-slate-600 font-medium hidden sm:inline-block">
                    https://app.ezy.sg/dashboard
                  </span>
                </div>
              </div>

              {/* DEMO DATA Label */}
              <div className="flex items-center gap-3">
                <span className="px-3 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-extrabold tracking-wider border border-emerald-200">
                  DEMO DATA
                </span>
                <span className="text-xs text-slate-600 hidden sm:inline-block font-bold">
                  Acme Singapore Pte Ltd
                </span>
              </div>
            </div>

            {/* Dashboard Workspace */}
            <div className="p-6 sm:p-10 bg-white space-y-6 text-slate-900">
              
              {/* Header & Tab Selector */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 flex items-center gap-3">
                    Executive HR & Statutory Payroll Workspace
                    <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                      August 2026 Batch
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">Unified Workforce, Statutory Payroll & Live Attendance Radar</p>
                </div>

                {/* Tab Controls */}
                <div className="flex items-center space-x-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`px-4.5 py-2.5 text-xs font-bold rounded-xl transition-all ${
                      activeTab === 'overview' ? 'bg-slate-950 text-white shadow-sm' : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    Workforce Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('payroll')}
                    className={`px-4.5 py-2.5 text-xs font-bold rounded-xl transition-all ${
                      activeTab === 'payroll' ? 'bg-slate-950 text-white shadow-sm' : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    Payroll Status
                  </button>
                  <button
                    onClick={() => setActiveTab('attendance')}
                    className={`px-4.5 py-2.5 text-xs font-bold rounded-xl transition-all ${
                      activeTab === 'attendance' ? 'bg-slate-950 text-white shadow-sm' : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    Attendance Radar
                  </button>
                </div>
              </div>

              {/* Tab 1: Overview Grid */}
              {activeTab === 'overview' && (
                <div className="space-y-6 animate-fadeIn">
                  {/* Top 4 Primary Metrics */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                      <div className="flex items-center justify-between text-slate-500 mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Active Headcount</span>
                        <Users className="w-4 h-4 text-indigo-600" />
                      </div>
                      <div className="text-2xl font-black text-slate-950">{DEMO_DASHBOARD_STATS.activeEmployees} Staff</div>
                      <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1 mt-1">
                        <TrendingUp className="w-3.5 h-3.5" /> +4 this month
                      </span>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                      <div className="flex items-center justify-between text-slate-500 mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Gross Payroll Outlay</span>
                        <DollarSign className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="text-2xl font-black text-slate-950">{DEMO_DASHBOARD_STATS.grossPayrollTotal}</div>
                      <span className="text-[11px] text-slate-500 mt-1 block font-medium">CPF & SDL Included</span>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                      <div className="flex items-center justify-between text-slate-500 mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Today's Attendance</span>
                        <Clock className="w-4 h-4 text-cyan-600" />
                      </div>
                      <div className="text-2xl font-black text-slate-950">{DEMO_DASHBOARD_STATS.attendanceToday}</div>
                      <span className="text-[11px] text-emerald-600 font-bold mt-1 block">46 Checked In</span>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                      <div className="flex items-center justify-between text-slate-500 mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">AI Assistant Status</span>
                        <Bot className="w-4 h-4 text-purple-600" />
                      </div>
                      <div className="text-lg font-bold text-purple-700 mt-1">3 Anomaly Alerts</div>
                      <span className="text-[11px] text-slate-500 mt-1 block font-medium">Payroll review required</span>
                    </div>
                  </div>

                  {/* Representative Data Table */}
                  <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 overflow-x-auto">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        August 2026 Statutory Payroll Summary
                      </h4>
                      <span className="text-xs text-emerald-800 font-bold bg-emerald-100 px-3 py-1 rounded-lg border border-emerald-200">
                        IRAS AIS Export Ready
                      </span>
                    </div>
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="text-slate-500 border-b border-slate-200 pb-2 font-bold">
                          <th className="py-2.5">Employee Name</th>
                          <th className="py-2.5">Department</th>
                          <th className="py-2.5">Gross Salary</th>
                          <th className="py-2.5">Employee / Employer CPF</th>
                          <th className="py-2.5 text-right">Net Payable</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
                        {DEMO_PAYROLL_EMPLOYEES.slice(0, 3).map((emp) => (
                          <tr key={emp.id}>
                            <td className="py-3 font-bold text-slate-950">{emp.name}</td>
                            <td className="py-3 text-slate-600">{emp.department}</td>
                            <td className="py-3 font-mono text-slate-900 font-semibold">${emp.grossPay.toFixed(2)}</td>
                            <td className="py-3 font-mono text-slate-600">${emp.employeeCpf} / ${emp.employerCpf}</td>
                            <td className="py-3 font-mono text-emerald-700 font-black text-right">${emp.netPay.toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Tab 2: Payroll */}
              {activeTab === 'payroll' && (
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-950">Singapore Statutory Payroll Batch #AUG-2026</h4>
                      <p className="text-xs text-slate-500 mt-0.5 font-medium">Includes CPF file, bank GIRO export, and IR8A tax tracking</p>
                    </div>
                    <span className="px-3.5 py-1.5 bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-xl text-xs font-bold">
                      Calculated & Approved
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
                    <div className="p-4 bg-white rounded-xl border border-slate-200">
                      <span className="text-slate-500 block text-xs font-semibold">Total Net Disbursement:</span>
                      <span className="text-xl font-black text-emerald-700 font-mono mt-1 block">{DEMO_DASHBOARD_STATS.netPayrollTotal}</span>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-slate-200">
                      <span className="text-slate-500 block text-xs font-semibold">Total CPF Payable:</span>
                      <span className="text-xl font-black text-blue-700 font-mono mt-1 block">{DEMO_DASHBOARD_STATS.totalCpfContribution}</span>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-slate-200">
                      <span className="text-slate-500 block text-xs font-semibold">Itemised Mobile Payslips:</span>
                      <span className="text-xl font-black text-slate-950 font-mono mt-1 block">48 Issued</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Attendance */}
              {activeTab === 'attendance' && (
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-950">Live Attendance Radar</h4>
                      <p className="text-xs text-slate-500 mt-0.5 font-medium">Mobile GPS & Web portal check-in logs</p>
                    </div>
                    <span className="text-xs text-emerald-700 font-mono font-bold">Real-time sync</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                    <div className="p-4 bg-white rounded-xl border border-slate-200">
                      <span className="text-2xl font-black text-emerald-700">46</span>
                      <span className="block text-xs text-slate-600 font-medium mt-1">Clocked In</span>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-slate-200">
                      <span className="text-2xl font-black text-blue-700">2</span>
                      <span className="block text-xs text-slate-600 font-medium mt-1">Approved Leave</span>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-slate-200">
                      <span className="text-2xl font-black text-amber-600">0</span>
                      <span className="block text-xs text-slate-600 font-medium mt-1">Late Arrivals</span>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-slate-200">
                      <span className="text-2xl font-black text-purple-700">1.5 hrs</span>
                      <span className="block text-xs text-slate-600 font-medium mt-1">Avg Overtime</span>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
