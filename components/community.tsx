'use client'

import { m, useReducedMotion } from 'framer-motion'
import SpotlightCard from '@/components/motion/spotlight-card'
import { premiumEase } from '@/components/motion/animated-section'
import Image from 'next/image'

export default function Community() {
  const reducedMotion = useReducedMotion()

  const columns = [
    // Column 1
    [
      {
        quote: "I can't imagine running my startup without RightSignal. It's streamlined my connection process and saved me so much time!",
        author: 'Sarah K.',
        role: 'Co founder, BuildSpace',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      },
      {
        quote: "RightSignal is easy to use and provides fast and reliable opportunity matching. It's made my growth so much easier!",
        author: 'John T.',
        role: 'Builder, NextGen',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      },
    ],
    // Column 2
    [
      {
        quote: "I love the multiple collaboration options available on RightSignal. It's convenient for my team and makes building a breeze!",
        author: 'Maria S.',
        role: 'Founder, PulseAI',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      },
      {
        quote: "The Sandbox startup challenge integrates seamlessly with our workflow, which has made managing milestones so much simpler.",
        author: 'Alex G.',
        role: 'Web Developer',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      },
    ],
    // Column 3
    [
      {
        quote: "The security features and verified profiles of RightSignal are top notch. I feel confident that founder data is protected and verified.",
        author: 'David H.',
        role: 'Angel Investor',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
      },
      {
        quote: "The reporting and signal matching features of RightSignal are so helpful for tracking our ecosystem reach. Highly recommend!",
        author: 'Emily P.',
        role: 'Senior Growth Analyst',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
      },
    ],
  ]

  return (
    <section id="community" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-transparent">
      {/* Pink Glow Atmosphere - Animated on Visit */}
      <m.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[350px] bg-gradient-to-r from-[#FF4D8D]/35 via-[#6A53FF]/30 to-[#FF4D8D]/35 blur-[100px] rounded-full pointer-events-none"
        initial={reducedMotion ? false : { opacity: 0, scale: 0.8 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.2, ease: premiumEase }}
      />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Luminous Pink Badge */}
        <div className="flex flex-col items-center text-center space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center rounded-full border border-[#FF4D8D]/40 bg-[#FF4D8D]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#FF80B5] shadow-[0_0_20px_rgba(255,77,141,0.3)]">
            Community Wall ♥
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Loved by a <span className="bg-gradient-to-r from-[#FF80B5] via-[#FF4D8D] to-[#BEB4FF] bg-clip-text text-transparent">global community</span>
          </h2>
          <p className="text-sm sm:text-base text-[#9DA5AF] max-w-xl">
            See what our satisfied ecosystem members are saying about RightSignal.
          </p>
        </div>

        {/* 3 Columns Wall */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {columns.map((col, colIdx) => (
            <m.div
              key={colIdx}
              className="flex flex-col gap-6"
              initial={reducedMotion ? false : { opacity: 0, y: 30 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: colIdx * 0.15, ease: premiumEase }}
            >
              {col.map((item, itemIdx) => (
                <SpotlightCard
                  key={itemIdx}
                  className="motion-card group flex flex-col justify-between rounded-3xl border border-white/10 bg-[#13152a]/70 p-6 backdrop-blur-md shadow-md transition-all duration-500 hover:border-[#FF4D8D]/60 hover:bg-[#201833] hover:shadow-[0_0_45px_rgba(255,77,141,0.35)]"
                >
                  {/* Twitter / Signal Icon */}
                  <div className="mb-4 text-[#FF80B5] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z"/>
                    </svg>
                  </div>

                  <p className="text-sm font-medium leading-relaxed text-[#9DA5AF] group-hover:text-white transition-colors mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/20">
                      <Image src={item.avatar} alt={item.author} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground group-hover:text-[#FF80B5] transition-colors">{item.author}</p>
                      <p className="text-xs text-[#9DA5AF]">{item.role}</p>
                    </div>
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
