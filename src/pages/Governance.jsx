import { Building2, Crown, User, Users, Home, RefreshCw, CheckSquare, FileText, DollarSign, Eye, Megaphone } from 'lucide-react'
import ModulePageTemplate, { ModuleSection, FeatureCard, DataSourceChip } from '../components/ModulePageTemplate'
import AnimatedSection from '../components/AnimatedSection'

export default function Governance() {
  return (
    <ModulePageTemplate
      icon={Building2}
      name="Jana Pratinidhi"
      subtitle="Know Your Representative. Hold Them Accountable."
      description="Multi-tier directory of elected representatives from Parliament to Ward level, with reservation data, voter rolls, meeting records, and fund utilization tracking."
    >
      {/* Section 1: Directory */}
      <ModuleSection label="DIRECTORY" title="Multi-Tier Representative Directory">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={Crown}
            title="Members of Parliament"
            description="Lok Sabha and Rajya Sabha MPs with constituency details, contact info, attendance records, and questions raised."
          />
          <FeatureCard
            icon={User}
            title="MLAs & MLCs"
            description="State assembly members with constituency profiles, election history, and legislative participation."
          />
          <FeatureCard
            icon={Users}
            title="Zilla & Taluk Panchayat"
            description="ZP and TP members — elected representatives at district and taluk level with ward-wise mapping."
          />
          <FeatureCard
            icon={Home}
            title="GP Presidents & Members"
            description="Gram Panchayat presidents and ward members — the closest tier of governance to every citizen."
          />
          <FeatureCard
            icon={RefreshCw}
            title="Reservation Data"
            description="Seat reservation status (SC/ST/OBC/General/Women), rotation history across election cycles, and upcoming reservation schedule."
          />
          <FeatureCard
            icon={CheckSquare}
            title="Voter Rolls"
            description="Booth-wise voter enrollment, verification status, new registration tracking."
            source="sec.karnataka.gov.in"
          />
        </div>
      </ModuleSection>

      {/* Section 2: Accountability */}
      <ModuleSection label="ACCOUNTABILITY" title="Governance Transparency">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard
            icon={FileText}
            title="Gram Sabha Records"
            description="Meeting dates, resolutions passed, attendance records, action items, and follow-up status for every Gram Sabha."
            source="egramswaraj.gov.in"
          />
          <FeatureCard
            icon={DollarSign}
            title="MPLADS/MLALADS Funds"
            description="Fund utilization tracking with work-wise breakdown — what was sanctioned, released, spent, and completed for each representative."
          />
          <FeatureCard
            icon={Eye}
            title="Performance Metrics"
            description="Track representative performance — meetings attended, questions raised, funds utilized, works completed."
          />
          <FeatureCard
            icon={Megaphone}
            title="Citizen Connect"
            description="Direct feedback channels to elected representatives with public tracking of responsiveness."
          />
        </div>
      </ModuleSection>

      {/* Section 3: Data Sources */}
      <ModuleSection label="DATA SOURCES">
        <AnimatedSection>
          <div className="flex flex-wrap gap-3">
            <DataSourceChip name="egramswaraj.gov.in" url="https://egramswaraj.gov.in" />
            <DataSourceChip name="lgdirectory.gov.in" url="https://lgdirectory.gov.in" />
            <DataSourceChip name="sec.karnataka.gov.in" url="https://sec.karnataka.gov.in" />
            <DataSourceChip name="eci.gov.in" url="https://eci.gov.in" />
            <DataSourceChip name="loksabha.nic.in" url="https://loksabha.nic.in" />
          </div>
        </AnimatedSection>
      </ModuleSection>
    </ModulePageTemplate>
  )
}
