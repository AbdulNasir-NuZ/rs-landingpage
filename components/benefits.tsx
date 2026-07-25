import Image from 'next/image'
import { CheckCircle2, Globe2, HeartHandshake, ShieldCheck } from 'lucide-react'

export default function Benefits() {
  const benefits = [
    {
      title: 'Curated Community',
      description: 'Quality over quantity. Real people, real opportunities.',
      icon: ShieldCheck,
    },
    {
      title: 'No Algorithms',
      description: 'No ads, no spam, no artificial feeds. Just honest connections.',
      icon: CheckCircle2,
    },
    {
      title: 'Global Network',
      description: 'Connect with ambitious people from 50+ countries.',
      icon: Globe2,
    },
    {
      title: 'Real Support',
      description: 'Access mentorship, resources, and advice from experts.',
      icon: HeartHandshake,
    },
  ]

  return (
    <section className="relative py-16 px-6 sm:py-20 overflow-hidden bg-transparent">


      <div className="relative max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-foreground">
              Why Choose RightSignal
            </h2>
            <div className="space-y-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/20 text-primary flex items-center justify-center mt-1">
                    <benefit.icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative min-h-[420px] overflow-hidden rounded-xl border border-border/40 bg-card/50 backdrop-blur-sm">
              <Image
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80"
                alt="Mentor and professionals discussing growth opportunities"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="rounded-lg border border-primary/20 bg-background/75 p-4 backdrop-blur-md">
                  <p className="text-sm font-medium text-foreground">
                    A people-first network built around trust, mentorship, and meaningful opportunity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
