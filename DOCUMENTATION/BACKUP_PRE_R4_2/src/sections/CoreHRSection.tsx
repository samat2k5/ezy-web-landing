import React from 'react';
import { UserCheck, Network, User, BellRing, CheckCircle2, ArrowRight, FileText, Shield } from 'lucide-react';

interface CoreHRSectionProps {
  onOpenDemo?: () => void;
}

export const CoreHRSection: React.FC<CoreHRSectionProps> = ({ onOpenDemo }) => {
  const coreHrBullets = [
    'Single source of truth for all employee master profiles',
    'Interactive organizational chart and reporting lines',
    'Employee Self-Service (ESS) web and mobile portal',
    'Automated work pass expiry tracking (EP, S-Pass, WP)',
    'Centralized employment contracts and document repository'
  ];

  return (
    <section id="features" className="py-24 bg-ambient-ice text-slate-900 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Foundation Core HR
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
            One place for every employee.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            ezyHR transforms manual paper files into secure digital employee master records with automated work pass expiry notifications and self-service portals.
          </p>
        </div>

        {/* Product-Led Showcase Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Product UI Showcase with Floating Fragments */}
          <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-5 text-white relative">
            
            {/* Floating UI Fragment Badge */}
            <div className="hidden sm:flex absolute -top-4 -right-4 z-20 items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500 text-slate-950 text-xs font-extrabold shadow-lg">
              <CheckCircle2 className="w-4 h-4 text-slate-950" /> Work Pass Verified
            </div>

            <div className="flex items-center justify-between border-b border-slate-800 pb-4 text-xs">
              <span className="font-bold text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-400" /> Digital Employee Master Profile
              </span>
              <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                ACTIVE • SC CITIZEN
              </span>
            </div>

            <div className="flex items-center gap-4 bg-slate-900 p-5 rounded-2xl border border-slate-800">
              <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white font-black flex items-center justify-center text-lg shadow-md">
                TW
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Tan Wei Ming</h4>
                <p className="text-xs text-slate-400">Senior Software Engineer • Engineering Dept</p>
                <span className="text-[11px] text-slate-400 block mt-1 font-mono">Emp ID: SG-2024-0042 • Joined 15 Jan 2022</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Residency Status</span>
                <span className="text-white font-semibold mt-1 block">Singapore Citizen</span>
              </div>
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Work Pass Expiry</span>
                <span className="text-emerald-400 font-semibold mt-1 block">N/A (Citizen)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Capability Bullets */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Centralize your people data with total confidence.
            </h3>
            
            <p className="text-base text-slate-600 leading-relaxed">
              Consolidate employee profiles, employment history, bank details, and compliance records in a single digital database.
            </p>

            <div className="space-y-3 pt-2">
              {coreHrBullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenDemo}
                className="px-6 py-3.5 bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center gap-2"
              >
                Explore Core HR <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
