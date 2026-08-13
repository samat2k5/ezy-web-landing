# ezyHR R8.1 - Environment Requirements

## Production Environment Variables
The following environment variables MUST be configured in Railway prior to deploying R8.1:

1. `RESEND_API_KEY`: 
   - A valid Resend API token required to dispatch emails.
2. `LEADS_FROM_EMAIL`: 
   - The verified sender address (e.g., `notifications@hr.ezy.sg`).
3. `LEADS_TO_EMAIL`: 
   - The internal sales inbox to receive lead notifications (e.g., `sales@hr.ezy.sg`).

## Start Command
- `npm start` (Executes `node server.js`).
- The Express server natively serves static assets from `dist/` and runs the API on `/api/*`.

## PORT binding
- Railway automatically provides the `PORT` environment variable. 
- The Express server dynamically binds to `process.env.PORT || 3000`.
