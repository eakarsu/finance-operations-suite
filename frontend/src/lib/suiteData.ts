export type Metric = {
  label: string;
  value: string;
  note: string;
};

export const sourceSystems = [
  {
    name: 'financialServices_salesforce',
    ownership: 'Reporting, statements, forecasting, budgeting, valuation',
    coverage: ['Reports', 'Statements', 'KPIs', 'Forecasting', 'AI reporting'],
  },
  {
    name: 'AiFinancialReportGenerator',
    ownership: 'Tax prep, tax planning, engagement documents',
    coverage: ['Forms', 'Income', 'Deductions', 'Multi-state planning', 'IRS notices'],
  },
  {
    name: 'AiTaxPrep',
    ownership: 'Tax workflow overlap and additional prep coverage',
    coverage: ['Returns', 'Credits', 'Documents', 'Integrations'],
  },
  {
    name: 'AIExpenseReportAuditor',
    ownership: 'Expenses, policy enforcement, approvals',
    coverage: ['Expense review', 'Fraud flags', 'Travel policy', 'Budgets'],
  },
  {
    name: 'AIDebtCollectionOptimizer',
    ownership: 'Collections, payments, settlements',
    coverage: ['Debtors', 'Campaigns', 'Payments', 'Settlements', 'Risk'],
  },
  {
    name: 'financialServices',
    ownership: 'Base finance shell patterns and dashboard framing',
    coverage: ['Dashboard shell', 'Finance workspace patterns'],
  },
];

export const dashboardMetrics: Metric[] = [
  { label: 'Open Expenses', value: '83', note: 'Awaiting review and policy validation' },
  { label: 'Returns In Progress', value: '24', note: 'Current tax pipeline' },
  { label: 'Active Debtors', value: '214', note: 'Collections worklist' },
  { label: 'Compliance Findings', value: '9', note: 'Outstanding audit items' },
];

export const healthMetrics: Metric[] = [
  { label: 'Report Jobs', value: '18', note: 'Scheduled finance outputs' },
  { label: 'Approval Backlog', value: '29', note: 'Pending budget or policy actions' },
  { label: 'Settlement Plans', value: '41', note: 'Active payment agreements' },
  { label: 'AI Tool Runs', value: '113', note: 'Last 24 hours' },
];

export const dashboardModules = [
  'Executive finance status',
  'Reporting freshness and scheduled exports',
  'Expense controls and approval backlog',
  'Tax preparation pipeline',
  'Collections and receivables status',
  'Audit and compliance alerts',
  'AI operations and assistant usage',
  'Recent documents and exceptions',
];

export const workflowHighlights = [
  'Month-end reporting and export pack review',
  'Tax return assembly and filing readiness',
  'Expense audit, fraud flags, and approval routing',
  'Debtor campaign management and settlement tracking',
];
