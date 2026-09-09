import { useState, useEffect } from 'react'
import { navLinks } from '../../data/site-data'
import './Header.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`store-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="store-awning">
        <div className="header-content">
          <div className="logo-group">
            <div className="logo-main">Les Merveilles d&apos;Aulnay</div>
            <div className="logo-sub">Aux Délices de la Place</div>
          </div>
          <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            className={`nav-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
