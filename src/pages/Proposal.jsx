import AnimatedSection from '../components/AnimatedSection'
import SectionLabel from '../components/SectionLabel'
import { FileText, Target, Shield, Calendar, IndianRupee, Database, BarChart3, Download } from 'lucide-react'

const solutionModules = [
  { module: 'Land Records', sanskrit: 'Bhoomi Connect', fn: 'RTC, mutations, village maps', sources: 'BhoomiMaps, K-GIS' },
  { module: 'Agriculture', sanskrit: 'Krishi Yantra & Sahay', fn: 'Subsidies, crop loans, soil health', sources: 'SMAM, PM-KISAN, PMFBY' },
  { module: 'Welfare Schemes', sanskrit: 'Yojana Mitra', fn: 'Personalized eligibility', sources: 'MyScheme, WCD, PMJAY' },
  { module: 'Public Works', sanskrit: 'Karyagati', fn: 'Fund tracking, citizen feedback', sources: 'eGramSwaraj, NREGA' },
  { module: 'Education', sanskrit: 'Vidya Darpan', fn: 'Schools, scholarships, NEP', sources: 'UDISE+, DIKSHA' },
  { module: 'Governance', sanskrit: 'Jana Pratinidhi', fn: 'Representatives, elections', sources: 'LGD, SEC, ECI' },
  { module: 'AI Agent', sanskrit: 'Grama Sahayak', fn: 'Multilingual WhatsApp bot', sources: 'Sarvam AI' },
  { module: 'Village Data', sanskrit: 'Grama Data', fn: 'Demographics, facilities', sources: 'Census, LGD, OGD' },
  { module: 'Farm Infra', sanskrit: 'Krishi Infra', fn: 'Dairy, fisheries, storage', sources: 'AHIDF, PMMSY, NLM' },
]

const rbacRows = [
  { role: 'Anonymous', public: '✅', own: '❌', restricted: '❌', confidential: '❌', feedback: 'Read', scope: 'Village stats only' },
  { role: 'Auth Citizen', public: '✅', own: '✅', restricted: '❌', confidential: '❌', feedback: 'Read/Write', scope: 'Own records' },
  { role: 'Farmer', public: '✅', own: '✅', restricted: 'Own farm', confidential: '❌', feedback: 'Read/Write', scope: 'Own land + schemes' },
  { role: 'GP Member', public: '✅', own: '✅', restricted: 'GP-level', confidential: '❌', feedback: 'Read/Write', scope: 'Own panchayat' },
  { role: 'Block Official', public: '✅', own: '✅', restricted: 'Block-level', confidential: 'Request', feedback: 'Read', scope: 'All blocks in jurisdiction' },
  { role: 'District Collector', public: '✅', own: '✅', restricted: 'District', confidential: 'Approved', feedback: 'Read', scope: 'Full district' },
  { role: 'State Admin', public: '✅', own: '✅', restricted: 'State-wide', confidential: 'Approved', feedback: 'Read', scope: 'Full state' },
  { role: 'Researcher', public: '✅', own: '❌', restricted: 'Anonymized', confidential: '❌', feedback: 'Read', scope: 'Anonymized datasets' },
  { role: 'Developer', public: '✅ via API', own: '❌', restricted: 'Rate-limited', confidential: '❌', feedback: 'Read', scope: 'Public API only' },
]

const budgetRows = [
  { category: 'Core Team (6 members)', y1: '₹48.0L', y2: '₹52.8L', y3: '₹58.1L', total: '₹1,58.9L' },
  { category: 'Cloud & Infrastructure', y1: '₹8.4L', y2: '₹12.6L', y3: '₹16.8L', total: '₹37.8L' },
  { category: 'AI/ML & NLP Services', y1: '₹3.0L', y2: '₹5.0L', y3: '₹7.0L', total: '₹15.0L' },
  { category: 'WhatsApp Business API', y1: '₹1.2L', y2: '₹3.6L', y3: '₹6.0L', total: '₹10.8L' },
  { category: 'Field Operations', y1: '₹3.0L', y2: '₹5.0L', y3: '₹4.0L', total: '₹12.0L' },
  { category: 'Security & Compliance', y1: '₹2.0L', y2: '₹2.5L', y3: '₹3.0L', total: '₹7.5L' },
  { category: 'Travel & Outreach', y1: '₹1.5L', y2: '₹2.0L', y3: '₹1.5L', total: '₹5.0L' },
  { category: 'Contingency (10%)', y1: '—', y2: '—', y3: '—', total: '₹24.7L' },
]

const dataSourceRows = [
  { source: 'BhoomiMaps API', ministry: 'Dept of Revenue, Karnataka', access: 'API Access' },
  { source: 'eGramSwaraj', ministry: 'Ministry of Panchayati Raj', access: 'Bulk Data API' },
  { source: 'PM-KISAN', ministry: 'Dept of Agriculture', access: 'Beneficiary Verification API' },
  { source: 'MGNREGA/NREGASoft', ministry: 'Ministry of Rural Development', access: 'Works & Wage Data API' },
  { source: 'UDISE+', ministry: 'Ministry of Education', access: 'School Data API' },
  { source: 'LGD', ministry: 'Ministry of Panchayati Raj', access: 'Directory API' },
  { source: 'Soil Health Card', ministry: 'Dept of Agriculture', access: 'Farm-level Data API' },
  { source: 'PMAY-G', ministry: 'Ministry of Rural Development', access: 'Beneficiary Progress API' },
  { source: 'Sarvam AI', ministry: 'Sarvam AI (Private)', access: 'Translation & Speech API' },
  { source: 'DigiLocker', ministry: 'MeitY', access: 'Document Verification API' },
]

const phases = [
  {
    number: 1,
    title: 'Phase 1: Karnataka',
    timeline: 'Months 1-12',
    description: 'Full deployment across all 31 districts. All 9 modules live. 50,000 active users. 6,000 panchayats connected. Proof of concept validated.',
  },
  {
    number: 2,
    title: 'Phase 2: 5 States',
    timeline: 'Months 13-24',
    description: 'Expand to Tamil Nadu, Andhra Pradesh, Maharashtra, Rajasthan, and Uttar Pradesh. State-specific customization. Regional language support. 5L active users.',
  },
  {
    number: 3,
    title: 'Phase 3: National',
    timeline: 'Months 25-36',
    description: 'All-India deployment covering 28 states and 8 UTs. Full language support. 10L+ active users. Open API for developers. Community-driven data validation.',
  },
]

const impactMetrics = [
  { value: '10L+', label: 'Active citizens by Year 3' },
  { value: '60%', label: 'Reduction in middleman dependency' },
  { value: '30%', label: 'Increase in scheme uptake' },
  { value: '10-15%', label: 'Farmer income improvement' },
  { value: '1L+', label: 'Citizen feedback submissions/year' },
  { value: '500+', label: 'Developer community' },
  { value: '6,000+', label: 'Panchayats connected' },
]

const problemStats = [
  { value: '₹10,000 Cr', label: 'Annual loss to information gaps' },
  { value: '40%+', label: 'Eligible citizens miss schemes' },
  { value: '15-40%', label: 'Below-market farmer sales' },
  { value: '2 Cr+', label: 'Annual RTC requests in Karnataka alone' },
]

const dataTiers = [
  { tier: 'PUBLIC', color: 'bg-green/20 text-green border-green/30', description: 'Village boundaries, general statistics, scheme information' },
  { tier: 'RESTRICTED', color: 'bg-saffron/20 text-saffron border-saffron/30', description: 'Personal land records, own scheme status, own benefits' },
  { tier: 'CONFIDENTIAL', color: 'bg-red-500/20 text-red-400 border-red-500/30', description: 'Cross-citizen data, bulk records, audit trails' },
  { tier: 'SECRET', color: 'bg-navy/20 text-blue-400 border-navy/30', description: 'Security data, administrative overrides, system configurations' },
]

const executiveBullets = [
  '6.4 lakh villages across India to be covered',
  '9 integrated platform modules from land records to AI agent',
  'DPDPA 2023 compliant data handling and privacy',
  'Total budget: ₹2.47 Crore over 36 months',
  '3-phase rollout: Karnataka → 5 States → National',
  'Open source, API-first architecture',
  '12+ Indian language support via Sarvam AI',
]

const tableHeaderClass = 'sticky top-0 bg-saffron text-bg-primary font-heading font-bold text-sm px-4 py-3 text-left whitespace-nowrap'
const tableCellClass = 'px-4 py-3 text-sm font-body text-text-secondary border-b border-border'

export default function Proposal() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden noise-bg">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <AnimatedSection>
            <SectionLabel label="PROPOSAL" />
            <h1 className="font-heading font-[900] text-3xl md:text-5xl lg:text-6xl text-text-primary mb-4">
              The Proposal
            </h1>
            <p className="text-saffron font-heading font-semibold text-lg md:text-2xl mb-4">
              Our Blueprint for India's Information Revolution
            </p>
            <p className="text-text-secondary text-lg md:text-xl max-w-3xl leading-relaxed">
              Complete proposal for building India's first open civic data platform — submitted to MeitY, ELEVATE Karnataka, IndiaAI, and Startup India.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimatedSection>
            <SectionLabel label="EXECUTIVE SUMMARY" />
            <div className="bg-bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="text-saffron" size={24} />
                <h2 className="font-heading font-bold text-2xl text-text-primary">Key Highlights</h2>
              </div>
              <ul className="space-y-3">
                {executiveBullets.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-saffron shrink-0" />
                    <span className="text-text-secondary text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimatedSection>
            <SectionLabel label="THE PROBLEM" />
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-text-primary mb-10">
              Information Asymmetry Costing ₹10,000 Crore Annually
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {problemStats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-bg-card border border-border rounded-2xl p-6 text-center">
                  <p className="font-heading font-[900] text-2xl md:text-3xl text-saffron mb-2">{stat.value}</p>
                  <p className="text-text-secondary text-sm leading-relaxed">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimatedSection>
            <SectionLabel label="THE SOLUTION" />
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-text-primary mb-10">
              9-Module Open Civic Data Platform
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="w-full overflow-x-auto rounded-2xl border border-border">
              <table className="w-full border-collapse min-w-[700px]">
                <thead>
                  <tr>
                    <th className={tableHeaderClass}>Module</th>
                    <th className={tableHeaderClass}>Sanskrit Name</th>
                    <th className={tableHeaderClass}>Key Function</th>
                    <th className={tableHeaderClass}>Primary Sources</th>
                  </tr>
                </thead>
                <tbody>
                  {solutionModules.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-[#111]' : 'bg-[#161616]'}>
                      <td className={`${tableCellClass} font-semibold text-text-primary whitespace-nowrap`}>{row.module}</td>
                      <td className={`${tableCellClass} text-saffron font-mono whitespace-nowrap`}>{row.sanskrit}</td>
                      <td className={tableCellClass}>{row.fn}</td>
                      <td className={`${tableCellClass} font-mono text-xs`}>{row.sources}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Access Control Matrix */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimatedSection>
            <SectionLabel label="ACCESS CONTROL" />
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-text-primary mb-6">
              4-Tier Data Classification & 9-Role RBAC Matrix
            </h2>
          </AnimatedSection>

          {/* Data Tier Badges */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap gap-4 mb-10">
              {dataTiers.map((tier, i) => (
                <div key={i} className={`inline-flex items-center gap-3 px-4 py-2.5 rounded-xl border ${tier.color}`}>
                  <span className="font-mono font-bold text-sm">{tier.tier}</span>
                  <span className="text-text-secondary text-xs hidden sm:inline">— {tier.description}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* RBAC Table */}
          <AnimatedSection delay={0.2}>
            <div className="w-full overflow-x-auto rounded-2xl border border-border">
              <table className="w-full border-collapse min-w-[800px]">
                <thead>
                  <tr>
                    <th className={tableHeaderClass}>Role</th>
                    <th className={tableHeaderClass}>Public Data</th>
                    <th className={tableHeaderClass}>Own Records</th>
                    <th className={tableHeaderClass}>Restricted</th>
                    <th className={tableHeaderClass}>Confidential</th>
                    <th className={tableHeaderClass}>Feedback</th>
                    <th className={tableHeaderClass}>Scope</th>
                  </tr>
                </thead>
                <tbody>
                  {rbacRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-[#111]' : 'bg-[#161616]'}>
                      <td className={`${tableCellClass} font-semibold text-text-primary whitespace-nowrap`}>{row.role}</td>
                      <td className={`${tableCellClass} text-center`}>{row.public}</td>
                      <td className={`${tableCellClass} text-center`}>{row.own}</td>
                      <td className={`${tableCellClass} text-center`}>{row.restricted}</td>
                      <td className={`${tableCellClass} text-center`}>{row.confidential}</td>
                      <td className={`${tableCellClass} text-center whitespace-nowrap`}>{row.feedback}</td>
                      <td className={`${tableCellClass} whitespace-nowrap`}>{row.scope}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimatedSection>
            <SectionLabel label="IMPLEMENTATION" />
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-text-primary mb-10">
              3-Phase National Rollout
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {phases.map((phase, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-bg-card border border-border rounded-2xl p-6 h-full">
                  <span className="inline-block px-3 py-1 rounded-full bg-saffron/15 text-saffron font-mono font-bold text-sm mb-4">
                    Phase {phase.number}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-text-primary mb-1">{phase.title}</h3>
                  <p className="text-saffron font-mono text-sm mb-4">{phase.timeline}</p>
                  <p className="text-text-secondary text-sm leading-relaxed">{phase.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Breakdown */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimatedSection>
            <SectionLabel label="BUDGET" />
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-text-primary mb-10">
              ₹2.47 Crore — 36-Month Budget
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="w-full overflow-x-auto rounded-2xl border border-border">
              <table className="w-full border-collapse min-w-[600px]">
                <thead>
                  <tr>
                    <th className={tableHeaderClass}>Category</th>
                    <th className={tableHeaderClass}>Year 1</th>
                    <th className={tableHeaderClass}>Year 2</th>
                    <th className={tableHeaderClass}>Year 3</th>
                    <th className={tableHeaderClass}>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {budgetRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-[#111]' : 'bg-[#161616]'}>
                      <td className={`${tableCellClass} font-semibold text-text-primary whitespace-nowrap`}>{row.category}</td>
                      <td className={`${tableCellClass} text-right font-mono whitespace-nowrap`}>{row.y1}</td>
                      <td className={`${tableCellClass} text-right font-mono whitespace-nowrap`}>{row.y2}</td>
                      <td className={`${tableCellClass} text-right font-mono whitespace-nowrap`}>{row.y3}</td>
                      <td className={`${tableCellClass} text-right font-mono font-semibold whitespace-nowrap`}>{row.total}</td>
                    </tr>
                  ))}
                  {/* TOTAL Row */}
                  <tr className="bg-saffron">
                    <td className="px-4 py-3 text-sm font-heading font-bold text-bg-primary whitespace-nowrap border-b border-saffron-dark">TOTAL</td>
                    <td className="px-4 py-3 text-sm font-mono font-bold text-bg-primary text-right whitespace-nowrap border-b border-saffron-dark">₹67.1L</td>
                    <td className="px-4 py-3 text-sm font-mono font-bold text-bg-primary text-right whitespace-nowrap border-b border-saffron-dark">₹83.5L</td>
                    <td className="px-4 py-3 text-sm font-mono font-bold text-bg-primary text-right whitespace-nowrap border-b border-saffron-dark">₹96.4L</td>
                    <td className="px-4 py-3 text-sm font-mono font-bold text-bg-primary text-right whitespace-nowrap border-b border-saffron-dark">₹2,47.0L</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Data Access Request */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimatedSection>
            <SectionLabel label="DATA ACCESS" />
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-text-primary mb-10">
              Government Data Sources Requested
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="w-full overflow-x-auto rounded-2xl border border-border">
              <table className="w-full border-collapse min-w-[600px]">
                <thead>
                  <tr>
                    <th className={tableHeaderClass}>Source</th>
                    <th className={tableHeaderClass}>Custodian Ministry</th>
                    <th className={tableHeaderClass}>Access Type</th>
                  </tr>
                </thead>
                <tbody>
                  {dataSourceRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-[#111]' : 'bg-[#161616]'}>
                      <td className={`${tableCellClass} font-semibold text-text-primary whitespace-nowrap`}>{row.source}</td>
                      <td className={tableCellClass}>{row.ministry}</td>
                      <td className={`${tableCellClass} font-mono text-xs whitespace-nowrap`}>{row.access}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Impact Targets */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimatedSection>
            <SectionLabel label="IMPACT" />
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-text-primary mb-10">
              7 Target Metrics
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {impactMetrics.map((metric, i) => (
              <AnimatedSection key={i} delay={i * 0.05} className={i === impactMetrics.length - 1 ? 'col-span-2 md:col-span-1 md:col-start-2' : ''}>
                <div className="bg-bg-card border border-border rounded-2xl p-6 text-center h-full">
                  <p className="font-heading font-[900] text-2xl md:text-3xl text-saffron mb-2">{metric.value}</p>
                  <p className="text-text-secondary text-sm leading-relaxed">{metric.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                Download the complete proposal document for detailed technical specifications, architecture diagrams, and appendices.
              </p>
              <a
                href="/publicbook-proposal.docx"
                download
                className="inline-flex items-center gap-3 px-8 py-4 bg-saffron text-bg-primary font-heading font-bold text-lg rounded-xl hover:bg-saffron-light transition-colors duration-200"
              >
                <Download size={22} />
                Download Full Proposal (DOCX)
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
