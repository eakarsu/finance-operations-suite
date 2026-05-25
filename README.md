# Finance Operations Suite

Status:
- source projects remain untouched
- runnable merged app created
- PostgreSQL-backed suite persistence

Source projects:
- `financialServices`
- `financialServices_salesforce`
- `AiFinancialReportGenerator`
- `AiTaxPrep`
- `AIExpenseReportAuditor`
- `AIDebtCollectionOptimizer`

Primary product goal:
- one merged finance app with one login, one finance dashboard, and feature-first navigation

Suite artifacts:
- [MERGE_PLAN.md](./MERGE_PLAN.md)
- [FEATURE_REGISTRY.md](./FEATURE_REGISTRY.md)
- [ROUTE_MAP.md](./ROUTE_MAP.md)
- [DASHBOARD_MODULES.md](./DASHBOARD_MODULES.md)
- [IMPLEMENTATION_BACKLOG.md](./IMPLEMENTATION_BACKLOG.md)
- [start.sh](./start.sh)

Run:

```bash
cd /Users/erolakarsu/projects/merged/finance-operations-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:3300`

Seeded users:
- `admin@finance-ops.local / admin123`
- `manager@finance-ops.local / manager123`
- `analyst@finance-ops.local / analyst123`

Validation:
- `npm run typecheck`
- `SMOKE_BASE_URL=http://127.0.0.1:3300 npm run smoke`

Current completion:
- one login
- one dashboard
- feature-first sidebar
- Postgres-backed feature state, records, documents, notifications, and audit
- role-aware read/edit/approval behavior
- source projects remain untouched
