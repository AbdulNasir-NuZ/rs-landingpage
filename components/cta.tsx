import MagneticButton from '@/components/motion/magnetic-button'

export default function CTA() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-transparent">
      <div className="relative w-full mx-auto px-6 text-center">
        <div className="w-full mx-auto">
          <h2 className="text-[14px] sm:text-xl md:text-3xl lg:text-4xl xl:text-[42px] font-bold tracking-tight mb-4 md:mb-6 text-foreground whitespace-nowrap">
            Your Next Opportunity Is One Connection Away.
          </h2>
          <p className="text-[8px] sm:text-[11px] md:text-sm lg:text-base xl:text-[18px] text-muted-foreground mb-8 md:mb-10 whitespace-nowrap">
            Whether you&apos;re building a startup, growing your career, hiring great people, or investing in innovation, You&apos;ll find the right signal here.
          </p>

          <div className="flex justify-center">
            <MagneticButton href="https://app.rightsignal.social" external>
              Join RightSignal Free
            </MagneticButton>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            The Global Ecosystem for Growth Focused Individuals.
          </p>
        </div>
      </div>
    </section>
  )
}
