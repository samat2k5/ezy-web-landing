import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { getLogoPath, handleImageError } from '../utils/logoHelper';

interface FinalCtaSectionProps {
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenDemo, onOpenTrial }) => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-100 text-slate-900 relative overflow-hidden border-b border-cyan-200">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[520px] bg-gradient-to-tr from-emerald-300/30 via-cyan-300/25 to-blue-400/30 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Prominent Official Logo Display */}
        <div className="flex justify-center mb-2">
          <img 
            src={getLogoPath('fullLight')} 
            onError={(e) => handleImageError(e, 'Logos/ezyhr-full-logo.png')}
            alt="ezyHR Singapore HRMS Platform" 
            className="h-12 sm:h-14 w-auto object-contain" 
          />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-emerald-700" /> Transform Your HR Operations
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-950 leading-tight">
          Ready to simplify HR?
        </h2>

        <p className="text-lg sm:text-xl text-slate-700 max-w-2xl mx-auto font-medium leading-relaxed">
          Bring your people, payroll and everyday HR operations together with ezyHR.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-9 py-4.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-slate-950 font-black rounded-2xl text-base shadow-xl shadow-emerald-500/25 transition-all hover:scale-[1.02] flex items-center justify-center gap-3 ring-1 ring-emerald-400/40"
          >
            <span>Book a Free Demo</span>
            <ArrowRight className="w-5 h-5 text-slate-950" />
          </button>

          <button
            onClick={onOpenTrial}
            className="w-full sm:w-auto px-9 py-4.5 bg-white hover:bg-slate-50 text-slate-900 font-bold rounded-2xl text-base border border-slate-300 shadow-sm transition-all flex items-center justify-center gap-2"
          >
            Start Free Trial
          </button>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-700 font-bold">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Built for Singapore Payroll Requirements
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Guided Onboarding Support
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" /> PDPA Aligned Privacy
          </span>
        </div>

      </div>
    </section>
  );
};
