export default function UserSegments() {
  const segments = [
    {
      title: 'Founders',
      items: [
        'Build your startup',
        'Find teammates',
        'Launch products',
        'Gain users',
        'Raise funding',
      ],
    },
    {
      title: 'Professionals',
      items: [
        'Expand your network',
        'Discover new opportunities',
        'Collaborate with ambitious people',
        'Build your personal brand',
        'Advance your career',
      ],
    },
    {
      title: 'Students',
      items: [
        'Gain real startup experience',
        'Find internships',
        'Work with founders',
        'Build your portfolio',
        'Launch your career',
      ],
    },
    {
      title: 'Freelancers',
      items: [
        'Showcase your skills',
        'Connect with businesses',
        'Find meaningful projects',
        'Build long-term relationships',
        'Scale your work',
      ],
    },
    {
      title: 'Businesses',
      items: [
        'Hire talent',
        'Find collaborators',
        'Build strategic partnerships',
        'Discover new markets',
        'Grow your team',
      ],
    },
    {
      title: 'Investors',
      items: [
        'Discover startups early',
        'Connect with founders',
        'Explore opportunities',
        'Access deal flow',
        'Build your portfolio',
      ],
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
            Built For Every Growth-Focused Individual
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Whether you&apos;re a founder, professional, student, freelancer, or investor
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border/40 bg-secondary/10 hover:bg-secondary/30 transition-all"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {segment.title}
              </h3>
              <ul className="space-y-3">
                {segment.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/60"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
