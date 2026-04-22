import { useReveal } from '@/hooks/useReveal'
import { pub } from '@/lib/utils'

export default function AboutSection() {
  const imageRef = useReveal<HTMLDivElement>()
  const textRef = useReveal<HTMLDivElement>()

  return (
    <section id="about" className="py-20 md:py-32 bg-afu-black">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image stack */}
          <div
            ref={imageRef}
            className="reveal-left relative"
          >
            <img
              src={pub('/images/ig/ig-05.jpg')}
              alt="All For Uniting community"
              className="w-full h-96 lg:h-[500px] object-cover"
            />
            <img
              src={pub('/images/fb/fb-09.jpg')}
              alt="AFU gathering"
              className="absolute bottom-[-24px] right-[-24px] w-48 h-48 md:w-56 md:h-56 object-cover border-4 border-afu-red shadow-2xl"
            />
          </div>

          {/* Text */}
          <div
            ref={textRef}
            className="reveal pt-8 lg:pt-0"
          >
            <span className="afu-red-line" />
            <h2 className="afu-heading text-5xl md:text-6xl text-afu-white mb-6">
              Who We Are
            </h2>

            <p className="text-afu-white/75 text-base md:text-lg leading-relaxed mb-4">
              All For Uniting is a Black women-led community organization rooted in Brooklyn. We were built by the people, for the people — not for headlines or grants.
            </p>

            <p className="text-afu-white/75 text-base md:text-lg leading-relaxed mb-4">
              Through events, outreach, food service, and real connection, we show up where it matters. Every gathering, every plate of food, every hand we shake is a statement: we are here, and we are not leaving.
            </p>

            <p className="text-afu-white/75 text-base md:text-lg leading-relaxed mb-4">
              This is not a nonprofit pitch. This is family.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
