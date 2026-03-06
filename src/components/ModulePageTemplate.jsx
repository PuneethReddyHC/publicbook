import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import SectionLabel from './SectionLabel'

export default function ModulePageTemplate({ icon: Icon, name, subtitle, description, children }) {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden noise-bg">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <Link to="/platform" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-saffron transition-colors mb-8">
            <ArrowLeft size={16} /> Back to Platform
          </Link>
          <div className="flex items-center gap-4 mb-6">
            {Icon && <div className="w-14 h-14 rounded-2xl bg-saffron/10 border border-saffron/20 flex items-center justify-center"><Icon className="text-saffron" size={28} /></div>}
            <div>
              <h1 className="font-heading font-[900] text-3xl md:text-5xl text-text-primary">{name}</h1>
              {subtitle && <p className="text-saffron font-medium text-lg mt-1">{subtitle}</p>}
            </div>
          </div>
          <p className="text-text-secondary text-lg max-w-3xl leading-relaxed">{description}</p>
        </div>
      </section>

      {children}
    </div>
  )
}

export function ModuleSection({ label, title, children }) {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          {label && <SectionLabel label={label} />}
          {title && <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-primary mb-8">{title}</h2>}
        </AnimatedSection>
        {children}
      </div>
    </section>
  )
}

export function FeatureCard({ icon: Icon, title, description, source }) {
  return (
    <AnimatedSection>
      <div className="bg-bg-card border border-border rounded-2xl p-6 hover:border-saffron/30 hover:-translate-y-0.5 transition-all duration-300">
        {Icon && <div className="w-10 h-10 rounded-xl bg-saffron/10 flex items-center justify-center mb-4"><Icon className="text-saffron" size={20} /></div>}
        <h3 className="font-heading font-bold text-lg text-text-primary mb-2">{title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
        {source && <p className="text-text-muted text-xs mt-3 font-mono">Source: {source}</p>}
      </div>
    </AnimatedSection>
  )
}

export function SchemeCard({ name, benefit, eligibility, source, sourceUrl }) {
  return (
    <AnimatedSection>
      <div className="bg-bg-card border border-border rounded-2xl p-6 hover:border-saffron/30 transition-all duration-300">
        <h3 className="font-heading font-bold text-base text-text-primary mb-2">{name}</h3>
        <p className="text-saffron text-sm font-semibold mb-2">{benefit}</p>
        <p className="text-text-secondary text-sm leading-relaxed mb-3">{eligibility}</p>
        {source && (
          <p className="text-text-muted text-xs font-mono">
            Source: {sourceUrl ? <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="text-saffron/70 hover:text-saffron underline">{source}</a> : source}
          </p>
        )}
      </div>
    </AnimatedSection>
  )
}

export function DataSourceChip({ name, url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      className="inline-flex items-center px-4 py-2 bg-bg-card border border-border rounded-full text-xs font-mono text-text-secondary hover:border-saffron/30 hover:text-saffron transition-all">
      {name}
    </a>
  )
}
