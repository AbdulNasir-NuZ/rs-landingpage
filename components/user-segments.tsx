'use client'

import {
  BriefcaseBusiness,
  Building2,
  CircleDollarSign,
  GraduationCap,
  Laptop,
  Rocket,
  ShieldCheck,
  Zap,
  Globe,
  BarChart3,
  Layers,
  Users,
} from 'lucide-react'
import SpotlightCard from '@/components/motion/spotlight-card'
import { m, useReducedMotion } from 'framer-motion'
import { premiumEase } from '@/components/motion/animated-section'
import Image from 'next/image'

export default function UserSegments() {
  const reducedMotion = useReducedMotion()

  const features = [
    {
      icon: Users,
      title: 'Easy to use interface',
      description: 'An intuitive, distraction free environment focused strictly on growth and execution.',
    },
    {
      icon: Zap,
      title: 'Fast opportunity matching',
      description: 'Discover relevant co founders, investors, and team members instantly without algorithm delays.',
    },
    {
      icon: Layers,
      title: 'Multiple engagement modes',
      description: 'Support for startup building, freelancing, investing, mentorship, and career acceleration.',
    },
    {
      icon: ShieldCheck,
      title: 'Robust profile verification',
      description: 'Verified builder profiles, authentic portfolio history, and real startup traction metrics.',
    },
    {
      icon: Globe,
      title: 'Popular platform integration',
      description: 'Seamlessly link your GitHub, pitch decks, LinkedIn, and live product demos in one signal.',
    },
    {
      icon: BarChart3,
      title: 'Comprehensive analytics',
      description: 'Detailed reporting and analytics features to track connection signal strength and reach.',
    },
  ]

  const orbitBadges = [
    { icon: Rocket, label: 'Founders', top: '20%', left: '70%' },
    { icon: BriefcaseBusiness, label: 'Professionals', top: '48%', left: '74%' },
    { icon: GraduationCap, label: 'Students', top: '76%', left: '66%' },
    { icon: Laptop, label: 'Freelancers', top: '76%', left: '16%' },
    { icon: Building2, label: 'Businesses', top: '48%', left: '8%' },
    { icon: CircleDollarSign, label: 'Investors', top: '20%', left: '14%' },
  ]

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-[#0d0f1a]">
      {/* Eye-Friendly Cyan/Blue Atmosphere Glow - Fades in ON SECTION VISIT */}
      <m.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[380px] bg-gradient-to-r from-[#00B4D8]/30 via-[#0077B6]/20 to-[#6A53FF]/30 blur-[100px] rounded-full pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 1.2, ease: premiumEase }}
      />
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Luminous Title Pill Badge */}
        <div className="flex flex-col items-center text-center space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center rounded-full border border-[#00C3FF]/40 bg-[#00C3FF]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#70E0FF] shadow-[0_0_20px_rgba(0,195,255,0.3)]">
            Global Ecosystem ✦
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Built for growth focused <span className="bg-gradient-to-r from-[#70E0FF] via-[#00C3FF] to-[#6A53FF] bg-clip-text text-transparent">individuals worldwide</span>
          </h2>
          <p className="text-sm sm:text-base text-[#9DA5AF] max-w-xl">
            Connecting founders, professionals, students, freelancers, businesses, and investors seamlessly.
          </p>
        </div>

        {/* Concentric Orbit Rings Graphic (Matching Screenshot 4) */}
        <div className="relative mx-auto mb-20 flex h-[360px] sm:h-[460px] w-full max-w-3xl items-center justify-center">
          {/* Glowing Center Logo */}
          <div className="absolute z-20 h-16 w-16 sm:h-20 sm:w-20 drop-shadow-[0_0_40px_rgba(0,195,255,0.7)]">
            <Image src="/logo.png" alt="RightSignal Logo" fill className="object-contain" />
          </div>

          {/* Inner Orbit Circle */}
          <div className="absolute h-48 w-48 rounded-full border border-[#00C3FF]/25 shadow-[0_0_30px_rgba(0,195,255,0.1)]" />

          {/* Middle Orbit Circle */}
          <div className="absolute h-72 w-72 rounded-full border border-[#00C3FF]/20 shadow-[0_0_40px_rgba(0,195,255,0.1)]" />

          {/* Outer Orbit Circle */}
          <div className="absolute h-[340px] sm:h-[420px] w-[340px] sm:w-[420px] rounded-full border border-[#00C3FF]/15 shadow-[0_0_50px_rgba(0,195,255,0.1)]" />

          {/* Orbit Badges Floating along the rings */}
          {orbitBadges.map((badge, idx) => (
            <m.div
              key={badge.label}
              className="absolute z-20 flex items-center gap-2 rounded-full border border-[#00C3FF]/40 bg-[#13152a]/90 px-3.5 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(0,195,255,0.3)] transition-transform duration-300 hover:scale-110"
              style={{ top: badge.top, left: badge.left }}
              animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: idx * 0.5, ease: 'easeInOut' }}
            >
              <badge.icon className="h-4 w-4 text-[#70E0FF]" />
              <span className="text-xs font-bold text-white hidden sm:inline">{badge.label}</span>
            </m.div>
          ))}
        </div>

        {/* 6 Feature Items 2x3 Grid (Matching Screenshot 4 Bottom Layout) */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {features.map((item) => (
            <SpotlightCard
              key={item.title}
              className="motion-card flex flex-col rounded-2xl border border-white/10 bg-[#13152a]/60 p-6 backdrop-blur-md shadow-md transition-all duration-300 hover:border-[#00C3FF]/40 hover:shadow-[0_0_30px_rgba(0,195,255,0.2)]"
            >
              <div className="flex items-center gap-3.5 mb-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#00C3FF]/15 text-[#70E0FF] border border-[#00C3FF]/30">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-foreground leading-tight">{item.title}</h3>
              </div>
              <p className="text-xs leading-relaxed text-[#9DA5AF]">{item.description}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}
