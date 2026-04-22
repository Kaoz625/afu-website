import { useReveal } from '@/hooks/useReveal'
import { pub } from '@/lib/utils'

const values = [
  {
    name: 'Unity',
    description:
      'Every bond we form makes the whole stronger. Unity is not a word — it\'s what happens when we show up.',
    image: pub('/images/ig/ig-11.jpg'),
  },
  {
    name: 'Strength',
    description:
      'We come from resilience. We operate from strength — not anger, not fear. From knowing who we are.',
    image: pub('/images/fb/fb-23.jpg'),
  },
  {
    name: 'Community',
    description:
      'Community is daily work. It\'s the meal you share, the hand you extend, the presence you maintain.',
    image: pub('/images/ig/ig-21.jpg'),
  },
]

export default function ValuesSection() {
  const refs = [useReveal<HTMLDivElement>(), useReveal<HTMLDivElement>(), useReveal<HTMLDivElement>()]

  return (
    <section id="values" className="py-20 md:py-32 bg-afu-black-soft">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="afu-red-line" />
          <h2 className="afu-heading text-5xl md:text-7xl text-afu-white mb-4">
            What We Stand For
          </h2>
          <p className="text-afu-white/50 text-lg">
            Built on conviction. Grounded in Brooklyn.
          </p>
        </div>

        {/* Value blocks */}
        <div className="flex flex-col gap-4">
          {values.map((value, i) => (
            <div
              key={value.name}
              ref={refs[i]}
              className="relative h-64 md:h-80 overflow-hidden group reveal"
            >
              {/* Background image */}
              <img
                src={value.image}
                alt={value.name}
                className="object-cover w-full h-full absolute inset-0 group-hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60" />

              {/* Left red border */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-afu-red z-20" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center px-8 md:px-16 z-10">
                <span className="afu-heading text-7xl md:text-9xl text-afu-white opacity-95 mr-8">
                  {value.name}
                </span>
                <p className="text-afu-white/70 text-base md:text-lg max-w-md">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
