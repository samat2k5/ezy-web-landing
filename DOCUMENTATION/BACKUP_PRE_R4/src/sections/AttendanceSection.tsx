import React from 'react';
import { Clock, MapPin, Smartphone, QrCode, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

interface AttendanceSectionProps {
  onOpenDemo?: () => void;
}

export const AttendanceSection: React.FC<AttendanceSectionProps> = ({ onOpenDemo }) => {
  const attendanceBenefits = [
    'Mobile GPS geo-fenced clock-in for field & remote teams',
    'Browser-based web portal check-in for office workers',
    'Tablet kiosk QR scan attendance for sites & reception',
    'Automated 1.5x and 2.0x overtime (OT) multiplier math',
    'Shift & roster scheduling with instant conflict alerts'
  ];

  return (
    <section className="py-24 bg-slate-950 text-white relative border-b border-slate-900">
      
      {/* Cyan Ambient Glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              Time & Workforce Management
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Know who's working. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-300">
                Know what's happening.
              </span>
            </h2>
            
            <p className="text-base text-slate-300 leading-relaxed">
              Multi-channel attendance tracking that automatically syncs clock-in times, shift schedules, and overtime directly into statutory Singapore payroll.
            </p>

            <div className="space-y-3 pt-2">
              {attendanceBenefits.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenDemo}
                className="px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2"
              >
                See Attendance Radar <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>
          </div>

          {/* Right Column: Dashboard UI Composition */}
          <div className="lg:col-span-7 bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Clock className="w-5 h-5 text-cyan-400" /> Today's Real-time Attendance Radar
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">Live GPS & Web Portal Sync • August 12, 2026</p>
              </div>
              <span className="px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400 text-[10px] font-extrabold border border-cyan-500/30">
                DEMO DATA
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 text-center">
              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                <span className="text-2xl font-extrabold text-cyan-400">46</span>
                <span className="block text-xs text-slate-400 mt-1">Clocked In</span>
              </div>
              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                <span className="text-2xl font-extrabold text-blue-400">2</span>
                <span className="block text-xs text-slate-400 mt-1">On Approved Leave</span>
              </div>
              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                <span className="text-2xl font-extrabold text-amber-400">0</span>
                <span className="block text-xs text-slate-400 mt-1">Unexcused Absence</span>
              </div>
              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                <span className="text-2xl font-extrabold text-purple-400">1.5 hrs</span>
                <span className="block text-xs text-slate-400 mt-1">Avg Overtime</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
