export default function Comparison() {
  const comparisons = [
    { traditional: 'Endless scrolling', rightsignal: 'Purposeful growth' },
    { traditional: 'Followers count', rightsignal: 'Meaningful relationships' },
    { traditional: 'Algorithms decide', rightsignal: 'You discover opportunities' },
    { traditional: 'Viral content', rightsignal: 'Valuable conversations' },
    { traditional: 'Entertainment first', rightsignal: 'Growth first' },
    { traditional: 'Ads everywhere', rightsignal: 'No ads' },
    { traditional: 'Random networking', rightsignal: 'Curated ecosystem' },
    { traditional: 'Consuming content', rightsignal: 'Building your future' },
  ]

  return (
    <section className="py-20 md:py-32 bg-background border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
            Why RightSignal?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Designed from the ground up for growth, not engagement metrics
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/40">
                <th className="text-left py-4 px-6 font-semibold text-foreground">
                  Traditional Platforms
                </th>
                <th className="text-left py-4 px-6 font-semibold text-foreground">
                  RightSignal
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-border/20 hover:bg-secondary/20 transition-colors"
                >
                  <td className="py-4 px-6 text-muted-foreground">
                    {item.traditional}
                  </td>
                  <td className="py-4 px-6 text-foreground font-medium">
                    {item.rightsignal}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
