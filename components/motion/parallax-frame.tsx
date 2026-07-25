'use client'

import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { premiumEase } from './animated-section'

export default function ParallaxFrame({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [-20, 20])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], reducedMotion ? [1, 1, 1] : [0.98, 1, 1.02])

  return (
    <m.div
      ref={ref}
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 24, clipPath: 'inset(8% round 12px)' }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0, clipPath: 'inset(0% round 12px)' }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, ease: premiumEase }}
      style={{ y, scale, willChange: reducedMotion ? undefined : 'transform, opacity', transform: 'translate3d(0,0,0)' }}
    >
      {children}
    </m.div>
  )
}
