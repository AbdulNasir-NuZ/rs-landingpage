import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'
import Ecosystem from '@/components/ecosystem'
import UserSegments from '@/components/user-segments'
import Problem from '@/components/problem'
import Community from '@/components/community'
import Comparison from '@/components/comparison'
import Journey from '@/components/journey'
import MobileDownload from '@/components/mobile-download'
import Footer from '@/components/footer'
import AnimatedSection from '@/components/motion/animated-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden w-full max-w-full">
      <Header />
      {/* 1. Hero with Luminous Subscribe Input & Badges */}
      <Hero />
      {/* 2. Essential Features with 3D Graphics Cards */}
      <AnimatedSection direction="up"><Features /></AnimatedSection>
      {/* 3. Ecosystem Pulse with Floating Stats Cards in Coral Grid */}
      <AnimatedSection direction="right"><Ecosystem /></AnimatedSection>
      {/* 4. Global Orbit Rings & 6 Feature Grid */}
      <AnimatedSection direction="left"><UserSegments /></AnimatedSection>
      {/* 5. Implementation Code Widget & 3 List Items */}
      <AnimatedSection direction="up"><Problem /></AnimatedSection>
      {/* 6. Community Wall (Loved by a global community) */}
      <AnimatedSection direction="right"><Community /></AnimatedSection>
      {/* 7. Comparison Table */}
      <AnimatedSection direction="left"><Comparison /></AnimatedSection>
      {/* 8. Roadmap Journey */}
      <AnimatedSection direction="right"><Journey /></AnimatedSection>
      {/* 9. Mobile App Download */}
      <AnimatedSection direction="left"><MobileDownload /></AnimatedSection>
      {/* 10. Footer with Get Started Today for Free CTA */}
      <AnimatedSection direction="up"><Footer /></AnimatedSection>
    </main>
  )
}
