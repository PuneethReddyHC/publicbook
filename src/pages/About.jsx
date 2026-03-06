import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import SectionLabel from '../components/SectionLabel'
import { Code, Database, Bot, Satellite, Wifi, ArrowRight } from 'lucide-react'

const prototypes = [
  {
    name: 'Karnataka Land Scraper',
    description: 'Working prototype integrating BhoomiMaps API for RTC data, GeoJSON village boundary extraction, survey number-based lookup, and a web interface for search and visualization.',
    tech: ['Python', 'FastAPI', 'SQLite', 'GeoJSON', 'React'],
    icon: Database,
    status: 'Working',
  },
  {
    name: 'AgriConnect ML',
    description: '1.36 million mandi price rows processed with 112 engineered features. Random Forest model achieving R² ~ 0.81 for agricultural price prediction across major mandis.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'PostgreSQL'],
    icon: Code,
    status: 'Working',
  },
  {
    name: 'WhatsApp AI Agent',
    description: 'Bilingual Kannada/English conversational agent for scheme information. Handles natural language queries about government benefits and eligibility.',
    tech: ['Python', 'Sarvam AI', 'WhatsApp API', 'NLU'],
    icon: Bot,
    status: 'Prototype',
  },
  {
    name: 'Satellite Pipeline',
    description: 'Sentinel-2 satellite imagery processing with Prithvi-EO-2.0 foundation model for crop health monitoring and agricultural land classification.',
    tech: ['Python', 'TensorFlow', 'Sentinel-2', 'Prithvi-EO-2.0'],
    icon: Satellite,
    status: 'Prototype',
  },
  {
    name: 'GramaSuraksha',
    description: 'WiFi CSI (Channel State Information) based sensing for rural security — intrusion detection and activity recognition without cameras using existing WiFi infrastructure.',
    tech: ['Python', 'ESP32', 'TensorFlow Lite', 'WiFi CSI'],
    icon: Wifi,
    status: 'Research',
  },
]

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden noise-bg">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <AnimatedSection>
            <SectionLabel label="About" />
            <h1 className="font-heading font-[900] text-4xl md:text-6xl text-text-primary mb-6">
              Built by Someone Who<br />Knows the Ground
            </h1>
            <p className="text-text-secondary text-lg max-w-3xl leading-relaxed">
              PublicBook isn't a startup pitch born in a boardroom. It's born from the fields of Kolar, the lanes of Mulbagal, and the lived experience of information poverty.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              <div className="lg:col-span-3">
                <SectionLabel label="Founder" />
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-primary mb-6">Puneeth</h2>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    Solo entrepreneur from Bangalore with deep roots in the Kolar-Mulbagal agricultural region of Karnataka.
                    Over 12 months of building prototypes, scraping government portals, training ML models on mandi data,
                    and testing WhatsApp bots with real users in villages.
                  </p>
                  <p>
                    Full-stack developer with expertise in React, Python, TypeScript, and cloud infrastructure.
                    Professional experience in energy market ML applications — bringing the same rigor of data engineering
                    and predictive modeling to civic data.
                  </p>
                  <p>
                    The vision for PublicBook came from watching family members navigate the labyrinth of government services —
                    paying intermediaries for land records, missing crop insurance deadlines, never hearing about schemes
                    they qualified for. This isn't abstract. It's personal.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-bg-card border border-border rounded-2xl p-8 border-l-4 border-l-saffron">
                  <blockquote className="text-text-primary text-lg font-heading font-bold leading-relaxed italic">
                    "900 million rural Indians are hungry for information that's rightfully theirs. We're feeding that hunger."
                  </blockquote>
                  <p className="text-text-muted text-sm mt-4">— Puneeth, Founder</p>
                </div>
                <div className="mt-6 bg-bg-card border border-border rounded-2xl p-6">
                  <h4 className="font-heading font-bold text-sm text-text-primary mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'TensorFlow', 'AWS', 'Docker'].map(t => (
                      <span key={t} className="px-3 py-1 bg-bg-card-hover border border-border rounded-full text-xs font-mono text-text-muted">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Existing Work */}
      <section className="py-16 md:py-20 border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimatedSection>
            <SectionLabel label="Proof of Concept" />
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-primary mb-4">What We've Already Built</h2>
            <p className="text-text-secondary mb-10 max-w-2xl">
              These aren't mockups or slide decks. Every prototype below has working code, real data, and has been tested with actual users.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prototypes.map((proto, i) => (
              <AnimatedSection key={proto.name} delay={i * 0.08}>
                <div className="bg-bg-card border border-border rounded-2xl p-6 hover:border-saffron/30 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-saffron/10 flex items-center justify-center">
                        <proto.icon className="text-saffron" size={20} />
                      </div>
                      <h3 className="font-heading font-bold text-lg text-text-primary">{proto.name}</h3>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      proto.status === 'Working' ? 'bg-green/10 text-green' :
                      proto.status === 'Prototype' ? 'bg-saffron/10 text-saffron' :
                      'bg-navy/20 text-blue-400'
                    }`}>
                      {proto.status}
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed flex-1">{proto.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {proto.tech.map(t => (
                      <span key={t} className="px-2.5 py-1 bg-bg-card-hover border border-border rounded-full text-xs font-mono text-text-muted">{t}</span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-20 border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <SectionLabel label="Mission" />
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-primary mb-6">Why We Exist</h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                Information is power. In rural India, that power sits locked inside government portals, buried in PDFs,
                scattered across 50+ websites, and guarded by middlemen. PublicBook exists to break that lock.
              </p>
              <p className="text-text-secondary leading-relaxed mb-10">
                We believe every Indian citizen has the right to access their own land records, know which government schemes
                they qualify for, track how public money is being spent in their village, and hold their elected representatives
                accountable — without paying a bribe, without speaking English, and without a smartphone.
              </p>
              <Link to="/proposal" className="inline-flex items-center gap-2 px-6 py-3 bg-saffron text-bg-primary font-semibold rounded-[10px] hover:bg-saffron-light transition-colors">
                Read Our Full Proposal <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
