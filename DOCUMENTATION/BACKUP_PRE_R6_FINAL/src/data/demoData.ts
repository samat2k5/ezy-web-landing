export interface SampleEmployeePayroll {
  id: string;
  name: string;
  role: string;
  department: string;
  monthlySalary: number;
  age: number;
  residency: 'SC' | 'SPR_3YR' | 'EP' | 'SPASS';
  grossPay: number;
  employeeCpf: number;
  employerCpf: number;
  sdl: number;
  shg: number;
  netPay: number;
}

export const DEMO_PAYROLL_EMPLOYEES: SampleEmployeePayroll[] = [
  {
    id: 'emp-001',
    name: 'Tan Wei Ming',
    role: 'Senior Software Engineer',
    department: 'Engineering',
    monthlySalary: 6800,
    age: 32,
    residency: 'SC',
    grossPay: 6800,
    employeeCpf: 1360,
    employerCpf: 1156,
    sdl: 17,
    shg: 3.00, // CDAC
    netPay: 5437.00
  },
  {
    id: 'emp-002',
    name: 'Nurul Huda Binte Mohamed',
    role: 'HR Specialist',
    department: 'Human Resources',
    monthlySalary: 4500,
    age: 28,
    residency: 'SC',
    grossPay: 4500,
    employeeCpf: 900,
    employerCpf: 765,
    sdl: 11.25,
    shg: 2.00, // MBMF
    netPay: 3598.00
  },
  {
    id: 'emp-003',
    name: 'Kavitha Ramasamy',
    role: 'Finance Manager',
    department: 'Finance',
    monthlySalary: 7200,
    age: 38,
    residency: 'SC',
    grossPay: 7200,
    employeeCpf: 1360, // capped at 6,800 monthly ceiling
    employerCpf: 1156,
    sdl: 18,
    shg: 7.00, // SINDA
    netPay: 5833.00
  },
  {
    id: 'emp-004',
    name: 'Alexander Chen',
    role: 'Product Designer',
    department: 'Design',
    monthlySalary: 5200,
    age: 29,
    residency: 'EP',
    grossPay: 5200,
    employeeCpf: 0, // EP no CPF
    employerCpf: 0,
    sdl: 13,
    shg: 0,
    netPay: 5187.00
  }
];

export const DEMO_DASHBOARD_STATS = {
  activeEmployees: 48,
  pendingLeaveRequests: 3,
  payrollStatus: 'Aug 2026 Ready',
  grossPayrollTotal: '$248,500.00',
  netPayrollTotal: '$198,800.00',
  totalCpfContribution: '$48,460.00',
  attendanceToday: '95.8%',
  onTimeClockins: 46,
  onLeaveToday: 2
};
