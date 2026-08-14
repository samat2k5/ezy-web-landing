# EZYHR R8.3 PRODUCTION RELEASE REPORT

**Date:** 15 August 2026
**Target:** R8.3 — Legal, PDPA & Commercial Policy Foundation

### Overview
This release implements the legal and commercial policy foundation for ezyHR, strictly limited to the addition of PDPA-aligned legal documentation and corresponding user consent tracking on the public website.

### Changes
1. **Privacy Policy Final Correction:** Added explicit data destruction commitment: "When retention is no longer necessary for such purposes, we will take reasonable steps to delete, anonymise or otherwise cease retaining the personal data."
2. **Terms of Service Final Correction:** Removed the word "entirely" regarding customer statutory responsibility in Section 3.2.
3. **Build Result:** `npm run build` PASS.
4. **CPF Regression:** `node test_cpf_allocation.cjs` PASS (22/22 tests).
5. **Legal Route Verification:** The paths `/privacy-policy`, `/terms-of-service`, and `/payment-refund-policy` correctly route and display on all screen sizes.
6. **Form Regression:** Demo and Trial API functionality is strictly preserved.
7. **Production Verification:** Ready for commit and deployment.
