import React, { useState, useRef } from 'react';
import { X, CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import { useModalFocusTrap } from '../../utils/useModalFocusTrap';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: 'general' | 'essential' | 'professional' | 'business';
}

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({ isOpen, onClose, selectedPlan = 'general' }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredContact, setPreferredContact] = useState<'email' | 'whatsapp' | 'either'>('email');

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
    
    // Honeypot check
    if (honeypotRef.current && honeypotRef.current.value) {
      setSubmitted(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'trial',
          plan: selectedPlan,
          name, 
          email,
          company,
          phone,
          preferredContact,
          website_url: '' // Will be empty if legit
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit request');
      }

      setSubmitted(true);
    } catch (err: any) {
      setSubmitError(err.message || 'We couldn\'t submit your request right now. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="trial-modal-title"
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 bg-slate-900 text-white relative">
          <button
            onClick={onClose}
            aria-label="Close trial window"
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-semibold rounded-full mb-3">
            14-Day Free Evaluation
          </div>
          <h3 id="trial-modal-title" className="text-xl font-bold">Start Your ezyHR Trial</h3>
          <p className="text-xs text-slate-300 mt-1">
            Experience Singapore HR & Payroll automation with full module access.
          </p>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Trial Request Submitted!</h4>
              <p className="text-xs text-slate-600">
                Thanks — we've received your free trial request.
                {selectedPlan && selectedPlan !== 'general' && (
                  <span className="block mt-2 font-medium">Interested plan: {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)}</span>
                )}
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-5 py-2 bg-slate-900 text-white text-xs font-semibold rounded-xl"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tan Wei Ming"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Company Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lion City Tech Pte Ltd"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Work Email</label>
                <input
                  type="email"
                  required
                  placeholder="hr@company.sg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  Mobile / WhatsApp {preferredContact === 'whatsapp' ? '*' : ''}
                </label>
                <input
                  type="tel"
                  required={preferredContact === 'whatsapp'}
                  placeholder="+65 9123 4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  aria-required={preferredContact === 'whatsapp'}
                />
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  Choose how you'd prefer our team to contact you.
                </label>
                <div className="flex flex-wrap gap-3">
                  {(['email', 'whatsapp', 'either'] as const).map((method) => (
                    <label key={method} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="trialPreferredContact"
                        value={method}
                        checked={preferredContact === method}
                        onChange={(e) => setPreferredContact(e.target.value as 'email' | 'whatsapp' | 'either')}
                        className="w-4 h-4 text-emerald-600 border-slate-300 focus:ring-emerald-500"
                      />
                      <span className="text-sm text-slate-700 capitalize">{method}</span>
                    </label>
                  ))}
                </div>
                {preferredContact === 'whatsapp' && (
                  <p className="mt-2 text-xs text-slate-500" aria-live="polite">
                    By selecting WhatsApp, you agree that ezyHR may contact you about this enquiry via WhatsApp.
                  </p>
                )}
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-slate-500">
                  No credit card required. Includes pre-loaded sample Singapore statutory payroll data for testing.
                </p>
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

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Request Free Trial'} <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
