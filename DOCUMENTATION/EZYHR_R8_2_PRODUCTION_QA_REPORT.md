# ezyHR R8.2 Production QA Report

## Verification Checklist
- **HTTP 200 (ezy.sg)**: PASS
- **HTTPS**: PASS
- **Canonical**: PASS (https://ezy.sg/ is enforced)
- **WWW Permanent Redirect (301)**: PASS (www.ezy.sg redirects to apex)
- **robots.txt**: PASS
- **sitemap.xml**: PASS
- **Calculator Loads**: PASS
- **No Console/Runtime Errors**: PASS
- **No Horizontal Overflow**: PASS
- **Desktop/Mobile (390px) Layout**: PASS

## Calculator Production Smoke Test
- **A. Age <=35**: PASS (Total CPF perfectly reconciles to OA + SA + MA)
- **B. Age 55-60**: PASS (Total CPF perfectly reconciles to OA + RA* + MA; FRS disclaimer visible)
- **C. EP / S-Pass ($0 CPF)**: PASS (Exempt status remains unchanged)
