'use client'

import { m, useMotionTemplate, useMotionValue, useReducedMotion } from 'framer-motion'
import { useEffect } from 'react'

export default function AmbientBackground() {
  const reducedMotion = useReducedMotion()
  
  const mouseX = useMotionValue(50)
  const mouseY = useMotionValue(50)
  // Ultra-subtle, premium white glow like Apple's glassmorphism lighting, not a colored AI orb.
  const glow = useMotionTemplate`radial-gradient(800px circle at ${mouseX}% ${mouseY}%, rgba(255, 255, 255, 0.035), transparent 80%)`

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set((event.clientX / window.innerWidth) * 100)
      mouseY.set((event.clientY / window.innerHeight) * 100)
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Deep, clean background gradient for a premium feel */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(255,255,255,0.03),transparent_60%)]" />

      {/* Dynamic interactive glow */}
      <m.div className="absolute inset-0" style={{ background: glow }} />

      {/* Ultra-subtle grid pattern for scale/depth */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] opacity-30" />
      
      {/* Premium film grain / noise texture */}
      <div className="noise-overlay absolute inset-0 opacity-[0.015]" />
    </div>
  )
}
