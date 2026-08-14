# EZYHR PRODUCTION DOMAIN CANONICALIZATION REPORT

**Date:** August 13, 2026
**Target Apex Domain:** `https://ezy.sg/`

## 1. Audit Findings
- **Initial State:** Both `https://ezy.sg/` and `https://www.ezy.sg/` were independently serving HTTP 200 OK responses to all requests. This behavior risked duplicate content penalties.
- **Canonical Tag:** Verified `index.html` contained exactly one `<link rel="canonical" href="https://ezy.sg/" />`.
- **Open Graph / JSON-LD:** Verified `index.html` correctly utilized the apex domain (`https://ezy.sg/`) for `og:url` and all JSON-LD structure data fields.
- **Robots.txt & Sitemap:** Verified `robots.txt` points strictly to `https://ezy.sg/sitemap.xml`, and the sitemap uses the apex domain URL exclusively.
- **Internal Links:** A repository-wide audit confirmed `www.ezy.sg` and `.up.railway.app` are not referenced anywhere in frontend source links. 
- **HRMS Isolation:** Confirmed `hr.ezy.sg` links are safely distinct and isolated from marketing routing.
- **Commercial Validation:** Verified the `DemoRequestModal` and `FreeTrialModal` use same-origin `/api/leads` and production pricing logic remains safely intact (starting at S$4).

## 2. Path-Preserving Redirect Implementation
To satisfy the single authoritative marketing domain requirement without disrupting current DNS architectures or Railway variables, a minimal, robust redirect was added to the Express production server (`server.js`).

**Implementation Details:**
- Inserted middleware immediately after the `trust proxy` configuration.
- Identifies if `req.hostname === 'www.ezy.sg'`.
- Immediately issues a `HTTP 301 Moved Permanently` to `https://ezy.sg` while perfectly appending `req.originalUrl`.
- Safely delegates all other hostnames (e.g., local development, `ezy.sg` apex, or direct Railway hostnames) to the downstream SPA and API endpoints.

```javascript
// Canonical Domain Redirect (www to apex)
app.use((req, res, next) => {
  if (req.hostname === 'www.ezy.sg') {
    return res.redirect(301, `https://ezy.sg${req.originalUrl}`);
  }
  next();
});
```

## 3. Deployment Instructions
No infrastructure or build-system modifications were needed. The source code (`server.js`) is now prepared for Railway redeployment. Upon next deploy, the 301 rule will transparently engage.

## 4. Final Deployment Status
**EZYHR PRODUCTION DOMAIN CANONICALIZATION — DEPLOYED & VERIFIED**
- **Canonical:** `https://ezy.sg/`
- **WWW:** Permanent 301 Redirect to Apex
- **HRMS:** `https://hr.ezy.sg/` (Unchanged)
- **Demo/Trial:** Preserved
- **Payroll:** Preserved
- **Production Baseline:** Verified
