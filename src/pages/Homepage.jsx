import { Link } from 'react-router-dom'
import {
  ShieldOff,
  EyeOff,
  TrendingDown,
  Users,
  Landmark,
  Sprout,
  Heart,
  HardHat,
  GraduationCap,
  Building2,
  MessageCircle,
  MapPin,
  Tractor,
  ArrowRight,
} from 'lucide-react'
import StatCounter from '../components/StatCounter'
import SectionLabel from '../components/SectionLabel'
import AnimatedSection from '../components/AnimatedSection'

const problemCards = [
  {
    icon: ShieldOff,
    title: 'Land Record Fraud',
    description:
      'Citizens pay \u20B92,000\u201310,000 to middlemen for information that should be freely available. Over \u20B910,000 crore annually lost to land-related fraud nationally.',
  },
  {
    icon: EyeOff,
    title: 'Scheme Unawareness',
    description:
      '40%+ eligible beneficiaries don\u2019t know about government schemes they qualify for \u2014 from crop insurance to housing subsidies to pension plans.',
    source: 'Centre for Policy Research',
  },
  {
    icon: TrendingDown,
    title: 'Agricultural Exploitation',
    description:
      'Farmers sell produce at 15\u201340% below fair market value because they lack real-time mandi price data. Commission agents exploit this information gap daily.',
    source: 'Agmarknet',
  },
  {
    icon: Users,
    title: 'Zero Accountability',
    description:
      'No accessible data on public works progress, GP budgets, fund utilization, or elected representative performance. Citizens can\u2019t hold anyone accountable.',
  },
]

const platformModules = [
  {
    icon: Landmark,
    name: 'Bhoomi Connect',
    english: 'Land Records',
    description: 'Complete land record access \u2014 RTC, mutations, village maps, ownership history',
    stat: '2Cr+ RTCs/year',
    link: '/platform/land',
    size: 'large',
  },
  {
    icon: Sprout,
    name: 'Krishi Yantra & Sahay',
    english: 'Agriculture',
    description: 'Subsidies, machinery, crop loans, soil health, irrigation \u2014 every farm benefit',
    stat: '\u20B910K+ Cr subsidies',
    link: '/platform/agriculture',
    size: 'large',
  },
  {
    icon: Heart,
    name: 'Yojana Mitra',
    english: 'Welfare Schemes',
    description: 'Personalized scheme eligibility for women, children, and all citizens',
    stat: '120+ schemes',
    link: '/platform/schemes',
    size: 'large',
  },
  {
    icon: HardHat,
    name: 'Karyagati',
    english: 'Public Works',
    description: 'Track every rupee, rate every work',
    stat: '5L+ works',
    link: '/platform/works',
    size: 'medium',
  },
  {
    icon: GraduationCap,
    name: 'Vidya Darpan',
    english: 'Education',
    description: 'Schools, scholarships, NEP tracking',
    stat: '15L+ schools',
    link: '/platform/education',
    size: 'medium',
  },
  {
    icon: Building2,
    name: 'Jana Pratinidhi',
    english: 'Governance',
    description: 'Know your representative, hold them accountable',
    stat: '30L+ reps',
    link: '/platform/governance',
    size: 'medium',
  },
  {
    icon: MessageCircle,
    name: 'Grama Sahayak',
    english: 'AI Agent',
    description: 'WhatsApp-based multilingual assistant',
    stat: '12+ languages',
    link: '/platform/ai-agent',
    size: 'small',
  },
  {
    icon: MapPin,
    name: 'Grama Data',
    english: 'Village Data',
    description: 'Demographics, facilities, connectivity',
    stat: '6.4L villages',
    link: null,
    size: 'small',
  },
  {
    icon: Tractor,
    name: 'Krishi Infra',
    english: 'Farm Infrastructure',
    description: 'Dairy, poultry, fisheries, storage',
    stat: '10+ schemes',
    link: null,
    size: 'small',
  },
]

const impactStats = [
  { value: '10L+', label: 'Citizens to Empower' },
  { value: '60%', label: 'Middleman Reduction' },
  { value: '30%', label: 'Scheme Uptake Increase' },
  { value: '10-15%', label: 'Farmer Income Boost' },
  { value: '1L+', label: 'Citizen Feedback/Year' },
  { value: '500+', label: 'Developer Community' },
]

const projects = [
  {
    name: 'PublicBook Platform',
    description: 'Open civic data platform',
    status: 'Active',
    color: 'bg-green text-white',
  },
  {
    name: 'AgriConnect',
    description: 'Agricultural market intelligence & price prediction',
    status: 'In Development',
    color: 'bg-saffron text-white',
  },
  {
    name: 'GramaSuraksha',
    description: 'WiFi CSI-based rural sensing',
    status: 'Prototype',
    color: 'bg-navy text-white',
  },
  {
    name: 'Santhe',
    description: 'Mandi data aggregation & price alerts',
    status: 'Prototype',
    color: 'bg-navy text-white',
  },
]

function ModuleCard({ module, index }) {
  const Icon = module.icon
  const isClickable = module.link !== null

  const cardContent = (
    <div
      className={`bg-bg-card border border-border rounded-2xl p-6 hover:border-saffron/40 hover:-translate-y-0.5 transition-all duration-300 h-full flex flex-col ${
        module.size === 'large' ? 'md:col-span-2' : ''
      } ${isClickable ? 'cursor-pointer' : ''}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-lg bg-saffron/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-saffron" />
        </div>
        {isClickable && (
          <ArrowRight className="w-4 h-4 text-text-muted" />
        )}
      </div>
      <p className="text-saffron text-xs font-mono mb-1">{module.name}</p>
      <h3 className="font-heading font-bold text-text-primary text-lg mb-2">
        {module.english}
      </h3>
      <p className="text-text-secondary text-sm mb-4 flex-1">{module.description}</p>
      <span className="inline-block self-start text-xs font-mono text-text-muted bg-bg-card-hover px-3 py-1 rounded-full">
        {module.stat}
      </span>
    </div>
  )

  return (
    <AnimatedSection
      delay={index * 0.05}
      className={module.size === 'large' ? 'md:col-span-2' : ''}
    >
      {isClickable ? (
        <Link to={module.link} className="block h-full">
          {cardContent}
        </Link>
      ) : (
        cardContent
      )}
    </AnimatedSection>
  )
}

export default function Homepage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 noise-bg overflow-hidden">
        {/* India Map SVG Background */}
        <div className="absolute inset-0 flex items-center justify-end pointer-events-none">
          <svg
            viewBox="0 0 600 700"
            className="w-[500px] md:w-[700px] h-auto opacity-[0.035] mr-[-50px] md:mr-[5%]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M205 45 L215 35 L235 30 L255 25 L270 30 L285 25 L300 20 L315 25 L330 30 L345 25 L360 20 L375 30 L385 40 L395 35 L410 40 L420 50 L430 55 L440 65 L445 80 L450 95 L445 110 L455 115 L465 125 L475 120 L485 130 L490 145 L495 155 L500 170 L495 180 L485 185 L480 195 L475 210 L465 215 L455 225 L450 240 L445 255 L440 270 L430 280 L420 290 L415 305 L410 320 L400 335 L395 350 L390 365 L380 375 L370 385 L365 400 L360 415 L350 425 L340 435 L335 445 L330 460 L320 470 L310 480 L300 490 L290 500 L280 510 L270 520 L260 530 L250 540 L245 555 L240 570 L235 585 L225 590 L215 600 L210 615 L205 625 L195 630 L185 625 L175 615 L170 600 L165 585 L160 570 L150 565 L140 555 L135 540 L130 525 L125 510 L120 495 L115 480 L110 465 L105 455 L100 440 L95 425 L90 410 L85 400 L90 385 L95 370 L100 355 L110 345 L120 335 L125 320 L130 305 L140 295 L145 280 L150 265 L155 250 L160 240 L165 225 L170 215 L175 200 L170 185 L165 175 L160 160 L155 145 L150 130 L155 115 L160 100 L165 90 L175 80 L185 70 L195 60 L205 45Z"
              className="text-text-primary"
            />
            <path
              d="M150 130 L140 120 L130 115 L120 110 L110 105 L100 100 L95 90 L100 80 L110 75 L120 70 L130 75 L140 80 L150 90 L155 100 L155 115 L150 130Z"
              className="text-text-primary"
            />
            <path
              d="M435 65 L445 55 L455 60 L465 70 L470 80 L475 95 L470 105 L460 110 L450 110 L445 100 L445 80 L435 65Z"
              className="text-text-primary"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-32 md:py-0">
          <AnimatedSection>
            <h1 className="font-heading font-[900] text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-text-primary max-w-4xl">
              India's Public Information.
              <br />
              <span className="text-saffron">Finally Public.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl mt-6 leading-relaxed">
              Land records. Government schemes. Agricultural subsidies. Public works. Elected
              representatives. All in one place, for every village, in every language.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                to="/platform"
                className="inline-flex items-center px-8 py-4 bg-saffron text-white font-heading font-bold rounded-xl hover:bg-saffron-dark transition-colors text-sm md:text-base"
              >
                Explore the Platform
              </Link>
              <Link
                to="/proposal"
                className="inline-flex items-center px-8 py-4 border border-saffron text-saffron font-heading font-bold rounded-xl hover:bg-saffron/10 transition-colors text-sm md:text-base"
              >
                Read Our Proposal
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.45}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-3xl">
              <StatCounter end={640000} suffix="+" label="Villages to Cover" />
              <StatCounter end={120} suffix="+" label="Government Schemes Mapped" />
              <StatCounter end={900} suffix="M+" label="Rural Citizens to Serve" />
              <StatCounter end={12} suffix="+" label="Indian Languages Planned" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Problem Section */}
      <section data-testid="problem-section" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <SectionLabel label="THE PROBLEM" />
            <h2 className="font-heading font-[900] text-3xl md:text-5xl text-text-primary mt-4 max-w-3xl mx-auto">
              {'\u20B9'}10,000 Crore Lost Every Year to Information Asymmetry
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problemCards.map((card, i) => {
              const Icon = card.icon
              return (
                <AnimatedSection key={card.title} delay={i * 0.1}>
                  <div className="bg-bg-card border border-border rounded-2xl p-6 border-l-4 border-l-saffron h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-saffron/10 flex items-center justify-center shrink-0 mt-1">
                        <Icon className="w-5 h-5 text-saffron" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-text-primary text-lg mb-2">
                          {card.title}
                        </h3>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {card.description}
                        </p>
                        {card.source && (
                          <p className="text-text-muted text-xs mt-3 font-mono">
                            Source: {card.source}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Platform Overview Section */}
      <section data-testid="platform-section" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <SectionLabel label="THE PLATFORM" />
            <h2 className="font-heading font-[900] text-3xl md:text-5xl text-text-primary mt-4">
              9 Modules. One Platform. Every Village.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {platformModules.map((module, i) => (
              <ModuleCard key={module.name} module={module} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <SectionLabel label="THE IMPACT" />
            <h2 className="font-heading font-[900] text-3xl md:text-5xl text-text-primary mt-4">
              The Change We're Building Toward
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {impactStats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.08}>
                <div className="bg-bg-card border border-border rounded-2xl p-8 text-center">
                  <div className="font-heading font-[900] text-3xl text-saffron mb-2">
                    {stat.value}
                  </div>
                  <p className="text-text-secondary text-sm">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <SectionLabel label="OUR INITIATIVES" />
            <h2 className="font-heading font-[900] text-3xl md:text-5xl text-text-primary mt-4">
              What We're Building
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, i) => (
              <AnimatedSection key={project.name} delay={i * 0.1}>
                <div className="bg-bg-card border border-border rounded-2xl p-6 hover:border-saffron/40 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading font-bold text-text-primary text-lg">
                      {project.name}
                    </h3>
                    <span
                      className={`text-xs font-mono px-3 py-1 rounded-full ${project.color}`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm">{project.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
