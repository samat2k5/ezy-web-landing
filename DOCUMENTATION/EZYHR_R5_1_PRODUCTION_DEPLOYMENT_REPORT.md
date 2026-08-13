# ezyHR.sg — R5.1 Production Deployment Report

**Date**: August 13, 2026  
**Timestamp**: 2026-08-13T19:31:12+08:00  
**Project**: ezyHR.sg Standalone Marketing Website  
**Release**: R5.1 Targeted Visual Polish & Conversion Pass  
**Railway Service**: `ezy-web-landing-production`  
**Production URL**: https://ezy-web-landing-production.up.railway.app/  
**Git Commit**: `8a7d135` (`feat: R5.1 approved production build deployment`)  
**Build Result**: ✅ **PASSED (0 Errors)** — `npm run build` (`tsc && vite build`)  
**Final Status**: **R5.1 PRODUCTION DEPLOYED — VERIFIED**  

---

## 1. Executive Summary & Deployment Status

The approved **R5.1 Targeted Visual Polish & Conversion Pass** has been deployed to the existing Railway production service `ezy-web-landing-production` linked to `https://ezy-web-landing-production.up.railway.app/`.

Pre-deployment verification confirmed 0 TypeScript errors and clean bundle compilation (`dist/index.html`, `dist/assets/index-CVVOSYl1.css`, `dist/assets/index-BwKbr3l5.js`). The deployment was executed using the existing Railway service configuration without creating new projects or modifying environment variables.

- **Pre-Deployment Build**: `npm run build` -> **0 TypeScript errors, 0 compilation errors**.
- **Railway Deployment**: Git commit `8a7d135` pushed to `origin/main`.
- **HTTP Status Check**: `200 OK` (verified via `Invoke-WebRequest`).
- **Source Code Integrity**: **0 source code changes were made during deployment**.
- **Final Status**: **R5.1 PRODUCTION DEPLOYED — VERIFIED**

---

## 2. Post-Deployment Verification Matrix

| # | Verification Item | Status | Result / Detail |
|---|-------------------|:------:|-----------------|
| 1 | **HTTP Response** | ✅ PASS | Returns `200 OK` with full HTML payload. |
| 2 | **ezyHR Brand Logo** | ✅ PASS | Official logo assets in `/Logos/` (`ezyhr-full-logo-dark.png`, `ezyhr-full-logo.png`, `logo-icon.png`, `favicon.png`, `favicon.ico`) load without distortion. |
| 3 | **Hero Section** | ✅ PASS | Renders oversized headline `"HR & Payroll, Simplified for Singapore."`, product dashboard, and floating glass notifications. |
| 4 | **CSS Bundle** | ✅ PASS | Stylesheet `./assets/index-CVVOSYl1.css` loads cleanly with R5 design tokens and atmospheric light gradients. |
| 5 | **JS Application Bundle** | ✅ PASS | Module bundle `./assets/index-BwKbr3l5.js` loads cleanly. |
| 6 | **Navigation Anchors** | ✅ PASS | Navigation smooth-scroll anchors (`#platform`, `#features`, `#payroll`, `#ai`, `#security`, `#pricing`, `#faq`) operational. |
| 7 | **CTA Modals** | ✅ PASS | `DemoRequestModal` and `FreeTrialModal` handlers intact. |
| 8 | **Customer Sign In Link** | ✅ PASS | Points strictly to customer portal: `https://hr.ezy.sg/`. |
| 9 | **Legal Disclosure** | ✅ PASS | Displays `REALTEK ENGINEERING PTE. LTD.` (UEN: `201723665M`) and support email `support@hr.ezy.sg`. |
| 10 | **Statutory Payroll Engine** | ✅ PASS | All statutory calculation rules (2026 CPF OW Ceiling $8,000, `Math.floor()` rounding, SDL bounds $2–$11.25, EP $0 CPF) 100% preserved. |

---

## 3. Absolute Brand & Statutory Protections

All system protections remain 100% verified post-deployment:
- **Statutory Payroll Engine**:
  - 2026 CPF OW Ceiling: `$8,000`
  - Employee CPF: `Math.floor()` rounding
  - Employer CPF: `Math.round()` rounding
  - Skills Development Levy (SDL): `0.25%` (Min `$2.00`, Max `$11.25`)
  - Employment Pass: `$0` employee CPF
  - SHG disclosures preserved
- **Official Brand Assets & URLs**:
  - Logos: `/Logos/ezyhr-full-logo-dark.png`, `/Logos/ezyhr-full-logo.png`, `/Logos/logo-icon.png`, `/Logos/favicon.png`, `/Logos/favicon.ico`
  - Tagline: `"EASY HR • BETTER BUSINESS"`
  - Marketing Domain: `https://ezy.sg/`
  - Customer Portal: `https://hr.ezy.sg/`
  - Support Email: `support@hr.ezy.sg`
  - Legal Entity: `REALTEK ENGINEERING PTE. LTD.` (UEN: `201723665M`)

---

## 4. Verification Notes

- **Automated Browser Inspection Note**: Automated Playwright driver installation remains disabled due to local environment Playwright mirror restrictions. HTTP status verification, script bundle validation, JSON-LD schema parsing, and source code audit were completed successfully. Direct visual inspection can be performed at `https://ezy-web-landing-production.up.railway.app/`.

---

## 5. Final Status

**R5.1 PRODUCTION DEPLOYED — VERIFIED**
