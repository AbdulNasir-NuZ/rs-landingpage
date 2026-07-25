'use client'

import { m, useMotionTemplate, useMotionValue, useReducedMotion } from 'framer-motion'
import { useEffect } from 'react'

export default function AmbientBackground() {
  const reducedMotion = useReducedMotion()
  
  const mouseX = useMotionValue(50)
  const mouseY = useMotionValue(50)
  const glow = useMotionTemplate`radial-gradient(600px circle at ${mouseX}% ${mouseY}%, rgba(106, 83, 255, 0.06), transparent 80%)`

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set((event.clientX / window.innerWidth) * 100)
      mouseY.set((event.clientY / window.innerHeight) * 100)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" style={{ background: '#0d0f1a' }}>
      {/* Luminous hero-style purple glow at top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 h-[700px] w-[900px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(106,83,255,0.3),rgba(94,69,255,0.15)_40%,transparent_70%)] blur-[40px]" />
      
      {/* Secondary subtle purple ambient at bottom */}
      <m.div
        className="absolute bottom-0 left-1/4 h-[500px] w-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(106,83,255,0.08),transparent_70%)] blur-[60px]"
        animate={reducedMotion ? undefined : { x: [0, 30, -20, 0], y: [0, -20, 15, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Interactive mouse glow */}
      <m.div className="absolute inset-0" style={{ background: glow }} />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] opacity-50" />
      
      {/* Film grain */}
      <div className="noise-overlay absolute inset-0 opacity-[0.025]" />
    </div>
  )
}
