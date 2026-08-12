# EZYHR R2 PREMIUM LANDING PAGE DESIGN SPECIFICATION

**Product:** ezyHR — Cloud HRMS & Payroll Platform for Singapore Businesses  
**Brand Initiative:** ezy SaaS by REALTEK ENGINEERING PTE. LTD. (Singapore UEN: 201723665M)  
**Target URL:** https://hr.ezy.sg/ | **Support:** support@hr.ezy.sg  
**Design Phase:** R2 Premium SaaS Redesign  

---

## 1. Design Direction & Brand Aesthetics

The ezyHR R2 redesign elevates the user experience into a world-class, premium international B2B SaaS product website comparable in polish and UX storytelling to platforms like brioHR, Rippling, Deel, and BambooHR, while remaining 100% original and specifically tailored for Singapore businesses.

### Brand Promise & Messages
- **Tagline / Promise:** *"SMART HR. SIMPLE PAYROLL."*
- **Primary Hero Headline:** *"HR & Payroll, Simplified for Singapore."*
- **Supporting Message:** *"Manage employees, attendance, leave, claims and payroll in one intelligent cloud platform."*
- **Brand Identity:** Enterprise-capable without enterprise complexity. Intelligent, trustworthy, approachable, modern, and human.

### Visual Palette & Tokens
- **Deep Navy (Primary Anchor):** `#0F172A` (Tailwind `slate-900` / `slate-950` - Headers, Dark Product Containers, Primary Text)
- **Emerald Green (Success & Payroll States):** `#10B981` (Tailwind `emerald-500` - Payroll completed, active badges, primary conversion highlights)
- **Royal Blue (Interactive & Product Accent):** `#2563EB` (Tailwind `blue-600` - Interactive buttons, secondary accents, links)
- **Light Gray Surface:** `#F8FAFC` (Tailwind `slate-50` - Light card contrast)
- **Muted Slate Text:** `#64748B` / `#94A3B8` (Tailwind `slate-400` / `slate-500`)
- **Typography:** `Inter` (Google Fonts), geometric hierarchy with generous whitespace, subtle 1px slate borders, and soft layered shadows.
- **Icon System:** Lucide React Icons (`lucide-react`).

---

## 2. Information Architecture & Progressive Storytelling Flow

The R2 page structure guides visitors through an engaging, progressive SaaS narrative:

```
[1. Sticky Header & Navigation] (Logo, Section Jump Links, Portal Login, Book Demo CTA)
   ↓
[2. Product-Led SaaS Hero] (Headline + Dual CTAs + Key Badges + Realistic Multi-Tab Dashboard Composition)
   ↓
[3. Verified Trust Strip] (Singapore Payroll • Cloud HRMS • CPF Automation • ESS App • AI-Assisted • Mobile Ready)
   ↓
[4. Problem → Solution Transition] ("HR shouldn't feel like spreadsheet management" → "ezyHR brings everything together")
   ↓
[5. Interactive Platform Ecosystem] (Visual Connected Graph: Employees ↔ Attendance ↔ Leave ↔ Claims ↔ Payroll ↔ Reporting ↔ AI ↔ Documents)
   ↓
[6. Core HR Module] (Product Screenshot + Explanatory Copy + Digital Master Files, Org Chart, ESS/MSS, Work Pass Expiry)
   ↓
[7. Time & Attendance Module] ("Know who's working. Know what's happening." + Live Attendance Radar & Mobile GPS Mockup)
   ↓
[8. Leave Management Module] ("Leave management without the paperwork." + Interactive Team Leave Calendar & Statutory Rules)
   ↓
[9. Singapore Statutory Payroll Engine] ("Singapore Payroll, without the spreadsheet headache." + 8-Step Workflow: Employee Data → CPF/IR8A → Bank GIRO)
   ↓
[10. Redesigned Interactive Payroll Simulator] (Live SGD Gross Salary Slider, Age Tiers, CPF/SDL/SHG Breakdown + MOM Itemized Payslip Modal)
   ↓
[11. Conversational AI Assistant] ("Your HR assistant, always ready." + Interactive Chat UI Query Demo & Status Badges)
   ↓
[12. Mobile-First Employee Experience] (Sleek Phone Frame: 1-Tap Clock-in, Mobile Payslips, Leave Requests, Receipt Capture)
   ↓
[13. Management Intelligence Center] (Executive Dashboard: Headcount distribution, Payroll outlay, Retention metrics)
   ↓
[14. Outcome-Driven Business Benefits] (Dramatically reduced admin, 100% payroll accuracy, instant executive visibility)
   ↓
[15. Enterprise Security & PDPA Alignment] ("Security designed for modern businesses" + Encryption, RBAC, MFA, Audit Logs, PDPA)
   ↓
[16. Verified Integrations Ecosystem] (Xero, QuickBooks, M365, Google Workspace, Slack, Teams, Biometric Terminals + Status Badges)
   ↓
[17. Implementation Methodology] (3-Step SME Onboarding: 01 Configure → 02 Import → 03 Go Live)
   ↓
[18. Transparent Pricing Architecture] (Starter, Professional, Enterprise tiers + Custom quote indicators)
   ↓
[19. Comprehensive FAQ Accordion] (14 Singapore Statutory HRMS FAQs + Live Keyword Search Filter)
   ↓
[20. Final Conversion CTA & Compliant Footer] ("Ready to simplify HR?" Dual CTAs + Parent Entity UEN: 201723665M)
```

---

## 3. Section-by-Section Specifications

### 1. Sticky Navigation (`src/components/navbar/Navbar.tsx`)
- **Logo:** Official `ezyHR` logo mark (`Logos/ezyhr-full-logo-dark.png` / styled text brand mark).
- **Links:** Platform, Features, Payroll, AI, Security, Pricing, FAQ.
- **Right Action Buttons:** Sign In (`https://hr.ezy.sg/`), Book a Demo (Triggers `DemoRequestModal`).
- **Mobile Menu:** Backdrop blur drawer menu with full keyboard focus support.

### 2. Product-Led SaaS Hero (`src/sections/HeroSection.tsx`)
- **Headline:** *"HR & Payroll, Simplified for Singapore."*
- **Supporting Text:** *"Manage employees, attendance, leave, claims and payroll in one intelligent cloud platform."*
- **Primary CTA:** `Book a Free Demo` (Opens `DemoRequestModal`)
- **Secondary CTA:** `Start Free Trial` (Opens `FreeTrialModal`)
- **Trust Badges:** `Singapore Payroll` | `Cloud HRMS` | `AI-Powered` | `Mobile Ready`
- **Dashboard Composition:** Interactive multi-tab ezyHR HRMS interface showing headcount stats, gross/net payroll totals, today's attendance radar, pending leave approvals, and recent statutory payroll transactions (`DEMO DATA`).

### 3. Verified Trust Strip (`src/sections/TrustStrip.tsx`)
- **Verified Features:** Singapore Payroll • Cloud HRMS • CPF & Statutory Payroll • Employee Self Service • AI-Assisted HR • Mobile Ready.
- **Compliance Rule:** No unverified customer metrics or fake numbers.

### 4. Problem → Solution Transition (`src/sections/ProblemSection.tsx`)
- **Headline:** *"HR shouldn't feel like spreadsheet management."*
- **8 Pain Points:** Manual payroll calculations, scattered attendance logs, unclear leave balances, lost employee files, email claims, compliance pressure, spreadsheet fatigue, repetitive administration.
- **Transition Visual:** *"ezyHR brings everything together into one unified cloud workspace."*

### 5. Interactive Platform Ecosystem (`src/sections/PlatformOverview.tsx`)
- **Headline:** *"One platform. One employee record. One source of truth."*
- **Interconnected Graph:** 10 core modules showing seamless data flow from Employee Records → Attendance/Leave → Statutory Payroll → Executive Analytics.

### 6. Core HR Module (`src/sections/CoreHRSection.tsx`)
- **Visual Presentation:** Large preview card + explanatory copy + bulleted capabilities for Employee Master, Digital Records, Org Chart, ESS, MSS, Document Vault, and Work Pass Expiry Alerts.

### 7. Time & Attendance Module (`src/sections/AttendanceSection.tsx`)
- **Headline:** *"Know who's working. Know what's happening."*
- **Features:** Mobile GPS Check-In, Web Portal Check-In, Kiosk QR Attendance, Shift & Roster Scheduling, Overtime (OT) Engine, Automated Timesheet Export.
- **Dashboard Visual:** Live Attendance Radar displaying Present, Late, Absent, Overtime, and Shift status.

### 8. Leave Management Module (`src/sections/LeaveSection.tsx`)
- **Headline:** *"Leave management without the paperwork."*
- **Features:** Real-time Statutory Balances (Annual, MC, Hospitalization, Childcare), One-click Approval Workflows, Team Leave Calendar preview.

### 9. Singapore Statutory Payroll Engine (`src/sections/SingaporePayrollSection.tsx`)
- **Headline:** *"Singapore Payroll, without the spreadsheet headache."*
- **8-Step Workflow:** Employee Master Data → Attendance & OT → Leave & Claims → CPF & Statutory Math → Bank GIRO Export → IRAS AIS & IR8A Export → Itemized Payslips.
- **Statutory Coverage:** CPF, SDL, SHG (CDAC, ECF, SINDA, MBMF), IRAS AIS, IR8A/IR8S, Bank GIRO. Wording: *"Built around Singapore payroll requirements."*

### 10. Redesigned Interactive Payroll Simulator (`src/sections/PayrollSimulatorSection.tsx`)
- **Interactive Demonstrator:** Live SGD Gross Salary slider ($2,000–$12,000), Employee Age Tiers, Residency Status (SC vs EP), real-time CPF Employee/Employer breakdown, SDL, SHG, and Net Salary output.
- **Modal Trigger:** `View Sample MOM Itemized Payslip` button opens `PayslipPreviewModal.tsx`. Clearly tagged with `DEMO DATA`.

### 11. Conversational AI HR Assistant (`src/sections/AiSection.tsx`)
- **Headline:** *"Your HR assistant, always ready."*
- **Interactive Query Demo:** Displays a sample conversational prompt (*"Which employees have unusual payroll changes this month?"* → *"3 employees require review..."*) labeled as `DEMONSTRATION DATA`.
- **Status Badges:** Implemented features marked `AVAILABLE`, unreleased marked `COMING SOON`.

### 12. Mobile-First Employee Experience (`src/sections/EmployeeExperienceSection.tsx`)
- **Phone Frame Visual:** 1-Tap GPS Clock-in/out, Mobile Leave Requests, Instant Itemized Payslips, Photo Receipt Claim Upload.

### 13. Management Intelligence Center (`src/sections/ManagementIntelligenceSection.tsx`)
- **Executive Analytics:** Interactive tab switcher toggling Department Headcount Distribution, Payroll Outlay Breakdown, and Retention Metrics (`DEMO DATA`).

### 14. Business Benefits (`src/sections/BusinessBenefitsSection.tsx`)
- **Outcome Focus:** Less administration, 100% payroll calculation accuracy, centralized employee information, real-time executive visibility, modern employee experience.

### 15. Enterprise Security & PDPA (`src/sections/SecuritySection.tsx`)
- **Headline:** *"Security designed for modern businesses."*
- **Pillars:** TLS 1.3 in transit, AES-256 at rest, Role-Based Access Control (RBAC), Multi-Factor Authentication (MFA), Audit Logs, Backups, Singapore PDPA alignment.

### 16. Verified Integrations (`src/sections/IntegrationsSection.tsx`)
- **Grid:** Xero, QuickBooks, M365, Google Workspace, Slack, Teams, Biometric Terminals (Tagged `AVAILABLE` / `COMING SOON`).

### 17. Implementation Methodology (`src/sections/ImplementationSection.tsx`)
- **3 Steps:** `01 Configure` → `02 Import` → `03 Go Live`.

### 18. Pricing Architecture (`src/sections/PricingSection.tsx`)
- **Tiers:** Starter (SMEs), Professional (Growing teams), Enterprise (Multi-entity).
- **CTA:** `Book a Free Demo` & `Contact Enterprise Sales` with custom quote disclosures.

### 19. Comprehensive FAQ Accordion (`src/sections/FaqSection.tsx`)
- **Content:** 14 factual questions with live keyword search filter and category toggles.

### 20. Final CTA & Compliant Footer (`src/sections/FinalCtaSection.tsx` & `Footer.tsx`)
- **Final CTA:** *"Ready to simplify HR?"* with dual buttons.
- **Footer:** Brand tagline *"Smart HR. Simple Payroll."*, parent entity disclaimer: *"ezyHR is a SaaS product operated under the ezy SaaS initiative of REALTEK ENGINEERING PTE. LTD. (Singapore UEN: 201723665M)"*, support email `support@hr.ezy.sg`.

---

## 4. Component Reuse & Incrementality Plan

- **Working Business Logic Preserved:** All existing reactive state (salary calculator math, demo form validation, modal popups, FAQ search filtering) remains fully functional.
- **UI & Content Elevation:** Refactor visual layout containers to incorporate generous padding, modern dark glass containers, high-contrast typography, and enhanced interactive indicators.
- **Zero Architecture Changes:** Continue using React 18, Vite 5, TypeScript 5, Tailwind CSS 3, Lucide Icons, and Framer Motion.

---

## 5. SEO, Accessibility & Performance Strategy

- **SEO Metadata:** Title: `ezyHR | Singapore HRMS & Payroll Software`, Meta description, Canonical URL, OpenGraph, JSON-LD Schemas (Organization, SoftwareApplication).
- **Accessibility:** WCAG 2.2 AA (Visible focus rings, keyboard tab navigation, screen reader ARIA labels, high-contrast text).
- **Performance:** Production build optimization, lazy image rendering, target >90 Lighthouse score.
