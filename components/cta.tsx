export default function CTA() {
  return (
    <section className="relative py-16 px-6 sm:py-20 overflow-hidden border-t border-border/20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/15 rounded-full blur-3xl opacity-35" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-foreground">
          Ready to Find Your Signal?
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Join thousands of founders, investors, and professionals building the future together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://app.rightsignal.social" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/30 text-base hover:shadow-xl hover:shadow-primary/40">
            Get Started Free
          </a>
          <a href="https://calendly.com/rightsignalsocial/30min" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 border border-border/60 text-foreground font-semibold rounded-lg hover:border-border hover:bg-card/50 transition-all duration-200 text-base">
            Schedule Demo
          </a>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          No credit card required. Join in seconds.
        </p>
      </div>
    </section>
  )
}
