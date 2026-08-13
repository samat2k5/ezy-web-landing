# ezyHR R8.1 - Conversion Routing Report

## Objective
Pass context from the pricing plan CTA into the lead capture forms to prioritize sales routing.

## Implementation
1. **State Management**:
   - `App.tsx` now maintains `selectedPlan` state (`'general' | 'essential' | 'professional' | 'business'`).
   - The pricing tier buttons explicitly pass their respective ID when invoking `onOpenTrial` or `onOpenDemo`.
2. **Modal Context**:
   - `DemoRequestModal` and `FreeTrialModal` consume `selectedPlan`.
   - Modals display the selected plan intent dynamically to the user (e.g., "Interested plan: Professional").
3. **Backend Transmission**:
   - The `plan` context is sent via the payload to the API.
   - The generated internal notification email to the sales team explicitly states the requested plan tier to facilitate tailored outreach.
