import React, { useState } from 'react';
import { ShieldCheck, MessageSquare, AlertTriangle, FileSearch, TrendingUp, Bell, Bot, CheckCircle2 } from 'lucide-react';

export const AiSection: React.FC = () => {
  const samplePrompts = [
    {
      id: 'q1',
      question: 'Which employees have unusual payroll changes?',
      responseTitle: '3 employees require review before finalizing August 2026 payroll:',
      responseItems: [
        'Tan Wei Ming: Overtime claim increased by 14 hours compared to July baseline.',
        'Nurul Huda: Unpaid medical leave deduction applied (1 day).',
        'Kavitha R.: Salary reached 2026 monthly CPF ceiling cap ($8,000).'
      ]
    },
    {
      id: 'q2',
      question: 'Check CPF calculations',
      responseTitle: 'August 2026 CPF Calculation Audit Summary:',
      responseItems: [
        'Total Employee CPF (rounded down): $28,450.00',
        'Total Employer CPF (rounded to nearest dollar): $24,180.00',
        'Employment Pass Holders: 2 staff correctly marked CPF Exempt.',
        '2026 OW Ceiling ($8,000) applied across senior staff.'
      ]
    },
    {
      id: 'q3',
      question: 'Show pending leave',
      responseTitle: '2 pending leave requests requiring manager action:',
      responseItems: [
        'Ahmad Farhan: Annual Leave (22 Aug - 24 Aug, 3 Days) - Pending Finance Manager.',
        'Sarah Chen: Childcare Leave (29 Aug, 1 Day) - Pending HR Department.'
      ]
    },
    {
      id: 'q4',
      question: 'Find payroll anomalies',
      responseTitle: 'Workforce Anomaly Check Completed (0 Critical Blockers):',
      responseItems: [
        'Overtime variance within +5% threshold.',
        'Bank GIRO details verified for all active employees.',
        'No duplicate NRIC / FIN entries detected.'
      ]
    }
  ];

  const [activePromptId, setActivePromptId] = useState<string>('q1');
  const activePrompt = samplePrompts.find(p => p.id === activePromptId) || samplePrompts[0];

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
      icon: ShieldCheck,
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
    <section id="ai" className="py-24 bg-slate-50 text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-700" /> Management Intelligence
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 leading-tight">
            Ezy Workforce <br />
            <span className="text-gradient-hero">Intelligence &amp; Analytics.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Automated anomaly detection, statutory verification, and workforce analytics to give HR and finance leaders complete confidence.
          </p>
        </div>

        {/* Intelligence Query Workspace (Dark Management Product UI inside Light Section Canvas) */}
        <div className="max-w-4xl mx-auto bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl p-6 sm:p-8 mb-16 space-y-6 text-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Workforce Intelligence Workspace</h3>
                <span className="text-[11px] text-slate-400 font-medium">Select a sample audit prompt to review automated insights</span>
              </div>
            </div>
            <span className="px-3 py-1 rounded bg-slate-900 text-emerald-400 text-[10px] font-mono font-bold border border-emerald-500/30 self-start sm:self-auto">
              DEMO DATA
            </span>
          </div>

          {/* Sample Interactive Question Selector Buttons */}
          <div className="space-y-2.5">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Sample Audit Prompts:</span>
            <div className="flex flex-wrap gap-2">
              {samplePrompts.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActivePromptId(p.id)}
                  className={`text-xs font-semibold px-3.5 py-2 rounded-xl border transition-all text-left ${
                    activePromptId === p.id
                      ? 'bg-emerald-500 text-slate-950 border-emerald-500 font-bold shadow-md'
                      : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  "{p.question}"
                </button>
              ))}
            </div>
          </div>

          {/* Active Chat Conversation Area */}
          <div className="space-y-4 pt-2 border-t border-slate-800 text-xs animate-fadeIn">
            {/* User Prompt */}
            <div className="flex items-start justify-end gap-2">
              <div className="bg-slate-800 text-slate-100 p-3.5 rounded-2xl rounded-tr-none max-w-md font-semibold text-xs sm:text-sm border border-slate-700">
                "{activePrompt.question}"
              </div>
            </div>

            {/* AI Response */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 font-bold text-xs">
                EZY
              </div>
              <div className="bg-slate-900 text-slate-200 p-4 rounded-2xl rounded-tl-none border border-slate-800 max-w-lg space-y-2.5 text-xs sm:text-sm">
                <span className="font-bold text-emerald-400 block">{activePrompt.responseTitle}</span>
                <ul className="space-y-2 text-slate-300 font-medium">
                  {activePrompt.responseItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
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
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center border border-emerald-200 font-bold">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border ${
                      ai.status === 'AVAILABLE'
                        ? 'bg-emerald-100 text-emerald-800 border-emerald-200'
                        : 'bg-amber-100 text-amber-800 border-amber-200'
                    }`}>
                      {ai.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-950 mb-2">{ai.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">{ai.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
