# Finance Operations Route Map

## Primary Routes

- `/dashboard`
- `/reporting`
- `/statements`
- `/forecasting`
- `/budgeting`
- `/valuation`
- `/audit-compliance`
- `/tax-prep`
- `/tax-planning`
- `/expenses`
- `/policies-approvals`
- `/collections`
- `/payments-settlements`
- `/features/ai-assistant`
- `/features/ai-tools`
- `/documents`
- `/integrations`
- `/custom-views`
- `/profiles`

## Ownership Guidance

- reporting, statements, forecasting, budgeting, valuation:
  - primarily sourced from `financialServices_salesforce`
- tax features:
  - primarily sourced from `AiFinancialReportGenerator` and `AiTaxPrep`
- expenses and approvals:
  - primarily sourced from `AIExpenseReportAuditor`
- collections and settlements:
  - primarily sourced from `AIDebtCollectionOptimizer`
