'use client'

import SpotlightCard from '@/components/motion/spotlight-card'
import { m, useReducedMotion } from 'framer-motion'
import { premiumEase } from '@/components/motion/animated-section'
import { Rocket, Zap, Building2, GraduationCap, Laptop, TestTube2, Star, Globe, Users, Calendar } from 'lucide-react'

export default function Ecosystem() {
  const reducedMotion = useReducedMotion()

  const statsCards = [
    // Row 1 (3 cards)
    [
      { label: 'Founders', ticker: 'ACTIVE', val: '2,410', change: '+14.2%', positive: true, icon: Rocket },
      { label: 'Startups', ticker: 'BUILT', val: '680+', change: '+28.5%', positive: true, icon: Zap },
      { label: 'Capital Raised', ticker: 'FUNDING', val: '$4.2M', change: '+32.1%', positive: true, icon: Building2 },
    ],
    // Row 2 (4 cards)
    [
      { label: 'Internships', ticker: 'MATCHED', val: '1,240', change: '+18.4%', positive: true, icon: GraduationCap },
      { label: 'Freelance Gigs', ticker: 'VOLUME', val: '$180k', change: '-2.1%', positive: false, icon: Laptop },
      { label: 'Sandbox MVPs', ticker: 'LAUNCHED', val: '142', change: '+45.0%', positive: true, icon: TestTube2 },
      { label: 'Mentors', ticker: 'ONLINE', val: '350+', change: '+8.9%', positive: true, icon: Star },
    ],
    // Row 3 (3 cards)
    [
      { label: 'Active Hubs', ticker: 'GLOBAL', val: '42', change: '+12.0%', positive: true, icon: Globe },
      { label: 'Collaborations', ticker: 'COMPLETED', val: '5,800', change: '+22.4%', positive: true, icon: Users },
      { label: 'Ecosystem Events', ticker: 'SCHEDULED', val: '120', change: '+15.3%', positive: true, icon: Calendar },
    ],
  ]

  return (
    <section id="ecosystem" className="relative py-16 sm:py-20 lg:py-24 bg-transparent overflow-hidden">
      {/* Subtle Grid Pattern inside Coral Atmosphere */}
      <m.div
        className="absolute inset-0 bg-grid-pattern-coral pointer-events-none opacity-40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        viewport={{ amount: 0.1 }}
        transition={{ duration: 1.2 }}
      />
      {/* Luminous Center Coral Glow - Animated on Visit */}
      <m.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] sm:w-[950px] h-[380px] bg-gradient-to-r from-[#FF4D8D]/35 via-[#6A53FF]/35 to-[#FF8052]/35 blur-[100px] rounded-full pointer-events-none"
        initial={reducedMotion ? false : { opacity: 0, scale: 0.8 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.2, ease: premiumEase }}
      />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Title & Coral Badge */}
        <div className="flex flex-col items-center text-center space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center rounded-full border border-[#FF4D8D]/40 bg-[#FF4D8D]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#FF80B5] shadow-[0_0_20px_rgba(255,77,141,0.3)]">
            Ecosystem Pulse ✦
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Real time <span className="bg-gradient-to-r from-[#FF80B5] via-[#FF4D8D] to-[#6A53FF] bg-clip-text text-transparent">ecosystem signals</span>
          </h2>
          <p className="text-sm sm:text-base text-[#9DA5AF] max-w-xl">
            Seamless discovery of active startups, funding, and verified growth connections.
          </p>
        </div>

        {/* 3 Rows of Floating Cards (3 Top, 4 Middle, 3 Bottom) */}
        <div className="space-y-4 max-w-6xl mx-auto">
          {statsCards.map((row, rowIndex) => (
            <m.div
              key={rowIndex}
              className={`grid gap-3.5 sm:gap-4 justify-center ${
                rowIndex === 1
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto'
                  : 'grid-cols-1 sm:grid-cols-3 max-w-4xl mx-auto'
              }`}
              initial={reducedMotion ? false : { opacity: 0, y: 30 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: rowIndex * 0.15, ease: premiumEase }}
            >
              {row.map((card) => (
                <SpotlightCard
                  key={card.label}
                  className="motion-card flex w-full flex-col rounded-2xl border border-white/10 bg-[#13152a]/80 p-5 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-[#FF4D8D]/50 hover:shadow-[0_0_30px_rgba(255,77,141,0.25)] hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="flex size-8 items-center justify-center rounded-xl bg-[#FF4D8D]/15 border border-[#FF4D8D]/30">
                        <card.icon className="h-4 w-4 text-[#FF80B5]" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground leading-tight">{card.label}</p>
                        <p className="text-[10px] font-semibold text-[#9DA5AF] tracking-wider">{card.ticker}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-baseline justify-between pt-3 border-t border-white/5">
                    <span className="text-xl font-black text-white">{card.val}</span>
                    <span className={`text-xs font-bold ${card.positive ? 'text-[#2EC866]' : 'text-[#FF3C41]'}`}>
                      {card.change}
                    </span>
                  </div>
                </SpotlightCard>
              ))}
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
