import React, { useState } from 'react';
import { MODULES_DATA } from '../data/moduleData';
import { CheckCircle2, ArrowRight, Sparkles, Layers, RefreshCw } from 'lucide-react';
import * as Icons from 'lucide-react';

interface PlatformOverviewProps {
  onSelectModule: (moduleName: string) => void;
}

export const PlatformOverview: React.FC<PlatformOverviewProps> = ({ onSelectModule }) => {
  const [activeModuleId, setActiveModuleId] = useState<string>('payroll');

  const activeModule = MODULES_DATA.find(m => m.id === activeModuleId) || MODULES_DATA[0];

  return (
    <section id="platform" className="py-24 bg-slate-100/80 text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" /> Interconnected Cloud HR Ecosystem
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            One platform. <br />
            One employee record. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
              One source of truth.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            ezyHR connects all core HR functions so data flows seamlessly from attendance, leave, and claims directly into Singapore statutory payroll.
          </p>
        </div>

        {/* Interconnected Module Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 mb-10">
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
                    ? 'bg-white border-emerald-500 ring-2 ring-emerald-500/30 shadow-lg'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
                    isActive ? 'bg-emerald-500 text-slate-950' : 'bg-slate-100 text-slate-700'
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border ${
                    module.status === 'AVAILABLE'
                      ? 'bg-emerald-100 text-emerald-800 border-emerald-200'
                      : 'bg-amber-100 text-amber-800 border-amber-200'
                  }`}>
                    {module.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-slate-900 tracking-tight">{module.title}</h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Module Ecosystem Interactive Panel */}
        <div className="bg-white p-7 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Module Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-extrabold rounded-lg uppercase tracking-wider border border-emerald-200">
                  {activeModule.status} MODULE
                </span>
                <span className="text-xs text-slate-500 font-medium">Interconnected to Singapore Statutory Payroll</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{activeModule.title}</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{activeModule.shortDesc}</p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Key Functional Capabilities</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  {activeModule.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-slate-800 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onSelectModule(activeModule.title)}
                  className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2"
                >
                  Book Demo for {activeModule.title} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Connected Data Flow Diagram */}
            <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-200 pb-3">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-600" /> Data Flow Architecture
                </span>
                <span className="font-mono text-emerald-700 font-bold flex items-center gap-1">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Live Sync
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-center justify-between shadow-xs">
                  <span className="text-slate-700 font-medium">Employee Master Profile</span>
                  <span className="text-emerald-700 font-mono font-bold">Single ID</span>
                </div>
                <div className="w-0.5 h-3 bg-slate-300 mx-auto" />
                <div className="p-3.5 bg-white rounded-xl border border-emerald-500/40 flex items-center justify-between shadow-xs ring-1 ring-emerald-500/20">
                  <span className="text-slate-900 font-bold">{activeModule.title} Engine</span>
                  <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 rounded text-[10px] font-extrabold">ACTIVE</span>
                </div>
                <div className="w-0.5 h-3 bg-slate-300 mx-auto" />
                <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-center justify-between shadow-xs">
                  <span className="text-slate-700 font-medium">Singapore Statutory Payroll (CPF / IR8A)</span>
                  <span className="text-blue-700 font-mono font-bold">Calculated</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
