export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Create Your Profile',
      description: 'Set up your profile with your goals, expertise, and interests.',
    },
    {
      number: '02',
      title: 'Find Your Community',
      description: 'Discover people and opportunities that align with your ambitions.',
    },
    {
      number: '03',
      title: 'Connect & Collaborate',
      description: 'Build meaningful relationships and start working together.',
    },
    {
      number: '04',
      title: 'Grow Together',
      description: 'Scale your projects with support from your network.',
    },
  ]

  return (
    <section id="how-it-works" className="relative py-16 px-6 sm:py-20 overflow-hidden border-t border-border/20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/8 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes and start building real connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="p-6 rounded-xl border border-border/40 bg-card/50 backdrop-blur-sm hover:border-border/60 transition-colors">
                <div className="text-4xl font-bold text-primary/30 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
