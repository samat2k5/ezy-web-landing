# ezyHR R8.4 — Analytics Technical Report

## Overview
This report documents the implementation of privacy-conscious website marketing analytics (Plausible Analytics) for the public marketing site (`ezy.sg`) in Release R8.4.

## Active Analytics Stack
- **Cloudflare Web Analytics**: (Pre-existing) Retained unmodified. Used for real-user performance, core web vitals, and infrastructure-level visibility.
- **Plausible Analytics**: (New in R8.4) Added for public marketing site conversion tracking, CTA attribution, and lead funnel insights.
- **Google Search Console**: (Pre-existing) Used for organic search and indexing.

## Plausible Implementation Details

### Setup & Configuration
- Added the Plausible script inside the `<head>` of `index.html`.
- Plausible is configured to run ONLY on the `ezy.sg` domain via `data-domain="ezy.sg"`.
- Uses the `script.manual.js` to ensure that we can manually trigger custom events.

### Custom Events Tracked
1. **Demo CTA Click**: Triggered when a user clicks any "Book a Demo" or "Speak to a Specialist" button.
2. **Trial CTA Click**: Triggered when a user clicks any "Start Free Trial" button.
3. **Pricing CTA Click**: Triggered when a user interacts with a pricing-specific CTA (e.g., "Explore Plans" or "View Plans").
4. **Plan Selected**: Triggered when a user selects a specific plan (e.g., Starter, Essential, Professional, Business) in the pricing section.
5. **Demo Submitted**: Triggered only upon *successful* submission of the Demo Request form.
6. **Trial Submitted**: Triggered only upon *successful* submission of the Free Trial form.

### Custom Properties
The custom events pass non-PII, controlled properties to provide context:
- `source`: The location on the page where the CTA was clicked (Allowed values: `hero`, `navbar`, `features`, `pricing`, `payroll_simulator`, `footer`, `other`).
- `plan`: The specific plan the user has selected or expressed interest in (Allowed values: `starter`, `essential`, `professional`, `business`, `general`).

### Privacy & Data Protection Controls
- **No PII**: All events strictly transmit controlled strings. No personal data (PII), form-field values, IP-derived custom properties, or session tokens are passed to Plausible.
- **Success-only tracking**: Form submissions (`Demo Submitted`, `Trial Submitted`) fire only when the underlying API request successfully responds, preventing false conversion signals.
- **Privacy Disclosure**: A specific factual amendment has been appended to the Privacy Policy (Section 2) stating:
  > **Website Analytics:** We use privacy-friendly website analytics to understand aggregated usage of our public website without tracking, identifying individuals, transmitting personal data, or using tracking cookies.

## Status
All required CTA points across the application have been successfully instrumented, and the changes are structurally isolated from the core application logic to maintain stability.
