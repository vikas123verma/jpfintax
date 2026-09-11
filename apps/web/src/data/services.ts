import { ServiceItem } from '@jpfintax/types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'itr',
    slug: 'income-tax-return',
    title: 'Income Tax Return (ITR)',
    shortTitle: 'ITR Filing',
    category: 'tax',
    categoryLabel: 'Taxation Services',
    iconName: 'FileText',
    shortDescription: 'Accurate and timely filing of Income Tax Returns for salaried individuals, professionals, HUFs, and businesses.',
    fullOverview: 'Navigating Indian income tax provisions requires precision to ensure maximum deductions and full compliance with the latest Finance Act directives. We deliver comprehensive ITR preparation, verification, and filing services tailored for salaried individuals, self-employed professionals, sole proprietors, firms, and companies.',
    keyHighlights: [
      'Old vs. New Tax Regime comparative analysis',
      'Capital gains computations from stocks, mutual funds & property',
      'Foreign income & asset disclosures (Schedule FA)',
      'Rectification and response to Income Tax notices under Sec 139(9), 143(1)'
    ],
    whatWeHelpWith: [
      'ITR-1 (Sahaj) for salaried individuals with one house property',
      'ITR-2 for individuals with capital gains, foreign assets, or multiple properties',
      'ITR-3 & ITR-4 (Sugam) for business, freelance, and professional income',
      'ITR-5 & ITR-6 for Partnership firms, LLPs, and Private Limited companies',
      'Advance Tax computation and scheduled installment planning',
      'Tax refund tracking and grievance redressal'
    ],
    keyBenefits: [
      'Zero penalty risk through strict deadline adherence',
      'Optimized tax liabilities through lawful deductions (80C, 80D, 80G, etc.)',
      'Accurate reconciliation with AIS, TIS, and Form 26AS',
      'Peace of mind with qualified tax advisor oversight'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Document Collation',
        description: 'Collect Form 16, bank statements, capital gain statements, and AIS/TIS data.'
      },
      {
        step: '02',
        title: 'Regime & Deduction Analysis',
        description: 'Run comparative tax calculations between old and new regimes to maximize net savings.'
      },
      {
        step: '03',
        title: 'Drafting & Review',
        description: 'Prepare the draft tax return with detailed reconciliations for client confirmation.'
      },
      {
        step: '04',
        title: 'Filing & E-Verification',
        description: 'E-file on the Income Tax portal, generate the ITR-V acknowledgement, and assist with e-verification.'
      }
    ],
    requiredDocuments: [
      'PAN and Aadhaar Card',
      'Form 16 / 16A from employers and deductors',
      'Annual Information Statement (AIS) & Tax Information Summary (TIS)',
      'Bank statements for all active accounts for the financial year',
      'Capital gains reports from broker or depository'
    ],
    faqs: [
      {
        question: 'Which tax regime should I opt for this financial year?',
        answer: 'We evaluate your specific investments, insurance premiums, HRA, home loan interest, and deductions to determine whether the default new regime or the old regime minimizes your tax liability.'
      },
      {
        question: 'What happens if my Form 26AS does not match my bank receipts?',
        answer: 'We reconcile Form 26AS, AIS, and TIS with your financial accounts to identify discrepancies before filing, ensuring you receive rightful TDS credit without tax notices.'
      }
    ]
  },
  {
    id: 'gst',
    slug: 'gst-registration-returns',
    title: 'GST Registration & Returns',
    shortTitle: 'GST Solutions',
    category: 'compliance',
    categoryLabel: 'Indirect Tax',
    iconName: 'Receipt',
    shortDescription: 'Seamless Goods & Services Tax registration, regular GSTR-1, GSTR-3B filings, and reconciliation support.',
    fullOverview: 'The Goods and Services Tax (GST) landscape demands continuous vigilance, month-on-month Input Tax Credit (ITC) reconciliation, and error-free reporting. We provide end-to-end GST solutions for new entrepreneurs, established retailers, service providers, and manufacturing businesses.',
    keyHighlights: [
      'Timely GSTR-1 (sales) and GSTR-3B (tax payment) filing',
      'Rigorous GSTR-2B vs. Books ITC reconciliation',
      'GST Annual Return (GSTR-9) and Reconciliation (GSTR-9C)',
      'LUT filing for exporters of goods and services'
    ],
    whatWeHelpWith: [
      'New GST registration for Proprietorships, Partnerships, LLPs & Companies',
      'Monthly/Quarterly return filing under QRMP or regular scheme',
      'E-invoicing and E-way bill generation workflow setup',
      'Handling mismatch notices under DRC-01 and ASMT-10',
      'GST cancellation, revocation, and amendment filings',
      'Composition scheme advisory and compliance'
    ],
    keyBenefits: [
      'Avoid high interest and late fee penalties with proactive filing cycles',
      'Prevent ITC loss through deep vendor invoice tracking against GSTR-2B',
      'Smooth interstate and export trade without border bottlenecks',
      'Transparent compliance posture for bank financing and vendor tenders'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Sales & Purchase Ingestion',
        description: 'Monthly aggregation of outward invoices, credit notes, and purchase ledgers.'
      },
      {
        step: '02',
        title: 'ITC Reconciliation',
        description: 'Matching supplier uploaded invoices against purchase registers via GSTR-2B.'
      },
      {
        step: '03',
        title: 'Challan Creation & Filing',
        description: 'Computing net GST liability, generating tax challans, and filing GSTR-3B and GSTR-1.'
      },
      {
        step: '04',
        title: 'Compliance Archiving',
        description: 'Sharing acknowledged copies and maintaining audit trails for year-end review.'
      }
    ],
    requiredDocuments: [
      'PAN and Aadhaar of authorized signatory / partners / directors',
      'Business address proof (Electricity bill, NOC, Rent agreement)',
      'Bank account proof (Cancelled cheque / Bank statement)',
      'Sales register and purchase register for the filing period'
    ],
    faqs: [
      {
        question: 'When is GST registration mandatory for a business?',
        answer: 'GST registration is mandatory if your aggregate turnover exceeds ₹40 lakhs for goods (₹20 lakhs for special category states) or ₹20 lakhs for services (₹10 lakhs for special states), or if you engage in inter-state supply or e-commerce.'
      },
      {
        question: 'What happens if our vendor has not uploaded their tax invoice?',
        answer: 'Under rule 36(4), ITC can only be availed on invoices visible in GSTR-2B. We help you identify defaulting vendors early so you can follow up before filing your return.'
      }
    ]
  },
  {
    id: 'tds',
    slug: 'tds-tcs-compliance',
    title: 'TDS & TCS Compliance',
    shortTitle: 'TDS & TCS Filing',
    category: 'tax',
    categoryLabel: 'Taxation Services',
    iconName: 'Percent',
    shortDescription: 'Comprehensive Tax Deducted at Source (TDS) and TCS computations, challan deposits, and quarterly returns.',
    fullOverview: 'Tax Deducted at Source (TDS) and Tax Collected at Source (TCS) mandate strict withholding thresholds and strict monthly deposit timelines. Defaulting triggers punitive interest under Section 201(1A) and fees under Section 234E. We manage the full cycle of quarterly TDS filings and certificate generation.',
    keyHighlights: [
      'Quarterly Form 24Q (salaries) and Form 26Q (non-salary payments)',
      'Form 27Q (payments to non-residents) and Form 27EQ (TCS returns)',
      'Automated Form 16 & Form 16A generation from TRACES portal',
      'Resolution of TRACES defaults, short deductions & late filing fees'
    ],
    whatWeHelpWith: [
      'Section-wise TDS rate determination (194C, 194J, 194I, 194H, 194Q, 206C)',
      'Verification of valid PAN status and higher deduction under Sec 206AB',
      'Monthly challan payment processing via e-tax payment portal',
      'Quarterly return drafting, validation via FVU utility, and upload',
      'Correction statements (C1, C2, C3, C5, C9) for PAN or challan errors',
      'Lower/Nil deduction certificate applications under Section 197'
    ],
    keyBenefits: [
      'Elimination of Section 234E daily late filing penalties (₹200/day)',
      'Seamless issuance of Form 16/16A to employees and vendors',
      'Accurate tax deduction preserving corporate expense deductibility',
      'Zero friction during statutory and tax audit inspections'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Deduction Verification',
        description: 'Scrutinizing monthly books for TDS applicability and applicable threshold limits.'
      },
      {
        step: '02',
        title: 'Challan Deposit Support',
        description: 'Ensuring tax is deposited before the 7th of the subsequent month.'
      },
      {
        step: '03',
        title: 'Return Preparation & FVU',
        description: 'Validating data through NSDL FVU file validation utility without schema errors.'
      },
      {
        step: '04',
        title: 'TRACES Download',
        description: 'Downloading digitally signed Form 16 and 16A certificates directly for delivery.'
      }
    ],
    requiredDocuments: [
      'TAN (Tax Deduction and Collection Account Number)',
      'Monthly vendor ledger with PAN details and invoices',
      'Salary sheets with TDS computations',
      'Paid challan receipts (BSR code, date, and challan number)'
    ],
    faqs: [
      {
        question: 'What is the due date for filing quarterly TDS returns?',
        answer: 'The quarterly due dates are July 31st (Q1), October 31st (Q2), January 31st (Q3), and May 31st (Q4 for salary and non-salary).'
      }
    ]
  },
  {
    id: 'accounting',
    slug: 'accounting-bookkeeping',
    title: 'Accounting & Bookkeeping',
    shortTitle: 'Bookkeeping',
    category: 'accounting',
    categoryLabel: 'Financial Accounting',
    iconName: 'Calculator',
    shortDescription: 'Systematic financial record-keeping, ledger maintenance, bank reconciliations, and financial statement preparation.',
    fullOverview: 'Accurate and timely accounting is the backbone of strategic decision-making and statutory audit readiness. We provide structured bookkeeping solutions adhering to Indian Accounting Standards, ensuring your vouchers, ledgers, and financial reports reflect true operational reality.',
    keyHighlights: [
      'Day-to-day transaction recording (sales, purchases, receipts, payments)',
      'Monthly bank, credit card, and payment gateway reconciliations',
      'Depreciation calculations and Fixed Asset Register maintenance',
      'Periodic Profit & Loss statements and Balance Sheet compilation'
    ],
    whatWeHelpWith: [
      'Complete cloud/offline bookkeeping in Tally Prime, Zoho Books, or QuickBooks',
      'Accounts Payable (AP) and Accounts Receivable (AR) management',
      'Preparation of trial balance and year-end closing entries',
      'Inventory accounting and Cost of Goods Sold (COGS) tracking',
      'Management Information System (MIS) reports for directors & proprietors',
      'Support during statutory audit and tax audit documentation'
    ],
    keyBenefits: [
      'Always up-to-date books for immediate loan or credit sanction requirements',
      'Full visibility into monthly cash flows and operating margins',
      'Substantial reduction in year-end audit adjustments and queries',
      'Freedom to focus on core business operations while experts handle records'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Source Document Collection',
        description: 'Systematic ingest of invoices, bills, petty cash vouchers, and bank statements.'
      },
      {
        step: '02',
        title: 'Ledger Categorization',
        description: 'Correct chart-of-accounts mapping compliant with accounting principles.'
      },
      {
        step: '03',
        title: 'Bank Reconciliation',
        description: 'Closing balances reconciled against bank statements to prevent unaccounted entries.'
      },
      {
        step: '04',
        title: 'Financial Reporting',
        description: 'Monthly or quarterly delivery of balance sheets, P&L, and cash flow summaries.'
      }
    ],
    requiredDocuments: [
      'Bank statements in Excel/PDF for all business accounts',
      'Sales and purchase invoices with tax breakdowns',
      'Expense vouchers, utility receipts, and rent agreements',
      'Opening trial balance / previous year financial statements'
    ],
    faqs: [
      {
        question: 'Can we transition our existing manual books to digital accounting software?',
        answer: 'Yes. We migrate previous records, configure your chart of accounts in Tally or cloud accounting platforms, and train your staff on voucher entry.'
      }
    ]
  },
  {
    id: 'company-compliance',
    slug: 'company-llp-compliance',
    title: 'Company / LLP Compliance',
    shortTitle: 'Corporate Compliance',
    category: 'compliance',
    categoryLabel: 'Corporate Law',
    iconName: 'Building2',
    shortDescription: 'Annual legal maintenance, statutory register upkeep, and governance compliance for LLPs and Private Limited firms.',
    fullOverview: 'Incorporating a Private Limited company or Limited Liability Partnership (LLP) entails strict post-incorporation mandates under the Companies Act, 2013 and LLP Act, 2008. We handle statutory registers, AGM documentation, board meeting minutes, and mandatory legal declarations.',
    keyHighlights: [
      'Commencement of Business (Form INC-20A) compliance',
      'DIR-3 KYC and DIR-3 KYC Web filings for all directors/designated partners',
      'Statutory register maintenance under Companies Act provisions',
      'Preparation of Board resolutions, notices, and AGM minutes'
    ],
    whatWeHelpWith: [
      'Annual secretarial compliance calendar management',
      'Appointment, resignation, and remuneration changes of directors/partners',
      'Registered office address shifts within or outside local limits',
      'Capital increase, share transfer, and allotment filings (Form PAS-3)',
      'Statutory auditor appointment (Form ADT-1)',
      'MSME-1 and DPT-3 filings for vendor payments and deposits'
    ],
    keyBenefits: [
      'Avoid heavy director disqualification and heavy MCA penal fees',
      'Maintain pristine corporate governance records required by institutional investors',
      'Proactive alerts for statutory board meetings and shareholder approvals',
      'Seamless change management for internal firm restructuring'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Compliance Audit',
        description: 'Reviewing master data on MCA portal to identify pending compliances.'
      },
      {
        step: '02',
        title: 'Secretarial Documentation',
        description: 'Drafting resolutions, agendas, notices, and registers in compliance with law.'
      },
      {
        step: '03',
        title: 'DSC & Form Verification',
        description: 'Verifying valid Digital Signature Certificates (DSC) of directors and partners.'
      },
      {
        step: '04',
        title: 'Execution & Archival',
        description: 'Ensuring signed documentation is securely archived in company records.'
      }
    ],
    requiredDocuments: [
      'Certificate of Incorporation (COI) & MoA/AoA or LLP Agreement',
      'PAN, Aadhaar, and DIN of Directors / Designated Partners',
      'Audited financial statements and statutory auditor report',
      'Valid Class-3 Digital Signature Certificates (DSC)'
    ],
    faqs: [
      {
        question: 'What is DIR-3 KYC and who must file it?',
        answer: 'Every individual who holds a Director Identification Number (DIN) as on 31st March must complete DIR-3 KYC annually before 30th September to keep their DIN active.'
      }
    ]
  },
  {
    id: 'roc',
    slug: 'roc-mca-filing',
    title: 'ROC & MCA Filing',
    shortTitle: 'ROC & MCA',
    category: 'compliance',
    categoryLabel: 'Regulatory Filings',
    iconName: 'ClipboardCheck',
    shortDescription: 'Mandatory annual returns (AOC-4, MGT-7/7A, Form 11, Form 8) and event-based e-filing with the Registrar of Companies.',
    fullOverview: 'The Ministry of Corporate Affairs (MCA) V3 portal enforces stringent filing deadlines. Failure to file annual returns can trigger ₹100 per day per form penalty with no upper ceiling. We deliver flawless preparation, XBRL conversion where required, and timely submission of all ROC e-forms.',
    keyHighlights: [
      'MCA Form AOC-4 (Financial Statements) and MGT-7/7A (Annual Return)',
      'LLP Form 11 (Annual Return) & LLP Form 8 (Statement of Account & Solvency)',
      'Active Company Tagging (INC-22A ACTIVE) compliance',
      'Creation, modification, and satisfaction of charges (CHG-1 & CHG-4)'
    ],
    whatWeHelpWith: [
      'Preparation of directors report and annexures in accordance with Sec 134',
      'Filing of annual returns for small companies and OPCs with simplified disclosures',
      'LLP annual returns filed within 60 days (Form 11) and 30 days (Form 8) of closure',
      'XBRL taxonomy mapping and validation for qualifying entities',
      'Striking off defunct companies or LLPs (Form STK-2 / Form 24)',
      'Condonation of delay and compounding petition assistance'
    ],
    keyBenefits: [
      'Safeguard against severe ₹100/day per form escalating late penalties',
      'Prevent corporate strike-off notices under Section 248',
      'Preserve director eligibility and clean public MCA Master Data',
      'Immediate delivery of MCA SRN challans and approval orders'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Audited Financial Ingest',
        description: 'Receive audited Balance Sheet, P&L, and Notes from statutory auditor.'
      },
      {
        step: '02',
        title: 'E-Form Preparation',
        description: 'Populate MCA e-forms with statutory numbers and mandatory attachments.'
      },
      {
        step: '03',
        title: 'DSC Affixing & Pre-scrutiny',
        description: 'Affixing director and practicing professional DSC and running pre-scrutiny.'
      },
      {
        step: '04',
        title: 'Upload & Challan Receipt',
        description: 'Uploading on MCA portal, fee payment, and downloading acknowledged SRN.'
      }
    ],
    requiredDocuments: [
      'Audited financial statements with Balance Sheet, P&L, Cash Flow',
      'Statutory Auditor Report and Directors Report',
      'List of shareholders and debenture holders with transfer records',
      'Board resolutions approving financial statements and annual return'
    ],
    faqs: [
      {
        question: 'What are the deadlines for LLP Form 11 and Form 8?',
        answer: 'LLP Form 11 is due on 30th May every year (within 60 days of financial year end), and LLP Form 8 is due on 30th October every year.'
      }
    ]
  },
  {
    id: 'payroll',
    slug: 'payroll-services',
    title: 'Payroll Services',
    shortTitle: 'Payroll Solutions',
    category: 'accounting',
    categoryLabel: 'Human Resources & Wages',
    iconName: 'Users',
    shortDescription: 'Complete payroll processing, salary structure design, payslip issuance, and EPF/ESIC statutory compliance.',
    fullOverview: 'Managing workforce compensation requires balancing employee expectations with statutory labor compliances such as Provident Fund (EPF), Employee State Insurance (ESIC), and Professional Tax (PT). We streamline your monthly payroll run from attendance reconciliation to final disbursal schedules.',
    keyHighlights: [
      'Custom CTC structure design optimized for tax efficiency',
      'Monthly payroll computations with leaves, deductions, and incentives',
      'EPF and ESIC electronic challan cum return (ECR) generation and upload',
      'Professional Tax (PT) calculations and state-specific returns'
    ],
    whatWeHelpWith: [
      'Employee master onboarding and UAN / IP number generation',
      'Automated password-protected monthly payslip generation',
      'TDS on Salary (Section 192) computation and investment proof verification',
      'Bonus, gratuity calculation, and full & final (F&F) settlement processing',
      'Maintenance of statutory labor registers under state regulations',
      'Year-end Form 16 Part A and Part B generation for all staff'
    ],
    keyBenefits: [
      'On-time salary disbursements with transparent payslips boosting morale',
      'Zero non-compliance under EPF and ESIC avoiding legal inspections and damages',
      'Optimized salary components allowing employees to reduce their tax incidence',
      'Confidential salary administration keeping compensation private'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Monthly Attendance Collation',
        description: 'Reconciling work days, leaves, overtime, and adjustments for the payroll cycle.'
      },
      {
        step: '02',
        title: 'Payroll Calculation',
        description: 'Computing gross pay, EPF, ESIC, PT, TDS, and net payable amounts.'
      },
      {
        step: '03',
        title: 'Bank Disbursal Sheet',
        description: 'Generating batch payment upload files for your corporate bank portal.'
      },
      {
        step: '04',
        title: 'Statutory Returns & Payslips',
        description: 'Filing ECRs on EPFO/ESIC portals and distributing payslips to staff.'
      }
    ],
    requiredDocuments: [
      'Employee master data (Name, PAN, Aadhaar, Bank Details, UAN)',
      'Monthly attendance / leave log',
      'Investment declaration and supporting proofs submitted by employees',
      'Company EPF / ESIC establishment code registrations'
    ],
    faqs: [
      {
        question: 'When is EPF registration mandatory for a company in India?',
        answer: 'EPF registration is mandatory for any commercial establishment employing 20 or more persons. Voluntary registration is also permitted for entities with fewer employees.'
      }
    ]
  },
  {
    id: 'tax-planning',
    slug: 'tax-planning-consultancy',
    title: 'Tax Planning & Consultancy',
    shortTitle: 'Tax Consultancy',
    category: 'tax',
    categoryLabel: 'Strategic Advisory',
    iconName: 'TrendingUp',
    shortDescription: 'Strategic year-round tax advisory, structuring transactions, wealth preservation, and resolving complex tax queries.',
    fullOverview: 'Proactive tax planning prevents last-minute financial surprises and ensures your capital works effectively for your long-term goals. We provide customized tax consulting for high-net-worth individuals, business promoters, and corporate enterprises seeking lawful tax optimization.',
    keyHighlights: [
      'Advance tax estimation and quarterly liability planning',
      'Capital gains exemption planning under Section 54, 54EC, and 54F',
      'Business structuring (Proprietorship vs. LLP vs. Private Limited)',
      'Tax-efficient profit distribution and dividend planning'
    ],
    whatWeHelpWith: [
      'Year-round advisory on complex commercial transactions and asset purchases',
      'Evaluation of tax implications on property sale and joint development agreements',
      'Structuring family settlements, gifts, and inheritance distribution',
      'Cross-border transaction taxation and DTAA relief advisory',
      'Evaluation of start-up tax exemptions under Section 80-IAC',
      'Formulation of strategic responses to department queries and scrutiny notices'
    ],
    keyBenefits: [
      'Maximize lawful tax savings without aggressive or non-compliant schemes',
      'Predictable cash flow management through calculated advance tax planning',
      'Protection of personal and business wealth against tax risks',
      'Direct access to seasoned advisors who understand Indian regulatory intricacies'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Discovery & Financial Review',
        description: 'In-depth assessment of current income streams, investments, and business models.'
      },
      {
        step: '02',
        title: 'Scenario Modeling',
        description: 'Evaluating alternative structures and provisions under the Income Tax Act.'
      },
      {
        step: '03',
        title: 'Actionable Blueprint',
        description: 'Delivering a concrete, step-by-step implementation guide for tax efficiency.'
      },
      {
        step: '04',
        title: 'Ongoing Review',
        description: 'Periodic check-ins as new Finance Acts and notifications are issued.'
      }
    ],
    requiredDocuments: [
      'Past 2 to 3 years Income Tax Returns and financial statements',
      'Investment portfolios and property transaction documentation',
      'Projected business revenues and planned capital expenditures',
      'Existing corporate or partnership deeds'
    ],
    faqs: [
      {
        question: 'How does tax planning differ from tax evasion?',
        answer: 'Tax planning is the lawful arrangement of financial affairs using legitimate deductions, exemptions, and allowances provided by the law, whereas tax evasion is illegal concealment.'
      }
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES_DATA.find((service) => service.slug === slug);
}

export function getServicesByCategory(category: 'tax' | 'accounting' | 'compliance'): ServiceItem[] {
  return SERVICES_DATA.filter((service) => service.category === category);
}
