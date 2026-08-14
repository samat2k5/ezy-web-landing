import React from 'react';
import { ArrowRight, Tag } from 'lucide-react';
import { Link } from './Link';
import { trackEvent } from '../utils/analytics';

export const PricingTeaser: React.FC = () => {
  return (
    <div className="bg-slate-50 border-b border-slate-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 border border-emerald-200 flex items-center justify-center flex-shrink-0">
              <Tag className="w-4 h-4 text-emerald-700" />
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-0.5">Simple Pricing for Growing Teams</div>
              <div className="text-sm font-bold text-slate-900">
                Plans from <span className="text-emerald-700">S$4 / employee / month</span>
                <span className="text-slate-500 font-medium text-xs ml-2">· GST included · Clear, transparent pricing for Singapore SMEs.</span>
              </div>
            </div>
          </div>
          <Link
            href="/#pricing"
            onClick={() => trackEvent('Pricing CTA Click', { source: 'other' })}
            className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-700 hover:text-emerald-900 transition-colors whitespace-nowrap group"
          >
            View Plans <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
