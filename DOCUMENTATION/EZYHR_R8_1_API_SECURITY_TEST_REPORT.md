# ezyHR R8.1 - API Security Test Report

## Objective
Ensure the new Express backend properly secures the `/api/leads` endpoint against spam and abuse.

## Security Layers Implemented
1. **Honeypot Validation**:
   - A hidden field (`website_url`) was added to the modals.
   - If populated (typically by automated bots), the API responds with a simulated success without processing the email or dispatching anything via Resend.
   - Tested and verified locally: `website_url` presence silently drops the request.
2. **Rate Limiting**:
   - `express-rate-limit` implemented (max 5 requests per 15 minutes per IP).
   - Configured `app.set('trust proxy', 1)` to handle Railway's proxy layer securely so client IPs are read correctly.
3. **Payload Validation**:
   - Server validates required fields based on request type ('demo' vs 'trial').
   - Rejects missing fields with 400 Bad Request.
4. **CORS Policy**:
   - Locked down to `['https://ezy.sg', 'https://ezy-web-landing-production.up.railway.app', 'http://localhost:3000', 'http://localhost:5173']`.
