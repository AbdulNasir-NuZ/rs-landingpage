'use client'

import SpotlightCard from '@/components/motion/spotlight-card'
import { m, useReducedMotion } from 'framer-motion'
import { premiumEase } from '@/components/motion/animated-section'

export default function Features() {
  const reducedMotion = useReducedMotion()

  const essentialFeatures = [
    {
      badge: 'Collab Hub',
      title: 'Scalable ways to build & collaborate on startups',
      description: 'Find teammates, build products, and launch MVPs with growth-minded people without noise or distraction.',
      // 3D Keyhole / Disc graphic (Screenshot 2 Card 1)
      illustration: (
        <div className="relative flex h-48 w-full items-center justify-center overflow-hidden pt-4">
          <div className="relative flex flex-col items-center">
            {/* Top disc */}
            <div className="relative flex h-20 w-44 items-center justify-center rounded-[50%] bg-gradient-to-b from-[#8B7AFF] to-[#6A53FF] shadow-[0_10px_30px_rgba(106,83,255,0.6)] border border-white/30">
              <div className="h-6 w-3 rounded-full bg-[#0d0f1a] shadow-inner" />
            </div>
            {/* Stacked discs */}
            <div className="-mt-14 h-16 w-52 rounded-[50%] bg-gradient-to-b from-[#6A53FF] to-[#4532B8] opacity-80 shadow-lg border border-white/10" />
            <div className="-mt-12 h-14 w-60 rounded-[50%] bg-gradient-to-b from-[#4532B8] to-[#251A78] opacity-60 shadow-lg border border-white/5" />
          </div>
        </div>
      ),
    },
    {
      badge: 'Funding Engine',
      title: 'Unique technology to connect founders & investors',
      description: 'Get matched with investors based on verified progress, milestone execution, and real traction metrics.',
      // 3D Stacked Coins graphic (Screenshot 2 Card 2)
      illustration: (
        <div className="relative flex h-48 w-full items-center justify-center overflow-hidden pt-4">
          <div className="relative grid grid-cols-3 gap-3 items-center">
            <div className="flex flex-col gap-1 items-center">
              <div className="h-6 w-12 rounded-[50%] bg-[#8B7AFF] border border-white/30 shadow-md" />
              <div className="h-6 w-12 rounded-[50%] bg-[#6A53FF] border border-white/20 shadow-md" />
              <div className="h-6 w-12 rounded-[50%] bg-[#4532B8] border border-white/10 shadow-md" />
            </div>
            <div className="flex flex-col gap-1 items-center -translate-y-3">
              <div className="flex h-10 w-14 items-center justify-center rounded-[50%] bg-gradient-to-b from-white via-[#BEB4FF] to-[#6A53FF] shadow-[0_0_20px_rgba(139,122,255,0.8)] border border-white">
                <span className="text-xs font-bold text-[#0d0f1a]">⚡</span>
              </div>
              <div className="h-7 w-14 rounded-[50%] bg-[#6A53FF] border border-white/30 shadow-md" />
              <div className="h-7 w-14 rounded-[50%] bg-[#4532B8] border border-white/20 shadow-md" />
              <div className="h-7 w-14 rounded-[50%] bg-[#251A78] border border-white/10 shadow-md" />
            </div>
            <div className="flex flex-col gap-1 items-center">
              <div className="h-6 w-12 rounded-[50%] bg-[#8B7AFF] border border-white/30 shadow-md" />
              <div className="h-6 w-12 rounded-[50%] bg-[#6A53FF] border border-white/20 shadow-md" />
            </div>
          </div>
        </div>
      ),
    },
    {
      badge: 'Startup Sandbox',
      title: 'Manage your milestones swiftly and efficiently',
      description: 'Four-week startup challenges where ideas become products. Launch MVPs, pitch on Demo Day, and scale.',
      // 3D Horizontal Card Layers graphic (Screenshot 2 Card 3)
      illustration: (
        <div className="relative flex h-48 w-full items-center justify-center overflow-hidden pt-4">
          <div className="flex flex-col gap-2.5 w-56">
            <div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-[#8B7AFF] to-[#6A53FF] px-4 py-2.5 shadow-[0_5px_20px_rgba(106,83,255,0.4)] border border-white/30">
              <div className="h-4 w-4 rounded-full bg-white/80" />
              <div className="h-2 w-24 rounded-full bg-white/60" />
            </div>
            <div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-[#6A53FF] to-[#4532B8] px-4 py-2.5 shadow-md border border-white/15">
              <div className="h-4 w-4 rounded-full bg-white/60" />
              <div className="h-2 w-28 rounded-full bg-white/40" />
            </div>
            <div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-[#4532B8] to-[#251A78] px-4 py-2.5 shadow-md border border-white/10">
              <div className="h-4 w-4 rounded-full bg-white/40" />
              <div className="h-2 w-20 rounded-full bg-white/20" />
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="features" className="relative py-16 sm:py-20 lg:py-24 bg-transparent overflow-hidden">
      {/* Luminous Purple Glow Atmosphere - Animated on Visit */}
      <m.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[350px] bg-gradient-to-r from-[#6A53FF]/40 via-[#8B7AFF]/35 to-[#6A53FF]/40 blur-[100px] rounded-full pointer-events-none"
        initial={reducedMotion ? false : { opacity: 0, scale: 0.8 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.2, ease: premiumEase }}
      />
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Luminous Title Pill Badge */}
        <div className="flex flex-col items-center text-center space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center rounded-full border border-[#6A53FF]/40 bg-[#6A53FF]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#BEB4FF] shadow-[0_0_15px_rgba(106,83,255,0.3)]">
            Our Features ✦
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Essential features to <span className="bg-gradient-to-r from-[#BEB4FF] via-[#8B7AFF] to-[#6A53FF] bg-clip-text text-transparent">get started</span>
          </h2>
          <p className="text-sm sm:text-base text-[#9DA5AF] max-w-xl">
            Key features to look for in a reliable growth & collaboration ecosystem.
          </p>
        </div>

        {/* 3 Tall Cards Grid (Matching Screenshot 2) */}
        <m.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          initial={reducedMotion ? false : 'hidden'}
          whileInView={reducedMotion ? undefined : 'show'}
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {essentialFeatures.map((item) => (
            <m.div
              key={item.badge}
              variants={{
                hidden: { opacity: 0, y: 35 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: premiumEase }}
            >
              <SpotlightCard className="motion-card flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-[#13152a]/70 p-8 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.4)] transition-all duration-500 hover:border-[#8B7AFF]/50 hover:shadow-[0_0_50px_rgba(106,83,255,0.25)]">
                <div>
                  <div className="flex justify-center mb-6">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-medium text-[#BEB4FF]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-center text-xl font-bold leading-snug text-foreground mb-4">
                    {item.title}
                  </h3>

                  <p className="text-center text-sm leading-relaxed text-[#9DA5AF]">
                    {item.description}
                  </p>
                </div>

                {/* 3D Illustration */}
                <div className="mt-8">
                  {item.illustration}
                </div>
              </SpotlightCard>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  )
}
