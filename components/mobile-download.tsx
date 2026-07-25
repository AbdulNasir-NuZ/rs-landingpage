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

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center pt-4">
                <div className="relative">
                  <m.div
                    className="cursor-pointer select-none"
                    whileHover={badgeHoverSettings}
                    whileTap={reducedMotion ? undefined : { scale: 0.98 }}
                    transition={{ duration: 0.4, ease: premiumEase }}
                  >
                    <svg className="h-16 w-auto" viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="180" height="60" rx="10" fill="#000000" stroke="#404040" strokeWidth="1"/>
                      <path d="M29 35.5c-.13 3.1 2.55 4.55 2.67 4.68-.13.4-.54 1.2-1.07 2.01-.93 1.34-1.87 2.82-3.35 2.82-1.47 0-1.87-.93-3.61-.93-1.6 0-2.14.8-3.48.93-1.34.13-2.41-1.34-3.35-2.67-1.87-2.67-3.21-7.63-1.34-10.97.93-1.6 2.67-2.67 4.41-2.67 1.47 0 2.81 1.07 3.61 1.07.8 0 2.54-1.2 4.28-1.07.67.13 2.67.27 4.02 2.14-.13.13-2.41 1.47-2.41 4.28M27.7 21.3c.8-.93 1.34-2.28 1.2-3.61-1.2.13-2.54.8-3.35 1.74-.67.8-1.2 2.14-1.07 3.48 1.34.13 2.54-.67 3.22-1.61" fill="white"/>
                      <text x="50" y="22" fill="white" fontSize="8" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="400" letterSpacing="0.2">Download on the</text>
                      <text x="50" y="42" fill="white" fontSize="16" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="600" letterSpacing="0.2">App Store</text>
                    </svg>
                  </m.div>
                </div>

                <div className="relative">
                  <m.div
                    className="cursor-pointer select-none"
                    whileHover={badgeHoverSettings}
                    whileTap={reducedMotion ? undefined : { scale: 0.98 }}
                    transition={{ duration: 0.4, ease: premiumEase }}
                  >
                    <svg className="h-16 w-auto" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="200" height="60" rx="10" fill="#000000" stroke="#404040" strokeWidth="1"/>
                      <g transform="translate(14, 10) scale(1.8)">
                        <path d="M1 1v20l10-10L1 1z" fill="#00C3FF"/>
                        <path d="M1 1l10 10 3-3L1 1z" fill="#FFBC00"/>
                        <path d="M1 21l10-10 3 3L1 21z" fill="#FF3C41"/>
                        <path d="M11 11l5-5-2-1L1 11l10 10 0-10z" fill="#2EC866"/>
                      </g>
                      <text x="56" y="22" fill="white" fontSize="8" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="400" letterSpacing="0.3">GET IT ON</text>
                      <text x="56" y="42" fill="white" fontSize="16" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="600" letterSpacing="0.2">Google Play</text>
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
