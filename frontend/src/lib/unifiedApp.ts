import {
  BadgeDollarSign,
  BarChart3,
  Blocks,
  Database,
  Bot,
  Briefcase,
  Calculator,
  ClipboardCheck,
  FileSpreadsheet,
  Files,
  Fingerprint,
  HandCoins,
  Landmark,
  LayoutDashboard,
  LucideIcon,
  Receipt,
  Scale,
  ShieldCheck,
  UserRound,
  Wallet,
} from 'lucide-react';
import { demoUser } from '@/lib/auth';

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type FeatureDefinition = {
  title: string;
  href: string;
  category: string;
  summary: string;
  bullets: string[];
};

export type PageDefinition = {
  title: string;
  eyebrow: string;
  subtitle: string;
  category: string;
  summary: string;
  bullets: string[];
  metrics: Array<{ label: string; value: string; note: string }>;
};

export type FeatureContext = {
  sourceOwners: string[];
  operatingQueues: string[];
  outputs: string[];
  relatedRoutes: Array<{ label: string; href: string }>;
};

export const primaryNav: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'All Features', href: '/features', icon: Blocks },
  { label: 'Documents', href: '/documents', icon: Files },
  { label: 'Source Tables', href: '/source-tables', icon: Database },
  { label: 'Profiles', href: '/profiles', icon: UserRound },
];

export const featureNav: NavItem[] = [
  { label: 'Reporting', href: '/reporting', icon: BarChart3 },
  { label: 'Statements', href: '/statements', icon: FileSpreadsheet },
  { label: 'Forecasting', href: '/forecasting', icon: Landmark },
  { label: 'Budgeting', href: '/budgeting', icon: Wallet },
  { label: 'Valuation', href: '/valuation', icon: Calculator },
  { label: 'Audit & Compliance', href: '/audit-compliance', icon: ShieldCheck },
  { label: 'Tax Prep', href: '/tax-prep', icon: Receipt },
  { label: 'Tax Planning', href: '/tax-planning', icon: Scale },
  { label: 'Expenses', href: '/expenses', icon: Briefcase },
  { label: 'Policies & Approvals', href: '/policies-approvals', icon: ClipboardCheck },
  { label: 'Collections', href: '/collections', icon: HandCoins },
  { label: 'Payments & Settlements', href: '/payments-settlements', icon: BadgeDollarSign },
  { label: 'AI Assistant', href: '/features/ai-assistant', icon: Bot },
  { label: 'AI Tools', href: '/features/ai-tools', icon: Fingerprint },
  { label: 'Integrations', href: '/integrations', icon: Blocks },
  { label: 'Custom Views', href: '/custom-views', icon: Blocks },
];

export const featureCatalog: FeatureDefinition[] = [
  {
    title: 'Reporting',
    href: '/reporting',
    category: 'Reporting and Planning',
    summary: 'Consolidated finance reporting, scheduled exports, and executive views.',
    bullets: ['P&L and balance views', 'Ratios and KPIs', 'Board and executive summaries'],
  },
  {
    title: 'Statements',
    href: '/statements',
    category: 'Reporting and Planning',
    summary: 'Shared statement workspace for financial statements and disclosures.',
    bullets: ['Balance sheet', 'Cash flow', 'Statement packages'],
  },
  {
    title: 'Forecasting',
    href: '/forecasting',
    category: 'Reporting and Planning',
    summary: 'Revenue, scenario, and planning forecasts in one feature surface.',
    bullets: ['Forecast models', 'Scenario analysis', 'Variance review'],
  },
  {
    title: 'Budgeting',
    href: '/budgeting',
    category: 'Reporting and Planning',
    summary: 'Budget ownership, approval, and actual-vs-plan workflows.',
    bullets: ['Budget cycles', 'Department controls', 'Actual vs budget review'],
  },
  {
    title: 'Valuation',
    href: '/valuation',
    category: 'Reporting and Planning',
    summary: 'DCF, capital budgeting, and investment evaluation collected together.',
    bullets: ['DCF analysis', 'Break-even models', 'Capital budgeting'],
  },
  {
    title: 'Audit & Compliance',
    href: '/audit-compliance',
    category: 'Controls and Governance',
    summary: 'Exceptions, logs, evidence, and control reviews in one compliance surface.',
    bullets: ['Audit logs', 'Compliance scans', 'Exception queues'],
  },
  {
    title: 'Tax Prep',
    href: '/tax-prep',
    category: 'Tax Operations',
    summary: 'Tax document intake, forms, income, deductions, and filing workflow.',
    bullets: ['Forms and documents', 'Income and deductions', 'Engagement workflow'],
  },
  {
    title: 'Tax Planning',
    href: '/tax-planning',
    category: 'Tax Operations',
    summary: 'Scenario planning, estimated tax, and multi-state advisory tools.',
    bullets: ['Tax scenarios', 'Estimated tax planner', 'Multi-state planning'],
  },
  {
    title: 'Expenses',
    href: '/expenses',
    category: 'Spend Operations',
    summary: 'Expense monitoring, fraud detection, and spend controls in one workspace.',
    bullets: ['Expense queue', 'Merchant risk', 'Travel and receipt review'],
  },
  {
    title: 'Policies & Approvals',
    href: '/policies-approvals',
    category: 'Controls and Governance',
    summary: 'Approval chains, policy enforcement, and budget controls.',
    bullets: ['Approval backlog', 'Policy violations', 'Budget gates'],
  },
  {
    title: 'Collections',
    href: '/collections',
    category: 'Receivables Operations',
    summary: 'Debtors, campaigns, outreach, and risk scoring in one collections surface.',
    bullets: ['Debtor segments', 'Collection campaigns', 'Risk and hardship scoring'],
  },
  {
    title: 'Payments & Settlements',
    href: '/payments-settlements',
    category: 'Receivables Operations',
    summary: 'Payment plans, settlements, and recovery tracking.',
    bullets: ['Payment plans', 'Settlement optimization', 'Recovery outcomes'],
  },
  {
    title: 'AI Assistant',
    href: '/features/ai-assistant',
    category: 'AI Layer',
    summary: 'Cross-finance assistant for summarization, advisory, and guided actions.',
    bullets: ['Operational guidance', 'Cross-feature Q&A', 'Advisory prompts'],
  },
  {
    title: 'AI Tools',
    href: '/features/ai-tools',
    category: 'AI Layer',
    summary: 'Targeted AI features for forecast, expense, audit, tax, and collections work.',
    bullets: ['AI forecast generator', 'Expense categorization', 'Audit and tax copilot'],
  },
  {
    title: 'Documents',
    href: '/documents',
    category: 'Core Platform',
    summary: 'Finance documents, forms, notices, and engagement artifacts.',
    bullets: ['Statements and filings', 'IRS and compliance notices', 'Engagement documents'],
  },
  {
    title: 'Integrations',
    href: '/integrations',
    category: 'Core Platform',
    summary: 'System connectivity for accounting, CRM, outreach, and document sources.',
    bullets: ['ERP and accounting sync', 'Tax data sources', 'Collections and communication links'],
  },
  {
    title: 'Custom Views',
    href: '/custom-views',
    category: 'Core Platform',
    summary: 'Role-based saved slices for controllers, auditors, tax teams, and collectors.',
    bullets: ['Saved worklists', 'Team-specific views', 'Operational filters'],
  },
  {
    title: 'Profiles',
    href: '/profiles',
    category: 'Core Platform',
    summary: 'User profile, role, and ownership settings for the suite.',
    bullets: ['User settings', 'Role visibility', 'Team ownership'],
  },
];

export const featureFamilies = [
  {
    name: 'Reporting and Planning',
    features: ['Reporting', 'Statements', 'Forecasting', 'Budgeting', 'Valuation'],
  },
  {
    name: 'Controls and Governance',
    features: ['Audit & Compliance', 'Policies & Approvals'],
  },
  {
    name: 'Tax Operations',
    features: ['Tax Prep', 'Tax Planning'],
  },
  {
    name: 'Spend Operations',
    features: ['Expenses'],
  },
  {
    name: 'Receivables Operations',
    features: ['Collections', 'Payments & Settlements'],
  },
  {
    name: 'AI Layer',
    features: ['AI Assistant', 'AI Tools'],
  },
];

export const pageRegistry: Record<string, PageDefinition> = {
  reporting: {
    title: 'Reporting',
    eyebrow: 'Reporting and Planning',
    subtitle: 'Unified reporting surface for finance analytics, recurring exports, board packs, and executive summaries.',
    category: 'Reporting and Planning',
    summary: 'This feature consolidates reporting workloads from finance analytics and reporting systems into one workspace.',
    bullets: ['Financial statements and KPI reporting', 'Scheduled reporting and exports', 'Executive and board-ready summaries'],
    metrics: [
      { label: 'Scheduled Runs', value: '18', note: 'Active report jobs' },
      { label: 'Exports Pending', value: '6', note: 'Awaiting distribution' },
      { label: 'Executive Packs', value: '4', note: 'Due this week' },
    ],
  },
  statements: {
    title: 'Statements',
    eyebrow: 'Reporting and Planning',
    subtitle: 'One statement workspace for balance sheets, cash flow, P&L, and supporting packages.',
    category: 'Reporting and Planning',
    summary: 'Statement generation and review should be one finance operation, not split by source application.',
    bullets: ['Balance sheets', 'Cash flow and P&L', 'Statement package assembly'],
    metrics: [
      { label: 'Open Packages', value: '12', note: 'In preparation' },
      { label: 'Reviewed', value: '31', note: 'This month' },
      { label: 'Exceptions', value: '3', note: 'Need controller review' },
    ],
  },
  forecasting: {
    title: 'Forecasting',
    eyebrow: 'Reporting and Planning',
    subtitle: 'Forecast, scenario, and revenue outlook tools collected under one feature surface.',
    category: 'Reporting and Planning',
    summary: 'Forecasting combines scenario models, revenue outlooks, and AI-assisted variance explanation.',
    bullets: ['Revenue forecasts', 'Scenario modeling', 'Variance explanation'],
    metrics: [
      { label: 'Forecast Models', value: '9', note: 'Tracked live' },
      { label: 'Scenario Sets', value: '14', note: 'Current planning cycle' },
      { label: 'Variance Flags', value: '11', note: 'Need review' },
    ],
  },
  budgeting: {
    title: 'Budgeting',
    eyebrow: 'Reporting and Planning',
    subtitle: 'Unified budget planning, approvals, and actual-vs-plan review.',
    category: 'Reporting and Planning',
    summary: 'Budgeting should connect planning, approvals, and ongoing control reviews in one route.',
    bullets: ['Budget cycles', 'Department approvals', 'Actual vs budget analysis'],
    metrics: [
      { label: 'Budget Cycles', value: '3', note: 'Open cycles' },
      { label: 'Approval Tasks', value: '17', note: 'Awaiting signoff' },
      { label: 'Variance Alerts', value: '8', note: 'Above threshold' },
    ],
  },
  valuation: {
    title: 'Valuation',
    eyebrow: 'Reporting and Planning',
    subtitle: 'Valuation, capital budgeting, and investment assessment in one shared feature.',
    category: 'Reporting and Planning',
    summary: 'This route collects DCF, break-even, and investment analysis capabilities that were previously separate.',
    bullets: ['DCF models', 'Break-even analysis', 'Capital budgeting'],
    metrics: [
      { label: 'Active Models', value: '5', note: 'In review' },
      { label: 'Investment Cases', value: '7', note: 'Pending decision' },
      { label: 'Sensitivity Runs', value: '22', note: 'Last 30 days' },
    ],
  },
  'audit-compliance': {
    title: 'Audit & Compliance',
    eyebrow: 'Controls and Governance',
    subtitle: 'Control reviews, audit logs, compliance scans, and exception workflows in one place.',
    category: 'Controls and Governance',
    summary: 'The suite owns governance at the merged layer and exposes one compliance surface for all adjacent workloads.',
    bullets: ['Audit logs and evidence', 'Compliance scans', 'Control exceptions'],
    metrics: [
      { label: 'Open Findings', value: '9', note: 'Need remediation' },
      { label: 'Policy Breaches', value: '4', note: 'This week' },
      { label: 'Audit Trails', value: '126', note: 'Tracked events today' },
    ],
  },
  'tax-prep': {
    title: 'Tax Prep',
    eyebrow: 'Tax Operations',
    subtitle: 'Document intake, forms, income, deductions, credits, and filing workflows.',
    category: 'Tax Operations',
    summary: 'Tax prep combines the overlapping tax applications into one workflow surface.',
    bullets: ['Forms, income, deductions', 'IRS and engagement documents', 'Filing pipeline management'],
    metrics: [
      { label: 'Returns In Progress', value: '24', note: 'Current cycle' },
      { label: 'Documents Missing', value: '13', note: 'Need intake follow-up' },
      { label: 'Ready to File', value: '11', note: 'Awaiting release' },
    ],
  },
  'tax-planning': {
    title: 'Tax Planning',
    eyebrow: 'Tax Operations',
    subtitle: 'Estimated tax, multi-state planning, scenario modeling, and advisory support.',
    category: 'Tax Operations',
    summary: 'Planning and advisory should sit next to tax prep, but remain a separate finance feature.',
    bullets: ['Estimated tax planning', 'Multi-state scenarios', 'Advisory scenarios'],
    metrics: [
      { label: 'Planning Cases', value: '16', note: 'Open engagements' },
      { label: 'Scenario Sets', value: '21', note: 'Modeled this quarter' },
      { label: 'IRS Notices', value: '5', note: 'Need response' },
    ],
  },
  expenses: {
    title: 'Expenses',
    eyebrow: 'Spend Operations',
    subtitle: 'Unified expense intake, fraud review, receipt checks, and travel policy enforcement.',
    category: 'Spend Operations',
    summary: 'Expense review is one merged control surface, not separate monitors and audit tools.',
    bullets: ['Expense queue and categories', 'Fraud and merchant risk', 'Travel and receipt policy review'],
    metrics: [
      { label: 'Open Expenses', value: '83', note: 'Awaiting review' },
      { label: 'Risk Flags', value: '12', note: 'High-risk items' },
      { label: 'Policy Violations', value: '7', note: 'Need approval' },
    ],
  },
  'policies-approvals': {
    title: 'Policies & Approvals',
    eyebrow: 'Controls and Governance',
    subtitle: 'Approval gates, policy controls, budget enforcement, and exception handling.',
    category: 'Controls and Governance',
    summary: 'Approval and policy workflows are grouped by user job so controllers and finance ops work from one queue.',
    bullets: ['Approval backlog', 'Policy enforcement', 'Budget threshold controls'],
    metrics: [
      { label: 'Approval Items', value: '29', note: 'Pending action' },
      { label: 'Escalations', value: '6', note: 'Need senior review' },
      { label: 'Budget Holds', value: '4', note: 'Above limit' },
    ],
  },
  collections: {
    title: 'Collections',
    eyebrow: 'Receivables Operations',
    subtitle: 'Debtors, campaigns, communications, risk scoring, and recovery worklists.',
    category: 'Receivables Operations',
    summary: 'Collections is treated as a dedicated operations surface with debtors, segments, campaigns, and risk views.',
    bullets: ['Debtors and segments', 'Collection campaigns', 'Risk and hardship scoring'],
    metrics: [
      { label: 'Active Debtors', value: '214', note: 'Current worklist' },
      { label: 'Campaigns Running', value: '9', note: 'Active outreach' },
      { label: 'High-Risk Accounts', value: '18', note: 'Immediate attention' },
    ],
  },
  'payments-settlements': {
    title: 'Payments & Settlements',
    eyebrow: 'Receivables Operations',
    subtitle: 'Payment plans, settlement design, disputes, and recovery outcomes.',
    category: 'Receivables Operations',
    summary: 'This route groups downstream collections resolution workflows under one finance feature.',
    bullets: ['Payment plans', 'Settlement optimization', 'Disputes and recovery tracking'],
    metrics: [
      { label: 'Payment Plans', value: '41', note: 'Active agreements' },
      { label: 'Settlement Offers', value: '14', note: 'Awaiting response' },
      { label: 'Resolved This Month', value: '37', note: 'Closed outcomes' },
    ],
  },
  documents: {
    title: 'Documents',
    eyebrow: 'Core Platform',
    subtitle: 'Finance documents, filings, notices, and engagement artifacts collected into one document hub.',
    category: 'Core Platform',
    summary: 'Document handling in the finance suite includes reports, forms, notices, receipts, and evidence packages.',
    bullets: ['Statements and forms', 'Receipts and evidence', 'IRS and compliance notices'],
    metrics: [
      { label: 'Document Queue', value: '146', note: 'Tracked items' },
      { label: 'Missing Evidence', value: '10', note: 'Need follow-up' },
      { label: 'Ready Packages', value: '22', note: 'Prepared for action' },
    ],
  },
  integrations: {
    title: 'Integrations',
    eyebrow: 'Core Platform',
    subtitle: 'Unified connectivity for accounting systems, tax sources, communication tools, and data sync.',
    category: 'Core Platform',
    summary: 'Integrations are surfaced as a finance capability rather than hidden under individual source systems.',
    bullets: ['Accounting connections', 'Tax and document sources', 'Collections and communication sync'],
    metrics: [
      { label: 'Connected Systems', value: '8', note: 'Active integrations' },
      { label: 'Sync Warnings', value: '3', note: 'Need attention' },
      { label: 'Last Full Sync', value: '02:15', note: 'Eastern Time' },
    ],
  },
  'custom-views': {
    title: 'Custom Views',
    eyebrow: 'Core Platform',
    subtitle: 'Saved operational views for controllers, tax teams, auditors, and collections operators.',
    category: 'Core Platform',
    summary: 'Custom views are a cross-feature navigation asset for role-specific worklists.',
    bullets: ['Saved team views', 'Role-based queues', 'Operational slices'],
    metrics: [
      { label: 'Saved Views', value: '27', note: 'Across teams' },
      { label: 'Shared Views', value: '11', note: 'Used by multiple roles' },
      { label: 'Pinned Queues', value: '8', note: 'High-frequency worklists' },
    ],
  },
  profiles: {
    title: 'Profiles',
    eyebrow: 'Core Platform',
    subtitle: 'User profile, role ownership, and access context for the finance suite.',
    category: 'Core Platform',
    summary: 'Profiles stay simple: identity, role, and workload ownership within one merged finance app.',
    bullets: ['User identity', 'Role visibility', 'Team ownership'],
    metrics: [
      { label: 'Active Users', value: '42', note: 'Current finance team' },
      { label: 'Roles', value: '7', note: 'Assigned permission sets' },
      { label: 'Unassigned Queues', value: '2', note: 'Need owner' },
    ],
  },
};

export const aiFeatureRegistry: Record<string, PageDefinition> = {
  'ai-assistant': {
    title: 'AI Assistant',
    eyebrow: 'AI Layer',
    subtitle: 'Cross-finance assistant for reporting, tax, expense, and collections guidance.',
    category: 'AI Layer',
    summary: 'The assistant provides a shared AI entry point instead of isolated AI surfaces inside source applications.',
    bullets: ['Cross-feature guidance', 'Finance Q&A', 'Workflow recommendations'],
    metrics: [
      { label: 'Prompts Today', value: '68', note: 'Across finance teams' },
      { label: 'Top Domain', value: 'Tax Prep', note: 'Highest AI demand' },
      { label: 'Escalations', value: '5', note: 'Needs human review' },
    ],
  },
  'ai-tools': {
    title: 'AI Tools',
    eyebrow: 'AI Layer',
    subtitle: 'Targeted AI feature set for forecast generation, expense review, tax support, audit analysis, and collections.',
    category: 'AI Layer',
    summary: 'This page combines the specialized AI capabilities discovered across the finance source projects.',
    bullets: ['AI forecast generator', 'Expense categorization and anomaly review', 'Tax and audit copilot'],
    metrics: [
      { label: 'Tool Runs', value: '113', note: 'Last 24 hours' },
      { label: 'Forecast Jobs', value: '21', note: 'Active model runs' },
      { label: 'Audit Analyses', value: '17', note: 'Open AI reviews' },
    ],
  },
};

export const featureContexts: Record<string, FeatureContext> = {
  Reporting: {
    sourceOwners: ['financialServices_salesforce', 'financialServices'],
    operatingQueues: ['Board packs awaiting issue', 'Scheduled exports due today', 'Custom report refresh'],
    outputs: ['P&L package', 'KPI dashboard export', 'Executive finance memo'],
    relatedRoutes: [
      { label: 'Statements', href: '/statements' },
      { label: 'Forecasting', href: '/forecasting' },
      { label: 'AI Tools', href: '/features/ai-tools' },
    ],
  },
  Statements: {
    sourceOwners: ['financialServices_salesforce'],
    operatingQueues: ['Statement package assembly', 'Controller review queue', 'Disclosure exception queue'],
    outputs: ['Balance sheet package', 'Cash flow statement', 'Monthly close packet'],
    relatedRoutes: [
      { label: 'Reporting', href: '/reporting' },
      { label: 'Documents', href: '/documents' },
      { label: 'Audit & Compliance', href: '/audit-compliance' },
    ],
  },
  Forecasting: {
    sourceOwners: ['financialServices_salesforce'],
    operatingQueues: ['Scenario model review', 'Variance triage', 'Forecast signoff'],
    outputs: ['Revenue forecast', 'Scenario comparison pack', 'Variance explanation'],
    relatedRoutes: [
      { label: 'Budgeting', href: '/budgeting' },
      { label: 'Valuation', href: '/valuation' },
      { label: 'AI Tools', href: '/features/ai-tools' },
    ],
  },
  Budgeting: {
    sourceOwners: ['financialServices_salesforce', 'AIExpenseReportAuditor'],
    operatingQueues: ['Department budget approvals', 'Threshold breach review', 'Plan vs actual variance queue'],
    outputs: ['Approved department budgets', 'Variance worklist', 'Budget owner summary'],
    relatedRoutes: [
      { label: 'Forecasting', href: '/forecasting' },
      { label: 'Policies & Approvals', href: '/policies-approvals' },
      { label: 'Expenses', href: '/expenses' },
    ],
  },
  Valuation: {
    sourceOwners: ['financialServices_salesforce'],
    operatingQueues: ['Investment case review', 'Sensitivity model queue', 'Capital request review'],
    outputs: ['DCF model', 'Capital budgeting summary', 'Break-even analysis'],
    relatedRoutes: [
      { label: 'Forecasting', href: '/forecasting' },
      { label: 'Reporting', href: '/reporting' },
      { label: 'AI Tools', href: '/features/ai-tools' },
    ],
  },
  'Audit & Compliance': {
    sourceOwners: ['financialServices_salesforce', 'AIExpenseReportAuditor', 'AIDebtCollectionOptimizer'],
    operatingQueues: ['Open findings', 'Policy breach triage', 'Audit evidence collection'],
    outputs: ['Audit log export', 'Compliance exception report', 'Remediation summary'],
    relatedRoutes: [
      { label: 'Policies & Approvals', href: '/policies-approvals' },
      { label: 'Expenses', href: '/expenses' },
      { label: 'Documents', href: '/documents' },
    ],
  },
  'Tax Prep': {
    sourceOwners: ['AiFinancialReportGenerator', 'AiTaxPrep'],
    operatingQueues: ['Return assembly', 'Missing document chase', 'Ready-to-file release queue'],
    outputs: ['Prepared return package', 'IRS notice response packet', 'Engagement documents'],
    relatedRoutes: [
      { label: 'Tax Planning', href: '/tax-planning' },
      { label: 'Documents', href: '/documents' },
      { label: 'AI Assistant', href: '/features/ai-assistant' },
    ],
  },
  'Tax Planning': {
    sourceOwners: ['AiFinancialReportGenerator', 'AiTaxPrep'],
    operatingQueues: ['Scenario planning', 'Multi-state review', 'Estimated tax follow-up'],
    outputs: ['Scenario workbook', 'Estimated tax plan', 'Advisory recommendation'],
    relatedRoutes: [
      { label: 'Tax Prep', href: '/tax-prep' },
      { label: 'Reporting', href: '/reporting' },
      { label: 'AI Tools', href: '/features/ai-tools' },
    ],
  },
  Expenses: {
    sourceOwners: ['AIExpenseReportAuditor'],
    operatingQueues: ['Expense review queue', 'Receipt anomaly review', 'Travel policy exceptions'],
    outputs: ['Approved expense batches', 'Fraud alert summary', 'Spend control report'],
    relatedRoutes: [
      { label: 'Policies & Approvals', href: '/policies-approvals' },
      { label: 'Audit & Compliance', href: '/audit-compliance' },
      { label: 'Documents', href: '/documents' },
    ],
  },
  'Policies & Approvals': {
    sourceOwners: ['AIExpenseReportAuditor', 'financialServices_salesforce'],
    operatingQueues: ['Approval backlog', 'Budget hold queue', 'Escalation review'],
    outputs: ['Approval decision trail', 'Policy exception register', 'Budget control summary'],
    relatedRoutes: [
      { label: 'Expenses', href: '/expenses' },
      { label: 'Budgeting', href: '/budgeting' },
      { label: 'Audit & Compliance', href: '/audit-compliance' },
    ],
  },
  Collections: {
    sourceOwners: ['AIDebtCollectionOptimizer'],
    operatingQueues: ['Debtor worklist', 'Campaign queue', 'High-risk account review'],
    outputs: ['Collector campaign summary', 'Risk-ranked debtor list', 'Recovery performance view'],
    relatedRoutes: [
      { label: 'Payments & Settlements', href: '/payments-settlements' },
      { label: 'AI Tools', href: '/features/ai-tools' },
      { label: 'Documents', href: '/documents' },
    ],
  },
  'Payments & Settlements': {
    sourceOwners: ['AIDebtCollectionOptimizer'],
    operatingQueues: ['Payment plan review', 'Settlement offer queue', 'Dispute handling'],
    outputs: ['Active payment plans', 'Settlement recommendation pack', 'Resolution outcomes'],
    relatedRoutes: [
      { label: 'Collections', href: '/collections' },
      { label: 'Audit & Compliance', href: '/audit-compliance' },
      { label: 'Custom Views', href: '/custom-views' },
    ],
  },
  Documents: {
    sourceOwners: ['AiFinancialReportGenerator', 'AiTaxPrep', 'AIExpenseReportAuditor'],
    operatingQueues: ['Notice intake', 'Evidence package prep', 'Missing attachments follow-up'],
    outputs: ['Statement and filing packages', 'IRS response documents', 'Audit evidence bundle'],
    relatedRoutes: [
      { label: 'Tax Prep', href: '/tax-prep' },
      { label: 'Reporting', href: '/reporting' },
      { label: 'Expenses', href: '/expenses' },
    ],
  },
  Integrations: {
    sourceOwners: ['financialServices_salesforce', 'AiTaxPrep', 'AIDebtCollectionOptimizer'],
    operatingQueues: ['Sync health checks', 'Connector warning queue', 'Credential renewal follow-up'],
    outputs: ['Integration health report', 'Sync exception log', 'Connected system inventory'],
    relatedRoutes: [
      { label: 'Reporting', href: '/reporting' },
      { label: 'Custom Views', href: '/custom-views' },
      { label: 'Profiles', href: '/profiles' },
    ],
  },
  'Custom Views': {
    sourceOwners: ['financialServices_salesforce', 'AIDebtCollectionOptimizer'],
    operatingQueues: ['Saved worklist refresh', 'Shared team views', 'Pinned queue maintenance'],
    outputs: ['Controller worklists', 'Collector worklists', 'Tax and audit saved views'],
    relatedRoutes: [
      { label: 'Profiles', href: '/profiles' },
      { label: 'Collections', href: '/collections' },
      { label: 'Reporting', href: '/reporting' },
    ],
  },
  Profiles: {
    sourceOwners: ['financialServices'],
    operatingQueues: ['Role assignment review', 'Ownership balancing', 'Access request cleanup'],
    outputs: ['User roster', 'Role ownership matrix', 'Coverage gaps report'],
    relatedRoutes: [
      { label: 'Custom Views', href: '/custom-views' },
      { label: 'Integrations', href: '/integrations' },
      { label: 'Dashboard', href: '/dashboard' },
    ],
  },
  'AI Assistant': {
    sourceOwners: ['AiFinancialReportGenerator', 'AiTaxPrep', 'AIExpenseReportAuditor', 'AIDebtCollectionOptimizer'],
    operatingQueues: ['Prompt history review', 'Escalated AI responses', 'Advisor follow-up'],
    outputs: ['Advisory answers', 'Task recommendations', 'Cross-feature summaries'],
    relatedRoutes: [
      { label: 'AI Tools', href: '/features/ai-tools' },
      { label: 'Tax Prep', href: '/tax-prep' },
      { label: 'Collections', href: '/collections' },
    ],
  },
  'AI Tools': {
    sourceOwners: ['financialServices_salesforce', 'AiFinancialReportGenerator', 'AIExpenseReportAuditor', 'AIDebtCollectionOptimizer'],
    operatingQueues: ['Forecast jobs', 'Audit analysis queue', 'Expense categorization batch'],
    outputs: ['Forecast models', 'Audit findings summary', 'Collections prioritization suggestions'],
    relatedRoutes: [
      { label: 'Reporting', href: '/reporting' },
      { label: 'Expenses', href: '/expenses' },
      { label: 'Collections', href: '/collections' },
    ],
  },
};
