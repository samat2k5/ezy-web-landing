import React from 'react';
import { Sparkles, MessageSquare, AlertTriangle, FileSearch, TrendingUp, Bell, Bot } from 'lucide-react';

export const AiSection: React.FC = () => {
  const aiCapabilities = [
    {
      title: 'Policy Q&A Assistant',
      desc: 'Ask questions about company HR policies, statutory leave rules, and employee benefits in natural language.',
      icon: MessageSquare,
      status: 'AVAILABLE'
    },
    {
      title: 'Payroll Anomaly Detection',
      desc: 'Smart algorithms flag unusual salary deviations, missing overtime logs, or statutory cap overrides before finalizing payroll.',
      icon: AlertTriangle,
      status: 'AVAILABLE'
    },
    {
      title: 'Attendance Pattern Insights',
      desc: 'Identify recurring tardiness trends, shift bottlenecks, and overtime distribution across departments.',
      icon: TrendingUp,
      status: 'AVAILABLE'
    },
    {
      title: 'Smart Document Expiry Search',
      desc: 'Instant search across employee contracts and work passes with proactive renewal suggestions.',
      icon: FileSearch,
      status: 'AVAILABLE'
    },
    {
      title: 'Automated HR Summary Generator',
      desc: 'Generate executive monthly workforce and attrition summaries ready for board presentation.',
      icon: Sparkles,
      status: 'COMING SOON'
    },
    {
      title: 'Predictive Workforce Analytics',
      desc: 'Predict seasonal hiring needs and leave coverage requirements with machine learning models.',
      icon: Bell,
      status: 'COMING SOON'
    }
  ];

  return (
    <section id="ai" className="py-24 bg-gradient-to-br from-violet-50/80 via-purple-50/30 to-indigo-50/60 text-slate-900 relative border-b border-violet-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-100 border border-violet-200 text-violet-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-violet-700" /> Next-Generation HR AI
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Your HR assistant, <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-700 via-purple-600 to-blue-600">
              always ready.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            ezyHR integrates intelligent AI automation to assist HR teams with policy Q&A, payroll anomaly detection, and proactive compliance alerts.
          </p>
        </div>

        {/* Conversational AI Interface Showcase */}
        <div className="max-w-3xl mx-auto bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl p-6 sm:p-8 mb-16 space-y-4 text-white">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-violet-500/20 text-violet-400 flex items-center justify-center font-bold">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">ezyHR AI Assistant Workspace</h3>
                <span className="text-[11px] text-slate-400">Policy & Payroll Anomaly Detection</span>
              </div>
            </div>
            <span className="px-3 py-0.5 rounded bg-violet-500/20 text-violet-300 text-[10px] font-extrabold tracking-wider border border-violet-500/30">
              DEMONSTRATION DATA
            </span>
          </div>

          {/* Chat Messages Mockup */}
          <div className="space-y-3.5 py-2 text-xs">
            {/* User Prompt */}
            <div className="flex items-start justify-end gap-2">
              <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white p-3.5 rounded-2xl rounded-tr-none max-w-md font-medium text-xs sm:text-sm">
                "Which employees have unusual payroll changes this month?"
              </div>
            </div>

            {/* AI Response */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center flex-shrink-0 font-bold text-xs">
                AI
              </div>
              <div className="bg-slate-900 text-slate-200 p-4 rounded-2xl rounded-tl-none border border-slate-800 max-w-lg space-y-2 text-xs sm:text-sm">
                <span className="font-bold text-violet-300 block">3 employees require review before finalizing August 2026 payroll:</span>
                <ul className="space-y-1.5 text-slate-300">
                  <li>• <strong>Tan Wei Ming:</strong> Overtime claim increased by 14 hours compared to July baseline.</li>
                  <li>• <strong>Nurul Huda:</strong> Unpaid medical leave deduction applied (1 day).</li>
                  <li>• <strong>Kavitha R.:</strong> Salary reached 2026 monthly CPF ceiling cap ($8,000).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiCapabilities.map((ai, idx) => {
            const Icon = ai.icon;
            return (
              <div 
                key={idx}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-violet-100 hover:border-violet-300 transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-violet-100 text-violet-700 flex items-center justify-center border border-violet-200 font-bold">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border ${
                      ai.status === 'AVAILABLE'
                        ? 'bg-violet-100 text-violet-800 border-violet-200'
                        : 'bg-amber-100 text-amber-800 border-amber-200'
                    }`}>
                      {ai.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">{ai.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{ai.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
