export default function Journey() {
  const steps = [
    { number: '01', title: 'Join the ecosystem', description: 'Get started in minutes' },
    { number: '02', title: 'Build your profile', description: 'Showcase your story' },
    { number: '03', title: 'Meet the right people', description: 'Connect with aligned individuals' },
    { number: '04', title: 'Collaborate on opportunities', description: 'Work on meaningful projects' },
    { number: '05', title: 'Launch your next milestone', description: 'Execute and grow' },
    { number: '06', title: 'Grow together', description: 'Build the future' },
  ]

  return (
    <section id="journey" className="py-20 md:py-32 bg-secondary/5 border-t border-border/40">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
            Your Journey Starts Here
          </h2>
          <p className="text-lg text-muted-foreground">
            From joining to building—the path to growth
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-lg bg-foreground/10 border border-border/40 flex items-center justify-center">
                  <span className="text-2xl font-bold text-foreground">{step.number}</span>
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute left-[57px] h-12 w-0.5 bg-gradient-to-b from-foreground/40 to-foreground/10 mt-16"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
