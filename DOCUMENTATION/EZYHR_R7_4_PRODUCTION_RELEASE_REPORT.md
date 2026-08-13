# ezyHR.sg — R7.4 Final Production Release & Post-Deployment Report

**Date & Time**: August 13, 2026  
**Project**: ezyHR.sg Standalone Marketing Website  
**Release**: R7.4 Final Human-Designed Production Release  
**Git Commit Hash**: `398c4fd15321cc0c5b52aae95a0ec80bd13d2f71`  
**Railway Production Service**: `ezy-web-landing-production`  
**Live Production URL**: [https://ezy-web-landing-production.up.railway.app/](https://ezy-web-landing-production.up.railway.app/)  
**Canonical Marketing Domain**: [https://ezy.sg/](https://ezy.sg/)  
**Customer HRMS Application**: [https://hr.ezy.sg/](https://hr.ezy.sg/)  
**Build Result**: ✅ **PASSED (0 Errors)** — `npm run build` (`tsc && vite build`)  
**HTTP Verification**: ✅ **PASSED (200 OK across Main Page, Robots.txt, Sitemap.xml)**  
**Live Visual QA**: ✅ **PASSED (6 Viewport Live Render Screenshots Captured)**  
**Accessibility Regression**: ✅ **PASSED (R7.1 Focus Traps & ARIA-Live Preserved)**  
**Statutory Engine**: ✅ **PASSED (100% Untouched Mathematics & Rules)**  
**Final Release Status**: **R7.4 PRODUCTION DEPLOYED — VERIFIED**  

---

## 1. Executive Summary & Git Release

**Phase R7.4** has been successfully built, committed, pushed to `origin/main`, deployed to the Railway production service `ezy-web-landing-production`, and verified live HTTP response and visual rendering.

- **Git Commit**: `398c4fd15321cc0c5b52aae95a0ec80bd13d2f71` (`feat: R7.4 human professional production release`).
- **Production Asset Hashes**:
  - CSS: `dist/assets/index-MpPzqqeB.css` (76.67 kB)
  - JS: `dist/assets/index-COQLenWq.js` (321.30 kB)
- **Pre-Deployment Backup**: Verified intact at [DOCUMENTATION/BACKUP_PRE_R7_4/src/](file:///c:/Users/mathi/Desktop/AntiGravity%20Demos/ezyHR.sg%20-%20Landing%20Page%20R1/DOCUMENTATION/BACKUP_PRE_R7_4/src/).

---

## 2. Live HTTP Endpoint Verification

| Endpoint | HTTP Status | Content Verification |
|----------|:-----------:|----------------------|
| `https://ezy-web-landing-production.up.railway.app/` | **200 OK** | Deployed R7.4 bundle with `index-COQLenWq.js` & `index-MpPzqqeB.css` |
| `https://ezy-web-landing-production.up.railway.app/robots.txt` | **200 OK** | Verified canonical sitemap `Sitemap: https://ezy.sg/sitemap.xml` |
| `https://ezy-web-landing-production.up.railway.app/sitemap.xml` | **200 OK** | Verified canonical location `<loc>https://ezy.sg/</loc>` |

---

## 3. Live Visual QA & Viewport Inventory

Captured 6 live production viewport renders directly from `https://ezy-web-landing-production.up.railway.app/` under [DOCUMENTATION/R7_4_PRODUCTION_VISUAL_REVIEW/](file:///c:/Users/mathi/Desktop/AntiGravity%20Demos/ezyHR.sg%20-%20Landing%20Page%20R1/DOCUMENTATION/R7_4_PRODUCTION_VISUAL_REVIEW/):

1. **1440 × 900 Desktop**: [r7_4_prod_1440x900.png](file:///c:/Users/mathi/Desktop/AntiGravity%20Demos/ezyHR.sg%20-%20Landing%20Page%20R1/DOCUMENTATION/R7_4_PRODUCTION_VISUAL_REVIEW/r7_4_prod_1440x900.png) (423,887 bytes)
2. **1280 × 800 Laptop**: [r7_4_prod_1280x800.png](file:///c:/Users/mathi/Desktop/AntiGravity%20Demos/ezyHR.sg%20-%20Landing%20Page%20R1/DOCUMENTATION/R7_4_PRODUCTION_VISUAL_REVIEW/r7_4_prod_1280x800.png) (365,917 bytes)
3. **1024 × 768 Tablet Landscape**: [r7_4_prod_1024x768.png](file:///c:/Users/mathi/Desktop/AntiGravity%20Demos/ezyHR.sg%20-%20Landing%20Page%20R1/DOCUMENTATION/R7_4_PRODUCTION_VISUAL_REVIEW/r7_4_prod_1024x768.png) (293,253 bytes)
4. **768 × 1024 Tablet Portrait**: [r7_4_prod_768x1024.png](file:///c:/Users/mathi/Desktop/AntiGravity%20Demos/ezyHR.sg%20-%20Landing%20Page%20R1/DOCUMENTATION/R7_4_PRODUCTION_VISUAL_REVIEW/r7_4_prod_768x1024.png) (324,476 bytes)
5. **390 × 844 Mobile**: [r7_4_prod_390x844.png](file:///c:/Users/mathi/Desktop/AntiGravity%20Demos/ezyHR.sg%20-%20Landing%20Page%20R1/DOCUMENTATION/R7_4_PRODUCTION_VISUAL_REVIEW/r7_4_prod_390x844.png) (140,478 bytes)
6. **Full-Page 1440px Render**: [r7_4_prod_full_page.png](file:///c:/Users/mathi/Desktop/AntiGravity%20Demos/ezyHR.sg%20-%20Landing%20Page%20R1/DOCUMENTATION/R7_4_PRODUCTION_VISUAL_REVIEW/r7_4_prod_full_page.png) (7,166,470 bytes)

---

## 4. Protected-Item Verification Checklist

- [x] Official PNG logos in `/Logos/` unchanged
- [x] Tagline `"EASY HR • BETTER BUSINESS"` unchanged
- [x] Customer Portal URL `https://hr.ezy.sg/` unchanged (Sign In routes strictly to `https://hr.ezy.sg/`)
- [x] Marketing canonical URL `https://ezy.sg/` unchanged
- [x] Support email `support@hr.ezy.sg` unchanged
- [x] Legal entity `REALTEK ENGINEERING PTE. LTD.` (UEN `201723665M`) unchanged
- [x] 2026 CPF OW ceiling `$8,000` unchanged
- [x] Employee CPF `Math.floor()` rounding unchanged
- [x] Employer CPF `Math.round()` rounding unchanged
- [x] SDL levy `0.25%` ($2.00 min, $11.25 max) unchanged
- [x] Employment Pass `$0` employee CPF exemption unchanged
- [x] SHG voluntary contribution disclosures preserved
- [x] R7.1 WCAG 2.1 AA focus traps & Escape key handlers verified
- [x] R7.1 FAQ `aria-live` announcements & reduced-motion rules verified
- [x] R7.2 Persona Selector (SME Owner, HR Manager, Finance, MD) verified
- [x] R7.3 Ezy Workforce Intelligence & enterprise shadow refinement verified
- [x] R7.4 Hero editorial & CTA shadow standardization verified

---

## 5. SEO & Schema Verification

- **Canonical Tag**: `<link rel="canonical" href="https://ezy.sg/" />`
- **Robots.txt**: `User-agent: * Allow: / Sitemap: https://ezy.sg/sitemap.xml`
- **Sitemap.xml**: `<loc>https://ezy.sg/</loc>`
- **Structured Data**: Organization, WebSite, SoftwareApplication, and FAQPage JSON-LD schemas active.

---

## Final Release Status

**R7.4 PRODUCTION DEPLOYED — VERIFIED**
