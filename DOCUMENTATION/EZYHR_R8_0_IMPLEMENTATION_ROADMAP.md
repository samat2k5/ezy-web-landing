# ezyHR SaaS — R8.0 Implementation Roadmap

Based on the R8.0 Commercial Functionality Audit, the application boasts an incredibly robust visual architecture and mathematically precise pricing presentation. However, it completely lacks the backend commercial infrastructure required to process leads or preserve buyer intent.

The following roadmap is recommended to bring the application to full commercial readiness:

## R8.1: Critical Plan Routing & Intent Preservation (P1)
**Goal:** Ensure that when a user clicks "Get Started" on a specific plan, their selection is remembered and passed to the sales/trial funnel.
- Refactor `PricingSection.tsx` CTAs to pass a `planId` payload.
- Update `App.tsx` modal handlers to accept and store the selected plan.
- Update `DemoRequestModal.tsx` and `FreeTrialModal.tsx` to display and capture the chosen plan (Essential / Professional / Business).

## R8.2: Lead Delivery API & Resend Integration (P0)
**Goal:** Connect the front-end forms to a working backend to securely transmit leads to the ezyHR team.
- Create an API route or serverless function to securely handle form submissions.
- Integrate the Resend SDK.
- Configure outbound emails to `support@hr.ezy.sg` with the captured lead details.
- Implement an automated customer acknowledgement email ("Thank you for your interest in ezyHR").

## R8.3: Spam Protection & Form Hardening (P1)
**Goal:** Protect the new API endpoints from abuse before driving traffic.
- Implement rate limiting on form submissions.
- Add simple honeypot fields or server-side validation to block basic bots.
- Ensure proper error boundary handling and recovery in the UI if the network fails.

## R8.4: Privacy-First Conversion Analytics (P2)
**Goal:** Gain visibility into the funnel without violating PDPA or user privacy.
- Implement a lightweight, cookieless event tracker (like Plausible or custom dataLayer events).
- Track critical events: `hero_demo_click`, `pricing_professional_click`, `demo_form_submitted`.
- Strictly filter out PII (Personal Identifiable Information) from all event payloads.

## R8.5: SEO Commercial Correction (P2)
**Goal:** Correct search engine snippets to match reality.
- Update `index.html` SoftwareApplication Schema.
- Change `"price": "0"` to `"price": "4.00"`.
- Ensure all Google snippets reflect the S$4 entry point.
