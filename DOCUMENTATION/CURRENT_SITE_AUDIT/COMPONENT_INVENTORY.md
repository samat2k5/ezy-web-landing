# EXISTING COMPONENT ARCHITECTURE INVENTORY

| Component Name | File Path | Purpose | Reusable? |
| :--- | :--- | :--- | :--- |
| `App` | `src/App.tsx` | Main application container, section layout, and modal state management | NO (Root Container) |
| `Navbar` | `src/components/navbar/Navbar.tsx` | Sticky header navigation, logo rendering, portal sign in, mobile drawer | YES |
| `Footer` | `src/components/footer/Footer.tsx` | Global footer with legal entity disclaimer, UEN, links, and support email | YES |
| `HeroSection` | `src/sections/HeroSection.tsx` | Headline, supporting tagline, dual CTAs, badges, and interactive dashboard mockup | YES |
| `TrustStrip` | `src/sections/TrustStrip.tsx` | Positioning bar with 6 verified Singapore HRMS pillars | YES |
| `ProblemSection` | `src/sections/ProblemSection.tsx` | Pain point cards ("HR shouldn't feel like spreadsheet management") | YES |
| `PlatformOverview` | `src/sections/PlatformOverview.tsx` | Interactive connected 10-module grid and data flow diagram | YES |
| `CoreHRSection` | `src/sections/CoreHRSection.tsx` | Core HR employee master files, org chart, ESS/MSS, document expiry alerts | YES |
| `AttendanceSection` | `src/sections/AttendanceSection.tsx` | Mobile/web check-in, GPS geofencing, shift scheduling, overtime rules | YES |
| `LeaveSection` | `src/sections/LeaveSection.tsx` | Statutory & custom leave categories, balance tracking, team leave calendar | YES |
| `SingaporePayrollSection` | `src/sections/SingaporePayrollSection.tsx` | 6-step Singapore statutory payroll workflow (CPF, SDL, SHG, AIS/IR8A, GIRO) | YES |
| `PayrollSimulatorSection` | `src/sections/PayrollSimulatorSection.tsx` | Live interactive CPF & Net Pay calculator simulator with DEMO DATA | YES |
| `AiSection` | `src/sections/AiSection.tsx` | AI HR Assistant capabilities, policy Q&A, anomaly detection, status badges | YES |
| `EmployeeExperienceSection` | `src/sections/EmployeeExperienceSection.tsx` | Mobile ESS app screen frame (clock-in, leave, payslips, receipt capture) | YES |
| `ManagementIntelligenceSection` | `src/sections/ManagementIntelligenceSection.tsx` | Executive analytics dashboard for headcount, payroll outlay, retention | YES |
| `BusinessBenefitsSection` | `src/sections/BusinessBenefitsSection.tsx` | Outcome-driven visual storytelling cards | YES |
| `SecuritySection` | `src/sections/SecuritySection.tsx` | Enterprise-grade cloud security, encryption, RBAC, MFA, PDPA alignment | YES |
| `IntegrationsSection` | `src/sections/IntegrationsSection.tsx` | Software ecosystem grid (Xero, QuickBooks, M365, Google, Slack, Teams) | YES |
| `ImplementationSection` | `src/sections/ImplementationSection.tsx` | 3-step onboarding methodology (Configure → Import → Go Live) | YES |
| `PricingSection` | `src/sections/PricingSection.tsx` | Starter, Professional, Enterprise tier matrices with Demo CTAs | YES |
| `FaqSection` | `src/sections/FaqSection.tsx` | 14 Singapore HRMS & Payroll FAQs with live keyword search filter | YES |
| `FinalCtaSection` | `src/sections/FinalCtaSection.tsx` | High-converting final conversion block with dual CTAs | YES |
| `DemoRequestModal` | `src/components/modals/DemoRequestModal.tsx` | Interactive demo booking popup with form validation and instant feedback | YES |
| `FreeTrialModal` | `src/components/modals/FreeTrialModal.tsx` | Streamlined 14-day free evaluation signup modal | YES |
| `PayslipPreviewModal` | `src/components/modals/PayslipPreviewModal.tsx` | Sample MOM itemized Singapore payslip document viewer | YES |
