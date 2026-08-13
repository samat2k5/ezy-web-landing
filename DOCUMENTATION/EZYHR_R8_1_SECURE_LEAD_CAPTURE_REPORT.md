# ezyHR R8.1 - Secure Lead Capture Report

## Objective
Convert the ezyHR marketing website from a presentation-only static site into a functional, secure commercial lead-capture system.

## Implementation Details
- **Architecture Transition**: Migrated from a purely static build to an Express.js backed application serving the SPA.
- **Backend Setup**: Added `server.js` acting as an API gateway before falling back to the SPA `index.html`.
- **API Endpoint**: Centralized all leads into a single, same-origin POST `/api/leads` endpoint.
- **Email Delivery**: Integrated the Resend Node.js SDK to securely route leads to the internal sales team, removing client-side email dependencies.

## Constraints Preserved
- The visual design from R7.6.2 remains frozen.
- The statutory payroll calculation engine remains fully intact and untouched.
- No database, Redis, or microservices were introduced.
