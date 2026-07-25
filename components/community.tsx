import Image from 'next/image'
import { BriefcaseBusiness, CircleDollarSign, GraduationCap, Rocket } from 'lucide-react'

export default function Community() {
  const segments = [
    {
      title: 'Founders',
      description: 'Build your startup with co-founders, investors, and mentors who get it.',
      items: ['Find co-founders', 'Raise capital', 'Get advice'],
      icon: Rocket,
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=700&q=80',
      imageAlt: 'Founders collaborating during a startup meeting',
    },
    {
      title: 'Investors',
      description: 'Discover high-potential founders and investment opportunities.',
      items: ['Deal flow', 'Due diligence', 'Co-invest'],
      icon: CircleDollarSign,
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=80',
      imageAlt: 'Investor and founder discussing business growth',
    },
    {
      title: 'Professionals',
      description: 'Advance your career with strategic networking and opportunities.',
      items: ['Career growth', 'Partnerships', 'Leadership'],
      icon: BriefcaseBusiness,
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=80',
      imageAlt: 'Professionals working together in a modern office',
    },
    {
      title: 'Students',
      description: 'Learn from founders and prepare for your entrepreneurial journey.',
      items: ['Mentorship', 'Internships', 'Learning'],
      icon: GraduationCap,
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=700&q=80',
      imageAlt: 'Student and mentor reviewing work on a laptop',
    },
  ]

  return (
    <section id="community" className="relative py-16 px-6 sm:py-20 overflow-hidden">


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
              className="group overflow-hidden rounded-xl border border-border/40 bg-card/50 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="relative h-40">
                <Image
                  src={segment.image}
                  alt={segment.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
              </div>
              <div className="p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/20 mb-4 group-hover:bg-primary/30 transition-colors text-primary flex items-center justify-center">
                  <segment.icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
                </div>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
