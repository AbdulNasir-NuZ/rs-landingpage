'use client'

import { m, useReducedMotion } from 'framer-motion'

export default function AmbientBackground() {
  const reducedMotion = useReducedMotion()

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" style={{ background: '#0d0f1a' }}>
      {/* Luminous hero-style purple glow at top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 h-[700px] w-[900px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(106,83,255,0.25),rgba(94,69,255,0.1)_40%,transparent_70%)] blur-[40px]" />
      
      {/* Secondary subtle purple ambient at bottom */}
      <m.div
        className="absolute bottom-0 left-1/4 h-[500px] w-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(106,83,255,0.06),transparent_70%)] blur-[60px]"
        animate={reducedMotion ? undefined : { x: [0, 30, -20, 0], y: [0, -20, 15, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] opacity-50" />
      
      {/* Film grain */}
      <div className="noise-overlay absolute inset-0 opacity-[0.025]" />
    </div>
  )
}
