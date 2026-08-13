import React from 'react';
import {
  Users, Clock, Calendar, DollarSign, Sparkles,
  Smartphone, BarChart3, ShieldCheck, ArrowRight
} from 'lucide-react';

const modules = [
  {
    id: 'core-hr',
    icon: Users,
    title: 'Core HR',
    desc: 'Digital employee master records, onboarding, work passes',
    color: 'from-sky-500 to-blue-600',
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    iconColor: 'text-sky-600',
    size: 'lg',
  },
  {
    id: 'attendance',
    icon: Clock,
    title: 'Attendance',
    desc: 'GPS clock-in, shift scheduling, overtime detection',
    color: 'from-cyan-500 to-teal-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    iconColor: 'text-cyan-600',
    size: 'sm',
  },
  {
    id: 'leave',
    icon: Calendar,
    title: 'Leave',
    desc: 'Digital leave management with approval workflows',
    color: 'from-emerald-500 to-green-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    iconColor: 'text-emerald-600',
    size: 'sm',
  },
  {
    id: 'payroll',
    icon: DollarSign,
    title: 'Singapore Payroll',
    desc: 'CPF, SDL, SHG, MOM-compliant automated payroll engine',
    color: 'from-amber-500 to-orange-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    iconColor: 'text-amber-600',
    size: 'lg',
  },
  {
    id: 'ai',
    icon: Sparkles,
    title: 'AI Insights',
    desc: 'Natural-language HR intelligence and anomaly detection',
    color: 'from-violet-500 to-indigo-600',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    iconColor: 'text-violet-600',
    size: 'sm',
  },
  {
    id: 'ess',
    icon: Smartphone,
    title: 'Employee Self Service',
    desc: 'Mobile app for claims, leave, payslips, clock-in',
    color: 'from-blue-500 to-indigo-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    iconColor: 'text-blue-600',
    size: 'sm',
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Management Intelligence',
    desc: 'Executive dashboards and workforce analytics',
    color: 'from-teal-500 to-cyan-600',
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    iconColor: 'text-teal-600',
    size: 'sm',
  },
  {
    id: 'security',
    icon: ShieldCheck,
    title: 'Security & PDPA',
    desc: 'Role-based access, audit trails, PDPA compliance',
    color: 'from-slate-600 to-slate-800',
    bg: 'bg-slate-50',
    border: 'border-slate-200',
    iconColor: 'text-slate-600',
    size: 'sm',
  },
];

interface PlatformOverviewProps {
  onSelectModule: (id: string) => void;
}

export const PlatformOverview: React.FC<PlatformOverviewProps> = ({ onSelectModule }) => {
  const Icon0 = modules[0].icon;
  const Icon3 = modules[3].icon;

  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">

      {/* Subtle ambient light */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-br from-sky-100/50 via-cyan-100/30 to-transparent blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 border border-sky-200 mb-5">
            <span className="text-[11px] font-black uppercase tracking-widest text-sky-700">One Platform</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-[1.05]">
            One source of truth<br />
            <span className="text-gradient-hero">for your entire workforce.</span>
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
          {/* Large tile — Core HR */}
          <div
            className={`md:col-span-2 md:row-span-2 group relative ${modules[0].bg} ${modules[0].border} border rounded-3xl p-7 lg:p-9 cursor-pointer hover:shadow-editorial transition-all duration-300 overflow-hidden`}
            onClick={() => onSelectModule('Core HR')}
          >
            <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${modules[0].color} opacity-10 rounded-full blur-3xl`} />
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${modules[0].color} flex items-center justify-center mb-5 shadow-lg`}>
              <Icon0 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">{modules[0].title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">{modules[0].desc}</p>
            {/* Mini employee record preview */}
            <div className="bg-white rounded-2xl border border-sky-100 shadow-sm p-4 space-y-3">
              {[
                { label: 'Tan Wei Ming · SC · Engineering', status: 'Active', statusColor: 'bg-emerald-100 text-emerald-700' },
                { label: 'Nurul Huda · SC · HR', status: 'On Leave', statusColor: 'bg-amber-100 text-amber-700' },
                { label: 'Kavitha Ramasamy · SC · Finance', status: 'Active', statusColor: 'bg-emerald-100 text-emerald-700' },
              ].map((r, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
                    {r.label.split(' ')[0][0]}{r.label.split(' ')[1][0]}
                  </div>
                  <span className="text-xs text-slate-700 flex-1 truncate">{r.label}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${r.statusColor}`}>{r.status}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs font-bold text-sky-600 group-hover:gap-2 transition-all">
              Explore Core HR <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Payroll large tile */}
          <div
            className={`md:col-span-2 group relative ${modules[3].bg} ${modules[3].border} border rounded-3xl p-6 lg:p-7 cursor-pointer hover:shadow-editorial transition-all duration-300 overflow-hidden`}
            onClick={() => onSelectModule('Singapore Payroll (CPF/IR8A)')}
          >
            <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${modules[3].color} opacity-10 rounded-full blur-3xl`} />
            <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${modules[3].color} flex items-center justify-center mb-4 shadow-lg`}>
              <Icon3 className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-1.5">{modules[3].title}</h3>
            <p className="text-slate-600 text-xs leading-relaxed mb-4">{modules[3].desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {['CPF 2026', 'SDL', 'SHG', 'IR8A', 'Auto-payslip'].map(tag => (
                <span key={tag} className="text-[10px] font-bold px-2 py-1 bg-amber-100 text-amber-700 rounded-full border border-amber-200">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-1 text-xs font-bold text-amber-700 group-hover:gap-2 transition-all">
              Explore Payroll <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Small tiles */}
          {modules.slice(1, 3).concat(modules.slice(4)).map((mod, i) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.id}
                className={`group relative ${mod.bg} ${mod.border} border rounded-3xl p-5 cursor-pointer hover:shadow-editorial transition-all duration-300 overflow-hidden`}
                onClick={() => {
                  let modalModName = mod.title;
                  switch (mod.id) {
                    case 'core-hr': modalModName = 'Core HR'; break;
                    case 'payroll': modalModName = 'Singapore Payroll (CPF/IR8A)'; break;
                    case 'attendance': modalModName = 'Time & Attendance'; break;
                    case 'leave': modalModName = 'Leave Management'; break;
                    case 'ai': modalModName = 'AI HR Assistant'; break;
                    case 'ess': modalModName = 'Employee Self Service'; break;
                    case 'analytics': modalModName = 'Management Intelligence'; break;
                    case 'security': modalModName = 'Security & PDPA'; break;
                  }
                  onSelectModule(modalModName);
                }}
              >
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${mod.color} flex items-center justify-center mb-3 shadow-md`}>
                  <Icon className="w-4.5 h-4.5 text-white" />
                </div>
                <h3 className="text-sm font-black text-slate-900 mb-1">{mod.title}</h3>
                <p className="text-[11px] text-slate-500 leading-snug">{mod.desc}</p>
                <div className="mt-3 flex items-center gap-1 text-[11px] font-bold text-slate-500 group-hover:text-slate-700 transition-colors">
                  Learn more <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
