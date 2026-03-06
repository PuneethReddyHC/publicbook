import ModulePageTemplate, { ModuleSection, SchemeCard, DataSourceChip } from '../components/ModulePageTemplate'
import AnimatedSection from '../components/AnimatedSection'
import { Heart } from 'lucide-react'
import { useState } from 'react'

const tabs = ['Women', 'Children', 'General / Men']

export default function Schemes() {
  const [activeTab, setActiveTab] = useState('Women')

  return (
    <ModulePageTemplate
      icon={Heart}
      name="Yojana Mitra"
      subtitle="Personalized Scheme Eligibility for Every Indian"
      description="Citizens input basic data — age, gender, income, caste, location — and get a personalized list of every government scheme they qualify for. No more missing out on benefits."
    >
      {/* Tab Selector */}
      <ModuleSection label="SCHEME CATEGORIES" title="Browse Benefits by Category">
        <AnimatedSection>
          <div className="flex gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-saffron text-bg-primary'
                    : 'bg-bg-card border border-border text-text-secondary hover:border-saffron/30'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Women's Benefits */}
        {activeTab === 'Women' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SchemeCard
              name="PMMVY — Pradhan Mantri Matru Vandana Yojana"
              benefit="₹5,000 in 3 installments for first live birth"
              eligibility="Pregnant women and lactating mothers for first live birth. Age 19+."
              source="pmmvy.wcd.gov.in"
              sourceUrl="https://pmmvy.wcd.gov.in"
            />
            <SchemeCard
              name="Beti Bachao Beti Padhao"
              benefit="Education support, survival & protection of girl children"
              eligibility="Girl children across all districts, focused on gender-critical districts."
              source="wcd.nic.in/bbbp"
              sourceUrl="https://wcd.nic.in/bbbp"
            />
            <SchemeCard
              name="Sukanya Samriddhi Yojana"
              benefit="8.2% interest on savings for girls under 10 (tax-free)"
              eligibility="Girl children under 10 years. Maximum 2 accounts per family."
              source="India Post"
              sourceUrl="https://www.indiapost.gov.in"
            />
            <SchemeCard
              name="Stand Up India"
              benefit="₹10 Lakh to ₹1 Crore loans for women entrepreneurs"
              eligibility="Women (any caste) or SC/ST borrowers for greenfield enterprises."
              source="standupmitra.in"
              sourceUrl="https://standupmitra.in"
            />
            <SchemeCard
              name="PMAY-G — Housing (Women Priority)"
              benefit="₹1.20-1.30 Lakh housing subsidy, mandatory female ownership"
              eligibility="BPL families with no pucca house. Joint/female ownership mandatory."
              source="pmayg.nic.in"
              sourceUrl="https://pmayg.nic.in"
            />
            <SchemeCard
              name="Gruha Lakshmi (Karnataka)"
              benefit="₹2,000/month for women heads of BPL households"
              eligibility="Women head of household in Karnataka, BPL category."
              source="Karnataka State Government"
            />
            <SchemeCard
              name="Bhagya Lakshmi (Karnataka)"
              benefit="₹25,000 on birth of girl child + ₹1,00,000 at age 18"
              eligibility="BPL families in Karnataka with annual income below ₹25,000."
              source="Karnataka Women & Child Development"
            />
            <SchemeCard
              name="NCW Listed Ministry Schemes"
              benefit="40+ schemes including Sanchar Shakti, Mahila Shakti Kendra, Mahila E-Haat"
              eligibility="Various — compiled directory across all ministries."
              source="ncw.gov.in"
              sourceUrl="https://ncw.gov.in"
            />
          </div>
        )}

        {/* Children's Benefits */}
        {activeTab === 'Children' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SchemeCard
              name="ICDS — Integrated Child Development Services"
              benefit="Nutrition, immunization, pre-school education via 14 lakh Anganwadis"
              eligibility="Children 0-6 years, pregnant women, lactating mothers."
              source="wcd.nic.in"
              sourceUrl="https://wcd.nic.in"
            />
            <SchemeCard
              name="POSHAN Abhiyaan"
              benefit="Malnutrition reduction — stunting and wasting dashboards"
              eligibility="All districts. Targets children under 6, pregnant women."
              source="poshanabhiyaan.gov.in"
              sourceUrl="https://poshanabhiyaan.gov.in"
            />
            <SchemeCard
              name="Balika Samriddhi Yojana"
              benefit="₹500 birth grant + ₹300–₹1,000/year scholarships"
              eligibility="Girl children born in BPL families. Up to 2 girls per family."
              source="wcd.nic.in"
            />
            <SchemeCard
              name="PM POSHAN (Mid-Day Meal)"
              benefit="Free hot cooked meals with nutrition data for school children"
              eligibility="Students in government and government-aided schools (Classes 1-8)."
              source="education.gov.in"
              sourceUrl="https://education.gov.in"
            />
            <SchemeCard
              name="National Scholarship Portal"
              benefit="100+ scholarships aggregated — pre-matric, post-matric, merit, means"
              eligibility="Students from Class 1 to PhD level based on merit, income, category."
              source="scholarships.gov.in"
              sourceUrl="https://scholarships.gov.in"
            />
            <SchemeCard
              name="Samagra Shiksha Abhiyan"
              benefit="School infrastructure, teacher training, inclusive education support"
              eligibility="All government schools from pre-school to Class 12."
              source="samagra.education.gov.in"
            />
          </div>
        )}

        {/* General / Men's Benefits */}
        {activeTab === 'General / Men' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SchemeCard
              name="Ayushman Bharat — PM-JAY"
              benefit="₹5 Lakh/year health insurance for bottom 40% families"
              eligibility="SECC-listed families (rural) and occupational categories (urban)."
              source="pmjay.gov.in"
              sourceUrl="https://pmjay.gov.in"
            />
            <SchemeCard
              name="PMAY-G — Housing"
              benefit="₹1.20 Lakh (plain) to ₹1.30 Lakh (hilly) for pucca house construction"
              eligibility="Houseless or living in kutcha/dilapidated house. SECC-2011 data based."
              source="pmayg.nic.in"
              sourceUrl="https://pmayg.nic.in"
            />
            <SchemeCard
              name="PM Jeevan Jyoti Bima Yojana"
              benefit="₹2 Lakh life insurance at ₹436/year premium"
              eligibility="Ages 18-50, with a savings bank account."
              source="jansuraksha.gov.in"
              sourceUrl="https://jansuraksha.gov.in"
            />
            <SchemeCard
              name="PM Suraksha Bima Yojana"
              benefit="₹2 Lakh accident cover at ₹20/year premium"
              eligibility="Ages 18-70, with a savings bank account."
              source="jansuraksha.gov.in"
            />
            <SchemeCard
              name="Atal Pension Yojana"
              benefit="₹1,000-5,000/month guaranteed pension after 60"
              eligibility="Ages 18-40, unorganized sector workers, non-income tax payers."
              source="npscra.nsdl.co.in"
              sourceUrl="https://npscra.nsdl.co.in"
            />
            <SchemeCard
              name="MGNREGA"
              benefit="100 days guaranteed employment per household per year"
              eligibility="Any rural household adult willing to do unskilled manual work."
              source="nrega.nic.in"
              sourceUrl="https://nrega.nic.in"
            />
            <SchemeCard
              name="IGNOAPS — Old Age Pension"
              benefit="₹200-500/month pension for senior citizens (60+ BPL)"
              eligibility="BPL citizens aged 60+. Higher amount for 80+."
              source="nsap.nic.in"
            />
            <SchemeCard
              name="UDID — Disability Support"
              benefit="Unique Disability ID + disability pension + assistive devices"
              eligibility="Persons with 40%+ disability as certified by medical board."
              source="swavlambancard.gov.in"
            />
          </div>
        )}
      </ModuleSection>

      {/* Data Sources */}
      <ModuleSection label="DATA SOURCES">
        <AnimatedSection>
          <div className="flex flex-wrap gap-3">
            <DataSourceChip name="myscheme.gov.in" url="https://myscheme.gov.in" />
            <DataSourceChip name="wcd.nic.in" url="https://wcd.nic.in" />
            <DataSourceChip name="pmjay.gov.in" url="https://pmjay.gov.in" />
            <DataSourceChip name="pmayg.nic.in" url="https://pmayg.nic.in" />
            <DataSourceChip name="nrega.nic.in" url="https://nrega.nic.in" />
            <DataSourceChip name="scholarships.gov.in" url="https://scholarships.gov.in" />
            <DataSourceChip name="jansuraksha.gov.in" url="https://jansuraksha.gov.in" />
            <DataSourceChip name="ncw.gov.in" url="https://ncw.gov.in" />
            <DataSourceChip name="poshanabhiyaan.gov.in" url="https://poshanabhiyaan.gov.in" />
          </div>
        </AnimatedSection>
      </ModuleSection>
    </ModulePageTemplate>
  )
}
