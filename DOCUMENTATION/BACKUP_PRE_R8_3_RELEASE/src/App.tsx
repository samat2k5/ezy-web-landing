import React, { useState, useEffect } from 'react';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';

import { DemoRequestModal } from './components/modals/DemoRequestModal';
import { FreeTrialModal } from './components/modals/FreeTrialModal';
import { PayslipPreviewModal } from './components/modals/PayslipPreviewModal';
import { SampleEmployeePayroll } from './data/demoData';

import { LandingPage } from './pages/LandingPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { PaymentRefundPolicy } from './pages/PaymentRefundPolicy';

export function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  
  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [initialModuleForDemo, setInitialModuleForDemo] = useState<string | undefined>(undefined);
  const [payslipEmployee, setPayslipEmployee] = useState<SampleEmployeePayroll | null>(null);

  const [selectedPlan, setSelectedPlan] = useState<'essential' | 'professional' | 'business' | 'general'>('general');

  const handleOpenDemoWithModule = (moduleName: string) => {
    setInitialModuleForDemo(moduleName);
    setSelectedPlan('general');
    setIsDemoModalOpen(true);
  };

  const handleOpenDemo = (planId?: any) => {
    setInitialModuleForDemo(undefined);
    const plan = typeof planId === 'string' && ['general', 'essential', 'professional', 'business'].includes(planId) 
      ? planId as 'general' | 'essential' | 'professional' | 'business' 
      : 'general';
    setSelectedPlan(plan);
    setIsDemoModalOpen(true);
  };

  const handleOpenTrial = (planId?: any) => {
    const plan = typeof planId === 'string' && ['general', 'essential', 'professional', 'business'].includes(planId) 
      ? planId as 'general' | 'essential' | 'professional' | 'business' 
      : 'general';
    setSelectedPlan(plan);
    setIsTrialModalOpen(true);
  };

  // Basic Routing
  let pageContent;
  switch (currentPath) {
    case '/privacy-policy':
      pageContent = <PrivacyPolicy />;
      break;
    case '/terms-of-service':
      pageContent = <TermsOfService />;
      break;
    case '/payment-refund-policy':
      pageContent = <PaymentRefundPolicy />;
      break;
    case '/':
    default:
      pageContent = (
        <LandingPage 
          handleOpenDemo={handleOpenDemo}
          handleOpenTrial={handleOpenTrial}
          handleOpenDemoWithModule={handleOpenDemoWithModule}
          setPayslipEmployee={setPayslipEmployee}
        />
      );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-500 selection:text-white flex flex-col">
      
      {/* Sticky Header & Navigation */}
      <Navbar 
        onOpenDemo={handleOpenDemo}
        onOpenTrial={handleOpenTrial}
      />

      <main className="flex-1">
        {pageContent}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Conversion Modals */}
      <DemoRequestModal 
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        initialModule={initialModuleForDemo}
        selectedPlan={selectedPlan}
      />

      <FreeTrialModal 
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
        selectedPlan={selectedPlan}
      />

      {payslipEmployee && (
        <PayslipPreviewModal 
          isOpen={!!payslipEmployee}
          onClose={() => setPayslipEmployee(null)}
          employee={payslipEmployee}
        />
      )}

    </div>
  );
}

export default App;
