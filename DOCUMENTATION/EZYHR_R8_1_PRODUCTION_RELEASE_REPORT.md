# ezyHR R8.1 Production Release Report

## 1. RELEASE SUMMARY
- **Git Commit**: `d75a21d` ("feat: R8.1 secure lead capture and plan routing")
- **Railway Service**: `ezy-web-landing-production`
- **Visual Design**: FROZEN (R7.6.2 Visual Architecture Preserved)

## 2. PRODUCTION STATUS
- **Build**: PASS. `npm run build` executed successfully.
- **Static Site Rendering**: PASS. `GET /`, `robots.txt`, and `sitemap.xml` return HTTP 200 via Express.
- **SEO Schema**: PASS. Price schema accurately reflects 4.00 SGD.
- **Routing Integration**: PASS. The Frontend modal seamlessly constructs and transmits routing logic (`plan`, `type`) dynamically into the Express backend.

## 3. COMMERCIAL FUNNEL STATUS
- **DEMO**: BROKEN (Server missing API keys, yielding simulated output)
- **FREE TRIAL**: BROKEN (Server missing API keys, yielding simulated output)
- **ESSENTIAL**: WORKING (Frontend/Modal rendering & API connection established)
- **PROFESSIONAL**: WORKING (Frontend/Modal rendering & API connection established)
- **BUSINESS**: WORKING (Frontend/Modal rendering & API connection established)
- **SIGN IN**: WORKING
- **LEAD EMAIL DELIVERY**: BROKEN (Railway requires variable configuration)
- **CUSTOMER ACKNOWLEDGEMENT**: NOT ENABLED / ISSUES
- **RATE LIMITING**: VERIFIED (trust proxy correctly applied)

## 4. DEPLOYMENT BLOCKERS
**MANUAL CONFIGURATION REQUIRED**:
The API securely caught the missing `RESEND_API_KEY` configuration and correctly failed gracefully on production. To unblock the commercial funnel, the following environment variables must be securely injected via the Railway configuration dashboard:
1. `RESEND_API_KEY`
2. `LEADS_FROM_EMAIL` (e.g., `notifications@hr.ezy.sg`)
3. `LEADS_TO_EMAIL` (e.g., `support@hr.ezy.sg`)
