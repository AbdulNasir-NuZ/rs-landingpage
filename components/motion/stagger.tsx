'use client'

import { m, useReducedMotion } from 'framer-motion'
import { premiumEase } from './animated-section'

export function StaggerContainer({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const reducedMotion = useReducedMotion()

  return (
    <m.div
      className={className}
      initial={reducedMotion ? false : 'hidden'}
      whileInView={reducedMotion ? undefined : 'show'}
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08, delayChildren: delay } },
      }}
    >
      {children}
    </m.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const reducedMotion = useReducedMotion()

  return (
    <m.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 22, scale: 0.99 },
        show: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ duration: 0.65, ease: premiumEase }}
      style={{ willChange: reducedMotion ? undefined : 'transform, opacity', transform: 'translate3d(0,0,0)' }}
    >
      {children}
    </m.div>
  )
}
