import Header from '@/components/header'
import Hero from '@/components/hero'
import Problem from '@/components/problem'
import Ecosystem from '@/components/ecosystem'
import UserSegments from '@/components/user-segments'
import Features from '@/components/features'
import Comparison from '@/components/comparison'
import Journey from '@/components/journey'
import MobileDownload from '@/components/mobile-download'
import CTA from '@/components/cta'
import Footer from '@/components/footer'
import AnimatedSection from '@/components/motion/animated-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AnimatedSection direction="up"><Problem /></AnimatedSection>
      <AnimatedSection direction="right"><Ecosystem /></AnimatedSection>
      <AnimatedSection direction="left"><UserSegments /></AnimatedSection>
      <AnimatedSection direction="right"><Features /></AnimatedSection>
      <AnimatedSection direction="left"><Comparison /></AnimatedSection>
      <AnimatedSection direction="right"><Journey /></AnimatedSection>
      <AnimatedSection direction="left"><MobileDownload /></AnimatedSection>
      <AnimatedSection direction="up"><CTA /></AnimatedSection>
      <AnimatedSection direction="up"><Footer /></AnimatedSection>
    </main>
  )
}
