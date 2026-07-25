import {
  BriefcaseBusiness,
  Building2,
  CircleDollarSign,
  GraduationCap,
  Laptop,
  Rocket,
} from 'lucide-react'
import SpotlightCard from '@/components/motion/spotlight-card'
import { StaggerContainer, StaggerItem } from '@/components/motion/stagger'

export default function UserSegments() {
  const segments = [
    {
      title: 'Founders',
      icon: Rocket,
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
      icon: BriefcaseBusiness,
      items: [
        'Expand your network',
        'Discover new opportunities',
        'Collaborate with ambitious people',
      ],
    },
    {
      title: 'Students',
      icon: GraduationCap,
      items: [
        'Gain real startup experience',
        'Find internships',
        'Work with founders',
        'Build your portfolio',
      ],
    },
    {
      title: 'Freelancers',
      icon: Laptop,
      items: [
        'Showcase your skills',
        'Connect with businesses',
        'Find meaningful projects',
      ],
    },
    {
      title: 'Businesses',
      icon: Building2,
      items: [
        'Hire talent',
        'Find collaborators',
        'Build strategic partnerships',
      ],
    },
    {
      title: 'Investors',
      icon: CircleDollarSign,
      items: [
        'Discover startups before everyone else',
        'Connect with founders building real products',
        'Explore curated funding opportunities',
      ],
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
            Built For Every Growth Focused Individual
          </h2>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((segment) => (
            <StaggerItem key={segment.title}>
              <SpotlightCard className="motion-card h-full rounded-xl border border-border/40 bg-card/50 p-6 transition-colors duration-300 hover:border-primary/50 hover:bg-card/80">
                <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-primary/15 text-primary transition-colors group-hover:bg-primary/25">
                  <segment.icon className="size-5 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {segment.title}
                </h3>
                <ul className="space-y-3">
                  {segment.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="size-1.5 rounded-full bg-primary/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
