# ezyHR R8.1.1 Contact Preference Enhancement Report

## 1. IMPLEMENTATION SUMMARY
The lead capture system was successfully enhanced to capture the prospect's preferred contact method (Email, WhatsApp, or Either) across both the Demo and Free Trial modals.
The core architecture remains entirely untouched, continuing to utilize `server.js` and Resend for internal lead routing without introducing any external dependencies or HRMS integrations.

## 2. FORM & UI ENHANCEMENTS
- **Preferred Contact Selection**: Added semantic radio button controls.
- **WhatsApp Opt-in**: Added clear consent wording ("By selecting WhatsApp, you agree that ezyHR may contact you about this enquiry via WhatsApp.") which is displayed conditionally only when WhatsApp is selected.
- **Dynamic Required Fields**: 
  - `Mobile / WhatsApp` input dynamically becomes mandatory (`required` + `aria-required="true"`) when WhatsApp is the preferred contact method.
  - Otherwise, it remains optional.

## 3. SERVER-SIDE VALIDATION & PAYLOAD
The `/api/leads` payload was extended to securely handle the new inputs:
- **`preferredContact`**: Strictly validated against `['email', 'whatsapp', 'either']`. Fallback is `email`.
- **`phone`**: Validated for string type, max length (20), and regex format (`/^[\d\s+\-()]*$/`).
- **Conditional Rules Enforcement**: 
  - If `whatsapp` is the preferred contact, the server rejects the request (HTTP 400) if `phone` is missing or blank.
- All values are strictly sanitized with `escapeHtml` before insertion into the internal Resend email template.

## 4. INTERNAL NOTIFICATION & ACKNOWLEDGEMENT
- **Internal Lead Email**: The layout was upgraded to prominently highlight the selected `Preferred Contact` with a green highlight for the ezyHR team. `Mobile / WhatsApp` is distinctly displayed.
- **Customer Acknowledgement**: The automated response wording was refined to state: "Our team will contact you using your preferred contact method," correctly avoiding any implied promise of an immediate automated WhatsApp message.

## 5. SECURITY & BOUNDARIES
- **WHATSAPP API**: NOT INTEGRATED. (R8.1.1 strictly collects the preference).
- **AUTOMATED WHATSAPP MESSAGING**: NOT ENABLED.
- **ENQUIRY DATABASE**: NONE.
- **HRMS DEPENDENCY**: NONE.

## 6. LOCAL QA RESULTS
- Demo + Email + no phone: **PASS**
- Demo + WhatsApp + valid phone: **PASS**
- Demo + WhatsApp + missing phone: **REJECT (Expected)**
- Demo + Either + phone: **PASS**
- Trial + WhatsApp + valid phone: **PASS**
- Malformed phone format: **REJECT (Expected)**

## 7. COMMERCIAL ROUTING HARDENING
The `/api/leads` endpoint strictly enforces the following commercial type/plan combinations server-side, independently of the frontend:
- **Allowed**: `trial` + `essential`, `trial` + `professional`, `trial` + `general`, `demo` + `business`, `demo` + `general`.
- **Rejected**: `trial` + `business`, `demo` + `essential`, `demo` + `professional`.
Invalid combinations respond with `HTTP 400: Invalid lead type and plan combination`. Tests confirm 100% compliance with this matrix.
