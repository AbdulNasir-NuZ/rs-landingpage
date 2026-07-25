export default function Problem() {
  const problems = [
    'A founder struggles to find the right investor, co-founder, or client',
    'A student misses an internship opportunity',
    'A professional loses a valuable connection',
    'A freelancer searches endlessly for clients',
    'An investor misses the next great startup',
  ]

  return (
    <section className="py-20 md:py-32 bg-background border-t border-border/40">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
              The Problem
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              Talent is everywhere. Opportunities aren&apos;t.
            </p>
            <p className="text-lg text-muted-foreground">
              Every day...
            </p>
          </div>

          <div className="space-y-4">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex gap-4 items-start p-4 rounded-lg bg-secondary/40 border border-border/40 hover:border-border/80 transition-colors"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-foreground/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-foreground rounded-full"></div>
                </div>
                <p className="text-base text-foreground pt-0.5">{problem}</p>
              </div>
            ))}
          </div>

          <div className="pt-8 space-y-4 border-t border-border/40">
            <p className="text-lg font-semibold text-foreground">
              Not because the opportunities don&apos;t exist...
            </p>
            <p className="text-base text-muted-foreground">
              Because they&apos;re hidden behind algorithms, distractions, and noise.
            </p>
            <p className="text-lg font-semibold text-foreground mt-6">
              Today&apos;s social platforms are built to keep you scrolling.
            </p>
            <p className="text-base text-muted-foreground">
              RightSignal is built to help you grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
