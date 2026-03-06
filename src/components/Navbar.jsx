import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const modules = [
  { path: '/platform/land', name: 'Land Records' },
  { path: '/platform/agriculture', name: 'Agriculture' },
  { path: '/platform/schemes', name: 'Welfare Schemes' },
  { path: '/platform/works', name: 'Public Works' },
  { path: '/platform/education', name: 'Education' },
  { path: '/platform/governance', name: 'Governance' },
  { path: '/platform/ai-agent', name: 'AI Agent' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [platformOpen, setPlatformOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setPlatformOpen(false)
  }, [location])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bg-primary/90 backdrop-blur-xl border-b border-border' : 'bg-transparent'}`}>
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" data-testid="nav-logo" className="flex items-center gap-2 font-heading font-bold text-xl text-text-primary hover:text-saffron transition-colors">
          <span className="text-saffron">Public</span>Book
        </Link>

        <div data-testid="desktop-nav" className="hidden lg:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">Home</Link>
          <div className="relative" onMouseEnter={() => setPlatformOpen(true)} onMouseLeave={() => setPlatformOpen(false)}>
            <Link to="/platform" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1">
              Platform <ChevronDown size={14} />
            </Link>
            {platformOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-bg-card border border-border rounded-xl p-2 shadow-2xl">
                {modules.map(m => (
                  <Link key={m.path} to={m.path} className="block px-4 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-bg-card-hover rounded-lg transition-colors">
                    {m.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/about" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">About</Link>
          <Link to="/proposal" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">Proposal</Link>
          <Link to="/sources" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">Sources</Link>
        </div>

        <div className="hidden lg:block">
          <Link to="/proposal" className="px-5 py-2.5 bg-saffron text-bg-primary text-sm font-semibold rounded-[10px] hover:bg-saffron-light transition-colors">
            Read Proposal
          </Link>
        </div>

        <button data-testid="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-text-primary p-2">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div data-testid="mobile-nav" className="lg:hidden fixed inset-0 top-16 bg-bg-primary/98 backdrop-blur-xl z-40">
          <div className="flex flex-col p-6 gap-4">
            <Link to="/" className="text-lg font-medium text-text-primary py-3 border-b border-border">Home</Link>
            <Link to="/platform" className="text-lg font-medium text-text-primary py-3 border-b border-border">Platform</Link>
            {modules.map(m => (
              <Link key={m.path} to={m.path} className="text-base text-text-secondary py-2 pl-4 border-b border-border">
                {m.name}
              </Link>
            ))}
            <Link to="/about" className="text-lg font-medium text-text-primary py-3 border-b border-border">About</Link>
            <Link to="/proposal" className="text-lg font-medium text-text-primary py-3 border-b border-border">Proposal</Link>
            <Link to="/sources" className="text-lg font-medium text-text-primary py-3 border-b border-border">Sources</Link>
            <Link to="/proposal" className="mt-4 px-5 py-3 bg-saffron text-bg-primary text-center font-semibold rounded-[10px]">
              Read Proposal
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
