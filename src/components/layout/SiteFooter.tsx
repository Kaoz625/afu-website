import { Instagram, Facebook } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Values', href: '#values' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Join', href: '#join' },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/allforunitingsc/',
    icon: Instagram,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/AllForUnitingFamily',
    icon: Facebook,
  },
]

export default function SiteFooter() {
  return (
    <footer className="bg-afu-black-soft border-t border-afu-black-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Three-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Col 1: Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo/logo.jpg"
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
            <p className="text-sm italic text-afu-white/60 max-w-xs">
              United, Anything Is Possible
            </p>
          </div>

          {/* Col 2: Nav links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-afu-gray mb-4">
              Navigate
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-afu-white/60 hover:text-afu-red transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Social links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-afu-gray mb-4">
              Follow Us
            </h3>
            <ul className="flex flex-col gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-afu-white/60 hover:text-afu-red transition-colors duration-200"
                  >
                    <Icon size={16} />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-afu-black-border text-center">
          <p className="text-xs text-afu-gray">
            &copy; 2025 All For Uniting Social Club. Brooklyn, NY.
          </p>
        </div>
      </div>
    </footer>
  )
}
