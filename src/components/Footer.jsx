import { Link } from 'react-router-dom'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-primary">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="font-heading font-bold text-xl">
              <span className="text-saffron">Public</span>Book
            </Link>
            <p className="text-text-muted text-sm mt-3 leading-relaxed">
              India's first open civic data platform. Making public information truly public.
            </p>
            <p className="text-text-muted text-xs mt-4">
              PublicBook Technologies Pvt. Ltd.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm text-text-primary mb-4">Platform</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/platform/land" className="text-sm text-text-muted hover:text-text-secondary transition-colors">Land Records</Link>
              <Link to="/platform/agriculture" className="text-sm text-text-muted hover:text-text-secondary transition-colors">Agriculture</Link>
              <Link to="/platform/schemes" className="text-sm text-text-muted hover:text-text-secondary transition-colors">Welfare Schemes</Link>
              <Link to="/platform/works" className="text-sm text-text-muted hover:text-text-secondary transition-colors">Public Works</Link>
              <Link to="/platform/education" className="text-sm text-text-muted hover:text-text-secondary transition-colors">Education</Link>
              <Link to="/platform/governance" className="text-sm text-text-muted hover:text-text-secondary transition-colors">Governance</Link>
              <Link to="/platform/ai-agent" className="text-sm text-text-muted hover:text-text-secondary transition-colors">AI Agent</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm text-text-primary mb-4">Company</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/about" className="text-sm text-text-muted hover:text-text-secondary transition-colors">About</Link>
              <Link to="/proposal" className="text-sm text-text-muted hover:text-text-secondary transition-colors">Proposal</Link>
              <Link to="/sources" className="text-sm text-text-muted hover:text-text-secondary transition-colors">Data Sources</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm text-text-primary mb-4">Connect</h4>
            <div className="flex gap-4 mt-2">
              <a href="https://github.com/publicbook" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors"><Github size={20} /></a>
              <a href="https://linkedin.com/company/publicbook" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors"><Linkedin size={20} /></a>
              <a href="https://twitter.com/publicbook_in" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors"><Twitter size={20} /></a>
              <a href="mailto:hello@publicbook.in" className="text-text-muted hover:text-text-primary transition-colors"><Mail size={20} /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">&copy; 2025 PublicBook Technologies Pvt. Ltd. All rights reserved.</p>
          <p className="text-xs text-text-muted">Built with purpose for 900 million rural Indians.</p>
        </div>
      </div>

      {/* Tricolor accent bar */}
      <div className="flex h-1">
        <div className="flex-1 bg-saffron"></div>
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-green"></div>
      </div>
    </footer>
  )
}
