import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { TrustStrip } from '../components/TrustStrip';
import { PersonaSelector } from '../components/PersonaSelector';
import { ProblemSection } from '../sections/ProblemSection';
import { PlatformOverview } from '../sections/PlatformOverview';
import { PricingTeaser } from '../components/PricingTeaser';
import { CoreHRSection } from '../sections/CoreHRSection';
import { AttendanceSection } from '../sections/AttendanceSection';
import { LeaveSection } from '../sections/LeaveSection';
import { SingaporePayrollSection } from '../sections/SingaporePayrollSection';
import { PayrollSimulatorSection } from '../sections/PayrollSimulatorSection';
import { PricingSection } from '../sections/PricingSection';
import { AiSection } from '../sections/AiSection';
import { EmployeeExperienceSection } from '../sections/EmployeeExperienceSection';
import { ManagementIntelligenceSection } from '../sections/ManagementIntelligenceSection';
import { BusinessBenefitsSection } from '../sections/BusinessBenefitsSection';
import { SecuritySection } from '../sections/SecuritySection';
import { IntegrationsSection } from '../sections/IntegrationsSection';
import { ImplementationSection } from '../sections/ImplementationSection';
import { FaqSection } from '../sections/FaqSection';
import { FinalCtaSection } from '../sections/FinalCtaSection';
import { SampleEmployeePayroll } from '../data/demoData';
import { useSEO } from '../hooks/useSEO';

interface LandingPageProps {
  handleOpenDemo: (planId?: any) => void;
  handleOpenTrial: (planId?: any) => void;
  handleOpenDemoWithModule: (moduleName: string) => void;
  setPayslipEmployee: (emp: SampleEmployeePayroll | null) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  handleOpenDemo,
  handleOpenTrial,
  handleOpenDemoWithModule,
  setPayslipEmployee
}) => {
  useSEO({
    title: 'Singapore HR & Payroll Software',
    description: 'ezyHR is a modern HRMS and automated payroll platform for Singapore SMEs. MOM & CPF compliant. Start your 14-day free trial today.',
    canonicalPath: '/',
  });

  return (
    <>
      <HeroSection onOpenDemo={handleOpenDemo} onOpenTrial={handleOpenTrial} />
      <TrustStrip />
      <ProblemSection />
      <PlatformOverview onSelectModule={handleOpenDemoWithModule} />
      <PricingTeaser />
      <PersonaSelector onOpenDemo={handleOpenDemo} onOpenTrial={handleOpenTrial} />
      <CoreHRSection />
      <AttendanceSection />
      <LeaveSection />
      <SingaporePayrollSection />
      <PayrollSimulatorSection onOpenPayslipModal={(emp) => setPayslipEmployee(emp)} />
      <PricingSection onOpenDemo={handleOpenDemo} onOpenTrial={handleOpenTrial} />
      <EmployeeExperienceSection />
      <AiSection />
      <ManagementIntelligenceSection />
      <BusinessBenefitsSection />
      <SecuritySection />
      <IntegrationsSection />
      <ImplementationSection />
      <FaqSection onOpenDemo={handleOpenDemo} />
      <FinalCtaSection onOpenDemo={handleOpenDemo} onOpenTrial={handleOpenTrial} />
    </>
  );
};
