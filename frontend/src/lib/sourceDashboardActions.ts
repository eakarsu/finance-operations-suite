export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "ai-assistant",
    "label": "AI Assistant",
    "description": "Run source-derived AI assistant workflows and prompts.",
    "href": "/features/ai-tools",
    "sourceProjects": [
      "AIChurnPredictionSystem",
      "AIClimateFinanceCarbonRegistry",
      "AIDebtCollectionOptimizer",
      "AIExpenseReportAuditor",
      "AIForensicAccountingInvestigator",
      "AIInvoiceProcessing",
      "AIPersonalFinanceMultiAgent",
      "AITelecomNetworkCapacityPlanner",
      "AiFinancialReportGenerator",
      "aiFinancePlatform",
      "financialServices",
      "financialServices_salesforce"
    ],
    "examples": [
      "backend/agents/billNegotiatorAgent",
      "backend/agents/categorizerAgent",
      "backend/agents/forecastAgent",
      "backend/agents/spendingOptimizerAgent",
      "backend/agents/subscriptionDetectorAgent",
      "backend/config/openrouter"
    ],
    "count": 14
  },
  {
    "id": "source-workflows",
    "label": "Source Workflows",
    "description": "Open source-derived workflows and feature actions.",
    "href": "/features",
    "sourceProjects": [
      "AIForensicAccountingInvestigator",
      "aiFinancePlatform",
      "financialServices_salesforce",
      "scale"
    ],
    "examples": [
      "frontend/src/pages/AdvancedTools",
      "frontend/src/pages/ExtrasTools",
      "frontend/src/tools",
      "src/app/api/gap-prompt-optimization/route",
      "src/app/api/prompt-optimize/route",
      "src/app/gap/prompt-optimization/page"
    ],
    "count": 4
  }
];
