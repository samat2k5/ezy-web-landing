# ezyHR R8.2 — SEO & Search Console Readiness Report

## Objective
To ensure complete semantic positioning and search-indexing readiness of the ezyHR application, particularly the Singapore Payroll Simulator for Google Search Console indexing.

## On-Page SEO Positioning
- **Canonical Status**: The canonical tag explicitly targets `https://ezy.sg/`, correctly overriding the underlying Railway domain.
- **Calculator Headline**: The main payroll simulator headline was successfully transitioned to an `H2` tag reading **Singapore CPF & Payroll Calculator 2026**. This directly impacts semantic strength without keyword stuffing.
- **Structural Metadata**: The Schema.org `SoftwareApplication`, `Organization`, and `WebSite` JSON-LD structures were verified and untouched, correctly preserving the S$4 base price offering.

## Google Search Console Readiness
The public-facing `robots.txt` and `sitemap.xml` components were audited:
- `robots.txt` correctly permits crawling and references the correct production sitemap.
- `sitemap.xml` properly designates `https://ezy.sg/` with a priority of 1.0. 
- WWW variations are handled externally (production network configuration) and consolidate into the root domain over time.

## Google Search Console Verification Steps
Since the domain is managed externally via DNS, **Domain Property Verification** is the recommended process.

Please follow these exact steps to verify ownership:
1. Navigate to Google Search Console (GSC).
2. Add a new property and select **Domain** (not URL Prefix).
3. Enter `ezy.sg` and click Continue.
4. GSC will provide a **TXT record** (e.g., `google-site-verification=abc...`).
5. Open your DNS provider (e.g., Cloudflare, Namecheap) and add a new TXT record for `@` (root) containing this exact string.
6. Once propagated, click "Verify" in Search Console.
7. Upon successful verification, navigate to **Sitemaps** on the left panel and submit `https://ezy.sg/sitemap.xml`.
8. Proceed to the **URL Inspection Tool** to inspect `https://ezy.sg/` and optionally request indexing if not yet naturally crawled.
