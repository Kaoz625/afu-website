import { MapPin } from 'lucide-react'
import { pub } from '@/lib/utils'
import { useEvents } from '@/hooks/useEvents'
import { useReveal } from '@/hooks/useReveal'
import { formatEventDate } from '@/lib/utils'
import type { Event } from '@/types/event'

function EventCard({ event }: { event: Event }) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className="bg-afu-black-card border border-afu-black-border border-l-2 border-l-afu-red overflow-hidden group reveal"
    >
      <div className="overflow-hidden">
        <img
          src={pub(event.image_url ?? '/images/fb/fb-01.jpg')}
          alt={event.title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-5">
        <p className="text-afu-red text-xs font-semibold tracking-widest uppercase mb-1">
          {formatEventDate(event.date)}
        </p>
        <h3 className="text-afu-white font-semibold text-xl mb-1">
          {event.title}
        </h3>
        <div className="text-afu-white/50 text-sm flex items-center gap-1">
          <MapPin size={14} />
          <span>{event.location}</span>
        </div>
        {event.description && (
          <p className="text-afu-white/60 text-sm mt-2 line-clamp-2">
            {event.description}
          </p>
        )}
      </div>
    </div>
  )
}

function SkeletonCard() {
  return (
    <div className="bg-afu-black-card border border-afu-black-border overflow-hidden animate-pulse">
      <div className="w-full h-56 bg-afu-black-soft" />
      <div className="p-5 space-y-3">
        <div className="h-3 w-24 bg-afu-black-soft rounded" />
        <div className="h-5 w-3/4 bg-afu-black-soft rounded" />
        <div className="h-3 w-1/2 bg-afu-black-soft rounded" />
      </div>
    </div>
  )
}

export default function EventsSection() {
  const headerRef = useReveal<HTMLDivElement>()
  const { data: events, isLoading, isError } = useEvents()

  return (
    <section id="events" className="py-20 md:py-32 bg-afu-black">
      <div className="section-container">
        {/* Header */}
        <div
          ref={headerRef}
          className="mb-12 md:mb-16 reveal"
        >
          <span className="afu-red-line" />
          <h2 className="afu-heading text-5xl md:text-7xl text-afu-white mb-2">
            Events &amp; Impact
          </h2>
          <p className="text-afu-white/50 text-lg">Where we show up.</p>
        </div>

        {/* Loading state */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[0, 1, 2, 3].map((i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {/* Error state */}
        {isError && (
          <p className="text-center text-afu-white/50 text-base">
            Check back soon for upcoming events.
          </p>
        )}

        {/* Events grid */}
        {!isLoading && !isError && events && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.slice(0, 4).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
