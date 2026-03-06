import { HardHat, Building, Pickaxe, Home, Route, Droplets, BarChart3, Star, Camera, MessageSquare } from 'lucide-react'
import ModulePageTemplate, { ModuleSection, FeatureCard, DataSourceChip } from '../components/ModulePageTemplate'
import AnimatedSection from '../components/AnimatedSection'

export default function Works() {
  return (
    <ModulePageTemplate
      icon={HardHat}
      name="Karyagati"
      subtitle="Track Every Rupee. Rate Every Work."
      description="Real-time tracking of all government works with fund allocation, expenditure, progress, and citizen feedback — all in one place."
    >
      {/* Section 1: Core Modules */}
      <ModuleSection label="CORE MODULES" title="What We Track">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard
            icon={Building}
            title="eGramSwaraj Works"
            description="Panchayat-level works including budgets, fund release, work completion status. Complete visibility into local governance spending."
            source="egramswaraj.gov.in"
          />
          <FeatureCard
            icon={Pickaxe}
            title="MGNREGA Projects"
            description="Work listings, labor days generated, GIS locations, muster rolls, and wage payment tracking for the world's largest employment guarantee program."
            source="nrega.nic.in"
          />
          <FeatureCard
            icon={Home}
            title="PMAY-G Housing"
            description="Beneficiary-wise progress tracking with geo-tagged construction photos at each stage — foundation, walls, roof, completion."
            source="pmayg.nic.in"
          />
          <FeatureCard
            icon={Route}
            title="PMGSY Roads"
            description="Road construction progress per habitation. Track which villages have all-weather road connectivity and which are pending."
            source="pmgsy.nic.in"
          />
          <FeatureCard
            icon={Droplets}
            title="SBM Sanitation"
            description="Toilet construction tracking, ODF (Open Defecation Free) status by village, block, and district."
            source="sbm.gov.in"
          />
          <FeatureCard
            icon={BarChart3}
            title="Fund Flow Tracking"
            description="Follow the money from Centre → State → District → Block → GP. Track delays, bottlenecks, and utilization rates at every level."
          />
        </div>
      </ModuleSection>

      {/* Section 2: Citizen Voice */}
      <ModuleSection label="CITIZEN VOICE" title="Citizen Feedback System">
        <AnimatedSection>
          <div className="bg-bg-card border border-border rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-start">
                <div className="w-10 h-10 rounded-xl bg-saffron/10 flex items-center justify-center mb-4">
                  <Star className="text-saffron" size={20} />
                </div>
                <h3 className="font-heading font-bold text-lg text-text-primary mb-2">Quality Ratings</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Citizens rate completed works on quality, timeliness, and usefulness. Public ratings create accountability.
                </p>
              </div>
              <div className="flex flex-col items-start">
                <div className="w-10 h-10 rounded-xl bg-saffron/10 flex items-center justify-center mb-4">
                  <Camera className="text-saffron" size={20} />
                </div>
                <h3 className="font-heading font-bold text-lg text-text-primary mb-2">Photo Evidence</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Upload photos of incomplete or poor-quality works. Geo-tagged and timestamped for verification.
                </p>
              </div>
              <div className="flex flex-col items-start">
                <div className="w-10 h-10 rounded-xl bg-saffron/10 flex items-center justify-center mb-4">
                  <MessageSquare className="text-saffron" size={20} />
                </div>
                <h3 className="font-heading font-bold text-lg text-text-primary mb-2">Public Reports</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  All feedback is public. Anyone can see citizen reports for any work in any village.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </ModuleSection>

      {/* Section 3: Data Sources */}
      <ModuleSection label="DATA SOURCES">
        <AnimatedSection>
          <div className="flex flex-wrap gap-3">
            <DataSourceChip name="egramswaraj.gov.in" url="https://egramswaraj.gov.in" />
            <DataSourceChip name="nrega.nic.in" url="https://nrega.nic.in" />
            <DataSourceChip name="pmayg.nic.in" url="https://pmayg.nic.in" />
            <DataSourceChip name="pmgsy.nic.in" url="https://pmgsy.nic.in" />
            <DataSourceChip name="sbm.gov.in" url="https://sbm.gov.in" />
          </div>
        </AnimatedSection>
      </ModuleSection>
    </ModulePageTemplate>
  )
}
