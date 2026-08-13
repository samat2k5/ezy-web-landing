# ezyHR.sg / ezy.sg — R7.3 Human Professional Art-Direction Forensics Audit Report

**Date**: August 13, 2026  
**Project**: ezyHR.sg Standalone Marketing Website  
**Release**: R7.3 Visual Forensics & Art-Direction Audit  
**Execution Mode**: **AUDIT ONLY — ZERO SOURCE CODE OR DEPLOYMENT CHANGES**  
**Current Baseline**: R7.2 (Git Commit `8ae1be81e1fbfceaafc9d8af5e27df06742b7283`)  
**Visual Review Location**: [DOCUMENTATION/R7_3_VISUAL_FORENSICS/](file:///c:/Users/mathi/Desktop/AntiGravity%20Demos/ezyHR.sg%20-%20Landing%20Page%20R1/DOCUMENTATION/R7_3_VISUAL_FORENSICS/)  

---

## 1. Executive Summary

The objective of **R7.3 Visual Forensics** is to evaluate the current R7.2 `ezy.sg` / `ezyHR` marketing website from the perspective of an experienced enterprise brand and digital product art director.

While R4.2 through R7.2 established high visual energy and strong technical conversion foundations, certain design patterns currently exhibit signatures of **AI-assisted SaaS templates, Dribbble concept visual tropes, and excessive glassmorphism**.

This forensic audit identifies those elements and classifies them into **KEEP**, **REFINE**, **REPLACE**, and **REMOVE** lists. The goal is to transition `ezy.sg` into a **Human-Designed Premium Singapore Enterprise Technology Brand** characterized by visual restraint, editorial precision, realistic software framing, and unmistakable corporate credibility.

**Constraint**: This document is an **AUDIT ONLY**. Zero source code modifications, CSS edits, or deployments have been executed.

---

## 2. Protected R7.2 Baseline Alignment

All recommendations in this report preserve 100% of the following protected baseline parameters:
- **Brand**: `ezyHR`, `Ezy`, tagline `"EASY HR • BETTER BUSINESS"`, official logos in `/Logos/`.
- **Domain Architecture**: `ezy.sg` remains the public platform marketing hub; `hr.ezy.sg` remains the separate HRMS portal.
- **Statutory Engine**: 2026 CPF OW ceiling ($8,000), `Math.floor()` employee CPF, `Math.round()` employer CPF, $2.00–$11.25 SDL, EP $0 CPF exemption, SHG disclosures.
- **Functionality & Accessibility**: All R7.1 WCAG 2.1 AA focus traps, keyboard accessibility, ESC key handlers, `aria-live` FAQ announcements, `prefers-reduced-motion` CSS rules, and R7.2 Persona Selector capabilities.

---

## 3. AI-Aesthetic Visual Forensics Breakdown

### 3.1 Glassmorphism & Translucency Audit
- **Current Pattern**: Widespread use of `backdrop-blur-sm`, `backdrop-blur-md`, `backdrop-blur-xl`, `bg-white/90`, and `bg-slate-900/80` across cards, badges, and modals.
- **Forensic Finding**: While glass paneling works well for sticky navigation bars and overlay modals, applying frosted glass to static section cards (such as module features or FAQ containers) signals generic SaaS template styling.
- **Recommendation**: **REFINE**. Retain glass paneling strictly for floating structural elements (`Navbar`, `Modals`). Replace static card glass containers with solid, crisp slate/white surfaces with refined 1px borders.

### 3.2 Gradients & Background Blobs Audit
- **Current Pattern**: Radial ambient light blobs (`blur-[140px]`, `blur-[160px]`), text gradient titles (`text-gradient-hero`, `text-gradient-gold`), and multi-stop background slopes.
- **Forensic Finding**: Heavy, unconstrained radial background blobs (especially cyan/violet/amber light fields) can blur content contrast and create a "glowing SaaS template" impression.
- **Recommendation**: **REFINE**. Constrain radial light fields to subtle, low-opacity backdrop anchors. Retain signature `Deep Navy (#0F172A)` and `Emerald (#10B981)` gradients while eliminating decorative "rainbow blob" clutter.

### 3.3 Neon & Glow Halos
- **Current Pattern**: Extensive use of `shadow-glow-emerald`, `shadow-glow-blue`, `shadow-glow-violet`, `shadow-glow-amber`, and luminous border rings (`border-amber-400/40`).
- **Forensic Finding**: Heavy neon glow halos around static buttons and cards create visual noise commonly associated with AI landing-page generators.
- **Recommendation**: **REPLACE**. Replace diffuse neon halos with crisp, multi-layered enterprise drop shadows (`shadow-sm`, `shadow-md`, `shadow-xl`) and subtle 1px border highlights.

### 3.4 Floating UI Fragment Audit
- **Current Pattern**: Floating stat badges, detached notification pill badges, and elevated floating product fragments.
- **Forensic Finding**: Unanchored floating UI elements hovering in space detract from realistic software credibility.
- **Recommendation**: **REFINE**. Anchor product UI mockups inside realistic browser/device viewports with structured headers and clean margin bounds.

### 3.5 Card Geometry Overuse ("Everything is a Card")
- **Current Pattern**: Heavy reliance on `rounded-2xl`, `rounded-3xl`, rounded pill badges, and cards-nested-inside-cards.
- **Forensic Finding**: Repeating hyper-rounded cards across every section creates a repetitive grid feel.
- **Recommendation**: **REFINE**. Introduce editorial typography columns, flat rule dividers (`border-t border-slate-200`), and asymmetric text blocks to break up card uniformity.

### 3.6 AI Concept Section vs Real Business Tool
- **Current Pattern**: Violet/indigo glowing gradients and sparkles (`Sparkles`, `Zap`) in the AI HR Assistant section.
- **Forensic Finding**: Futuristic holographic styling makes the AI assistant look like an experimental chatbot rather than an enterprise business tool.
- **Recommendation**: **REPLACE**. Frame the AI HR Assistant as a pragmatic management intelligence tool with realistic prompt/response cards, crisp data tables, and subtle emerald/slate accents.

---

## 4. Human Professional Design Evaluation

| Attribute | Current R7.2 Rating (1–10) | Target Human-Designed Standard |
|-----------|:-------------------------:|--------------------------------|
| **Visual Energy & Polish** | 9 / 10 | High-energy, vibrant SaaS presentation |
| **Brand Sophistication** | 7 / 10 | Refined editorial typography and disciplined restraint |
| **Enterprise Credibility** | 7 / 10 | Solid architectural anchors with zero neon visual noise |
| **Singapore Market Specificity** | 9 / 10 | Authentic statutory CPF/SDL/IRAS workflows |
| **Product Realism** | 8 / 10 | Realistic enterprise UI mockups without floating space fragments |
| **Information Hierarchy** | 8 / 10 | Clear typography scale and disciplined white space |

---

## 5. Section-by-Section Forensic Review

| Section | Current Treatment | AI / Template Signal | Severity | Decision | Reason & Future Direction |
|---------|-------------------|----------------------|:--------:|:--------:|---------------------------|
| **Navbar** | Glass backdrop blur, sticky positioning | Translucent glass bar | LOW | **KEEP** | Essential for sticky navigation. Maintain blur and subtle border. |
| **HeroSection** | Radial light fields, product UI composition, badge pills | Glowing backdrop blobs & neon button glow | MEDIUM | **REFINE** | Tone down radial blur opacity. Replace button neon glow with solid gradient. |
| **TrustStrip** | Dark glass bar with statutory badges | Slight translucency | LOW | **KEEP** | Clean, restrained, and highly effective for Singapore market trust. |
| **ProblemSection** | Dark/light transition, 3-column challenge cards | Rounded card grid | LOW | **KEEP** | Clear narrative structure and high readability. |
| **PlatformOverview** | Bento grid module cards with colored accents | Card-within-card layout | MEDIUM | **REFINE** | Sharpen card borders, reduce radius to `rounded-xl`, replace neon borders. |
| **PersonaSelector** | Interactive 4-role tab cards with dark glass panel | Subtle glow borders | LOW | **KEEP** | Highly effective conversion tool. Maintain layout; refine border highlights. |
| **CoreHRSection** | Employee master profile mockup + feature lists | Floating badge accents | LOW | **KEEP** | Realistic product presentation. Maintain clean slate background. |
| **AttendanceSection** | Live clock-in UI mockup + geofencing indicators | Floating notification pills | LOW | **KEEP** | Strong functional clarity. Retain UI mockup structure. |
| **LeaveSection** | Leave calendar bento grid + balance bars | Rounded card containers | LOW | **KEEP** | Excellent visual proof of MOM leave rules. |
| **SingaporePayrollSection**| Dark navy environment, gold/amber flow steps, GIRO proof badges | Luminous border rings | MEDIUM | **REFINE** | Keep dark navy financial atmosphere. Replace glowing amber rings with solid 1px borders. |
| **PayrollSimulatorSection**| Interactive salary slider, CPF breakdown table, payslip preview button | Slider thumb glow | LOW | **KEEP** | Outstanding product-led proof feature. Maintain statutory math and layout. |
| **AiSection** | Violet/indigo atmospheric gradient, sparkles | Futuristic holographic AI trope | HIGH | **REPLACE** | Frame AI as pragmatic management intelligence. Remove violet neon glow. |
| **EmployeeExperienceSection**| Mobile ESS phone mockup + claims workflow | Floating phone composition | LOW | **KEEP** | Highly effective for demonstrating employee mobile experience. |
| **ManagementIntelligenceSection**| Dark dashboard analytics view | Floating stat badges | LOW | **KEEP** | Professional executive visibility view. |
| **BusinessBenefitsSection**| 4-column metric cards | Generic card grid | LOW | **KEEP** | Clean outcome proof. |
| **SecuritySection** | PDPA & enterprise audit grid | Rounded card grid | LOW | **KEEP** | Strong trust signals. |
| **IntegrationsSection** | Partner grid (Xero, QB, M365, Google) | Standard icon cards | LOW | **KEEP** | Honest integration proof. |
| **ImplementationSection**| 4-step onboarding timeline | Timeline cards | LOW | **KEEP** | Clear deployment roadmap. |
| **PricingSection** | Monthly/Annual toggle, 3 plan cards | Neon card glow on popular plan | MEDIUM | **REFINE** | Replace neon plan glow with crisp emerald border accent. |
| **FaqSection** | Two-column editorial FAQ + search input | Standard accordion | LOW | **KEEP** | Preserves R7.1 `aria-live` accessibility and search. |
| **FinalCtaSection** | Dark teal atmospheric background + dual CTAs | Subtle gradient | LOW | **KEEP** | High-converting closing section. |
| **Footer** | 4-column link layout + UEN legal disclosure | Standard dark footer | LOW | **KEEP** | Compliant and professional. |

---

## 6. Tailwind / CSS Forensic Inventory

| Pattern | Approx. Usage | Current Purpose | AI Signal | Decision | Proposed Action |
|---------|:-------------:|-----------------|:---------:|:--------:|-----------------|
| `backdrop-blur-*` | 14 instances | Glass UI panels | MEDIUM | **REFINE** | Retain for Navbar/Modals only; replace static card glass with solid surfaces. |
| `bg-gradient-to-*` | 22 instances | Section atmospheres & buttons | MEDIUM | **REFINE** | Restrain background multi-stop gradients; use solid slate backgrounds with subtle accents. |
| `shadow-glow-*` | 8 instances | Button & card halos | HIGH | **REPLACE** | Replace diffuse neon halos with crisp multi-layer enterprise shadows (`shadow-sm`, `shadow-md`). |
| `rounded-3xl` | 18 instances | Large section cards | HIGH | **REFINE** | Soften excessive rounding to `rounded-2xl` / `rounded-xl` for enterprise visual discipline. |
| `animate-pulse` | 4 instances | Live indicators | LOW | **KEEP** | Retain for active status indicators (e.g. live clock-in status). |

---

## 7. Directives on Glass, Navy, and Tailwind

1. **Should all glassmorphism be removed?**
   - **NO.** Glass paneling is retained for sticky navigation (`Navbar`) and overlay dialogs (`Modals`). Static card containers will transition to solid slate/white surfaces.
2. **Should Deep Navy `#0F172A` be removed?**
   - **NO.** Deep Navy remains an essential Ezy architectural anchor, particularly for the Singapore Payroll financial tech environment, section dividers, and footer.
3. **Should Tailwind CSS be replaced?**
   - **NO.** Tailwind CSS is the project framework. Utility classes will simply be applied with greater restraint.

---

## 8. AI-Aesthetic Score Audit

- **Overall R7.2 AI-Aesthetic Score**: **4.5 / 10** (Moderate AI/Dribbble visual presence)
- *Breakdown*:
  - Glass Usage: **6 / 10** (Overused on static cards)
  - Neon / Glow Halos: **7 / 10** (Present on buttons & AI section)
  - Card Geometry: **6 / 10** (Heavy use of `rounded-3xl` containers)
  - Hero & Product UI: **3 / 10** (Realistic and grounded)
  - Singapore Payroll Engine: **2 / 10** (Highly specific statutory implementation)

---

## 9. Human-Design Score Audit

- **Overall Human-Designed Standard**: **8.5 / 10**
- *Target Profile*: Editorial typography hierarchy, crisp 1px borders, solid surfaces, restrained multi-layer drop shadows, and realistic enterprise software framing.

---

## 10. Priority Matrix for Future Refinement

| Priority | Component / Pattern | Target Action | Rationale |
|:--------:|---------------------|:-------------:|-----------|
| **P0** | `AiSection` Neon Styling | **REPLACE** | Frame AI HR Assistant as a pragmatic management intelligence tool; remove indigo neon glow. |
| **P1** | `shadow-glow-*` Halos | **REPLACE** | Replace diffuse neon halos with crisp enterprise drop shadows (`shadow-sm`, `shadow-md`). |
| **P1** | Static Card Glassmorphism | **REFINE** | Convert static card containers from frosted glass to solid slate/white surfaces with 1px borders. |
| **P2** | Hyper-Rounded Card Radii | **REFINE** | Standardize container rounding to `rounded-2xl` / `rounded-xl` for enterprise visual discipline. |
| **KEEP** | Statutory Engine & Persona Paths | **KEEP** | 100% preserve all payroll mathematics, CPF/SDL rules, GIRO proof badges, and Persona Selector. |

---

## 11. Categorized Action Lists

### A. KEEP LIST
- Official logo assets in `/Logos/` and tagline `"EASY HR • BETTER BUSINESS"`.
- `https://ezy.sg/` canonical marketing domain and `https://hr.ezy.sg/` customer portal link.
- 100% of statutory payroll engine mathematics ($8,000 OW ceiling, `Math.floor()`, `Math.round()`, $2–$11.25 SDL, EP exemption).
- `PersonaSelector` component (SME Owner, HR Manager, Finance, MD).
- `TrustStrip` compact statutory indicator bar.
- `PayrollSimulatorSection` interactive statutory calculator.
- All R7.1 WCAG 2.1 AA modal focus traps and `aria-live` FAQ accessibility regions.
- `@media (prefers-reduced-motion: reduce)` CSS overrides.

### B. REFINE LIST
- Hero section background light fields (reduce radial blob blur opacity).
- `SingaporePayrollSection` border highlights (replace glowing amber rings with solid 1px slate/amber borders).
- `PricingSection` featured plan highlight (replace neon glow with crisp emerald border accent).
- `PlatformOverview` card container radii (standardize from `rounded-3xl` to `rounded-2xl`).

### C. REPLACE LIST
- Diffuse neon button halos (`shadow-glow-blue`, `shadow-glow-emerald`) → Replace with solid enterprise drop shadows (`shadow-md`, `shadow-lg`).
- `AiSection` indigo neon atmosphere → Replace with crisp slate/emerald management intelligence presentation.

### D. REMOVE LIST
- Decorative, unanchored ambient glowing background blobs that do not support content hierarchy.

---

## 12. Recommended R7.3 Implementation Scope

When authorized by the user, **Phase R7.3 Implementation** should execute surgical visual refinements only:
1. Create `DOCUMENTATION/BACKUP_PRE_R7_3/src/`.
2. Replace neon button/card halos (`shadow-glow-*`) with crisp enterprise shadows.
3. Refine `AiSection` styling to feel like a realistic management tool rather than a glowing chatbot concept.
4. Convert static card glass containers to solid, clean slate/white surfaces.
5. Verify `npm run build` passes with 0 TypeScript errors.
6. Capture 6 viewport visual QA screenshots under `DOCUMENTATION/R7_3_VISUAL_REVIEW/`.
7. **DO NOT deploy to Railway without explicit user approval**.

---

## 13. Audit Boundaries & Verification

- **Source Code**: **UNCHANGED**
- **Production Status**: **UNCHANGED**
- **Deployments Executed**: **NONE**
- **Code Changes**: **0**

---

## Final Status

**R7.3 VISUAL FORENSICS COMPLETE — NO CODE CHANGED**
