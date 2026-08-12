import React, { useState } from 'react';
import { MODULES_DATA } from '../data/moduleData';
import { CheckCircle2, ArrowRight, Sparkles, Layers } from 'lucide-react';
import * as Icons from 'lucide-react';

interface PlatformOverviewProps {
  onSelectModule: (moduleName: string) => void;
}

export const PlatformOverview: React.FC<PlatformOverviewProps> = ({ onSelectModule }) => {
  const [activeModuleId, setActiveModuleId] = useState<string>('payroll');

  const activeModule = MODULES_DATA.find(m => m.id === activeModuleId) || MODULES_DATA[0];

  return (
    <section id="platform" className="py-20 md:py-28 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" /> Interconnected Cloud HR Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            One platform. One employee record. <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-200">
              One source of truth.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            ezyHR connects all core HR functions so data flows seamlessly from attendance and leave directly into Singapore statutory payroll and executive analytics.
          </p>
        </div>

        {/* Connected Module Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-10">
          {MODULES_DATA.map((module) => {
            //@ts-ignore
            const IconComponent = Icons[module.iconName] || Icons.HelpCircle;
            const isActive = module.id === activeModuleId;

            return (
              <button
                key={module.id}
                onClick={() => setActiveModuleId(module.id)}
                className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                  isActive
                    ? 'bg-slate-900 border-emerald-500 ring-2 ring-emerald-500/30 shadow-lg shadow-emerald-500/10'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    isActive ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300'
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    module.status === 'AVAILABLE'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                      : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                  }`}>
                    {module.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-white tracking-tight">{module.title}</h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Module Detail Panel */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Module Spec Details */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-extrabold rounded-lg uppercase tracking-wider border border-emerald-500/30">
                  {activeModule.status} MODULE
                </span>
                <span className="text-xs text-slate-400">Interconnected to Singapore Payroll</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{activeModule.title}</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{activeModule.shortDesc}</p>

              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Capabilities</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {activeModule.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onSelectModule(activeModule.title)}
                  className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2"
                >
                  Book Demo for {activeModule.title} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Module Architectural Diagram */}
            <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-400" /> Data Integration Flow
                </span>
                <span className="font-mono text-emerald-400">Automated Sync</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-300">Employee Master Record</span>
                  <span className="text-emerald-400 font-mono">Single ID</span>
                </div>
                <div className="w-0.5 h-3 bg-slate-800 mx-auto" />
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between">
                  <span className="text-white font-bold">{activeModule.title} Data Engine</span>
                  <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded text-[10px] font-bold">ACTIVE</span>
                </div>
                <div className="w-0.5 h-3 bg-slate-800 mx-auto" />
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-300">Singapore Statutory Payroll (CPF / IR8A)</span>
                  <span className="text-blue-400 font-mono">100% Calculated</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
