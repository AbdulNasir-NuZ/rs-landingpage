'use client'

import Image from 'next/image'
import { AnimatePresence, m, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import ParallaxFrame from '@/components/motion/parallax-frame'
import { premiumEase } from '@/components/motion/animated-section'

const ecosystemImages = [
  {
    src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80',
    alt: 'Professionals collaborating in a modern workspace',
  },
  {
    src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
    alt: 'Founders collaborating during a startup meeting',
  },
  {
    src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80',
    alt: 'Investor and founder discussing business growth',
  },
]

export default function Ecosystem() {
  const [activeImage, setActiveImage] = useState(0)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % ecosystemImages.length)
    }, 2000)

    return () => window.clearInterval(timer)
  }, [reducedMotion])

  return (
    <section id="ecosystem" className="py-20 md:py-32 bg-transparent">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
              One Platform. Every Opportunity.
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              RightSignal is more than a professional network.
            </p>
            <p className="text-xl text-muted-foreground text-balance">
              It&apos;s an ecosystem where ambitious people connect, collaborate, build, learn, and grow together.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you&apos;re starting your first company, looking for your next career move, searching for talented people, or discovering investment opportunities, RightSignal helps you move forward with purpose.
            </p>
          </div>

          <ParallaxFrame className="group relative min-h-[320px] overflow-hidden rounded-xl border border-border/40 bg-card/50 shadow-xl shadow-black/20 transition-colors duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 sm:min-h-[420px]">
            <AnimatePresence initial={false}>
              <m.div
                key={ecosystemImages[activeImage].src}
                className="absolute inset-0"
                initial={reducedMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reducedMotion ? undefined : { opacity: 0 }}
                transition={{ duration: 0.75, ease: premiumEase }}
              >
                <Image
                  src={ecosystemImages[activeImage].src}
                  alt={ecosystemImages[activeImage].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  priority={activeImage === 0}
                />
              </m.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-background/65 via-transparent to-transparent" />
          </ParallaxFrame>
        </div>
      </div>
    </section>
  )
}
