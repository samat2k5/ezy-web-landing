# ezyHR.sg — R6 Production Deployment Report

**Date**: August 13, 2026  
**Timestamp**: 2026-08-13T20:01:40+08:00  
**Project**: ezyHR.sg Standalone Marketing Website  
**Release**: R6 Production Master Release (Conversion + Trust + Product Credibility + SEO + Accessibility + Performance + Production Hardening)  
**Railway Service**: `ezy-web-landing-production`  
**Production URL**: https://ezy-web-landing-production.up.railway.app/  
**Git Commit Hash**: `8ae1be81e1fbfceaafc9d8af5e27df06742b7283`  
**Build Result**: ✅ **PASSED (0 Errors)** — `npm run build` (`tsc && vite build`)  
**HTTP Response**: ✅ **200 OK** (Main Application, `robots.txt`, `sitemap.xml`)  
**Rollback Backup Reference**: [DOCUMENTATION/BACKUP_PRE_R6/src/](file:///c:/Users/mathi/Desktop/AntiGravity%20Demos/ezyHR.sg%20-%20Landing%20Page%20R1/DOCUMENTATION/BACKUP_PRE_R6/src/) & [DOCUMENTATION/BACKUP_PRE_R6_FINAL/src/](file:///c:/Users/mathi/Desktop/AntiGravity%20Demos/ezyHR.sg%20-%20Landing%20Page%20R1/DOCUMENTATION/BACKUP_PRE_R6_FINAL/src/)  
**Final Verdict**: **A. R6 PRODUCTION DEPLOYED — VERIFIED**  

---

## 1. Executive Summary & Deployment Status

The **R6 Production Master Release** has been deployed to the live Railway production service `ezy-web-landing-production` and independently verified at `https://ezy-web-landing-production.up.railway.app/`.

Pre-deployment verification confirmed **0 TypeScript errors, 0 compilation errors, and 0 warnings** during `npm run build`.

Post-deployment inspection confirmed that the live production HTML payload serves the newly compiled R6 JavaScript bundle (`./assets/index-B3UpKStI.js`) and CSS bundle (`./assets/index-Yy1C6eT_.css`), along with structured data, WCAG accessibility bindings, and technical SEO files.

- **Deployment Status**: **DEPLOYED & VERIFIED**
- **Live Production URL**: https://ezy-web-landing-production.up.railway.app/
- **HTTP Status Check**: `200 OK` (Landing Page, `robots.txt`, `sitemap.xml`)
- **Final Verdict**: **A. R6 PRODUCTION DEPLOYED — VERIFIED**

---

## 2. Post-Deployment Verification Matrix

| # | Item | Verified Status | Detail / Live Payload Output |
|---|------|:---------------:|------------------------------|
| 1 | **Main HTTP Response** | ✅ PASS | `200 OK` returned for `https://ezy-web-landing-production.up.railway.app/`. |
| 2 | **Robots.txt HTTP Response** | ✅ PASS | `200 OK` returned for `https://ezy-web-landing-production.up.railway.app/robots.txt`. |
| 3 | **Sitemap.xml HTTP Response** | ✅ PASS | `200 OK` returned for `https://ezy-web-landing-production.up.railway.app/sitemap.xml`. |
| 4 | **Production Bundle Referencing** | ✅ PASS | HTML references `./assets/index-B3UpKStI.js` and `./assets/index-Yy1C6eT_.css`. |
| 5 | **Canonical SEO Tag** | ✅ PASS | Verified `<link rel="canonical" href="https://ezy.sg/" />`. |
| 6 | **Customer Sign In Link** | ✅ PASS | Points strictly to customer portal: `https://hr.ezy.sg/`. |
| 7 | **Legal Entity & Support** | ✅ PASS | Displays `REALTEK ENGINEERING PTE. LTD.` (UEN `201723665M`) and `support@hr.ezy.sg`. |
| 8 | **Statutory Engine Safeguards** | ✅ PASS | All rules (2026 CPF OW Ceiling $8,000, `Math.floor()` employee CPF, `Math.round()` employer CPF, SDL $2–$11.25, EP $0 CPF) 100% preserved. |
| 9 | **Brand Asset Integrity** | ✅ PASS | PNG logos in `/Logos/` and tagline `"EASY HR • BETTER BUSINESS"` intact without distortion. |

---

## 3. R6 Feature Deployment Audit

- **Technical SEO**: Live `robots.txt` specifies crawler permissions and declares `Sitemap: https://ezy.sg/sitemap.xml`. `sitemap.xml` specifies canonical location `https://ezy.sg/`.
- **Structured Data Schemas**: Production HTML contains `Organization`, `WebSite`, `SoftwareApplication`, and `FAQPage` JSON-LD schemas.
- **WCAG 2.1 AA Accessibility**: `DemoRequestModal`, `FreeTrialModal`, and `PayslipPreviewModal` contain `role="dialog"`, `aria-modal="true"`, and keyboard Escape key listeners. Navigation hamburger and FAQ accordions bind real-time `aria-expanded` and `aria-controls` states.
- **Reduced Motion Support**: `index-Yy1C6eT_.css` includes `@media (prefers-reduced-motion: reduce)` rules disabling keyframe float animations for motion-sensitive users.
- **Conversion & Singapore Payroll Trust**: `SingaporePayrollSection` renders Bank GIRO export proof badges (`DBS`, `UOB`, `OCBC`, `HSBC`, `IRAS AIS`) and statutory trust microcopy.
- **Pricing Flexibility**: `PricingSection` renders interactive `Monthly` | `Annual (Save 20%)` billing toggle with `aria-pressed` state.

---

## 4. Final Protected-Item Verification Checklist

- [x] Official PNG logos in `/Logos/` unchanged
- [x] Tagline `"EASY HR • BETTER BUSINESS"` unchanged
- [x] Customer Portal URL `https://hr.ezy.sg/` unchanged
- [x] Marketing canonical URL `https://ezy.sg/` unchanged
- [x] Support email `support@hr.ezy.sg` unchanged
- [x] Legal entity `REALTEK ENGINEERING PTE. LTD.` (UEN `201723665M`) unchanged
- [x] 2026 CPF OW ceiling `$8,000` unchanged
- [x] Employee CPF `Math.floor()` rounding unchanged
- [x] Employer CPF `Math.round()` rounding unchanged
- [x] SDL levy `0.25%` ($2.00 min, $11.25 max) unchanged
- [x] Employment Pass `$0` employee CPF exemption unchanged
- [x] SHG voluntary contribution disclosures preserved
- [x] R5.1 visual identity & atmospheric design system preserved 100%
- [x] Production build passes with 0 TypeScript errors
- [x] Live Railway production URL independently verified via HTTP `200 OK`

---

## 5. Rollback & Backup Reference

In the event that a rollback is required, non-destructive source code backups are preserved at:
- **Pre-R6 Backup**: [DOCUMENTATION/BACKUP_PRE_R6/src/](file:///c:/Users/mathi/Desktop/AntiGravity%20Demos/ezyHR.sg%20-%20Landing%20Page%20R1/DOCUMENTATION/BACKUP_PRE_R6/src/)
- **Pre-Deployment Backup**: [DOCUMENTATION/BACKUP_PRE_R6_FINAL/src/](file:///c:/Users/mathi/Desktop/AntiGravity%20Demos/ezyHR.sg%20-%20Landing%20Page%20R1/DOCUMENTATION/BACKUP_PRE_R6_FINAL/src/)

---

## Final Verdict

**A. R6 PRODUCTION DEPLOYED — VERIFIED**
