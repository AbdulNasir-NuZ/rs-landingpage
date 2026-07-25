export default function Benefits() {
  return (
    <section className="relative py-16 px-6 sm:py-20 overflow-hidden border-t border-border/20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-25" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-foreground">
              Why Choose RightSignal
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Curated Community</h3>
                  <p className="text-muted-foreground text-sm">Quality over quantity. Real people, real opportunities.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">No Algorithms</h3>
                  <p className="text-muted-foreground text-sm">No ads, no spam, no artificial feeds. Just honest connections.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Global Network</h3>
                  <p className="text-muted-foreground text-sm">Connect with ambitious people from 50+ countries.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Real Support</h3>
                  <p className="text-muted-foreground text-sm">Access mentorship, resources, and advice from experts.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-border/40 bg-card/50 p-8 backdrop-blur-sm">
              <div className="space-y-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-4 bg-border/20 rounded-full" />
                ))}
              </div>
              <div className="mt-8 p-4 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-sm text-muted-foreground">
                  Ready to join the ecosystem?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
