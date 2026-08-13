# ezyHR SaaS — R8.0 Commercial Functionality & Conversion Readiness Audit

## 1. Executive Summary
- **Overall Commercial Readiness Score:** 35/100
- **Status:** Front-end presentation is exceptionally polished and mathematically accurate. However, the commercial backend and form state routing are completely disconnected. The site is currently a static brochure without actual lead capture or plan routing capability.
- **Security/Performance:** Excellent frontend bundle sizes, but missing tracking and security headers (CSP).

## 2. Pricing Engine Audit
- **Essential:** S$4 / month. Annual math mathematically correct (S$3.40/mo, S$40.80/yr).
- **Professional:** S$7 / month. Annual math mathematically correct (S$5.95/mo, S$71.40/yr).
- **Business:** S$10 / month. Annual math mathematically correct (S$8.50/mo, S$102.00/yr).
- **Presentation:** The UI clearly and elegantly handles displaying both the discounted monthly equivalent and the annual billed amount. "GST included" and "No setup fee" are prominent.
- **Verdict:** CLEAR. Math and UX are highly polished.

## 3. Plan CTA Audit
- **Current Behavior:** Clicking "Get Started" on ANY pricing plan (Essential, Professional, Business) immediately calls the generic `onOpenDemo` handler. 
- **Data Preservation:** Fails entirely. The selected plan is NOT passed into the form state. A customer clicking "Get Started" on the S$10 Business plan is given a generic demo modal with no record of their intent.
- **Verdict:** BROKEN. (P1 Severity)

## 4. Free Trial Audit
- **Current Behavior:** Clicking "Start Free Trial" opens `FreeTrialModal.tsx`.
- **Form State:** Basic React state collection (company, email).
- **Backend/Delivery:** Completely non-functional. `handleSubmit` only sets `submitted = true`. There is no API call, no Resend integration, and no email delivery.
- **Verdict:** BROKEN. (P0 Severity)

## 5. Book a Free Demo Audit
- **Current Behavior:** Clicking "Book a Demo" opens `DemoRequestModal.tsx`.
- **Form State:** Extensive state collection (name, email, phone, company, modules).
- **Backend/Delivery:** Completely non-functional. Form submission fakes a success screen without making any network requests.
- **Verdict:** BROKEN. (P0 Severity)

## 6. Email / Resend Audit
- **Current Behavior:** Resend is NOT connected. There is no lead delivery architecture in the application.
- **Verdict:** ABSENT. (P0 Severity)

## 7. Sign In Audit
- **Current Behavior:** All "Sign In" links located in `Navbar.tsx` and `Footer.tsx` successfully route to `https://hr.ezy.sg/`.
- **Verdict:** PASS.

## 8. Pricing Anchor Audit
- **Current Behavior:** Only one `id="pricing"` exists. The conversion bridge on Payroll Simulator accurately directs down to the pricing section.
- **Verdict:** PASS.

## 9. Form UX Audit
- **Current Behavior:** Both modals use `useModalFocusTrap`. Forms utilize HTML5 validation (`type="email"`, `required`). ESC close and focus restoration work perfectly.
- **Gaps:** No double-submit protection against network requests (as there are no network requests yet), and no server-side validation.
- **Verdict:** PARTIAL. Frontend UX is excellent, backend UX is missing.

## 10. Mobile Conversion Audit
- **Current Behavior:** The 390x844 view successfully wraps all forms, CTAs, and pricing cards without horizontal overflow. The monthly/annual toggle works seamlessly on touch.
- **Verdict:** PASS.

## 11. Conversion Analytics Audit
- **Current Behavior:** No analytics pixels, tags, or `dataLayer` events exist in the source code.
- **Recommendation:** Implement privacy-conscious event taxonomy for CTA clicks and form submissions (e.g., `hero_demo_click`, `pricing_professional_click`).
- **Verdict:** ABSENT. (P2 Severity)

## 12. SEO Commercial Consistency
- **Current Behavior:** `index.html` schemas are mostly accurate, BUT the `SoftwareApplication` schema incorrectly lists `"price": "0"`.
- **Verdict:** ISSUES. Must update the schema to reflect starting price of S$4. (P2 Severity)

## 13. Security / Privacy Audit
- **Current Behavior:** `index.html` has no Content-Security-Policy (CSP) or strict security headers. Lead forms have no rate-limiting or server-side bot protection.
- **Verdict:** ISSUES. (P1 Severity)

## 14. Performance Audit
- **Bundle Size:** JS is 325kB (84kB gzip), CSS is 73kB (12kB gzip). 
- **Verdict:** PASS. Performance is highly optimized.

## 15. Statutory Engine Lock
- **Verification:** 
  - CPF OW Ceiling 2026: S$8,000 (Preserved)
  - Employee CPF: `Math.floor` (Preserved)
  - Employer CPF: `Math.round` (Preserved)
  - SDL: 0.25%, Min S$2, Max S$11.25 (Preserved)
  - EP: 0% CPF exemption (Preserved)
- **Verdict:** PASS.

## 16. Prioritised Findings

| ID | Area | Finding | Severity | Conversion Impact | Recommended Action | Code Change Required? | Deployment Required? |
|---|---|---|---|---|---|---|---|
| F1 | Trial Form | Form does not transmit data | P0 | Blocks all trial signups | Connect form to Resend/API | Yes | Yes |
| F2 | Demo Form | Form does not transmit data | P0 | Blocks all demo leads | Connect form to Resend/API | Yes | Yes |
| F3 | Plan Routing | Pricing cards don't preserve intent | P1 | High friction for buyers | Pass plan ID into form state | Yes | Yes |
| F4 | Security | Missing bot/spam protection | P1 | Lead spam risk | Add rate limit / simple honeypot | Yes | Yes |
| F5 | SEO Schema | Price listed as "0" | P2 | Incorrect Google snippets | Update to S$4 in index.html | Yes | Yes |
| F6 | Analytics | No event tracking | P2 | Blind to conversion funnel | Add lightweight tracking layer | Yes | Yes |
