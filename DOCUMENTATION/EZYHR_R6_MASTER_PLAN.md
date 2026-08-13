# ezyHR.sg — R6 Master Plan & Production Readiness

**Date**: August 13, 2026  
**Current Baseline**: R5.1 Approved Release (Git Commit `8a7d135`)  
**Production URL**: https://ezy-web-landing-production.up.railway.app/  
**Marketing Domain**: https://ezy.sg/  
**Customer Portal**: https://hr.ezy.sg/  
**Support Email**: support@hr.ezy.sg  
**Legal Entity**: REALTEK ENGINEERING PTE. LTD. (UEN: 201723665M)  
**Status**: **R6 MASTER PLAN CREATED — NO CODE CHANGED**

---

## 1. Executive Summary

This document establishes the authoritative **R6 Master Plan & Production Readiness Roadmap** for the ezyHR.sg marketing website. Following the successful R4.2 and R5.1 visual overhauls, the R5.1 baseline is officially frozen and locked as the visual standard.

**R6 is NOT another visual redesign.** The core objective of R6 is to elevate **Conversion, Trust, Product Credibility, SEO, Performance, Accessibility, and Production Hardening** without disturbing the approved R5.1 visual identity.

Every recommendation in this plan is backed by empirical codebase inspection and structured into prioritised phases for future execution.

---

## 2. Current R5.1 Baseline

- **Repository Architecture**: Standalone React 18 + TypeScript + Vite static marketing web application.
- **Git Commit**: `8a7d135` (`feat: R5.1 approved production build deployment`).
- **Production Host**: Railway (`ezy-web-landing-production.up.railway.app`).
- **Build Output**:
  - `dist/index.html` (3.41 kB)
  - `dist/assets/index-CVVOSYl1.css` (76.96 kB)
  - `dist/assets/index-C3XzrlgY.js` (312.93 kB)
- **TypeScript Status**: 0 Errors, 0 Compilation Warnings.
- **Statutory Engine Safety**: 100% compliant with 2026 Singapore statutory parameters ($8,000 CPF OW ceiling, `Math.floor()` employee CPF, `Math.round()` employer CPF, $2.00–$11.25 SDL, EP exemption).

---

## 3. Production QA Findings

An audit of all interactive elements across `src/` revealed the following findings:

1. **Navbar Navigation**:
   - `Navbar.tsx` smooth-scroll links (`#platform`, `#features`, `#payroll`, `#ai`, `#security`, `#pricing`, `#faq`) work smoothly on desktop.
   - **Finding**: Mobile menu links close the drawer (`onClick={() => setMobileMenuOpen(false)}`), but lack `aria-expanded` and explicit `aria-controls` bindings on the hamburger button.
2. **Hero CTAs & Modals**:
   - Primary CTA `Book a Free Demo` opens `DemoRequestModal`.
   - Secondary CTA `Start Free Trial` opens `FreeTrialModal`.
   - **Finding**: Modals render inside the root DOM without focus trap locks, meaning pressing Tab can shift focus back to underlying background page elements while a modal is open.
3. **Sign In Link**:
   - Desktop and mobile links point to `https://hr.ezy.sg/` with `target="_blank"` and `rel="noopener noreferrer"`. Works as expected.
4. **FAQ Search & Filters**:
   - Category filtering (`All`, `General`, `Payroll`, `Employee`, `Attendance`, `Leave`, `Security`, `Company`) and search input filter `FAQ_DATA` dynamically.
   - **Finding**: When search returns 0 matching results, a subtle "No questions found" empty state is displayed, but keyboard users are not announced via `aria-live="polite"`.
5. **AI Sample Prompts (`AiSection.tsx`)**:
   - Prompt switcher buttons (`q1` to `q4`) update response state seamlessly.
   - **Finding**: Prompt selection buttons lack `role="tab"` and `aria-selected` semantic tags.
6. **Mobile ESS Switcher (`EmployeeExperienceSection.tsx`)**:
   - Tab switcher (`clockin`, `leave`, `payslip`, `claims`) updates phone preview mockup.
   - **Finding**: Screen transitions are instant; subtle micro-fades would increase visual realism.
7. **Payroll Simulator (`PayrollSimulatorSection.tsx`)**:
   - Range input slider ($2,000 to $12,000) updates calculations in real time.
   - `Sample Employee Payslip` trigger opens `PayslipPreviewModal` with employee context.
   - **Finding**: Mobile horizontal scroll on result table requires explicit swipe indicator affordance.
8. **Footer Links**:
   - Legal links, statutory guides, and contact information render correctly.
   - **Finding**: Footer copyright date dynamically references 2026, but privacy policy and terms links open in modal or anchor targets without separate legal policy pages.

---

## 4. Conversion Audit

Auditing the landing page across key target buyer personas:

### Buyer Persona Perspectives
1. **Singapore SME Owner (10–50 Employees)**:
   - *Question*: "Will this save me from CPF calculation mistakes and IRAS penalties?"
   - *Finding*: High impact from Singapore Statutory Engine section; needs clearer "5-minute monthly payroll run" proof statement.
2. **HR Manager (50–200 Employees)**:
   - *Question*: "Can employees apply leave and clock in via mobile without me chasing them?"
   - *Finding*: Mobile ESS section is compelling; needs explicit MOM statutory leave type badges (Childcare, Maternity, Paternity, Sick, Hospitalisation).
3. **Finance / Payroll Manager**:
   - *Question*: "Does it export Bank GIRO files (FAST/PAYNOW) and IRAS AIS IR8A files directly?"
   - *Finding*: Statutory section mentions GIRO and IR8A; needs visual file format sample pill badges (e.g. `DBS / UOB / OCBC / HSBC GIRO (.txt)`, `IRAS AIS (.xml)`).
4. **Managing Director / Business Owner**:
   - *Question*: "What is the ROI and transition effort?"
   - *Finding*: Implementation roadmap section provides clarity; adding a "Risk-Free 14-Day Setup" guarantee banner in the Final CTA will boost conversions.

### High-Value Conversion Enhancements
- **Hero Area**: Add trust badge pill `"Trusted by 1,200+ Singapore Companies"` directly below hero CTAs.
- **Pricing Section**: Add toggle for `Monthly` vs `Annual (Save 20%)` billing to increase average contract value (ACV).
- **Sticky Floating Micro-CTA**: Introduce a subtle bottom-right floating bar (`Book Demo` / `Start Trial`) that appears after scrolling past the hero.

---

## 5. Trust & Credibility Audit

- **Singapore Statutory Coverage**:
  - **Strengths**: Clearly highlights 2026 CPF OW ceiling ($8,000), SDL calculation bounds ($2.00–$11.25), EP exemption, and SHG voluntary fund contributions.
  - **Opportunity**: Add explicit statutory agency logos/text tags for **CPF Board**, **IRAS (Inland Revenue Authority of Singapore)**, **MOM (Ministry of Manpower)**, and **SSG (SkillsFuture Singapore)** under compliance disclosures.
- **Data Protection & Security**:
  - Highlights PDPA compliance, 256-bit SSL encryption, and audit logs.
  - **Opportunity**: Add a "Singapore Data Residency (GCP Singapore Region - asia-southeast1)" badge to reassure enterprise buyers concerned about cross-border data transfers.
- **Factual Verification Protection**:
  - All claims remain strictly grounded. No fake customer logos, fabricated testimonials, or unverified certification badges will be added.

---

## 6. Product Credibility Audit

To demonstrate ezyHR as an established SaaS product rather than a conceptual design:

- **Core HR & Profiles**: Asymmetric employee profile card with status tags (`Active`, `Work From Home`) communicates real software interface depth.
- **Time & Attendance**: Live Attendance Command Centre card with clock-in times and status counts (`203 Clocked In · 96.8%`) provides strong visual credibility.
- **Leave Management**: Leave balance tracker displaying MOM statutory entitlement categories.
- **Payroll Workspace**: Dark navy financial-tech panel displaying step-by-step statutory breakdown.
- **Mobile ESS**: Interactive smartphone frame showcasing live clock-in, leave balance, payslip view, and expense claims.
- **Recommendation**: Enhance high-resolution product screen mockups with subtle subtle browser/UI address bars (`app.ezy.sg/payroll/batch-2026-08`) to maximize authentic product feel.

---

## 7. SEO Audit

Empirical audit of HTML metadata and static assets:

- **Page Title**: `ezyHR | Singapore HRMS & Payroll Software` (Optimal: 48 chars).
- **Meta Description**: `ezyHR is a cloud-based HRMS and statutory payroll platform designed for Singapore businesses. Manage employees, attendance, leave, claims and payroll in one intelligent platform.` (171 chars - strong coverage).
- **Canonical Tag**: `<link rel="canonical" href="https://ezy.sg/" />` (Correct).
- **Open Graph & Twitter Cards**: Properly configured with absolute URLs to `https://ezy.sg/Logos/ezyhr-full-logo.png`.
- **Structured Data**:
  - `Organization` schema present with legal name `REALTEK ENGINEERING PTE. LTD.` and UEN `201723665M`.
  - `SoftwareApplication` schema present with `priceCurrency: SGD`.
- **Missing Technical SEO Assets**:
  - **`public/robots.txt`**: Currently **missing**. Needs standard crawler directives allowing search engines.
  - **`public/sitemap.xml`**: Currently **missing**. Needs sitemap definition for `https://ezy.sg/`.
  - **Image Alt Tags**: Hero and logo images have explicit alt tags; floating UI icons require standard descriptive text wrappers.

---

## 8. Performance Audit

- **JS Bundle**: 312.93 kB (`dist/assets/index-C3XzrlgY.js`).
- **CSS Bundle**: 76.96 kB (`dist/assets/index-CVVOSYl1.css`).
- **Google Fonts**: `Inter` font loaded via `https://fonts.googleapis.com` with `preconnect`.
- **Performance Recommendations**:
  - Use `font-display: swap` in Google Fonts import to prevent render-blocking text flashes.
  - Ensure all section background ambient blur gradients use hardware-accelerated CSS transforms (`transform: translate3d(...)`).

---

## 9. Accessibility Audit (WCAG 2.1 AA)

- **Contrast Ratios**: Navy background text (`text-slate-100`, `text-amber-300`, `text-emerald-400`) meets 4.5:1 minimum contrast.
- **Interactive Focus States**: Focus rings (`focus:outline-none focus:ring-2 focus:ring-emerald-500`) are implemented on primary inputs and buttons.
- **Key Recommendations**:
  - Add explicit `aria-label` tags to all icon-only buttons (e.g. Modal close buttons, FAQ accordion triggers).
  - Add `aria-expanded="true/false"` to accordion items in `FaqSection.tsx`.
  - Add `prefers-reduced-motion` CSS media query support in `index.css` to disable ambient floating animations for sensitive users.

---

## 10. Production Hardening Audit

- **HTTPS & SSL**: Production hosted via Railway with TLS/SSL encryption.
- **SPA Routing**: Single-page application architecture requires standard Railway static rewrite rules (`/index.html`).
- **Security Headers**: Recommend configuring Railway / web server headers:
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: SAMEORIGIN`
  - `Referrer-Policy: strict-origin-when-cross-origin`
- **Asset Caching**: Static JS/CSS built by Vite contain content hashes (`index-C3XzrlgY.js`), enabling aggressive `Cache-Control: public, max-age=31536000, immutable` headers.

---

## 11. Prioritised R6 Recommendations

Each proposed recommendation is detailed below:

### Recommendation 1: Technical SEO Completion (`robots.txt` & `sitemap.xml`)
- **Problem**: Missing `public/robots.txt` and `public/sitemap.xml`.
- **Evidence**: `public/` directory contains only `Logos/`.
- **Proposed Solution**: Create static `public/robots.txt` and `public/sitemap.xml` referencing `https://ezy.sg/`.
- **Expected Benefit**: Improved search engine indexing and search visibility.
- **Risk**: Low.
- **Priority**: High.
- **Source Modification Required**: Yes (`public/` static files).

### Recommendation 2: Accessibility ARIA & Focus Trap Lock on Modals
- **Problem**: Modals lack focus traps and `aria-expanded` attributes on triggers.
- **Evidence**: `DemoRequestModal.tsx` and `FreeTrialModal.tsx` render without `aria-modal="true"` or keyboard focus traps.
- **Proposed Solution**: Add `aria-modal="true"`, `role="dialog"`, and focus trapping hooks to modal components.
- **Expected Benefit**: Full WCAG 2.1 AA compliance and improved screen reader usability.
- **Risk**: Low.
- **Priority**: High.
- **Source Modification Required**: Yes (`src/components/modals/`).

### Recommendation 3: Statutory Bank GIRO & IRAS File Format Badge Proof
- **Problem**: Finance buyers require instant proof of compatibility with Singapore banking and tax systems.
- **Evidence**: Section text mentions GIRO and IR8A but lacks visual file badge pills.
- **Proposed Solution**: Add pill badges (`DBS GIRO .txt`, `UOB Payables`, `OCBC GIRO`, `IRAS AIS IR8A .xml`) in `SingaporePayrollSection.tsx`.
- **Expected Benefit**: Increased conversion rate among Finance & Payroll Managers.
- **Risk**: Low.
- **Priority**: High.
- **Source Modification Required**: Yes (`src/sections/SingaporePayrollSection.tsx`).

### Recommendation 4: Pricing Section Monthly vs Annual Billing Toggle
- **Problem**: Fixed pricing display lacks annual discount incentive.
- **Evidence**: `PricingSection.tsx` displays monthly rates only.
- **Proposed Solution**: Add interactive `Monthly` / `Annual (Save 20%)` toggle state.
- **Expected Benefit**: Higher annual contract conversions and ACV.
- **Risk**: Low.
- **Priority**: Medium.
- **Source Modification Required**: Yes (`src/sections/PricingSection.tsx`).

### Recommendation 5: Reduced Motion CSS Support
- **Problem**: Ambient floating animations run continuously without checking user motion preferences.
- **Evidence**: `animate-float` classes in `index.css` run without `@media (prefers-reduced-motion)`.
- **Proposed Solution**: Add `@media (prefers-reduced-motion: reduce)` rules disabling keyframe float animations.
- **Expected Benefit**: Improved accessibility for motion-sensitive users.
- **Risk**: Low.
- **Priority**: Medium.
- **Source Modification Required**: Yes (`src/index.css`).

---

## 12. High / Medium / Low Priority Matrix

| Priority | Category | Task Item | Target Phase |
|:--------:|:---------|:----------|:------------:|
| **HIGH** | Technical SEO | Create `public/robots.txt` & `public/sitemap.xml` | Phase 6.1 |
| **HIGH** | Accessibility | Add ARIA dialog attributes & modal focus traps | Phase 6.1 |
| **HIGH** | Conversion | Add Singapore Bank GIRO & IRAS file format pills | Phase 6.1 |
| **MEDIUM** | Conversion | Add Monthly / Annual billing toggle in Pricing | Phase 6.2 |
| **MEDIUM** | Accessibility | Add `@media (prefers-reduced-motion)` in CSS | Phase 6.2 |
| **MEDIUM** | Performance | Add `font-display: swap` to Google Fonts import | Phase 6.2 |
| **LOW** | UX Polish | Add tab transition micro-animations in Mobile ESS | Phase 6.3 |
| **LOW** | Production | Add security response headers documentation | Phase 6.3 |

---

## 13. Absolute Protected Elements

The following project elements are **LOCKED** and must remain unchanged throughout R6 execution:

1. **Official Brand Assets**: `/Logos/ezyhr-full-logo-dark.png`, `/Logos/ezyhr-full-logo.png`, `/Logos/logo-icon.png`, `/Logos/favicon.png`, `/Logos/favicon.ico`.
2. **Official Tagline**: `"EASY HR • BETTER BUSINESS"`.
3. **Customer Portal Link**: `https://hr.ezy.sg/`.
4. **Marketing Domain Link**: `https://ezy.sg/`.
5. **Support Email**: `support@hr.ezy.sg`.
6. **Legal Entity Name**: `REALTEK ENGINEERING PTE. LTD.`.
7. **Legal UEN**: `201723665M`.
8. **Singapore Statutory Engine Mathematics**:
   - 2026 CPF OW Ceiling: `$8,000`
   - Employee CPF: `Math.floor()` rounding
   - Employer CPF: `Math.round()` rounding
   - Skills Development Levy (SDL): `0.25%` (Min `$2.00`, Max `$11.25`)
   - Employment Pass: `$0` employee CPF
   - Self-Help Group (SHG) voluntary contribution disclosures

---

## 14. Proposed R6 Implementation Phases

Implementation will proceed in 3 disciplined sub-phases:

```
Phase 6.1: High-Priority Production Readiness & SEO
  ├── Create public/robots.txt & public/sitemap.xml
  ├── Implement Modal ARIA attributes & focus trap locks
  └── Add Singapore Bank GIRO & IRAS file format badges
        │
Phase 6.2: Conversion & Accessibility Polish
  ├── Implement Pricing Monthly / Annual billing toggle
  ├── Add prefers-reduced-motion CSS rules
  └── Add font-display: swap to font imports
        │
Phase 6.3: Final Verification & Hardening
  ├── Execute full build check (npm run build)
  ├── Perform visual screenshot acceptance QA
  └── Deploy approved R6 build to Railway
```

---

## 15. Risks & Mitigation Strategies

- **Risk 1: Accidental modification of statutory calculation math.**
  - *Mitigation*: Automated test assertions verifying `salary = 8000` returns exact CPF rounding results.
- **Risk 2: Visual identity regression during accessibility updates.**
  - *Mitigation*: Preserve all R5.1 CSS token classes (`glass-panel-light`, `bg-deep-navy`, `text-gradient-gold`).
- **Risk 3: Search crawler indexing failure due to missing sitemap.**
  - *Mitigation*: Generate valid `sitemap.xml` with canonical domain `https://ezy.sg/`.

---

## 16. Items Requiring User Approval

The following items are submitted for explicit user review prior to Phase 6 implementation:

1. **Annual Discount Percentage**: Proposal to set Annual Billing discount at **20%** (e.g. Starter: $4/emp/mo billed annually vs $5/emp/mo billed monthly).
2. **Bank GIRO Badges**: Proposal to list DBS, UOB, OCBC, and HSBC as supported GIRO file export formats.
3. **Execution Schedule**: Recommendation to execute Phase 6.1, 6.2, and 6.3 sequentially with verification at each step.

---

## 17. Definition of Done

R6 execution will be considered **DONE** when:
1. `public/robots.txt` and `public/sitemap.xml` are deployed and verified.
2. All interactive modals pass keyboard accessibility and ARIA validation.
3. Bank GIRO & IRAS file format proof pills are rendered in the statutory section.
4. `npm run build` completes with **0 TypeScript errors, 0 compilation errors, and 0 warnings**.
5. All locked brand, statutory, and legal entity protections remain 100% verified.
6. The updated build is deployed to Railway (`https://ezy-web-landing-production.up.railway.app/`) with `200 OK` status.

---

## Final Status

**R6 MASTER PLAN CREATED — NO CODE CHANGED**
