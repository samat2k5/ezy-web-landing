import React, { useState } from 'react';
import { BarChart3, TrendingUp, PieChart, ShieldCheck, Users, DollarSign, Calendar, AlertCircle } from 'lucide-react';
import { DEMO_DASHBOARD_STATS } from '../data/demoData';

export const ManagementIntelligenceSection: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState<'headcount' | 'payroll' | 'turnover'>('headcount');

  return (
    <section className="py-20 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            Executive Intelligence
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Data-driven insights for business leaders.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Gain complete visibility into headcount distribution, payroll expenditure, attendance compliance, and workforce retention metrics.
          </p>
        </div>

        {/* Analytics Container */}
        <div className="bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">Management Intelligence Center</h3>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold tracking-wider">
                  DEMO DATA
                </span>
              </div>
              <p className="text-xs text-slate-400">Singapore Subsidiary • Group Consolidated View</p>
            </div>

            <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
              <button
                onClick={() => setSelectedMetric('headcount')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  selectedMetric === 'headcount' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400'
                }`}
              >
                Department Headcount
              </button>
              <button
                onClick={() => setSelectedMetric('payroll')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  selectedMetric === 'payroll' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400'
                }`}
              >
                Payroll Breakdown
              </button>
              <button
                onClick={() => setSelectedMetric('turnover')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  selectedMetric === 'turnover' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400'
                }`}
              >
                Retention & Attrition
              </button>
            </div>
          </div>

          {/* Metric Visual Display */}
          {selectedMetric === 'headcount' && (
            <div className="space-y-4 animate-fadeIn">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Headcount Distribution by Department (Total: 48 Staff)
              </h4>
              <div className="space-y-3">
                {[
                  { dept: 'Software Engineering', count: 18, pct: '37.5%', color: 'bg-emerald-500' },
                  { dept: 'Sales & Business Development', count: 12, pct: '25.0%', color: 'bg-blue-500' },
                  { dept: 'Customer Success & Support', count: 8, pct: '16.7%', color: 'bg-teal-500' },
                  { dept: 'Finance & Administration', count: 6, pct: '12.5%', color: 'bg-purple-500' },
                  { dept: 'Human Resources', count: 4, pct: '8.3%', color: 'bg-amber-500' }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1 text-xs">
                    <div className="flex justify-between text-slate-300">
                      <span>{item.dept}</span>
                      <span className="font-mono font-bold text-white">{item.count} employees ({item.pct})</span>
                    </div>
                    <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color}`} style={{ width: item.pct }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedMetric === 'payroll' && (
            <div className="space-y-4 animate-fadeIn">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Aug 2026 Payroll Outlay Distribution ($248,500 Gross Total)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                  <span className="text-xs text-slate-400 block">Basic Salaries:</span>
                  <span className="text-xl font-bold font-mono text-white">$198,800.00</span>
                  <span className="text-[11px] text-slate-500 block mt-1">80.0% of total outlay</span>
                </div>
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                  <span className="text-xs text-slate-400 block">Employer CPF (17%):</span>
                  <span className="text-xl font-bold font-mono text-blue-400">$33,796.00</span>
                  <span className="text-[11px] text-slate-500 block mt-1">13.6% of total outlay</span>
                </div>
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                  <span className="text-xs text-slate-400 block">Overtime & Allowances:</span>
                  <span className="text-xl font-bold font-mono text-emerald-400">$15,904.00</span>
                  <span className="text-[11px] text-slate-500 block mt-1">6.4% of total outlay</span>
                </div>
              </div>
            </div>
          )}

          {selectedMetric === 'turnover' && (
            <div className="space-y-4 animate-fadeIn">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Workforce Stability Metrics (YTD 2026)
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                  <span className="text-2xl font-extrabold text-emerald-400">96.2%</span>
                  <span className="block text-xs text-slate-400 mt-1">Retention Rate</span>
                </div>
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                  <span className="text-2xl font-extrabold text-blue-400">3.8%</span>
                  <span className="block text-xs text-slate-400 mt-1">Annual Attrition</span>
                </div>
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                  <span className="text-2xl font-extrabold text-purple-400">4.2 yrs</span>
                  <span className="block text-xs text-slate-400 mt-1">Avg Tenure</span>
                </div>
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                  <span className="text-2xl font-extrabold text-amber-400">100%</span>
                  <span className="block text-xs text-slate-400 mt-1">Exit Interview Rate</span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
