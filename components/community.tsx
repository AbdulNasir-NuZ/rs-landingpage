export default function Community() {
  const segments = [
    {
      title: 'Founders',
      description: 'Build your startup with co-founders, investors, and mentors who get it.',
      items: ['Find co-founders', 'Raise capital', 'Get advice'],
    },
    {
      title: 'Investors',
      description: 'Discover high-potential founders and investment opportunities.',
      items: ['Deal flow', 'Due diligence', 'Co-invest'],
    },
    {
      title: 'Professionals',
      description: 'Advance your career with strategic networking and opportunities.',
      items: ['Career growth', 'Partnerships', 'Leadership'],
    },
    {
      title: 'Students',
      description: 'Learn from founders and prepare for your entrepreneurial journey.',
      items: ['Mentorship', 'Internships', 'Learning'],
    },
  ]

  return (
    <section id="community" className="relative py-16 px-6 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-foreground">
            A Community for Everyone
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you&apos;re starting out or scaling up, there&apos;s a place for you here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((segment, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-xl border border-border/40 bg-card/50 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/20 mb-4 group-hover:bg-primary/30 transition-colors" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {segment.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {segment.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {segment.items.map((item, i) => (
                  <span key={i} className="px-2 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
