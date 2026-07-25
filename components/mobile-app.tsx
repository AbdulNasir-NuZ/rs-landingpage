export default function MobileApp() {
  const features = [
    'Stay connected wherever you are',
    'Receive instant notifications',
    'Connect with people',
    'Manage collaborations',
    'Discover opportunities',
    'Build relationships on the go',
  ]

  return (
    <section className="py-20 md:py-32 bg-background border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
                Download the RightSignal App
              </h2>
              <p className="text-xl text-muted-foreground">
                Opportunities don&apos;t wait. Stay connected wherever you are.
              </p>
            </div>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-foreground/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-foreground rounded-full"></div>
                  </div>
                  <span className="text-base text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-3 pt-4">
              <p className="text-sm text-muted-foreground">
                Available on iOS and Android
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-foreground text-background font-medium rounded-md hover:opacity-90 transition-opacity">
                  App Store
                </button>
                <button className="px-6 py-3 border border-border text-foreground font-medium rounded-md hover:bg-secondary transition-colors">
                  Google Play
                </button>
              </div>
              <p className="text-xs text-muted-foreground pt-2">
                Coming Soon
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="w-64 h-96 rounded-3xl border-8 border-secondary bg-secondary/20 relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-foreground/10 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-foreground/20 mx-auto"></div>
                  <p className="text-sm text-muted-foreground">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
