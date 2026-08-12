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
    <section className="py-24 bg-ambient-cyan text-slate-900 relative border-b border-cyan-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            Time & Workforce Management
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
            Know who's working. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-teal-600">
              Without chasing timesheets.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Multi-channel attendance tracking that automatically syncs clock-in times, shift schedules, and overtime directly into statutory Singapore payroll.
          </p>
        </div>

        {/* Two-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Multi-channel clock-in for office, site & remote teams.
            </h3>
            
            <p className="text-base text-slate-600 leading-relaxed">
              Eliminate paper sign-in sheets and WhatsApp check-ins. ezyHR captures clock-in logs in real time with GPS verification.
            </p>

            <div className="space-y-3 pt-2">
              {attendanceBenefits.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenDemo}
                className="px-6 py-3.5 bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-cyan-600/20 flex items-center gap-2"
              >
                See Attendance Radar <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Right Column: Dashboard UI Composition */}
          <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-6 text-white">
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
              <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800">
                <span className="text-2xl font-extrabold text-cyan-400">46</span>
                <span className="block text-xs text-slate-400 mt-1">Clocked In</span>
              </div>
              <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800">
                <span className="text-2xl font-extrabold text-blue-400">2</span>
                <span className="block text-xs text-slate-400 mt-1">On Approved Leave</span>
              </div>
              <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800">
                <span className="text-2xl font-extrabold text-amber-400">0</span>
                <span className="block text-xs text-slate-400 mt-1">Late Arrivals</span>
              </div>
              <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800">
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
