import { useState, type FormEvent } from 'react'
import { useMutation } from '@tanstack/react-query'
import { Instagram, Facebook, CheckCircle } from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'
import { submitSignup } from '@/services/signups'

export default function JoinSection() {
  const leftRef = useReveal<HTMLDivElement>()
  const rightRef = useReveal<HTMLDivElement>()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const mutation = useMutation({
    mutationFn: submitSignup,
  })

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    mutation.mutate({ name, email, message: message || undefined })
  }

  const inputClass =
    'w-full bg-afu-black border border-afu-black-border text-afu-white px-4 py-3 text-sm focus:outline-none focus:border-afu-red transition-colors'

  return (
    <section id="join" className="py-20 md:py-32 bg-afu-black">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: Messaging + Social */}
          <div
            ref={leftRef}
            className="reveal"
          >
            <span className="afu-red-line" />
            <h2 className="afu-heading text-5xl md:text-6xl text-afu-white mb-4">
              Join the Family
            </h2>
            <p className="text-afu-white/70 text-lg leading-relaxed mb-8">
              This isn't a newsletter. It's an invitation into something real. AFU is built on
              relationships — people who show up, share space, and give back. If that's you, we
              want to know you.
            </p>

            <p className="text-afu-red text-xs font-semibold tracking-widest uppercase mb-4">
              Find Us
            </p>

            <a
              href="https://www.instagram.com/allforunitingsc/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-afu-white/70 hover:text-afu-white transition-colors text-sm mb-3"
            >
              <Instagram size={18} />
              @allforunitingsc
            </a>

            <a
              href="https://www.facebook.com/AllForUnitingFamily"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-afu-white/70 hover:text-afu-white transition-colors text-sm mb-3"
            >
              <Facebook size={18} />
              All For Uniting Family
            </a>
          </div>

          {/* Right: Form */}
          <div
            ref={rightRef}
            className="reveal"
          >
            <div className="bg-afu-black-card border border-afu-black-border p-6 md:p-8">
              {mutation.isSuccess ? (
                <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
                  <CheckCircle size={48} className="text-afu-red" />
                  <p className="text-afu-white text-lg font-semibold">
                    You're in the family now. Welcome.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="flex flex-col gap-4">
                    <input
                      type="text"
                      placeholder="Your name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={inputClass}
                    />
                    <input
                      type="email"
                      placeholder="Your email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputClass}
                    />
                    <textarea
                      placeholder="What brings you to AFU? (optional)"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={inputClass}
                    />

                    {mutation.isError && (
                      <p className="text-afu-red text-sm">
                        {mutation.error instanceof Error
                          ? mutation.error.message
                          : 'Something went wrong. Please try again.'}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={mutation.isPending}
                      className="w-full bg-afu-red text-white py-4 font-semibold tracking-wider text-sm uppercase hover:bg-afu-red-dark transition-colors duration-300 disabled:opacity-50"
                    >
                      {mutation.isPending ? 'Sending...' : 'Join the Family'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
