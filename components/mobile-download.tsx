'use client'

import { Bell, Handshake, Search, UserRound } from 'lucide-react'
import SpotlightCard from '@/components/motion/spotlight-card'
import { StaggerContainer, StaggerItem } from '@/components/motion/stagger'
import { m, useReducedMotion } from 'framer-motion'
import { premiumEase } from '@/components/motion/animated-section'
import { APP_DOWNLOAD_URL } from '@/lib/config'

export default function MobileDownload() {
  const reducedMotion = useReducedMotion()
  const appFeatures = [
    { text: 'Instant notifications.', icon: Bell },
    { text: 'Connect with people.', icon: UserRound },
    { text: 'Manage collaborations.', icon: Handshake },
    { text: 'Discover opportunities.', icon: Search },
  ]

  return (
    <section id="mobile-app" className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-transparent">
      <div className="mx-auto max-w-6xl px-6 relative z-10">

        {/* Outer card — SpotlightCard effect matching roadmap and other sections */}
        <SpotlightCard className="rounded-3xl border border-white/10 bg-[#13152a]/60 p-8 shadow-[0_0_40px_rgba(106,83,255,0.08)] sm:p-12 lg:p-16 hover:border-[#8B7AFF]/40 hover:shadow-[0_0_50px_rgba(139,122,255,0.2)]">

          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center relative z-10">

            {/* Left column */}
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-[#8B7AFF] shadow-sm">
                Mobile App ✦
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl leading-tight">
                Download the <br />
                <span className="bg-gradient-to-r from-[#BEB4FF] to-[#6A53FF] bg-clip-text text-transparent">
                  RightSignal App
                </span>
              </h2>
              <div className="mt-6 space-y-3 text-lg text-[#9DA5AF] font-medium">
                <p>Opportunities Don&apos;t Wait.</p>
                <p>Stay connected wherever you are.</p>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-8">

              {/* Feature cards — each wrapped in SpotlightCard like roadmap */}
              <StaggerContainer className="grid gap-4 sm:grid-cols-2">
                {appFeatures.map((feature) => (
                  <StaggerItem key={feature.text}>
                    <SpotlightCard className="rounded-2xl border border-white/10 bg-[#13152a]/70 p-4 shadow-xl hover:border-[#8B7AFF]/50 hover:shadow-[0_0_35px_rgba(139,122,255,0.25)]">
                      <div className="flex items-center gap-4">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#6A53FF]/20 text-[#BEB4FF] shadow-[0_0_10px_rgba(106,83,255,0.2)]">
                          <feature.icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
                        </div>
                        <span className="font-semibold text-foreground">{feature.text}</span>
                      </div>
                    </SpotlightCard>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* APKPure button — also wrapped in SpotlightCard */}
              <div className="pt-4 border-t border-white/10">
                <SpotlightCard className="inline-flex rounded-2xl border border-white/10 bg-[#13152a]/70 shadow-xl hover:border-[#8B7AFF]/50 hover:shadow-[0_0_35px_rgba(139,122,255,0.25)]">
                  <a
                    href={APP_DOWNLOAD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-4 px-7 py-3.5"
                  >
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#2EC866]/20 text-[#2EC866] border border-[#2EC866]/40 shadow-[0_0_15px_rgba(46,200,102,0.3)] transition-transform duration-300 group-hover/btn:scale-110">
                      <svg className="size-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.3l6.5 3.6-6.5 3.6-6.5-3.6L12 4.3zM5 8.9l6 3.3v6.5l-6-3.3V8.9zm14 6.5l-6 3.3v-6.5l6-3.3v6.5z"/>
                      </svg>
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#9DA5AF] group-hover/btn:text-white/80 transition-colors">GET IT ON</span>
                      <span className="text-xl font-extrabold text-white tracking-wide leading-none mt-0.5">APKPure</span>
                    </div>
                  </a>
                </SpotlightCard>
              </div>

            </div>
          </div>
        </SpotlightCard>

      </div>
    </section>
  )
}
