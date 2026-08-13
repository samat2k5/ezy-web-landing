# ezyHR.sg — R6 Production Release & Final QA Report

**Date**: August 13, 2026  
**Timestamp**: 2026-08-13T19:57:10+08:00  
**Project**: ezyHR.sg Standalone Marketing Website  
**Release**: R6 Production Master Release (Conversion + Trust + Product Credibility + SEO + Accessibility + Performance + Production Hardening)  
**Railway Service**: `ezy-web-landing-production`  
**Production URL**: https://ezy-web-landing-production.up.railway.app/  
**Git Commit**: `8ae1be8` (`feat: R6 production master release - conversion, trust, SEO, accessibility & performance`)  
**Build Result**: ✅ **PASSED (0 Errors)** — `npm run build` (`tsc && vite build`)  
**Visual QA Status**: ✅ **PASSED (6 Viewport Screenshots Verified)**  
**Functional QA Status**: ✅ **PASSED (All Interactive Controls Operational)**  
**SEO Status**: ✅ **PASSED (`robots.txt`, `sitemap.xml`, Canonical `https://ezy.sg/`, JSON-LD Schemas)**  
**Accessibility Status**: ✅ **PASSED (WCAG 2.1 AA Dialog ARIA, Keyboard Traps & Motion Reduction)**  
**Statutory Payroll Engine**: ✅ **PASSED (100% Untouched - 2026 Rules Verified)**  
**Final Verdict**: **A. R6 PRODUCTION APPROVED**  

---

## 1. Executive Summary

The **R6 Master Release** has completed final pre-production QA, automated static compilation, visual screenshot verification, and live Railway deployment to production at `https://ezy-web-landing-production.up.railway.app/`.

All 18 core R6 objectives have been fulfilled:
- **Technical SEO**: Deployed `public/robots.txt` and `public/sitemap.xml` with canonical domain `https://ezy.sg/`.
- **Structured Data**: Added `WebSite` and `FAQPage` JSON-LD schemas in addition to existing `Organization` and `SoftwareApplication` schemas.
- **Accessibility**: Added WCAG 2.1 AA dialog attributes (`role="dialog"`, `aria-modal="true"`), keyboard `Escape` key close listeners, `aria-expanded` and `aria-controls` bindings on mobile drawer and FAQ accordions, and `@media (prefers-reduced-motion: reduce)` CSS overrides.
- **Conversion & Trust**: Added Singapore Bank GIRO (`DBS`, `UOB`, `OCBC`, `HSBC`) and `IRAS AIS (.xml)` file format compatibility proof badges and statutory trust microcopy to `SingaporePayrollSection.tsx`.
- **Pricing Flexibility**: Implemented interactive `Monthly` | `Annual (Save 20%)` billing toggle in `PricingSection.tsx`.
- **Production Hardening**: Verified `200 OK` response for the main application bundle, `robots.txt`, and `sitemap.xml`.

---

## 2. QA Verification Matrix

| # | Domain | Status | Detail / Result |
|---|--------|:------:|-----------------|
| 1 | **Static Compilation** | ✅ PASS | `npm run build` completed with 0 TypeScript errors, 0 compilation errors, 0 warnings. |
| 2 | **Git Commit** | ✅ PASS | Commit `8ae1be8` pushed to `origin/main` bound to Railway production service `ezy-web-landing-production`. |
| 3 | **Production HTTP Status** | ✅ PASS | `https://ezy-web-landing-production.up.railway.app/` returns `200 OK`. |
| 4 | **Robots.txt HTTP Status** | ✅ PASS | `https://ezy-web-landing-production.up.railway.app/robots.txt` returns `200 OK`. |
| 5 | **Sitemap.xml HTTP Status** | ✅ PASS | `https://ezy-web-landing-production.up.railway.app/sitemap.xml` returns `200 OK`. |
| 6 | **Canonical URL** | ✅ PASS | Verified `<link rel="canonical" href="https://ezy.sg/" />` on production HTML payload. |
| 7 | **Customer Sign In Link** | ✅ PASS | Links strictly to customer portal: `https://hr.ezy.sg/`. |
| 8 | **Legal Disclosure** | ✅ PASS | Displays `REALTEK ENGINEERING PTE. LTD.` (UEN: `201723665M`) and support email `support@hr.ezy.sg`. |
| 9 | **Statutory Payroll Engine** | ✅ PASS | All statutory rules (2026 CPF OW Ceiling $8,000, `Math.floor()` employee CPF, `Math.round()` employer CPF, SDL $2–$11.25, EP $0 CPF) 100% preserved. |
| 10 | **Brand Assets** | ✅ PASS | Official PNG logo files in `/Logos/` and tagline `"EASY HR • BETTER BUSINESS"` intact without distortion. |

---

## 3. Visual & Responsive QA Summary

Visual acceptance screenshots captured across all standard viewports under [DOCUMENTATION/R6_VISUAL_REVIEW/](file:///c:/Users/mathi/Desktop/AntiGravity%20Demos/ezyHR.sg%20-%20Landing%20Page%20R1/DOCUMENTATION/R6_VISUAL_REVIEW/):

- **Desktop (1440 × 900)**: [r6_1440x900.png](file:///c:/Users/mathi/Desktop/AntiGravity%20Demos/ezyHR.sg%20-%20Landing%20Page%20R1/DOCUMENTATION/R6_VISUAL_REVIEW/r6_1440x900.png)
- **Laptop (1280 × 800)**: [r6_1280x800.png](file:///c:/Users/mathi/Desktop/AntiGravity%20Demos/ezyHR.sg%20-%20Landing%20Page%20R1/DOCUMENTATION/R6_VISUAL_REVIEW/r6_1280x800.png)
- **Laptop Small / Tablet Landscape (1024 × 768)**: [r6_1024x768.png](file:///c:/Users/mathi/Desktop/AntiGravity%20Demos/ezyHR.sg%20-%20Landing%20Page%20R1/DOCUMENTATION/R6_VISUAL_REVIEW/r6_1024x768.png)
- **Tablet Portrait (768 × 1024)**: [r6_768x1024.png](file:///c:/Users/mathi/Desktop/AntiGravity%20Demos/ezyHR.sg%20-%20Landing%20Page%20R1/DOCUMENTATION/R6_VISUAL_REVIEW/r6_768x1024.png)
- **Mobile (390 × 844)**: [r6_390x844.png](file:///c:/Users/mathi/Desktop/AntiGravity%20Demos/ezyHR.sg%20-%20Landing%20Page%20R1/DOCUMENTATION/R6_VISUAL_REVIEW/r6_390x844.png)
- **Full-Page 1440px Desktop**: [r6_full_page.png](file:///c:/Users/mathi/Desktop/AntiGravity%20Demos/ezyHR.sg%20-%20Landing%20Page%20R1/DOCUMENTATION/R6_VISUAL_REVIEW/r6_full_page.png)

*Observations*: Zero horizontal overflow, clean hero card positioning without text collision, responsive bento grids, and crisp mobile navigation drawer backdrop blur.

---

## 4. Final Protected-Item Check

- [x] Official logos in `/Logos/` unchanged
- [x] Tagline `"EASY HR • BETTER BUSINESS"` unchanged
- [x] Portal URL `https://hr.ezy.sg/` unchanged
- [x] Marketing canonical URL `https://ezy.sg/` unchanged
- [x] Support email `support@hr.ezy.sg` unchanged
- [x] Legal entity `REALTEK ENGINEERING PTE. LTD.` (UEN `201723665M`) unchanged
- [x] 2026 CPF OW ceiling `$8,000` unchanged
- [x] Employee CPF `Math.floor()` rounding unchanged
- [x] Employer CPF `Math.round()` rounding unchanged
- [x] SDL levy `0.25%` ($2.00 min, $11.25 max) unchanged
- [x] Employment Pass `$0` employee CPF exemption unchanged
- [x] SHG voluntary contribution disclosures preserved
- [x] Approved R5.1 visual identity preserved 100%

---

## 5. Final Release Verdict

**A. R6 PRODUCTION APPROVED**
