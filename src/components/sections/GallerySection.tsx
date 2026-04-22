import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'
import { galleryImages } from '@/data/galleryImages'
import { pub } from '@/lib/utils'

export default function GallerySection() {
  const gridRef = useReveal<HTMLDivElement>()
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const showPrev = () =>
    setSelectedIndex((prev) =>
      prev === null ? null : (prev - 1 + galleryImages.length) % galleryImages.length
    )

  const showNext = () =>
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % galleryImages.length
    )

  useEffect(() => {
    if (selectedIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null)
      else if (e.key === 'ArrowLeft') setSelectedIndex((i) => i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length)
      else if (e.key === 'ArrowRight') setSelectedIndex((i) => i === null ? null : (i + 1) % galleryImages.length)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex])

  return (
    <>
      <section id="gallery" className="py-20 md:py-32 bg-afu-black-soft">
        <div className="section-container">

          {/* Header */}
          <div className="mb-12">
            <span className="afu-red-line" />
            <h2 className="afu-heading text-5xl md:text-7xl text-afu-white mb-2">
              Real Moments
            </h2>
            <p className="text-afu-white/50">Brooklyn. Community. Life.</p>
          </div>

          {/* Masonry grid */}
          <div
            ref={gridRef}
            className="reveal columns-2 md:columns-3 lg:columns-4 gap-2 space-y-2"
          >
            {galleryImages.map((img, index) => (
              <div
                key={img.src}
                className="break-inside-avoid relative overflow-hidden group cursor-pointer"
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  loading="lazy"
                  src={pub(img.src)}
                  alt={img.alt}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedIndex(null)}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          {/* Previous button */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); showPrev() }}
            aria-label="Previous image"
          >
            <ChevronLeft size={48} />
          </button>

          {/* Image */}
          <img
            src={pub(galleryImages[selectedIndex].src)}
            alt={galleryImages[selectedIndex].alt}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next button */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); showNext() }}
            aria-label="Next image"
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </>
  )
}
