# ezyHR R8.1.1 End-to-End Test Report

## 1. TEST CONTEXT
- **Environment**: Production (`ezy-web-landing-production.up.railway.app`)
- **Commit**: `cd76fe0`

## 2. AUTHORISED TEST: BUSINESS DEMO
- **Input**:
  - `type`: demo
  - `plan`: business
  - `name`: Business QA
  - `preferredContact`: whatsapp
  - `phone`: +65 91234567
- **Result**: PASS (Received HTTP 200, simulated due to missing production keys)
- **Validation**: Server successfully received and parsed the `whatsapp` contact preference and required `phone` parameter.

## 3. AUTHORISED TEST: PROFESSIONAL TRIAL
- **Input**:
  - `type`: trial
  - `plan`: professional
  - `name`: Trial QA
  - `preferredContact`: email
- **Result**: PASS (Received HTTP 200, simulated due to missing production keys)
- **Validation**: Form successfully defaulted to `email` preferred contact.

## 4. SECURITY & MATRIX TESTS (PRODUCTION ENFORCEMENT)
- Trial + Business: **REJECTED** (HTTP 400)
- Demo + Essential: **REJECTED** (HTTP 400)
- Demo + Professional: **REJECTED** (HTTP 400)
- Missing Phone for WhatsApp: **REJECTED** (HTTP 400)
- Missing Fields: **REJECTED** (HTTP 400)

## 5. EMAIL DELIVERY
- **Result**: FAIL / SIMULATED. Railway lacks the Resend credentials to actually deliver the lead to `support@hr.ezy.sg`. Wait on user configuration.
