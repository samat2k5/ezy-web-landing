# EZYHR R3 PREMIUM VISUAL EXPERIENCE REDESIGN REPORT

**Product:** ezyHR Cloud HRMS & Statutory Payroll Platform  
**Parent Initiative:** ezy SaaS by REALTEK ENGINEERING PTE. LTD. (Singapore UEN: 201723665M)  
**Target Marketing Domain:** `https://ezy.sg/`  
**Customer Portal Sign In:** `https://hr.ezy.sg/`  
**QA Date:** August 13, 2026  
**Build Status:** PASSED (Built cleanly in 2.87s with 0 TypeScript / compilation errors)  

---

## 1. Executive Summary & Brand Alignment Audit

The **ezyHR R3 Premium Visual Experience Redesign** elevates the landing page into a **glenuinsky premium, modern, trustworthy Singapore HR technology SaaS platform** comparable in quality to leading global platforms like BrioHR, Rippling, Deel, HiBob, and BambooHR, while keeping the **unmistakable ezyHR brand identity** as the core foundation.

### ABSOLUTE BRAND RULE VERIFICATION (100% COMPLIANT):
- **Logo Integrity:** Official ezyHR logo assets from `/Logos/` (`ezyhr-full-logo-dark.png`, `ezyhr-full-logo.png`, `logo-icon.png`, `favicon.png`, `favicon.ico`) integrated across Navbar, Hero Application Chrome, Footer, and `index.html`.
- **Zero brand alteration:** 0 changes to logo geometry, wordmark, tagline ("EASY HR • BETTER BUSINESS"), or color palette.
- **Pre-R3 Backup Created:** Preserved full source code backup at `DOCUMENTATION/BACKUP_PRE_R3/src/`.

---

## 2. Multi-Colour SaaS Design System & Module Accent Mapping

The R3 visual system derives its vibrant multi-colour energy directly from the ezyHR brand identity (Deep Navy `#0F172A`, Royal Blue `#1E40AF`, Bright Azure `#2563EB`, Cyan `#06B6D4`, Emerald `#10B981`, Teal `#0D9488`) combined with strategic module-specific accenting:

| Module / Section | Primary Theme | Accent Color Palette | Section Environment |
| :--- | :--- | :--- | :--- |
| **Hero** | Brand Centerpiece | Deep Navy + Azure/Cyan/Emerald Glow | Dark Hero (`bg-slate-950 text-white`) |
| **Trust Strip** | Credibility Pillars | Emerald + Azure Badges | White (`bg-white border-y text-slate-800`) |
| **Problem** | Pain Points | Soft Lavender / Indigo | Light Slate (`bg-slate-50 border-b`) |
| **Platform** | Interconnected Ecosystem | Deep Azure / Cyan | Soft Blue Gradient (`bg-slate-100/80`) |
| **Core HR** | Employee Master File | Indigo / Royal Blue | Pale Indigo Tint (`bg-indigo-50/40`) |
| **Attendance** | GPS & Time Radar | Cyan / Teal | Dark Canvas (`bg-slate-950 text-white`) |
| **Leave** | Statutory Entitlements | Emerald / Mint | Soft Emerald Tint (`bg-emerald-50/40`) |
| **Payroll** | Singapore Statutory | Royal Blue / Violet | Soft Light Gray (`bg-slate-50`) |
| **Simulator** | Live Calculation Demo | Deep Navy + Emerald Output | Dark Canvas (`bg-slate-950 text-white`) |
| **AI Assistant** | Q&A & Anomaly Engine | Violet / Electric Blue | Soft Violet Gradient (`bg-violet-50/80`) |
| **Mobile ESS** | Employee Self Service | Cyan / Aqua | Soft Gray (`bg-slate-100/80`) |
| **Analytics** | Executive Intelligence | Pale Indigo / Blue | Soft White (`bg-white border-b`) |
| **Benefits** | Tangible Business Outcomes | Deep Navy + Emerald Outcome Cards | Dark Canvas (`bg-slate-950 text-white`) |
| **Security** | PDPA & Bank-grade | Emerald / Teal | Clean White (`bg-white border-b`) |
| **Integrations** | Software Stack | Multi-colour Status Badges | Soft Gray (`bg-slate-50`) |
| **Implementation**| SME 3-Step Onboarding | Emerald / Azure | Clean White (`bg-white border-b`) |
| **Pricing** | SaaS Plans | Azure / Emerald Accent | Light Gray (`bg-slate-100/70`) |
| **FAQ** | Real-time Search | Slate / Emerald | Soft Gray (`bg-slate-50`) |
| **Final CTA** | Conversion Focus | Deep Navy + Cyan/Emerald Glow | Dark Canvas (`bg-slate-950 text-white`) |

---

## 3. Statutory Singapore Payroll Engine Verification (100% UNTOUCHED)

All statutory payroll calculations in `PayrollSimulatorSection.tsx` remain **100% untouched and verified**:

- **2026 CPF OW Ceiling:** `$8,000` (Defined via `CPF_OW_CEILING_2026 = 8000;`)
- **Employee CPF Rounding:** `Math.floor()` (CPF Board mandated rule)
- **Employer CPF Rounding:** `Math.round()`
- **Skills Development Levy (SDL):** `Math.max(2.00, Math.min(salaryInput * 0.0025, 11.25))`
- **Employment Pass (EP):** CPF exempt (`empCpf: 0, emprCpf: 0`)
- **SHG Deduction:** Explicitly disclosed demonstration data note (`$3.00`)
- **UX Statutory Disclaimer:** Preserved intact below simulator output.

---

## 4. Production Build & QA Verification

```bash
> tsc && vite build

vite v5.4.21 building for production...
transforming...
✓ 1619 modules transformed.
rendering chunks...
dist/index.html                       3.42 kB │ gzip:   1.29 kB
dist/assets/index-BWp9cNYv.css       44.27 kB │ gzip:   7.46 kB
dist/assets/index-CUfI4Uvn.js     1,062.30 kB │ gzip: 217.58 kB
✓ built in 2.87s
```

### Breakpoint Verification:
- **1440 × 900 (Desktop):** Spacious, multi-column layout, zero horizontal overflow.
- **1280 × 800 (Laptop):** Proportional typography and hero dashboard scaling.
- **1024 × 768 (Tablet Landscape):** 2-column grid adaptation.
- **768 × 1024 (Tablet Portrait):** Stacked cards with generous touch targets.
- **390 × 844 (Mobile - iPhone 14/15):** Smooth mobile drawer navigation, responsive tables.
- **375 × 812 (Mobile - Small iPhone):** Zero horizontal scroll.

---

## 5. Functionality & Link Integrity Audit

- **Customer Sign In Portal:** `https://hr.ezy.sg/` (100% verified)
- **Support Email:** `support@hr.ezy.sg` (100% verified)
- **Marketing Canonical Domain:** `https://ezy.sg/` (100% verified)
- **Legal Entity Disclosure:** **REALTEK ENGINEERING PTE. LTD.** (UEN: **201723665M**) (100% verified)
- **Interactive Modals:** Demo Request Modal & Free Trial Modal fully functional.
- **FAQ Accordion & Search:** Real-time filter verified.

---

## 6. Final Status & Conclusion

**ezyHR R3 Premium Visual Experience Redesign is COMPLETE, fully verified, and ready for deployment review.**
