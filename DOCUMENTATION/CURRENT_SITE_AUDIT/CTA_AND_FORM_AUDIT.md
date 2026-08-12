# CTA AND FORM AUDIT REPORT

## 1. Call to Action (CTA) Inventory

| CTA Text | Location | Action / Destination | Status | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Book a Free Demo** | Sticky Navbar (Desktop & Mobile) | Opens `DemoRequestModal.tsx` | WORKING | Triggers interactive modal with form validation |
| **Sign In** | Sticky Navbar | Redirects to `https://hr.ezy.sg/` | WORKING | Opens live customer portal in new tab |
| **Book a Free Demo** | Hero Section | Opens `DemoRequestModal.tsx` | WORKING | Primary hero action button |
| **Start Free Trial** | Hero Section | Opens `FreeTrialModal.tsx` | WORKING | Secondary hero action button |
| **Book Demo for [Module]** | Platform Overview Panel | Opens `DemoRequestModal.tsx` | WORKING | Passes pre-selected module name into modal |
| **Test Payroll Simulator** | Payroll Simulator Section | Opens `PayslipPreviewModal.tsx` | WORKING | Opens sample MOM itemized payslip viewer |
| **Book Demo for Starter** | Pricing Section (Starter) | Opens `DemoRequestModal.tsx` | WORKING | Pricing tier action button |
| **Book Demo for Professional**| Pricing Section (Professional) | Opens `DemoRequestModal.tsx` | WORKING | Pricing tier action button |
| **Contact Enterprise Sales** | Pricing Section (Enterprise) | Opens `DemoRequestModal.tsx` | WORKING | Enterprise tier action button |
| **Speak to a Specialist** | FAQ Section | Opens `DemoRequestModal.tsx` | WORKING | FAQ conversion trigger |
| **Book a Free Demo** | Final CTA Section | Opens `DemoRequestModal.tsx` | WORKING | Final bottom CTA |
| **Start Free Trial** | Final CTA Section | Opens `FreeTrialModal.tsx` | WORKING | Final bottom CTA |
| **support@hr.ezy.sg** | Global Footer | `mailto:support@hr.ezy.sg` | WORKING | Direct email link |

---

## 2. Interactive Form Audit

### A. Demo Request Form (`DemoRequestModal.tsx`)
- **Fields:** Full Name (Text), Work Email (Email), Company Name (Text), Phone (Tel), Employee Count (Single Choice: 1-10, 11-50, 51-200, 200+), Modules of Interest (Multi-select pills), Preferred Date (Date), Notes (Textarea).
- **Validation:** Required attributes on Name, Email, Company, and Phone.
- **Submit Behavior:** Client-side event handler updates `submitted` state and displays a personalized confirmation message with PDPA privacy assurance.

### B. Free Trial Signup Form (`FreeTrialModal.tsx`)
- **Fields:** Company Name (Text), Work Email (Email).
- **Validation:** Required attributes on both inputs.
- **Submit Behavior:** Displays instant sandbox activation confirmation text.

### C. Live Singapore Payroll Calculator Form (`PayrollSimulatorSection.tsx`)
- **Fields:** Monthly Gross Salary Slider ($2,000–$12,000 SGD), Employee Age Group (Under 55, 55-60, 60-65, Above 65), Residency Status (Singapore Citizen vs Employment Pass).
- **Behavior:** Real-time client-side statutory math algorithm updates Employee CPF, Employer CPF, SDL, and Net Pay estimates with explicit `DEMO DATA` badge.
