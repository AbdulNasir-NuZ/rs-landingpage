'use client'

import {
  CalendarDays,
  FlaskConical,
  Handshake,
  Network,
  WalletCards,
} from 'lucide-react'
import SpotlightCard from '@/components/motion/spotlight-card'
import { StaggerContainer, StaggerItem } from '@/components/motion/stagger'

import { m, useReducedMotion } from 'framer-motion'
import { premiumEase } from '@/components/motion/animated-section'

export default function Features() {
  const reducedMotion = useReducedMotion()
  const features = [
    {
      title: 'Network',
      icon: Network,
      description: 'Meaningful connections with people who share your ambitions, not just another followers list.',
    },
    {
      title: 'Collab',
      icon: Handshake,
      description: 'Build Together. Whether you\'re launching a startup, building a product, or working on a project, Collab helps you find the right people and turn ideas into execution. Create & Manage your startup. Showcase your products. Build your team. Collaborate from one place.',
    },
    {
      title: 'Funding',
      icon: WalletCards,
      description: 'Turn Execution Into Investment. Great startups deserve visibility. The Funding ecosystem helps promising founders connect with investors, mentors, and strategic partners based on progress, not popularity. When you\'re ready to scale, the right opportunities are already within reach.',
    },
    {
      title: 'Sandbox',
      icon: FlaskConical,
      description: 'A four-week startup challenge where ideas become products. Submit your idea. Build a team. Launch an MVP. Validate it with real users. Pitch on Demo Day. The best startups unlock funding, mentorship, and ecosystem support.',
    },
    {
      title: 'Events',
      icon: CalendarDays,
      description: 'Workshops. Networking. Startup challenges. Expert sessions. Learn from people who\'ve already built what you\'re trying to build.',
    },
  ]

  return (
    <section id="features" className="relative py-20 md:py-32 bg-transparent overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Everything You Need To Grow
          </h2>
        </div>

        <m.div 
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
          initial={reducedMotion ? false : 'hidden'}
          whileInView={reducedMotion ? undefined : 'show'}
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.25 } }
          }}
        >
          {features.map((feature) => (
            <m.div 
              key={feature.title} 
              className="h-full"
              variants={{
                hidden: { opacity: 0, y: -40, scale: 0.98 },
                show: { opacity: 1, y: 0, scale: 1 }
              }}
              transition={{ duration: 0.7, ease: premiumEase }}
            >
              <SpotlightCard className="motion-card flex h-full min-h-[190px] flex-col rounded-xl border border-border/40 bg-card/50 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-primary/50 hover:bg-card/80">
                <div className="mb-5 flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary transition-colors group-hover:bg-primary/25">
                  <feature.icon className="size-5 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold leading-tight text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </SpotlightCard>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  )
}
