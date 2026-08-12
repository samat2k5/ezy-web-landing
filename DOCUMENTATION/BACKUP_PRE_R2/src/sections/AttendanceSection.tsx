import React from 'react';
import { Clock, MapPin, Smartphone, QrCode, Calendar, CheckCircle2, AlertCircle } from 'lucide-react';

export const AttendanceSection: React.FC = () => {
  const attendanceFeatures = [
    {
      title: 'Mobile GPS Check-In',
      desc: 'Employees check in via smartphone with verified GPS coordinates and geofence boundaries.',
      icon: MapPin,
      status: 'AVAILABLE'
    },
    {
      title: 'Web Portal Check-In',
      desc: 'Browser-based clock-in/out for office employees and remote staff.',
      icon: Smartphone,
      status: 'AVAILABLE'
    },
    {
      title: 'Kiosk QR Attendance',
      desc: 'Scan personal QR badges on tablet kiosk terminals at office reception or job sites.',
      icon: QrCode,
      status: 'AVAILABLE'
    },
    {
      title: 'Shift & Roster Scheduling',
      desc: 'Build recurring or flexible employee shift rosters with automated conflict alerts.',
      icon: Calendar,
      status: 'AVAILABLE'
    },
    {
      title: 'Overtime (OT) Engine',
      desc: 'Automated 1.5x and 2.0x overtime calculation linked directly to Singapore employment regulations.',
      icon: Clock,
      status: 'AVAILABLE'
    },
    {
      title: 'Automated Timesheet Export',
      desc: 'Generate audit-ready timesheet logs and send approved overtime data directly to payroll.',
      icon: CheckCircle2,
      status: 'AVAILABLE'
    }
  ];

  return (
    <section className="py-20 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            Time & Workforce Management
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Know who's working. <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">
              Know what's happening.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Multi-channel attendance tracking that automatically syncs clock-in times, shift schedules, and overtime directly into payroll.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attendanceFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 text-emerald-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                      feat.status === 'AVAILABLE'
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                        : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                    }`}>
                      {feat.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">{feat.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
