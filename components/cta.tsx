import MagneticButton from '@/components/motion/magnetic-button'
import SpotlightCard from '@/components/motion/spotlight-card'

export default function CTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-transparent">
      <div className="relative w-full max-w-5xl mx-auto px-6 text-center z-10">
        <SpotlightCard className="motion-card overflow-hidden rounded-3xl border border-white/10 bg-card/60 p-12 md:p-20 shadow-[0_0_80px_rgba(106,83,255,0.15)] relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#6A53FF]/20 via-transparent to-[#BEB4FF]/10 opacity-50" />
          
          <div className="relative z-10 w-full mx-auto flex flex-col items-center">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-[#8B7AFF] shadow-sm mb-8">
              Get Started ✦
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-foreground text-balance">
              Your Next Opportunity Is <br />
              <span className="bg-gradient-to-r from-[#BEB4FF] to-[#6A53FF] bg-clip-text text-transparent">One Connection Away.</span>
            </h2>
            
            <p className="text-base md:text-xl text-[#9DA5AF] mb-10 text-balance max-w-2xl font-medium">
              Whether you&apos;re building a startup, growing your career, hiring great people, or investing in innovation, You&apos;ll find the right signal here.
            </p>

            <div className="flex justify-center">
              <MagneticButton href="https://app.rightsignal.social" external>
                Join RightSignal Free
              </MagneticButton>
            </div>

            <p className="mt-12 text-sm text-[#8B7AFF] font-medium tracking-wide uppercase">
              The Global Ecosystem for Growth-Focused Individuals.
            </p>
          </div>
        </SpotlightCard>
      </div>
    </section>
  )
}
