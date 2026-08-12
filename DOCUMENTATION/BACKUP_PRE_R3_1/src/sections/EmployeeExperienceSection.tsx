import React from 'react';
import { Smartphone, Clock, Calendar, FileText, Camera, Bell, CheckCircle2 } from 'lucide-react';

export const EmployeeExperienceSection: React.FC = () => {
  const essFeatures = [
    { title: 'Mobile GPS Check-in', desc: 'Verify clock-in location instantly from smartphone.' },
    { title: 'Mobile Leave Requests', desc: 'Apply for statutory leave and track balances on the go.' },
    { title: 'Itemised Mobile Payslips', desc: 'Securely view and download monthly PDF payslips.' },
    { title: 'Photo Receipt Claim Upload', desc: 'Snap receipt photos and submit expense claims directly.' },
  ];

  return (
    <section className="py-24 bg-slate-100/80 text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Mobile-First Employee Experience
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Give employees <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-teal-600">
              a better HR experience.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Empower your workforce with intuitive Employee Self-Service (ESS) web and mobile apps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Large Smartphone Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[340px] bg-slate-950 p-5 rounded-[44px] border-4 border-slate-800 shadow-2xl space-y-4 text-white">
              
              {/* Phone Status Bar */}
              <div className="flex justify-between items-center text-[10px] text-slate-400 px-2 pt-1 font-mono">
                <span>9:41 AM</span>
                <div className="w-20 h-4 bg-slate-900 rounded-full mx-auto" />
                <span>5G 100%</span>
              </div>

              {/* App Top Bar */}
              <div className="bg-slate-900 p-3.5 rounded-2xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-500 text-slate-950 font-black flex items-center justify-center text-xs">
                    TW
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Tan Wei Ming</span>
                    <span className="text-[10px] text-emerald-400 font-semibold">Clocked In • 08:58 AM</span>
                  </div>
                </div>
                <Bell className="w-4 h-4 text-slate-400" />
              </div>

              {/* Quick Actions Grid */}
              <div className="grid grid-cols-2 gap-2.5 text-xs">
                <div className="p-3.5 bg-slate-900 rounded-2xl border border-slate-800 flex flex-col items-center text-center space-y-1.5">
                  <Clock className="w-6 h-6 text-emerald-400" />
                  <span className="font-bold text-white">Clock In/Out</span>
                  <span className="text-[9px] text-slate-400">GPS Verified</span>
                </div>

                <div className="p-3.5 bg-slate-900 rounded-2xl border border-slate-800 flex flex-col items-center text-center space-y-1.5">
                  <Calendar className="w-6 h-6 text-blue-400" />
                  <span className="font-bold text-white">Apply Leave</span>
                  <span className="text-[9px] text-slate-400">14 Days Bal.</span>
                </div>

                <div className="p-3.5 bg-slate-900 rounded-2xl border border-slate-800 flex flex-col items-center text-center space-y-1.5">
                  <FileText className="w-6 h-6 text-purple-400" />
                  <span className="font-bold text-white">My Payslips</span>
                  <span className="text-[9px] text-slate-400">Aug 2026 Ready</span>
                </div>

                <div className="p-3.5 bg-slate-900 rounded-2xl border border-slate-800 flex flex-col items-center text-center space-y-1.5">
                  <Camera className="w-6 h-6 text-amber-400" />
                  <span className="font-bold text-white">Snap Claim</span>
                  <span className="text-[9px] text-slate-400">Receipt Capture</span>
                </div>
              </div>

              {/* Notification Card */}
              <div className="p-3.5 bg-slate-900 rounded-2xl border border-slate-800 text-[11px]">
                <span className="font-bold text-white block mb-0.5">Leave Request Approved</span>
                <p className="text-slate-400 leading-relaxed">Your Annual Leave for 18 Aug - 20 Aug has been approved by Finance Manager.</p>
              </div>

            </div>
          </div>

          {/* Right: Narrative Benefits */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Empower employees. <br />
              Reduce routine HR queries.
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              When employees can check leave balances, download itemised payslips, and upload claim receipts from their phone, HR teams save hours of routine manual queries.
            </p>

            <div className="space-y-4 pt-2">
              {essFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{feat.title}</h4>
                    <p className="text-xs text-slate-600">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
