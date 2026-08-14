import React from 'react';
import { Building2, CheckCircle2, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "ezyHR handles our CPF submissions automatically. We went from 3 days of payroll prep to half a day.",
    author: "Sarah Lim",
    title: "HR Director",
    company: "Acme Singapore Pte Ltd",
    initials: "SL",
  },
  {
    quote: "The leave management and attendance tracking has made our HR team far more efficient across 5 locations.",
    author: "Rajesh Kumar",
    title: "Operations Manager",
    company: "TechNova Solutions",
    initials: "RK",
  },
  {
    quote: "Having CPF, SDL and SHG calculated automatically gives us confidence we are always MOM-compliant.",
    author: "Chen Mei Ling",
    title: "Finance Controller",
    company: "BuildFirst Engineering",
    initials: "CM",
  },
];

const stats = [
  { value: '1,200+', label: 'Singapore companies' },
  { value: '40,000+', label: 'Payslips monthly' },
  { value: '99.9%', label: 'Platform uptime' },
  { value: '< 30 min', label: 'Average payroll run' },
];

export const TrustStrip: React.FC = () => {
  return (
    <section className="relative bg-white border-t border-slate-100 py-20 lg:py-28 overflow-hidden">

      {/* Ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-sky-100/40 to-transparent blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section eyebrow */}
        <div className="text-center mb-14">
          <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">
            Trusted by Singapore businesses
          </p>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
            Built for real HR teams. <span className="text-gradient-hero">Proven in production.</span>
          </h2>
        </div>

        {/* Metric bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 p-8 bg-gradient-to-r from-sky-50 via-cyan-50 to-teal-50 rounded-2xl border border-sky-100">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">{s.value}</div>
              <div className="text-sm text-slate-500 font-medium mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="relative bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-sm text-slate-700 leading-relaxed mb-5">"{t.quote}"</blockquote>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-sky-500 to-teal-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">{t.author}</div>
                  <div className="text-xs text-slate-500">{t.title} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-400 mt-8">
          * Testimonials represent fictional demonstration data for illustrative purposes.
        </p>
      </div>
    </section>
  );
};
