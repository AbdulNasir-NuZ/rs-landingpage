'use client'

import { Code2, FileCode, Terminal } from 'lucide-react'
import SpotlightCard from '@/components/motion/spotlight-card'
import { m, useReducedMotion } from 'framer-motion'
import { premiumEase } from '@/components/motion/animated-section'

export default function Problem() {
  const reducedMotion = useReducedMotion()

  const items = [
    {
      icon: FileCode,
      title: 'Simplify ecosystem discovery with clear, distraction free signals.',
    },
    {
      icon: Code2,
      title: 'Easily recruit co founders and team members with minimal effort.',
    },
    {
      icon: Terminal,
      title: 'Supports all growth tracks and industries for seamless collaboration.',
    },
  ]

  const codeSnippet = `import { RightSignal } from '@rightsignal/sdk'

const signal = new RightSignal({
  user_id: 'builder_9402',
  api_key: 'rs_live_7719a9b2c3',
  algorithm: 'NO_ADS_NO_NOISE'
})

const match = await signal.connect({
  goal: 'FIND_COFOUNDER',
  stage: 'BUILDING_MVP',
  skills: ['TypeScript', 'AI_Agents', 'Design']
})

if (match.status === 200) {
  console.log('Connected with zero algorithm noise!')
}`

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-[#0d0f1a]">
      {/* Subtle Grid Pattern inside Green Atmosphere */}
      <m.div
        className="absolute inset-0 bg-grid-pattern-green pointer-events-none opacity-40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        viewport={{ amount: 0.1 }}
        transition={{ duration: 1.2 }}
      />
      {/* Luminous Center Green Glow - Animated on Visit */}
      <m.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[380px] bg-gradient-to-r from-[#2EC866]/35 via-[#00C3FF]/25 to-[#2EC866]/35 blur-[100px] rounded-full pointer-events-none"
        initial={reducedMotion ? false : { opacity: 0, scale: 0.8 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.2, ease: premiumEase }}
      />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Luminous Title Pill Badge (Screenshot 5 Green Badge) */}
        <div className="flex flex-col items-center text-center space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center rounded-full border border-[#2EC866]/40 bg-[#2EC866]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#57E08B] shadow-[0_0_20px_rgba(46,200,102,0.3)]">
            Implementation ✦
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            A simple signal <span className="bg-gradient-to-r from-[#57E08B] via-[#2EC866] to-[#00C3FF] bg-clip-text text-transparent">is all it takes</span>
          </h2>
          <p className="text-sm sm:text-base text-[#9DA5AF] max-w-xl">
            Effortlessly broadcast your goals, recruit talent, and discover your next big milestone.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center max-w-6xl mx-auto">
          {/* Left Column: 3 List Items */}
          <m.div
            className="lg:col-span-6 space-y-4"
            initial={reducedMotion ? false : { opacity: 0, x: -30 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: premiumEase }}
          >
            {items.map((item, idx) => (
              <SpotlightCard
                key={idx}
                className="motion-card rounded-2xl border border-white/10 bg-[#13152a]/80 p-4.5 sm:p-5 backdrop-blur-md shadow-md transition-all duration-300 hover:border-[#2EC866]/40 hover:shadow-[0_0_25px_rgba(46,200,102,0.2)]"
              >
                <div className="flex flex-row items-center gap-4 sm:gap-5">
                  <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 flex-shrink-0 items-center justify-center rounded-2xl bg-[#2EC866]/15 text-[#57E08B] border border-[#2EC866]/30 shadow-sm">
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm lg:text-base font-semibold leading-relaxed text-foreground">
                      {item.title}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </m.div>

          {/* Right Column: Code Terminal Widget */}
          <m.div
            className="lg:col-span-6"
            initial={reducedMotion ? false : { opacity: 0, x: 30 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: premiumEase }}
          >
            <div className="relative rounded-3xl border border-[#2EC866]/40 bg-[#090b14] p-6 shadow-[0_0_50px_rgba(46,200,102,0.2)] backdrop-blur-2xl">
              {/* Window Bar Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#FF3C41]" />
                  <div className="h-3 w-3 rounded-full bg-[#FFBC00]" />
                  <div className="h-3 w-3 rounded-full bg-[#2EC866]" />
                </div>
                <span className="text-xs font-mono text-[#9DA5AF]">rightsignal.config.ts</span>
              </div>

              {/* Code Snippet */}
              <pre className="overflow-x-auto font-mono text-xs sm:text-sm leading-relaxed text-[#57E08B]">
                <code>{codeSnippet}</code>
              </pre>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  )
}
