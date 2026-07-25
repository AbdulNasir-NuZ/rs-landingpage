'use client'

import SpotlightCard from '@/components/motion/spotlight-card'
import { m, useReducedMotion } from 'framer-motion'
import { premiumEase } from '@/components/motion/animated-section'

export default function Journey() {
  const reducedMotion = useReducedMotion()
  const steps = [
    'Join the ecosystem.',
    'Build your profile.',
    'Meet the right people.',
    'Collaborate on opportunities.',
    'Launch your next milestone.',
    'Grow together.',
  ]

  return (
    <section id="journey" className="py-24 md:py-32 relative bg-transparent">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 mb-20">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-[#8B7AFF] shadow-sm">
            Roadmap ✦
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground text-balance">
            Your Journey <span className="bg-gradient-to-r from-[#BEB4FF] to-[#6A53FF] bg-clip-text text-transparent">Starts Here</span>
          </h2>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute bottom-8 left-5 top-8 w-px bg-white/10 sm:left-1/2 sm:-translate-x-1/2" aria-hidden="true" />
          {steps.map((step, index) => (
            <m.div
              key={step}
              className={`relative flex items-center gap-6 pb-10 last:pb-0 sm:gap-12 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
              initial={reducedMotion ? false : { opacity: 0, y: 28 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.7, ease: premiumEase }}
            >
              <m.div
                className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full border border-[#8B7AFF]/40 bg-[#13152a] text-sm font-extrabold text-[#BEB4FF] shadow-[0_0_20px_rgba(106,83,255,0.4)] sm:absolute sm:left-1/2 sm:-translate-x-1/2"
                initial={reducedMotion ? false : { scale: 0.86, opacity: 0 }}
                whileInView={reducedMotion ? undefined : { scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease: premiumEase }}
              >
                {index + 1}
              </m.div>

              <div className="hidden flex-1 sm:block" aria-hidden="true" />

              <SpotlightCard className="motion-card flex-1 sm:max-w-sm rounded-3xl border border-white/10 bg-[#13152a]/70 p-6 sm:p-7 backdrop-blur-2xl transition-all duration-300 hover:border-[#8B7AFF]/50 hover:shadow-[0_0_35px_rgba(139,122,255,0.25)] shadow-2xl">
                <p className="text-base sm:text-lg font-extrabold tracking-tight text-foreground whitespace-nowrap">{step}</p>
              </SpotlightCard>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
