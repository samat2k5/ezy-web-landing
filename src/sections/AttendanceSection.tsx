import React from 'react';
import { Clock, MapPin, Wifi, CheckCircle2, TrendingUp, ArrowRight, Users } from 'lucide-react';

const employees = [
  { name: 'Tan Wei Ming', initials: 'TW', type: 'Office', time: '08:32', status: 'verified', dept: 'Engineering' },
  { name: 'Nurul Huda', initials: 'NH', type: 'Remote', time: '08:45', status: 'verified', dept: 'HR' },
  { name: 'Kavitha Ramasamy', initials: 'KR', type: 'Office', time: '09:02', status: 'verified', dept: 'Finance' },
  { name: 'Rajesh Kumar', initials: 'RK', type: 'Remote', time: '09:15', status: 'pending', dept: 'Sales' },
  { name: 'Lim Boon Keng', initials: 'LB', type: 'Office', time: '09:28', status: 'verified', dept: 'Ops' },
  { name: 'Siti Rahimah', initials: 'SR', type: 'Remote', time: '09:44', status: 'verified', dept: 'Marketing' },
];

export const AttendanceSection: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-36 overflow-hidden">

      {/* Cyan / teal atmospheric gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cyan-950 to-teal-950" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[700px] h-[500px] bg-gradient-to-bl from-cyan-500/20 via-teal-500/15 to-transparent blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-gradient-to-tr from-sky-500/15 to-transparent blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Left — copy */}
          <div className="lg:w-[40%] space-y-7">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-600 flex items-center justify-center shadow-lg">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-cyan-400">Time &amp; Attendance</span>
            </div>

            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.05]">
              Know who's working.<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-teal-300">
                Without clocking in stress.
              </span>
            </h2>

            <p className="text-lg text-slate-400 leading-relaxed">
              GPS-verified clock-in, geofencing, face recognition and shift scheduling — all visible in a live command centre.
            </p>

            <div className="space-y-4">
              {[
                { icon: MapPin, label: 'GPS geofencing and location verification' },
                { icon: Wifi, label: 'Remote and hybrid workforce visibility' },
                { icon: Clock, label: 'Automated overtime detection and alerts' },
                { icon: TrendingUp, label: 'Attendance trends and late-arrival tracking' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-cyan-900/60 border border-cyan-700/40 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="text-sm font-medium text-slate-300">{item.label}</span>
                  </div>
                );
              })}
            </div>

            <button className="flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-200 transition-colors group">
              See Attendance in action <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Right — Live Attendance Command Centre */}
          <div className="lg:w-[60%]">
            <div className="bg-slate-900/80 backdrop-blur-md rounded-3xl border border-cyan-900/40 shadow-product-ui overflow-hidden">

              {/* Header bar */}
              <div className="px-6 py-4 border-b border-cyan-900/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-black text-white uppercase tracking-wider">Live Attendance Command Centre</span>
                </div>
                <div className="text-[10px] text-slate-500 font-medium">Thursday, 13 Aug 2026 · 09:50 AM</div>
              </div>

              {/* Status grid */}
              <div className="p-5 grid grid-cols-3 gap-3 border-b border-cyan-900/20">
                {[
                  { label: 'Clocked In', value: '203', color: 'text-emerald-400', border: 'border-emerald-900/40', bg: 'bg-emerald-950/40' },
                  { label: 'On Leave', value: '12', color: 'text-amber-400', border: 'border-amber-900/40', bg: 'bg-amber-950/40' },
                  { label: 'Not In', value: '32', color: 'text-red-400', border: 'border-red-900/40', bg: 'bg-red-950/40' },
                ].map((s, i) => (
                  <div key={i} className={`${s.bg} border ${s.border} rounded-2xl p-4 text-center`}>
                    <div className={`text-3xl font-black ${s.color} mb-0.5`}>{s.value}</div>
                    <div className="text-[11px] text-slate-500 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Employee activity feed */}
              <div className="p-5 space-y-2.5 max-h-[320px] overflow-hidden">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">Recent Clock-ins</span>
                  <span className="text-[10px] text-cyan-400 font-semibold">Live feed</span>
                </div>
                {employees.map((emp, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-slate-800/40 border border-slate-700/30 hover:border-cyan-800/50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
                      {emp.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-white truncate">{emp.name}</div>
                      <div className="text-[10px] text-slate-500">{emp.dept} · {emp.type}</div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-xs font-bold text-slate-300">{emp.time} AM</div>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      {emp.type === 'Remote' ? (
                        <Wifi className="w-3.5 h-3.5 text-sky-400" />
                      ) : (
                        <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      )}
                      <span className={`text-[10px] font-bold ${emp.status === 'verified' ? 'text-emerald-400' : 'text-amber-400'}`}>
                        {emp.status === 'verified' ? 'GPS ✓' : 'Pending'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Attendance rate bar */}
              <div className="px-5 pb-5">
                <div className="flex justify-between mb-2">
                  <span className="text-[11px] font-bold text-slate-400">Overall Attendance Rate</span>
                  <span className="text-[11px] font-black text-cyan-400">96.8%</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full" style={{ width: '96.8%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
