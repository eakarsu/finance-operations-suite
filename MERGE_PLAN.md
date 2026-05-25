# Finance Operations Merge Plan

Date: 2026-05-24

## Goal

Create one merged finance operations suite from these source projects:

- `financialServices`
- `financialServices_salesforce`
- `AiFinancialReportGenerator`
- `AiTaxPrep`
- `AIExpenseReportAuditor`
- `AIDebtCollectionOptimizer`

This suite will use:

- one login
- one combined dashboard
- one feature-first sidebar
- one shared route model

## Product Rule

- source projects stay unchanged
- merged suite owns navigation, naming, and dashboards
- overlapping features are normalized by user job, not by source app

## Core Feature Families

- Reporting
- Statements
- Forecasting
- Budgeting
- Valuation
- Audit & Compliance
- Tax Prep
- Tax Planning
- Expenses
- Policies & Approvals
- Collections
- Payments & Settlements
- AI Assistant
- AI Tools
- Documents
- Integrations
- Custom Views
- Profiles

## Implementation Waves

### Wave 1

- Dashboard
- Reporting
- Statements
- Expenses
- Collections
- AI Tools

### Wave 2

- Tax Prep
- Tax Planning
- Audit & Compliance
- Policies & Approvals
- Documents

### Wave 3

- Forecasting
- Budgeting
- Valuation
- Payments & Settlements
- Integrations
