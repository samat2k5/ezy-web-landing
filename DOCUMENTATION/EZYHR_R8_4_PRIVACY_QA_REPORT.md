# ezyHR R8.4 — Privacy & QA Report

## Release Context
Release R8.4 introduces Plausible Analytics to the `ezy.sg` domain to track website marketing conversions without compromising user privacy or violating the Singapore PDPA framework established in R8.3.

## Privacy Assurance Verification

1. **No Personally Identifiable Information (PII) Leaks**:
   - Inspected `src/utils/analytics.ts` and all event dispatch points (`trackEvent`).
   - Confirmed that form fields (names, emails, company names, phone numbers) are **never** passed as event properties to Plausible.
   - Properties are strictly limited to hardcoded application state identifiers (`source`, `plan`).

2. **No Tracking Cookies / Invasive Fingerprinting**:
   - Plausible Analytics operates cookie-less by default.
   - The implementation adheres to the PDPA by not identifying individual users across sessions or platforms.

3. **Domain Restriction**:
   - The Plausible snippet is locked to `data-domain="ezy.sg"`.
   - Analytics will not bleed into the `hr.ezy.sg` Customer portal or expose Customer activities.

4. **Privacy Policy Alignment**:
   - **File**: `src/pages/PrivacyPolicy.tsx`
   - **Update**: Added a minimal factual disclosure to Section 2 (Data Collected from Prospects) explicitly covering privacy-friendly website analytics.
   - The core R8.3 legal foundation remains intact without structural changes.

## Quality Assurance (QA) Verification

1. **Build Success**:
   - `npm run build` executed successfully without TypeScript or dependency errors.

2. **CPF Simulator Integrity**:
   - Executed `node test_cpf_allocation.cjs`.
   - **Result**: 22/22 tests passed. The core payroll logic remains untouched and fully functional.

3. **Event Trigger Accuracy**:
   - `Demo Submitted` and `Trial Submitted` events are correctly placed inside the `try` block of the submission handler, firing *only after* a successful `response.ok` check.
   - CTA clicks fire correctly and gracefully fall back via `window.plausible = window.plausible || function() { ... }` ensuring no JavaScript exceptions if the tracker is blocked by ad-blockers.

4. **Component Isolation**:
   - Analytics logic is separated into `src/utils/analytics.ts`.
   - Modals, Hero, Navbar, Pricing, Features, and Footer components only received targeted `onClick` additions, minimizing the risk of regressions.

## Conclusion
The R8.4 Analytics implementation is verified to be technically sound, privacy-safe, and fully compliant with the established R8.3 policies. It is ready for final review and production deployment.
