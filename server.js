import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Since we are using ES modules ("type": "module" in package.json)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Trust proxy for Railway so rate limiting gets the real client IP
app.set('trust proxy', 1);

// Middleware
app.use(cors());
app.use(express.json());

// Rate Limiting: 5 requests per 15 minutes per IP
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: 'Too many requests, please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Initialize Resend
// IMPORTANT: Will only work if RESEND_API_KEY is available in environment
const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_123');

// Configurable sender and recipient
const FROM_EMAIL = process.env.LEADS_FROM_EMAIL || 'ezyHR <notifications@hr.ezy.sg>';
const TO_EMAIL = process.env.LEADS_TO_EMAIL || 'support@hr.ezy.sg';

// Simple HTML escaping to prevent injection in emails
const escapeHtml = (unsafe) => {
  if (!unsafe) return '';
  return String(unsafe)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

// API Endpoint for Lead Capture
app.post('/api/leads', apiLimiter, async (req, res) => {
  try {
    const { 
      type, // 'demo' or 'trial'
      plan, // 'general', 'essential', 'professional', 'business'
      name, 
      email, 
      company, 
      employeeCount,
      phone,
      message,
      modules, // optional array
      preferredContact, // 'email', 'whatsapp', 'either'
      website_url // HONEYPOT
    } = req.body;

    // 1. Honeypot check
    if (website_url) {
      // Silently discard to fool bots
      return res.status(200).json({ success: true });
    }

    // 2. Validation
    const allowedTypes = ['demo', 'trial'];
    const allowedPlans = ['general', 'essential', 'professional', 'business'];
    const allowedContacts = ['email', 'whatsapp', 'either'];

    if (!type || !allowedTypes.includes(type)) {
      return res.status(400).json({ error: 'Invalid lead type' });
    }
    if (!plan || !allowedPlans.includes(plan)) {
      return res.status(400).json({ error: 'Invalid plan context' });
    }

    // 2a. Commercial Routing Hardening
    const isInvalidCombo = 
      (type === 'trial' && plan === 'business') ||
      (type === 'demo' && (plan === 'essential' || plan === 'professional'));
      
    if (isInvalidCombo) {
      return res.status(400).json({ error: 'Invalid lead type and plan combination' });
    }

    if (!name || typeof name !== 'string' || name.trim().length === 0 || name.length > 100) {
      return res.status(400).json({ error: 'Invalid name' });
    }
    if (!email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email) || email.length > 254) {
      return res.status(400).json({ error: 'Invalid email' });
    }
    if (!company || typeof company !== 'string' || company.trim().length === 0 || company.length > 150) {
      return res.status(400).json({ error: 'Invalid company' });
    }
    
    // preferredContact defaults to 'email' if not provided (for backwards compatibility/safety)
    const pContact = preferredContact || 'email';
    if (!allowedContacts.includes(pContact)) {
      return res.status(400).json({ error: 'Invalid preferred contact method' });
    }

    if (phone && (typeof phone !== 'string' || phone.length > 20 || !/^[\d\s+\-()]*$/.test(phone))) {
      return res.status(400).json({ error: 'Invalid phone number format' });
    }

    if (pContact === 'whatsapp' && (!phone || phone.trim().length === 0)) {
      return res.status(400).json({ error: 'Mobile / WhatsApp number is required when WhatsApp is selected as preferred contact.' });
    }

    // Escape all user inputs for the email body
    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeCompany = escapeHtml(company.trim());
    const safeEmployeeCount = escapeHtml(employeeCount || 'Not specified');
    const safePhone = escapeHtml(phone || 'Not provided');
    const safePreferredContact = escapeHtml(pContact.charAt(0).toUpperCase() + pContact.slice(1));
    const safeMessage = escapeHtml(message || 'No additional message');
    const safeModules = Array.isArray(modules) ? escapeHtml(modules.join(', ')) : 'None';

    // 3. Prepare Internal Email
    const isDemo = type === 'demo';
    const planDisplay = plan === 'general' ? '' : ` — ${plan.charAt(0).toUpperCase() + plan.slice(1)}`;
    const internalSubject = isDemo 
      ? `[ezyHR] New Demo Request${planDisplay}`
      : `[ezyHR] New Free Trial Request${planDisplay}`;

    let internalHtml = `
      <h2>New ${isDemo ? 'Demo' : 'Free Trial'} Request</h2>
      <p><strong>Lead Type:</strong> ${isDemo ? 'Demo' : 'Free Trial'}</p>
      <p><strong>Selected Plan:</strong> ${plan.toUpperCase()}</p>
      <br/>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Company:</strong> ${safeCompany}</p>
      <p><strong>Work Email:</strong> ${safeEmail}</p>
      <p><strong>Mobile / WhatsApp:</strong> ${safePhone}</p>
      <p><strong>Preferred Contact:</strong> <span style="background-color: #f0fdf4; padding: 2px 6px; border: 1px solid #166534; color: #166534; font-weight: bold; border-radius: 4px;">${safePreferredContact}</span></p>
      <p><strong>Employee Count:</strong> ${safeEmployeeCount}</p>
      <p><strong>Submitted Time:</strong> ${new Date().toISOString()}</p>
    `;

    if (isDemo) {
      internalHtml += `<p><strong>Modules of Interest:</strong> ${safeModules}</p>`;
      internalHtml += `<p><strong>Message:</strong><br/>${safeMessage.replace(/&#10;|\n/g, '<br/>')}</p>`;
    }

    // 4. Send Internal Email via Resend
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY missing. Simulating success for local development.");
      return res.status(200).json({ success: true, simulated: true });
    }

    const { data: internalData, error: internalError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: safeEmail,
      subject: internalSubject,
      html: internalHtml
    });

    if (internalError) {
      console.error("Resend internal delivery error:", internalError);
      // NEVER return success if the internal lead delivery failed
      return res.status(502).json({ error: 'Failed to deliver lead. Please try again or contact support.' });
    }

    // 5. Send Customer Acknowledgement Email (Best effort, ignore if fails)
    const customerSubject = isDemo 
      ? "We've received your ezyHR demo request"
      : "We've received your ezyHR free trial request";

    const planAcknowledgement = plan !== 'general' 
      ? `<p>Selected plan: <strong>${plan.charAt(0).toUpperCase() + plan.slice(1)}</strong></p>` 
      : '';

    const customerHtml = `
      <p>Hi ${safeName},</p>
      <p>Thanks for your interest in ezyHR.</p>
      <p>We've received your ${isDemo ? 'demo' : 'free trial'} request.</p>
      ${planAcknowledgement}
      <p>Our team will contact you using your preferred contact method.</p>
      <br/>
      <p>Regards,<br/>ezyHR<br/>EASY HR &bull; BETTER BUSINESS</p>
    `;

    // Fire and forget acknowledgement
    resend.emails.send({
      from: FROM_EMAIL,
      to: [safeEmail],
      subject: customerSubject,
      html: customerHtml
    }).catch(err => console.error("Resend customer acknowledgement error:", err));

    // 6. Return Success
    res.status(200).json({ success: true });

  } catch (err) {
    console.error("API error:", err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

// Serve static assets from 'dist' (SPA Fallback)
// The API routes are registered above this, so they take precedence.
app.use(express.static(path.join(__dirname, 'dist')));

// SPA wildcard fallback
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
