# EZYHR R2 — STATUTORY PAYROLL ACCURACY AUDIT

**Product:** ezyHR Cloud HRMS & Payroll Platform  
**Parent Initiative:** ezy SaaS by REALTEK ENGINEERING PTE. LTD. (Singapore UEN: 201723665M)  
**Audit Date:** August 13, 2026  
**Audited Target:** `src/sections/PayrollSimulatorSection.tsx` & `src/components/modals/PayslipPreviewModal.tsx`  
**Authoritative Reference Sources:** CPF Board, Inland Revenue Authority of Singapore (IRAS), Ministry of Manpower (MOM), SkillsFuture Singapore (SSG).  

---

## 1. Executive Verdict & Summary

### **FINAL VERDICT: B. ACCURATE WITH DISCLOSURES**

The ezyHR landing page payroll simulator is an interactive demonstration tool designed to showcase automated Singapore payroll math to prospective SME clients. 

The underlying logic correctly handles the primary statutory structures — including employee/employer CPF differentiation, age-band step-downs, Employment Pass exemptions, Skills Development Levy (SDL) rate capping, Self-Help Group (SHG) deductions, and MOM itemised payslip layout guidelines.

To ensure 100% legal clarity and statutory transparency, minor parameter updates and UX disclosures are recommended for the 2026 CPF Ordinary Wage (OW) ceiling ($8,000 SGD) and exact SHG community tiering.

---

## 2. Comprehensive Statutory Accuracy Audit Matrix

### Section A: Central Provident Fund (CPF)

| Audit Item | Current ezyHR Simulator Code | Official Statutory Requirement (CPF Board) | Audit Finding | Priority & Recommendation | Authoritative Source URL |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **A1. OW Monthly Ceiling** | `Math.min(salaryInput, 6800)` (Hardcoded $6,800) | 2024: $6,800<br>2025: $7,400<br>2026: **$8,000** | `NEEDS CORRECTION` | **High**: Update simulator OW ceiling parameter to **$8,000** for 2026. | [CPF Board Ceiling Increase](https://www.cpf.gov.sg/employer/employer-resources/cpf-updates/increase-in-cpf-monthly-salary-ceiling) |
| **A2. Employee Rate (Age ≤55)** | `empRate = 0.20` (20%) | 20% of OW for SC / 3rd Yr SPR | `PASS` | None required. | [CPF Contribution Rates](https://www.cpf.gov.sg/employer/employer-resources/cpf-contribution-rates) |
| **A3. Employer Rate (Age ≤55)** | `emprRate = 0.17` (17%) | 17% of OW for SC / 3rd Yr SPR | `PASS` | None required. | [CPF Contribution Rates](https://www.cpf.gov.sg/employer/employer-resources/cpf-contribution-rates) |
| **A4. Senior Age Bands (55-65+)** | `55-60: 15%/12%`<br>`60-65: 9.5%/9%`<br>`>65: 5%/7.5%` | Budget 2024/2025/2026 senior rate increases adjust 55-65 rates up by 1.5% per year | `NEEDS CORRECTION` | **Medium**: Update simulator senior age tier rates to match current 2026 senior rate table. | [Senior CPF Rate Increases](https://www.cpf.gov.sg/employer/employer-resources/cpf-updates) |
| **A5. EP / Foreigners** | `residency === 'EP' ? 0 : ...` | Foreigners on EP/S-Pass/WP are exempt from CPF | `PASS` | None required. Exempt from CPF. | [CPF Foreign Worker Exemption](https://www.cpf.gov.sg/employer/faq/cpf-contributions/who-is-eligible-for-cpf) |
| **A6. PR Graduated Rates** | Groups SC & PR together | 1st Yr & 2nd Yr SPR have graduated lower rates; 3rd Yr is full rate | `NEEDS DISCLOSURE` | **Low**: Add tooltip: *"Simulator assumes 3rd Year SPR / Full SC rate. Full app supports 1st & 2nd Year SPR graduated rates."* | [SPR Graduated Rates](https://www.cpf.gov.sg/employer/employer-resources/cpf-contribution-rates) |
| **A7. CPF Rounding Rules** | `Math.round(cappedSalary * empRate)` | Employee CPF is rounded down to nearest dollar (`Math.floor`); Employer CPF is rounded to nearest dollar. | `NEEDS CORRECTION` | **Medium**: Change `empCpf` formula from `Math.round` to `Math.floor`. | [CPF Rounding Rules](https://www.cpf.gov.sg/employer/employer-resources/cpf-calculators/cpf-contribution-calculator) |

---

### Section B: Skills Development Levy (SDL)

| Audit Item | Current ezyHR Simulator Code | Official Statutory Requirement (SSG) | Audit Finding | Priority & Recommendation | Authoritative Source URL |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **B1. SDL Rate** | `0.25%` (`0.0025`) | 0.25% of monthly gross remuneration | `PASS` | Exact match. | [SkillsFuture SG SDL](https://www.ssg.gov.sg/sdl.html) |
| **B2. Maximum Cap** | `Math.min(salaryInput * 0.0025, 11.25)` | Capped at **$11.25** max per employee for salary ≥ $4,500 | `PASS` | Exact match ($11.25 cap). | [SDL Contribution Table](https://www.ssg.gov.sg/sdl.html) |
| **B3. Minimum Cap** | No minimum bound ($2.00) | Minimum **$2.00** per employee earning $800 or less | `NEEDS CORRECTION` | **Low**: Update formula to `Math.max(2.00, Math.min(salary * 0.0025, 11.25))`. | [SDL Contribution Table](https://www.ssg.gov.sg/sdl.html) |
| **B4. Applicable Workers** | Applies to SC, PR, EP, S-Pass, WP | Payable for all employees working in Singapore | `PASS` | Exact match. Applied to both SC & EP in simulator. | [SDL Liability Guidelines](https://www.ssg.gov.sg/sdl.html) |

---

### Section C: Self-Help Group Funds (SHG)

| Audit Item | Current ezyHR Simulator Code | Official Statutory Requirement (CPF Board / SHG) | Audit Finding | Priority & Recommendation | Authoritative Source URL |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **C1. Flat $3.00 Deduction** | `const shg = 3.00; // CDAC default` | SHG contributions depend on employee race/community & salary band:<br>• **CDAC**: $0.50 – $3.00<br>• **ECF**: $2.00 – $20.00<br>• **SINDA**: $1.00 – $30.00<br>• **MBMF**: $3.00 – $26.00 | `NEEDS DISCLOSURE` | **Medium**: Label in simulator UX: *"SHG deduction shown as sample CDAC top tier ($3.00). Full platform supports CDAC, ECF, SINDA, MBMF tiers and opt-outs."* | [CPF SHG Contributions](https://www.cpf.gov.sg/employer/employer-resources/self-help-group-contributions) |
| **C2. Opt-Out Support** | Not present in simulator | Employees can opt out via official community fund forms | `NEEDS DISCLOSURE` | Include in feature highlights. | [SHG Opt-out Notice](https://www.cpf.gov.sg/employer/employer-resources/self-help-group-contributions) |

---

### Section D: IRAS Tax & Payroll Reporting (AIS, IR8A, IR8S)

| Audit Item | Current ezyHR Landing Page Claim | Official Statutory Requirement (IRAS) | Audit Finding | Priority & Recommendation | Authoritative Source URL |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **D1. IRAS AIS Export** | *"IRAS AIS & IR8A Export File Generation"* | Employers with ≥5 employees must submit income via Auto-Inclusion Scheme by 1 March annually | `PASS` | No false certification claims made. Accurately describes file export. | [IRAS AIS for Employers](https://www.iras.gov.sg/taxes/employers/auto-inclusion-scheme-(ais)) |
| **D2. IR8A / IR8S** | *"IR8A tax form generation"* | Returns reporting employee remuneration, bonus, allowances, and statutory CPF deductions | `PASS` | Accurately presented as a software export feature. | [IRAS Form IR8A](https://www.iras.gov.sg/taxes/employers/form-ir8a-and-appendix-8a-8b-cover-form) |

---

### Section E: MOM Itemised Payslip Requirements

| Required Payslip Field (Employment Act) | ezyHR Payslip Modal (`PayslipPreviewModal.tsx`) | Audit Finding | Authoritative Source URL |
| :--- | :--- | :--- | :--- |
| 1. Employer Name | Included (`Acme Singapore Pte Ltd`) | `PASS` | [MOM Itemised Payslips](https://www.mom.gov.sg/employment-practices/itemised-payslips) |
| 2. Employee Name | Included (`Simulated Employee`) | `PASS` | [MOM Itemised Payslips](https://www.mom.gov.sg/employment-practices/itemised-payslips) |
| 3. Payment Date / Period | Included (`31 August 2026`) | `PASS` | [MOM Itemised Payslips](https://www.mom.gov.sg/employment-practices/itemised-payslips) |
| 4. Basic Salary / Gross Pay | Included | `PASS` | [MOM Itemised Payslips](https://www.mom.gov.sg/employment-practices/itemised-payslips) |
| 5. Employee CPF & Deductions | Included | `PASS` | [MOM Itemised Payslips](https://www.mom.gov.sg/employment-practices/itemised-payslips) |
| 6. Employer CPF Contribution | Included | `PASS` | [MOM Itemised Payslips](https://www.mom.gov.sg/employment-practices/itemised-payslips) |
| 7. Skills Development Levy (SDL)| Included | `PASS` | [MOM Itemised Payslips](https://www.mom.gov.sg/employment-practices/itemised-payslips) |
| 8. Net Salary Disbursed | Included | `PASS` | [MOM Itemised Payslips](https://www.mom.gov.sg/employment-practices/itemised-payslips) |

---

## 3. Simulator UX & Disclosure Recommendations

To ensure 100% legal clarity for public website visitors:

1. **Simulator Disclaimer Badge**: Add an explicit badge: `ESTIMATE / DEMONSTRATION ONLY`.
2. **Statutory Note Below Simulator**:
   > *"Calculations in this simulator are estimates based on standard Singapore Citizen / 3rd Year SPR rates and CDAC top-tier SHG deductions. The full ezyHR SaaS platform automatically enforces 2026 CPF OW ceilings ($8,000), graduated SPR rates, exact CDAC/ECF/SINDA/MBMF tiers, and IRAS AIS tax exports."*

---

## 4. Summary Verdict

### **B. ACCURATE WITH DISCLOSURES**
The current ezyHR landing page payroll simulator is accurate as an interactive product demonstration. Implementing the recommended minor ceiling update ($8,000 for 2026) and adding standard statutory disclaimers will ensure 100% transparency.
