'use client'

import { m, useReducedMotion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.35 })

  if (reducedMotion) return null

  return (
    <m.div
      className="fixed left-0 top-0 z-[70] h-px w-full origin-left bg-gradient-to-r from-primary via-accent to-primary/40"
      style={{ scaleX, willChange: 'transform', transform: 'translate3d(0,0,0)' }}
    />
  )
}
