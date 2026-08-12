# EZYHR R2 — LEAD ROUTING PROVIDER COMPARISON REPORT

**Product:** ezyHR Cloud HRMS & Payroll Platform  
**Parent Initiative:** ezy SaaS by REALTEK ENGINEERING PTE. LTD. (Singapore UEN: 201723665M)  
**Target Marketing Domain:** `https://ezy.sg/`  
**Notification Recipient:** `support@hr.ezy.sg`  
**Report Date:** August 13, 2026  

---

## 1. Executive Summary & Resend Reusability Assessment

### **Can Existing Resend Infrastructure Be Directly Reused from Client-Side Code?**
**NO (Not directly from client-side React code).**

Resend requires a secret API key (`re_...`) to send emails. In a client-side React application (`https://ezy.sg/`), embedding a Resend secret key in client-side code (e.g. `import.meta.env.VITE_RESEND_KEY`) would expose the key in plaintext inside compiled JavaScript bundles. Anyone inspecting browser developer tools could extract the key and send unauthorized emails using the ezyHR domain.

However, if paired with a serverless proxy (e.g., Cloudflare Worker or Vercel Edge Function), Resend is an outstanding 0-cost option ($0/mo for 3,000 emails/month).

---

## 2. Comprehensive Provider Evaluation Matrix

### 1. Formspree

| Dimension | Evaluation Details |
| :--- | :--- |
| **A. Monthly / Annual Cost** | **$0 / month** (Free Tier) \| $10 / month (Gold Tier) |
| **B. Free-Tier Limits** | 50 form submissions per month (Sufficient for B2B SME demo requests) |
| **C. Spam Protection** | Built-in reCAPTCHA v3 / hCaptcha, Akismet AI spam filtering, honeypot inputs |
| **D. Email Delivery Method** | Instant HTML-formatted notification sent directly to `support@hr.ezy.sg` |
| **E. Lead Storage** | Formspree Web Dashboard + CSV / JSON download |
| **F. Data Retention** | Persistent until manually deleted by account administrator |
| **G. PDPA / Privacy** | GDPR & Singapore PDPA aligned; SOC 2 Type II compliant service |
| **H. API / Webhook Security** | Public form endpoint ID (`https://formspree.io/f/{hash}`); **0 API secrets exposed** |
| **I. Ease of Setup** | **Extremely Easy** (~15 minutes setup) |
| **J. Ease of Migration** | **Seamless** (Updating 1 endpoint URL string in `fetch` call) |
| **K. Risk Level** | **LOW** |

---

### 2. Make (formerly Integromat)

| Dimension | Evaluation Details |
| :--- | :--- |
| **A. Monthly / Annual Cost** | **$0 / month** (Free Tier) \| $9 / month (Core Tier) |
| **B. Free-Tier Limits** | 1,000 operations / month, 2 active scenarios |
| **C. Spam Protection** | Requires custom scenario validation or Turnstile webhook verification |
| **D. Email Delivery Method** | Transmits via Make Email module / SMTP to `support@hr.ezy.sg` |
| **E. Lead Storage** | Google Sheets, Airtable, or Make Data Store |
| **F. Data Retention** | Configurable scenario execution logs (30 days default) |
| **G. PDPA / Privacy** | GDPR compliant; EU server hosting available |
| **H. API / Webhook Security** | Custom webhook URL; zero client-side secret exposure |
| **I. Ease of Setup** | Moderate (~30 minutes setup) |
| **J. Ease of Migration** | **Easy** |
| **K. Risk Level** | **LOW** |

---

### 3. Zapier

| Dimension | Evaluation Details |
| :--- | :--- |
| **A. Monthly / Annual Cost** | **$0 / month** (Free Tier) \| $19.99 / month (Starter) |
| **B. Free-Tier Limits** | 100 tasks / month, 2-step Zaps only |
| **C. Spam Protection** | Basic IP rate limiting on webhook endpoint |
| **D. Email Delivery Method** | Transmits via "Email by Zapier" to `support@hr.ezy.sg` |
| **E. Lead Storage** | Zapier Tables / Google Sheets |
| **F. Data Retention** | 30-day task history log |
| **G. PDPA / Privacy** | GDPR & SOC 2 compliant |
| **H. API / Webhook Security** | Webhook URL |
| **I. Ease of Setup** | Easy (~20 minutes setup) |
| **J. Ease of Migration** | **Easy** |
| **K. Risk Level** | **LOW** |

---

### 4. Web3Forms (Free Unlimited Webhook Relay)

| Dimension | Evaluation Details |
| :--- | :--- |
| **A. Monthly / Annual Cost** | **$0 / month** (100% Free Unlimited Submissions) |
| **B. Free-Tier Limits** | **Unlimited submissions** per month |
| **C. Spam Protection** | Honeypot field protection & built-in spam shield |
| **D. Email Delivery Method** | Direct instant email to `support@hr.ezy.sg` |
| **E. Lead Storage** | Direct email delivery; no third-party database retention required |
| **F. Data Retention** | Zero long-term server retention (Privacy-first relay) |
| **G. PDPA / Privacy** | Privacy-focused; no third-party tracking or lead data harvesting |
| **H. API / Webhook Security** | Public Access Key (`https://api.web3forms.com/submit`); **0 secrets exposed** |
| **I. Ease of Setup** | **Extremely Easy** (~10 minutes setup) |
| **J. Ease of Migration** | **Seamless** |
| **K. Risk Level** | **LOW** |

---

### 5. Serverless Cloudflare Worker + Resend API

| Dimension | Evaluation Details |
| :--- | :--- |
| **A. Monthly / Annual Cost** | **$0 / month** (Cloudflare 100k requests/day + Resend 3k emails/mo) |
| **B. Free-Tier Limits** | 3,000 emails / month via Resend; 100,000 requests / day via Cloudflare |
| **C. Spam Protection** | Cloudflare Turnstile integration + server-side rate limiting |
| **D. Email Delivery Method** | Direct API transmission via Resend to `support@hr.ezy.sg` |
| **E. Lead Storage** | Cloudflare KV or direct email transmission |
| **F. Data Retention** | Configurable server-side storage |
| **G. PDPA / Privacy** | Complete developer data ownership |
| **H. API / Webhook Security** | Resend API key kept **100% server-side** in Worker Secrets |
| **I. Ease of Setup** | Advanced (~45 minutes developer setup) |
| **J. Ease of Migration** | **Full Ownership** |
| **K. Risk Level** | **VERY LOW** |

---

## 3. Comparative Summary Table

| Provider | Monthly Cost | Free Submission Limit | Spam Protection | Secret Exposure Risk | Setup Time | Owner Maintainability |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Formspree** | **$0** | 50 / mo | Akismet + Captcha | **Zero** | 15 mins | Excellent |
| **Web3Forms** | **$0** | **Unlimited** | Honeypot + Shield | **Zero** | 10 mins | Excellent |
| **Make** | **$0** | 1,000 ops / mo | Custom Filtering | **Zero** | 30 mins | Good |
| **Zapier** | **$0** | 100 tasks / mo | Basic IP Limit | **Zero** | 20 mins | Good |
| **Cloudflare + Resend**| **$0** | 3,000 emails / mo | Turnstile + Edge | **Zero** | 45 mins | Developer Required |

---

## 4. Final Provider Recommendation

- **RECOMMENDED PROVIDER:** **Web3Forms** *(Primary Choice)* or **Formspree** *(Alternative Choice)*
- **RECOMMENDED ARCHITECTURE:** HTTPS `fetch()` POST request sending JSON payload from client-side React modals directly to the public access key endpoint.
- **EXPECTED COST:** **$0 / month**
- **IMPLEMENTATION TIME:** **15 - 20 Minutes**
- **SECURITY RISK:** **VERY LOW** (Zero API secrets exposed; zero access to production HRMS PostgreSQL database `Postgres-tVe4`).
- **MIGRATION PATH:** 100% seamless. When the production ezyHR Express backend (`hr.ezy.sg`) is ready to expose an internal `/api/v1/leads` route, simply replace the endpoint URL in the single `fetch()` call.
