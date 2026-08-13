# ezyHR SaaS — R8.0 Conversion Funnel Map

## Overview
This map documents the current routing state of the commercial funnel.

### Status Key:
- 🟢 **WORKING:** Functions identically to production expectations.
- 🟡 **PARTIAL:** Functions locally/visually, but loses intent or state.
- 🔴 **BROKEN:** Dead end; fails to transmit data or complete the loop.
- ⚪ **NOT IMPLEMENTED:** No infrastructure exists for this step.

---

## The Global Funnel

**VISITOR**
↓ (Navigates to landing page)
**HERO**
↓ (Engages with CTAs or scrolls)
**PRODUCT PROOF (Features, Core HR, Leaves, etc.)**
↓ (Reaches Payroll Simulator)
**PAYROLL SIMULATOR**
↓ (Clicks transition bridge)
**PRICING**
↓ (Selects tier)
**ESSENTIAL / PROFESSIONAL / BUSINESS**
↓ (Clicks Get Started)
**[ CURRENT ROUTING PATHS BELOW ]**

---

## 1. Demo Request Path

**HERO / NAVBAR** → `Book a Free Demo`
↓
**DemoRequestModal** (State collected locally)
↓
**Submit Form**
↓
🔴 **BROKEN:** Fake success screen presented. No email sent, no API called.

---

## 2. Free Trial Path

**HERO / NAVBAR** → `Start Free Trial`
↓
**FreeTrialModal** (State collected locally)
↓
**Submit Form**
↓
🔴 **BROKEN:** Fake success screen presented. No email sent, no API called.

---

## 3. Essential Purchase Path

**PRICING** → `Essential (S$4)`
↓
**Get Started**
↓
🟡 **PARTIAL:** Opens generic DemoRequestModal. Context (Essential plan selected) is lost.
↓
**Submit Form**
↓
🔴 **BROKEN:** Fake success screen presented. No email sent, no API called.

---

## 4. Professional Purchase Path

**PRICING** → `Professional (S$7)`
↓
**Get Started**
↓
🟡 **PARTIAL:** Opens generic DemoRequestModal. Context (Professional plan selected) is lost.
↓
**Submit Form**
↓
🔴 **BROKEN:** Fake success screen presented. No email sent, no API called.

---

## 5. Business Purchase Path

**PRICING** → `Business (S$10)`
↓
**Get Started**
↓
🟡 **PARTIAL:** Opens generic DemoRequestModal. Context (Business plan selected) is lost.
↓
**Submit Form**
↓
🔴 **BROKEN:** Fake success screen presented. No email sent, no API called.

---

## 6. Sign In Path

**NAVBAR / FOOTER** → `Sign In`
↓
🟢 **WORKING:** Successfully redirects to `https://hr.ezy.sg/`.
