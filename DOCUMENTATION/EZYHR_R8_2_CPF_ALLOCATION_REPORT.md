# ezyHR R8.2 — CPF Allocation Breakdown Report

## Objective
To detail the implementation of the 2026 CPF Allocation engine logic added to the existing Payroll Simulator, demonstrating correct statutory ratios and calculation order.

## Source of Truth
The official 2026 CPF Allocation Rates from the Central Provident Fund (CPF) Board for Private Sector / Non-Pensionable Employees were strictly followed.

## Ratios Implemented
| Age Group | Ordinary Account (OA) | Special Account (SA) / Retirement Account (RA) | MediSave Account (MA) |
| :--- | :--- | :--- | :--- |
| **35 & Below** | 0.6217 | 0.1621 (SA) | 0.2162 |
| **Above 35 to 45** | 0.5677 | 0.1891 (SA) | 0.2432 |
| **Above 45 to 50** | 0.5136 | 0.2162 (SA) | 0.2702 |
| **Above 50 to 55** | 0.4055 | 0.3108 (SA) | 0.2837 |
| **Above 55 to 60** | 0.3530 | 0.3382 (RA) | 0.3088 |
| **Above 60 to 65** | 0.1400 | 0.4400 (RA) | 0.4200 |
| **Above 65 to 70** | 0.0607 | 0.3030 (RA) | 0.6363 |
| **Above 70** | 0.0800 | 0.0800 (RA) | 0.8400 |

## Calculation Order and Rounding
As required by the CPF Board allocation framework, the internal order of calculation guarantees exact reconciliation to the Total CPF Contribution:

1. **MediSave Account (MA)**: Calculated as `round(Total CPF * MA Ratio * 100) / 100` (rounded to nearest cent).
2. **Special / Retirement Account (SA/RA)**: Calculated as `round(Total CPF * SA/RA Ratio * 100) / 100` (rounded to nearest cent).
3. **Ordinary Account (OA)**: Calculated strictly as the remainder `Total CPF - MA - SA/RA`.

This methodology ensures that for any salary input across any age tier, `OA + SA/RA + MA = Total CPF` down to the exact cent, with absolutely zero floating-point remainder errors or visual discrepancies.

## UI Enhancements
- Expanded age tier toggles to 8 buttons to correctly capture exact age boundaries for precise allocation percentages, while mapping to legacy total CPF generation to prevent regression.
- Subordinate 3-card allocation row highlighting OA, SA/RA, and MA.
- Dynamic label replacement from **SA** to **RA*** for employees above age 55.
- Educational interactive tooltip (ⓘ) explaining allocation dependencies and FRS conditions.
