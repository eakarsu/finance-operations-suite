export type EntityRecord = {
  id: string;
  name: string;
  status: string;
  owner: string;
  amount?: string;
  dueDate?: string;
  priority?: string;
};

export type FeatureEntitySet = {
  title: string;
  columns: string[];
  rows: EntityRecord[];
};

const COLUMNS = ['Name', 'Status', 'Owner', 'Amount', 'Due Date', 'Priority'];

export const featureEntitiesBySlug: Record<string, FeatureEntitySet> = {
  reporting: {
    title: 'Report Records',
    columns: COLUMNS,
    rows: [
      { id: 'rep-1', name: 'Q2 board package', status: 'In review', owner: 'Controller', amount: '$0', dueDate: '2026-05-26', priority: 'High' },
      { id: 'rep-2', name: 'Daily KPI export set', status: 'Queued', owner: 'Finance Ops', amount: '$0', dueDate: '2026-05-24', priority: 'Medium' },
      { id: 'rep-3', name: 'Variance packet', status: 'Exception', owner: 'FP&A Lead', amount: '$0', dueDate: '2026-05-25', priority: 'High' },
    ],
  },
  statements: {
    title: 'Statement Package Records',
    columns: COLUMNS,
    rows: [
      { id: 'stmt-1', name: 'April close package', status: 'Draft', owner: 'Accounting', amount: '$0', dueDate: '2026-05-27', priority: 'High' },
      { id: 'stmt-2', name: 'Cash flow QA set', status: 'Review', owner: 'Assistant Controller', amount: '$0', dueDate: '2026-05-25', priority: 'Medium' },
      { id: 'stmt-3', name: 'Quarter-end support binder', status: 'Ready', owner: 'Close Manager', amount: '$0', dueDate: '2026-05-29', priority: 'Medium' },
    ],
  },
  forecasting: {
    title: 'Forecast Model Records',
    columns: COLUMNS,
    rows: [
      { id: 'fc-1', name: 'North America revenue forecast', status: 'Open', owner: 'FP&A Analyst', amount: '$12.4M', dueDate: '2026-05-28', priority: 'High' },
      { id: 'fc-2', name: 'Scenario downside model', status: 'Review', owner: 'Strategy', amount: '$8.8M', dueDate: '2026-05-30', priority: 'High' },
      { id: 'fc-3', name: 'Variance explainer deck', status: 'Queued', owner: 'Finance Ops', amount: '$0', dueDate: '2026-05-26', priority: 'Medium' },
    ],
  },
  budgeting: {
    title: 'Budget Cycle Records',
    columns: COLUMNS,
    rows: [
      { id: 'bud-1', name: 'Marketing budget submission', status: 'Approval pending', owner: 'Dept Head', amount: '$245,000', dueDate: '2026-05-31', priority: 'High' },
      { id: 'bud-2', name: 'Travel freeze variance review', status: 'Exception', owner: 'Finance Ops', amount: '$48,000', dueDate: '2026-05-26', priority: 'High' },
      { id: 'bud-3', name: 'Department forecast refresh', status: 'Open', owner: 'FP&A', amount: '$0', dueDate: '2026-05-29', priority: 'Medium' },
    ],
  },
  valuation: {
    title: 'Valuation Case Records',
    columns: COLUMNS,
    rows: [
      { id: 'val-1', name: 'Expansion DCF model', status: 'In review', owner: 'Corporate Finance', amount: '$22.0M', dueDate: '2026-06-02', priority: 'High' },
      { id: 'val-2', name: 'Break-even scenario pack', status: 'Open', owner: 'Strategy', amount: '$0', dueDate: '2026-05-30', priority: 'Medium' },
      { id: 'val-3', name: 'Capex request assessment', status: 'Queued', owner: 'Treasury', amount: '$6.2M', dueDate: '2026-05-28', priority: 'Medium' },
    ],
  },
  'audit-compliance': {
    title: 'Audit Finding Records',
    columns: COLUMNS,
    rows: [
      { id: 'aud-1', name: 'Expense policy breach review', status: 'Open', owner: 'Internal Audit', amount: '$0', dueDate: '2026-05-27', priority: 'High' },
      { id: 'aud-2', name: 'Collections compliance log', status: 'Review', owner: 'Compliance Lead', amount: '$0', dueDate: '2026-05-29', priority: 'Medium' },
      { id: 'aud-3', name: 'Quarterly audit trail export', status: 'Ready', owner: 'Finance Ops', amount: '$0', dueDate: '2026-05-25', priority: 'Medium' },
    ],
  },
  'tax-prep': {
    title: 'Tax Return Records',
    columns: COLUMNS,
    rows: [
      { id: 'tax-1', name: 'Corporate return 2025', status: 'Assembling', owner: 'Tax Manager', amount: '$0', dueDate: '2026-06-15', priority: 'High' },
      { id: 'tax-2', name: 'IRS notice response', status: 'Urgent', owner: 'Tax Associate', amount: '$0', dueDate: '2026-05-27', priority: 'High' },
      { id: 'tax-3', name: 'Engagement release packet', status: 'Pending signature', owner: 'CPA Ops', amount: '$0', dueDate: '2026-05-31', priority: 'Medium' },
    ],
  },
  'tax-planning': {
    title: 'Tax Planning Records',
    columns: COLUMNS,
    rows: [
      { id: 'tpl-1', name: 'Estimated tax update Q3', status: 'Open', owner: 'Tax Advisor', amount: '$0', dueDate: '2026-06-05', priority: 'High' },
      { id: 'tpl-2', name: 'Multi-state planning case', status: 'Review', owner: 'Senior CPA', amount: '$0', dueDate: '2026-06-01', priority: 'High' },
      { id: 'tpl-3', name: 'Scenario comparison memo', status: 'Draft', owner: 'Planning Analyst', amount: '$0', dueDate: '2026-05-30', priority: 'Medium' },
    ],
  },
  expenses: {
    title: 'Expense Records',
    columns: COLUMNS,
    rows: [
      { id: 'exp-1', name: 'Airfare reimbursement', status: 'Needs review', owner: 'Expense Auditor', amount: '$1,280', dueDate: '2026-05-26', priority: 'High' },
      { id: 'exp-2', name: 'Hotel policy exception', status: 'Approval pending', owner: 'Finance Ops', amount: '$640', dueDate: '2026-05-25', priority: 'Medium' },
      { id: 'exp-3', name: 'Vendor duplicate charge', status: 'Queued', owner: 'AP Controls', amount: '$3,440', dueDate: '2026-05-27', priority: 'High' },
    ],
  },
  'policies-approvals': {
    title: 'Approval Chain Records',
    columns: COLUMNS,
    rows: [
      { id: 'pol-1', name: 'Regional spend exception', status: 'Approval pending', owner: 'Controller', amount: '$18,500', dueDate: '2026-05-26', priority: 'High' },
      { id: 'pol-2', name: 'Software renewal overage', status: 'Escalated', owner: 'Finance Director', amount: '$92,000', dueDate: '2026-05-28', priority: 'High' },
      { id: 'pol-3', name: 'Department approval backlog', status: 'Open', owner: 'Finance Ops', amount: '$0', dueDate: '2026-05-29', priority: 'Medium' },
    ],
  },
  collections: {
    title: 'Debtor Records',
    columns: COLUMNS,
    rows: [
      { id: 'col-1', name: 'Enterprise Segment A', status: 'Campaign active', owner: 'Collections Manager', amount: '$48,200', dueDate: '2026-05-29', priority: 'High' },
      { id: 'col-2', name: 'Hardship queue', status: 'Open', owner: 'Recovery Analyst', amount: '$17,450', dueDate: '2026-05-30', priority: 'Medium' },
      { id: 'col-3', name: 'Dispute follow-up', status: 'Queued', owner: 'Collections Ops', amount: '$8,900', dueDate: '2026-05-28', priority: 'Medium' },
    ],
  },
  'payments-settlements': {
    title: 'Settlement Plan Records',
    columns: COLUMNS,
    rows: [
      { id: 'pay-1', name: 'Installment plan review', status: 'Negotiation', owner: 'Collector', amount: '$12,800', dueDate: '2026-05-27', priority: 'High' },
      { id: 'pay-2', name: 'Settlement offer package', status: 'Pending decision', owner: 'Recovery Lead', amount: '$31,400', dueDate: '2026-05-30', priority: 'High' },
      { id: 'pay-3', name: 'Dispute resolution set', status: 'Open', owner: 'Compliance', amount: '$6,200', dueDate: '2026-05-29', priority: 'Medium' },
    ],
  },
  'ai-assistant': {
    title: 'AI Assistant Session Records',
    columns: COLUMNS,
    rows: [
      { id: 'aias-1', name: 'Quarter close summary assistant', status: 'Open', owner: 'Finance Operator', amount: '$0', dueDate: '2026-05-24', priority: 'Medium' },
      { id: 'aias-2', name: 'Tax notice guidance thread', status: 'Review', owner: 'Tax Associate', amount: '$0', dueDate: '2026-05-25', priority: 'High' },
      { id: 'aias-3', name: 'Collections response draft session', status: 'Queued', owner: 'Recovery Analyst', amount: '$0', dueDate: '2026-05-26', priority: 'Medium' },
    ],
  },
  'ai-tools': {
    title: 'AI Tool Run Records',
    columns: COLUMNS,
    rows: [
      { id: 'ait-1', name: 'Expense categorization batch', status: 'Completed', owner: 'Fraud Analyst', amount: '$0', dueDate: '2026-05-24', priority: 'Medium' },
      { id: 'ait-2', name: 'Forecast scenario generator', status: 'Open', owner: 'FP&A Analyst', amount: '$0', dueDate: '2026-05-27', priority: 'High' },
      { id: 'ait-3', name: 'Audit exception summarizer', status: 'Review', owner: 'Compliance Lead', amount: '$0', dueDate: '2026-05-25', priority: 'High' },
    ],
  },
  integrations: {
    title: 'Integration Health Records',
    columns: COLUMNS,
    rows: [
      { id: 'int-1', name: 'ERP nightly sync', status: 'Healthy', owner: 'Platform Ops', amount: '$0', dueDate: '2026-05-24', priority: 'Medium' },
      { id: 'int-2', name: 'Tax source credential refresh', status: 'Warning', owner: 'Admin', amount: '$0', dueDate: '2026-05-26', priority: 'High' },
      { id: 'int-3', name: 'Collections email connector', status: 'Open issue', owner: 'Platform Ops', amount: '$0', dueDate: '2026-05-25', priority: 'High' },
    ],
  },
  'custom-views': {
    title: 'Saved View Records',
    columns: COLUMNS,
    rows: [
      { id: 'view-1', name: 'Controller close queue', status: 'Pinned', owner: 'Controller', amount: '$0', dueDate: '2026-05-24', priority: 'Medium' },
      { id: 'view-2', name: 'Tax notice worklist', status: 'Shared', owner: 'Tax Ops', amount: '$0', dueDate: '2026-05-26', priority: 'Medium' },
      { id: 'view-3', name: 'Collections high-risk slice', status: 'Draft', owner: 'Recovery Manager', amount: '$0', dueDate: '2026-05-27', priority: 'Low' },
    ],
  },
  profiles: {
    title: 'Profile and Ownership Records',
    columns: COLUMNS,
    rows: [
      { id: 'pro-1', name: 'Controller role profile', status: 'Active', owner: 'Admin', amount: '$0', dueDate: '2026-05-24', priority: 'Medium' },
      { id: 'pro-2', name: 'Tax team ownership map', status: 'Review', owner: 'Ops Manager', amount: '$0', dueDate: '2026-05-28', priority: 'Medium' },
      { id: 'pro-3', name: 'Collections permission set', status: 'Draft', owner: 'Admin', amount: '$0', dueDate: '2026-05-29', priority: 'Low' },
    ],
  },
};
