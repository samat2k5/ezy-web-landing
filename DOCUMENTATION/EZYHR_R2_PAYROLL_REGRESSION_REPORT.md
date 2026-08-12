# EZYHR R2 — PAYROLL REGRESSION QA EVIDENCE REPORT

**Product:** ezyHR Cloud HRMS & Payroll Platform  
**Parent Initiative:** ezy SaaS by REALTEK ENGINEERING PTE. LTD. (Singapore UEN: 201723665M)  
**QA Date:** August 13, 2026  
**Comparison Source:** `DOCUMENTATION/BACKUP_PRE_R2/src/` vs `src/`  
**Regression Audit Status:** PASS  

---

## 1. Executive Regression Summary

A line-by-line static code analysis and execution comparison of the **ezyHR R2 Payroll Engine & Simulator** was performed against the pre-R2 backup (`DOCUMENTATION/BACKUP_PRE_R2/src/sections/PayrollSimulatorSection.tsx`).

**Result:** Zero regression detected. The calculation logic in `PayrollSimulatorSection.tsx` is 100% byte-for-byte identical to the pre-R2 backup version. All statutory CPF age-tier formulas, monthly salary ceilings ($6,800 SGD), Employment Pass exemptions, Skills Development Levy (SDL) caps ($11.25 max), Self-Help Group (SHG) deductions, and net salary algorithms execute with 0 variance.

---

## 2. Line-by-Line Code Comparison Matrix

| Payroll Logic Element | Pre-R2 Implementation (`BACKUP_PRE_R2`) | Current R2 Implementation (`src/`) | Variance | Status |
| :--- | :--- | :--- | :--- | :--- |
| **CPF Ceiling** | `Math.min(salaryInput, 6800)` | `Math.min(salaryInput, 6800)` | `0` | **PASS** |
| **Age Under 55 Rates** | `emp: 20%, empr: 17%` | `emp: 20%, empr: 17%` | `0` | **PASS** |
| **Age 55 to 60 Rates** | `emp: 15%, empr: 12%` | `emp: 15%, empr: 12%` | `0` | **PASS** |
| **Age 60 to 65 Rates** | `emp: 9.5%, empr: 9%` | `emp: 9.5%, empr: 9%` | `0` | **PASS** |
| **Age Above 65 Rates** | `emp: 5%, empr: 7.5%` | `emp: 5%, empr: 7.5%` | `0` | **PASS** |
| **EP Residency Status**| `empCpf: 0, emprCpf: 0, netPay: salaryInput` | `empCpf: 0, emprCpf: 0, netPay: salaryInput` | `0` | **PASS** |
| **SDL Formula & Cap** | `Math.min(salaryInput * 0.0025, 11.25)` | `Math.min(salaryInput * 0.0025, 11.25)` | `0` | **PASS** |
| **SHG Contribution** | `shg = 3.00` (CDAC default) | `shg = 3.00` (CDAC default) | `0` | **PASS** |
| **Net Salary Formula** | `salaryInput - empCpf - shg` | `salaryInput - empCpf - shg` | `0` | **PASS** |

---

## 3. Representative Test Cases & Verification

### Test Case 1: Singapore Citizen (SC), Age Under 55, Gross Salary $5,500
- **Input:** `salaryInput = $5,500`, `ageGroup = 'under55'`, `residency = 'SC'`
- **Expected Result:**
  - Employee CPF: `Math.round(5500 * 0.20)` = **$1,100.00**
  - Employer CPF: `Math.round(5500 * 0.17)` = **$935.00**
  - SDL: `Math.min(5500 * 0.0025, 11.25)` = **$11.25**
  - SHG (CDAC): **$3.00**
  - Estimated Net Payable: `5500 - 1100 - 3` = **$4,397.00**
- **Current R2 Result:** `empCpf: 1100, emprCpf: 935, sdl: 11.25, netPay: 4397`
- **Difference:** `0`
- **Status:** **PASS**

---

### Test Case 2: Singapore Citizen (SC) Exceeding CPF Ceiling ($8,000 Salary), Age Under 55
- **Input:** `salaryInput = $8,000`, `ageGroup = 'under55'`, `residency = 'SC'`
- **Expected Result:**
  - Capped Salary Basis: `$6,800.00`
  - Employee CPF: `Math.round(6800 * 0.20)` = **$1,360.00**
  - Employer CPF: `Math.round(6800 * 0.17)` = **$1,156.00**
  - SDL: `Math.min(8000 * 0.0025, 11.25)` = **$11.25** (Capped at maximum $11.25)
  - SHG (CDAC): **$3.00**
  - Estimated Net Payable: `8000 - 1360 - 3` = **$6,637.00**
- **Current R2 Result:** `empCpf: 1360, emprCpf: 1156, sdl: 11.25, netPay: 6637`
- **Difference:** `0`
- **Status:** **PASS**

---

### Test Case 3: Senior Singapore Citizen (SC), Age 55 to 60, Gross Salary $6,000
- **Input:** `salaryInput = $6,000`, `ageGroup = '55to60'`, `residency = 'SC'`
- **Expected Result:**
  - Employee CPF: `Math.round(6000 * 0.15)` = **$900.00**
  - Employer CPF: `Math.round(6000 * 0.12)` = **$720.00**
  - SDL: `Math.min(6000 * 0.0025, 11.25)` = **$11.25**
  - SHG (CDAC): **$3.00**
  - Estimated Net Payable: `6000 - 900 - 3` = **$5,097.00**
- **Current R2 Result:** `empCpf: 900, emprCpf: 720, sdl: 11.25, netPay: 5097`
- **Difference:** `0`
- **Status:** **PASS**

---

### Test Case 4: Senior Employee, Age 60 to 65, Gross Salary $4,000
- **Input:** `salaryInput = $4,000`, `ageGroup = '60to65'`, `residency = 'SC'`
- **Expected Result:**
  - Employee CPF: `Math.round(4000 * 0.095)` = **$380.00**
  - Employer CPF: `Math.round(4000 * 0.09)` = **$360.00**
  - SDL: `Math.min(4000 * 0.0025, 11.25)` = **$10.00**
  - SHG (CDAC): **$3.00**
  - Estimated Net Payable: `4000 - 380 - 3` = **$3,617.00**
- **Current R2 Result:** `empCpf: 380, emprCpf: 360, sdl: 10.00, netPay: 3617`
- **Difference:** `0`
- **Status:** **PASS**

---

### Test Case 5: Employment Pass (EP) Foreign Employee, Gross Salary $9,000
- **Input:** `salaryInput = $9,000`, `ageGroup = 'under55'`, `residency = 'EP'`
- **Expected Result:**
  - Employee CPF: **$0.00** (Exempt)
  - Employer CPF: **$0.00** (Exempt)
  - SDL: `Math.min(9000 * 0.0025, 11.25)` = **$11.25**
  - SHG: **$0.00**
  - Estimated Net Payable: **$9,000.00**
- **Current R2 Result:** `empCpf: 0, emprCpf: 0, sdl: 11.25, netPay: 9000`
- **Difference:** `0`
- **Status:** **PASS**

---

## 4. Statutory & Payslip Presentation Scope

- **Payslip Presentation:** Clicking *"View Sample Itemized Payslip Preview"* triggers `PayslipPreviewModal.tsx`, which formats the simulated salary inputs into an MOM-compliant itemized payslip view (Basic Pay, Allowances, Employee CPF, Employer CPF, SDL, SHG, Net Pay).
- **IRAS / AIS / IR8A Scope:** The payroll section accurately describes the statutory export capabilities (`IRAS AIS File Export`, `Annual IR8A Tax Form Generation`) for Singapore employers.

---

## 5. Final Regression Status

### **PASS**

The ezyHR R2 implementation contains zero statutory calculation regressions compared to the pre-R2 baseline.
