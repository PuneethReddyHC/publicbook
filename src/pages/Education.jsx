import { GraduationCap, School, BookOpen, Award, Monitor, Building2, BarChart } from 'lucide-react'
import ModulePageTemplate, { ModuleSection, FeatureCard, DataSourceChip } from '../components/ModulePageTemplate'
import AnimatedSection from '../components/AnimatedSection'

export default function Education() {
  return (
    <ModulePageTemplate
      icon={GraduationCap}
      name="Vidya Darpan"
      subtitle="Every School. Every Scholarship. Every Student."
      description="Comprehensive education data platform covering school directory, scholarships, digital content, and education quality indicators."
    >
      {/* Section 1: Features */}
      <ModuleSection label="FEATURES" title="What It Covers">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard
            icon={School}
            title="UDISE+ School Directory"
            description="Complete directory of 15+ lakh schools with infrastructure, enrollment, teacher data, and performance indicators."
            source="samagra.education.gov.in"
          />
          <FeatureCard
            icon={BookOpen}
            title="NEP 2020 Tracking"
            description="Implementation status of National Education Policy 2020 — foundational literacy, multilingual education, vocational integration."
            source="education.gov.in"
          />
          <FeatureCard
            icon={Award}
            title="Scholarship Auto-Matching"
            description="100+ scholarships aggregated from central and state governments. Auto-match based on student profile — class, income, category, merit."
            source="scholarships.gov.in"
          />
          <FeatureCard
            icon={Monitor}
            title="DIKSHA Digital Content"
            description="QR-coded digital textbook content, teacher training modules, and interactive learning resources for all subjects and grades."
            source="diksha.gov.in"
          />
          <FeatureCard
            icon={Building2}
            title="Higher Education"
            description="Colleges, ITIs, polytechnics with course details, fee structures, placement records, and NAAC/NBA accreditation status."
          />
          <FeatureCard
            icon={BarChart}
            title="Education Indicators"
            description="GER/NER (Gross/Net Enrollment Ratio), dropout rates, pupil-teacher ratios, gender parity index — tracked at district level."
            source="Samagra Shiksha"
          />
        </div>
      </ModuleSection>

      {/* Section 2: Data Sources */}
      <ModuleSection label="DATA SOURCES">
        <AnimatedSection>
          <div className="flex flex-wrap gap-3">
            <DataSourceChip name="samagra.education.gov.in" url="https://samagra.education.gov.in" />
            <DataSourceChip name="diksha.gov.in" url="https://diksha.gov.in" />
            <DataSourceChip name="scholarships.gov.in" url="https://scholarships.gov.in" />
            <DataSourceChip name="education.gov.in" url="https://education.gov.in" />
            <DataSourceChip name="udiseplus.gov.in" url="https://udiseplus.gov.in" />
          </div>
        </AnimatedSection>
      </ModuleSection>
    </ModulePageTemplate>
  )
}
