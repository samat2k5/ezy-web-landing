import { ModuleItem } from '../types';

export const MODULES_DATA: ModuleItem[] = [
  {
    id: 'employee-mgmt',
    title: 'Employee Management',
    shortDesc: 'Single source of truth for digital employee master records and organizational hierarchy.',
    iconName: 'Users',
    status: 'AVAILABLE',
    category: 'core',
    keyFeatures: [
      'Digital Employee Master File',
      'Employment & Salary History',
      'Interactive Org Chart & Reporting Line',
      'Employee Self-Service (ESS) Portal',
      'Manager Self-Service (MSS) Approvals',
      'Company Asset Allocation & Tracking',
      'Custom Employee Fields & Tagging'
    ]
  },
  {
    id: 'attendance',
    title: 'Time & Attendance',
    shortDesc: 'Multi-channel attendance tracking with GPS geofencing, QR check-in, and shift scheduling.',
    iconName: 'Clock',
    status: 'AVAILABLE',
    category: 'workforce',
    keyFeatures: [
      'Mobile GPS Geo-fenced Check-in',
      'Web Portal & Kiosk Check-in',
      'Shift & Roster Scheduling',
      'Automated Overtime (OT) Calculation',
      'Break & Meal Duration Tracking',
      'Automated Timesheet Generation',
      'Attendance Exception Alerts'
    ]
  },
  {
    id: 'leave',
    title: 'Leave Management',
    shortDesc: 'Paperless leave workflows with real-time balance calculations and team calendar visibility.',
    iconName: 'Calendar',
    status: 'AVAILABLE',
    category: 'workforce',
    keyFeatures: [
      'Real-time Statutory & Custom Leave Balances',
      'Multi-level Approval Workflows',
      'Interactive Team Leave Calendar',
      'Singapore Statutory Leave (Annual, MC, Childcare, Hospitalisation)',
      'Half-day & Hourly Leave Support',
      'Automated Carry-forward & Encashment Rules',
      'Leave Utilization Analytics'
    ]
  },
  {
    id: 'payroll',
    title: 'Singapore Payroll Engine',
    shortDesc: 'Designed for Singapore statutory compliance including CPF, SDL, SHG, AIS, and IR8A export.',
    iconName: 'DollarSign',
    status: 'AVAILABLE',
    category: 'payroll',
    keyFeatures: [
      'Automated CPF Computation (Employee & Employer)',
      'Skills Development Levy (SDL) & SHG Deductions (CDAC, ECF, SINDA, MBMF)',
      'IRAS Auto-Inclusion Scheme (AIS) & IR8A / IR8S Export',
      'Additional Wage (AW) & Statutory Cap Handling',
      'Bank GIRO Export (DBS, OCBC, UOB, HSBC, Standard Chartered)',
      'Itemized Mobile & Web Payslips with Password Protection',
      'Custom Earnings & Expense Reimbursement Items'
    ]
  },
  {
    id: 'claims',
    title: 'Claims & Expenses',
    shortDesc: 'Streamlined expense claim submission, receipt upload, and automated payroll sync.',
    iconName: 'Receipt',
    status: 'AVAILABLE',
    category: 'payroll',
    keyFeatures: [
      'Mobile Photo Receipt Capture',
      'Multi-currency & Category Rules',
      'Manager & Finance Approval Chains',
      'Direct Payroll Reimbursement Sync',
      'Claim Allowance Caps & Entitlements',
      'Audit-ready Expense Reports'
    ]
  },
  {
    id: 'documents',
    title: 'Document Vault & Expiry',
    shortDesc: 'Secure cloud repository for employment contracts, passes, and automated renewal alerts.',
    iconName: 'FileText',
    status: 'AVAILABLE',
    category: 'core',
    keyFeatures: [
      'Centralized Digital Document Storage',
      'Role-based Document Access Control',
      'Work Pass Expiry Tracking (EP, S-Pass, WP)',
      'Automated Reminder Alerts for HR & Employees',
      'E-signature & Policy Acknowledgement',
      'Secure Employee Self-Upload Portal'
    ]
  },
  {
    id: 'performance',
    title: 'Performance Tracking',
    shortDesc: 'Continuous appraisal frameworks, KPI goal alignment, and 360-degree feedback reviews.',
    iconName: 'TrendingUp',
    status: 'COMING SOON',
    category: 'core',
    keyFeatures: [
      'Custom Review Templates & Checklists',
      'Self-Assessment & Manager Reviews',
      'Goal Tracking & Key Results (OKRs)',
      '360-Degree Peer Feedback',
      'Performance Merit & Rating Scales',
      'Historical Review Records'
    ]
  },
  {
    id: 'recruitment',
    title: 'Recruitment Pipeline',
    shortDesc: 'Candidate tracking, interview scheduling, and instant seamless onboarding conversion.',
    iconName: 'UserPlus',
    status: 'COMING SOON',
    category: 'core',
    keyFeatures: [
      'Visual Candidate Pipeline Stages',
      'Resume Repository & Candidate Notes',
      'Interview Scheduling & Feedback',
      'Digital Offer Letter Generation',
      '1-Click Hired Candidate Onboarding',
      'Pre-boarding Data Collection Forms'
    ]
  },
  {
    id: 'reporting',
    title: 'Workforce Analytics',
    shortDesc: 'Comprehensive executive dashboards for headcount, payroll costs, attrition, and leave.',
    iconName: 'BarChart3',
    status: 'AVAILABLE',
    category: 'ai',
    keyFeatures: [
      'Executive HR Dashboard Metrics',
      'Departmental Cost Distribution',
      'Turnover & Attrition Analysis',
      'Attendance & Tardiness Metrics',
      'Custom CSV/PDF Export',
      'Historical Audit Logs'
    ]
  },
  {
    id: 'ai-assistant',
    title: 'AI HR Assistant',
    shortDesc: 'Intelligent policy Q&A assistant, smart anomaly detection, and automated insights.',
    iconName: 'Sparkles',
    status: 'AVAILABLE',
    category: 'ai',
    keyFeatures: [
      'Natural Language Policy Q&A',
      'Payroll Calculation Anomaly Detection',
      'Attendance Pattern Insights',
      'Smart Document Expiry Notifications',
      'Natural Language HR Report Generator',
      'Automated Leave Request Summary'
    ]
  }
];
