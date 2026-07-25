import Image from 'next/image'
import { Star } from 'lucide-react'

export default function Testimonial() {
  return (
    <section className="relative py-16 px-6 sm:py-20 overflow-hidden bg-transparent">


      <div className="relative max-w-4xl mx-auto text-center">
        <div className="mb-4 flex justify-center">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="size-5 fill-primary/70 text-primary/70" aria-hidden="true" />
            ))}
          </div>
        </div>

        <blockquote className="mb-8">
          <p className="text-2xl sm:text-3xl font-semibold text-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            RightSignal transformed how I connect with founders and investors. The signal-based matching algorithm helped me find my co-founder within weeks.
          </p>
        </blockquote>

        <div className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-full overflow-hidden mb-4 border border-border/40 bg-card">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
              alt="Sarah Anderson, founder and CEO"
              width={56}
              height={56}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-foreground">Sarah Anderson</p>
            <p className="text-sm text-muted-foreground">Founder &amp; CEO, TechFlow</p>
          </div>
        </div>
      </div>
    </section>
  )
}
