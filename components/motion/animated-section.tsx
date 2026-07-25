'use client'

import { m, useReducedMotion } from 'framer-motion'

export const premiumEase = [0.22, 1, 0.36, 1] as const

const directions = {
  up: { y: 32, x: 0 },
  left: { y: 18, x: -28 },
  right: { y: 18, x: 28 },
}

export default function AnimatedSection({
  children,
  direction = 'up',
  className,
}: {
  children: React.ReactNode
  direction?: keyof typeof directions
  className?: string
}) {
  const reducedMotion = useReducedMotion()
  const offset = directions[direction]

  return (
    <m.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: offset.y, x: offset.x, scale: 0.992 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, scale: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.78, ease: premiumEase }}
      style={{ willChange: reducedMotion ? undefined : 'transform, opacity', transform: 'translate3d(0,0,0)' }}
    >
      {children}
    </m.div>
  )
}
