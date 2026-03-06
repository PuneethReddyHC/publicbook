import AnimatedSection from '../components/AnimatedSection'
import SectionLabel from '../components/SectionLabel'
import { ExternalLink } from 'lucide-react'

const categories = [
  {
    name: 'Agriculture & Farming',
    color: 'bg-green/10 text-green',
    sources: [
      { name: 'SMAM', fullName: 'Sub-Mission on Agricultural Mechanization', url: 'https://agrimachinery.nic.in', desc: 'Farm machinery subsidies and Custom Hiring Centres directory' },
      { name: 'PM-KISAN', fullName: 'Pradhan Mantri Kisan Samman Nidhi', url: 'https://pmkisan.gov.in', desc: 'Direct benefit transfer of ₹6,000/year to farmer families' },
      { name: 'PMFBY', fullName: 'Pradhan Mantri Fasal Bima Yojana', url: 'https://pmfby.gov.in', desc: 'Crop insurance scheme with premium subsidies' },
      { name: 'NABARD', fullName: 'National Bank for Agriculture & Rural Development', url: 'https://nabard.org', desc: 'Refinance data, KCC norms, and rural credit statistics' },
      { name: 'Agmarknet', fullName: 'Agricultural Marketing Information Network', url: 'https://agmarknet.gov.in', desc: 'Daily mandi prices for agricultural commodities across India' },
      { name: 'eNAM', fullName: 'National Agriculture Market', url: 'https://enam.gov.in', desc: 'Online trading platform connecting APMC mandis nationwide' },
      { name: 'NMSA', fullName: 'National Mission for Sustainable Agriculture', url: 'https://nmsa.dac.gov.in', desc: 'Organic farming (PKVY), soil health, rainfed area development' },
      { name: 'PMKSY', fullName: 'Pradhan Mantri Krishi Sinchai Yojana', url: 'https://pmksy.gov.in', desc: 'Micro-irrigation subsidies — drip and sprinkler systems' },
      { name: 'Soil Health Card', fullName: 'Soil Health Card Scheme', url: 'https://soilhealth.dac.gov.in', desc: 'Farm-level soil testing results and fertilizer recommendations' },
      { name: 'RKVY', fullName: 'Rashtriya Krishi Vikas Yojana', url: 'https://rkvy.nic.in', desc: 'State agricultural plans, agri-infrastructure, innovation' },
    ]
  },
  {
    name: 'Farm Infrastructure',
    color: 'bg-saffron/10 text-saffron',
    sources: [
      { name: 'AHIDF', fullName: 'Animal Husbandry Infrastructure Development Fund', url: 'https://dahd.nic.in', desc: '₹15,000 Cr fund for dairy, poultry, and meat processing' },
      { name: 'PMMSY', fullName: 'Pradhan Mantri Matsya Sampada Yojana', url: 'https://pmmsy.dof.gov.in', desc: 'Fisheries development — ponds, hatcheries, cold storage' },
      { name: 'NLM', fullName: 'National Livestock Mission', url: 'https://dahd.nic.in', desc: 'Livestock breeding, feed, fodder, and extension services' },
      { name: 'MIDH', fullName: 'Mission for Integrated Development of Horticulture', url: 'https://midh.gov.in', desc: 'Poly-houses, shade-nets, precision farming subsidies' },
    ]
  },
  {
    name: 'Welfare & Social',
    color: 'bg-pink-500/10 text-pink-400',
    sources: [
      { name: 'ICDS', fullName: 'Integrated Child Development Services', url: 'https://wcd.nic.in', desc: 'Nutrition, immunization, pre-school via 14 lakh Anganwadis' },
      { name: 'BBBP', fullName: 'Beti Bachao Beti Padhao', url: 'https://wcd.nic.in/bbbp', desc: 'Girl child education, survival, and protection' },
      { name: 'POSHAN', fullName: 'POSHAN Abhiyaan', url: 'https://poshanabhiyaan.gov.in', desc: 'National nutrition mission — stunting and malnutrition data' },
      { name: 'PMMVY', fullName: 'Pradhan Mantri Matru Vandana Yojana', url: 'https://pmmvy.wcd.gov.in', desc: '₹5,000 maternity benefit for first live birth' },
      { name: 'Sukanya Samriddhi', fullName: 'Sukanya Samriddhi Yojana', url: 'https://www.indiapost.gov.in', desc: '8.2% tax-free savings scheme for girl children' },
      { name: 'PMAY-G', fullName: 'Pradhan Mantri Awaas Yojana — Gramin', url: 'https://pmayg.nic.in', desc: 'Rural housing scheme — ₹1.20-1.30 lakh per unit' },
      { name: 'Ayushman Bharat', fullName: 'PM Jan Arogya Yojana', url: 'https://pmjay.gov.in', desc: '₹5 lakh/year health insurance for 50 Cr citizens' },
      { name: 'NCW', fullName: 'National Commission for Women', url: 'https://ncw.gov.in', desc: 'Directory of 40+ ministry schemes for women' },
    ]
  },
  {
    name: 'Employment & Income',
    color: 'bg-blue-500/10 text-blue-400',
    sources: [
      { name: 'MGNREGA', fullName: 'Mahatma Gandhi National Rural Employment Guarantee Act', url: 'https://nrega.nic.in', desc: '100 days guaranteed employment — works, wages, muster rolls' },
      { name: 'Atal Pension', fullName: 'Atal Pension Yojana', url: 'https://npscra.nsdl.co.in', desc: '₹1,000-5,000/month pension for unorganized workers' },
    ]
  },
  {
    name: 'Education',
    color: 'bg-purple-500/10 text-purple-400',
    sources: [
      { name: 'NEP 2020', fullName: 'National Education Policy 2020', url: 'https://education.gov.in', desc: 'Policy framework and implementation tracking' },
      { name: 'Samagra Shiksha', fullName: 'Samagra Shiksha Abhiyan', url: 'https://samagra.education.gov.in', desc: 'School education indicators — GER, dropout, pupil-teacher ratio' },
      { name: 'DIKSHA', fullName: 'Digital Infrastructure for Knowledge Sharing', url: 'https://diksha.gov.in', desc: 'QR-coded digital textbooks and teacher training content' },
      { name: 'NSP', fullName: 'National Scholarship Portal', url: 'https://scholarships.gov.in', desc: '100+ scholarships — pre-matric, post-matric, merit, means' },
    ]
  },
  {
    name: 'Land & Geography',
    color: 'bg-emerald-500/10 text-emerald-400',
    sources: [
      { name: 'BhoomiMaps', fullName: 'Karnataka Land Records (BhoomiMaps)', url: 'https://landrecords.karnataka.gov.in', desc: 'RTC, mutations, village maps for Karnataka' },
      { name: 'K-GIS', fullName: 'Karnataka GIS / KSRSAC', url: 'https://kgis.ksrsac.in', desc: 'Geospatial data — village boundaries, land use, water bodies' },
      { name: 'Survey of India', fullName: 'Survey of India', url: 'https://surveyofindia.gov.in', desc: 'Topographic maps, CORS network, geodetic data' },
    ]
  },
  {
    name: 'Governance',
    color: 'bg-amber-500/10 text-amber-400',
    sources: [
      { name: 'eGramSwaraj', fullName: 'eGramSwaraj', url: 'https://egramswaraj.gov.in', desc: 'Panchayat works, budgets, fund release, Gram Sabha records' },
      { name: 'LGD', fullName: 'Local Government Directory', url: 'https://lgdirectory.gov.in', desc: 'Complete directory of all local bodies in India' },
      { name: 'Karnataka SEC', fullName: 'Karnataka State Election Commission', url: 'https://sec.karnataka.gov.in', desc: 'Voter rolls, election data, reservation schedules' },
      { name: 'MyScheme', fullName: 'MyScheme Portal', url: 'https://myscheme.gov.in', desc: 'Government scheme discovery and eligibility engine' },
      { name: 'Seva Sindhu', fullName: 'Seva Sindhu (Karnataka)', url: 'https://sevasindhu.karnataka.gov.in', desc: 'Karnataka e-services portal — certificates, permits, licenses' },
    ]
  },
  {
    name: 'Data & Technology',
    color: 'bg-cyan-500/10 text-cyan-400',
    sources: [
      { name: 'OGD', fullName: 'Open Government Data Platform', url: 'https://data.gov.in', desc: 'India\'s open data portal with 4L+ datasets' },
      { name: 'NDSAP', fullName: 'National Data Sharing and Accessibility Policy', url: 'https://data.gov.in/ndsap', desc: 'Policy framework for government data sharing' },
      { name: 'DPDPA', fullName: 'Digital Personal Data Protection Act 2023', url: 'https://meity.gov.in', desc: 'India\'s data protection law — compliance framework' },
      { name: 'Sarvam AI', fullName: 'Sarvam AI — Full-Stack Indic Language AI', url: 'https://sarvam.ai', desc: 'Speech-to-text, translation, and text-to-speech for 12+ Indian languages' },
      { name: 'DigiLocker/UMANG', fullName: 'DigiLocker & UMANG', url: 'https://digilocker.gov.in', desc: 'Digital document storage and unified mobile governance' },
    ]
  },
  {
    name: 'Research & Validation',
    color: 'bg-rose-500/10 text-rose-400',
    sources: [
      { name: 'Census India', fullName: 'Office of the Registrar General & Census Commissioner', url: 'https://censusindia.gov.in', desc: 'Population, demographic, and socioeconomic data' },
      { name: 'CPR India', fullName: 'Centre for Policy Research', url: 'https://cprindia.org', desc: 'Policy research on governance, urbanization, and welfare' },
      { name: 'PIB Fact Check', fullName: 'Press Information Bureau Fact Check', url: 'https://factcheck.pib.gov.in', desc: 'Government fact-checking for viral misinformation' },
      { name: 'CEDA Ashoka', fullName: 'Centre for Economic Data & Analysis, Ashoka University', url: 'https://ceda.ashoka.edu.in', desc: 'Economic data analysis and research datasets' },
    ]
  },
]

export default function Sources() {
  const totalSources = categories.reduce((sum, cat) => sum + cat.sources.length, 0)

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden noise-bg">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <AnimatedSection>
            <SectionLabel label="Transparency" />
            <h1 className="font-heading font-[900] text-4xl md:text-6xl text-text-primary mb-6">
              Every Claim. Every Source.<br />
              <span className="text-saffron">Full Transparency.</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-3xl leading-relaxed">
              PublicBook aggregates data from {totalSources} verified government portals and research institutions.
              Every data point on our platform links back to its official source.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Category summary */}
      <section className="py-12 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map(cat => (
                <span key={cat.name} className={`px-4 py-2 rounded-full text-sm font-medium ${cat.color}`}>
                  {cat.name} ({cat.sources.length})
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* All sources by category */}
      {categories.map((cat, catIdx) => (
        <section key={cat.name} className={`py-12 md:py-16 ${catIdx % 2 === 0 ? '' : 'bg-bg-card/30'}`}>
          <div className="max-w-[1200px] mx-auto px-6">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-8">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${cat.color}`}>{cat.sources.length} sources</span>
                <h2 className="font-heading font-bold text-xl md:text-2xl text-text-primary">{cat.name}</h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cat.sources.map((source, i) => (
                <AnimatedSection key={source.name} delay={i * 0.05}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-bg-card border border-border rounded-2xl p-5 hover:border-saffron/30 hover:-translate-y-0.5 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-heading font-bold text-text-primary group-hover:text-saffron transition-colors">{source.name}</span>
                          <ExternalLink size={14} className="text-text-muted group-hover:text-saffron transition-colors shrink-0" />
                        </div>
                        <p className="text-text-muted text-xs font-mono mb-2 truncate">{source.fullName}</p>
                        <p className="text-text-secondary text-sm leading-relaxed">{source.desc}</p>
                        <p className="text-saffron/60 text-xs font-mono mt-2 truncate">{source.url.replace('https://', '')}</p>
                      </div>
                    </div>
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-text-secondary text-lg mb-2">
              Total: <span className="text-saffron font-bold">{totalSources} verified data sources</span> across {categories.length} categories.
            </p>
            <p className="text-text-muted text-sm">
              All data is sourced from official government portals and verified research institutions. No proprietary or paywalled data is used.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
