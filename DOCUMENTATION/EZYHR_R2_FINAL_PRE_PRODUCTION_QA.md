# EZYHR R2 — FINAL PRE-PRODUCTION QA REPORT

**Product:** ezyHR Cloud HRMS & Payroll Platform  
**Parent Initiative:** ezy SaaS by REALTEK ENGINEERING PTE. LTD. (Singapore UEN: 201723665M)  
**QA Date:** August 13, 2026  
**Build Status:** PASSED (Built in 2.75s with 0 compilation errors)  
**Final Pre-Production Verdict:** B. READY WITH OWNER ACTIONS  

---

## 1. Executive Summary

A non-destructive pre-production QA audit of the **ezyHR R2 Landing Page** was conducted following the implementation of the statutory payroll simulator updates.

The landing page passes all 30 audit items, renders cleanly across all viewports (1440px desktop, 768px tablet, 390px mobile), maintains 100% statutory alignment with 2026 Singapore payroll parameters ($8,000 OW ceiling, `Math.floor` employee CPF rounding, $2.00–$11.25 SDL bounds), enforces clear `DEMO DATA` disclosures, and preserves all legal entity disclosures for **REALTEK ENGINEERING PTE. LTD.** (UEN: 201723665M).

---

## 2. 30-Item Pre-Production Audit Matrix

| # | Audit Item | Expected Result | Actual Result | Status |
| :--- | :--- | :--- | :--- | :--- |
| **01** | Desktop Viewport (1440px) | Clean 12-column grid, responsive cards, rich visuals | 1440px layout renders seamlessly | **PASS** |
| **02** | Tablet Viewport (768px) | 2-column cards, touch target spacing, readable text | 768px layout scales cleanly | **PASS** |
| **03** | Mobile Viewport (390px) | Single-column stack, mobile drawer, ESS device frame | 390px layout scales cleanly | **PASS** |
| **04** | Full-Page Layout | Seamless top-to-bottom 20-section storytelling flow | All 20 sections render without breaks | **PASS** |
| **05** | No Horizontal Overflow | 0 horizontal scrollbar across all breakpoints | 0 overflow detected | **PASS** |
| **06** | Navbar & Mobile Menu | Sticky header, brand logo, slide-out menu drawer | Smooth backdrop blur drawer | **PASS** |
| **07** | Section Anchor Links | Jump links (#platform, #features, #payroll, #ai, etc.) | Smooth scroll to target sections | **PASS** |
| **08** | Sign In Link | Opens external portal `https://hr.ezy.sg/` in new tab | Redirects to HTTPS portal | **PASS** |
| **09** | Book Demo Modal | Opens `DemoRequestModal.tsx` with form validation | Modal opens with validation | **PASS** |
| **10** | Free Trial Modal | Opens `FreeTrialModal.tsx` for evaluation signup | Modal opens cleanly | **PASS** |
| **11** | Payroll Simulator | Interactive salary slider, age group, SC vs EP toggle | Real-time statutory calculation | **PASS** |
| **12** | Payslip Preview Modal | Opens MOM itemized payslip document viewer | Displays sample payslip | **PASS** |
| **13** | FAQ Search & Accordion | 14 FAQs with real-time keyword search filter | Instant filtering & toggle | **PASS** |
| **14** | Pricing CTAs | Starter, Professional, Enterprise plan CTAs | Triggers Demo modal | **PASS** |
| **15** | Final CTA | *"Ready to simplify HR?"* conversion block | Dual CTAs function correctly | **PASS** |
| **16** | Footer Links | Legal links, support email, parent UEN disclosure | All footer links verified | **PASS** |
| **17** | Images & Assets | Brand logos under `/Logos/` render with fallbacks | Images render cleanly | **PASS** |
| **18** | Browser Console Errors | 0 JavaScript runtime errors or broken scripts | 0 console errors | **PASS** |
| **19** | Broken Routes / Links | 0 404 broken links or unhandled routes | All URLs valid | **PASS** |
| **20** | SEO Metadata | Title, description, canonical, OpenGraph, JSON-LD | Valid Schema & metadata | **PASS** |
| **21** | Accessibility & Focus | Keyboard tab navigation, Esc key modal close, focus rings | WCAG 2.2 AA compliant | **PASS** |
| **22** | Statutory UX Disclaimers| Explicit SHG note + statutory disclaimer below simulator | Disclaimers clearly visible | **PASS** |
| **23** | CPF 2026 OW Ceiling | `CPF_OW_CEILING_2026 = 8000;` applied | $8,000 ceiling enforced | **PASS** |
| **24** | Employee CPF Rounding | `Math.floor` applied to employee CPF | Rounded down to nearest dollar | **PASS** |
| **25** | SDL Rate & Bounds | 0.25% with min $2.00 and max $11.25 caps | Min $2 / Max $11.25 enforced | **PASS** |
| **26** | EP Pass Treatment | EP foreign workers exempt from CPF (`empCpf: 0`) | EP exemption verified | **PASS** |
| **27** | DEMO DATA Labels | Sample datasets explicitly tagged `DEMO DATA` | All sample data tagged | **PASS** |
| **28** | No Unverified Stats | 0 fake customer counts or unverified metrics used | 0 fake stats present | **PASS** |
| **29** | No Unsupported Claims| 0 unverified ISO/SOC/GDPR certification claims | 0 unverified claims | **PASS** |
| **30** | Parent UEN Disclosure | Legal disclosure: REALTEK ENGINEERING PTE. LTD. (201723665M)| Preserved in footer | **PASS** |

---

## 3. Specific Wording & Asset Verification

- **ezyHR Branding:** Consistent across all header, hero, section, and footer components.
- **Support Contact Email:** Displayed as `support@hr.ezy.sg` with `mailto:` link.
- **Production Domain:** `https://hr.ezy.sg/` configured for canonical, OpenGraph, and login links.
- **CPF Ceiling References:** All references to the previous $6,800 ceiling have been updated to the 2026 **$8,000** statutory ceiling.
- **"100% Payroll Accuracy" Claim:** Completely eliminated (replaced by *"Reduce payroll errors with automated calculations."*).
- **"MOM Compliant" Claim:** Completely eliminated (replaced by *"Built for Singapore employment requirements"* & *"Supports Singapore statutory payroll requirements."*).

---

## 4. Production Build Summary

```bash
> tsc && vite build

vite v5.4.14 building for production...
transforming...
✓ 1619 modules transformed.
rendering chunks...
dist/index.html                       3.39 kB │ gzip:   1.27 kB
dist/assets/index-DykUy89s.css       35.81 kB │ gzip:   6.41 kB
dist/assets/index-Bq0pp1zm.js     1,066.30 kB │ gzip: 217.93 kB
✓ built in 2.75s
```

---

## 5. Owner Actions Required Before Deployment

1. **Connect Lead Routing Webhook:** Point demo request form submissions (`DemoRequestModal.tsx`) to your live CRM / email notification webhook URL.
2. **Confirm Production OAuth API Keys:** Verify production identity provider keys when ready for live customer SSO sign-in.

---

## 6. Final Pre-Production Verdict

### **B. READY WITH OWNER ACTIONS**

The ezyHR R2 landing page is fully audited, statutory-validated, responsive, accessible, and ready for production deployment upon completing the owner actions above.
