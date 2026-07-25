export default function Testimonial() {
  return (
    <section className="relative py-16 px-6 sm:py-20 overflow-hidden border-t border-border/20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/8 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="mb-4 flex justify-center">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-5 h-5 bg-primary/60 rounded-full" />
            ))}
          </div>
        </div>

        <blockquote className="mb-8">
          <p className="text-2xl sm:text-3xl font-semibold text-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            RightSignal transformed how I connect with founders and investors. The signal-based matching algorithm helped me find my co-founder within weeks.
          </p>
        </blockquote>

        <div className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-full overflow-hidden mb-4 border border-border/40 bg-card">
            <div className="w-full h-full bg-gradient-to-br from-primary/40 to-accent/40 flex items-center justify-center">
              <svg className="w-8 h-8 text-primary/60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>
          <div>
            <p className="font-semibold text-foreground">Sarah Anderson</p>
            <p className="text-sm text-muted-foreground">Founder &amp; CEO, TechFlow</p>
          </div>
        </div>
      </div>
    </section>
  )
}
