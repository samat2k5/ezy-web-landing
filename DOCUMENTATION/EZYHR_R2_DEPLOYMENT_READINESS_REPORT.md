# EZYHR R2 — DEPLOYMENT READINESS & LEAD ROUTING AUDIT REPORT

**Product:** ezyHR Cloud HRMS & Payroll Platform  
**Parent Initiative:** ezy SaaS by REALTEK ENGINEERING PTE. LTD. (Singapore UEN: 201723665M)  
**Report Date:** August 13, 2026  
**Target Marketing Domain:** `https://ezy.sg/`  
**Customer Application Portal:** `https://hr.ezy.sg/`  
**Deployment Readiness Status:** B. READY AFTER LEAD ROUTING  

---

## 1. Executive Summary

All visual, responsive, statutory calculation, SEO, and legal entity requirements for the **ezyHR R2 Landing Page Redesign** have been verified and configured for the target marketing domain `https://ezy.sg/`.

The production portal authentication destination remains unchanged at `https://hr.ezy.sg/`.

A detailed lead routing audit of the **Book a Free Demo** (`DemoRequestModal.tsx`) and **Start Free Trial** (`FreeTrialModal.tsx`) forms reveals that form submissions currently execute as client-side React UI demonstrations without an active backend API or email webhook. 

To prevent silent lead loss upon public deployment, a serverless webhook (e.g., Zapier, Make, Formspree, Hubspot, or custom API endpoint) must be attached to the form submit handlers before pushing the site live.

---

## 2. Domain & Routing Configuration Audit

| Configuration Item | Pre-R2 State | Current R2 Deployment Configuration | Verification Status |
| :--- | :--- | :--- | :--- |
| **Marketing Domain (Canonical)** | `https://hr.ezy.sg/` | **`https://ezy.sg/`** | **VERIFIED** |
| **OpenGraph URL (`og:url`)** | `https://hr.ezy.sg/` | **`https://ezy.sg/`** | **VERIFIED** |
| **Twitter Card URL (`twitter:url`)**| `https://hr.ezy.sg/` | **`https://ezy.sg/`** | **VERIFIED** |
| **JSON-LD Schema URL (`url`)** | `https://hr.ezy.sg/` | **`https://ezy.sg/`** | **VERIFIED** |
| **Customer Sign In Destination** | `https://hr.ezy.sg/` | **`https://hr.ezy.sg/`** (Unchanged) | **VERIFIED** |
| **Customer Support Email** | `support@hr.ezy.sg` | **`support@hr.ezy.sg`** (Unchanged) | **VERIFIED** |
| **Legal Entity Disclosure** | REALTEK ENGINEERING PTE. LTD. (UEN: 201723665M) | REALTEK ENGINEERING PTE. LTD. (UEN: 201723665M) | **VERIFIED** |

---

## 3. Lead Capture & Modal Form Audit Findings

### Form 1: Book a Personalized ezyHR Demo (`DemoRequestModal.tsx`)
- **Submission Destination:** Local React component state (`submitted = true`).
- **Data Transmission:** **NONE**. No `fetch()` or `axios` HTTP POST request is triggered upon form submission.
- **Backend API / Webhook Endpoint:** **NOT CONFIGURED**. No endpoint URL is wired in the frontend code.
- **Local Storage / Persistence:** **NONE**. Data is ephemeral in React state and is reset when the modal closes.
- **Email Notification:** **NOT IMPLEMENTED**. No automated email notification is sent to `support@hr.ezy.sg` or sales managers.
- **Silent Lead Loss Risk:** **HIGH RISK** if published without a webhook. Prospective clients receive a UI success message (*"Demo Request Submitted!"*), but no lead data is captured.

---

### Form 2: 14-Day Free Evaluation Trial (`FreeTrialModal.tsx`)
- **Submission Destination:** Local React component state (`submitted = true`).
- **Data Transmission:** **NONE**. No HTTP POST request is triggered.
- **Backend API / Webhook Endpoint:** **NOT CONFIGURED**.
- **Local Storage / Persistence:** **NONE**.
- **Email Notification:** **NOT IMPLEMENTED**.
- **Silent Lead Loss Risk:** **HIGH RISK** if published without a webhook. Prospective clients receive a UI success message (*"Trial Environment Created!"*), but no email or lead data is transmitted.

---

## 4. Required Lead Routing Options Before Deployment

To resolve the lead routing requirement, choose one of the following standard implementation patterns:

### Option A: Webhook POST Integration (Recommended)
Attach a simple `fetch()` POST request inside `handleSubmit` in `DemoRequestModal.tsx` and `FreeTrialModal.tsx`:

```typescript
// Recommended Lead Routing Snippet
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    await fetch('YOUR_PRODUCTION_WEBHOOK_URL', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        source: 'ezyHR Landing Page R2',
        type: 'Demo Request',
        timestamp: new Date().toISOString(),
        ...formData
      })
    });
  } catch (err) {
    console.error('Lead routing error:', err);
  }

  setSubmitted(true);
};
```

### Option B: Formspree / Webhook Relay Service
Wired directly to `support@hr.ezy.sg` to instantly email sales representatives upon submission.

### Option C: CRM API Endpoint (HubSpot, Salesforce, Zoho)
Direct API payload transmission to your sales CRM instance.

---

## 5. Final Deployment Readiness Verdict

### **B. READY AFTER LEAD ROUTING**

The ezyHR R2 landing page application is technically, visually, statutorily, and architecturally complete and ready for production deployment on `https://ezy.sg/`. Deployment should proceed once a live lead-routing webhook URL is attached to the demo and free trial form submission handlers.
