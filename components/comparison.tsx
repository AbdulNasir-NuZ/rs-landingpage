'use client'

import { X, Check } from 'lucide-react'
import { m, useReducedMotion } from 'framer-motion'
import { premiumEase } from '@/components/motion/animated-section'

export default function Comparison() {
  const reducedMotion = useReducedMotion()

  const comparisons = [
    { traditional: 'Endless scrolling', rightsignal: 'Purposeful growth' },
    { traditional: 'Followers', rightsignal: 'Meaningful relationships' },
    { traditional: 'Algorithms decide', rightsignal: 'You discover opportunities' },
    { traditional: 'Viral content', rightsignal: 'Valuable conversations' },
    { traditional: 'Entertainment first', rightsignal: 'Growth first' },
    { traditional: 'Ads everywhere', rightsignal: 'No ads' },
    { traditional: 'Random networking', rightsignal: 'Curated ecosystem' },
    { traditional: 'Consuming content', rightsignal: 'Building your future' },
  ]

  return (
    <section id="why-rightsignal" className="py-24 md:py-32 relative bg-[#0d0f1a] overflow-hidden">
      {/* Background Grid - Fades in ON SECTION VISIT */}
      <m.div
        className="absolute inset-0 bg-grid-pattern pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.1 }}
        transition={{ duration: 1.2 }}
      />
      {/* Luminous Purple Glow Dome - Animated on Section Visit */}
      <m.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1050px] h-[450px] bg-gradient-to-r from-[#6A53FF]/45 via-[#8B7AFF]/35 to-[#6A53FF]/45 blur-[150px] rounded-full pointer-events-none"
        initial={reducedMotion ? false : { opacity: 0, scale: 0.8 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.2, ease: premiumEase }}
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 mb-20">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-[#8B7AFF] shadow-sm">
            Comparison ✦
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground text-balance">
            Why <span className="bg-gradient-to-r from-[#BEB4FF] to-[#6A53FF] bg-clip-text text-transparent">RightSignal?</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-[#13152a]/70 p-2 sm:p-6 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-2 gap-4 px-4 py-4 border-b border-white/10 text-sm font-bold uppercase tracking-widest text-[#9DA5AF] text-center">
            <div>Traditional Platforms</div>
            <div className="text-[#BEB4FF] flex items-center justify-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6A53FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#6A53FF]"></span>
              </span>
              RightSignal
            </div>
          </div>
          <div className="divide-y divide-white/5 mt-2">
            {comparisons.map((item) => (
              <div
                key={item.traditional}
                className="grid grid-cols-2 gap-4 px-4 py-4 rounded-xl items-center transition-all duration-300 hover:bg-[#6A53FF]/10 hover:shadow-[0_0_20px_rgba(106,83,255,0.15)]"
              >
                <div className="text-sm sm:text-base text-[#9DA5AF] flex items-center gap-3 pl-4 sm:pl-8">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white/5">
                    <X className="h-3.5 w-3.5 text-[#9DA5AF]/70" />
                  </div>
                  <span>{item.traditional}</span>
                </div>
                <div className="text-sm sm:text-base font-semibold text-foreground flex items-center gap-3 pl-4 sm:pl-8">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#6A53FF]/20 shadow-[0_0_10px_rgba(106,83,255,0.4)]">
                    <Check className="h-3.5 w-3.5 text-[#BEB4FF]" />
                  </div>
                  <span>{item.rightsignal}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
