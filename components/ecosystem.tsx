export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-20 md:py-32 bg-secondary/5 border-t border-border/40">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
            One Platform. Every Opportunity.
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            RightSignal is more than a professional network. It&apos;s an ecosystem where ambitious people connect, collaborate, build, learn, and grow together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">For Builders</h3>
            <p className="text-muted-foreground">
              Whether you&apos;re starting your first company, launching a product, or building your next venture, find your co-founders, teammates, and supporters.
            </p>
            <ul className="space-y-3">
              {['Access to resources', 'Community support', 'Funding opportunities', 'Mentorship'].map((item, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground">
                  <span className="text-foreground font-bold">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">For Connectors</h3>
            <p className="text-muted-foreground">
              Discover ambitious people building the future. Connect professionals with opportunities. Facilitate meaningful collaborations that drive growth.
            </p>
            <ul className="space-y-3">
              {['Match making', 'Networking events', 'Collaboration tools', 'Success stories'].map((item, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground">
                  <span className="text-foreground font-bold">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">For Investors</h3>
            <p className="text-muted-foreground">
              Get early access to promising founders and innovative startups. Track progress through execution. Build relationships with the next generation of leaders.
            </p>
            <ul className="space-y-3">
              {['Deal flow', 'Due diligence', 'Portfolio tracking', 'Network effects'].map((item, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground">
                  <span className="text-foreground font-bold">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">For Professionals</h3>
            <p className="text-muted-foreground">
              Advance your career through meaningful connections. Discover opportunities aligned with your ambitions. Build your reputation and expand your impact.
            </p>
            <ul className="space-y-3">
              {['Career growth', 'Skill development', 'Market insights', 'Leadership community'].map((item, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground">
                  <span className="text-foreground font-bold">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
