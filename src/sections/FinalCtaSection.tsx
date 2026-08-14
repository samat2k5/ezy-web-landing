import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { getLogoPath, handleImageError } from '../utils/logoHelper';
import { trackEvent } from '../utils/analytics';

interface FinalCtaSectionProps {
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenDemo, onOpenTrial }) => {
  return (
    <section className="py-24 md:py-36 bg-deep-navy text-white relative overflow-hidden border-b border-slate-800">
      
      {/* Background Radial Light Fields (cyan, emerald, violet, amber) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-tr from-cyan-500/20 via-emerald-500/20 to-violet-600/20 blur-[170px] rounded-full" />
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-gradient-to-b from-amber-500/10 to-transparent blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Prominent Official Dark Logo Asset */}
        <div className="flex justify-center mb-2">
          <img 
            src={getLogoPath('fullDark')} 
            onError={(e) => handleImageError(e, 'Logos/ezyhr-full-logo-dark.png')}
            alt="ezyHR Singapore HRMS Platform" 
            className="h-12 sm:h-16 w-auto object-contain" 
          />
        </div>

        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-cyan-400 text-xs font-black uppercase tracking-widest backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-cyan-400" /> Transform Your Singapore HR Operations
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
          Ready to simplify HR?
        </h2>

        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Bring your people, payroll and everyday HR operations together with ezyHR.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => {
              trackEvent('Demo CTA Click', { source: 'footer' });
              onOpenDemo();
            }}
            className="w-full sm:w-auto px-9 py-4.5 bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 text-slate-950 font-black rounded-2xl text-base shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-3"
          >
            <span>Book a Free Demo</span>
            <ArrowRight className="w-5 h-5 text-slate-950" />
          </button>

          <button
            onClick={() => {
              trackEvent('Trial CTA Click', { source: 'footer' });
              onOpenTrial();
            }}
            className="w-full sm:w-auto px-9 py-4.5 bg-slate-900 hover:bg-slate-850 text-white font-bold rounded-2xl text-base border border-slate-700 shadow-sm transition-all flex items-center justify-center gap-2"
          >
            Start Free Trial
          </button>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400 font-semibold">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Singapore Statutory Compliant
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Fast Implementation
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> PDPA Aligned Data Protection
          </span>
        </div>

      </div>
    </section>
  );
};
