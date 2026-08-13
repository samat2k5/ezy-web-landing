import React, { useState } from 'react';
import { DEMO_DASHBOARD_STATS } from '../data/demoData';

export const ManagementIntelligenceSection: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState<'headcount' | 'payroll' | 'turnover'>('headcount');

  return (
    <section className="py-24 bg-white text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-800 text-xs font-bold uppercase tracking-wider">
            Executive Intelligence
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
            From HR data <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-600 to-blue-700">
              to better decisions.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Gain complete visibility into headcount distribution, statutory payroll expenditure, attendance compliance, and workforce retention metrics.
          </p>
        </div>

        {/* Analytics Workspace Container */}
        <div className="bg-white p-7 sm:p-10 rounded-3xl border border-indigo-100 shadow-xl space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <div className="flex items-center gap-2.5">
                <h3 className="text-xl font-bold text-slate-950">Management Intelligence Center</h3>
                <span className="px-3 py-0.5 rounded bg-indigo-100 text-indigo-800 text-[10px] font-extrabold border border-indigo-200">
                  DEMO DATA
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">Singapore Subsidiary • Group Consolidated View</p>
            </div>

            <div className="flex bg-slate-50 p-1.5 rounded-2xl border border-slate-200 text-xs shadow-xs">
              <button
                onClick={() => setSelectedMetric('headcount')}
                className={`px-3.5 py-2 rounded-xl font-semibold transition-all ${
                  selectedMetric === 'headcount' ? 'bg-slate-950 text-white font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Department Headcount
              </button>
              <button
                onClick={() => setSelectedMetric('payroll')}
                className={`px-3.5 py-2 rounded-xl font-semibold transition-all ${
                  selectedMetric === 'payroll' ? 'bg-slate-950 text-white font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Payroll Breakdown
              </button>
              <button
                onClick={() => setSelectedMetric('turnover')}
                className={`px-3.5 py-2 rounded-xl font-semibold transition-all ${
                  selectedMetric === 'turnover' ? 'bg-slate-950 text-white font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Retention & Stability
              </button>
            </div>
          </div>

          {/* Metric Display */}
          {selectedMetric === 'headcount' && (
            <div className="space-y-4 animate-fadeIn">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Headcount Distribution by Department (Total: 48 Staff)
              </h4>
              <div className="space-y-3.5">
                {[
                  { dept: 'Software Engineering', count: 18, pct: '37.5%', color: 'bg-indigo-600' },
                  { dept: 'Sales & Business Development', count: 12, pct: '25.0%', color: 'bg-blue-600' },
                  { dept: 'Customer Success & Support', count: 8, pct: '16.7%', color: 'bg-teal-600' },
                  { dept: 'Finance & Administration', count: 6, pct: '12.5%', color: 'bg-purple-600' },
                  { dept: 'Human Resources', count: 4, pct: '8.3%', color: 'bg-amber-500' }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1 text-xs sm:text-sm">
                    <div className="flex justify-between text-slate-700 font-medium">
                      <span>{item.dept}</span>
                      <span className="font-mono font-bold text-slate-950">{item.count} staff ({item.pct})</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color}`} style={{ width: item.pct }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedMetric === 'payroll' && (
            <div className="space-y-4 animate-fadeIn">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Aug 2026 Payroll Outlay Distribution ($248,500 Gross Total)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                  <span className="text-xs text-slate-500 block font-medium">Basic Salaries:</span>
                  <span className="text-2xl font-extrabold font-mono text-slate-950 mt-1 block">$198,800.00</span>
                  <span className="text-[11px] text-slate-500 block mt-1">80.0% of total outlay</span>
                </div>
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                  <span className="text-xs text-slate-500 block font-medium">Employer CPF (17%):</span>
                  <span className="text-2xl font-extrabold font-mono text-blue-700 mt-1 block">$33,796.00</span>
                  <span className="text-[11px] text-slate-500 block mt-1">13.6% of total outlay</span>
                </div>
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                  <span className="text-xs text-slate-500 block font-medium">Overtime & Allowances:</span>
                  <span className="text-2xl font-extrabold font-mono text-emerald-700 mt-1 block">$15,904.00</span>
                  <span className="text-[11px] text-slate-500 block mt-1">6.4% of total outlay</span>
                </div>
              </div>
            </div>
          )}

          {selectedMetric === 'turnover' && (
            <div className="space-y-4 animate-fadeIn">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Workforce Stability Metrics (YTD 2026)
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                  <span className="text-3xl font-black text-emerald-600">96.2%</span>
                  <span className="block text-xs text-slate-600 font-medium mt-1">Retention Rate</span>
                </div>
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                  <span className="text-3xl font-black text-blue-600">3.8%</span>
                  <span className="block text-xs text-slate-600 font-medium mt-1">Annual Attrition</span>
                </div>
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                  <span className="text-3xl font-black text-purple-600">4.2 yrs</span>
                  <span className="block text-xs text-slate-600 font-medium mt-1">Avg Tenure</span>
                </div>
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                  <span className="text-3xl font-black text-amber-600">100%</span>
                  <span className="block text-xs text-slate-600 font-medium mt-1">Exit Interview Rate</span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
