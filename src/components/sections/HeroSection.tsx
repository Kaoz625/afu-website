import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { pub } from '@/lib/utils'

const SLIDES: string[] = [
  pub('/images/fb/fb-01.jpg'),
  pub('/images/fb/fb-05.jpg'),
  pub('/images/fb/fb-09.jpg'),
  pub('/images/fb/fb-15.jpg'),
  pub('/images/ig/ig-01.jpg'),
  pub('/images/ig/ig-05.jpg'),
  pub('/images/ig/ig-11.jpg'),
  pub('/images/ig/ig-21.jpg'),
]

const INTERVAL_MS = 6000

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length)
    }, INTERVAL_MS)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Slideshow background layers */}
      {SLIDES.map((src, index) => (
        <div
          key={src}
          className={[
            'absolute inset-0 bg-cover bg-center transition-opacity ease-in-out',
            index === activeIndex ? 'opacity-100 animate-ken-burns' : 'opacity-0',
          ].join(' ')}
          style={{ backgroundImage: `url('${src}')`, transitionDuration: '1500ms' }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <img
          src={pub('/images/logo/logo.jpg')}
          alt="All For Uniting logo"
          className="h-24 w-24 md:h-32 md:w-32 rounded-full object-cover mx-auto mb-6 border-2 border-afu-red shadow-2xl"
        />

        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl text-afu-white tracking-widest animate-fade-in"
        >
          ALL FOR UNITING
        </h1>

        <p
          className="text-lg md:text-2xl text-afu-white/80 font-light italic mt-4 animate-fade-up"
          style={{ animationDelay: '200ms' }}
        >
          United, Anything Is Possible
        </p>

        <a
          href="#join"
          className="inline-block mt-8 px-8 py-4 bg-afu-red text-white font-semibold tracking-wider text-sm uppercase hover:bg-afu-red-dark transition-colors duration-300 animate-fade-up"
          style={{ animationDelay: '400ms' }}
        >
          Join the Family
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-afu-white/50">
        <ChevronDown size={28} />
      </div>
    </section>
  )
}
