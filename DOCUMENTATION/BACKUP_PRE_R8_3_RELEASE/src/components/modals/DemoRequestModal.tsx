import React, { useState, useRef } from 'react';
import { X, CheckCircle2, Calendar, Users, Building, Mail, Phone, User, Sparkles } from 'lucide-react';
import { DemoFormData } from '../../types';
import { useModalFocusTrap } from '../../utils/useModalFocusTrap';

interface DemoRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialModule?: string;
  selectedPlan?: 'general' | 'essential' | 'professional' | 'business';
}

export const DemoRequestModal: React.FC<DemoRequestModalProps> = ({
  isOpen,
  onClose,
  initialModule,
  selectedPlan = 'general'
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<DemoFormData>({
    fullName: '',
    workEmail: '',
    phone: '',
    companyName: '',
    employeeCount: '11-50',
    modules: initialModule ? [initialModule] : ['Singapore Payroll', 'Leave & Attendance'],
    preferredDate: '',
    notes: '',
    preferredContact: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);

  const resetAndClose = () => {
    setSubmitted(false);
    setSubmitError(null);
    setIsSubmitting(false);
    onClose();
  };

  useModalFocusTrap(isOpen, modalRef, resetAndClose);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check: If the hidden field has a value, silently reject
    if (honeypotRef.current && honeypotRef.current.value) {
      setSubmitted(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const payload = {
        type: 'demo',
        plan: typeof selectedPlan === 'string' ? selectedPlan : 'general',
        name: String(formData.fullName || ''),
        email: String(formData.workEmail || ''),
        company: String(formData.companyName || ''),
        employeeCount: String(formData.employeeCount || ''),
        phone: String(formData.phone || ''),
        preferredContact: String(formData.preferredContact || 'email'),
        message: String(formData.notes || ''),
        modules: Array.isArray(formData.modules) ? formData.modules.map(String) : [],
        preferredDate: String(formData.preferredDate || ''),
        website_url: '' // Will be empty if legit
      };

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      let data: any = {};
      try {
        const text = await response.text();
        data = text ? JSON.parse(text) : {};
      } catch (parseError) {
        console.error('Failed to parse response:', parseError);
      }

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit request. Please try again or contact support.');
      }

      setSubmitted(true);
    } catch (err: any) {
      setSubmitError(err.message || 'We couldn\'t submit your request right now. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModuleToggle = (moduleName: string) => {
    setFormData(prev => ({
      ...prev,
      modules: prev.modules.includes(moduleName)
        ? prev.modules.filter(m => m !== moduleName)
        : [...prev.modules, moduleName]
    }));
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-fadeIn"
      onClick={resetAndClose}
    >
      <div 
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-modal-title"
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-6 text-white relative flex-shrink-0">
          <button
            onClick={resetAndClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-slate-800"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" /> Customized Walkthrough
          </div>
          <h3 id="demo-modal-title" className="text-2xl font-bold text-white">Book a Personalized ezyHR Demo</h3>
          <p className="text-slate-300 text-sm mt-1">
            Discover how ezyHR automates everyday HR and Singapore payroll for your team.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Demo Request Submitted!</h4>
              <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                Thanks — we've received your demo request.
                {selectedPlan && selectedPlan !== 'general' && (
                  <span className="block mt-2 font-medium">Interested plan: {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)}</span>
                )}
              </p>
              <div className="pt-4">
                <button
                  onClick={resetAndClose}
                  className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl text-sm transition-all shadow-md"
                >
                  Return to ezyHR
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tan Wei Ming"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-slate-900"
                    />
                  </div>
                </div>

                {/* Work Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="name@company.sg"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-slate-900"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Company Name *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Logistics Pte Ltd"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-slate-900"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Mobile / WhatsApp {formData.preferredContact === 'whatsapp' ? '*' : ''}
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required={formData.preferredContact === 'whatsapp'}
                      placeholder="+65 9123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-slate-900"
                      aria-required={formData.preferredContact === 'whatsapp'}
                    />
                  </div>
                </div>
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Choose how you'd prefer our team to contact you.
                </label>
                <div className="flex flex-wrap gap-3">
                  {(['email', 'whatsapp', 'either'] as const).map((method) => (
                    <label key={method} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value={method}
                        checked={formData.preferredContact === method}
                        onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value as 'email' | 'whatsapp' | 'either' })}
                        className="w-4 h-4 text-emerald-600 border-slate-300 focus:ring-emerald-500"
                      />
                      <span className="text-sm text-slate-700 capitalize">{method}</span>
                    </label>
                  ))}
                </div>
                {formData.preferredContact === 'whatsapp' && (
                  <p className="mt-2 text-xs text-slate-500" aria-live="polite">
                    By selecting WhatsApp, you agree that ezyHR may contact you about this enquiry via WhatsApp.
                  </p>
                )}
              </div>

              {/* Employee Count */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Company Employee Count
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {['1-10', '11-50', '51-200', '200+'].map((range) => (
                    <button
                      key={range}
                      type="button"
                      onClick={() => setFormData({ ...formData, employeeCount: range })}
                      className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all ${
                        formData.employeeCount === range
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-700 font-semibold ring-1 ring-emerald-500'
                          : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {range} employees
                    </button>
                  ))}
                </div>
              </div>

              {/* Modules of Interest */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Modules You Wish to Explore
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Core HR',
                    'Singapore Payroll (CPF/IR8A)',
                    'Time & Attendance',
                    'Leave Management',
                    'Claims & Expenses',
                    'Employee Self Service',
                    'Management Intelligence',
                    'AI HR Assistant',
                    'Security & PDPA'
                  ].map((mod) => {
                    const isSelected = formData.modules.includes(mod);
                    return (
                      <button
                        key={mod}
                        type="button"
                        onClick={() => handleModuleToggle(mod)}
                        className={`py-1.5 px-3 rounded-lg text-xs font-medium border transition-all ${
                          isSelected
                            ? 'bg-slate-900 text-white border-slate-900'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {isSelected ? '✓ ' : '+ '}{mod}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Preferred Date (Optional)
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-slate-900"
                  />
                </div>
              </div>

              {/* Hidden Honeypot Field */}
              <div className="hidden" aria-hidden="true">
                <label>Do not fill this out if you are human: <input type="text" name="website_url" ref={honeypotRef} tabIndex={-1} autoComplete="off" /></label>
              </div>

              {submitError && (
                <div className="p-3 bg-red-50 border border-red-100 rounded-xl text-xs text-red-600 font-medium">
                  {submitError}
                </div>
              )}

              <div className="pt-4 border-t border-slate-100 mt-2">
                <p className="text-[11px] text-slate-500 mb-4 leading-relaxed">
                  By submitting this form, you acknowledge that ezyHR may use the information provided to respond to your request in accordance with our <a href="/privacy-policy" className="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    🔒 No obligation. PDPA aligned data privacy.
                  </span>
                  <button
                    type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold rounded-xl text-sm shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Sending...' : 'Book Free Demo'}
                </button>
              </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
