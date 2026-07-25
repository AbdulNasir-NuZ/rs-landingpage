'use client'

import { m, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { MouseEvent } from 'react'
import { premiumEase } from './animated-section'

export default function SpotlightCard({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const reducedMotion = useReducedMotion()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useMotionValue(0), { stiffness: 180, damping: 22 })
  const rotateY = useSpring(useMotionValue(0), { stiffness: 180, damping: 22 })
  const background = useMotionTemplate`radial-gradient(220px circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.08), transparent 70%)`

  const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    mouseX.set(x)
    mouseY.set(y)
    if (!reducedMotion) {
      rotateX.set(((y / rect.height) - 0.5) * -4)
      rotateY.set(((x / rect.width) - 0.5) * 4)
    }
  }

  const onMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <m.div
      className={`group relative overflow-hidden ${className}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', willChange: reducedMotion ? undefined : 'transform', transform: 'translate3d(0,0,0)' }}
      whileHover={reducedMotion ? undefined : { y: -8, scale: 1.02, boxShadow: '0 24px 70px rgba(0, 0, 0, 0.4)' }}
      transition={{ duration: 0.55, ease: premiumEase }}
    >
      <m.div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background }} />
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/0 transition-all duration-300 group-hover:ring-white/10" />
      <div className="relative z-10">{children}</div>
    </m.div>
  )
}
