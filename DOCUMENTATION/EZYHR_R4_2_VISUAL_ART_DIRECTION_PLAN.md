# EZYHR R4.2 VISUAL ART-DIRECTION & COMPOSITION PLAN

**Product:** ezyHR Cloud HRMS & Statutory Payroll Platform  
**Parent Entity:** REALTEK ENGINEERING PTE. LTD. (Singapore UEN: 201723665M)  
**Target Domain:** `https://ezy.sg/`  
**Customer Portal:** `https://hr.ezy.sg/`  
**Support Email:** `support@hr.ezy.sg`  
**Planning Date:** August 13, 2026  
**Status:** ART-DIRECTION PLAN ONLY (0 Source Code Files Modified)  
**Reference Evidence:**
- Contact Sheet: `DOCUMENTATION/R4_1_VISUAL_REVIEW/R4_1_VISUAL_CONTACT_SHEET.png`
- Desktop 1440×900: `DOCUMENTATION/R4_1_VISUAL_REVIEW/ezyhr_r4_1_1440x900.png`
- Laptop 1280×800: `DOCUMENTATION/R4_1_VISUAL_REVIEW/ezyhr_r4_1_1280x800.png`
- Mobile 390×844: `DOCUMENTATION/R4_1_VISUAL_REVIEW/ezyhr_r4_1_390x844.png`
- Full Page: `DOCUMENTATION/R4_1_VISUAL_REVIEW/ezyhr_r4_1_full_page.png`

---

## 1. Executive Visual Diagnosis

While R4.1 successfully resolved structural layout cleanups and established a clean 80% light canvas, **the visual experience still lacks the bespoke editorial weight, atmospheric depth, and commanding SaaS presence of tier-1 HR technology leaders (such as BrioHR, Rippling, Deel, and HiBob).** 

The current page remains slightly constrained by standard rectangular containers, uniform section heights, and predictable card grid groupings. R4.2 is not a minor visual polish; it is a **thorough Art-Direction & Composition Transformation** aimed at giving ezyHR a distinct, high-converting visual voice.

---

## 2. R4.1 Strengths

1. **Uncompromised Brand Anchor**: Official ezyHR logo assets from `/Logos/` are correctly displayed across Navbar, Chrome, Footer, and Favicon.
2. **Statutory Accuracy**: 2026 CPF OW Ceiling ($8,000), `Math.floor()` employee CPF rounding, $2–$11.25 SDL bounds, EP exemption, and SHG disclaimers are mathematically flawless.
3. **80% Light Theme Ratio**: The shift away from dark technical catalogue sections to light, ambient background fields (`bg-ambient-ice`, `bg-ambient-cyan`, `bg-ambient-mint`, `bg-ambient-lavender`, `bg-ambient-indigo`) is established.
4. **Mobile Usability**: Clean single-column layout without horizontal scroll overflow across 390px and 375px viewports.

---

## 3. R4.1 Weaknesses

1. **Boxed Product Hero**: The hero application dashboard sits inside a standard boxed container rather than feeling like an impressive, oversized product experience emerging dynamically into the viewport.
2. **Artificial Color Allocation**: Background gradients feel assigned per section rather than behaving as ambient light passing through translucent UI layers.
3. **Card Repetition**: Several sections still rely on 3-card or 4-card horizontal grids, causing visual monotony.
4. **Restrained Editorial Typography**: Heading font sizes lack scale contrast (e.g., 5xl vs 7xl), resulting in a uniform text hierarchy.
5. **Flattened Visual Depth**: UI mockups lack multi-layered elevation, soft ambient drop shadows, and subtle glass reflections.

---

## 4. Why R4.1 Still Doesn't Feel Distinctive Enough

R4.1 looks like a **well-executed developer template** rather than a **bespoke, commercially engineered SaaS product**. It lacks:
- **Asymmetric Composition**: Elements are overly centered or symmetrically aligned.
- **Overlapping UI Layers**: Interfaces do not cross section boundaries or overlap with contextual badges naturally.
- **Atmospheric Depth**: Backgrounds feel static rather than glowing dynamically behind translucent UI glass.
- **Bold Visual Punctuation**: The visual flow lacks dramatic rhythm changes between high-contrast moments and light editorial whitespace.

---

## 5. R4.2 Design Philosophy

- **PREMIUM EDITORIAL SaaS**: High-contrast typography scale, expansive whitespace, and editorial editorial narrative splits.
- **LIGHT AS ATMOSPHERE**: Background color fields behave like ambient light passing through polished glass panels.
- **PRODUCT-AS-THE-HERO**: Real ezyHR interfaces (Workforce Dashboard, Attendance Radar, Leave Intelligence, Payroll Engine, AI Workspace, Mobile ESS) are the primary visual heroes.
- **DISTINCTIVE ezyHR BRAND**: Deep Blue, Azure, Cyan, Emerald, and Violet accents working harmoniously around the official ezyHR logo.

---

## 6. R4.2 Colour System

| Role | Palette Colors | Usage & Application |
| :--- | :--- | :--- |
| **Primary Brand** | ezyHR Navy (`#0F172A`), Deep Royal Blue (`#1E3A8A`) | Headers, Primary Buttons, Chrome Frame, High-Contrast Sections |
| **Core SaaS Tints** | Azure (`#0284C7`), Cyan (`#06B6D4`), Emerald (`#10B981`) | Interactive States, Active Metrics, Product Highlights, Badges |
| **Supporting Accents**| Violet (`#7C3AED`), Lavender (`#DDD6FE`), Soft Warm Amber (`#F59E0B`) | AI Workspace, Warning Alerts, Anomaly Indicators, Radial Glows |
| **Ambient Backgrounds**| Pure White (`#FFFFFF`), Ambient Ice (`#F8FAFC`), Pale Mint (`#ECFDF5`), Pale Cyan (`#ECFEFF`), Pale Lavender (`#F5F3FF`) | Section Canvas with subtle radial gradient illumination |
| **High-Contrast Dark**| Slate 950 (`#020617`), Deep Midnight (`#0B0F19`) | Signature Visual Moments (Payroll Simulator, AI Workspace, Final CTA) |

---

## 7. R4.2 Typography System

- **Hero Headline**: `text-5xl sm:text-7xl lg:text-8xl` (font-black, tracking-tight, leading-[1.05])
- **Section Statement Headlines**: `text-3xl sm:text-5xl lg:text-6xl` (font-extrabold, tracking-tight, leading-[1.1])
- **Editorial Sub-headlines**: `text-lg sm:text-xl text-slate-600` (font-normal, leading-relaxed)
- **Oversized Numeric Indicators**: `text-6xl sm:text-8xl font-black font-mono` (opacity 25-40%, overlaying background)
- **UI Data & Stat Typography**: `font-mono text-sm sm:text-base` (high readability for financial numbers)

---

## 8. R4.2 Visual Rhythm

Eliminate the predictable `Headline -> Cards -> Headline -> Cards` pattern. Implement an **Editorial Narrative Rhythm**:

```
[01. HERO: Oversized Product Dashboard + Floating Glass Badges]
                       ↓
[02. TRUST STRIP: 6 Statutory Badges on Pure White Canvas]
                       ↓
[03. CORE HR: Asymmetric Editorial Split + Overlapping Master Profile]
                       ↓
[04. ATTENDANCE: Command-Center Dashboard with Live Pulse Radar]
                       ↓
[05. LEAVE: Overlapping Team Calendar & Approval Panel]
                       ↓
[06. PAYROLL ENGINE: 7-Step Statutory Workflow & Dark Engine Interface]
                       ↓
[07. PAYROLL SIMULATOR: High-Contrast Interactive Deep Navy Tool]
                       ↓
[08. AI ASSISTANT: Violet/Cyan Ambient Conversational Workspace]
                       ↓
[09. MOBILE ESS: Overlapping Smartphone Mockup + Screen Switcher]
                       ↓
[10. ANALYTICS: Single Large Executive Intelligence Workspace]
                       ↓
[11. BUSINESS BENEFITS: 3 Large Horizontal Editorial Banners (01, 02, 03)]
                       ↓
[12. SECURITY: Asymmetric Dashboard & Audit Trail Panel]
                       ↓
[13. INTEGRATIONS: Central Hub-and-Spoke Ecosystem Network]
                       ↓
[14. PRICING: Clean White Cards with Highlighted Professional Plan]
                       ↓
[15. FAQ: 2-Column Editorial Layout (Search Left, Accordion Right)]
                       ↓
[16. FINAL CTA: Deep Navy Centerpiece with Multi-colour Radial Glow]
```

---

## 9. Six Signature Visual Moments

1. **HERO SECTION**: Oversized product dashboard (occupying 70% width) partially emerging from ambient ice blue light with 3 floating glass notifications.
2. **CORE HR**: Digital Employee Master Profile with an overlapping work pass verification badge and document drawer.
3. **SINGAPORE PAYROLL ENGINE**: Visual 7-step statutory pipeline feeding directly into the dark payroll calculation workspace.
4. **PAYROLL SIMULATOR**: Deep Navy interactive centerpiece with glowing electric blue sliders and instant statutory CPF/SDL breakdowns.
5. **AI ASSISTANT WORKSPACE**: Translucent violet/cyan conversational chat interface with interactive sample prompt pills.
6. **FINAL CTA**: High-contrast midnight canvas with rich cyan/emerald/violet radial glow and official ezyHR logo asset.

---

## 10. Card Reduction Strategy

| Section | Current R4.1 Layout | Proposed R4.2 Treatment | Action |
| :--- | :--- | :--- | :--- |
| **Hero** | Boxed Container | Oversized Product UI + Floating Micro-Badges | **ENLARGE & OVERLAP** |
| **Core HR** | 2-Column Split | Master Profile UI + 2 Overlapping Glass Drawers | **ASYMMETRIC RESTRUCTURE** |
| **Attendance** | 4 Small Metric Cards | Single Command Center Workspace + Live Radar Grid | **MERGE & ENLARGE** |
| **Leave** | Calendar Box + Bullets | Overlapping Team Calendar & Approval Card | **OVERLAP & RESTRUCTURE** |
| **Payroll** | Workflow Grid + Box | 7-Step Horizontal Pipeline + Dark Engine UI | **PIPELINE RESTRUCTURE** |
| **AI** | Chat Box + 6 Grid Cards | Single Conversational Workspace + Feature Pills | **REDUCE CARDS** |
| **Business Outcomes**| 3 Card Blocks | **3 Large Horizontal Editorial Banners (01, 02, 03)** | **REPLACE CARDS WITH BANNERS** |
| **Security** | Standard Cards | Asymmetric Split (Dashboard Left, Audit Right) | **ASYMMETRIC RESTRUCTURE** |
| **Integrations** | 8 Small Cards | **Central Hub-and-Spoke Connected Ecosystem Network** | **HUB-AND-SPOKE RESTRUCTURE** |
| **FAQ** | Full-width Accordion | **2-Column Layout (Search Left, Accordion Right)** | **2-COLUMN RESTRUCTURE** |

---

## 11. Section-by-Section Visual Plan

### 01. Navbar
- **Direction**: Sticky glassmorphism header (`bg-white/90 backdrop-blur-md border-b border-slate-200/80`).
- **Assets**: `/Logos/ezyhr-full-logo.png` (left), Navigation Links (center), Sign In `https://hr.ezy.sg/` & Book Free Demo CTA (right).

### 02. Hero Section
- **Direction**: Editorial statement + **Oversized Product Dashboard (70% width)** emerging from ambient ice blue radial light.
- **Elements**: Headline *"HR & Payroll, Simplified for Singapore."*, primary CTA, 3 floating glass notifications (*"Payroll Batch Approved"*, *"Attendance Recorded"*, *"AI Anomaly Checked"*).

### 03. Trust Positioning Strip
- **Direction**: Pure white canvas with 6 verified statutory capability badges (*"Singapore Statutory Payroll"*, *"CPF Automation"*, *"IRAS AIS Tax Export"*, *"Bank GIRO Disbursement"*, *"MOM Itemised Payslips"*, *"PDPA Compliant Privacy"*).

### 04. Problem & Transition
- **Direction**: Editorial narrative statement contrasting manual spreadsheet pain with ezyHR unified cloud automation.

### 05. Platform Connected Ecosystem
- **Direction**: Interactive module selector highlighting Core HR, Payroll, Attendance, Leave, Claims, and ESS integration.

### 06. Core HR Section
- **Direction**: Asymmetric editorial layout (*"One place for every employee."*) featuring an oversized Digital Employee Master Profile UI with overlapping work pass expiry notification drawers.

### 07. Time & Attendance Section
- **Direction**: Attendance Command Center (*"Know who's working. Without chasing timesheets."*) with live present/absent/late/remote meters and GPS check-in logs.

### 08. Leave Management Section
- **Direction**: Team Leave Intelligence calendar visual (*"Leave management without the paperwork."*) with overlapping manager approval cards.

### 09. Singapore Payroll Engine Section
- **Direction**: 7-Step statutory workflow pipeline (*"Singapore payroll without the spreadsheet headache."*) feeding into a dark statutory workspace.

### 10. Interactive Payroll Simulator
- **Direction**: Deep Navy high-contrast interactive tool. **0 Calculation math changes** ($8,000 OW ceiling, `Math.floor` employee CPF, $2–$11.25 SDL, EP exemption, SHG note).

### 11. AI HR Assistant Section
- **Direction**: Violet/cyan conversational chat workspace (*"Ask your HR data anything."*) with 3 interactive sample question triggers (`DEMO DATA`).

### 12. Employee Mobile Experience (ESS)
- **Direction**: Oversized smartphone mockup overlapping the desktop workspace with 4 interactive screen state toggles (*Clock In*, *Leave*, *Payslip*, *Claims*).

### 13. Management Intelligence Section
- **Direction**: Single executive analytics workspace (*"From HR data to better decisions."*) displaying headcount distribution, payroll outlay, and stability metrics.

### 14. Business Benefits Section
- **Direction**: 3 large horizontal editorial banners:
  - `01 LESS HR ADMIN`
  - `02 FASTER PAYROLL`
  - `03 BETTER VISIBILITY`
  Featuring oversized typography scale (`text-7xl font-mono opacity-30`).

### 15. Security & Compliance Section
- **Direction**: Asymmetric layout featuring a security posture visual on the left paired with role-based access and audit trail details on the right.

### 16. Integrations Ecosystem Section
- **Direction**: Central hub-and-spoke network visual with ezyHR at the center connected to Xero, QuickBooks, M365, Google Workspace, Slack, and Teams.

### 17. Implementation Roadmap Section
- **Direction**: 4-phase guided onboarding roadmap (Data Migration -> Setup -> Parallel Run -> Live Release).

### 18. Transparent Pricing Section
- **Direction**: Clean white cards on ambient ice-blue canvas with highlighted Professional plan and explicit "Custom Quotation Available" indicators.

### 19. FAQ Section
- **Direction**: 2-column editorial layout: Left column features title, copy, and search input; right column features 14 statutory expandable accordion items.

### 20. Final Conversion CTA Section
- **Direction**: Deep Navy centerpiece with multi-colour radial glow, prominent ezyHR logo, Book Free Demo & Start Free Trial CTAs, and parent company disclosure (**REALTEK ENGINEERING PTE. LTD.** UEN **201723665M**).

### 21. Global Footer
- **Direction**: 4-column footer featuring `/Logos/ezyhr-full-logo-dark.png`, quick navigation links, contact details (`support@hr.ezy.sg`), canonical domain link `https://ezy.sg/`, and legal copyright.

---

## 12. Hero Art Direction

```
+-----------------------------------------------------------------------------------+
|  [ezyHR Logo]         Features   Payroll   Pricing   FAQ     [Sign In] [Book Demo] |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|                   [Badge: ezyHR SaaS Platform • Built for Singapore]               |
|                                                                                   |
|                             HR & Payroll,                                         |
|                       Simplified for Singapore.                                   |
|                                                                                   |
|           Manage employees, attendance, leave, claims and payroll in one          |
|                        intelligent cloud platform.                                |
|                                                                                   |
|                   [ Book a Free Demo -> ]   [ Start Free Trial ]                   |
|                                                                                   |
|        (v) Singapore Payroll   (v) CPF Automation   (v) Employee ESS               |
|                                                                                   |
|   +---------------------------------------------------------------------------+   |
|   |  [+] Floating Badge: Payroll Approved                                     |   |
|   |  +---------------------------------------------------------------------+  |   |
|   |  | [O O O] app.ezy.sg/dashboard                     [DEMO DATA]    |  |   |
|   |  |---------------------------------------------------------------------|  |   |
|   |  | Executive HR & Statutory Payroll Workspace                          |  |   |
|   |  | [Workforce Overview] [Payroll Status] [Attendance Radar]            |  |   |
|   |  |                                                                     |  |   |
|   |  | Active Headcount: 48 Staff      Gross Outlay: $248,500.00            |  |   |
|   |  | Today Attendance: 46 Checked In  AI Status: 3 Alerts                |  |   |
|   |  |                                                                     |  |   |
|   |  | August 2026 Statutory Payroll Table Summary                         |  |   |
|   |  +---------------------------------------------------------------------+  |   |
|   |                                     [+] Floating Badge: AI Checked        |   |
|   +---------------------------------------------------------------------------+   |
|                                                                                   |
+-----------------------------------------------------------------------------------+
```

---

## 13. Product UI Art Direction

1. **Elevated UI Frames**: Dark slate application frames (`bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl`).
2. **Contextual Glass Badges**: Semi-transparent floating notifications (`bg-white/90 backdrop-blur-md border shadow-xl animate-float`).
3. **Data Integrity**: Every demo data element is explicitly tagged with `DEMO DATA` or `DEMONSTRATION DATA`.

---

## 14. Mobile Art Direction (390px / 375px)

- **Single-Column Flow**: Seamless vertical stacking of 2-column editorial layouts.
- **Hero Optimization**: Hero dashboard scales to 100% viewport width with horizontal table scroll.
- **Touch Accessibility**: Min 44px height for interactive buttons and accordion headers.
- **Zero Overflow**: `overflow-hidden` on container wrappers prevents horizontal scrolling.

---

## 15. Brand Protection Rules

1. **Official Logo Assets Only**: Use existing assets from `/Logos/` (`ezyhr-full-logo-dark.png`, `ezyhr-full-logo.png`, `logo-icon.png`, `favicon.png`).
2. **Tagline Preservation**: Retain "EASY HR • BETTER BUSINESS".
3. **0 Redesign/Distortion**: Do NOT alter logo geometry, colors, or typography.

---

## 16. Payroll Protection Rules (100% MANDATORY)

1. **2026 CPF OW Ceiling**: `$8,000` (`CPF_OW_CEILING_2026 = 8000;`).
2. **Employee CPF Rounding**: `Math.floor()` (CPF Board rule).
3. **Employer CPF Rounding**: `Math.round()`.
4. **SDL Calculation**: `Math.max(2.00, Math.min(salaryInput * 0.0025, 11.25))`.
5. **EP Treatment**: CPF Exempt.
6. **SHG Funds**: `$3.00` demonstration note + statutory disclaimer.

---

## 17. Unsupported Claim Protection

- NO fake customer statistics, fake logos, or unverified testimonials.
- NO generic "MOM Compliant" claims. Use: *"Built for Singapore employment requirements"* and *"Supports Singapore statutory payroll requirements."*
- NO "100% payroll accuracy" claims. Use: *"Reduce payroll errors with automated calculations."*

---

## 18. Implementation Priority Matrix

| Priority Tier | Target Components | Core Focus |
| :--- | :--- | :--- |
| **Tier 1 (High Impact)** | `HeroSection.tsx`, `CoreHRSection.tsx`, `SingaporePayrollSection.tsx` | Oversized product visuals & asymmetric editorial layout |
| **Tier 2 (Core Features)**| `AiSection.tsx`, `EmployeeExperienceSection.tsx`, `ManagementIntelligenceSection.tsx` | Interactive UI workspaces & mobile ESS frame |
| **Tier 3 (Structure)** | `BusinessBenefitsSection.tsx`, `IntegrationsSection.tsx`, `SecuritySection.tsx` | Banners (01, 02, 03) & hub-and-spoke network visual |
| **Tier 4 (Polishing)** | `PricingSection.tsx`, `FaqSection.tsx`, `FinalCtaSection.tsx` | 2-column FAQ & pricing card refinements |

---

## 19. Expected Commercial Impact

- **Increased Conversion Rate**: Product-first presentation builds immediate trust with Singapore HR managers and finance leaders.
- **Enhanced Brand Perception**: Editorial typography and atmospheric lighting elevate ezyHR from a generic tool to a premium SaaS brand.
- **Clear Product Differentiation**: Interactive statutory payroll simulator and AI workspace demonstrate platform capabilities live.

---

## 20. Acceptance Criteria

1. `npm run build` completes cleanly with **0 TypeScript and 0 compilation errors**.
2. 0 horizontal overflow across 1440px, 1280px, 768px, 390px, 375px viewports.
3. Official logo assets from `/Logos/` 100% retained.
4. Statutory payroll calculations in `PayrollSimulatorSection.tsx` 100% identical.
5. All external links (`https://ezy.sg/`, `https://hr.ezy.sg/`, `support@hr.ezy.sg`) and UEN (`201723665M`) intact.
