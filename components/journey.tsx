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
    <section id="journey" className="py-20 md:py-32 bg-transparent">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
            Your Journey Starts Here
          </h2>
        </div>

        <div className="relative mx-auto max-w-2xl">
          <div className="absolute bottom-8 left-5 top-8 w-px bg-border/40 sm:left-1/2 sm:-translate-x-1/2" aria-hidden="true" />
          {steps.map((step, index) => (
            <m.div
              key={step}
              className={`relative flex items-center gap-5 pb-6 last:pb-0 sm:gap-8 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
              initial={reducedMotion ? false : { opacity: 0, y: 28 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.7, ease: premiumEase }}
            >
              <m.div
                className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-primary/45 bg-background text-sm font-semibold text-primary shadow-lg shadow-primary/10 sm:absolute sm:left-1/2 sm:-translate-x-1/2"
                initial={reducedMotion ? false : { scale: 0.86, opacity: 0 }}
                whileInView={reducedMotion ? undefined : { scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease: premiumEase }}
              >
                {index + 1}
              </m.div>

              <div className="hidden flex-1 sm:block" aria-hidden="true" />

              <SpotlightCard className="motion-card flex-1 rounded-xl border border-border/40 bg-card/50 px-6 py-5 transition-colors duration-300 hover:border-primary/50 hover:bg-card/80 sm:max-w-[18rem]">
                <p className="text-lg font-semibold text-foreground">{step}</p>
              </SpotlightCard>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
