# ezyHR.sg / ezy.sg — R7 Master Plan: Ezy Platform Architecture, Commercial Readiness & Future SaaS Ecosystem Planning

**Date**: August 13, 2026  
**Current Baseline**: R6 Approved Production Release (Git Commit `8ae1be81e1fbfceaafc9d8af5e27df06742b7283`)  
**Production Host**: Railway (`https://ezy-web-landing-production.up.railway.app/`)  
**Marketing Domain**: `https://ezy.sg/`  
**Customer Portal**: `https://hr.ezy.sg/`  
**Support Email**: `support@hr.ezy.sg`  
**Legal Entity**: REALTEK ENGINEERING PTE. LTD. (UEN: `201723665M`)  
**Execution Mode**: **PLANNING & AUDIT ONLY — ZERO SOURCE CODE OR PRODUCTION CHANGES**  
**Status**: **R7 MASTER PLAN CREATED — NO CODE CHANGED**

---

## 1. Executive Summary

Following the successful production releases of R4.2, R5.1, and R6, the ezyHR marketing site has achieved enterprise-grade visual, technical, accessibility, and conversion standards. The R6 production baseline is officially frozen and locked.

**R7 is NOT another visual redesign.** The core objective of R7 is to establish the strategic and architectural foundation required for `ezy.sg` to evolve from a single-product marketing website (`ezyHR`) into a multi-product **Ezy Digital Business Platform & SaaS Ecosystem**, while preserving `ezyHR` as its flagship HRMS product.

This document defines the comprehensive 25-part architectural roadmap for Ezy brand hierarchy, domain isolation, SaaS tenancy models, multi-product SSO, shared component libraries, technical SEO, conversion optimization, and production hardening.

---

## 2. Current Architecture

- **Public Marketing Site (`ezy.sg`)**:
  - Independent React 18 + TypeScript + Vite static application hosted on Railway (`ezy-web-landing-production.up.railway.app`).
  - Zero server-side runtime, zero database drivers, zero exposed secrets.
  - Bundled dist output: `dist/index.html` (5.65 kB), `dist/assets/index-B3UpKStI.js` (316.48 kB), `dist/assets/index-Yy1C6eT_.css` (77.36 kB).
- **Customer Application Portal (`hr.ezy.sg`)**:
  - Architecturally separate ezyHR HRMS application and customer portal (`https://hr.ezy.sg/`).
  - Strictly isolated from the marketing site runtime and database.

---

## 3. R6 Baseline Assessment

The R6 production baseline represents the frozen standard for all marketing operations:
- **Visual System**: R5.1 atmospheric radial light fields (`bg-hero-atmosphere`, `bg-ambient-ice`, `bg-deep-navy`), 64-88px editorial typography, oversized product-as-hero compositions, and glass panels.
- **Singapore Statutory Engine**: 100% compliant with 2026 Singapore statutory parameters ($8,000 CPF OW ceiling, `Math.floor()` employee CPF, `Math.round()` employer CPF, $2.00–$11.25 SDL, EP exemption).
- **Technical SEO & Metadata**: Deployed `public/robots.txt`, `public/sitemap.xml`, canonical `https://ezy.sg/`, and `Organization`, `WebSite`, `SoftwareApplication`, and `FAQPage` JSON-LD schemas.
- **Accessibility & Motion**: WCAG 2.1 AA dialog attributes on all modals (`role="dialog"`, `aria-modal="true"`), keyboard Escape listeners, `aria-expanded` / `aria-controls` bindings, and `@media (prefers-reduced-motion: reduce)` CSS overrides.

---

## 4. ezy.sg Platform Vision

The long-term vision for `ezy.sg` is to serve as the unified public home of the **Ezy Business Ecosystem**:

```
                              ezy.sg
                (Ezy Digital Platform & Public Home)
                                 │
     ┌───────────────────────────┼───────────────────────────┐
     ▼                           ▼                           ▼
   ezyHR                   Future Product              Future Product
(Flagship HRMS)          (Finance / Expenses)        (Operations / CRM)
 https://hr.ezy.sg/       https://finance.ezy.sg/     https://ops.ezy.sg/
```

- `ezy.sg` will remain the central discovery hub, brand home, and platform marketing site.
- Each SaaS product will retain its dedicated application subdomain (e.g. `hr.ezy.sg`).
- The marketing website and application portals will remain strictly decoupled at runtime.

---

## 5. Brand Architecture

We recommend a **Master Brand + Product Sub-Brand Hierarchy**:

- **Master Platform Brand**: **Ezy** (Representing the digital business platform).
- **Flagship Product Brand**: **ezyHR** ("Easy HR • Better Business").
- **Brand Naming Convention**: `ezy[Domain]` (e.g. `ezyHR`, `ezyPay`, `ezyFlow`).
- **Logo System**:
  - Master Platform Logo: Primary `Ezy` icon mark.
  - Product Sub-Logo: `ezyHR` logo with signature emerald/blue badge.
- **Footer Architecture**: Include "Part of the Ezy Business Platform" master brand attribution.

---

## 6. Domain Architecture

We recommend a **Clean Subdomain + Subpath Ecosystem**:

- `https://ezy.sg/` → Platform homepage & master marketing portal.
- `https://ezy.sg/hr` (or `https://ezy.sg/products/hr`) → Product landing page for ezyHR.
- `https://hr.ezy.sg/` → Live ezyHR customer application portal.
- `https://ezy.sg/pricing` → Unified platform pricing & product plans.
- `https://ezy.sg/security` → Unified enterprise security & PDPA compliance hub.

*Constraint*: Do NOT merge the HRMS application codebase into `ezy.sg`. Keep application runtimes on dedicated subdomains (`hr.ezy.sg`).

---

## 7. Product Architecture

Each product within the Ezy ecosystem will adhere to a standardized architectural blueprint:

1. **Product Landing Page**: High-impact visual introduction at `ezy.sg/products/[product]`.
2. **Product Capabilities Matrix**: Feature breakdown, statutory compliance, and integration ecosystem.
3. **Product Demo & Trial Flows**: Dedicated modal request flows bound to the master lead capture system.
4. **Application Portal Entry**: Direct Sign In link pointing to `[product].ezy.sg`.

---

## 8. SaaS Tenancy Model

To prepare for future multi-product capabilities, we define the conceptual **Ezy Account & Tenancy Hierarchy**:

```
                     Ezy Master Account / User ID
                                  │
                       Organisation / Tenant ID
                    (e.g., Realtek Engineering)
                                  │
            ┌─────────────────────┴─────────────────────┐
            ▼                                           ▼
   ezyHR Subscription                         Future Product Subscription
  (Role: HR Admin / Employee)                (Role: Finance Admin)
```

- **Tenant Identity**: Bound to legal company entity and UEN.
- **Product Entitlements**: Granular subscription licenses per product per tenant.
- **User Roles**: Context-aware roles per product module.

---

## 9. Authentication / SSO Strategy

For future multi-product integration, we recommend an **OIDC (OpenID Connect) / OAuth 2.0 Centralized Identity Provider**:

- **Identity Provider**: `id.ezy.sg` or `auth.ezy.sg`.
- **Single Sign-On (SSO)**: Users log in once at `id.ezy.sg` and seamlessly switch between `hr.ezy.sg` and future Ezy applications.
- **Marketing Site Integration**: Sign In button on `ezy.sg` redirects to `id.ezy.sg/login`, which routes authenticated users to their active product portal (`hr.ezy.sg`).

---

## 10. Deployment Architecture

- **Marketing Web Application (`ezy.sg`)**:
  - Hosted static bundle on Railway / Vercel CDN.
  - Automated deployment triggered via `git push origin main`.
  - Zero database or API server overhead.
- **Application Portals (`hr.ezy.sg`)**:
  - Separate application infrastructure with dedicated database clusters, Redis caches, and API workers.
  - Strict network isolation from public marketing assets.

---

## 11. SEO Architecture

- **Indexing Strategy**:
  - `https://ezy.sg/` and all marketing landing pages (`/hr`, `/pricing`, `/security`, `/faq`) → **`INDEX, FOLLOW`**.
  - `https://hr.ezy.sg/` (Customer Application Portal) → **`NOINDEX, NOFOLLOW`** (prevents internal app screens from polluting search results).
- **Canonical Strategy**: All marketing pages enforce explicit `<link rel="canonical" href="https://ezy.sg/..." />`.
- **Sitemap Structure**: Multi-sitemap architecture (`sitemap-main.xml`, `sitemap-products.xml`).

---

## 12. Conversion Architecture

Persona-based conversion funnels for `ezy.sg`:

1. **Singapore SME Owner**: Focus on instant statutory safety, CPF/IRAS compliance, and risk-free setup.
2. **HR Manager**: Focus on mobile ESS employee adoption, automated leave/attendance tracking, and time savings.
3. **Finance & Payroll Manager**: Focus on 100% accurate CPF rounding, Bank GIRO file exports (`DBS`, `UOB`, `OCBC`, `HSBC`), and IRAS AIS `IR8A` filing.
4. **Managing Director / Executive**: Focus on headcount analytics, PDPA security, and group multi-entity management.

---

## 13. Analytics Strategy

We define a **Privacy-First Event Taxonomy** (GDPR/PDPA compliant, no PII logged):

- `nav_click` (label: link name, destination)
- `cta_click` (label: `Book Demo` / `Start Trial`, location: `Hero` / `Navbar` / `Pricing` / `FinalCTA`)
- `simulator_slide` (salary value, age group, residency)
- `pricing_toggle` (billing cycle: `monthly` / `annual`)
- `faq_expand` (faq_id, category)
- `modal_submit` (modal_type: `demo` / `trial`, modules_selected)

---

## 14. Security Strategy

- **Marketing Site Security**:
  - Static distribution eliminates SQL injection, SSRF, and remote code execution vulnerabilities.
  - Implement security response headers:
    - `Content-Security-Policy: default-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com;`
    - `X-Frame-Options: SAMEORIGIN`
    - `X-Content-Type-Options: nosniff`
    - `Referrer-Policy: strict-origin-when-cross-origin`
- **Application Security (`hr.ezy.sg`)**:
  - Handled independently via enterprise application security policies, encrypted database storage, and PDPA audit logging.

---

## 15. Accessibility Strategy (WCAG 2.1 AA Roadmap)

- **Completed in R6**: Modal ARIA attributes (`role="dialog"`, `aria-modal="true"`), Escape key handling, `aria-expanded` / `aria-controls` bindings on menus and accordions, prefers-reduced-motion CSS support.
- **Future R7 Enhancements**:
  - Focus trap trapping lock inside open modals using standard focus-trap utilities.
  - Screen reader `aria-live="polite"` announcements when search queries yield 0 results in FAQ.

---

## 16. Performance Strategy

- **Core Web Vitals Targets**: LCP < 1.8s, FID/INP < 50ms, CLS = 0.00.
- **Asset Optimization**:
  - Convert heavy static images to WebP/AVIF formats.
  - Maintain `font-display: swap` on Inter font imports.
  - Implement Route-based code splitting when expanding to multi-page routes.

---

## 17. Design System Strategy ("Ezy System")

Extract R5.1/R6 visual tokens into a formal **Ezy Design System**:

- **Color Tokens**: `deep-navy (#0F172A)`, `azure-core (#2563EB)`, `cyan-attendance (#06B6D4)`, `emerald-ess (#10B981)`, `amber-payroll (#F59E0B)`, `violet-ai (#8B5CF6)`.
- **Typography**: Inter font family, 64-88px editorial headlines, 80-140px manifesto numbers.
- **Component Patterns**: Glass notification panels, asymmetric profile cards, dark statutory panels, interactive device mockups.

---

## 18. Shared Component Strategy

When multi-product expansion begins:
- Maintain a single shared component folder (`src/components/ui/`) within the repository.
- Avoid premature monorepos or npm package publishing until a second live product application codebase exists.

---

## 19. Technology Strategy

- **Frontend Core**: React 18 + TypeScript + Vite + Tailwind CSS.
- **Package Management**: npm.
- **Build System**: Vite static production compilation (`tsc && vite build`).
- **Hosting**: Railway static web deployment.

---

## 20. Documentation Strategy

Proposed future documentation directory structure:

```
DOCUMENTATION/
├── ARCHITECTURE/          # Domain, deployment & tenancy specs
├── BRAND/                 # Master brand & product guidelines
├── DESIGN_SYSTEM/         # Tokens, typography & UI patterns
├── SEO/                   # Sitemap, schemas & indexing rules
├── SECURITY/              # Security headers & PDPA policies
├── PRODUCTS/
│   └── ezyHR/             # ezyHR product specs & statutory rules
└── RELEASES/              # Release audit reports (R4.2, R5.1, R6, R7...)
```

---

## 21. Priority Matrix

| Priority | Recommendation | Business Impact | Technical Risk | Effort | Target Phase |
|:--------:|:---------------|:---------------:|:--------------:|:------:|:------------:|
| **P0** | Preserve R6 Production Baseline & Statutory Protection | CRITICAL | LOW | NONE | R7.0 |
| **P1** | Add Security Response Headers configuration | HIGH | LOW | LOW | R7.1 |
| **P1** | Implement Modal Focus Trap Lock for WCAG 2.1 AA | HIGH | LOW | LOW | R7.1 |
| **P2** | Add Privacy-First Event Analytics Taxonomy | HIGH | LOW | MEDIUM | R7.2 |
| **P2** | Formally extract Ezy Design System Token Guidelines | MEDIUM | LOW | MEDIUM | R7.3 |
| **P3** | Multi-Sitemap Architecture for future product routes | MEDIUM | LOW | LOW | R7.4 |

---

## 22. Phased R7 Roadmap

- **Phase R7.0: Baseline Lock & Architecture Specification** (Current Phase - Completed).
- **Phase R7.1: Production Hardening, Security Headers & Focus Trap Lock**: Implement CSP response header specs, modal focus traps, and SEO sitemap refinements.
- **Phase R7.2: Conversion Funnel & Analytics Taxonomy**: Implement event measurement architecture and persona CTA funnels.
- **Phase R7.3: Ezy Design System Token Extraction**: Document and structure reusable UI component patterns.
- **Phase R7.4: Platform Navigation & Multi-Product Readiness**: Enhance navbar and footer for future product discovery.

---

## 23. Risks & Mitigation Strategies

- **Risk 1: Premature complexity from microservices or SSO before a second product exists.**
  - *Mitigation*: Keep `ezy.sg` static and decoupled. Do not build SSO infrastructure until a second live app requires it.
- **Risk 2: Accidental disruption of ezyHR statutory calculation engine.**
  - *Mitigation*: Enforce strict 100% frozen statutory code locks ($8,000 ceiling, `Math.floor()`, `Math.round()`, $2–$11.25 SDL).
- **Risk 3: Visual identity regression during platform expansion.**
  - *Mitigation*: Lock R5.1/R6 visual tokens and require screenshot QA before any release.

---

## 24. What NOT to Build Yet

To maintain lean, high-velocity operations, **DO NOT BUILD THE FOLLOWING YET**:

1. ❌ **Microservices Architecture**: Do not split the static site into microservices.
2. ❌ **Premature Multi-Product SSO**: Do not build OAuth2 `id.ezy.sg` server infrastructure until a second live app exists.
3. ❌ **Premature Monorepo / Lerna Setup**: Maintain the clean Vite repository structure.
4. ❌ **Multi-Product Billing Engine**: Preserve existing ezyHR pricing architecture.
5. ❌ **Visual Redesign**: The R5.1/R6 visual design is approved and frozen.

---

## 25. Recommended Next Implementation Phase & Draft Master Prompt

### Recommended Next Phase: R7.1 — Security Headers, Accessibility Focus Locks & SEO Refinement

When ready to proceed with implementation, the following draft master prompt should be executed:

```markdown
<DRAFT_R7_1_MASTER_PROMPT>
ezyHR.sg / ezy.sg — R7.1 SECURITY HEADERS, ACCESSIBILITY FOCUS LOCKS & SEO REFINEMENT

Execute Phase R7.1 of the ezyHR marketing website.

Scope:
1. Create BACKUP_PRE_R7_1/src/ before modifying any code.
2. Implement focus-trap keyboard trapping for DemoRequestModal, FreeTrialModal, and PayslipPreviewModal.
3. Add aria-live="polite" announcement region for FAQ 0-result search states.
4. Add security response header configuration documentation.
5. Preserve 100% of R5.1/R6 visual identity, brand assets, and statutory payroll engine math.
6. Run npm run build and verify 0 TypeScript errors.
7. Capture 6 viewport visual QA screenshots under DOCUMENTATION/R7_1_VISUAL_REVIEW/.
8. DO NOT deploy to Railway without explicit user approval.
</DRAFT_R7_1_MASTER_PROMPT>
```

---

## Final Status

**R7 MASTER PLAN CREATED — NO CODE CHANGED**
