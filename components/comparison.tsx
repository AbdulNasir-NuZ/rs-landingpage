import { X, Check } from 'lucide-react'

export default function Comparison() {
  const comparisons = [
    { traditional: 'Endless scrolling', rightsignal: 'Purposeful growth' },
    { traditional: 'Followers', rightsignal: 'Meaningful relationships' },
    { traditional: 'Algorithms decide', rightsignal: 'You discover opportunities' },
    { traditional: 'Viral content', rightsignal: 'Valuable conversations' },
    { traditional: 'Entertainment first', rightsignal: 'Growth first' },
    { traditional: 'Ads everywhere', rightsignal: 'No ads' },
    { traditional: 'Random networking', rightsignal: 'Curated ecosystem' },
    { traditional: 'Consuming content', rightsignal: 'Building your future' },
  ]

  return (
    <section id="why-rightsignal" className="py-20 md:py-32 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-6 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
            Why RightSignal?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl border border-border/20 bg-white/[0.03] p-2 backdrop-blur-md shadow-2xl sm:p-4">
          <div className="grid grid-cols-2 gap-4 px-4 py-3 border-b border-border/20 text-xs font-semibold uppercase tracking-wider text-muted-foreground text-center">
            <div>Traditional Platforms</div>
            <div className="text-primary">RightSignal</div>
          </div>
          <div className="divide-y divide-border/10">
            {comparisons.map((item) => (
              <div
                key={item.traditional}
                className="grid grid-cols-2 gap-4 px-4 py-4 transition-colors duration-300 hover:bg-white/[0.02] first:pt-4 items-center"
              >
                <div className="text-sm sm:text-base text-muted-foreground/70 flex items-center gap-3 pl-4 sm:pl-8">
                  <X className="h-4 w-4 text-destructive/70 shrink-0" />
                  <span>{item.traditional}</span>
                </div>
                <div className="text-sm sm:text-base font-semibold text-foreground flex items-center gap-3 pl-4 sm:pl-8">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span>{item.rightsignal}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
