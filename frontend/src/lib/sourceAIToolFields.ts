export type SourceAIToolField = {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  source: string;
};

export const sourceAIToolFieldsByToolId: Record<string, SourceAIToolField[]> = {
  "ai-churn-prediction-system-gap-no-ai-win-back-message-variant-generator-linked-to-17ufk5-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Win Back Message Variant Generator Linked To source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_ai_win_back_message_variant_generator_linked_to.js"
    }
  ],
  "ai-churn-prediction-system-gap-no-campaign-playbook-orchestration-ui-ibtgyo-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Campaign Playbook Orchestration Ui source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_campaign_playbook_orchestration_ui.js"
    }
  ],
  "ai-churn-prediction-system-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Win Back Message Variant Generator Linked To source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_ai_win_back_message_variant_generator_linked_to.js"
    }
  ],
  "ai-churn-prediction-system-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Win Back Message Variant Generator Linked To source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_ai_win_back_message_variant_generator_linked_to.js"
    }
  ],
  "ai-climate-finance-carbon-registry-aiaml-screen-transaction-page-1qmmuy-exact-ai": [
    {
      "name": "from_holder",
      "label": "From Holder",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Andes Reforestation S.A.C.",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIAMLScreenTransactionPage.js"
    },
    {
      "name": "to_holder",
      "label": "To Holder",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Eurasian Carbon Exchange",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIAMLScreenTransactionPage.js"
    },
    {
      "name": "transaction_id",
      "label": "Transaction ID",
      "type": "text",
      "defaultValue": "",
      "placeholder": "TX-2025-11789",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIAMLScreenTransactionPage.js"
    },
    {
      "name": "credits_amount",
      "label": "Credits Amount (tCO2e)",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAMLScreenTransactionPage.js"
    },
    {
      "name": "from_country",
      "label": "From Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "Peru",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAMLScreenTransactionPage.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAMLScreenTransactionPage.js"
    },
    {
      "name": "payment_route_jurisdictions",
      "label": "Payment Route (comma-separated jurisdictions)",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Latvia, UAE, Cyprus",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAMLScreenTransactionPage.js"
    },
    {
      "name": "price_per_ton_usd",
      "label": "Price per Ton (USD)",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAMLScreenTransactionPage.js"
    },
    {
      "name": "to_country",
      "label": "To Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "Russia",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAMLScreenTransactionPage.js"
    }
  ],
  "ai-climate-finance-carbon-registry-ai-additionality-scorer-page-v4spil-exact-ai": [
    {
      "name": "name",
      "label": "Project Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Gujarat Wind Power Project",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIAdditionalityScorerPage.js"
    },
    {
      "name": "country",
      "label": "Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "India",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdditionalityScorerPage.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdditionalityScorerPage.js"
    }
  ],
  "ai-climate-finance-carbon-registry-ai-analyze-pricing-page-su4bqe-exact-ai": [
    {
      "name": "project_type",
      "label": "Project Type",
      "type": "text",
      "defaultValue": "avoided-deforestation",
      "placeholder": "avoided-deforestation",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIAnalyzePricingPage.js"
    },
    {
      "name": "vintage",
      "label": "Vintage Year",
      "type": "number",
      "defaultValue": "2023",
      "placeholder": "2023",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIAnalyzePricingPage.js"
    }
  ],
  "ai-climate-finance-carbon-registry-ai-biodiversity-co-benefit-page-t33iwe-exact-ai": [
    {
      "name": "name",
      "label": "Project Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Rimba Raya Biodiversity Reserve",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIBiodiversityCoBenefitPage.js"
    },
    {
      "name": "country",
      "label": "Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "Indonesia",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBiodiversityCoBenefitPage.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBiodiversityCoBenefitPage.js"
    }
  ],
  "ai-climate-finance-carbon-registry-ai-climate-claim-validator-page-1ibhg2-exact-ai": [
    {
      "name": "holder",
      "label": "Claimant",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Microsoft Corporation",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIClimateClaimValidatorPage.js"
    },
    {
      "name": "evidence",
      "label": "Evidence / Supporting Statement",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIClimateClaimValidatorPage.js"
    },
    {
      "name": "scope",
      "label": "Scope",
      "type": "text",
      "defaultValue": "",
      "placeholder": "1+2+3",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIClimateClaimValidatorPage.js"
    },
    {
      "name": "year",
      "label": "Target Year",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIClimateClaimValidatorPage.js"
    }
  ],
  "ai-climate-finance-carbon-registry-ai-detect-fraud-page-1kn51u-exact-ai": [
    {
      "name": "transaction_id",
      "label": "Transaction ID",
      "type": "text",
      "defaultValue": "",
      "placeholder": "TX-0099",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIDetectFraudPage.js"
    },
    {
      "name": "credits_amount",
      "label": "Credits Amount (tCO2e)",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDetectFraudPage.js"
    },
    {
      "name": "from_holder",
      "label": "From Holder",
      "type": "text",
      "defaultValue": "",
      "placeholder": "EcoTrade Capital",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDetectFraudPage.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Counterparty flagged on KYC; serial-number gap detected…",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDetectFraudPage.js"
    },
    {
      "name": "price_per_ton_usd",
      "label": "Price per Ton (USD)",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDetectFraudPage.js"
    },
    {
      "name": "to_holder",
      "label": "To Holder",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Jane Doe",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDetectFraudPage.js"
    }
  ],
  "ai-climate-finance-carbon-registry-ai-double-counting-detect-page-1ilvsb-exact-ai": [
    {
      "name": "credit_id",
      "label": "Credit ID",
      "type": "text",
      "defaultValue": "",
      "placeholder": "CR-2021-KEN-027",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIDoubleCountingDetectPage.js"
    },
    {
      "name": "methodology",
      "label": "Methodology",
      "type": "text",
      "defaultValue": "",
      "placeholder": "VM0009",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDoubleCountingDetectPage.js"
    },
    {
      "name": "project",
      "label": "Project",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Kasigau Corridor REDD+",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDoubleCountingDetectPage.js"
    },
    {
      "name": "serial_number",
      "label": "Serial Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "CR-...-SN-12345",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDoubleCountingDetectPage.js"
    },
    {
      "name": "tons_co2e",
      "label": "tCO2e",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDoubleCountingDetectPage.js"
    },
    {
      "name": "vintage_year",
      "label": "Vintage Year",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDoubleCountingDetectPage.js"
    }
  ],
  "ai-climate-finance-carbon-registry-ai-draft-disclosure-page-gq02u8-exact-ai": [
    {
      "name": "name",
      "label": "Holder Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Microsoft Corporation",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIDraftDisclosurePage.js"
    },
    {
      "name": "country",
      "label": "Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "United States",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDraftDisclosurePage.js"
    },
    {
      "name": "credits_used_tco2e",
      "label": "Credits Used (tCO2e)",
      "type": "number",
      "defaultValue": "",
      "placeholder": "250000",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDraftDisclosurePage.js"
    },
    {
      "name": "targets",
      "label": "Stated Targets",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Carbon-negative by 2030; net-zero historical emissions by 2050…",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDraftDisclosurePage.js"
    }
  ],
  "ai-climate-finance-carbon-registry-ai-leakage-modeler-page-n0sob6-exact-ai": [
    {
      "name": "name",
      "label": "Project Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Kasigau Corridor REDD+",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AILeakageModelerPage.js"
    },
    {
      "name": "country",
      "label": "Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "Kenya",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AILeakageModelerPage.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AILeakageModelerPage.js"
    },
    {
      "name": "hectares",
      "label": "Hectares",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AILeakageModelerPage.js"
    }
  ],
  "ai-climate-finance-carbon-registry-aimrv-document-validate-page-3govuy-exact-ai": [
    {
      "name": "methodology",
      "label": "Methodology",
      "type": "text",
      "defaultValue": "",
      "placeholder": "VM0009",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIMRVDocumentValidatePage.js"
    },
    {
      "name": "project_name",
      "label": "Project Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Kasigau Corridor REDD+ Phase II",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIMRVDocumentValidatePage.js"
    },
    {
      "name": "baseline_emissions_tco2e",
      "label": "Baseline Emissions (tCO2e)",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIMRVDocumentValidatePage.js"
    },
    {
      "name": "leakage_tco2e",
      "label": "Leakage (tCO2e)",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIMRVDocumentValidatePage.js"
    },
    {
      "name": "monitoring_period",
      "label": "Monitoring Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "2022-01-01..2022-12-31",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIMRVDocumentValidatePage.js"
    },
    {
      "name": "ndvi_delta",
      "label": "NDVI Delta",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIMRVDocumentValidatePage.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIMRVDocumentValidatePage.js"
    },
    {
      "name": "project_emissions_tco2e",
      "label": "Project Emissions (tCO2e)",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIMRVDocumentValidatePage.js"
    },
    {
      "name": "sampling_design",
      "label": "Sampling Design",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIMRVDocumentValidatePage.js"
    }
  ],
  "ai-climate-finance-carbon-registry-ai-map-methodology-page-1glzc9-exact-ai": [
    {
      "name": "name",
      "label": "Project Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Sumatra Mangrove Blue Carbon",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIMapMethodologyPage.js"
    },
    {
      "name": "country",
      "label": "Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "Indonesia",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIMapMethodologyPage.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Mangrove restoration along Riau coastline…",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIMapMethodologyPage.js"
    },
    {
      "name": "hectares",
      "label": "Hectares",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIMapMethodologyPage.js"
    }
  ],
  "ai-climate-finance-carbon-registry-ai-narrative-evidence-reconcile-page-1q8od2-exact-ai": [
    {
      "name": "evidence",
      "label": "Evidence (JSON)",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "{",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AINarrativeEvidenceReconcilePage.js"
    },
    {
      "name": "narrative",
      "label": "Narrative (JSON)",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "{",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AINarrativeEvidenceReconcilePage.js"
    }
  ],
  "ai-climate-finance-carbon-registry-ai-price-discovery-page-1fp5rj-exact-ai": [
    {
      "name": "project_type",
      "label": "Project Type",
      "type": "text",
      "defaultValue": "blue-carbon",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIPriceDiscoveryPage.js"
    },
    {
      "name": "vintage",
      "label": "Vintage Year",
      "type": "number",
      "defaultValue": "2023",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIPriceDiscoveryPage.js"
    }
  ],
  "ai-climate-finance-carbon-registry-ai-project-rating-page-a95sew-exact-ai": [
    {
      "name": "name",
      "label": "Project Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Katingan Mentaya Peatland",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIProjectRatingPage.js"
    },
    {
      "name": "country",
      "label": "Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "Indonesia",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIProjectRatingPage.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIProjectRatingPage.js"
    },
    {
      "name": "hectares",
      "label": "Hectares",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIProjectRatingPage.js"
    },
    {
      "name": "methodology",
      "label": "Methodology",
      "type": "text",
      "defaultValue": "",
      "placeholder": "VM0007",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIProjectRatingPage.js"
    },
    {
      "name": "vintage_range",
      "label": "Vintage Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "2010-2024",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIProjectRatingPage.js"
    }
  ],
  "ai-climate-finance-carbon-registry-ai-registry-arbitrage-page-x67536-exact-ai": [
    {
      "name": "project_type",
      "label": "Project Type",
      "type": "text",
      "defaultValue": "avoided-deforestation",
      "placeholder": "avoided-deforestation",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIRegistryArbitragePage.js"
    }
  ],
  "ai-climate-finance-carbon-registry-ai-satellite-mrv-page-483s6w-exact-ai": [
    {
      "name": "imagery_period",
      "label": "Imagery Period (e.g. 2023-Q1..2024-Q1)",
      "type": "file",
      "defaultValue": "",
      "placeholder": "2023-Q1..2024-Q1",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AISatelliteMRVPage.js"
    },
    {
      "name": "name",
      "label": "Project Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Sumatra Mangrove Blue Carbon",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AISatelliteMRVPage.js"
    },
    {
      "name": "country",
      "label": "Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "Indonesia",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISatelliteMRVPage.js"
    }
  ],
  "ai-climate-finance-carbon-registry-ai-scope3-attributor-page-xwzziv-exact-ai": [
    {
      "name": "name",
      "label": "Holder Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Microsoft Corporation",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIScope3AttributorPage.js"
    },
    {
      "name": "country",
      "label": "Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "United States",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIScope3AttributorPage.js"
    },
    {
      "name": "revenue_musd",
      "label": "Revenue (USD M)",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIScope3AttributorPage.js"
    },
    {
      "name": "sector",
      "label": "Sector",
      "type": "text",
      "defaultValue": "",
      "placeholder": "technology",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIScope3AttributorPage.js"
    }
  ],
  "ai-climate-finance-carbon-registry-ai-supply-cap-forecast-page-1wvjck-exact-ai": [
    {
      "name": "project_type",
      "label": "Project Type",
      "type": "text",
      "defaultValue": "avoided-deforestation",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AISupplyCapForecastPage.js"
    }
  ],
  "ai-climate-finance-carbon-registry-ai-synthesize-mrv-page-19sdu8-exact-ai": [
    {
      "name": "name",
      "label": "Project Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Kasigau Corridor REDD+",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AISynthesizeMRVPage.js"
    },
    {
      "name": "baseline_period",
      "label": "Baseline Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "2018-2023",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISynthesizeMRVPage.js"
    },
    {
      "name": "country",
      "label": "Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "Kenya",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISynthesizeMRVPage.js"
    },
    {
      "name": "hectares",
      "label": "Hectares",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISynthesizeMRVPage.js"
    },
    {
      "name": "methodology",
      "label": "Methodology",
      "type": "text",
      "defaultValue": "",
      "placeholder": "VM0009",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISynthesizeMRVPage.js"
    },
    {
      "name": "notes",
      "label": "Project Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Dryland forest protection between Tsavo parks…",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISynthesizeMRVPage.js"
    }
  ],
  "ai-climate-finance-carbon-registry-ai-verify-project-page-1fruzu-exact-ai": [
    {
      "name": "name",
      "label": "Project Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Katingan Mentaya Peatland Restoration",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIVerifyProjectPage.js"
    },
    {
      "name": "country",
      "label": "Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "Indonesia",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIVerifyProjectPage.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Peat-swamp forest conservation in Central Kalimantan…",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIVerifyProjectPage.js"
    },
    {
      "name": "hectares",
      "label": "Hectares",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIVerifyProjectPage.js"
    }
  ],
  "ai-climate-finance-carbon-registry-claims-page-1qo41n-exact-ai": [
    {
      "name": "claim_id",
      "label": "Claim ID",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/ClaimsPage.js"
    },
    {
      "name": "holder",
      "label": "Holder",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/ClaimsPage.js"
    }
  ],
  "ai-climate-finance-carbon-registry-issuance-chain-page-5ws4ii-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Issuance Chain Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/IssuanceChainPage.js"
    }
  ],
  "ai-climate-finance-carbon-registry-ai-5cuwes-exact-ai": [
    {
      "name": "claim",
      "label": "Claim",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "credit",
      "label": "Credit",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "evidence",
      "label": "Evidence",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "holder",
      "label": "Holder",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "imagery_period",
      "label": "Imagery Period",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "methodology",
      "label": "Methodology",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "mrv_document",
      "label": "Mrv Document",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "narrative",
      "label": "Narrative",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "project",
      "label": "Project",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "project_type",
      "label": "Project Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "transaction",
      "label": "Transaction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "vintage",
      "label": "Vintage",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-climate-finance-carbon-registry-claims-163xrf-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Claims source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/claims.js"
    }
  ],
  "ai-climate-finance-carbon-registry-issuance-chain-cy3aa1-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Issuance Chain source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/issuance-chain.js"
    }
  ],
  "ai-climate-finance-carbon-registry-source-workflow": [
    {
      "name": "from_holder",
      "label": "From Holder",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Andes Reforestation S.A.C.",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIAMLScreenTransactionPage.js"
    },
    {
      "name": "to_holder",
      "label": "To Holder",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Eurasian Carbon Exchange",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIAMLScreenTransactionPage.js"
    },
    {
      "name": "transaction_id",
      "label": "Transaction ID",
      "type": "text",
      "defaultValue": "",
      "placeholder": "TX-2025-11789",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIAMLScreenTransactionPage.js"
    },
    {
      "name": "credits_amount",
      "label": "Credits Amount (tCO2e)",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAMLScreenTransactionPage.js"
    },
    {
      "name": "from_country",
      "label": "From Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "Peru",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAMLScreenTransactionPage.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Counterparty flagged on KYC; serial-number gap detected…",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAMLScreenTransactionPage.js"
    },
    {
      "name": "payment_route_jurisdictions",
      "label": "Payment Route (comma-separated jurisdictions)",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Latvia, UAE, Cyprus",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAMLScreenTransactionPage.js"
    },
    {
      "name": "price_per_ton_usd",
      "label": "Price per Ton (USD)",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAMLScreenTransactionPage.js"
    },
    {
      "name": "to_country",
      "label": "To Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "Russia",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAMLScreenTransactionPage.js"
    },
    {
      "name": "name",
      "label": "Project Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Gujarat Wind Power Project",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIAdditionalityScorerPage.js"
    },
    {
      "name": "country",
      "label": "Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "India",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdditionalityScorerPage.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Mangrove restoration along Riau coastline…",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdditionalityScorerPage.js"
    },
    {
      "name": "project_type",
      "label": "Project Type",
      "type": "text",
      "defaultValue": "avoided-deforestation",
      "placeholder": "avoided-deforestation",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIAnalyzePricingPage.js"
    },
    {
      "name": "vintage",
      "label": "Vintage Year",
      "type": "number",
      "defaultValue": "2023",
      "placeholder": "2023",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIAnalyzePricingPage.js"
    },
    {
      "name": "holder",
      "label": "Claimant",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Microsoft Corporation",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIClimateClaimValidatorPage.js"
    },
    {
      "name": "evidence",
      "label": "Evidence / Supporting Statement",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "{",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIClimateClaimValidatorPage.js"
    },
    {
      "name": "scope",
      "label": "Scope",
      "type": "text",
      "defaultValue": "",
      "placeholder": "1+2+3",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIClimateClaimValidatorPage.js"
    },
    {
      "name": "year",
      "label": "Target Year",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIClimateClaimValidatorPage.js"
    },
    {
      "name": "credit_id",
      "label": "Credit ID",
      "type": "text",
      "defaultValue": "",
      "placeholder": "CR-2021-KEN-027",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIDoubleCountingDetectPage.js"
    },
    {
      "name": "methodology",
      "label": "Methodology",
      "type": "text",
      "defaultValue": "",
      "placeholder": "VM0009",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIDoubleCountingDetectPage.js"
    },
    {
      "name": "project",
      "label": "Project",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Kasigau Corridor REDD+",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIDoubleCountingDetectPage.js"
    },
    {
      "name": "serial_number",
      "label": "Serial Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "CR-...-SN-12345",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDoubleCountingDetectPage.js"
    },
    {
      "name": "tons_co2e",
      "label": "tCO2e",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDoubleCountingDetectPage.js"
    },
    {
      "name": "vintage_year",
      "label": "Vintage Year",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDoubleCountingDetectPage.js"
    },
    {
      "name": "credits_used_tco2e",
      "label": "Credits Used (tCO2e)",
      "type": "number",
      "defaultValue": "",
      "placeholder": "250000",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDraftDisclosurePage.js"
    },
    {
      "name": "targets",
      "label": "Stated Targets",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Carbon-negative by 2030; net-zero historical emissions by 2050…",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDraftDisclosurePage.js"
    },
    {
      "name": "hectares",
      "label": "Hectares",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AILeakageModelerPage.js"
    },
    {
      "name": "project_name",
      "label": "Project Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Kasigau Corridor REDD+ Phase II",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIMRVDocumentValidatePage.js"
    },
    {
      "name": "baseline_emissions_tco2e",
      "label": "Baseline Emissions (tCO2e)",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIMRVDocumentValidatePage.js"
    },
    {
      "name": "leakage_tco2e",
      "label": "Leakage (tCO2e)",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIMRVDocumentValidatePage.js"
    },
    {
      "name": "monitoring_period",
      "label": "Monitoring Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "2022-01-01..2022-12-31",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIMRVDocumentValidatePage.js"
    },
    {
      "name": "ndvi_delta",
      "label": "NDVI Delta",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIMRVDocumentValidatePage.js"
    },
    {
      "name": "project_emissions_tco2e",
      "label": "Project Emissions (tCO2e)",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIMRVDocumentValidatePage.js"
    },
    {
      "name": "sampling_design",
      "label": "Sampling Design",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIMRVDocumentValidatePage.js"
    },
    {
      "name": "narrative",
      "label": "Narrative (JSON)",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "{",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AINarrativeEvidenceReconcilePage.js"
    },
    {
      "name": "vintage_range",
      "label": "Vintage Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "2010-2024",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIProjectRatingPage.js"
    },
    {
      "name": "imagery_period",
      "label": "Imagery Period (e.g. 2023-Q1..2024-Q1)",
      "type": "file",
      "defaultValue": "",
      "placeholder": "2023-Q1..2024-Q1",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AISatelliteMRVPage.js"
    },
    {
      "name": "revenue_musd",
      "label": "Revenue (USD M)",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIScope3AttributorPage.js"
    },
    {
      "name": "sector",
      "label": "Sector",
      "type": "text",
      "defaultValue": "",
      "placeholder": "technology",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIScope3AttributorPage.js"
    },
    {
      "name": "baseline_period",
      "label": "Baseline Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "2018-2023",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISynthesizeMRVPage.js"
    },
    {
      "name": "claim_id",
      "label": "Claim ID",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/ClaimsPage.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Issuance Chain Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/IssuanceChainPage.js"
    },
    {
      "name": "claim",
      "label": "Claim",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "credit",
      "label": "Credit",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "mrv_document",
      "label": "Mrv Document",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "transaction",
      "label": "Transaction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-climate-finance-carbon-registry-ai-tools": [
    {
      "name": "from_holder",
      "label": "From Holder",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Andes Reforestation S.A.C.",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIAMLScreenTransactionPage.js"
    },
    {
      "name": "to_holder",
      "label": "To Holder",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Eurasian Carbon Exchange",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIAMLScreenTransactionPage.js"
    },
    {
      "name": "transaction_id",
      "label": "Transaction ID",
      "type": "text",
      "defaultValue": "",
      "placeholder": "TX-2025-11789",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIAMLScreenTransactionPage.js"
    },
    {
      "name": "credits_amount",
      "label": "Credits Amount (tCO2e)",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAMLScreenTransactionPage.js"
    },
    {
      "name": "from_country",
      "label": "From Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "Peru",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAMLScreenTransactionPage.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Counterparty flagged on KYC; serial-number gap detected…",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAMLScreenTransactionPage.js"
    },
    {
      "name": "payment_route_jurisdictions",
      "label": "Payment Route (comma-separated jurisdictions)",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Latvia, UAE, Cyprus",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAMLScreenTransactionPage.js"
    },
    {
      "name": "price_per_ton_usd",
      "label": "Price per Ton (USD)",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAMLScreenTransactionPage.js"
    },
    {
      "name": "to_country",
      "label": "To Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "Russia",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAMLScreenTransactionPage.js"
    },
    {
      "name": "name",
      "label": "Project Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Gujarat Wind Power Project",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIAdditionalityScorerPage.js"
    },
    {
      "name": "country",
      "label": "Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "India",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdditionalityScorerPage.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Mangrove restoration along Riau coastline…",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdditionalityScorerPage.js"
    },
    {
      "name": "project_type",
      "label": "Project Type",
      "type": "text",
      "defaultValue": "avoided-deforestation",
      "placeholder": "avoided-deforestation",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIAnalyzePricingPage.js"
    },
    {
      "name": "vintage",
      "label": "Vintage Year",
      "type": "number",
      "defaultValue": "2023",
      "placeholder": "2023",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIAnalyzePricingPage.js"
    },
    {
      "name": "holder",
      "label": "Claimant",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Microsoft Corporation",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIClimateClaimValidatorPage.js"
    },
    {
      "name": "evidence",
      "label": "Evidence / Supporting Statement",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "{",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIClimateClaimValidatorPage.js"
    },
    {
      "name": "scope",
      "label": "Scope",
      "type": "text",
      "defaultValue": "",
      "placeholder": "1+2+3",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIClimateClaimValidatorPage.js"
    },
    {
      "name": "year",
      "label": "Target Year",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIClimateClaimValidatorPage.js"
    },
    {
      "name": "credit_id",
      "label": "Credit ID",
      "type": "text",
      "defaultValue": "",
      "placeholder": "CR-2021-KEN-027",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIDoubleCountingDetectPage.js"
    },
    {
      "name": "methodology",
      "label": "Methodology",
      "type": "text",
      "defaultValue": "",
      "placeholder": "VM0009",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIDoubleCountingDetectPage.js"
    },
    {
      "name": "project",
      "label": "Project",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Kasigau Corridor REDD+",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIDoubleCountingDetectPage.js"
    },
    {
      "name": "serial_number",
      "label": "Serial Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "CR-...-SN-12345",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDoubleCountingDetectPage.js"
    },
    {
      "name": "tons_co2e",
      "label": "tCO2e",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDoubleCountingDetectPage.js"
    },
    {
      "name": "vintage_year",
      "label": "Vintage Year",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDoubleCountingDetectPage.js"
    },
    {
      "name": "credits_used_tco2e",
      "label": "Credits Used (tCO2e)",
      "type": "number",
      "defaultValue": "",
      "placeholder": "250000",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDraftDisclosurePage.js"
    },
    {
      "name": "targets",
      "label": "Stated Targets",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Carbon-negative by 2030; net-zero historical emissions by 2050…",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDraftDisclosurePage.js"
    },
    {
      "name": "hectares",
      "label": "Hectares",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AILeakageModelerPage.js"
    },
    {
      "name": "project_name",
      "label": "Project Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Kasigau Corridor REDD+ Phase II",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AIMRVDocumentValidatePage.js"
    },
    {
      "name": "baseline_emissions_tco2e",
      "label": "Baseline Emissions (tCO2e)",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIMRVDocumentValidatePage.js"
    },
    {
      "name": "leakage_tco2e",
      "label": "Leakage (tCO2e)",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIMRVDocumentValidatePage.js"
    },
    {
      "name": "monitoring_period",
      "label": "Monitoring Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "2022-01-01..2022-12-31",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIMRVDocumentValidatePage.js"
    },
    {
      "name": "ndvi_delta",
      "label": "NDVI Delta",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIMRVDocumentValidatePage.js"
    },
    {
      "name": "project_emissions_tco2e",
      "label": "Project Emissions (tCO2e)",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIMRVDocumentValidatePage.js"
    },
    {
      "name": "sampling_design",
      "label": "Sampling Design",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIMRVDocumentValidatePage.js"
    },
    {
      "name": "narrative",
      "label": "Narrative (JSON)",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "{",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AINarrativeEvidenceReconcilePage.js"
    },
    {
      "name": "vintage_range",
      "label": "Vintage Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "2010-2024",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIProjectRatingPage.js"
    },
    {
      "name": "imagery_period",
      "label": "Imagery Period (e.g. 2023-Q1..2024-Q1)",
      "type": "file",
      "defaultValue": "",
      "placeholder": "2023-Q1..2024-Q1",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/AISatelliteMRVPage.js"
    },
    {
      "name": "revenue_musd",
      "label": "Revenue (USD M)",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIScope3AttributorPage.js"
    },
    {
      "name": "sector",
      "label": "Sector",
      "type": "text",
      "defaultValue": "",
      "placeholder": "technology",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIScope3AttributorPage.js"
    },
    {
      "name": "baseline_period",
      "label": "Baseline Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "2018-2023",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISynthesizeMRVPage.js"
    },
    {
      "name": "claim_id",
      "label": "Claim ID",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/ClaimsPage.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Issuance Chain Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/IssuanceChainPage.js"
    },
    {
      "name": "claim",
      "label": "Claim",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "credit",
      "label": "Credit",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "mrv_document",
      "label": "Mrv Document",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "transaction",
      "label": "Transaction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-debt-collection-optimizer-agents-4gnxef-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agents source input context",
      "options": [],
      "required": false,
      "source": "server/routes/agents.js"
    }
  ],
  "ai-debt-collection-optimizer-ai-j615h1-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "feature",
      "label": "Feature",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "prompt",
      "label": "Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    }
  ],
  "ai-debt-collection-optimizer-ai-features-1uog9e-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Features source input context",
      "options": [],
      "required": false,
      "source": "server/routes/aiFeatures.js"
    }
  ],
  "ai-debt-collection-optimizer-ai-new-1l6olc-exact-ai": [
    {
      "name": "agent_id",
      "label": "Agent Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "application_data",
      "label": "Application Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "channel",
      "label": "Channel",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "communication_history",
      "label": "Communication History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "date_range",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "debtor_id",
      "label": "Debtor Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "debtor_profile",
      "label": "Debtor Profile",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "debtor_record",
      "label": "Debtor Record",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "hardship_indicators",
      "label": "Hardship Indicators",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "horizon_days",
      "label": "Horizon Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "original_balance",
      "label": "Original Balance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "payment_history",
      "label": "Payment History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "portfolio_id",
      "label": "Portfolio Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    }
  ],
  "ai-debt-collection-optimizer-campaigns-1u0cl8-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Campaigns source input context",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    }
  ],
  "ai-debt-collection-optimizer-gap-critical-only-1-ai-endpoint-for-30-routes-missing-score-debt-13dgqm-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Critical Only 1 AI Endpoint For 30 Routes Missing Score Debt source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap_critical_only_1_ai_endpoint_for_30_routes_missing_score_debt.js"
    }
  ],
  "ai-debt-collection-optimizer-gap-no-phone-system-integration-for-automated-outreach-sms-email-117lxn-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Phone System Integration For Automated Outreach Sms Email source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap_no_phone_system_integration_for_automated_outreach_sms_email.js"
    }
  ],
  "ai-debt-collection-optimizer-ai-features-vo0skx-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Features source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIFeatures.jsx"
    }
  ],
  "ai-debt-collection-optimizer-ai-new-features-13zwk3-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI New Features source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AINewFeatures.jsx"
    }
  ],
  "ai-debt-collection-optimizer-gap-critical-only1-ai-endpoint-for30-routes-missing-score-debt-zwa3gk-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Critical Only1 AI Endpoint For30 Routes Missing Score Debt source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapCriticalOnly1AiEndpointFor30RoutesMissingScoreDebt.jsx"
    }
  ],
  "ai-debt-collection-optimizer-gap-no-phone-system-integration-for-automated-outreach-sms-email-16nd9l-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Phone System Integration For Automated Outreach Sms Email source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapNoPhoneSystemIntegrationForAutomatedOutreachSmsEmail.jsx"
    }
  ],
  "ai-debt-collection-optimizer-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agents source input context",
      "options": [],
      "required": false,
      "source": "server/routes/agents.js"
    },
    {
      "name": "feature",
      "label": "Feature",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "prompt",
      "label": "Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "agent_id",
      "label": "Agent Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "application_data",
      "label": "Application Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "channel",
      "label": "Channel",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "communication_history",
      "label": "Communication History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "date_range",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "debtor_id",
      "label": "Debtor Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "debtor_profile",
      "label": "Debtor Profile",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "debtor_record",
      "label": "Debtor Record",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "hardship_indicators",
      "label": "Hardship Indicators",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "horizon_days",
      "label": "Horizon Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "original_balance",
      "label": "Original Balance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "payment_history",
      "label": "Payment History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "portfolio_id",
      "label": "Portfolio Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    }
  ],
  "ai-debt-collection-optimizer-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agents source input context",
      "options": [],
      "required": false,
      "source": "server/routes/agents.js"
    },
    {
      "name": "feature",
      "label": "Feature",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "prompt",
      "label": "Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "agent_id",
      "label": "Agent Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "application_data",
      "label": "Application Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "channel",
      "label": "Channel",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "communication_history",
      "label": "Communication History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "date_range",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "debtor_id",
      "label": "Debtor Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "debtor_profile",
      "label": "Debtor Profile",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "debtor_record",
      "label": "Debtor Record",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "hardship_indicators",
      "label": "Hardship Indicators",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "horizon_days",
      "label": "Horizon Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "original_balance",
      "label": "Original Balance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "payment_history",
      "label": "Payment History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "portfolio_id",
      "label": "Portfolio Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    }
  ],
  "ai-expense-report-auditor-agentic-auditor-1e7zy7-exact-ai": [
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticAuditor.js"
    },
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticAuditor.js"
    }
  ],
  "ai-expense-report-auditor-ai-j615h1-exact-ai": [
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "department_id",
      "label": "Department Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "destination",
      "label": "Destination",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "employee_id",
      "label": "Employee Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "end_date",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "expense_date",
      "label": "Expense Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "from_currency",
      "label": "From Currency",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "purpose",
      "label": "Purpose",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "receipt_text",
      "label": "Receipt Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "start_date",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "to_currency",
      "label": "To Currency",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "travelers",
      "label": "Travelers",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "vendor_name",
      "label": "Vendor Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    }
  ],
  "ai-expense-report-auditor-ai-new-1l6olc-exact-ai": [
    {
      "name": "claimed_miles",
      "label": "Claimed Miles",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "destination",
      "label": "Destination",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "frequency = 'daily'",
      "label": "Frequency = 'Daily'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "image_base64",
      "label": "Image Base64",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "items",
      "label": "Items",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "mime_type",
      "label": "Mime Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "origin",
      "label": "Origin",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "rate_per_mile",
      "label": "Rate Per Mile",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "vehicle",
      "label": "Vehicle",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    }
  ],
  "ai-expense-report-auditor-ai-admin-tools-1qhxaq-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Admin Tools source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIAdminTools.jsx"
    }
  ],
  "ai-expense-report-auditor-ai-agentic-audit-1bi10q-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Agentic Audit source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIAgenticAudit.jsx"
    }
  ],
  "ai-expense-report-auditor-ai-anomaly-detection-udkg00-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Anomaly Detection source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIAnomalyDetection.jsx"
    }
  ],
  "ai-expense-report-auditor-ai-audit-report-4kh5kl-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Audit Report source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIAuditReport.jsx"
    }
  ],
  "ai-expense-report-auditor-ai-batch-tools-bmqozl-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Batch Tools source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIBatchTools.jsx"
    }
  ],
  "ai-expense-report-auditor-ai-budget-forecast-gecirs-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Budget Forecast source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIBudgetForecast.jsx"
    }
  ],
  "ai-expense-report-auditor-ai-categorization-isuws1-exact-ai": [
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICategorization.jsx"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICategorization.jsx"
    },
    {
      "name": "vendor_name",
      "label": "Vendor Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICategorization.jsx"
    }
  ],
  "ai-expense-report-auditor-ai-cost-optimization-1odg7h-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Cost Optimization source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICostOptimization.jsx"
    }
  ],
  "ai-expense-report-auditor-ai-currency-validator-1llbr8-exact-ai": [
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICurrencyValidator.jsx"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICurrencyValidator.jsx"
    },
    {
      "name": "expense_date",
      "label": "Expense Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICurrencyValidator.jsx"
    },
    {
      "name": "from_currency",
      "label": "From Currency",
      "type": "text",
      "defaultValue": "EUR",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICurrencyValidator.jsx"
    },
    {
      "name": "to_currency",
      "label": "To Currency",
      "type": "text",
      "defaultValue": "USD",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICurrencyValidator.jsx"
    }
  ],
  "ai-expense-report-auditor-ai-department-benchmark-g9m811-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Department Benchmark source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIDepartmentBenchmark.jsx"
    }
  ],
  "ai-expense-report-auditor-ai-duplicate-detection-2ru4tq-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Duplicate Detection source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIDuplicateDetection.jsx"
    }
  ],
  "ai-expense-report-auditor-ai-employee-risk-1e3dp1-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Employee Risk source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIEmployeeRisk.jsx"
    }
  ],
  "ai-expense-report-auditor-ai-fraud-detection-pjuid9-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Fraud Detection source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIFraudDetection.jsx"
    }
  ],
  "ai-expense-report-auditor-ai-policy-check-bygxyo-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Policy Check source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPolicyCheck.jsx"
    }
  ],
  "ai-expense-report-auditor-ai-policy-suggestions-18veje-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Policy Suggestions source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPolicySuggestions.jsx"
    }
  ],
  "ai-expense-report-auditor-ai-receipt-analysis-1fhlcs-exact-ai": [
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIReceiptAnalysis.jsx"
    },
    {
      "name": "receipt_text",
      "label": "Receipt Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIReceiptAnalysis.jsx"
    },
    {
      "name": "vendor_name",
      "label": "Vendor Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIReceiptAnalysis.jsx"
    }
  ],
  "ai-expense-report-auditor-ai-report-summary-1he7g5-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Report Summary source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIReportSummary.jsx"
    }
  ],
  "ai-expense-report-auditor-ai-smart-search-1eys7j-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Smart Search source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AISmartSearch.jsx"
    }
  ],
  "ai-expense-report-auditor-ai-spending-analysis-6gekko-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Spending Analysis source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AISpendingAnalysis.jsx"
    }
  ],
  "ai-expense-report-auditor-ai-tax-deductions-1ug5ad-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Tax Deductions source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITaxDeductions.jsx"
    }
  ],
  "ai-expense-report-auditor-ai-trip-planner-zvzber-exact-ai": [
    {
      "name": "destination",
      "label": "Destination",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITripPlanner.jsx"
    },
    {
      "name": "end_date",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITripPlanner.jsx"
    },
    {
      "name": "purpose",
      "label": "Purpose",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITripPlanner.jsx"
    },
    {
      "name": "start_date",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITripPlanner.jsx"
    },
    {
      "name": "travelers",
      "label": "Travelers",
      "type": "text",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITripPlanner.jsx"
    }
  ],
  "ai-expense-report-auditor-ai-vendor-risk-1eeacc-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Vendor Risk source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIVendorRisk.jsx"
    }
  ],
  "ai-expense-report-auditor-report-detail-10cdog-exact-ai": [
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/ReportDetail.jsx"
    },
    {
      "name": "category_id",
      "label": "Category Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/ReportDetail.jsx"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/ReportDetail.jsx"
    },
    {
      "name": "expense_date",
      "label": "Expense Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/ReportDetail.jsx"
    },
    {
      "name": "has_receipt",
      "label": "Has Receipt",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/ReportDetail.jsx"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/ReportDetail.jsx"
    },
    {
      "name": "vendor_id",
      "label": "Vendor Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/ReportDetail.jsx"
    }
  ],
  "ai-expense-report-auditor-source-workflow": [
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticAuditor.js"
    },
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticAuditor.js"
    },
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "department_id",
      "label": "Department Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "destination",
      "label": "Destination",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "employee_id",
      "label": "Employee Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "end_date",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "expense_date",
      "label": "Expense Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "from_currency",
      "label": "From Currency",
      "type": "text",
      "defaultValue": "EUR",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "purpose",
      "label": "Purpose",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "receipt_text",
      "label": "Receipt Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "start_date",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "to_currency",
      "label": "To Currency",
      "type": "text",
      "defaultValue": "USD",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "travelers",
      "label": "Travelers",
      "type": "text",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "vendor_name",
      "label": "Vendor Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "claimed_miles",
      "label": "Claimed Miles",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "frequency = 'daily'",
      "label": "Frequency = 'Daily'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "image_base64",
      "label": "Image Base64",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "items",
      "label": "Items",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "mime_type",
      "label": "Mime Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "origin",
      "label": "Origin",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "rate_per_mile",
      "label": "Rate Per Mile",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "vehicle",
      "label": "Vehicle",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Admin Tools source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIAdminTools.jsx"
    },
    {
      "name": "category_id",
      "label": "Category Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/ReportDetail.jsx"
    },
    {
      "name": "has_receipt",
      "label": "Has Receipt",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/ReportDetail.jsx"
    },
    {
      "name": "vendor_id",
      "label": "Vendor Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/ReportDetail.jsx"
    }
  ],
  "ai-expense-report-auditor-ai-tools": [
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticAuditor.js"
    },
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticAuditor.js"
    },
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "department_id",
      "label": "Department Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "destination",
      "label": "Destination",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "employee_id",
      "label": "Employee Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "end_date",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "expense_date",
      "label": "Expense Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "from_currency",
      "label": "From Currency",
      "type": "text",
      "defaultValue": "EUR",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "purpose",
      "label": "Purpose",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "receipt_text",
      "label": "Receipt Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "start_date",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "to_currency",
      "label": "To Currency",
      "type": "text",
      "defaultValue": "USD",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "travelers",
      "label": "Travelers",
      "type": "text",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "vendor_name",
      "label": "Vendor Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "claimed_miles",
      "label": "Claimed Miles",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "frequency = 'daily'",
      "label": "Frequency = 'Daily'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "image_base64",
      "label": "Image Base64",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "items",
      "label": "Items",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "mime_type",
      "label": "Mime Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "origin",
      "label": "Origin",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "rate_per_mile",
      "label": "Rate Per Mile",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "vehicle",
      "label": "Vehicle",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Admin Tools source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIAdminTools.jsx"
    },
    {
      "name": "category_id",
      "label": "Category Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/ReportDetail.jsx"
    },
    {
      "name": "has_receipt",
      "label": "Has Receipt",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/ReportDetail.jsx"
    },
    {
      "name": "vendor_id",
      "label": "Vendor Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/ReportDetail.jsx"
    }
  ],
  "ai-finance-platform-agentic-advisor-t7cweu-exact-ai": [
    {
      "name": "goal",
      "label": "Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/agenticAdvisor.js"
    },
    {
      "name": "monthly_contribution",
      "label": "Monthly Contribution",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/agenticAdvisor.js"
    },
    {
      "name": "risk_tolerance",
      "label": "Risk Tolerance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/agenticAdvisor.js"
    },
    {
      "name": "time_horizon_years",
      "label": "Time Horizon Years",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/agenticAdvisor.js"
    }
  ],
  "ai-finance-platform-ai-1lp99l-exact-ai": [
    {
      "name": "age = null",
      "label": "Age = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "ageBracket = null",
      "label": "Age Bracket = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "annualIncome = null",
      "label": "Annual Income = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "billType",
      "label": "Bill Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "competitorOffer",
      "label": "Competitor Offer",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "currentAge = 35",
      "label": "Current Age = 35",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "currentBillUSD",
      "label": "Current Bill USD",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "currentSavings = 0",
      "label": "Current Savings = 0",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "dependents = 0",
      "label": "Dependents = 0",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "existingPolicies = []",
      "label": "Existing Policies = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "expectedReturnPct = 7",
      "label": "Expected Return Pct = 7",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "goals = []",
      "label": "Goals = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "healthStatus = 'unspecified'",
      "label": "Health Status = 'Unspecified'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "investableAssets = null",
      "label": "Investable Assets = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "lifeExpectancy = 90",
      "label": "Life Expectancy = 90",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "monthlyContribution = 0",
      "label": "Monthly Contribution = 0",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "monthlyExpenses = []",
      "label": "Monthly Expenses = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "monthlyIncome",
      "label": "Monthly Income",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "notes = ''",
      "label": "Notes = ''",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "provider",
      "label": "Provider",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "retirementAge = 65",
      "label": "Retirement Age = 65",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "riskTolerance = 'moderate'",
      "label": "Risk Tolerance = 'Moderate'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "savingsGoalPct = 20",
      "label": "Savings Goal Pct = 20",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "targetAnnualIncome = null",
      "label": "Target Annual Income = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "tenureMonths",
      "label": "Tenure Months",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "timeHorizonYears = 10",
      "label": "Time Horizon Years = 10",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    }
  ],
  "ai-finance-platform-plaid-1520od-exact-ai": [
    {
      "name": "connectionId",
      "label": "Connection Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/plaid.js"
    },
    {
      "name": "count = 100",
      "label": "Count = 100",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/plaid.js"
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/plaid.js"
    },
    {
      "name": "institutionId",
      "label": "Institution Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/plaid.js"
    },
    {
      "name": "institutionName",
      "label": "Institution Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/plaid.js"
    },
    {
      "name": "publicToken",
      "label": "Public Token",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/plaid.js"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/plaid.js"
    }
  ],
  "ai-finance-platform-source-workflow": [
    {
      "name": "goal",
      "label": "Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/agenticAdvisor.js"
    },
    {
      "name": "monthly_contribution",
      "label": "Monthly Contribution",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/agenticAdvisor.js"
    },
    {
      "name": "risk_tolerance",
      "label": "Risk Tolerance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/agenticAdvisor.js"
    },
    {
      "name": "time_horizon_years",
      "label": "Time Horizon Years",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/agenticAdvisor.js"
    },
    {
      "name": "age = null",
      "label": "Age = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "ageBracket = null",
      "label": "Age Bracket = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "annualIncome = null",
      "label": "Annual Income = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "billType",
      "label": "Bill Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "competitorOffer",
      "label": "Competitor Offer",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "currentAge = 35",
      "label": "Current Age = 35",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "currentBillUSD",
      "label": "Current Bill USD",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "currentSavings = 0",
      "label": "Current Savings = 0",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "dependents = 0",
      "label": "Dependents = 0",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "existingPolicies = []",
      "label": "Existing Policies = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "expectedReturnPct = 7",
      "label": "Expected Return Pct = 7",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "goals = []",
      "label": "Goals = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "healthStatus = 'unspecified'",
      "label": "Health Status = 'Unspecified'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "investableAssets = null",
      "label": "Investable Assets = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "lifeExpectancy = 90",
      "label": "Life Expectancy = 90",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "monthlyContribution = 0",
      "label": "Monthly Contribution = 0",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "monthlyExpenses = []",
      "label": "Monthly Expenses = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "monthlyIncome",
      "label": "Monthly Income",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "notes = ''",
      "label": "Notes = ''",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "provider",
      "label": "Provider",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "retirementAge = 65",
      "label": "Retirement Age = 65",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "riskTolerance = 'moderate'",
      "label": "Risk Tolerance = 'Moderate'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "savingsGoalPct = 20",
      "label": "Savings Goal Pct = 20",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "targetAnnualIncome = null",
      "label": "Target Annual Income = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "tenureMonths",
      "label": "Tenure Months",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "timeHorizonYears = 10",
      "label": "Time Horizon Years = 10",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "connectionId",
      "label": "Connection Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/plaid.js"
    },
    {
      "name": "count = 100",
      "label": "Count = 100",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/plaid.js"
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/plaid.js"
    },
    {
      "name": "institutionId",
      "label": "Institution Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/plaid.js"
    },
    {
      "name": "institutionName",
      "label": "Institution Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/plaid.js"
    },
    {
      "name": "publicToken",
      "label": "Public Token",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/plaid.js"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/plaid.js"
    }
  ],
  "ai-finance-platform-ai-tools": [
    {
      "name": "goal",
      "label": "Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/agenticAdvisor.js"
    },
    {
      "name": "monthly_contribution",
      "label": "Monthly Contribution",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/agenticAdvisor.js"
    },
    {
      "name": "risk_tolerance",
      "label": "Risk Tolerance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/agenticAdvisor.js"
    },
    {
      "name": "time_horizon_years",
      "label": "Time Horizon Years",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/agenticAdvisor.js"
    },
    {
      "name": "age = null",
      "label": "Age = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "ageBracket = null",
      "label": "Age Bracket = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "annualIncome = null",
      "label": "Annual Income = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "billType",
      "label": "Bill Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "competitorOffer",
      "label": "Competitor Offer",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "currentAge = 35",
      "label": "Current Age = 35",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "currentBillUSD",
      "label": "Current Bill USD",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "currentSavings = 0",
      "label": "Current Savings = 0",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "dependents = 0",
      "label": "Dependents = 0",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "existingPolicies = []",
      "label": "Existing Policies = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "expectedReturnPct = 7",
      "label": "Expected Return Pct = 7",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "goals = []",
      "label": "Goals = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "healthStatus = 'unspecified'",
      "label": "Health Status = 'Unspecified'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "investableAssets = null",
      "label": "Investable Assets = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "lifeExpectancy = 90",
      "label": "Life Expectancy = 90",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "monthlyContribution = 0",
      "label": "Monthly Contribution = 0",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "monthlyExpenses = []",
      "label": "Monthly Expenses = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "monthlyIncome",
      "label": "Monthly Income",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "notes = ''",
      "label": "Notes = ''",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "provider",
      "label": "Provider",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "retirementAge = 65",
      "label": "Retirement Age = 65",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "riskTolerance = 'moderate'",
      "label": "Risk Tolerance = 'Moderate'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "savingsGoalPct = 20",
      "label": "Savings Goal Pct = 20",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "targetAnnualIncome = null",
      "label": "Target Annual Income = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "tenureMonths",
      "label": "Tenure Months",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "timeHorizonYears = 10",
      "label": "Time Horizon Years = 10",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "connectionId",
      "label": "Connection Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/plaid.js"
    },
    {
      "name": "count = 100",
      "label": "Count = 100",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/plaid.js"
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/plaid.js"
    },
    {
      "name": "institutionId",
      "label": "Institution Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/plaid.js"
    },
    {
      "name": "institutionName",
      "label": "Institution Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/plaid.js"
    },
    {
      "name": "publicToken",
      "label": "Public Token",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/plaid.js"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/plaid.js"
    }
  ],
  "ai-financial-report-generator-ai-audit-analyzer-1bp7et-exact-ai": [
    {
      "name": "analysis_name",
      "label": "Analysis Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiAuditAnalyzer.js"
    },
    {
      "name": "analysis_period",
      "label": "Analysis Period",
      "type": "text",
      "defaultValue": "Q4 2024",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiAuditAnalyzer.js"
    },
    {
      "name": "company_id",
      "label": "Company Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiAuditAnalyzer.js"
    }
  ],
  "ai-financial-report-generator-ai-audit-readiness-15rqhx-exact-ai": [
    {
      "name": "audit_type",
      "label": "Audit Type",
      "type": "text",
      "defaultValue": "financial",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiAuditReadiness.js"
    },
    {
      "name": "company_name",
      "label": "Company Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiAuditReadiness.js"
    },
    {
      "name": "documents_available",
      "label": "Documents Available",
      "type": "textarea",
      "defaultValue": "Trial balance, GL, AR aging, AP aging",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiAuditReadiness.js"
    },
    {
      "name": "known_issues",
      "label": "Known Issues",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiAuditReadiness.js"
    },
    {
      "name": "last_audit_findings",
      "label": "Last Audit Findings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiAuditReadiness.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "FY 2024",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiAuditReadiness.js"
    }
  ],
  "ai-financial-report-generator-ai-backlog-tools-r64z0d-exact-ai": [
    {
      "name": "horizon_days",
      "label": "Horizon Days",
      "type": "text",
      "defaultValue": "90",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiBacklogTools.js"
    },
    {
      "name": "monthly_burn",
      "label": "Monthly Burn",
      "type": "text",
      "defaultValue": "80000",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiBacklogTools.js"
    },
    {
      "name": "opening_cash",
      "label": "Opening Cash",
      "type": "text",
      "defaultValue": "250000",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiBacklogTools.js"
    }
  ],
  "ai-financial-report-generator-ai-board-reports-1eh94f-exact-ai": [
    {
      "name": "company_id",
      "label": "Company Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiBoardReports.js"
    },
    {
      "name": "report_period",
      "label": "Report Period",
      "type": "text",
      "defaultValue": "Q4 2024",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiBoardReports.js"
    },
    {
      "name": "report_title",
      "label": "Report Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiBoardReports.js"
    }
  ],
  "ai-financial-report-generator-ai-chat-ur4j8n-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Chat source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiChat.js"
    }
  ],
  "ai-financial-report-generator-ai-covenant-tracking-1dknlg-exact-ai": [
    {
      "name": "cashFlow",
      "label": "Cash Flow",
      "type": "text",
      "defaultValue": "800000",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiCovenantTracking.js"
    },
    {
      "name": "currentAssets",
      "label": "Current Assets",
      "type": "text",
      "defaultValue": "2000000",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiCovenantTracking.js"
    },
    {
      "name": "currentLiabilities",
      "label": "Current Liabilities",
      "type": "text",
      "defaultValue": "1000000",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiCovenantTracking.js"
    },
    {
      "name": "debt",
      "label": "Debt",
      "type": "text",
      "defaultValue": "5000000",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiCovenantTracking.js"
    },
    {
      "name": "ebitda",
      "label": "Ebitda",
      "type": "text",
      "defaultValue": "1200000",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiCovenantTracking.js"
    },
    {
      "name": "equity",
      "label": "Equity",
      "type": "text",
      "defaultValue": "3000000",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiCovenantTracking.js"
    },
    {
      "name": "interestExpense",
      "label": "Interest Expense",
      "type": "text",
      "defaultValue": "400000",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiCovenantTracking.js"
    }
  ],
  "ai-financial-report-generator-ai-expense-categorizer-oe16pw-exact-ai": [
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiExpenseCategorizer.js"
    },
    {
      "name": "company_id",
      "label": "Company Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiExpenseCategorizer.js"
    },
    {
      "name": "expense_description",
      "label": "Expense Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiExpenseCategorizer.js"
    },
    {
      "name": "receipt_text",
      "label": "Receipt Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiExpenseCategorizer.js"
    },
    {
      "name": "vendor",
      "label": "Vendor",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiExpenseCategorizer.js"
    }
  ],
  "ai-financial-report-generator-ai-forecast-generator-kt97dd-exact-ai": [
    {
      "name": "company_id",
      "label": "Company Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiForecastGenerator.js"
    },
    {
      "name": "forecast_name",
      "label": "Forecast Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiForecastGenerator.js"
    },
    {
      "name": "forecast_type",
      "label": "Forecast Type",
      "type": "text",
      "defaultValue": "revenue",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiForecastGenerator.js"
    },
    {
      "name": "metric_name",
      "label": "Metric Name",
      "type": "text",
      "defaultValue": "Total Revenue",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiForecastGenerator.js"
    },
    {
      "name": "time_horizon",
      "label": "Time Horizon",
      "type": "text",
      "defaultValue": "12 months",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiForecastGenerator.js"
    }
  ],
  "ai-financial-report-generator-ai-insights-11u2x4-exact-ai": [
    {
      "name": "company_id",
      "label": "Company",
      "type": "select",
      "defaultValue": "c.id",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiInsights.js"
    },
    {
      "name": "company_name",
      "label": "Company",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiInsights.js"
    },
    {
      "name": "confidence_score",
      "label": "Confidence Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiInsights.js"
    },
    {
      "name": "created_at",
      "label": "Generated",
      "type": "datetime",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiInsights.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiInsights.js"
    },
    {
      "name": "impact_level",
      "label": "Impact Level",
      "type": "badge",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiInsights.js"
    },
    {
      "name": "insight_type",
      "label": "Insight Type",
      "type": "select",
      "defaultValue": "cost_optimization",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiInsights.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "badge",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiInsights.js"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiInsights.js"
    }
  ],
  "ai-financial-report-generator-ai-presentations-1u2r6h-exact-ai": [
    {
      "name": "company_id",
      "label": "Company Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiPresentations.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiPresentations.js"
    },
    {
      "name": "num_slides",
      "label": "Num Slides",
      "type": "text",
      "defaultValue": "8",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiPresentations.js"
    },
    {
      "name": "source_type",
      "label": "Source Type",
      "type": "text",
      "defaultValue": "financial_statement",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiPresentations.js"
    },
    {
      "name": "theme",
      "label": "Theme",
      "type": "text",
      "defaultValue": "professional",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiPresentations.js"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiPresentations.js"
    }
  ],
  "ai-financial-report-generator-ai-responses-history-nryaz-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Responses History source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiResponsesHistory.js"
    }
  ],
  "ai-financial-report-generator-ai-segment-analysis-1bsenr-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Segment Analysis source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiSegmentAnalysis.js"
    }
  ],
  "ai-financial-report-generator-ai-variance-explainer-r2s5t8-exact-ai": [
    {
      "name": "actual_amount",
      "label": "Actual Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiVarianceExplainer.js"
    },
    {
      "name": "budgeted_amount",
      "label": "Budgeted Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiVarianceExplainer.js"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiVarianceExplainer.js"
    },
    {
      "name": "company_id",
      "label": "Company Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiVarianceExplainer.js"
    },
    {
      "name": "department",
      "label": "Department",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiVarianceExplainer.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "Q4 2024",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiVarianceExplainer.js"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiVarianceExplainer.js"
    }
  ],
  "ai-financial-report-generator-agentic-cfo-1f0n6a-exact-ai": [
    {
      "name": "company_id",
      "label": "Company Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/agenticCFO.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/agenticCFO.js"
    }
  ],
  "ai-financial-report-generator-ai-1lp99l-exact-ai": [
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "anomaly_id",
      "label": "Anomaly Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "audit_log_id",
      "label": "Audit Log Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "audit_type = 'annual'",
      "label": "Audit Type = 'Annual'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "balance_sheet_id",
      "label": "Balance Sheet Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "budget_actual_id",
      "label": "Budget Actual Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "cash_flow_id",
      "label": "Cash Flow Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "comment",
      "label": "Comment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "company_id",
      "label": "Company Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "compliance_report_id",
      "label": "Compliance Report Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "data_points",
      "label": "Data Points",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "data_type",
      "label": "Data Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "decision",
      "label": "Decision",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "elims = []",
      "label": "Elims = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "entities = []",
      "label": "Entities = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "expense_id",
      "label": "Expense Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "financial_data",
      "label": "Financial Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "focus_areas = []",
      "label": "Focus Areas = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "forecast_id",
      "label": "Forecast Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "forecast_period",
      "label": "Forecast Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "historical_data",
      "label": "Historical Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "include_ai",
      "label": "Include AI",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "initiatives = []",
      "label": "Initiatives = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "kpi_id",
      "label": "Kpi Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "metric_name",
      "label": "Metric Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "parameters",
      "label": "Parameters",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "profit_loss_id",
      "label": "Profit Loss Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "regulation_type",
      "label": "Regulation Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "report_id",
      "label": "Report Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "report_type",
      "label": "Report Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "resource_id",
      "label": "Resource Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "resource_type",
      "label": "Resource Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "segments = []",
      "label": "Segments = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "statement_id",
      "label": "Statement Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "tax_data",
      "label": "Tax Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "tax_report_id",
      "label": "Tax Report Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "trend_analysis_id",
      "label": "Trend Analysis Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    }
  ],
  "ai-financial-report-generator-ai-audit-analyzer-1ertz5-exact-ai": [
    {
      "name": "analysis_name",
      "label": "Analysis Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiAuditAnalyzer.js"
    },
    {
      "name": "analysis_period",
      "label": "Analysis Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiAuditAnalyzer.js"
    },
    {
      "name": "audit_log_id",
      "label": "Audit Log Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiAuditAnalyzer.js"
    },
    {
      "name": "company_id",
      "label": "Company Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiAuditAnalyzer.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiAuditAnalyzer.js"
    }
  ],
  "ai-financial-report-generator-ai-board-report-writer-1y5z0b-exact-ai": [
    {
      "name": "company_id",
      "label": "Company Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiBoardReportWriter.js"
    },
    {
      "name": "executive_summary",
      "label": "Executive Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiBoardReportWriter.js"
    },
    {
      "name": "presented_date",
      "label": "Presented Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiBoardReportWriter.js"
    },
    {
      "name": "report_period",
      "label": "Report Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiBoardReportWriter.js"
    },
    {
      "name": "report_title",
      "label": "Report Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiBoardReportWriter.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiBoardReportWriter.js"
    }
  ],
  "ai-financial-report-generator-ai-expense-categorizer-4sihfo-exact-ai": [
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExpenseCategorizer.js"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExpenseCategorizer.js"
    },
    {
      "name": "company_id",
      "label": "Company Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExpenseCategorizer.js"
    },
    {
      "name": "confidence_score",
      "label": "Confidence Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExpenseCategorizer.js"
    },
    {
      "name": "date",
      "label": "Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExpenseCategorizer.js"
    },
    {
      "name": "expense_description",
      "label": "Expense Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExpenseCategorizer.js"
    },
    {
      "name": "receipt_text",
      "label": "Receipt Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExpenseCategorizer.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExpenseCategorizer.js"
    },
    {
      "name": "subcategory",
      "label": "Subcategory",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExpenseCategorizer.js"
    },
    {
      "name": "vendor",
      "label": "Vendor",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExpenseCategorizer.js"
    }
  ],
  "ai-financial-report-generator-ai-forecast-generator-55gi6p-exact-ai": [
    {
      "name": "company_id",
      "label": "Company Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiForecastGenerator.js"
    },
    {
      "name": "forecast_name",
      "label": "Forecast Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiForecastGenerator.js"
    },
    {
      "name": "forecast_type",
      "label": "Forecast Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiForecastGenerator.js"
    },
    {
      "name": "historical_data",
      "label": "Historical Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiForecastGenerator.js"
    },
    {
      "name": "methodology",
      "label": "Methodology",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiForecastGenerator.js"
    },
    {
      "name": "metric_name",
      "label": "Metric Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiForecastGenerator.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiForecastGenerator.js"
    },
    {
      "name": "time_horizon",
      "label": "Time Horizon",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiForecastGenerator.js"
    }
  ],
  "ai-financial-report-generator-ai-insights-1mwonf-exact-ai": [
    {
      "name": "acknowledged_by",
      "label": "Acknowledged By",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiInsights.js"
    },
    {
      "name": "action_items",
      "label": "Action Items",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiInsights.js"
    },
    {
      "name": "company_id",
      "label": "Company Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiInsights.js"
    },
    {
      "name": "confidence_score",
      "label": "Confidence Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiInsights.js"
    },
    {
      "name": "data_sources",
      "label": "Data Sources",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiInsights.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiInsights.js"
    },
    {
      "name": "impact_level",
      "label": "Impact Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiInsights.js"
    },
    {
      "name": "insight_type",
      "label": "Insight Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiInsights.js"
    },
    {
      "name": "recommendations",
      "label": "Recommendations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiInsights.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiInsights.js"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiInsights.js"
    }
  ],
  "ai-financial-report-generator-ai-presentations-1x5dqu-exact-ai": [
    {
      "name": "company_id",
      "label": "Company Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPresentations.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPresentations.js"
    },
    {
      "name": "num_slides",
      "label": "Num Slides",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPresentations.js"
    },
    {
      "name": "slides",
      "label": "Slides",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPresentations.js"
    },
    {
      "name": "source_data",
      "label": "Source Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPresentations.js"
    },
    {
      "name": "source_id",
      "label": "Source Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPresentations.js"
    },
    {
      "name": "source_type",
      "label": "Source Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPresentations.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPresentations.js"
    },
    {
      "name": "theme",
      "label": "Theme",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPresentations.js"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPresentations.js"
    }
  ],
  "ai-financial-report-generator-ai-responses-2k6vnt-exact-ai": [
    {
      "name": "company_id",
      "label": "Company Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiResponses.js"
    },
    {
      "name": "days = 30",
      "label": "Days = 30",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiResponses.js"
    },
    {
      "name": "feature_type",
      "label": "Feature Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiResponses.js"
    }
  ],
  "ai-financial-report-generator-ai-variance-explainer-bezgmk-exact-ai": [
    {
      "name": "actual_amount",
      "label": "Actual Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiVarianceExplainer.js"
    },
    {
      "name": "budgeted_amount",
      "label": "Budgeted Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiVarianceExplainer.js"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiVarianceExplainer.js"
    },
    {
      "name": "company_id",
      "label": "Company Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiVarianceExplainer.js"
    },
    {
      "name": "department",
      "label": "Department",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiVarianceExplainer.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiVarianceExplainer.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiVarianceExplainer.js"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiVarianceExplainer.js"
    }
  ],
  "ai-financial-report-generator-source-workflow": [
    {
      "name": "analysis_name",
      "label": "Analysis Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiAuditAnalyzer.js"
    },
    {
      "name": "analysis_period",
      "label": "Analysis Period",
      "type": "text",
      "defaultValue": "Q4 2024",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiAuditAnalyzer.js"
    },
    {
      "name": "company_id",
      "label": "Company Id",
      "type": "select",
      "defaultValue": "c.id",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiAuditAnalyzer.js"
    },
    {
      "name": "audit_type",
      "label": "Audit Type",
      "type": "text",
      "defaultValue": "financial",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiAuditReadiness.js"
    },
    {
      "name": "company_name",
      "label": "Company Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiAuditReadiness.js"
    },
    {
      "name": "documents_available",
      "label": "Documents Available",
      "type": "textarea",
      "defaultValue": "Trial balance, GL, AR aging, AP aging",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiAuditReadiness.js"
    },
    {
      "name": "known_issues",
      "label": "Known Issues",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiAuditReadiness.js"
    },
    {
      "name": "last_audit_findings",
      "label": "Last Audit Findings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiAuditReadiness.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "FY 2024",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiAuditReadiness.js"
    },
    {
      "name": "horizon_days",
      "label": "Horizon Days",
      "type": "text",
      "defaultValue": "90",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiBacklogTools.js"
    },
    {
      "name": "monthly_burn",
      "label": "Monthly Burn",
      "type": "text",
      "defaultValue": "80000",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiBacklogTools.js"
    },
    {
      "name": "opening_cash",
      "label": "Opening Cash",
      "type": "text",
      "defaultValue": "250000",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiBacklogTools.js"
    },
    {
      "name": "report_period",
      "label": "Report Period",
      "type": "text",
      "defaultValue": "Q4 2024",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiBoardReports.js"
    },
    {
      "name": "report_title",
      "label": "Report Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiBoardReports.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Chat source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiChat.js"
    },
    {
      "name": "cashFlow",
      "label": "Cash Flow",
      "type": "text",
      "defaultValue": "800000",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiCovenantTracking.js"
    },
    {
      "name": "currentAssets",
      "label": "Current Assets",
      "type": "text",
      "defaultValue": "2000000",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiCovenantTracking.js"
    },
    {
      "name": "currentLiabilities",
      "label": "Current Liabilities",
      "type": "text",
      "defaultValue": "1000000",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiCovenantTracking.js"
    },
    {
      "name": "debt",
      "label": "Debt",
      "type": "text",
      "defaultValue": "5000000",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiCovenantTracking.js"
    },
    {
      "name": "ebitda",
      "label": "Ebitda",
      "type": "text",
      "defaultValue": "1200000",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiCovenantTracking.js"
    },
    {
      "name": "equity",
      "label": "Equity",
      "type": "text",
      "defaultValue": "3000000",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiCovenantTracking.js"
    },
    {
      "name": "interestExpense",
      "label": "Interest Expense",
      "type": "text",
      "defaultValue": "400000",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiCovenantTracking.js"
    },
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiExpenseCategorizer.js"
    },
    {
      "name": "expense_description",
      "label": "Expense Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiExpenseCategorizer.js"
    },
    {
      "name": "receipt_text",
      "label": "Receipt Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiExpenseCategorizer.js"
    },
    {
      "name": "vendor",
      "label": "Vendor",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiExpenseCategorizer.js"
    },
    {
      "name": "forecast_name",
      "label": "Forecast Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiForecastGenerator.js"
    },
    {
      "name": "forecast_type",
      "label": "Forecast Type",
      "type": "text",
      "defaultValue": "revenue",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiForecastGenerator.js"
    },
    {
      "name": "metric_name",
      "label": "Metric Name",
      "type": "text",
      "defaultValue": "Total Revenue",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiForecastGenerator.js"
    },
    {
      "name": "time_horizon",
      "label": "Time Horizon",
      "type": "text",
      "defaultValue": "12 months",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiForecastGenerator.js"
    },
    {
      "name": "confidence_score",
      "label": "Confidence Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiInsights.js"
    },
    {
      "name": "created_at",
      "label": "Generated",
      "type": "datetime",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiInsights.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiInsights.js"
    },
    {
      "name": "impact_level",
      "label": "Impact Level",
      "type": "badge",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiInsights.js"
    },
    {
      "name": "insight_type",
      "label": "Insight Type",
      "type": "select",
      "defaultValue": "cost_optimization",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiInsights.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "badge",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiInsights.js"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiInsights.js"
    },
    {
      "name": "num_slides",
      "label": "Num Slides",
      "type": "text",
      "defaultValue": "8",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiPresentations.js"
    },
    {
      "name": "source_type",
      "label": "Source Type",
      "type": "text",
      "defaultValue": "financial_statement",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiPresentations.js"
    },
    {
      "name": "theme",
      "label": "Theme",
      "type": "text",
      "defaultValue": "professional",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiPresentations.js"
    },
    {
      "name": "actual_amount",
      "label": "Actual Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiVarianceExplainer.js"
    },
    {
      "name": "budgeted_amount",
      "label": "Budgeted Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiVarianceExplainer.js"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiVarianceExplainer.js"
    },
    {
      "name": "department",
      "label": "Department",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiVarianceExplainer.js"
    },
    {
      "name": "anomaly_id",
      "label": "Anomaly Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "audit_log_id",
      "label": "Audit Log Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "audit_type = 'annual'",
      "label": "Audit Type = 'Annual'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "balance_sheet_id",
      "label": "Balance Sheet Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "budget_actual_id",
      "label": "Budget Actual Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "cash_flow_id",
      "label": "Cash Flow Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "comment",
      "label": "Comment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "compliance_report_id",
      "label": "Compliance Report Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "data_points",
      "label": "Data Points",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "data_type",
      "label": "Data Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "decision",
      "label": "Decision",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "elims = []",
      "label": "Elims = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "entities = []",
      "label": "Entities = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "expense_id",
      "label": "Expense Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "financial_data",
      "label": "Financial Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "focus_areas = []",
      "label": "Focus Areas = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "forecast_id",
      "label": "Forecast Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "forecast_period",
      "label": "Forecast Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "historical_data",
      "label": "Historical Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "include_ai",
      "label": "Include AI",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "initiatives = []",
      "label": "Initiatives = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "kpi_id",
      "label": "Kpi Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "parameters",
      "label": "Parameters",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "profit_loss_id",
      "label": "Profit Loss Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "regulation_type",
      "label": "Regulation Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "report_id",
      "label": "Report Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "report_type",
      "label": "Report Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "resource_id",
      "label": "Resource Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "resource_type",
      "label": "Resource Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "segments = []",
      "label": "Segments = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "statement_id",
      "label": "Statement Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "tax_data",
      "label": "Tax Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "tax_report_id",
      "label": "Tax Report Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "trend_analysis_id",
      "label": "Trend Analysis Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "executive_summary",
      "label": "Executive Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiBoardReportWriter.js"
    },
    {
      "name": "presented_date",
      "label": "Presented Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiBoardReportWriter.js"
    },
    {
      "name": "date",
      "label": "Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExpenseCategorizer.js"
    },
    {
      "name": "subcategory",
      "label": "Subcategory",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExpenseCategorizer.js"
    },
    {
      "name": "methodology",
      "label": "Methodology",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiForecastGenerator.js"
    },
    {
      "name": "acknowledged_by",
      "label": "Acknowledged By",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiInsights.js"
    },
    {
      "name": "action_items",
      "label": "Action Items",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiInsights.js"
    },
    {
      "name": "data_sources",
      "label": "Data Sources",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiInsights.js"
    },
    {
      "name": "recommendations",
      "label": "Recommendations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiInsights.js"
    },
    {
      "name": "slides",
      "label": "Slides",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPresentations.js"
    },
    {
      "name": "source_data",
      "label": "Source Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPresentations.js"
    },
    {
      "name": "source_id",
      "label": "Source Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPresentations.js"
    },
    {
      "name": "days = 30",
      "label": "Days = 30",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiResponses.js"
    },
    {
      "name": "feature_type",
      "label": "Feature Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiResponses.js"
    }
  ],
  "ai-financial-report-generator-ai-tools": [
    {
      "name": "analysis_name",
      "label": "Analysis Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiAuditAnalyzer.js"
    },
    {
      "name": "analysis_period",
      "label": "Analysis Period",
      "type": "text",
      "defaultValue": "Q4 2024",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiAuditAnalyzer.js"
    },
    {
      "name": "company_id",
      "label": "Company Id",
      "type": "select",
      "defaultValue": "c.id",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiAuditAnalyzer.js"
    },
    {
      "name": "audit_type",
      "label": "Audit Type",
      "type": "text",
      "defaultValue": "financial",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiAuditReadiness.js"
    },
    {
      "name": "company_name",
      "label": "Company Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiAuditReadiness.js"
    },
    {
      "name": "documents_available",
      "label": "Documents Available",
      "type": "textarea",
      "defaultValue": "Trial balance, GL, AR aging, AP aging",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiAuditReadiness.js"
    },
    {
      "name": "known_issues",
      "label": "Known Issues",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiAuditReadiness.js"
    },
    {
      "name": "last_audit_findings",
      "label": "Last Audit Findings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiAuditReadiness.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "FY 2024",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiAuditReadiness.js"
    },
    {
      "name": "horizon_days",
      "label": "Horizon Days",
      "type": "text",
      "defaultValue": "90",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiBacklogTools.js"
    },
    {
      "name": "monthly_burn",
      "label": "Monthly Burn",
      "type": "text",
      "defaultValue": "80000",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiBacklogTools.js"
    },
    {
      "name": "opening_cash",
      "label": "Opening Cash",
      "type": "text",
      "defaultValue": "250000",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiBacklogTools.js"
    },
    {
      "name": "report_period",
      "label": "Report Period",
      "type": "text",
      "defaultValue": "Q4 2024",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiBoardReports.js"
    },
    {
      "name": "report_title",
      "label": "Report Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiBoardReports.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Chat source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiChat.js"
    },
    {
      "name": "cashFlow",
      "label": "Cash Flow",
      "type": "text",
      "defaultValue": "800000",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiCovenantTracking.js"
    },
    {
      "name": "currentAssets",
      "label": "Current Assets",
      "type": "text",
      "defaultValue": "2000000",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiCovenantTracking.js"
    },
    {
      "name": "currentLiabilities",
      "label": "Current Liabilities",
      "type": "text",
      "defaultValue": "1000000",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiCovenantTracking.js"
    },
    {
      "name": "debt",
      "label": "Debt",
      "type": "text",
      "defaultValue": "5000000",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiCovenantTracking.js"
    },
    {
      "name": "ebitda",
      "label": "Ebitda",
      "type": "text",
      "defaultValue": "1200000",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiCovenantTracking.js"
    },
    {
      "name": "equity",
      "label": "Equity",
      "type": "text",
      "defaultValue": "3000000",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiCovenantTracking.js"
    },
    {
      "name": "interestExpense",
      "label": "Interest Expense",
      "type": "text",
      "defaultValue": "400000",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiCovenantTracking.js"
    },
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiExpenseCategorizer.js"
    },
    {
      "name": "expense_description",
      "label": "Expense Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiExpenseCategorizer.js"
    },
    {
      "name": "receipt_text",
      "label": "Receipt Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiExpenseCategorizer.js"
    },
    {
      "name": "vendor",
      "label": "Vendor",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiExpenseCategorizer.js"
    },
    {
      "name": "forecast_name",
      "label": "Forecast Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiForecastGenerator.js"
    },
    {
      "name": "forecast_type",
      "label": "Forecast Type",
      "type": "text",
      "defaultValue": "revenue",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiForecastGenerator.js"
    },
    {
      "name": "metric_name",
      "label": "Metric Name",
      "type": "text",
      "defaultValue": "Total Revenue",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiForecastGenerator.js"
    },
    {
      "name": "time_horizon",
      "label": "Time Horizon",
      "type": "text",
      "defaultValue": "12 months",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiForecastGenerator.js"
    },
    {
      "name": "confidence_score",
      "label": "Confidence Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiInsights.js"
    },
    {
      "name": "created_at",
      "label": "Generated",
      "type": "datetime",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiInsights.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiInsights.js"
    },
    {
      "name": "impact_level",
      "label": "Impact Level",
      "type": "badge",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiInsights.js"
    },
    {
      "name": "insight_type",
      "label": "Insight Type",
      "type": "select",
      "defaultValue": "cost_optimization",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiInsights.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "badge",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiInsights.js"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiInsights.js"
    },
    {
      "name": "num_slides",
      "label": "Num Slides",
      "type": "text",
      "defaultValue": "8",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiPresentations.js"
    },
    {
      "name": "source_type",
      "label": "Source Type",
      "type": "text",
      "defaultValue": "financial_statement",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiPresentations.js"
    },
    {
      "name": "theme",
      "label": "Theme",
      "type": "text",
      "defaultValue": "professional",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiPresentations.js"
    },
    {
      "name": "actual_amount",
      "label": "Actual Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiVarianceExplainer.js"
    },
    {
      "name": "budgeted_amount",
      "label": "Budgeted Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiVarianceExplainer.js"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiVarianceExplainer.js"
    },
    {
      "name": "department",
      "label": "Department",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AiVarianceExplainer.js"
    },
    {
      "name": "anomaly_id",
      "label": "Anomaly Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "audit_log_id",
      "label": "Audit Log Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "audit_type = 'annual'",
      "label": "Audit Type = 'Annual'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "balance_sheet_id",
      "label": "Balance Sheet Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "budget_actual_id",
      "label": "Budget Actual Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "cash_flow_id",
      "label": "Cash Flow Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "comment",
      "label": "Comment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "compliance_report_id",
      "label": "Compliance Report Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "data_points",
      "label": "Data Points",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "data_type",
      "label": "Data Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "decision",
      "label": "Decision",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "elims = []",
      "label": "Elims = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "entities = []",
      "label": "Entities = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "expense_id",
      "label": "Expense Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "financial_data",
      "label": "Financial Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "focus_areas = []",
      "label": "Focus Areas = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "forecast_id",
      "label": "Forecast Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "forecast_period",
      "label": "Forecast Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "historical_data",
      "label": "Historical Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "include_ai",
      "label": "Include AI",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "initiatives = []",
      "label": "Initiatives = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "kpi_id",
      "label": "Kpi Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "parameters",
      "label": "Parameters",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "profit_loss_id",
      "label": "Profit Loss Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "regulation_type",
      "label": "Regulation Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "report_id",
      "label": "Report Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "report_type",
      "label": "Report Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "resource_id",
      "label": "Resource Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "resource_type",
      "label": "Resource Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "segments = []",
      "label": "Segments = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "statement_id",
      "label": "Statement Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "tax_data",
      "label": "Tax Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "tax_report_id",
      "label": "Tax Report Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "trend_analysis_id",
      "label": "Trend Analysis Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "executive_summary",
      "label": "Executive Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiBoardReportWriter.js"
    },
    {
      "name": "presented_date",
      "label": "Presented Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiBoardReportWriter.js"
    },
    {
      "name": "date",
      "label": "Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExpenseCategorizer.js"
    },
    {
      "name": "subcategory",
      "label": "Subcategory",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExpenseCategorizer.js"
    },
    {
      "name": "methodology",
      "label": "Methodology",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiForecastGenerator.js"
    },
    {
      "name": "acknowledged_by",
      "label": "Acknowledged By",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiInsights.js"
    },
    {
      "name": "action_items",
      "label": "Action Items",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiInsights.js"
    },
    {
      "name": "data_sources",
      "label": "Data Sources",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiInsights.js"
    },
    {
      "name": "recommendations",
      "label": "Recommendations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiInsights.js"
    },
    {
      "name": "slides",
      "label": "Slides",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPresentations.js"
    },
    {
      "name": "source_data",
      "label": "Source Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPresentations.js"
    },
    {
      "name": "source_id",
      "label": "Source Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPresentations.js"
    },
    {
      "name": "days = 30",
      "label": "Days = 30",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiResponses.js"
    },
    {
      "name": "feature_type",
      "label": "Feature Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiResponses.js"
    }
  ],
  "ai-forensic-accounting-investigator-ai-center-vl3836-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Center source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AICenter.js"
    }
  ],
  "ai-forensic-accounting-investigator-data-import-z7z8ws-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Data Import source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/DataImport.js"
    }
  ],
  "ai-forensic-accounting-investigator-agentic-investigator-78mumv-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Investigator source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/agenticInvestigator.js"
    }
  ],
  "ai-forensic-accounting-investigator-ai-1lp99l-exact-ai": [
    {
      "name": "audience = 'executive'",
      "label": "Audience = 'Executive'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "case_id = ''",
      "label": "Case Id = ''",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "case_summary",
      "label": "Case Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "case_title",
      "label": "Case Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "constraints = []",
      "label": "Constraints = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "evidence = []",
      "label": "Evidence = []",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "evidence_summary = ''",
      "label": "Evidence Summary = ''",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "exhibits = []",
      "label": "Exhibits = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "expert_credentials = ''",
      "label": "Expert Credentials = ''",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "findings = []",
      "label": "Findings = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "jurisdiction = ''",
      "label": "Jurisdiction = ''",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "opposing_arguments = []",
      "label": "Opposing Arguments = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "scope = ''",
      "label": "Scope = ''",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "suspect_profiles = []",
      "label": "Suspect Profiles = []",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    }
  ],
  "ai-forensic-accounting-investigator-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Center source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AICenter.js"
    },
    {
      "name": "audience = 'executive'",
      "label": "Audience = 'Executive'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "case_id = ''",
      "label": "Case Id = ''",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "case_summary",
      "label": "Case Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "case_title",
      "label": "Case Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "constraints = []",
      "label": "Constraints = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "evidence = []",
      "label": "Evidence = []",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "evidence_summary = ''",
      "label": "Evidence Summary = ''",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "exhibits = []",
      "label": "Exhibits = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "expert_credentials = ''",
      "label": "Expert Credentials = ''",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "findings = []",
      "label": "Findings = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "jurisdiction = ''",
      "label": "Jurisdiction = ''",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "opposing_arguments = []",
      "label": "Opposing Arguments = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "scope = ''",
      "label": "Scope = ''",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "suspect_profiles = []",
      "label": "Suspect Profiles = []",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    }
  ],
  "ai-forensic-accounting-investigator-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Center source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AICenter.js"
    },
    {
      "name": "audience = 'executive'",
      "label": "Audience = 'Executive'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "case_id = ''",
      "label": "Case Id = ''",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "case_summary",
      "label": "Case Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "case_title",
      "label": "Case Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "constraints = []",
      "label": "Constraints = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "evidence = []",
      "label": "Evidence = []",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "evidence_summary = ''",
      "label": "Evidence Summary = ''",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "exhibits = []",
      "label": "Exhibits = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "expert_credentials = ''",
      "label": "Expert Credentials = ''",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "findings = []",
      "label": "Findings = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "jurisdiction = ''",
      "label": "Jurisdiction = ''",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "opposing_arguments = []",
      "label": "Opposing Arguments = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "scope = ''",
      "label": "Scope = ''",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "suspect_profiles = []",
      "label": "Suspect Profiles = []",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    }
  ],
  "ai-invoice-processing-email-ingest-agent-1mhtsa-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Email Ingest Agent source input context",
      "options": [],
      "required": false,
      "source": "server/routes/email-ingest-agent.js"
    }
  ],
  "ai-invoice-processing-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Email Ingest Agent source input context",
      "options": [],
      "required": false,
      "source": "server/routes/email-ingest-agent.js"
    }
  ],
  "ai-invoice-processing-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Email Ingest Agent source input context",
      "options": [],
      "required": false,
      "source": "server/routes/email-ingest-agent.js"
    }
  ],
  "ai-personal-finance-multi-agent-agents-page-z7c154-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agents Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgentsPage.js"
    }
  ],
  "ai-personal-finance-multi-agent-cf-autonomous-budget-agent-page-l16cpd-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the CF Autonomous Budget Agent Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CFAutonomousBudgetAgentPage.js"
    }
  ],
  "ai-personal-finance-multi-agent-gap-no-bank-credit-card-sync-plaid-mx-page-1sxwax-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Bank Credit Card Sync Plaid Mx Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoBankCreditCardSyncPlaidMxPage.js"
    }
  ],
  "ai-personal-finance-multi-agent-gap-the-agents-js-route-is-unfulfilled-page-1nnp1p-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap The Agents Js Route Is Unfulfilled Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapTheAgentsJsRouteIsUnfulfilledPage.js"
    }
  ],
  "ai-personal-finance-multi-agent-agents-bn6792-exact-ai": [
    {
      "name": "current_savings",
      "label": "Current Savings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "data",
      "label": "Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "goals",
      "label": "Goals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "history",
      "label": "History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "horizon_weeks",
      "label": "Horizon Weeks",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "monthly_expenses",
      "label": "Monthly Expenses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "monthly_income",
      "label": "Monthly Income",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "one_offs",
      "label": "One Offs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "recurring_expenses",
      "label": "Recurring Expenses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "recurring_income",
      "label": "Recurring Income",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "starting_balance",
      "label": "Starting Balance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "transactions",
      "label": "Transactions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    }
  ],
  "ai-personal-finance-multi-agent-custom-feat01-autonomous-budget-agent-1u3kiv-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Custom Feat01 Autonomous Budget Agent source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/customFeat01_AutonomousBudgetAgent.js"
    }
  ],
  "ai-personal-finance-multi-agent-gap-feat-no-bank-credit-card-sync-plaid-mx-1cgvpa-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Feat No Bank Credit Card Sync Plaid Mx source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gapFeat_no_bank_credit_card_sync_plaid_mx.js"
    }
  ],
  "ai-personal-finance-multi-agent-gap-feat-the-agents-js-route-is-unfulfilled-1ybit5-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Feat The Agents Js Route Is Unfulfilled source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gapFeat_the_agents_js_route_is_unfulfilled.js"
    }
  ],
  "ai-personal-finance-multi-agent-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agents Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgentsPage.js"
    },
    {
      "name": "current_savings",
      "label": "Current Savings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "data",
      "label": "Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "goals",
      "label": "Goals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "history",
      "label": "History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "horizon_weeks",
      "label": "Horizon Weeks",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "monthly_expenses",
      "label": "Monthly Expenses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "monthly_income",
      "label": "Monthly Income",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "one_offs",
      "label": "One Offs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "recurring_expenses",
      "label": "Recurring Expenses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "recurring_income",
      "label": "Recurring Income",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "starting_balance",
      "label": "Starting Balance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "transactions",
      "label": "Transactions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    }
  ],
  "ai-personal-finance-multi-agent-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agents Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgentsPage.js"
    },
    {
      "name": "current_savings",
      "label": "Current Savings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "data",
      "label": "Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "goals",
      "label": "Goals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "history",
      "label": "History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "horizon_weeks",
      "label": "Horizon Weeks",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "monthly_expenses",
      "label": "Monthly Expenses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "monthly_income",
      "label": "Monthly Income",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "one_offs",
      "label": "One Offs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "recurring_expenses",
      "label": "Recurring Expenses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "recurring_income",
      "label": "Recurring Income",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "starting_balance",
      "label": "Starting Balance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "transactions",
      "label": "Transactions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    }
  ],
  "ai-telecom-network-capacity-planner-gap-all-major-planning-functions-are-ai-driven-xs5t85-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap All Major Planning Functions Are AI Driven source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapAllMajorPlanningFunctionsAreAiDriven.jsx"
    }
  ],
  "ai-telecom-network-capacity-planner-gap-all-major-planning-functions-are-ai-driven-minimal-gaps-ncqkna-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap All Major Planning Functions Are AI Driven Minimal Gaps source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gapAllMajorPlanningFunctionsAreAiDrivenMinimalGaps.js"
    }
  ],
  "ai-telecom-network-capacity-planner-ai-backlog-tools-1sjuih-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Backlog Tools source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBacklogTools.jsx"
    }
  ],
  "ai-telecom-network-capacity-planner-gap-no-ai-suggested-sla-recovery-playbooks-1agmdw-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Suggested Sla Recovery Playbooks source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoAiSuggestedSlaRecoveryPlaybooks.jsx"
    }
  ],
  "ai-telecom-network-capacity-planner-ai-5cuwes-exact-ai": [
    {
      "name": "budget_usd",
      "label": "Budget Usd",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "growth_percentage",
      "label": "Growth Percentage",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "priority",
      "label": "Priority",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "region",
      "label": "Region",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sla_targets",
      "label": "Sla Targets",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_pue",
      "label": "Target Pue",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_use_cases",
      "label": "Target Use Cases",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-telecom-network-capacity-planner-ai-backlog-1bvczz-exact-ai": [
    {
      "name": "currentCapacity",
      "label": "Current Capacity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "growthRatePctPerMonth",
      "label": "Growth Rate Pct Per Month",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "months",
      "label": "Months",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "regions",
      "label": "Regions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "samples",
      "label": "Samples",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "scenario",
      "label": "Scenario",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "unitCost",
      "label": "Unit Cost",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    }
  ],
  "ai-telecom-network-capacity-planner-gap-no-ai-suggested-sla-recovery-playbooks-x0h0g5-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Suggested Sla Recovery Playbooks source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gapNoAiSuggestedSlaRecoveryPlaybooks.js"
    }
  ],
  "ai-telecom-network-capacity-planner-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap All Major Planning Functions Are AI Driven source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapAllMajorPlanningFunctionsAreAiDriven.jsx"
    },
    {
      "name": "budget_usd",
      "label": "Budget Usd",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "growth_percentage",
      "label": "Growth Percentage",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "priority",
      "label": "Priority",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "region",
      "label": "Region",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sla_targets",
      "label": "Sla Targets",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_pue",
      "label": "Target Pue",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_use_cases",
      "label": "Target Use Cases",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "currentCapacity",
      "label": "Current Capacity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "growthRatePctPerMonth",
      "label": "Growth Rate Pct Per Month",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "months",
      "label": "Months",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "regions",
      "label": "Regions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "samples",
      "label": "Samples",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "scenario",
      "label": "Scenario",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "unitCost",
      "label": "Unit Cost",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    }
  ],
  "ai-telecom-network-capacity-planner-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap All Major Planning Functions Are AI Driven source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapAllMajorPlanningFunctionsAreAiDriven.jsx"
    },
    {
      "name": "budget_usd",
      "label": "Budget Usd",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "growth_percentage",
      "label": "Growth Percentage",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "priority",
      "label": "Priority",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "region",
      "label": "Region",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sla_targets",
      "label": "Sla Targets",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_pue",
      "label": "Target Pue",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_use_cases",
      "label": "Target Use Cases",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "currentCapacity",
      "label": "Current Capacity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "growthRatePctPerMonth",
      "label": "Growth Rate Pct Per Month",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "months",
      "label": "Months",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "regions",
      "label": "Regions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "samples",
      "label": "Samples",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "scenario",
      "label": "Scenario",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "unitCost",
      "label": "Unit Cost",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    }
  ],
  "financial-services-page-1x7ixm-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/verify-email/page.tsx"
    }
  ],
  "financial-services-page-15mefi-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/ai-tools/page.tsx"
    }
  ],
  "financial-services-page-jg3kjs-exact-ai": [
    {
      "name": "clientName",
      "label": "Client Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/ai/page.tsx"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/ai/page.tsx"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/ai/page.tsx"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/ai/page.tsx"
    }
  ],
  "financial-services-route-1130gz-exact-ai": [
    {
      "name": "bankAccountId",
      "label": "Bank Account Id",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/plaid/sync-transactions/route.ts"
    }
  ],
  "financial-services-route-1v254o-exact-ai": [
    {
      "name": "clientId",
      "label": "Client Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/plaid/exchange-token/route.ts"
    },
    {
      "name": "publicToken",
      "label": "Public Token",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/plaid/exchange-token/route.ts"
    }
  ],
  "financial-services-route-eouoe-exact-ai": [
    {
      "name": "clientId",
      "label": "Client Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/plaid/create-link-token/route.ts"
    }
  ],
  "financial-services-route-heookx-exact-ai": [
    {
      "name": "data",
      "label": "Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/email/send/route.ts"
    }
  ],
  "financial-services-route-cjotr3-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/auth/verify-email/route.ts"
    }
  ],
  "financial-services-route-hl73mp-exact-ai": [
    {
      "name": "bankAccountId",
      "label": "Bank Account Id",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/reconciliation-copilot/route.ts"
    },
    {
      "name": "limit",
      "label": "Limit",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/reconciliation-copilot/route.ts"
    },
    {
      "name": "unreconciledTransactionIds",
      "label": "Unreconciled Transaction Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/reconciliation-copilot/route.ts"
    }
  ],
  "financial-services-route-1cy686-exact-ai": [
    {
      "name": "contractorId",
      "label": "Contractor Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/contractor-1099/route.ts"
    },
    {
      "name": "taxYear",
      "label": "Tax Year",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/contractor-1099/route.ts"
    }
  ],
  "financial-services-route-1j33sc-exact-ai": [
    {
      "name": "clientId",
      "label": "Client Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/cash-flow-forecast/route.ts"
    },
    {
      "name": "weeks",
      "label": "Weeks",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/cash-flow-forecast/route.ts"
    }
  ],
  "financial-services-route-dhivpp-exact-ai": [
    {
      "name": "data",
      "label": "Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/analyze/route.ts"
    }
  ],
  "financial-services-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/verify-email/page.tsx"
    },
    {
      "name": "clientName",
      "label": "Client Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/ai/page.tsx"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/ai/page.tsx"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/ai/page.tsx"
    },
    {
      "name": "bankAccountId",
      "label": "Bank Account Id",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/plaid/sync-transactions/route.ts"
    },
    {
      "name": "clientId",
      "label": "Client Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/plaid/exchange-token/route.ts"
    },
    {
      "name": "publicToken",
      "label": "Public Token",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/plaid/exchange-token/route.ts"
    },
    {
      "name": "data",
      "label": "Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/email/send/route.ts"
    },
    {
      "name": "limit",
      "label": "Limit",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/reconciliation-copilot/route.ts"
    },
    {
      "name": "unreconciledTransactionIds",
      "label": "Unreconciled Transaction Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/reconciliation-copilot/route.ts"
    },
    {
      "name": "contractorId",
      "label": "Contractor Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/contractor-1099/route.ts"
    },
    {
      "name": "taxYear",
      "label": "Tax Year",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/contractor-1099/route.ts"
    },
    {
      "name": "weeks",
      "label": "Weeks",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/cash-flow-forecast/route.ts"
    }
  ],
  "financial-services-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/verify-email/page.tsx"
    },
    {
      "name": "clientName",
      "label": "Client Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/ai/page.tsx"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/ai/page.tsx"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/ai/page.tsx"
    },
    {
      "name": "bankAccountId",
      "label": "Bank Account Id",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/plaid/sync-transactions/route.ts"
    },
    {
      "name": "clientId",
      "label": "Client Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/plaid/exchange-token/route.ts"
    },
    {
      "name": "publicToken",
      "label": "Public Token",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/plaid/exchange-token/route.ts"
    },
    {
      "name": "data",
      "label": "Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/email/send/route.ts"
    },
    {
      "name": "limit",
      "label": "Limit",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/reconciliation-copilot/route.ts"
    },
    {
      "name": "unreconciledTransactionIds",
      "label": "Unreconciled Transaction Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/reconciliation-copilot/route.ts"
    },
    {
      "name": "contractorId",
      "label": "Contractor Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/contractor-1099/route.ts"
    },
    {
      "name": "taxYear",
      "label": "Tax Year",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/contractor-1099/route.ts"
    },
    {
      "name": "weeks",
      "label": "Weeks",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/cash-flow-forecast/route.ts"
    }
  ],
  "financial-services-salesforce-ai-1pn9k7-exact-ai": [
    {
      "name": "account_type",
      "label": "Account Type",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "age",
      "label": "Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "annual_contribution",
      "label": "Annual Contribution",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "asset_titling",
      "label": "Asset Titling",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "beneficiary_designations",
      "label": "Beneficiary Designations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "channel",
      "label": "Channel",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "client_age",
      "label": "Client Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "client_name",
      "label": "Client Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "communication_text",
      "label": "Communication Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "current_age",
      "label": "Current Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "current_savings",
      "label": "Current Savings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "debts",
      "label": "Debts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "dependents",
      "label": "Dependents",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "documents_on_file",
      "label": "Documents On File",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "education_goals",
      "label": "Education Goals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "existing_coverage",
      "label": "Existing Coverage",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "holdings",
      "label": "Holdings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "household",
      "label": "Household",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "income",
      "label": "Income",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "investment_horizon",
      "label": "Investment Horizon",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "last_meeting_notes",
      "label": "Last Meeting Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "lead",
      "label": "Lead",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "life_events",
      "label": "Life Events",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "market_conditions",
      "label": "Market Conditions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "net_worth",
      "label": "Net Worth",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "questionnaire",
      "label": "Questionnaire",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "recent_activity",
      "label": "Recent Activity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "retirement_age",
      "label": "Retirement Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "risk_tolerance",
      "label": "Risk Tolerance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "state",
      "label": "State",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "target_income",
      "label": "Target Income",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "themes",
      "label": "Themes",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "time_horizon",
      "label": "Time Horizon",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "year_to_date_gains",
      "label": "Year To Date Gains",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    }
  ],
  "financial-services-salesforce-source-workflow": [
    {
      "name": "account_type",
      "label": "Account Type",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "age",
      "label": "Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "annual_contribution",
      "label": "Annual Contribution",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "asset_titling",
      "label": "Asset Titling",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "beneficiary_designations",
      "label": "Beneficiary Designations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "channel",
      "label": "Channel",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "client_age",
      "label": "Client Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "client_name",
      "label": "Client Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "communication_text",
      "label": "Communication Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "current_age",
      "label": "Current Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "current_savings",
      "label": "Current Savings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "debts",
      "label": "Debts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "dependents",
      "label": "Dependents",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "documents_on_file",
      "label": "Documents On File",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "education_goals",
      "label": "Education Goals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "existing_coverage",
      "label": "Existing Coverage",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "holdings",
      "label": "Holdings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "household",
      "label": "Household",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "income",
      "label": "Income",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "investment_horizon",
      "label": "Investment Horizon",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "last_meeting_notes",
      "label": "Last Meeting Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "lead",
      "label": "Lead",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "life_events",
      "label": "Life Events",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "market_conditions",
      "label": "Market Conditions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "net_worth",
      "label": "Net Worth",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "questionnaire",
      "label": "Questionnaire",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "recent_activity",
      "label": "Recent Activity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "retirement_age",
      "label": "Retirement Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "risk_tolerance",
      "label": "Risk Tolerance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "state",
      "label": "State",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "target_income",
      "label": "Target Income",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "themes",
      "label": "Themes",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "time_horizon",
      "label": "Time Horizon",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "year_to_date_gains",
      "label": "Year To Date Gains",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    }
  ],
  "financial-services-salesforce-ai-tools": [
    {
      "name": "account_type",
      "label": "Account Type",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "age",
      "label": "Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "annual_contribution",
      "label": "Annual Contribution",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "asset_titling",
      "label": "Asset Titling",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "beneficiary_designations",
      "label": "Beneficiary Designations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "channel",
      "label": "Channel",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "client_age",
      "label": "Client Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "client_name",
      "label": "Client Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "communication_text",
      "label": "Communication Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "current_age",
      "label": "Current Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "current_savings",
      "label": "Current Savings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "debts",
      "label": "Debts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "dependents",
      "label": "Dependents",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "documents_on_file",
      "label": "Documents On File",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "education_goals",
      "label": "Education Goals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "existing_coverage",
      "label": "Existing Coverage",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "holdings",
      "label": "Holdings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "household",
      "label": "Household",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "income",
      "label": "Income",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "investment_horizon",
      "label": "Investment Horizon",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "last_meeting_notes",
      "label": "Last Meeting Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "lead",
      "label": "Lead",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "life_events",
      "label": "Life Events",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "market_conditions",
      "label": "Market Conditions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "net_worth",
      "label": "Net Worth",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "questionnaire",
      "label": "Questionnaire",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "recent_activity",
      "label": "Recent Activity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "retirement_age",
      "label": "Retirement Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "risk_tolerance",
      "label": "Risk Tolerance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "state",
      "label": "State",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "target_income",
      "label": "Target Income",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "themes",
      "label": "Themes",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "time_horizon",
      "label": "Time Horizon",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    },
    {
      "name": "year_to_date_gains",
      "label": "Year To Date Gains",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai.js"
    }
  ],
  "pos-copilot-1dd067-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai/copilot.ts"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai/copilot.ts"
    }
  ],
  "pos-customers-i6hgz8-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Customers source input context",
      "options": [],
      "required": false,
      "source": "src/routes/ai/customers.ts"
    }
  ],
  "pos-dynamic-pricing-z1wsm6-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Dynamic Pricing source input context",
      "options": [],
      "required": false,
      "source": "src/routes/ai/dynamicPricing.ts"
    }
  ],
  "pos-elasticity-dubtlu-exact-ai": [
    {
      "name": "productId",
      "label": "Product Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai/elasticity.ts"
    }
  ],
  "pos-fraud-16loxg-exact-ai": [
    {
      "name": "saleId",
      "label": "Sale Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai/fraud.ts"
    }
  ],
  "pos-insights-skyhbq-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Insights source input context",
      "options": [],
      "required": false,
      "source": "src/routes/ai/insights.ts"
    }
  ],
  "pos-inventory-11xnyi-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Inventory source input context",
      "options": [],
      "required": false,
      "source": "src/routes/ai/inventory.ts"
    }
  ],
  "pos-loyalty-1eyaot-exact-ai": [
    {
      "name": "cartTotal",
      "label": "Cart Total",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai/loyalty.ts"
    },
    {
      "name": "customerId",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai/loyalty.ts"
    },
    {
      "name": "items = []",
      "label": "Items = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai/loyalty.ts"
    }
  ],
  "pos-reorder-fcidoa-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Reorder source input context",
      "options": [],
      "required": false,
      "source": "src/routes/ai/reorder.ts"
    }
  ],
  "pos-results-p1pumx-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Results source input context",
      "options": [],
      "required": false,
      "source": "src/routes/ai/results.ts"
    }
  ],
  "pos-upsell-1y9aix-exact-ai": [
    {
      "name": "items",
      "label": "Items",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai/upsell.ts"
    }
  ],
  "pos-ai-studio-1awxhn-exact-ai": [
    {
      "name": "totalPages",
      "label": "Total Pages",
      "type": "text",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIStudio.tsx"
    }
  ],
  "pos-verify-email-1s7w18-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Verify Email source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/VerifyEmail.tsx"
    }
  ],
  "pos-retail-13853h-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Retail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/solutions/Retail.tsx"
    }
  ],
  "pos-integration-detail-1o7xa3-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Integration Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/integrations/IntegrationDetail.tsx"
    }
  ],
  "pos-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Customers source input context",
      "options": [],
      "required": false,
      "source": "src/routes/ai/copilot.ts"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai/copilot.ts"
    },
    {
      "name": "productId",
      "label": "Product Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai/elasticity.ts"
    },
    {
      "name": "saleId",
      "label": "Sale Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai/fraud.ts"
    },
    {
      "name": "cartTotal",
      "label": "Cart Total",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai/loyalty.ts"
    },
    {
      "name": "customerId",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai/loyalty.ts"
    },
    {
      "name": "items = []",
      "label": "Items = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai/loyalty.ts"
    },
    {
      "name": "items",
      "label": "Items",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai/upsell.ts"
    },
    {
      "name": "totalPages",
      "label": "Total Pages",
      "type": "text",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIStudio.tsx"
    }
  ],
  "pos-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Customers source input context",
      "options": [],
      "required": false,
      "source": "src/routes/ai/copilot.ts"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai/copilot.ts"
    },
    {
      "name": "productId",
      "label": "Product Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai/elasticity.ts"
    },
    {
      "name": "saleId",
      "label": "Sale Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai/fraud.ts"
    },
    {
      "name": "cartTotal",
      "label": "Cart Total",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai/loyalty.ts"
    },
    {
      "name": "customerId",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai/loyalty.ts"
    },
    {
      "name": "items = []",
      "label": "Items = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai/loyalty.ts"
    },
    {
      "name": "items",
      "label": "Items",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai/upsell.ts"
    },
    {
      "name": "totalPages",
      "label": "Total Pages",
      "type": "text",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIStudio.tsx"
    }
  ],
  "scale-page-1je2by-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/gap/prompt-optimization/page.tsx"
    }
  ],
  "scale-route-2fvhi6-exact-ai": [
    {
      "name": "evalInputs",
      "label": "Eval Inputs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/prompt-optimize/route.ts"
    },
    {
      "name": "modelId",
      "label": "Model Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/prompt-optimize/route.ts"
    },
    {
      "name": "promptVariations",
      "label": "Prompt Variations",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/prompt-optimize/route.ts"
    }
  ],
  "scale-route-1pv6zm-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/gap-prompt-optimization/route.ts"
    }
  ],
  "scale-page-m579c5-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/gap/drift-retrain/page.tsx"
    }
  ],
  "scale-route-1xg40g-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/gap-drift-retrain/route.ts"
    }
  ],
  "scale-route-8uskbo-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/agents/route.ts"
    }
  ],
  "scale-page-1xlef5-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/agents/page.tsx"
    }
  ],
  "scale-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/gap/prompt-optimization/page.tsx"
    },
    {
      "name": "evalInputs",
      "label": "Eval Inputs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/prompt-optimize/route.ts"
    },
    {
      "name": "modelId",
      "label": "Model Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/prompt-optimize/route.ts"
    },
    {
      "name": "promptVariations",
      "label": "Prompt Variations",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/prompt-optimize/route.ts"
    }
  ],
  "scale-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/gap/prompt-optimization/page.tsx"
    },
    {
      "name": "evalInputs",
      "label": "Eval Inputs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/prompt-optimize/route.ts"
    },
    {
      "name": "modelId",
      "label": "Model Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/prompt-optimize/route.ts"
    },
    {
      "name": "promptVariations",
      "label": "Prompt Variations",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/prompt-optimize/route.ts"
    }
  ]
};
