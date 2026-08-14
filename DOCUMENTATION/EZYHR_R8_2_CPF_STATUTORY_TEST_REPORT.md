# ezyHR R8.2 — CPF Statutory Test Report

## Executive Summary
This report summarizes the statutory testing phase of the newly implemented 2026 CPF Allocation engine to ensure complete accuracy, calculation order fidelity, and non-regression of the existing overall CPF generation logic.

## Coverage Matrix
A dedicated test suite (`test_cpf_allocation.cjs`) was implemented and executed across 22 explicit age and salary variations.

### Core Age Representative Tests
- Age 30
- Age 40
- Age 48
- Age 53
- Age 57
- Age 63
- Age 68
- Age 72

### Exact Age Boundary Tests
- Age 35 and 36 (Transitioning out of <= 35 band)
- Age 45 and 46 (Transitioning out of > 35 to 45 band)
- Age 50 and 51 (Transitioning out of > 45 to 50 band)
- Age 55 and 56 (Transitioning from SA to RA accounts)
- Age 60 and 61 (Transitioning into lower rate band)
- Age 65 and 66 (Transitioning into senior rate band)
- Age 70 and 71 (Transitioning into oldest rate band)

## Validation Results

**1. CPF Calculation Order**
- **PASS**: The engine successfully computes MA first, SA/RA second, and allocates the precise remainder to OA, mitigating any trailing decimal inaccuracies.

**2. Age Boundaries & RA Transition**
- **PASS**: For age 55, the account is correctly labeled 'SA'. At age 56, the account correctly switches to 'RA'. At age 71, the correct >= 70 ratio is successfully used. 

**3. Total CPF Reconciliation**
- **PASS**: Across all 22 tests, `OA + SA/RA + MA` exactly matches the provided Total CPF integer, with zero mathematical drift.

**4. Commercial Funnel / Pre-existing Regression**
- **PASS**: The underlying variables (`empCpf`, `emprCpf`, `sdl`, `netPay`) are computationally identical to the R8.1 production baseline. No variables in the commercial funnel (Pricing, Leads, Resend) were accessed or modified.
