'use client'

import Image from 'next/image'
import { Bell, Handshake, Search, UserRound } from 'lucide-react'
import SpotlightCard from '@/components/motion/spotlight-card'
import { StaggerContainer, StaggerItem } from '@/components/motion/stagger'
import { m, useReducedMotion } from 'framer-motion'
import { premiumEase } from '@/components/motion/animated-section'

export default function MobileDownload() {
  const reducedMotion = useReducedMotion()
  const appFeatures = [
    { text: 'Instant notifications.', icon: Bell },
    { text: 'Connect with people.', icon: UserRound },
    { text: 'Manage collaborations.', icon: Handshake },
    { text: 'Discover opportunities.', icon: Search },
  ]

  const badgeHoverSettings = reducedMotion ? undefined : {
    y: -3,
    scale: 1.02,
    boxShadow: '0 12px 30px rgba(106, 83, 255, 0.25)',
  }

  return (
    <section id="mobile-app" className="relative overflow-hidden py-24 md:py-32 bg-transparent">
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <SpotlightCard className="motion-card rounded-3xl border border-white/10 bg-[#13152a]/60 p-8 shadow-[0_0_40px_rgba(106,83,255,0.08)] backdrop-blur-xl sm:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-[#8B7AFF] shadow-sm">
                Mobile App ✦
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Download the <br /> <span className="bg-gradient-to-r from-[#BEB4FF] to-[#6A53FF] bg-clip-text text-transparent">RightSignal App</span>
              </h2>
              <div className="mt-6 space-y-3 text-lg text-[#9DA5AF] font-medium">
                <p>Opportunities Don&apos;t Wait.</p>
                <p>Stay connected wherever you are.</p>
              </div>
            </div>

            <div className="space-y-8">
              <StaggerContainer className="grid gap-4 sm:grid-cols-2">
                {appFeatures.map((feature) => (
                  <StaggerItem key={feature.text}>
                    <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 transition-colors duration-300 hover:border-[#8B7AFF]/30 hover:bg-white/10">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#6A53FF]/20 text-[#BEB4FF] shadow-[0_0_10px_rgba(106,83,255,0.2)]">
                        <feature.icon className="size-5 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.8} aria-hidden="true" />
                      </div>
                      <span className="font-semibold text-foreground">{feature.text}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center pt-8">
                {/* Apple App Store Badge */}
                <m.a
                  href="https://app.rightsignal.social"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-4 rounded-2xl bg-black px-6 py-3.5 border border-white/20 shadow-xl transition-all duration-300 hover:border-[#6A53FF] hover:shadow-[0_0_25px_rgba(106,83,255,0.35)] hover:scale-105 active:scale-95"
                  whileHover={badgeHoverSettings}
                  whileTap={reducedMotion ? undefined : { scale: 0.98 }}
                >
                  <svg className="h-8 w-8 fill-white shrink-0" viewBox="0 0 384 512">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-92.1zm-56.1-177.1c25.4-30.8 22.3-59.5 21.6-67.6-22.6 1.3-50.5 15.5-66.2 33.8-16.6 19.3-24.5 45.4-21.7 66.8 25.6.8 50.7-13.8 66.3-33z"/>
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#9DA5AF]">Download on the</span>
                    <span className="text-lg font-bold text-white tracking-wide leading-none mt-1">App Store</span>
                  </div>
                </m.a>

                {/* Google Play Store Badge */}
                <m.a
                  href="https://app.rightsignal.social"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-4 rounded-2xl bg-black px-6 py-3.5 border border-white/20 shadow-xl transition-all duration-300 hover:border-[#00C3FF] hover:shadow-[0_0_25px_rgba(0,195,255,0.35)] hover:scale-105 active:scale-95"
                  whileHover={badgeHoverSettings}
                  whileTap={reducedMotion ? undefined : { scale: 0.98 }}
                >
                  <div className="relative h-8 w-8 shrink-0 rounded-lg overflow-hidden flex items-center justify-center">
                    <Image
                      src="/google-play-v2.png"
                      alt="Google Play Logo"
                      fill
                      className="object-contain rounded-lg"
                      priority
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#9DA5AF]">GET IT ON</span>
                    <span className="text-lg font-bold text-white tracking-wide leading-none mt-1">Google Play</span>
                  </div>
                </m.a>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  )
}
