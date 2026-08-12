import React from 'react';
import { Sparkles, MessageSquare, AlertTriangle, FileSearch, TrendingUp, Bell, CheckCircle2 } from 'lucide-react';

export const AiSection: React.FC = () => {
  const aiCapabilities = [
    {
      title: 'Natural Language Policy Q&A',
      desc: 'Ask questions about company HR policies, Singapore leave rules, and employee benefits in natural language.',
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
    <section id="ai" className="py-20 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> Next-Generation Capability
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Your HR assistant, <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-300 to-emerald-400">
              always ready.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            ezyHR integrates intelligent AI automation to assist HR teams with policy Q&A, payroll anomaly detection, and proactive compliance alerts.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiCapabilities.map((ai, idx) => {
            const Icon = ai.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                      ai.status === 'AVAILABLE'
                        ? 'bg-purple-500/10 text-purple-400 border-purple-500/30'
                        : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                    }`}>
                      {ai.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">{ai.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{ai.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Sample AI Prompt Demo Card */}
        <div className="mt-12 max-w-3xl mx-auto bg-slate-900 p-5 rounded-2xl border border-slate-800 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="flex-1 text-xs">
            <span className="font-bold text-purple-400 block mb-0.5">Sample AI HR Query</span>
            <p className="text-slate-300 italic">
              "How many annual leave days is Tan Wei Ming entitled to under MOM guidelines for 3 years of service?"
            </p>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded hidden sm:inline-block">
            Instant AI Answer
          </span>
        </div>

      </div>
    </section>
  );
};
