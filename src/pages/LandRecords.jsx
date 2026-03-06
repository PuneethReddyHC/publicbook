import { Landmark, FileText, GitBranch, Map, FileCheck, Globe, Search } from 'lucide-react'
import ModulePageTemplate, { ModuleSection, FeatureCard, DataSourceChip } from '../components/ModulePageTemplate'
import AnimatedSection from '../components/AnimatedSection'

export default function LandRecords() {
  return (
    <ModulePageTemplate
      icon={Landmark}
      name="Bhoomi Connect"
      subtitle="Land Records for Every Citizen"
      description="Complete, transparent access to land records across India. From RTC lookups to village boundary visualization — making land information freely available to every citizen."
    >
      {/* Section 1: Features */}
      <ModuleSection label="FEATURES" title="What It Covers">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={FileText}
            title="RTC Lookup"
            description="Record of Rights, Tenancy, and Crops lookup by survey number, owner name, or village. Instant access to the most requested land document."
          />
          <FeatureCard
            icon={GitBranch}
            title="Mutation Tracking"
            description="Track mutation status and complete ownership history. See every transfer, partition, and inheritance record for any parcel."
          />
          <FeatureCard
            icon={Map}
            title="Village Maps"
            description="Digitized village maps including tippan and hissa atlas. View survey boundaries overlaid on satellite imagery with GeoJSON visualization."
          />
          <FeatureCard
            icon={FileCheck}
            title="Encumbrance Certificates"
            description="Verify encumbrance certificates to check if land has any registered claims, mortgages, or legal disputes before transactions."
          />
          <FeatureCard
            icon={Globe}
            title="GeoJSON Boundaries"
            description="Interactive village boundary visualization using GeoJSON data. Pan, zoom, and explore village boundaries on a map."
          />
          <FeatureCard
            icon={Search}
            title="Cross-State Search"
            description="Unified search across multiple state portals — Bhoomi (Karnataka), Bhulekh (UP/Maharashtra), Dharitree (Assam), and more."
          />
        </div>
      </ModuleSection>

      {/* Section 2: The Problem It Solves */}
      <ModuleSection label="THE PROBLEM IT SOLVES" title="Why This Matters">
        <AnimatedSection>
          <div className="bg-bg-card border border-border rounded-2xl p-8 border-l-4 border-l-saffron">
            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p>
                In Karnataka alone, citizens make approximately <span className="text-text-primary font-semibold">2 crore RTC requests annually</span>. Most require visiting a sub-registrar office, waiting in long queues, or paying an intermediary <span className="text-saffron font-semibold">&#8377;2,000&ndash;10,000</span> for information that is legally public.
              </p>
              <p>
                Nationally, land-related fraud costs over <span className="text-text-primary font-semibold">&#8377;10,000 crore annually</span>. Duplicate registrations, forged mutations, and fake ownership claims thrive because citizens cannot easily verify records.
              </p>
              <p className="text-text-primary font-medium">
                Bhoomi Connect eliminates this gap by providing direct, digital access to land records &mdash; no middlemen, no queues, no bribes.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </ModuleSection>

      {/* Section 3: Data Sources */}
      <ModuleSection label="DATA SOURCES" title="Where the Data Comes From">
        <AnimatedSection>
          <div className="flex flex-wrap gap-3">
            <DataSourceChip name="BhoomiMaps API" url="https://landrecords.karnataka.gov.in" />
            <DataSourceChip name="K-GIS / KSRSAC" url="https://kgis.ksrsac.in" />
            <DataSourceChip name="State Revenue Portals" url="https://bhulekh.mahabhumi.gov.in" />
            <DataSourceChip name="Survey of India" url="https://surveyofindia.gov.in" />
            <DataSourceChip name="DigiLocker" url="https://digilocker.gov.in" />
          </div>
        </AnimatedSection>
      </ModuleSection>

      {/* Section 4: Existing Prototype */}
      <ModuleSection label="EXISTING PROTOTYPE" title="What We've Already Built">
        <AnimatedSection>
          <div className="bg-bg-card border border-border rounded-2xl p-8">
            <h3 className="font-heading font-bold text-xl text-text-primary mb-4">
              Working prototype: <span className="text-saffron">Karnataka Land Scraper</span>
            </h3>
            <ul className="space-y-3 text-text-secondary text-sm leading-relaxed mb-6">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-saffron mt-2 shrink-0" />
                BhoomiMaps API integration for RTC data
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-saffron mt-2 shrink-0" />
                GeoJSON village boundary extraction
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-saffron mt-2 shrink-0" />
                Survey number-based lookup
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-saffron mt-2 shrink-0" />
                SQLite database with structured records
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-saffron mt-2 shrink-0" />
                Web interface for search and visualization
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              {['Python', 'FastAPI', 'SQLite', 'GeoJSON', 'React'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono rounded-full bg-saffron/10 text-saffron border border-saffron/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </ModuleSection>

      {/* Section 5: Technical Approach */}
      <ModuleSection label="TECHNICAL APPROACH" title="How It Works">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatedSection delay={0}>
            <div className="bg-bg-card border border-border rounded-2xl p-6 h-full">
              <div className="text-saffron font-mono text-sm font-medium mb-3">Phase 1</div>
              <h3 className="font-heading font-bold text-lg text-text-primary mb-3">API-First</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Direct integration with government APIs where available &mdash; BhoomiMaps, Bhulekh, Dharitree REST endpoints.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="bg-bg-card border border-border rounded-2xl p-6 h-full">
              <div className="text-saffron font-mono text-sm font-medium mb-3">Phase 2</div>
              <h3 className="font-heading font-bold text-lg text-text-primary mb-3">Structured Scraping</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                For portals without APIs, responsible scraping with rate limiting, caching, and compliance with robots.txt.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="bg-bg-card border border-border rounded-2xl p-6 h-full">
              <div className="text-saffron font-mono text-sm font-medium mb-3">Phase 3</div>
              <h3 className="font-heading font-bold text-lg text-text-primary mb-3">AI Extraction</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                AI-powered extraction from scanned PDFs and legacy documents using OCR and NLP for non-digitized records.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </ModuleSection>

      {/* Section 6: Access Control */}
      <ModuleSection label="ACCESS CONTROL" title="Who Sees What">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatedSection delay={0}>
            <div className="bg-bg-card border border-border rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                  Public
                </span>
              </div>
              <ul className="space-y-2 text-text-secondary text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-green-400 mt-2 shrink-0" />
                  Village boundaries
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-green-400 mt-2 shrink-0" />
                  General statistics
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-green-400 mt-2 shrink-0" />
                  District-level aggregates
                </li>
              </ul>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="bg-bg-card border border-border rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-saffron/10 text-saffron border border-saffron/20">
                  Authenticated
                </span>
              </div>
              <ul className="space-y-2 text-text-secondary text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-saffron mt-2 shrink-0" />
                  Own RTC records
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-saffron mt-2 shrink-0" />
                  Mutation status
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-saffron mt-2 shrink-0" />
                  Personal encumbrance certificates
                </li>
              </ul>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="bg-bg-card border border-border rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Officials
                </span>
              </div>
              <ul className="space-y-2 text-text-secondary text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-blue-400 mt-2 shrink-0" />
                  Bulk mutations
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-blue-400 mt-2 shrink-0" />
                  Audit trails
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-blue-400 mt-2 shrink-0" />
                  Cross-village analysis
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-blue-400 mt-2 shrink-0" />
                  Administrative tools
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </ModuleSection>
    </ModulePageTemplate>
  )
}
