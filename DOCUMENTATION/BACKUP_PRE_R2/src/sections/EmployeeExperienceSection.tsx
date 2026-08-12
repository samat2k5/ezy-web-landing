import React from 'react';
import { Smartphone, Clock, Calendar, FileText, Camera, Bell, CheckCircle2, Shield } from 'lucide-react';

export const EmployeeExperienceSection: React.FC = () => {
  const essFeatures = [
    { title: '1-Tap GPS Clock-In', desc: 'Verify check-in location instantly from smartphone.' },
    { title: 'Mobile Leave Requests', desc: 'Apply for leave and view real-time entitlements on the go.' },
    { title: 'Instant Itemized Payslips', desc: 'Securely view and download monthly PDF payslips.' },
    { title: 'Photo Receipt Claim Upload', desc: 'Snap receipt photos and submit expense claims directly.' },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            Mobile-First Employee Experience
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            HR in your pocket. <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300">
              Built for modern teams.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Empower your workforce with intuitive Employee Self-Service (ESS) web and mobile apps. No training required.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Mobile App Screen Visual Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[320px] bg-slate-950 p-4 rounded-[40px] border-4 border-slate-800 shadow-2xl space-y-4">
              
              {/* Phone Status Bar */}
              <div className="flex justify-between items-center text-[10px] text-slate-400 px-2 pt-1">
                <span>9:41 AM</span>
                <div className="w-16 h-3 bg-slate-800 rounded-full mx-auto" />
                <span>5G 100%</span>
              </div>

              {/* App Top Bar */}
              <div className="bg-slate-900 p-3 rounded-2xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-slate-950 font-bold flex items-center justify-center text-xs">
                    TW
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Tan Wei Ming</span>
                    <span className="text-[10px] text-emerald-400">Clocked In • 08:58 AM</span>
                  </div>
                </div>
                <Bell className="w-4 h-4 text-slate-400" />
              </div>

              {/* Quick Actions Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex flex-col items-center text-center space-y-1">
                  <Clock className="w-5 h-5 text-emerald-400" />
                  <span className="font-bold text-white">Clock In/Out</span>
                  <span className="text-[9px] text-slate-400">GPS Verified</span>
                </div>

                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex flex-col items-center text-center space-y-1">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <span className="font-bold text-white">Apply Leave</span>
                  <span className="text-[9px] text-slate-400">14 Days Bal.</span>
                </div>

                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex flex-col items-center text-center space-y-1">
                  <FileText className="w-5 h-5 text-purple-400" />
                  <span className="font-bold text-white">My Payslips</span>
                  <span className="text-[9px] text-slate-400">Aug 2026 Ready</span>
                </div>

                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex flex-col items-center text-center space-y-1">
                  <Camera className="w-5 h-5 text-amber-400" />
                  <span className="font-bold text-white">Snap Claim</span>
                  <span className="text-[9px] text-slate-400">Receipt Capture</span>
                </div>
              </div>

              {/* Recent Notification Card */}
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-[11px]">
                <span className="font-bold text-white block mb-0.5">Leave Request Approved</span>
                <p className="text-slate-400">Your Annual Leave for 18 Aug - 20 Aug has been approved by Finance Manager.</p>
              </div>

            </div>
          </div>

          {/* Right: Bulleted Features */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-white">Empower employees. Reduce HR tickets by 80%.</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              When employees can check their own leave balances, download itemized payslips, and upload claim receipts from their phone, HR teams save hours of routine phone calls and email queries.
            </p>

            <div className="space-y-4 pt-2">
              {essFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">{feat.title}</h4>
                    <p className="text-xs text-slate-400">{feat.desc}</p>
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
