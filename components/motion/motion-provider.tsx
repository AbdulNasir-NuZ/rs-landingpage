'use client'

import Lenis from 'lenis'
import { LazyMotion, domAnimation, useReducedMotion } from 'framer-motion'
import { useEffect } from 'react'

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }

    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [reducedMotion])

  return <LazyMotion features={domAnimation}>{children}</LazyMotion>
}
