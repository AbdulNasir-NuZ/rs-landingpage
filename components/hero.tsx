'use client'

import { m, useReducedMotion } from 'framer-motion'
import { premiumEase } from '@/components/motion/animated-section'
import Image from 'next/image'
import { useState } from 'react'
import { ArrowRight, CheckCircle2, Rocket, Building2, Zap, Target, Globe, Coins, TrendingUp, Layers, Briefcase } from 'lucide-react'

export default function Hero() {
  const reducedMotion = useReducedMotion()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 4000)
    }
  }

  const ecosystems = [
    { name: 'FOUNDERS', icon: Rocket },
    { name: 'INVESTORS', icon: Building2 },
    { name: 'STARTUPS', icon: Zap },
    { name: 'TALENT', icon: Target },
    { name: 'FREELANCERS', icon: Globe },
  ]

  const tickerCards = [
    { name: 'Ethereum', symbol: 'ETH', price: '$2,122.88', change: '+6.35%', positive: true, icon: Coins },
    { name: 'Bitcoin', symbol: 'BTC', price: '$30,878.25', change: '+2.15%', positive: true, icon: TrendingUp },
    { name: 'Founders', symbol: 'ACT', price: '2,410', change: '+14.2%', positive: true, icon: Rocket },
    { name: 'Solana', symbol: 'SOL', price: '$24.18', change: '-4.50%', positive: false, icon: Layers },
    { name: 'Startups', symbol: 'BLD', price: '680+', change: '+28.5%', positive: true, icon: Zap },
    { name: 'Polygon', symbol: 'MATIC', price: '$1.21', change: '+2.90%', positive: true, icon: Building2 },
    { name: 'Capital', symbol: 'USD', price: '$4.2M', change: '+32.1%', positive: true, icon: Briefcase },
    { name: 'Near', symbol: 'NEAR', price: '$2.19', change: '+3.45%', positive: true, icon: Target },
  ]

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-32 bg-[#0d0f1a]">
      {/* Background Grid - Fades in ON SECTION VISIT */}
      <m.div
        className="absolute inset-0 bg-grid-pattern pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Luminous Top Purple Glow Dome - Animated on Visit */}
      <m.div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1100px] h-[400px] sm:h-[550px] bg-gradient-to-b from-[#6A53FF]/65 via-[#8B7AFF]/40 to-transparent blur-[140px] rounded-full pointer-events-none"
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.1 }}
        transition={{ duration: 1.4, ease: premiumEase }}
      />

      <m.div
        className="relative mx-auto max-w-5xl px-6 text-center z-10"
        initial={reducedMotion ? false : 'hidden'}
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
        }}
      >
        {/* Clean Large Hero Logo */}
        <m.div
          className="relative mx-auto mb-8 h-16 w-16 sm:h-20 sm:w-20 drop-shadow-[0_0_35px_rgba(106,83,255,0.6)]"
          variants={{
            hidden: { opacity: 0, y: 20, scale: 0.9 },
            show: { opacity: 1, y: 0, scale: 1 },
          }}
          transition={{ duration: 0.8, ease: premiumEase }}
        >
          <Image src="/logo.png" alt="RightSignal Logo" fill className="object-contain" priority />
        </m.div>

        {/* Heading */}
        <m.h1
          className="mx-auto mb-6 max-w-4xl text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-[1.1]"
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.85, ease: premiumEase }}
        >
          The Global Ecosystem for <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-white via-[#BEB4FF] to-[#6A53FF] bg-clip-text text-transparent">
            Growth Focused Individuals
          </span>
        </m.h1>

        {/* Subtitle */}
        <m.p
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-[#9DA5AF] sm:text-lg lg:text-xl font-normal"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: premiumEase }}
        >
          Whether you&apos;re building a startup, advancing your career, finding your next opportunity, or investing in the future, RightSignal brings the right people together.
        </m.p>

        {/* Luminous Email Subscribe Input */}
        <m.div
          className="mx-auto max-w-md mb-16"
          variants={{
            hidden: { opacity: 0, y: 18 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: premiumEase }}
        >
          <form onSubmit={handleSubmit} className="relative flex items-center rounded-full border border-white/15 bg-[#0a0b16]/90 p-1.5 shadow-[0_0_30px_rgba(106,83,255,0.2)] backdrop-blur-xl transition-all focus-within:border-[#8B7AFF]/60 focus-within:shadow-[0_0_40px_rgba(106,83,255,0.4)]">
            <input
              type="email"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-transparent px-5 py-3 text-sm text-foreground placeholder-[#9DA5AF]/70 outline-none focus:ring-0"
            />
            <button
              type="submit"
              className="flex shrink-0 items-center gap-2 rounded-full bg-[#6A53FF] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#8B7AFF] hover:shadow-[0_0_20px_rgba(106,83,255,0.5)] active:scale-95"
            >
              {submitted ? (
                <>
                  <CheckCircle2 className="h-4 w-4 text-white" />
                  <span>Joined!</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
          <p className="mt-3 text-xs text-[#9DA5AF]/70">No ads. No algorithms. Just meaningful opportunities.</p>
        </m.div>

        {/* Ecosystem Categories Row */}
        <m.div
          className="pt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-70 mb-14"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 0.7 },
          }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {ecosystems.map((item) => (
            <div key={item.name} className="flex items-center gap-2 font-bold tracking-widest text-xs sm:text-sm text-[#9DA5AF] hover:text-white transition-colors">
              <item.icon className="h-4 w-4 text-[#8B7AFF]" />
              <span>{item.name}</span>
            </div>
          ))}
        </m.div>

        {/* Infinite Horizontal Metric Pills Marquee (Moving Right to Left) */}
        <m.div
          className="relative overflow-hidden py-4 -mx-6 px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* Smooth Edge Fade Mask (Clean Edge Entry & Exit) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#0d0f1a] via-[#0d0f1a]/90 to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#0d0f1a] via-[#0d0f1a]/90 to-transparent z-20" />

          <div className="flex w-max gap-4 py-2">
            <m.div
              className="flex gap-4 shrink-0"
              animate={reducedMotion ? undefined : { x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
            >
              {[...tickerCards, ...tickerCards].map((card, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 shrink-0 rounded-2xl border border-white/10 bg-[#13152a]/80 px-4 py-2.5 backdrop-blur-md shadow-md transition-all duration-300 hover:border-[#6A53FF]/60 hover:shadow-[0_0_20px_rgba(106,83,255,0.3)]"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#6A53FF]/15 border border-[#6A53FF]/30">
                    <card.icon className="h-4 w-4 text-[#BEB4FF]" />
                  </div>
                  <div className="text-left pr-2">
                    <p className="text-xs font-bold text-white leading-tight">{card.name}</p>
                    <p className="text-[10px] text-[#9DA5AF] font-medium">{card.symbol}</p>
                  </div>
                </div>
              ))}
            </m.div>
          </div>
        </m.div>
      </m.div>
    </section>
  )
}
