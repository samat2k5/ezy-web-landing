import React, { useState } from 'react';
import { Navbar } from './components/navbar/Navbar';
import { HeroSection } from './sections/HeroSection';
import { TrustStrip } from './components/TrustStrip';
import { PersonaSelector } from './components/PersonaSelector';
import { ProblemSection } from './sections/ProblemSection';
import { PlatformOverview } from './sections/PlatformOverview';
import { PricingTeaser } from './components/PricingTeaser';
import { CoreHRSection } from './sections/CoreHRSection';
import { AttendanceSection } from './sections/AttendanceSection';
import { LeaveSection } from './sections/LeaveSection';
import { SingaporePayrollSection } from './sections/SingaporePayrollSection';
import { PayrollSimulatorSection } from './sections/PayrollSimulatorSection';
import { PricingSection } from './sections/PricingSection';
import { AiSection } from './sections/AiSection';
import { EmployeeExperienceSection } from './sections/EmployeeExperienceSection';
import { ManagementIntelligenceSection } from './sections/ManagementIntelligenceSection';
import { BusinessBenefitsSection } from './sections/BusinessBenefitsSection';
import { SecuritySection } from './sections/SecuritySection';
import { IntegrationsSection } from './sections/IntegrationsSection';
import { ImplementationSection } from './sections/ImplementationSection';
import { FaqSection } from './sections/FaqSection';
import { FinalCtaSection } from './sections/FinalCtaSection';
import { Footer } from './components/footer/Footer';

import { DemoRequestModal } from './components/modals/DemoRequestModal';
import { FreeTrialModal } from './components/modals/FreeTrialModal';
import { PayslipPreviewModal } from './components/modals/PayslipPreviewModal';
import { SampleEmployeePayroll } from './data/demoData';

export function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [initialModuleForDemo, setInitialModuleForDemo] = useState<string | undefined>(undefined);
  const [payslipEmployee, setPayslipEmployee] = useState<SampleEmployeePayroll | null>(null);

  const handleOpenDemoWithModule = (moduleName: string) => {
    setInitialModuleForDemo(moduleName);
    setIsDemoModalOpen(true);
  };

  const handleOpenDemo = () => {
    setInitialModuleForDemo(undefined);
    setIsDemoModalOpen(true);
  };

  const handleOpenTrial = () => {
    setIsTrialModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* Sticky Header & Navigation */}
      <Navbar 
        onOpenDemo={handleOpenDemo}
        onOpenTrial={handleOpenTrial}
      />

      <main>
        {/* 1. Hero Section */}
        <HeroSection 
          onOpenDemo={handleOpenDemo}
          onOpenTrial={handleOpenTrial}
        />

        {/* 2. Trust Positioning Strip */}
        <TrustStrip />

        {/* 3. The Problem & Transition */}
        <ProblemSection />

        {/* 4. Connected Module Ecosystem */}
        <PlatformOverview 
          onSelectModule={handleOpenDemoWithModule}
        />

        {/* 4b. Early Pricing Signal — compact teaser after Platform Overview */}
        <PricingTeaser />

        {/* 5. Persona Conversion Path */}
        <PersonaSelector 
          onOpenDemo={handleOpenDemo}
          onOpenTrial={handleOpenTrial}
        />

        {/* 6. Core HR & Digital Employee Master Records */}
        <CoreHRSection />

        {/* 7. Time & Attendance */}
        <AttendanceSection />

        {/* 8. Leave Management */}
        <LeaveSection />

        {/* 9. Singapore Statutory Payroll Engine */}
        <SingaporePayrollSection />

        {/* 10. Interactive Live Singapore Payroll Simulator */}
        <PayrollSimulatorSection 
          onOpenPayslipModal={(emp) => setPayslipEmployee(emp)}
        />

        {/* 11. Transparent Pricing — immediately after Payroll Simulator for commercial journey */}
        <PricingSection 
          onOpenDemo={handleOpenDemo}
          onOpenTrial={handleOpenTrial}
        />

        {/* 12. AI HR Assistant & Insights */}
        <AiSection />

        {/* 13. Mobile-First Employee Experience */}
        <EmployeeExperienceSection />

        {/* 14. Management Intelligence Dashboard */}
        <ManagementIntelligenceSection />

        {/* 15. Business Outcomes & Impact */}
        <BusinessBenefitsSection />

        {/* 16. Enterprise Security & PDPA */}
        <SecuritySection />

        {/* 17. Integrations Ecosystem */}
        <IntegrationsSection />

        {/* 18. Getting Started / Implementation */}
        <ImplementationSection />

        {/* 19. Comprehensive FAQ Accordion */}
        <FaqSection 
          onOpenDemo={handleOpenDemo}
        />

        {/* 20. Final Conversion CTA */}
        <FinalCtaSection 
          onOpenDemo={handleOpenDemo}
          onOpenTrial={handleOpenTrial}
        />
      </main>

      {/* 21. Global Footer */}
      <Footer />

      {/* Interactive Conversion Modals */}
      <DemoRequestModal 
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        initialModule={initialModuleForDemo}
      />

      <FreeTrialModal 
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
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
