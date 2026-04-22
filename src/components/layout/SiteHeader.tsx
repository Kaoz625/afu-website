import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { pub } from '@/lib/utils'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Values', href: '#values' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Join', href: '#join' },
]

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleLinkClick = () => {
    setMobileOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-afu-black/90 backdrop-blur-sm border-b border-afu-black-border'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={pub('/images/logo/logo.jpg')}
              alt="All For Uniting logo"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-display tracking-widest text-afu-white text-base uppercase">
                All For Uniting
              </span>
              <span className="text-xs text-afu-gray">Social Club</span>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-sm text-afu-white/70 hover:text-afu-red transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-afu-white/70 hover:text-afu-white transition-colors duration-200 p-1"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden bg-afu-black overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-4 pb-4">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={handleLinkClick}
              className="text-sm text-afu-white/70 hover:text-afu-red transition-colors duration-200 py-3 border-b border-afu-black-border last:border-b-0"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
