# ezyHR.sg — R7.1 / R7.2 Conversion, Trust & Product Credibility Audit Report

**Date**: August 13, 2026  
**Project**: ezyHR.sg Standalone Marketing Website  
**Release**: R7.2 Conversion + Trust + Product Credibility + Singapore Positioning  
**Execution Mode**: **LOCAL IMPLEMENTATION ONLY — STOPPED BEFORE DEPLOYMENT**  
**Build Result**: ✅ **PASSED (0 Errors)** — `npm run build` (`tsc && vite build`)  
**Visual QA Result**: ✅ **PASSED (6 Viewport Screenshots Verified)**  

---

## 1. Persona-Based Conversion Funnel Audit

To eliminate messaging ambiguity for key decision-makers, R7.2 introduced an interactive **Persona Selector** component (`src/components/PersonaSelector.tsx`) targeting four core buyer personas:

### 1.1 Singapore SME Owner
- **Primary Need**: Frictionless HR and payroll management without maintaining a dedicated HR department.
- **Conversion Value Prop**: *"Spend less time on HR administration and more time running your business."*
- **Trust Elements**: Automated 2026 CPF OW ceiling ($8,000) enforcement, zero credit card requirement, instant sandbox demo.

### 1.2 HR Manager
- **Primary Need**: Single consolidated workspace for employee master records, leave approvals, and time tracking.
- **Conversion Value Prop**: *"Manage people, attendance, leave and payroll from one connected workspace."*
- **Trust Elements**: Employee Self-Service (ESS) mobile access, automated leave calculations, digital audit trails.

### 1.3 Finance & Payroll Manager
- **Primary Need**: 100% accurate Singapore statutory calculations, Bank GIRO file exports, and IRAS AIS filing.
- **Conversion Value Prop**: *"Run payroll with Singapore statutory calculations and transparent payroll workflows."*
- **Trust Elements**: Exact statutory rounding (`Math.floor()` employee CPF, `Math.round()` employer CPF), $2.00–$11.25 SDL bounds, supported file formats (`DBS`, `UOB`, `OCBC`, `HSBC`, `IRAS AIS .xml`).

### 1.4 Managing Director / Executive
- **Primary Need**: Executive-level visibility into headcount, payroll costs, and compliance risks.
- **Conversion Value Prop**: *"See workforce and payroll information clearly — without chasing spreadsheets."*
- **Trust Elements**: Real-time management intelligence dashboards, role-based security, PDPA data handling disclosures.

---

## 2. Trust & Credibility Reinforcement Matrix

| Trust Element | Implementation Location | Commercial Rationale |
|---------------|-------------------------|----------------------|
| **Hero Trust Microcopy** | `src/sections/HeroSection.tsx` | Reinforces Singapore focus: *"Built around Singapore HR & payroll workflows. No credit card required."* |
| **Compact Trust Strip** | `src/components/TrustStrip.tsx` | Provides immediate validation of Singapore Statutory Payroll, ESS, Attendance, Audit Visibility, and Secure HR Data without fake testimonials. |
| **Bank GIRO & IRAS Proof** | `src/sections/SingaporePayrollSection.tsx` | Shows exact file format compatibility (`DBS GIRO`, `UOB Payables`, `OCBC GIRO`, `HSBC GIRO`, `IRAS AIS`) framed accurately as supported export formats. |
| **Demo Data Disclosures** | All Product Mockups | Clearly labels all mockup UI components with `DEMO DATA` to maintain 100% honesty and legal integrity. |
| **Legal Entity Disclosure** | `Footer.tsx` & Modals | Displays `REALTEK ENGINEERING PTE. LTD.` (UEN: `201723665M`) and support email `support@hr.ezy.sg`. |

---

## 3. CTA Standardization Audit

All call-to-action buttons across the website have been standardized to present two clear conversion paths:
- **Primary Action**: `Book a Free Demo` (Triggers `DemoRequestModal` with initial module selection)
- **Secondary Action**: `Start Free Trial` (Triggers `FreeTrialModal` 14-day evaluation sandbox)

---

## 4. Audit Conclusion

The R7.2 conversion and trust enhancements significantly improve buyer clarity, statutory proof, and persona relevance while preserving 100% of the approved R5.1/R6 visual identity and statutory calculation engine.
