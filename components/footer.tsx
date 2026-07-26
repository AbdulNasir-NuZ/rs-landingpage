'use client'

import Link from 'next/link'
import Image from 'next/image'
import { m, useReducedMotion } from 'framer-motion'
import { premiumEase } from '@/components/motion/animated-section'
import { ArrowRight } from 'lucide-react'

export default function Footer() {
  const reducedMotion = useReducedMotion()

  return (
    <footer className="relative bg-[#07080e] text-foreground overflow-hidden">
      {/* Upper CTA Section (Matching Screenshot 2 & 3) */}
      <div className="relative py-16 sm:py-20 lg:py-24 text-center px-6 overflow-hidden">
        {/* Luminous Purple Glow Dome Underneath - Animated on Visit */}
        <m.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[950px] h-[320px] sm:h-[400px] bg-gradient-to-t from-[#6A53FF]/60 via-[#8B7AFF]/35 to-transparent blur-[100px] rounded-full pointer-events-none"
          initial={reducedMotion ? false : { opacity: 0, scale: 0.8 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.2, ease: premiumEase }}
        />

        <m.div
          className="relative z-10 max-w-3xl mx-auto flex flex-col items-center"
          initial={reducedMotion ? false : { opacity: 0, y: 30 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: premiumEase }}
        >
          {/* Clean Large Logo */}
          <div className="relative mb-5 h-14 w-14 sm:h-16 sm:w-16 drop-shadow-[0_0_35px_rgba(106,83,255,0.6)]">
            <Image src="/logo.png" alt="RightSignal Logo" fill className="object-contain" priority />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Get started today for free
          </h2>

          <p className="text-sm sm:text-base text-[#9DA5AF] max-w-xl mb-8 leading-relaxed font-normal">
            Streamline your growth with effortless ecosystem integration for builders, founders, and investors.
          </p>

          <a
            href="https://app.rightsignal.social"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#07080e] shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 hover:bg-[#BEB4FF] hover:shadow-[0_0_40px_rgba(106,83,255,0.6)] hover:scale-105 active:scale-95"
          >
            <span>Get started</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </m.div>
      </div>

      {/* Ultra-Sleek Minimalist Bottom Bar (Matching Screenshot 2 & 3 Bottom Bar) */}
      <div className="border-t border-white/10 bg-[#05060b] py-8 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9DA5AF]">
          <div className="flex items-center gap-3">
            <div className="relative h-6 w-6">
              <Image src="/logo.png" alt="RightSignal Logo" fill className="object-contain" />
            </div>
            <span className="font-medium">RightSignal Community © 2026</span>
          </div>

          <p className="hidden lg:block text-[11px] text-[#9DA5AF]/50">
            Creating seamless growth connections across the globe all in one ecosystem
          </p>

          <div className="flex items-center gap-6">
            <a href="https://app.rightsignal.social/terms" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Terms of service
            </a>
            <a href="https://app.rightsignal.social/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="mailto:hello@rightsignal.social" className="hover:text-white transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
