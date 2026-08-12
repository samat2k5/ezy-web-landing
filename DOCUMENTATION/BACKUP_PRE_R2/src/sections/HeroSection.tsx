import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle, Play, Users, DollarSign, Calendar, Clock, Sparkles, TrendingUp, Bell } from 'lucide-react';
import { DEMO_DASHBOARD_STATS, DEMO_PAYROLL_EMPLOYEES } from '../data/demoData';

interface HeroSectionProps {
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemo, onOpenTrial }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'payroll' | 'attendance'>('overview');

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-slate-900 text-white overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement Tagline */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-xs text-slate-300 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-emerald-400">ezyHR SaaS Platform</span>
            <span className="text-slate-500">•</span>
            <span>Cloud HRMS & Singapore Payroll</span>
          </div>
        </div>

        {/* Hero Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            HR & Payroll, <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400">Simplified for Singapore.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            One intelligent platform to manage your people, payroll, attendance, leave, claims and compliance. ezyHR brings everyday HR operations into one secure cloud platform — helping Singapore businesses spend less time on admin and more time growing.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold rounded-xl text-base shadow-xl shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5"
            >
              Book a Free Demo <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenTrial}
              className="w-full sm:w-auto px-7 py-4 bg-slate-800/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold rounded-xl text-base border border-slate-700/80 transition-all flex items-center justify-center gap-2"
            >
              Start Free Trial
            </button>
          </div>

          {/* Feature Badges below CTAs */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" /> Singapore Payroll (CPF/IR8A)
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" /> Cloud HRMS
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" /> AI-Powered HR Insights
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" /> Mobile Ready
            </span>
          </div>
        </div>

        {/* Hero Product UI Mockup */}
        <div className="mt-12 lg:mt-16 max-w-5xl mx-auto">
          <div className="relative rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden group">
            
            {/* Top Mockup Browser Header Bar */}
            <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline-block">
                  app.ezy.sg/dashboard
                </span>
              </div>

              {/* Demo Data Tag */}
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold tracking-wider">
                  DEMO DATA
                </span>
                <span className="text-xs text-slate-400 hidden sm:inline-block">
                  Singapore Subsidiary • Realtek Engineering
                </span>
              </div>
            </div>

            {/* Dashboard Inner Container */}
            <div className="p-4 sm:p-6 bg-slate-900 space-y-6">
              
              {/* Dashboard Sub-Header & Tabs */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    Executive HR Dashboard 
                    <span className="text-xs font-normal text-slate-400 bg-slate-800 px-2 py-0.5 rounded-full">
                      August 2026
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400">Real-time workforce summary & Singapore statutory payroll status</p>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center space-x-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                      activeTab === 'overview' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Workforce Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('payroll')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                      activeTab === 'payroll' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Payroll Status
                  </button>
                  <button
                    onClick={() => setActiveTab('attendance')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                      activeTab === 'attendance' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Attendance & Leave
                  </button>
                </div>
              </div>

              {/* Tab 1: Overview Grid */}
              {activeTab === 'overview' && (
                <div className="space-y-6 animate-fadeIn">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                      <div className="flex items-center justify-between text-slate-400 mb-2">
                        <span className="text-xs font-medium">Active Headcount</span>
                        <Users className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="text-2xl font-bold text-white">{DEMO_DASHBOARD_STATS.activeEmployees}</div>
                      <span className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1">
                        <TrendingUp className="w-3 h-3" /> +4 this month
                      </span>
                    </div>

                    <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                      <div className="flex items-center justify-between text-slate-400 mb-2">
                        <span className="text-xs font-medium">Monthly Gross Payroll</span>
                        <DollarSign className="w-4 h-4 text-blue-400" />
                      </div>
                      <div className="text-2xl font-bold text-white">{DEMO_DASHBOARD_STATS.grossPayrollTotal}</div>
                      <span className="text-[11px] text-slate-400 mt-1 block">CPF & SDL Included</span>
                    </div>

                    <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                      <div className="flex items-center justify-between text-slate-400 mb-2">
                        <span className="text-xs font-medium">Today's Attendance</span>
                        <Clock className="w-4 h-4 text-amber-400" />
                      </div>
                      <div className="text-2xl font-bold text-white">{DEMO_DASHBOARD_STATS.attendanceToday}</div>
                      <span className="text-[11px] text-emerald-400 mt-1 block">46 Checked In</span>
                    </div>

                    <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                      <div className="flex items-center justify-between text-slate-400 mb-2">
                        <span className="text-xs font-medium">Pending Approvals</span>
                        <Bell className="w-4 h-4 text-purple-400" />
                      </div>
                      <div className="text-2xl font-bold text-white">{DEMO_DASHBOARD_STATS.pendingLeaveRequests}</div>
                      <span className="text-[11px] text-amber-400 mt-1 block">2 Leave, 1 Expense</span>
                    </div>
                  </div>

                  {/* Sample Recent Activity Table */}
                  <div className="bg-slate-950/80 rounded-xl border border-slate-800 p-4 overflow-x-auto">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Recent Statutory Payroll Operations
                      </h4>
                      <span className="text-xs text-emerald-400 font-semibold">IRAS AIS Ready</span>
                    </div>
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="text-slate-500 border-b border-slate-800 pb-2">
                          <th className="py-2">Employee</th>
                          <th className="py-2">Department</th>
                          <th className="py-2">Gross Pay</th>
                          <th className="py-2">CPF (Emp/Empr)</th>
                          <th className="py-2 text-right">Net Payable</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 text-slate-300">
                        {DEMO_PAYROLL_EMPLOYEES.slice(0, 3).map((emp) => (
                          <tr key={emp.id}>
                            <td className="py-2.5 font-medium text-white">{emp.name}</td>
                            <td className="py-2.5 text-slate-400">{emp.department}</td>
                            <td className="py-2.5 font-mono">${emp.grossPay.toFixed(2)}</td>
                            <td className="py-2.5 font-mono text-slate-400">${emp.employeeCpf} / ${emp.employerCpf}</td>
                            <td className="py-2.5 font-mono text-emerald-400 font-semibold text-right">${emp.netPay.toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Tab 2: Payroll Tab */}
              {activeTab === 'payroll' && (
                <div className="bg-slate-950/80 p-5 rounded-xl border border-slate-800 space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white">Singapore Payroll Batch #AUG-2026</h4>
                      <p className="text-xs text-slate-400">Includes CPF submission file, GIRO export, and IR8A tax tracking</p>
                    </div>
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-lg text-xs font-semibold">
                      Calculated & Approved
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                      <span className="text-slate-400 block">Total Net Disbursement:</span>
                      <span className="text-lg font-bold text-emerald-400 font-mono">{DEMO_DASHBOARD_STATS.netPayrollTotal}</span>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                      <span className="text-slate-400 block">Total CPF Payable:</span>
                      <span className="text-lg font-bold text-blue-400 font-mono">{DEMO_DASHBOARD_STATS.totalCpfContribution}</span>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                      <span className="text-slate-400 block">Payslips Status:</span>
                      <span className="text-lg font-bold text-white font-mono">48 Issued (Mobile ESS)</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Attendance */}
              {activeTab === 'attendance' && (
                <div className="bg-slate-950/80 p-5 rounded-xl border border-slate-800 space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white">Live Attendance Radar</h4>
                      <p className="text-xs text-slate-400">Mobile GPS & Web portal check-in logs</p>
                    </div>
                    <span className="text-xs text-emerald-400 font-mono">Real-time sync</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                      <span className="text-xl font-extrabold text-emerald-400">46</span>
                      <span className="block text-[11px] text-slate-400 mt-1">Clocked In</span>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                      <span className="text-xl font-extrabold text-blue-400">2</span>
                      <span className="block text-[11px] text-slate-400 mt-1">On Approved Leave</span>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                      <span className="text-xl font-extrabold text-amber-400">0</span>
                      <span className="block text-[11px] text-slate-400 mt-1">Unexcused Absence</span>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                      <span className="text-xl font-extrabold text-purple-400">1.5 hrs</span>
                      <span className="block text-[11px] text-slate-400 mt-1">Avg Overtime</span>
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
