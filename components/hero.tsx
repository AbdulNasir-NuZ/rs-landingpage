export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 px-6 sm:pt-24 sm:pb-28">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/15 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-border/40 bg-card/50 backdrop-blur-sm hover:border-border/60 transition-colors">
          <span className="text-xs font-semibold text-accent tracking-wide">FEATURED</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-foreground">
          Where Signals <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Align</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          A global ecosystem for growth. Connect with ambitious founders, professionals, investors, and collaborators to build, learn, and scale together.
        </p>

        <div className="mb-6">
          <a href="https://app.rightsignal.social" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/30 text-base hover:shadow-xl hover:shadow-primary/40">
            Get Started Free
          </a>
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          No Ads. No Algorithms. Just Meaningful Opportunities.
        </p>

        <a href="https://app.rightsignal.social" target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-medium text-primary hover:text-accent transition-colors duration-200 underline underline-offset-4">
          Learn More
        </a>
      </div>
    </section>
  )
}
