'use client'

import { m, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { MouseEvent } from 'react'
import { premiumEase } from './animated-section'

export default function MagneticButton({
  href,
  children,
  variant = 'primary',
  external = false,
}: {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  external?: boolean
}) {
  const reducedMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 240, damping: 24, mass: 0.35 })
  const springY = useSpring(y, { stiffness: 240, damping: 24, mass: 0.35 })

  const base =
    'group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-lg px-8 py-3.5 text-base font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
  const styles =
    variant === 'primary'
      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-primary/50'
      : 'border border-border/60 text-foreground hover:border-border hover:bg-card/50'

  const onMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    if (reducedMotion) return
    const rect = event.currentTarget.getBoundingClientRect()
    x.set((event.clientX - rect.left - rect.width / 2) * 0.18)
    y.set((event.clientY - rect.top - rect.height / 2) * 0.18)
  }

  const onMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <m.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${base} ${styles}`}
      style={{ x: springX, y: springY, willChange: reducedMotion ? undefined : 'transform', transform: 'translate3d(0,0,0)' }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileHover={reducedMotion ? undefined : { y: -3, scale: 1.02, boxShadow: variant === 'primary' ? '0 22px 55px rgba(106, 83, 255, 0.4)' : '0 18px 45px rgba(106, 83, 255, 0.15)' }}
      whileTap={reducedMotion ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.5, ease: premiumEase }}
    >
      <span className="absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="absolute inset-0 bg-white/[0.08] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative z-10">{children}</span>
    </m.a>
  )
}
