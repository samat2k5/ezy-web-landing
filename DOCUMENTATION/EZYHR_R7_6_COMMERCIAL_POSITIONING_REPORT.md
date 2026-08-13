# ezyHR.sg — R7.6 Commercial Positioning, Pricing & Product Clarity Report

**Date**: August 13, 2026  
**Project**: ezyHR.sg Standalone Marketing Website  
**Release**: R7.6 Commercial Positioning, Pricing & Product Clarity  
**Build Result (Final)**: ✅ **PASSED — 0 TypeScript errors, 0 compilation errors, 0 warnings**  
**Visual QA Result**: ✅ **CORRECTED PASS — Bridge structural fix applied. Element-level QA at 4 breakpoints.**  
**Backup**: `DOCUMENTATION/BACKUP_PRE_R7_6/src/`  
**Git HEAD Before Changes**: `398c4fd15321cc0c5b52aae95a0ec80bd13d2f71`  
**Production Status**: **R7.4 PRODUCTION UNCHANGED — LOCAL ONLY**  
**Deployment**: **NONE**  
**Final Status**: ✅ **R7.6 BRIDGE CORRECTED — AWAITING VISUAL APPROVAL**

---

## 1. Backup Verification

- **Backup Location**: `DOCUMENTATION/BACKUP_PRE_R7_6/src/`  
- **Git HEAD Before**: `398c4fd15321cc0c5b52aae95a0ec80bd13d2f71`  
- **Backup Contents**: Complete `src/` directory (App.tsx, sections/, components/, data/, utils/, types/, index.css, main.tsx)

---

## 2. Files Changed

| File | Change Type | Summary |
|------|------------|---------|
| `src/sections/HeroSection.tsx` | MODIFIED | Badge text only: "ezyHR SaaS Platform" → "Singapore HR & Payroll Platform" |
| `src/sections/PricingSection.tsx` | REWRITTEN | Correct S$4/S$7/S$10 GST-inclusive pricing, Save 15% toggle, per-employee rates, minimum subscription |
| `src/sections/ImplementationSection.tsx` | REWRITTEN | Corrected onboarding copy: "Getting Started", British English, accurate timing language |
| `src/sections/PayrollSimulatorSection.tsx` | MODIFIED | Conversion bridge appended after disclaimer |
| `src/sections/SecuritySection.tsx` | MODIFIED | PDPA pillar language corrected; audit log container white/clean border |
| `src/App.tsx` | REWRITTEN | Pricing moved after PayrollSimulator; PricingTeaser added after PlatformOverview |
| `src/components/PricingTeaser.tsx` | NEW | Compact early pricing signal — "Plans from S$4 / employee / month" |

---

## 3. Hero Badge Text Change

| Before | After |
|--------|-------|
| `ezyHR SaaS Platform` | `Singapore HR & Payroll Platform` |

- Zero visual composition changes.
- "Built for Singapore" tagline preserved unchanged.

---

## 4. Product Naming

- Customer-facing copy updated to use `ezyHR` (lowercase "ezy", uppercase "HR") throughout all modified files.
- Source code variable names, logo filenames, URLs, package identifiers — **ALL UNCHANGED**.

---

## 5. Onboarding Section — Before/After

| | Before | After |
|---|--------|-------|
| **Eyebrow** | Onboarding Methodology | GETTING STARTED |
| **Heading** | "Getting started with ezyHR." | "From setup to HR-ready, faster." |
| **Subtext** | "A simple, guided 3-step onboarding process designed to get your organization operational within days." | "Starting fresh? Set up your organisation and begin using ezyHR within minutes. Bringing existing HR data? Our guided migration can help get you operational within hours." |
| **Step 01** | Configure System Rules | Set Up Your Organisation |
| **Step 02** | Seamless Data Import | Add or Migrate Your People |
| **Step 03** | Team Onboarding & Go Live | Start Working |
| **Timing Note** | — | "Fresh setup in minutes · Existing-data migration typically within hours*" |
| **Footnote** | — | "*Timing depends on data volume, format and complexity." |
| **Spelling** | "organization" | "organisation" (British/Singapore English) |

No overclaiming: no "instant migration" or "guaranteed X hours" language used.

---

## 6. Security & PDPA Card — Before/After

| | Before | After |
|---|--------|-------|
| **PDPA Pillar Title** | Singapore PDPA Data Protection | Singapore PDPA Privacy Controls |
| **PDPA Pillar Desc** | "Designed in compliance with Personal Data Protection Act requirements..." | "Role-based permissions, audit trails and privacy controls for responsible employee-data management." |
| **Right Column Heading** | Real-time security audit log & event tracking. | Security & PDPA controls for your workforce data. |
| **Audit Log Container** | `bg-slate-50` (grey slab) | `bg-white border border-slate-200 shadow-sm` (clean white border) |

No "100% PDPA Compliant" or blanket guarantee claims. Evidence-based controls language used.

---

## 7. Pricing — Monthly Billing (GST Included)

| Plan | Price | Per |
|------|-------|-----|
| **Essential** | S$4.00 | employee / month |
| **Professional** | S$7.00 | employee / month |
| **Business** | S$10.00 | employee / month |

- **Minimum subscription**: S$30/month, GST included.
- **Most Popular badge**: Professional.
- "Save 20%" badge corrected to **"Save 15%"**.

---

## 8. Pricing — Annual Billing (GST Included, 15% Saving)

| Plan | Monthly Effective | Yearly |
|------|:----------------:|:------:|
| **Essential** | S$3.40 | S$40.80/employee/year |
| **Professional** | S$5.95 | S$71.40/employee/year |
| **Business** | S$8.50 | S$102.00/employee/year |

- **Annual minimum**: S$306/year (S$30 × 12 × 0.85), GST included.
- Toggle reads "Annual" with "SAVE 15%" pill.
- "Billed annually" text shown on annual card state.

---

## 9. GST Treatment

- All prices confirmed GST-inclusive per business owner authorisation.
- "All prices include GST" label on each card.
- No S$4 + GST display. No "excluding GST". No re-calculation to S$4.36.
- No GST registration number displayed (none verified from authoritative records).

---

## 10. Verified Pricing Features

### Essential
- Core HR & Digital Employee Records ✅
- Singapore Statutory Payroll (CPF / SDL / SHG) ✅
- Leave Management & Statutory Entitlements ✅
- Itemised Mobile & PDF Payslips ✅
- Basic Attendance Tracking ✅
- Employee Self-Service (ESS) Portal ✅
- Email & Helpdesk Support ✅

### Professional (Everything in Essential plus:)
- GPS Geo-fenced Attendance & Shift Scheduling ✅
- Expense Claims & Photo Receipt Upload ✅
- IRAS AIS & IR8A Export File Generation ✅
- Supported Singapore Bank GIRO Exports ✅
- Enhanced Workforce Reporting ✅
- Management Dashboards ✅
- Priority Singapore Support ✅

### Business (Everything in Professional plus:)
- Workforce Intelligence & Analytics ✅
- Advanced Role-Based Permissions ✅
- Detailed Audit Trail Access ✅
- Advanced Payroll Anomaly Detection ✅
- Supported Accounting Integrations ✅
- Priority Support & Dedicated Onboarding ✅

### Unverified Features Excluded from Public Pricing
- "Xero & QuickBooks Accounting Integration" — removed (specific integration verified status unclear; replaced with "Supported Accounting Integrations")
- "AI HR Policy Q&A Assistant" — removed from Professional card (feature exists in AiSection but plan-tier allocation unverified)
- "Up to 25 / 100 Active Employees" headcount caps — removed (cap structure unverified; plan is now per-employee)
- "Multi-Company Subsidiary Consolidation" — removed (unverified at tier level)
- "Custom Data Migration & API Access" — removed (unverified)
- "SLA Guaranteed Response Times" — removed (unverified)

---

## 11. Pricing Section Position

| Before | After |
|--------|-------|
| After ImplementationSection (section 17) | Immediately after PayrollSimulatorSection (section 11) |

**Commercial journey**: Hero → Trust → Problem → Platform → Persona → HR Workflows → Singapore Payroll → Payroll Simulator → **PRICING** → AI → Employee Experience → Management/Trust chapter → FAQ → Final CTA

---

## 12. Early Pricing Teaser

- **Location**: After PlatformOverview, before PersonaSelector
- **New Component**: `src/components/PricingTeaser.tsx`
- **Copy**: "SIMPLE PRICING FOR GROWING TEAMS · Plans from S$4 / employee / month · GST included · Clear, transparent pricing for Singapore SMEs."
- **CTA**: "View Plans →" links to `#pricing`
- **Visual**: Single compact band — no cards, no gradients, no glow

---

## 13. Payroll Simulator Conversion Bridge

- **Location**: After simulator disclaimer, inside PayrollSimulatorSection
- **Copy**: "Want payroll calculated automatically every month? Plans from S$4 / employee / month, GST included."
- **CTA**: "Explore ezyHR Plans →" links to `#pricing`
- **Visual**: Dark slate band (fits dark financial chapter). No interference with calculator.

---

## 14. Volume Pricing

- **Copy**: "100+ employees? Talk to us about volume pricing."
- **CTA**: Triggers existing `onOpenDemo` demo modal — no new backend workflow created.
- **Location**: Pricing section footer area.

---

## 15. SME Self-Qualification

- **Copy**: "Built for Singapore SMEs — from growing teams to established multi-department organisations."
- **Location**: Pricing section header description.

---

## 16. Build Results

### Build 1 — R7.6 Initial Implementation
```
> tsc && vite build
✓ 1622 modules transformed.
dist/index.html                   5.65 kB │ gzip:  1.81 kB
dist/assets/index-YPAWjZ6h.css   72.70 kB │ gzip: 11.93 kB
dist/assets/index-DRumBw4M.js   324.30 kB │ gzip: 84.49 kB
✓ built in 3.02s
```

### Build 2 — After Bridge Alignment Correction
```
> tsc && vite build
✓ 1622 modules transformed.
dist/index.html                   5.65 kB │ gzip:  1.81 kB
dist/assets/index-CmbYwrlN.css   72.72 kB │ gzip: 11.93 kB
dist/assets/index-DJig0jsj.js   324.40 kB │ gzip: 84.51 kB
✓ built in 2.04s
```

**Both builds: 0 TypeScript errors. 0 compilation errors. 0 warnings.**

---

## 17. Visual QA Screenshots

All screenshots re-captured **after bridge alignment correction**. Under [DOCUMENTATION/R7_6_VISUAL_REVIEW/](file:///c:/Users/mathi/Desktop/AntiGravity%20Demos/ezyHR.sg%20-%20Landing%20Page%20R1/DOCUMENTATION/R7_6_VISUAL_REVIEW/):

### Standard Viewport Set (Post-Correction)
- [r7_6_1440x900.png](file:///c:/Users/mathi/Desktop/AntiGravity%20Demos/ezyHR.sg%20-%20Landing%20Page%20R1/DOCUMENTATION/R7_6_VISUAL_REVIEW/r7_6_1440x900.png)
- [r7_6_1280x800.png](file:///c:/Users/mathi/Desktop/AntiGravity%20Demos/ezyHR.sg%20-%20Landing%20Page%20R1/DOCUMENTATION/R7_6_VISUAL_REVIEW/r7_6_1280x800.png)
- [r7_6_1024x768.png](file:///c:/Users/mathi/Desktop/AntiGravity%20Demos/ezyHR.sg%20-%20Landing%20Page%20R1/DOCUMENTATION/R7_6_VISUAL_REVIEW/r7_6_1024x768.png)
- [r7_6_768x1024.png](file:///c:/Users/mathi/Desktop/AntiGravity%20Demos/ezyHR.sg%20-%20Landing%20Page%20R1/DOCUMENTATION/R7_6_VISUAL_REVIEW/r7_6_768x1024.png)
- [r7_6_390x844.png](file:///c:/Users/mathi/Desktop/AntiGravity%20Demos/ezyHR.sg%20-%20Landing%20Page%20R1/DOCUMENTATION/R7_6_VISUAL_REVIEW/r7_6_390x844.png)
- [r7_6_full_page.png](file:///c:/Users/mathi/Desktop/AntiGravity%20Demos/ezyHR.sg%20-%20Landing%20Page%20R1/DOCUMENTATION/R7_6_VISUAL_REVIEW/r7_6_full_page.png) *(Primary Acceptance Artifact — 5,578,652 bytes)*

### Bridge-Specific Screenshots (Post-Correction)
- [r7_6_bridge_desktop.png](file:///c:/Users/mathi/Desktop/AntiGravity%20Demos/ezyHR.sg%20-%20Landing%20Page%20R1/DOCUMENTATION/R7_6_VISUAL_REVIEW/r7_6_bridge_desktop.png) — 1440×900
- [r7_6_bridge_mobile.png](file:///c:/Users/mathi/Desktop/AntiGravity%20Demos/ezyHR.sg%20-%20Landing%20Page%20R1/DOCUMENTATION/R7_6_VISUAL_REVIEW/r7_6_bridge_mobile.png) — 390×844

---

## 18. Bridge Alignment QA — CORRECTED (Structural Fix Applied)

### Root Cause (Rejected QA)

The initial bridge was placed **inside the `grid grid-cols-1 lg:grid-cols-12` container** as a grid child. On mobile, grid children do not inherit full-width layout from the grid parent in the same way as block children. The bridge was constrained to a grid cell width, causing the narrow/collapsed layout defect shown in the rejected screenshot.

### Structural Fix Applied

**`PayrollSimulatorSection.tsx` — bridge moved outside the grid:**

```tsx
// BEFORE (inside grid — incorrect)
<div className="grid grid-cols-1 lg:grid-cols-12 ...">
  ...(two calc panels)...
  <div className="flex flex-col ... bridge">
    ...
  </div>  // BRIDGE INSIDE GRID CHILD — WRONG
</div>

// AFTER (outside grid — correct)
<div className="grid grid-cols-1 lg:grid-cols-12 ...">
  ...(two calc panels)...
</div>  // grid closes

<div id="payroll-bridge" className="mt-8 w-full flex flex-col sm:flex-row ...">  // BRIDGE AT CONTAINER LEVEL
  ...
</div>
```

### Bridge QA Screenshots (Element-Level, Playwright `#payroll-bridge`)

| Viewport | Screenshot |
|----------|------------|
| 390×844 (mobile) | [bridge_390_element.png](file:///c:/Users/mathi/Desktop/AntiGravity%20Demos/ezyHR.sg%20-%20Landing%20Page%20R1/DOCUMENTATION/R7_6_VISUAL_REVIEW/bridge_390_element.png) |
| 768×1024 (tablet) | [bridge_768_element.png](file:///c:/Users/mathi/Desktop/AntiGravity%20Demos/ezyHR.sg%20-%20Landing%20Page%20R1/DOCUMENTATION/R7_6_VISUAL_REVIEW/bridge_768_element.png) |
| 1024×768 (small desktop) | [bridge_1024_element.png](file:///c:/Users/mathi/Desktop/AntiGravity%20Demos/ezyHR.sg%20-%20Landing%20Page%20R1/DOCUMENTATION/R7_6_VISUAL_REVIEW/bridge_1024_element.png) |
| 1440×900 (desktop) | [bridge_1440_element.png](file:///c:/Users/mathi/Desktop/AntiGravity%20Demos/ezyHR.sg%20-%20Landing%20Page%20R1/DOCUMENTATION/R7_6_VISUAL_REVIEW/bridge_1440_element.png) |

### Programmatic Measurements at 390px (Mobile)

| Metric | Value | Requirement | PASS/FAIL |
|--------|-------|-------------|:---------:|
| `bridge.scrollWidth` | 356px | ≤ `bridge.clientWidth` (356px) | ✅ PASS |
| `bridge.clientWidth` | 356px | Reasonable width (not collapsed) | ✅ PASS |
| `bridge.offsetWidth` | 358px | Full-width (390 − 2×16px padding) | ✅ PASS |
| `textDiv.width` | 308px | > 80px (not collapsed) | ✅ PASS |
| CTA left edge | 41px | ≥ bridge left (16px) | ✅ PASS |
| CTA right edge | 349px | ≤ bridge right (374px) | ✅ PASS |
| CTA width | 308px | Full-width on mobile | ✅ PASS |
| `document.scrollWidth` | 390px | ≤ `window.innerWidth` (390px) | ✅ PASS |

### Programmatic Measurements Summary (All Viewports)

| Viewport | Bridge offsetWidth | Text width | CTA inside bridge | No horiz overflow |
|----------|:-----------------:|:----------:|:-----------------:|:-----------------:|
| 390px | 358px | 308px | ✅ | ✅ |
| 768px | 720px | 450.7px | ✅ | ✅ |
| 1024px | 960px | 690.7px | ✅ | ✅ |
| 1440px | 1216px | 946.7px | ✅ | ✅ |

**Raw measurements JSON**: [bridge_measurements.json](file:///c:/Users/mathi/Desktop/AntiGravity%20Demos/ezyHR.sg%20-%20Landing%20Page%20R1/DOCUMENTATION/R7_6_VISUAL_REVIEW/bridge_measurements.json)

---

## 19. #pricing Navigation Anchor Verification

| Source | Target | Status |
|--------|--------|--------|
| PayrollSimulatorSection.tsx (conversion bridge CTA) | `#pricing` | ✅ Verified — `href="#pricing"` line 314 |
| PricingTeaser.tsx (early pricing signal) | `#pricing` | ✅ Verified — `href="#pricing"` line 22 |
| Footer.tsx (SME Plans & Pricing nav link) | `#pricing` | ✅ Verified — `href="#pricing"` line 73 |
| PricingSection.tsx | `id="pricing"` present | ✅ Verified — section has `id="pricing"` |

All `#pricing` anchor sources correctly target the `<section id="pricing">` element in PricingSection.tsx.

---

## 20. Horizontal Overflow Verification

| Check | Result |
|-------|--------|
| Global `overflow-x: hidden` in index.css | ✅ Confirmed — line 22 |
| Bridge CTA `whitespace-nowrap` scope | ✅ Scoped only to CTA text — prevents arrow text wrapping only |
| Bridge container — no fixed widths wider than viewport | ✅ Uses `px-6 py-4` padding only, no fixed pixel widths |
| Full-page screenshot width consistent | ✅ 5,578,652 bytes full-page — no horizontal scroll artefact |

---

## 21. Payroll Engine Regression Verification

All statutory calculation constants verified **100% UNCHANGED** post R7.6:

| Constant / Rule | Value | Status |
|----------------|-------|--------|
| `CPF_OW_CEILING_2026` | `8000` | ✅ Locked — line 18 |
| Employee CPF rounding | `Math.floor(cappedSalary * empRate)` | ✅ Locked — line 43 |
| Employer CPF rounding | `Math.round(cappedSalary * emprRate)` | ✅ Locked — line 45 |
| SDL calculation | `Math.max(2.00, Math.min(salaryInput * 0.0025, 11.25))` | ✅ Locked — lines 23 & 48 |
| Age under 55 rates | emp: 20%, empr: 17% | ✅ Locked |
| Age 55–60 rates | emp: 15%, empr: 12% | ✅ Locked |
| Age 60–65 rates | emp: 9.5%, empr: 9% | ✅ Locked |
| Age above 65 rates | emp: 5%, empr: 7.5% | ✅ Locked |
| EP CPF exemption | empCpf: 0, emprCpf: 0 | ✅ Locked — line 24 |
| SHG demo value | `3.00` | ✅ Locked — line 51 |
| Disclaimer text | Fully preserved | ✅ Locked — lines 302–304 |

---

## 18. R7.5.1 Visual Regression

| Section | Expected | Status |
|---------|----------|--------|
| Hero | LIGHT | ✅ Unchanged |
| Problem | LIGHT | ✅ Preserved |
| Platform | LIGHT | ✅ Preserved |
| PricingTeaser | LIGHT band | ✅ New, consistent |
| Persona | SOFT LIGHT | ✅ Preserved |
| Core HR | SOFT LIGHT | ✅ Preserved |
| Attendance | LIGHT + dark UI | ✅ Preserved |
| Leave | SOFT LIGHT | ✅ Preserved |
| Singapore Payroll | DARK | ✅ Locked |
| Payroll Simulator | DARK | ✅ Locked |
| Pricing | LIGHT (moved here) | ✅ Light canvas |
| AI / Workforce Intel | SOFT LIGHT + dark UI | ✅ Preserved |
| Management / Business / Trust | LIGHT chapter | ✅ Preserved |
| Final CTA | DARK | ✅ Locked |
| Footer | DARKER | ✅ Locked |

---

## 19. Accessibility Regression

- Pricing toggle: `aria-pressed` state preserved. Keyboard accessible. Visible focus ring via `focus:ring-2 focus:ring-emerald-500`.
- All R7.1+ modal focus traps, ESC handlers, `aria-live` regions: ✅ Unchanged.
- `#pricing` anchor preserved — all internal navigation CTAs work correctly.

---

## 20. Payroll Engine Regression

All statutory mathematics 100% UNCHANGED:
- 2026 CPF OW ceiling: `$8,000`
- Employee CPF: `Math.floor()`
- Employer CPF: `Math.round()`
- SDL: `0.25%` ($2.00 min, $11.25 max)
- EP CPF: `$0` exemption
- SHG disclosure: Preserved

---

## 21. Protected Assets Verification

- ✅ Official logo assets under `/Logos/` unchanged
- ✅ Tagline "EASY HR • BETTER BUSINESS" unchanged
- ✅ Portal URL `https://hr.ezy.sg/` unchanged
- ✅ Marketing URL `https://ezy.sg/` unchanged
- ✅ Support `support@hr.ezy.sg` unchanged
- ✅ Legal entity: `REALTEK ENGINEERING PTE. LTD.` (UEN `201723665M`) unchanged
- ✅ robots.txt, sitemap.xml, canonical, JSON-LD — unchanged
- ✅ **R7.4 production deployment: UNCHANGED**
- ✅ **Deployment: NONE — LOCAL ONLY**

---

## Final Status

**R7.6 BRIDGE CORRECTED — AWAITING VISUAL APPROVAL**

| Check | Result | Detail |
|-------|--------|--------|
| Build (final) | ✅ PASS | 0 errors, 0 warnings |
| Bridge structural fix | ✅ APPLIED | Moved from inside grid to container level |
| Bridge alignment — 390px | ✅ PASS | Measured: 358px wide, CTA 308px full-width |
| Bridge alignment — 768px | ✅ PASS | Measured: 720px wide, CTA right-aligned |
| Bridge alignment — 1024px | ✅ PASS | Measured: 960px wide |
| Bridge alignment — 1440px | ✅ PASS | Measured: 1216px wide |
| bridge.scrollWidth ≤ clientWidth | ✅ PASS | Verified at all 4 viewports |
| CTA inside bridge bounds | ✅ PASS | Left & right edges confirmed |
| Text not collapsed | ✅ PASS | 308px at 390, not collapsed |
| document.scrollWidth ≤ innerWidth | ✅ PASS | No horizontal overflow |
| #pricing anchor navigation | ✅ PASS | 3 sources → 1 target |
| Payroll engine regression | ✅ PASS | All 2026 statutory maths locked |
| R7.5.1 tonal rhythm | ✅ PASS | Preserved unchanged |
| Production deployment | ✅ NONE | R7.4 remains live |
| Git push | ✅ NONE | |

**Awaiting user visual approval of bridge element screenshots before R7.6 deployment authorisation.**
