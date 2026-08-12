import React, { useState } from 'react';
import { Smartphone, Clock, Calendar, FileText, Camera, Bell, CheckCircle2, MapPin, DollarSign } from 'lucide-react';

export const EmployeeExperienceSection: React.FC = () => {
  const [mobileTab, setMobileTab] = useState<'clockin' | 'leave' | 'payslip' | 'claims'>('clockin');

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
          
          {/* Left: Interactive Smartphone Device Frame */}
          <div className="lg:col-span-6 flex flex-col items-center space-y-4">
            
            {/* Interactive Screen Switcher Controls */}
            <div className="flex bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm text-xs">
              <button
                onClick={() => setMobileTab('clockin')}
                className={`px-3.5 py-1.5 rounded-xl font-bold transition-all ${
                  mobileTab === 'clockin' ? 'bg-emerald-500 text-slate-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Clock In
              </button>
              <button
                onClick={() => setMobileTab('leave')}
                className={`px-3.5 py-1.5 rounded-xl font-bold transition-all ${
                  mobileTab === 'leave' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Leave
              </button>
              <button
                onClick={() => setMobileTab('payslip')}
                className={`px-3.5 py-1.5 rounded-xl font-bold transition-all ${
                  mobileTab === 'payslip' ? 'bg-purple-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Payslip
              </button>
              <button
                onClick={() => setMobileTab('claims')}
                className={`px-3.5 py-1.5 rounded-xl font-bold transition-all ${
                  mobileTab === 'claims' ? 'bg-amber-500 text-slate-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Claims
              </button>
            </div>

            {/* Smartphone Outer Housing */}
            <div className="w-full max-w-[340px] bg-slate-950 p-5 rounded-[44px] border-4 border-slate-800 shadow-2xl space-y-4 text-white">
              
              {/* Phone Status Bar */}
              <div className="flex justify-between items-center text-[10px] text-slate-400 px-2 pt-1 font-mono">
                <span>9:41 AM</span>
                <div className="w-20 h-4 bg-slate-900 rounded-full mx-auto" />
                <span>5G 100%</span>
              </div>

              {/* App Header */}
              <div className="bg-slate-900 p-3.5 rounded-2xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-500 text-slate-950 font-black flex items-center justify-center text-xs">
                    TW
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Tan Wei Ming</span>
                    <span className="text-[10px] text-emerald-400 font-semibold">Senior Engineer</span>
                  </div>
                </div>
                <span className="text-[9px] font-extrabold px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded border border-emerald-500/30">
                  DEMO DATA
                </span>
              </div>

              {/* Dynamic Screen View 1: Clock In */}
              {mobileTab === 'clockin' && (
                <div className="space-y-3 animate-fadeIn">
                  <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 text-center space-y-2">
                    <MapPin className="w-8 h-8 text-emerald-400 mx-auto" />
                    <span className="text-xs font-bold text-white block">Singapore HQ • Office Geo-fence</span>
                    <span className="text-[11px] text-emerald-400 font-mono block">Clocked In at 08:58 AM</span>
                  </div>
                  <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/30 text-center text-xs font-bold text-emerald-400">
                    Status: On Duty (7.5 hrs logged)
                  </div>
                </div>
              )}

              {/* Dynamic Screen View 2: Leave */}
              {mobileTab === 'leave' && (
                <div className="space-y-3 animate-fadeIn">
                  <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Annual Leave Balance:</span>
                      <span className="font-bold text-emerald-400 font-mono">14 Days</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Medical Leave Balance:</span>
                      <span className="font-bold text-blue-400 font-mono">14 Days</span>
                    </div>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-[11px] text-slate-300">
                    Recent: 18 Aug - 20 Aug Annual Leave (Approved)
                  </div>
                </div>
              )}

              {/* Dynamic Screen View 3: Payslip */}
              {mobileTab === 'payslip' && (
                <div className="space-y-3 animate-fadeIn">
                  <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-white">Aug 2026 Itemised Payslip</span>
                      <span className="text-emerald-400 font-bold font-mono">$4,397.00</span>
                    </div>
                    <p className="text-[10px] text-slate-400">Includes Employee CPF (-$1,100) & SHG (-$3)</p>
                  </div>
                  <div className="p-2.5 bg-purple-500/10 text-purple-300 rounded-xl border border-purple-500/30 text-center text-xs font-bold">
                    PDF Itemised Payslip Ready
                  </div>
                </div>
              )}

              {/* Dynamic Screen View 4: Claims */}
              {mobileTab === 'claims' && (
                <div className="space-y-3 animate-fadeIn">
                  <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 text-center space-y-2">
                    <Camera className="w-8 h-8 text-amber-400 mx-auto" />
                    <span className="text-xs font-bold text-white block">Client Dinner Receipt Capture</span>
                    <span className="text-[11px] text-amber-400 font-mono block">$142.50 • Pending Review</span>
                  </div>
                </div>
              )}

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
