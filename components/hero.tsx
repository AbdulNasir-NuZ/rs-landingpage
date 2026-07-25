'use client'

import { m, useMotionTemplate, useMotionValue, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import MagneticButton from '@/components/motion/magnetic-button'
import { premiumEase } from '@/components/motion/animated-section'

const title = 'The Global Ecosystem for Growth Focused Individuals.'
const titleLines = ['The Global Ecosystem', 'for Growth Focused', 'Individuals.']

export default function Hero() {
  const reducedMotion = useReducedMotion()
  const mouseX = useMotionValue(50)
  const mouseY = useMotionValue(50)
  const depthX = useTransform(mouseX, [0, 100], reducedMotion ? [0, 0] : [-8, 8])
  const depthY = useTransform(mouseY, [0, 100], reducedMotion ? [0, 0] : [-6, 6])
  const rotateX = useTransform(mouseY, [0, 100], reducedMotion ? [0, 0] : [3, -3])
  const rotateY = useTransform(mouseX, [0, 100], reducedMotion ? [0, 0] : [-4, 4])
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 0.16], reducedMotion ? [1, 1] : [1, 0.975])

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        mouseX.set(((event.clientX - rect.left) / rect.width) * 100)
        mouseY.set(((event.clientY - rect.top) / rect.height) * 100)
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" />

      <m.div
        className="relative mx-auto max-w-6xl px-6 text-center"
        style={{ scale, x: depthX, y: depthY, rotateX, rotateY, transformStyle: 'preserve-3d', willChange: reducedMotion ? undefined : 'transform', transform: 'translate3d(0,0,0)' }}
        initial={reducedMotion ? false : 'hidden'}
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
        }}
      >
        <h1 className="mx-auto mb-8 max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          <span className="sr-only">{title}</span>
          <span aria-hidden="true" className="block">
            {titleLines.map((line) => (
              <span key={line} className="block overflow-hidden pb-1">
                <m.span
                  className="block"
                  variants={{
                    hidden: { opacity: 0, y: 38 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.82, ease: premiumEase }}
                >
                  {line}
                </m.span>
              </span>
            ))}
          </span>
        </h1>

        <m.p
          className="mx-auto mb-6 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          variants={{
            hidden: { opacity: 0, y: 24 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: premiumEase }}
        >
          Whether you&apos;re building a startup, advancing your career, finding your next opportunity, or investing in the future, RightSignal brings the right people together.
        </m.p>

        <m.p
          className="mb-10 text-sm font-medium text-muted-foreground sm:text-base"
          variants={{
            hidden: { opacity: 0, y: 18 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: premiumEase }}
        >
          No Ads. No Algorithms. Just Meaningful Opportunities.
        </m.p>

        <m.div
          className="flex flex-col justify-center gap-4 sm:flex-row"
          variants={{
            hidden: { opacity: 0, y: 18 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: premiumEase }}
        >
          <MagneticButton href="https://app.rightsignal.social" external>
            Join RightSignal Free
          </MagneticButton>
          <MagneticButton href="#ecosystem" variant="secondary">
            Explore the Ecosystem
          </MagneticButton>
        </m.div>
      </m.div>
    </section>
  )
}
