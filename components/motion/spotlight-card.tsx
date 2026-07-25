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
  const rotateX = useSpring(useMotionValue(0), { stiffness: 220, damping: 24 })
  const rotateY = useSpring(useMotionValue(0), { stiffness: 220, damping: 24 })
  const edgeSpotlight = useMotionTemplate`radial-gradient(280px circle at ${mouseX}px ${mouseY}px, rgba(139, 122, 255, 0.2), transparent 80%)`

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
      className={`group relative overflow-hidden backdrop-blur-xl transition-all duration-500 ${className}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', willChange: reducedMotion ? undefined : 'transform', transform: 'translate3d(0,0,0)' }}
      whileHover={reducedMotion ? undefined : { y: -6, scale: 1.015 }}
      transition={{ duration: 0.5, ease: premiumEase }}
    >
      {/* Edge border glowing stroke spotlight */}
      <m.div
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-px"
        style={{ background: edgeSpotlight }}
      />
      {/* Top border edge reflex highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10 h-full w-full">{children}</div>
    </m.div>
  )
}
