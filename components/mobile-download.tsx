'use client'

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
    boxShadow: '0 12px 30px rgba(99, 102, 241, 0.15)',
  }

  return (
    <section id="mobile-app" className="relative overflow-hidden py-20 md:py-32 bg-transparent">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-xl border border-border/40 bg-card/45 p-6 shadow-2xl shadow-black/10 backdrop-blur-md sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>

              <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Download the RightSignal App
              </h2>
              <div className="mt-5 space-y-2 text-lg text-muted-foreground">
                <p>Opportunities Don&apos;t Wait.</p>
                <p>Stay connected wherever you are.</p>
              </div>
            </div>

            <div className="space-y-6">
              <StaggerContainer className="grid gap-3 sm:grid-cols-2">
                {appFeatures.map((feature) => (
                  <StaggerItem key={feature.text}>
                    <SpotlightCard className="motion-card rounded-lg border border-border/40 bg-background/35 p-4 text-muted-foreground transition-colors duration-300 hover:border-primary/50 hover:bg-card/80">
                      <div className="flex items-center gap-3">
                        <feature.icon className="size-5 shrink-0 text-primary transition-transform duration-500 group-hover:scale-110" strokeWidth={1.8} aria-hidden="true" />
                        <span className="whitespace-nowrap">{feature.text}</span>
                      </div>
                    </SpotlightCard>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center pt-2">
                <div className="relative">
                  <m.div
                    className="opacity-70 cursor-not-allowed select-none"
                    whileHover={badgeHoverSettings}
                    whileTap={reducedMotion ? undefined : { scale: 0.98 }}
                    transition={{ duration: 0.4, ease: premiumEase }}
                  >
                    <svg className="h-11 w-auto" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="120" height="40" rx="6" fill="black" stroke="#334155" strokeWidth="0.8"/>
                      <path d="M19.16 23.33c-.09 2.06 1.7 3.03 1.78 3.12-.09.27-.36.8-0.71 1.34-.62.89-1.25 1.88-2.23 1.88-.98 0-1.25-.62-2.41-.62-1.07 0-1.43.53-2.32.62-.89.09-1.6-.89-2.23-1.78-1.25-1.78-2.14-5.09-.89-7.32.62-1.07 1.78-1.78 2.94-1.78.98 0 1.87.71 2.41.71.53 0 1.7-.8 2.85-.71.45.09 1.78.18 2.68 1.43-.09.09-1.6.98-1.6 2.85M17.64 13.87c.53-.62.89-1.52.8-2.41-.8.09-1.7.53-2.23 1.16-.45.53-.8 1.43-.71 2.32.89.09 1.7-.45 2.14-1.07" fill="white"/>
                      <text x="34" y="14" fill="white" fontSize="4.8" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="500" letterSpacing="0.1">Download on the</text>
                      <text x="34" y="27" fill="white" fontSize="10" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="700" letterSpacing="0.1">App Store</text>
                    </svg>
                  </m.div>
                </div>

                <div className="relative">
                  <m.div
                    className="opacity-70 cursor-not-allowed select-none"
                    whileHover={badgeHoverSettings}
                    whileTap={reducedMotion ? undefined : { scale: 0.98 }}
                    transition={{ duration: 0.4, ease: premiumEase }}
                  >
                    <svg className="h-11 w-auto" viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="135" height="40" rx="6" fill="black" stroke="#334155" strokeWidth="0.8"/>
                      <g transform="translate(10, 8) scale(1.1)">
                        <path d="M1.5 1.5v21l11.5-10.5-11.5-10.5z" fill="#00F0FF"/>
                        <path d="M1.5 1.5l11.5 10.5 2.8-2.8-14.3-7.7z" fill="#FFB900"/>
                        <path d="M1.5 22.5l11.5-10.5 2.8 2.8-14.3 7.7z" fill="#FF001F"/>
                        <path d="M13 12l4.8-4.8-2-2-14.3 8.3 11.5 10.5 0-12z" fill="#00E065"/>
                      </g>
                      <text x="38" y="14" fill="white" fontSize="4.8" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="500" letterSpacing="0.1">GET IT ON</text>
                      <text x="38" y="27" fill="white" fontSize="10" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="700" letterSpacing="0.1">Google Play</text>
                    </svg>
                  </m.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
