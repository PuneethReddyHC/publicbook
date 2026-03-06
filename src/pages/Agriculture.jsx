import ModulePageTemplate, { ModuleSection, SchemeCard, DataSourceChip } from '../components/ModulePageTemplate'
import AnimatedSection from '../components/AnimatedSection'
import { Sprout } from 'lucide-react'

export default function Agriculture() {
  return (
    <ModulePageTemplate
      icon={Sprout}
      name="Krishi Yantra & Krishi Sahay"
      subtitle="Every Farm Benefit in One Place"
      description="From machinery subsidies to crop loans, soil health to irrigation — comprehensive agricultural support information for every Indian farmer."
    >
      {/* Section 1: Agricultural Machinery */}
      <ModuleSection label="AGRICULTURAL MACHINERY" title="Machinery Subsidies (SMAM)">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SchemeCard
            name="SMAM — Sub-Mission on Agricultural Mechanization"
            benefit="40-50% subsidy for general category, 50% for SC/ST/Women/Marginal farmers, up to 90% for NE states"
            eligibility="All farmers with valid land records. Higher subsidy for SC/ST, women, small & marginal farmers."
            source="agrimachinery.nic.in"
            sourceUrl="https://agrimachinery.nic.in"
          />
          <SchemeCard
            name="Tractors & Power Tillers"
            benefit="25-50% subsidy depending on HP and category"
            eligibility="Small and marginal farmers with up to 5 acres. One tractor per farmer."
            source="agrimachinery.nic.in"
          />
          <SchemeCard
            name="Rotavators, Seed Drills & Harvesters"
            benefit="40-50% subsidy on implements"
            eligibility="Farmers owning tractors or through Custom Hiring Centres."
            source="agrimachinery.nic.in"
          />
          <SchemeCard
            name="Sprayers & Agricultural Drones"
            benefit="40-75% subsidy, up to ₹4L for drones"
            eligibility="Progressive farmers, FPOs, and CHC operators."
            source="agrimachinery.nic.in"
          />
          <SchemeCard
            name="Custom Hiring Centres (CHC)"
            benefit="40% subsidy for establishing CHCs, GPS-mapped directory"
            eligibility="Entrepreneurs, FPOs, cooperatives, panchayats."
            source="agrimachinery.nic.in"
          />
        </div>

        <AnimatedSection>
          <div className="bg-saffron/5 border border-saffron/20 rounded-2xl p-6 mt-8">
            <p className="text-text-primary text-sm leading-relaxed">
              <span className="font-bold">⚠️ Fake Scheme Alert:</span> The viral 'PM Kisan Tractor Yojana' offering 50% tractor subsidy is <span className="font-bold text-red-500">FAKE</span>. This scheme does not exist. Verified by PIB Fact Check. Only SMAM-listed subsidies are genuine. Source:{' '}
              <a href="https://factcheck.pib.gov.in" target="_blank" rel="noopener noreferrer" className="text-saffron hover:underline">
                PIB Fact Check (factcheck.pib.gov.in)
              </a>
            </p>
          </div>
        </AnimatedSection>
      </ModuleSection>

      {/* Section 2: Crop Loans */}
      <ModuleSection label="CROP LOANS" title="Financial Aid for Farmers">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SchemeCard
            name="Kisan Credit Card (KCC)"
            benefit="Crop loans at 4% interest (with 3% subvention for prompt repayment)"
            eligibility="All farmers, sharecroppers, tenant farmers. Limit based on land holding and crop pattern."
            source="NABARD"
            sourceUrl="https://nabard.org"
          />
          <SchemeCard
            name="PM-KISAN"
            benefit="₹6,000/year in 3 installments of ₹2,000 via Direct Benefit Transfer"
            eligibility="All landholder farmer families (subject to exclusion criteria for income tax payers, professionals)."
            source="pmkisan.gov.in"
            sourceUrl="https://pmkisan.gov.in"
          />
          <SchemeCard
            name="PMFBY — Crop Insurance"
            benefit="Premium: 2% Kharif, 1.5% Rabi, 5% commercial. Government pays remaining."
            eligibility="All farmers growing notified crops in notified areas. Mandatory for loanees, voluntary for others."
            source="pmfby.gov.in"
            sourceUrl="https://pmfby.gov.in"
          />
          <SchemeCard
            name="Interest Subvention Scheme"
            benefit="2% interest subvention on crop loans up to ₹3 lakh (effective rate: 4%)"
            eligibility="All farmers availing short-term crop loans from banks."
            source="RBI / NABARD"
          />
        </div>
      </ModuleSection>

      {/* Section 3: Fertilizers & Seeds */}
      <ModuleSection label="FERTILIZERS & SEEDS" title="Input Support">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SchemeCard
            name="DBT Fertilizer Subsidy"
            benefit="Direct subsidy transfer — Urea: ₹242/bag, DAP: ₹1,350/bag, MOP: ₹700/bag"
            eligibility="All farmers purchasing through authorized dealers with Aadhaar-linked POS."
            source="fert.nic.in"
          />
          <SchemeCard
            name="Soil Health Card Scheme"
            benefit="Free soil testing with crop-wise fertilizer dosage recommendations"
            eligibility="All farmers. Card issued every 2 years per farm holding."
            source="soilhealth.dac.gov.in"
            sourceUrl="https://soilhealth.dac.gov.in"
          />
        </div>
      </ModuleSection>

      {/* Section 4: Irrigation */}
      <ModuleSection label="IRRIGATION" title="Water & Irrigation Support">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SchemeCard
            name="PMKSY — Micro Irrigation"
            benefit="55% subsidy for marginal farmers, 45% for others on drip and sprinkler systems"
            eligibility="All farmers. Higher subsidy for small, marginal, SC/ST, women farmers."
            source="pmksy.gov.in"
            sourceUrl="https://pmksy.gov.in"
          />
          <SchemeCard
            name="Borewell Subsidies"
            benefit="₹50,000-1,50,000 subsidy with water table depth data"
            eligibility="Farmers in notified drought-prone and water-scarce blocks."
            source="State Minor Irrigation Departments"
          />
        </div>
      </ModuleSection>

      {/* Section 5: Farm Infrastructure */}
      <ModuleSection label="FARM INFRASTRUCTURE" title="Rural Infrastructure Support">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SchemeCard
            name="AHIDF — Animal Husbandry Infrastructure"
            benefit="₹15,000 Cr fund: 3% interest subvention on loans for dairy, poultry, meat processing"
            eligibility="Individual entrepreneurs, private companies, MSMEs, FPOs, Section 8 companies."
            source="dahd.nic.in"
            sourceUrl="https://dahd.nic.in"
          />
          <SchemeCard
            name="PMMSY — Fisheries"
            benefit="40-60% subsidy for fish ponds, hatcheries, cold storage, and fishing vessels"
            eligibility="Fishers, fish farmers, SHGs, FPOs. Higher subsidy for SC/ST/Women."
            source="pmmsy.dof.gov.in"
            sourceUrl="https://pmmsy.dof.gov.in"
          />
          <SchemeCard
            name="NLM — National Livestock Mission"
            benefit="25-50% subsidy for sheep, goat, pig, poultry, and rabbit breeding units"
            eligibility="Individual farmers, SHGs, cooperatives, FPOs."
            source="dahd.nic.in"
            sourceUrl="https://dahd.nic.in"
          />
          <SchemeCard
            name="RKVY-RAFTAAR — Warehouses & Cold Chains"
            benefit="Subsidy for warehouses, cold chains, and agri-logistics infrastructure"
            eligibility="State governments, private sector, FPOs, cooperatives."
            source="rkvy.nic.in"
            sourceUrl="https://rkvy.nic.in"
          />
          <SchemeCard
            name="MIDH — Horticulture Development"
            benefit="50% subsidy for poly-houses, shade-nets, mulching, and precision farming"
            eligibility="All horticulture farmers. Higher for small/marginal and NE states."
            source="midh.gov.in"
            sourceUrl="https://midh.gov.in"
          />
          <SchemeCard
            name="PKVY — Organic Farming"
            benefit="₹50,000/ha over 3 years for organic conversion and certification"
            eligibility="Farmer groups of 50+ covering 50+ hectares in a cluster."
            source="nmsa.dac.gov.in"
            sourceUrl="https://nmsa.dac.gov.in"
          />
        </div>
      </ModuleSection>

      {/* Section 6: Data Sources */}
      <ModuleSection label="DATA SOURCES">
        <AnimatedSection>
          <div className="flex flex-wrap gap-3">
            <DataSourceChip name="agrimachinery.nic.in" url="https://agrimachinery.nic.in" />
            <DataSourceChip name="pmkisan.gov.in" url="https://pmkisan.gov.in" />
            <DataSourceChip name="pmfby.gov.in" url="https://pmfby.gov.in" />
            <DataSourceChip name="nabard.org" url="https://nabard.org" />
            <DataSourceChip name="soilhealth.dac.gov.in" url="https://soilhealth.dac.gov.in" />
            <DataSourceChip name="pmksy.gov.in" url="https://pmksy.gov.in" />
            <DataSourceChip name="dahd.nic.in" url="https://dahd.nic.in" />
            <DataSourceChip name="pmmsy.dof.gov.in" url="https://pmmsy.dof.gov.in" />
            <DataSourceChip name="midh.gov.in" url="https://midh.gov.in" />
            <DataSourceChip name="rkvy.nic.in" url="https://rkvy.nic.in" />
            <DataSourceChip name="nmsa.dac.gov.in" url="https://nmsa.dac.gov.in" />
            <DataSourceChip name="fert.nic.in" url="https://fert.nic.in" />
          </div>
        </AnimatedSection>
      </ModuleSection>
    </ModulePageTemplate>
  )
}
