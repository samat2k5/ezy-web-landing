# ezyHR R4.2 — Live Visual Audit Report

**Audit Date:** 2026-08-13
**Site Audited:** https://ezy-web-landing-production.up.railway.app/
**Viewport Evidence:** 1440×900 (desktop), 390×844 (mobile), full-page composite
**Auditor Perspective:** Senior SaaS Brand Designer / Art Director / Conversion UX
**Benchmark Reference:** BrioHR, Rippling, Deel, HiBob

---

## A. SCORECARD

| Dimension | Score | Notes |
|---|---|---|
| **A. Overall Visual Score** | **5.5 / 10** | Technically functional, visually underperforming |
| **B. First Impression (5-sec)** | **5 / 10** | Reads as a competent Tailwind template, not a premium brand |
| **C. Brand Distinctiveness** | **4.5 / 10** | ezyHR logo present but brand personality absent from page body |
| **D. Hero** | **5.5 / 10** | Type is large and bold; product UI too small, too low, lacks drama |
| **E. Colour** | **5 / 10** | Mint/teal gradient pleasant but dies at 10% of page; rest is white/slate |
| **F. Typography** | **6 / 10** | Headlines strong; eyebrow and body hierarchy inconsistent across sections |
| **G. Product Visual Storytelling** | **4.5 / 10** | UI mockups present but rectangularly boxed and editorially inert |
| **H. Premium SaaS Quality** | **5 / 10** | Clean and readable; never wows; feels assembled rather than designed |
| **I. Conversion Quality** | **6 / 10** | CTA buttons clear; social proof weak; value proposition not reinforced visually |
| **J. Mobile Visual Quality** | **5.5 / 10** | Functional; no drama; hero text-dominant with no visual anchor below fold |

---

## B. TOP 15 VISUAL PROBLEMS

### PROBLEM 1 — Hero has no product moment
**Priority: CRITICAL**

**Current Problem:** The hero is a centred text block with a tiny browser chrome fragment at the very bottom of the viewport. The product dashboard is not a visual element in the first impression. A visitor sees only: eyebrow badge, giant headline, subtext, two buttons, four feature badges, a sliver of UI. The product is an afterthought.

**Why It Weakens the Brand:** Rippling, Deel, HiBob and BrioHR all create a product desire moment — the product UI IS the hero. On ezyHR the product is hidden below the fold, making ezyHR feel like a marketing brochure, not a product.

**Recommended Visual Treatment:** Place the full dashboard UI composition — raised, at scale, with slight perspective tilt — breaking INTO the hero section from below. The headline appears beside or above the product. Use depth: floating stat cards, overlapping UI panels. Product fills 60% of the visible composition.

---

### PROBLEM 2 — Mint/teal gradient dies after the hero
**Priority: CRITICAL**

**Current Problem:** The hero has a pleasant soft mint-to-white gradient. By the second section ("HR shouldn't feel like spreadsheet management") the page is completely flat white. Every subsequent section is white or light grey. The colour story dies at 10% of the page scroll.

**Why It Weakens the Brand:** BrioHR maintains a continuous colour temperature throughout the page. ezyHR loses all colour identity immediately after the first fold. The remaining 90% of the page has no visual temperature.

**Recommended Visual Treatment:** Establish a colour arc for the entire page. The mint/cyan brand identity ripples in varying intensities: coloured eyebrow labels, subtle left-border accents, warm gradient strips in Payroll and AI sections, and a mint-tinted footer gradient. Colour travels the entire page as a throughline.

---

### PROBLEM 3 — Every section is a separate visual island
**Priority: CRITICAL**

**Current Problem:** Every section has a fully visible straight horizontal boundary. Sections end, sections begin. There is no visual bleed, diagonal cut, gradient overlap or asymmetric transition between any two adjacent sections. The page reads as components stacked in a list.

**Why It Weakens the Brand:** Premium SaaS pages use wave dividers, diagonal cuts, overlapping elements, and gradient bleeds to make the page feel like one continuous visual experience. The current ezyHR page feels like a documentation site.

**Recommended Visual Treatment:** Between key sections, use angled SVG dividers, soft gradient overlaps, or elements that bleed from one section into the next (e.g., a floating UI card from the Payroll section overlaps into the top of the AI section).

---

### PROBLEM 4 — All product UI mockups use identical compositional formula
**Priority: CRITICAL**

**Current Problem:** Every feature section (Core HR, Attendance, Leave, Payroll, AI) uses the same formula: left text column + right white-background rectangular card. Uniform size, identical placement, same visual weight, same border treatment. By the third section the pattern is completely predictable.

**Why It Weakens the Brand:** This is the visual signature of a template-assembled page, not a designed brand experience. BrioHR and Rippling vary their product compositions dramatically — sometimes full-bleed UI, sometimes perspective-tilted mockup, sometimes editorial typography with data overlays.

**Recommended Visual Treatment:** Break the formula: (a) full-width product moments at scale; (b) overlapping UI panels with depth shadows; (c) perspective-tilted dashboard screenshots with floating metric cards; (d) split-screen compositions where UI fills the entire right half of viewport; (e) alternating left/right placement at minimum.

---

### PROBLEM 5 — Hero headline colour split is formulaic
**Priority: HIGH**

**Current Problem:** "HR and Payroll," (black) then "Simplified for" (green) then "Singapore." (dark teal). The colour split appears mechanical — the last line gets the brand colour. This reads as a developer applying a CSS class, not a designer making a typographic statement.

**Why It Weakens the Brand:** On BrioHR, Deel, and HiBob, headline colour split creates semantic emphasis — the coloured word carries the brand's most important concept. On ezyHR, "Simplified for / Singapore" is descriptive rather than emotionally charged.

**Recommended Visual Treatment:** (a) Gradient text treatment — horizontal sweep from cyan through teal to indigo across all three lines; or (b) "Singapore." rendered at 2x the size of other lines; or (c) single word "Singapore." in full brand teal isolated on its own line at display scale.

---

### PROBLEM 6 — Business Benefits section is three generic cards
**Priority: HIGH**

**Current Problem:** Three evenly distributed pill-style cards with icon + headline + bullet points. Same size, same visual weight, same border treatment. This is a Tailwind component library default.

**Why It Weakens the Brand:** A premium SaaS brand communicates business outcomes through editorial typography, large numerical statements, and asymmetric visual composition — not uniform card grids.

**Recommended Visual Treatment:** Transform into an editorial section: large typographic numbers ("3x", "40%", "100%") as visual anchors — no card borders. A single horizontal editorial strip with oversized stats and supporting callout text on a subtle gradient. Inspired by Rippling's ROI section.

---

### PROBLEM 7 — AI section does not feel futuristic or cinematic
**Priority: HIGH**

**Current Problem:** The AI section uses a lavender/purple gradient and presents a chatbot-style UI card at modest scale. The headline "Ask your HR data anything" is strong, but the product composition is a small centred card on a plain gradient.

**Why It Weakens the Brand:** AI is ezyHR's most emotionally evocative differentiator. It should create a visual break — a section that feels like entering a different register. Current treatment: competent chatbot widget on purple. Needed: immersive, cinematic AI moment.

**Recommended Visual Treatment:** Full-bleed deep indigo or dark navy. Large glowing ambient light source behind the AI UI. AI interface at full scale, not a small card. Floating query examples in light typography around the central UI. The AI section should feel like a premium product advertisement.

---

### PROBLEM 8 — Integrations is a card catalogue, not an ecosystem
**Priority: HIGH**

**Current Problem:** Eight brand cards in a 4x2 grid on a cyan/sky gradient. While the per-brand gradient cards are improved, the uniform grid does not communicate "ecosystem" — it communicates "list of integrations."

**Why It Weakens the Brand:** An ecosystem should feel like a living network — ezyHR at the centre, integration brands in orbit. The current grid is a product catalogue.

**Recommended Visual Treatment:** Replace the uniform grid with a hub-and-spoke radial composition: ezyHR logo at the centre with connection lines radiating to integration logos positioned organically around it. Dark background so brand logos glow. Animated connection lines suggest live data flow.

---

### PROBLEM 9 — Mobile hero has no product visual
**Priority: HIGH**

**Current Problem:** Mobile hero: logo, hamburger, eyebrow tag, large headline, subtext, two buttons, four badges. The product UI is entirely below the fold. No premium visual moment in the mobile first view.

**Why It Weakens the Brand:** Mobile visitors (50%+ of traffic) receive no product experience in the first viewport. All benchmark SaaS competitors show a phone app mockup or prominent UI preview in the mobile hero viewport.

**Recommended Visual Treatment:** Below the buttons and badges on mobile, show a cropped, tightly framed phone/dashboard screenshot bleeding off the bottom edge of the screen. This creates immediate product desire before the user scrolls.

---

### PROBLEM 10 — Security reads as a compliance checklist
**Priority: HIGH**

**Current Problem:** Security section presents a grid of feature cards (encryption, MFA, SOC 2, etc.) on a light background — visually indistinguishable from the feature sections above it.

**Why It Weakens the Brand:** Security should communicate institutional trust — the feeling that payroll data is held in a vault. Current treatment says "we have a checklist." Needed treatment says "we are trusted infrastructure."

**Recommended Visual Treatment:** Dark section background (deep navy or charcoal). Two or three oversized trust statements in large typography: "Bank-grade encryption", "MOM-compliant since 2017", "Zero data breach record." Supporting details as small precision labels beneath. No card grid.

---

### PROBLEM 11 — Singapore Payroll undersells the brand's primary differentiator
**Priority: HIGH**

**Current Problem:** Singapore Payroll is ezyHR's core commercial differentiator. Currently presented with a clean UI mockup and bullet points on a standard light background. Correct in structure, visually insufficient for the most important claim on the page.

**Why It Weakens the Brand:** CPF automation, SDL, and MOM compliance are high-value capabilities HR directors specifically seek. The visual treatment communicates "another feature" rather than "Singapore-specific authority."

**Recommended Visual Treatment:** Unique visual identity for this section: warm amber/gold gradient background (distinct from everything else on the page), the payroll run interface at scale, and oversized editorial number statements ("CPF 2026 ceiling: $8,000", "Auto-calculated for every employee type").

---

### PROBLEM 12 — Pricing section is visually generic
**Priority: MEDIUM**

**Current Problem:** Standard three-column card layout with tiers, feature lists, and highlighted middle card. This is the Stripe pricing page pattern.

**Why It Weakens the Brand:** Pricing is the commercial close of the narrative. It should feel like a premium product decision moment, not a boilerplate comparison table.

**Recommended Visual Treatment:** Dark or deep gradient background (navy, dark teal, or rich indigo) to visually differentiate from feature sections above. Featured plan: elevated card with glow border and large-scale plan name. Reduce feature comparison lists to maximum 5 items per plan.

---

### PROBLEM 13 — FAQ is a plain vertical accordion
**Priority: MEDIUM**

**Current Problem:** FAQ section: vertically stacked accordion on plain white background. Questions in standard weight text.

**Why It Weakens the Brand:** FAQ is often the last interaction before a visitor converts or leaves. A visually premium FAQ makes the questions look worth reading.

**Recommended Visual Treatment:** Two-column editorial layout: oversized "FAQ" in display text on the left as a visual anchor, accordion items on the right. Subtle background tint (soft lavender or mint). Questions in medium-weight display size — not standard body weight.

---

### PROBLEM 14 — Final CTA closes quietly with no visual crescendo
**Priority: MEDIUM**

**Current Problem:** "Ready to simplify HR?" on a light teal/mint gradient with two buttons. Typographically standard. Visually quiet.

**Why It Weakens the Brand:** The final CTA is the last emotional impression of the brand. BrioHR, Rippling, HiBob all use their final CTA as a visual crescendo — maximum typography scale, bold colour, brand imagery.

**Recommended Visual Treatment:** Full-bleed dark section (deep teal or near-black). Headline at 72px+ maximum typographic weight with word-level colour treatment. Single prominent primary CTA button with glow effect. The ezyHR logo icon as a large background watermark (40% opacity) providing brand closure.

---

### PROBLEM 15 — Trust Strip / social proof is visually weak
**Priority: MEDIUM**

**Current Problem:** Greyscale partner/client logos on white background. "Trusted by Singapore businesses" eyebrow without customer names, testimonials, or supporting metrics.

**Why It Weakens the Brand:** Social proof is one of the most important B2B SaaS conversion signals. Logos without names, quotes, or metrics convert poorly for mid-market buyers.

**Recommended Visual Treatment:** Replace logo strip with social proof composition: 3 customer quote cards with name, company, and photo placeholder; a large-type metric bar ("1,200+ Singapore companies"); logos at higher opacity with company names visible.

---

## C. TOP 10 VISUAL OPPORTUNITIES

**1. Gradient Text Headline Treatment**
A CSS `background-clip: text` gradient across the hero headline — sweeping from teal through cyan to indigo — creates immediate colour impact without adding decorative elements. Used by Rippling, Linear, and Vercel for brand differentiation.

**2. Product UI at Full Scale, Perspective-Tilted**
The dashboard shown as a perspective-tilted composition (CSS `perspective` + `rotateX`) with floating stat cards overlapping from multiple layers — the depth and drama of a product advertisement vs. a UI card.

**3. Singapore Payroll as a Visual Authority Statement**
A unique amber/gold palette, oversized "CPF 2026" typographic statement, and payroll interface at scale. No Singapore HR competitor is doing this at this level of visual authority.

**4. AI Section as Full-Bleed Dark Moment**
A deep indigo/navy AI section with glowing UI creates the visual break a 21-section page needs at its midpoint. The one place where a cinematic dark background is not only acceptable but expected.

**5. Bento Grid for Platform Overview**
All five feature modules (Core HR, Attendance, Leave, Payroll, AI) presented simultaneously in a bento-style grid of varying tile sizes — immediate sense of product completeness without five separate scroll-heavy sections.

**6. Ecosystem as Radial Diagram**
A hub-and-spoke SVG/CSS radial diagram — ezyHR at centre, integration logos in orbit with animated connection lines — communicates "ecosystem" vs. "list." Not commonly done among Singapore HR SaaS competitors.

**7. Section-Level Colour Identity**
Each major section gets a signature colour accent (Core HR = blue, Payroll = amber, Leave = emerald, AI = indigo, Security = slate). Creates a visual navigation system that feels art-directed throughout the page.

**8. Editorial Number Statements**
Large typographic number statements — "40,000+ payslips generated", "100% CPF compliance", "$2.1B payroll processed" — as visual anchors far more powerful than bullet point lists.

**9. Mobile ESS as Premium Product Advertisement**
The Employee Self Service / mobile section as a premium product advertisement composition: dark background, phone mockup at scale with glowing edge shadow, key features in the surrounding space. Inspired by Apple product page compositions.

**10. Diagonal Cut Before Final CTA**
A single diagonal SVG divider before the Final CTA section — transitioning from the teal/mint palette into a deep dark — creates the visual crescendo the page currently lacks.

---

## D. R4.2 FINAL ART-DIRECTION RECOMMENDATION

### OVERARCHING DIRECTION

ezyHR must transition from:
> *"A well-built Tailwind SaaS page with ezyHR branding applied."*

To:
> *"A premium Singapore HR technology brand experience that happens to be built with Tailwind."*

The distinction is **intentionality**. Every premium SaaS brand page communicates that every visual decision was deliberately made by a designer. ezyHR's current page communicates that competent developers have assembled technically correct components.

---

### THE FIVE ART-DIRECTION PRINCIPLES FOR R4.2

**1. Product First, Copy Second**
Every section where a feature is sold must put the product UI at the centre of the visual composition — not as a right-aligned card, but as the dominant visual element. Copy explains. UI sells.

**2. Colour as Narrative, Not Decoration**
The mint/cyan/teal palette must travel the full length of the page — as gradient accents, coloured text, gradient borders, and coloured data labels inside UI mockups. Introduce warm amber for Payroll (authority) and deep indigo for AI (intelligence).

**3. Typography as Architecture**
Each section needs a typographic hierarchy that is visually distinctive at a glance: oversized display numbers, editorial-scale headlines, small precision labels like financial data typography, and body text that never competes with headlines. Headline-to-body size contrast should be dramatic.

**4. One Visual Break Per Scroll Unit**
For every 800px of vertical scroll, one visual element breaks the page's horizontal flow: a full-width gradient strip, an oversized typographic number, a tilted UI mockup, a dark section break. Without these, the page is a uniform grey-white march.

**5. The Page as a Brand Story**
The page should read: "Singapore is complicated. ezyHR makes it precise. Here is our product proving it." Every section should feel like the next chapter in that story — not a standalone feature card.

---

### SECTION-BY-SECTION DIRECTION SUMMARY

| Section | Current State | R4.2 Direction |
|---|---|---|
| **Hero** | Text + tiny UI sliver | Product UI at 60% visual weight; headline beside product; floating stat cards |
| **Problem** | Card list on white | Editorial dark strip; large pain-point typography; no card grid |
| **Trust Strip** | Greyscale logos | Customer quote cards + large metric numbers |
| **Platform Overview** | Standard feature bullets | Bento-style grid showing all modules simultaneously |
| **Core HR** | Left text / right card | Full-bleed product composition; UI fills right half of viewport |
| **Attendance** | Symmetric left/right | Asymmetric layout; UI overlaps section boundary |
| **Leave** | Symmetric left/right | Calendar UI at scale; floating approval notifications |
| **Singapore Payroll** | Standard light section | Amber/gold palette; authority typography; CPF numbers at editorial scale |
| **Payroll Simulator** | Interactive calculator | Dark background; terminal-precision UI feel |
| **AI** | Mid-purple gradient + small card | Deep indigo full-bleed; glowing ambient light; UI at scale |
| **Mobile ESS** | Feature list with phone | Premium phone advertisement composition; dark background |
| **Business Benefits** | Three generic cards | Editorial with oversized statistical numbers; no card grid |
| **Integrations** | Uniform 4x2 card grid | Radial hub-and-spoke diagram; dark background; logos in orbit |
| **Security** | Card grid on light bg | Dark navy; institutional trust typography; no card grid |
| **FAQ** | Plain vertical accordion | Two-column editorial layout; display-scale question text |
| **Pricing** | Standard 3-column cards | Dark gradient background; elevated featured card |
| **Final CTA** | Light gradient + buttons | Maximum typography scale; full-bleed dark; brand icon watermark |
| **Footer** | Dark, functional | Acceptable; add brand tagline reinforcement |

---

### PRIORITY EXECUTION ORDER FOR R4.2

| Priority | Item | Impact |
|---|---|---|
| 1 CRITICAL | Hero product composition | Biggest single impression improvement |
| 2 CRITICAL | Section colour arc | Fixes page colour narrative collapse |
| 3 CRITICAL | Section transitions (SVG dividers / gradient bleeds) | Page continuity |
| 4 CRITICAL | Business Benefits editorial number statements | Replace card grid |
| 5 HIGH | AI section dark full-bleed immersive treatment | Visual drama |
| 6 HIGH | Singapore Payroll amber authority palette + CPF editorial numbers | Brand authority |
| 7 HIGH | Integrations radial ecosystem diagram on dark background | Brand distinctiveness |
| 8 HIGH | Security dark institutional trust section | Trust signals |
| 9 MEDIUM | FAQ two-column editorial layout | Conversion quality |
| 10 MEDIUM | Final CTA typographic crescendo + brand watermark | Closing impression |

---

> This document is an art-direction audit only. No source code was modified.
> All payroll statutory calculations, CPF 2026 ceiling ($8,000), SDL rules, SHG disclosure, customer portal (https://hr.ezy.sg/), support email (support@hr.ezy.sg), canonical URL (https://ezy.sg/), company registration (REALTEK ENGINEERING PTE. LTD., UEN 201723665M), and all original logo assets remain untouched.
