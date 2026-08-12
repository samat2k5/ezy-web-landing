# EZYHR R2 — LEAD ROUTING ARCHITECTURE REVIEW REPORT

**Product:** ezyHR Cloud HRMS & Payroll Platform  
**Parent Initiative:** ezy SaaS by REALTEK ENGINEERING PTE. LTD. (Singapore UEN: 201723665M)  
**Target Marketing Domain:** `https://ezy.sg/`  
**Production SaaS Portal:** `https://hr.ezy.sg/`  
**Report Date:** August 13, 2026  

---

## A. Current Architecture Overview

The repository (`ezyHR.sg - Landing Page R1`) contains a standalone, client-side React 18 + TypeScript + Vite static web application.

- **Frontend Bundle:** Compiled to static HTML/JS/CSS assets for distribution.
- **Form Mechanics:** The **Book a Demo** (`DemoRequestModal.tsx`) and **Start Free Trial** (`FreeTrialModal.tsx`) forms update ephemeral React component state (`submitted = true`).
- **Data Persistence & Transmission:** Currently **0 HTTP POST calls**, **0 API endpoints**, **0 database connections**, and **0 automated email integrations**.

```
Public User on https://ezy.sg/
        │
        ▼
[React Landing Page] ──(State Only)──► [UI Success Screen]
        │
        └─► (No Data Saved, No Email Sent, No Webhook Triggered)
```

---

## B. Existing Backend & API Findings

1. **Repository Scope:** The current workspace repository is strictly a frontend client application. It contains no Express/Node.js backend server, serverless functions, or API routes.
2. **Production Application Backend (`hr.ezy.sg`):** The live customer SaaS portal operates separately at `https://hr.ezy.sg/` hosted on Railway, backed by a PostgreSQL database (`Postgres-tVe4`).
3. **Public API Endpoints:** No public REST endpoints currently exist on `https://ezy.sg/` to handle unauthenticated lead submissions.
4. **CORS Configuration:** `https://hr.ezy.sg/` does not currently expose a CORS-enabled public endpoint for cross-origin POST requests originating from `https://ezy.sg/`.

---

## C. Existing Email Infrastructure Findings

1. **Client-Side Email Links:** Contact support is presented via standard HTML `mailto:support@hr.ezy.sg`.
2. **SDK & Dependencies:** No email transmission libraries (e.g., `resend`, `@sendgrid/mail`, `nodemailer`) are installed in `package.json`.
3. **Environment Variables:** No email API credentials (`RESEND_API_KEY`, `SMTP_HOST`, `SENDGRID_API_KEY`) are present in frontend source code or repository configuration.

---

## D. Existing Database Findings (`Postgres-tVe4`)

1. **Production HRMS Schema:** The Railway PostgreSQL instance (`Postgres-tVe4`) stores tenant employee master files, payroll histories, attendance logs, and statutory CPF records for active customers.
2. **Database Isolation Assessment:** 
   - **Direct Browser Access:** Standard web best practices prohibit connecting a static client bundle directly to PostgreSQL credentials.
   - **Co-locating Marketing Leads:** If leads are stored in `Postgres-tVe4`, they MUST be written to an isolated table (e.g., `public.marketing_leads`) via a secure backend proxy to prevent any risk of impacting production HRMS tenant tables.

---

## E. Security Considerations & Spam Prevention

1. **Credential Safety:** Server-side API keys, database connection strings, and SMTP passwords MUST NEVER be exposed in client-side Vite bundles.
2. **Anti-Spam & Bot Mitigation:** Unauthenticated public forms require bot protection (e.g., Cloudflare Turnstile, reCAPTCHA v3, or Honeypot input fields) to prevent automated spambots from flooding email inboxes or lead databases.
3. **Rate Limiting:** Public endpoints MUST enforce rate-limiting (e.g., max 5 submissions per IP per 15 minutes).

---

## F. Options Comparison Matrix

| Criteria | **OPTION A**<br>ezyHR Backend API (`hr.ezy.sg`) | **OPTION B**<br>New Railway Microservice | **OPTION C**<br>Third-Party Webhook (Formspree / Zapier) | **OPTION D**<br>Serverless Function + Resend |
| :--- | :--- | :--- | :--- | :--- |
| **Architecture** | Expose public `/api/v1/leads` route on existing Express backend | Dedicated Node.js lead microservice on Railway | External form service (Formspree / Make) | Serverless API route (Vercel / Cloudflare Worker) |
| **Recurring Cost** | **$0** (Reuses existing Railway app) | +$5/mo Railway container | **$0** (Free tier up to 50-100 leads/mo) | **$0** (Free tier up to 100k requests/mo) |
| **Credential Safety** | Server-side env vars | Server-side env vars | Service-side API keys | Server-side env vars |
| **Lead Storage** | Postgres `marketing_leads` table | Postgres `marketing_leads` table | Service Dashboard + CSV | Postgres / Cloud Storage / Email |
| **Email Notification** | Resend / Nodemailer via backend | Resend / Nodemailer via backend | Native email to `support@hr.ezy.sg` | Resend API to `support@hr.ezy.sg` |
| **Maintenance** | Requires backend dev & deployment | Requires 2nd container management | **Zero code maintenance** for owner | Low code maintenance |
| **Spam Protection** | Requires custom middleware | Requires custom middleware | **Built-in bot/spam filtering** | Requires Turnstile / Turnstile integration |
| **Risk to HRMS DB** | Low (if isolated table used) | **Zero risk** (Isolated API) | **Zero risk** (External isolation) | **Zero risk** (External isolation) |

---

## G. Recommended Architecture & Rationale

### **RECOMMENDED OPTION: OPTION C (Phase 1 Lead Webhook / Formspree) with OPTION A Migration Path**

#### Rationale for Phase 1 Deployment:
1. **Immediate Lead Protection:** Formspree / Webhook integration can be activated instantly without deploying backend code or exposing production HRMS API routes.
2. **Instant Email Notifications:** Every submitted Demo Request or Free Trial automatically delivers formatted lead notifications directly to `support@hr.ezy.sg`.
3. **Built-in Spam Filtering:** Automatically filters bot submissions before they reach sales inboxes.
4. **Zero Risk to Production HRMS:** Ensures public marketing traffic on `https://ezy.sg/` cannot impact or load the production `hr.ezy.sg` database (`Postgres-tVe4`).
5. **Non-Developer Friendly:** Business owners can easily view, export, and manage leads without accessing database management tools.
6. **Future-Proof Migration Path:** As lead volume grows, the POST payload structure can seamlessly switch to an internal Railway `/api/v1/leads` endpoint (Option A) without modifying form UI components.

---

## H. Required Files to Modify (When Approved)

When approved for implementation, only 2 component files will be updated with an HTTP `fetch()` call:

1. `src/components/modals/DemoRequestModal.tsx`
2. `src/components/modals/FreeTrialModal.tsx`

---

## I. Required Environment Variables

```env
# Client-side Vite Environment Variable (when configured)
VITE_LEAD_FORM_ENDPOINT="https://formspree.io/f/YOUR_ENDPOINT_ID"
```

---

## J. Estimated Implementation Complexity

- **Development Time:** ~30 to 45 minutes
- **Testing Verification:** Submit test lead → Verify HTTP 200 response → Verify email delivery to `support@hr.ezy.sg`.
- **Deployment Impact:** Zero downtime, static site deployment.

---

## K. Rollback Strategy

If the endpoint experiences downtime or is misconfigured, the form handlers fallback gracefully to a standard `mailto:support@hr.ezy.sg` mail link fallback while displaying the confirmation UI.

---

## Final Review Verdict

- **RECOMMENDED OPTION:** **OPTION C (Webhook Lead Relay to `support@hr.ezy.sg`)**
- **WHY:** Provides immediate, 0-cost, bot-protected lead delivery to `support@hr.ezy.sg` with zero deployment risk to the production HRMS database (`Postgres-tVe4`).
- **ESTIMATED IMPLEMENTATION:** 30–45 Minutes
- **DEPLOYMENT RISK:** **LOW**
