import { Link } from 'react-router-dom'
import { Landmark, Sprout, Heart, HardHat, GraduationCap, Building2, MessageCircle, MapPin, Tractor } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import SectionLabel from '../components/SectionLabel'

const modules = [
  {
    id: 'land',
    sanskrit: 'Bhoomi Connect',
    name: 'Land Records',
    icon: Landmark,
    description:
      'Complete land record access for every citizen. Look up RTC (Record of Rights, Tenancy, and Crops) by survey number, track mutation status and ownership history, view digitized village maps and tippan/hissa atlas, verify encumbrance certificates, and visualize village boundaries with GeoJSON mapping.',
    stat: '2 Crore+ RTCs requested annually in Karnataka alone',
    sources: ['BhoomiMaps API', 'K-GIS/KSRSAC', 'State Revenue Portals'],
    link: '/platform/land',
  },
  {
    id: 'agriculture',
    sanskrit: 'Krishi Yantra & Krishi Sahay',
    name: 'Agriculture & Machinery',
    icon: Sprout,
    description:
      'Every agricultural benefit in one place. SMAM subsidies (40-90%), crop loans via KCC at 4%, PM-KISAN tracking, crop insurance calculator, soil health cards, fertilizer subsidies, micro-irrigation schemes, and farm infrastructure support across dairy, poultry, fisheries, and storage.',
    stat: '\u20B910,000+ Crore in agricultural subsidies available annually',
    sources: ['agrimachinery.nic.in', 'pmkisan.gov.in', 'pmfby.gov.in', 'NABARD', 'soilhealth.dac.gov.in'],
    link: '/platform/agriculture',
  },
  {
    id: 'schemes',
    sanskrit: 'Yojana Mitra',
    name: 'Welfare Schemes',
    icon: Heart,
    description:
      'Personalized scheme eligibility for every Indian. Citizens input basic data \u2014 age, gender, income, caste, location \u2014 and receive a curated list of every central and state scheme they qualify for. Covers women\u2019s benefits (PMMVY, Sukanya Samriddhi, Stand Up India), children\u2019s welfare (ICDS, POSHAN, scholarships), and general benefits (Ayushman Bharat, PMAY-G, MGNREGA, pension schemes).',
    stat: '120+ government schemes mapped with eligibility criteria',
    sources: ['myscheme.gov.in', 'wcd.nic.in', 'pmjay.gov.in', 'scholarships.gov.in'],
    link: '/platform/schemes',
  },
  {
    id: 'works',
    sanskrit: 'Karyagati',
    name: 'Public Works Tracker',
    icon: HardHat,
    description:
      'Track every rupee of public expenditure. Real-time monitoring of government works with fund allocation, expenditure tracking, progress updates, and citizen feedback. Covers panchayat works, MGNREGA projects, PMAY-G housing, road construction, and sanitation \u2014 all with geo-tagged evidence and fund flow transparency from Centre to GP level.',
    stat: '5L+ public works projects tracked across states',
    sources: ['egramswaraj.gov.in', 'nrega.nic.in', 'pmayg.nic.in'],
    link: '/platform/works',
  },
  {
    id: 'education',
    sanskrit: 'Vidya Darpan',
    name: 'Education Hub',
    icon: GraduationCap,
    description:
      'Every school, every scholarship, every student metric. Comprehensive education data including UDISE+ school directory, NEP 2020 implementation tracking, 100+ scholarship auto-matching, DIKSHA digital content integration, and higher education institution data with fees and placement information.',
    stat: '15L+ schools in UDISE+ directory',
    sources: ['samagra.education.gov.in', 'diksha.gov.in', 'scholarships.gov.in'],
    link: '/platform/education',
  },
  {
    id: 'governance',
    sanskrit: 'Jana Pratinidhi',
    name: 'Governance',
    icon: Building2,
    description:
      'Know your representative at every level. Multi-tier directory from MP to ward member, reservation data with seat status and rotation history, voter roll verification, Gram Sabha meeting records and resolutions, and MPLADS/MLALADS fund utilization tracking.',
    stat: '30L+ elected representatives across all tiers',
    sources: ['egramswaraj.gov.in', 'sec.karnataka.gov.in', 'lgdirectory.gov.in'],
    link: '/platform/governance',
  },
  {
    id: 'ai-agent',
    sanskrit: 'Grama Sahayak',
    name: 'Citizen AI Agent',
    icon: MessageCircle,
    description:
      'Ask in your language, get answers instantly. WhatsApp-based AI assistant supporting 12+ Indian languages via BHASHINI. Citizens can check land records, find eligible schemes, track public works, and get agricultural advice \u2014 all through natural conversation in their mother tongue.',
    stat: '12+ Indian languages supported',
    sources: ['bhashini.gov.in', 'Sarvam AI'],
    link: '/platform/ai-agent',
  },
  {
    id: 'village-directory',
    sanskrit: 'Grama Data',
    name: 'Village Directory',
    icon: MapPin,
    description:
      'Comprehensive village-level data covering demographics, facilities, connectivity, and development indicators for all 6.4 lakh villages across India. Powered by Census data, LGD directory, and satellite imagery.',
    stat: '6.4L villages mapped',
    sources: ['lgdirectory.gov.in', 'Census India', 'OGD Platform'],
    link: null,
  },
  {
    id: 'farm-infra',
    sanskrit: 'Krishi Infra',
    name: 'Farm Infrastructure',
    icon: Tractor,
    description:
      'Support for rural agricultural infrastructure including dairy (AHIDF), fisheries (PMMSY), poultry and livestock (NLM), horticulture (MIDH), organic farming (PKVY), and warehouse/cold chain facilities (RKVY-RAFTAAR). Subsidy information, eligibility, and application guidance.',
    stat: '10+ infrastructure schemes',
    sources: ['dahd.nic.in', 'pmmsy.dof.gov.in', 'midh.gov.in', 'rkvy.nic.in'],
    link: null,
  },
]

export default function Platform() {
  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 overflow-hidden noise-bg">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <AnimatedSection>
            <SectionLabel label="Platform Overview" />
            <h1 className="font-heading font-[900] text-3xl md:text-5xl lg:text-6xl text-text-primary mb-6">
              The PublicBook Platform
            </h1>
            <p className="text-text-secondary text-lg md:text-xl max-w-3xl leading-relaxed">
              9 integrated modules delivering transparent civic data to every citizen, every village, every panchayat.
              From land records to AI-powered assistance — one unified platform.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Module Cards */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 gap-6">
            {modules.map((mod, index) => (
              <AnimatedSection key={mod.id} delay={index * 0.05}>
                <div className="bg-bg-card border border-border rounded-2xl p-8 hover:border-saffron/30 transition-all duration-300">
                  {/* Icon + Names */}
                  <div className="flex items-start gap-5 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-saffron/10 border border-saffron/20 flex items-center justify-center shrink-0">
                      <mod.icon className="text-saffron" size={28} />
                    </div>
                    <div>
                      <span className="text-saffron font-mono text-sm font-medium tracking-wide">
                        {mod.sanskrit}
                      </span>
                      <h3 className="font-heading font-bold text-xl text-text-primary mt-0.5">
                        {mod.name}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary leading-relaxed mb-5">
                    {mod.description}
                  </p>

                  {/* Stat Badge */}
                  <div className="mb-5">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-saffron/10 text-saffron text-sm font-semibold">
                      {mod.stat}
                    </span>
                  </div>

                  {/* Sources */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {mod.sources.map((source) => (
                      <span
                        key={source}
                        className="inline-block px-3 py-1 rounded-full bg-bg-card-hover border border-border text-xs font-mono text-text-muted"
                      >
                        {source}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  {mod.link && (
                    <Link
                      to={mod.link}
                      className="inline-flex items-center text-saffron font-medium text-sm hover:underline transition-colors"
                    >
                      Learn More &rarr;
                    </Link>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
