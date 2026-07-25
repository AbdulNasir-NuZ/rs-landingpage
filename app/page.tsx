import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'
import HowItWorks from '@/components/how-it-works'
import Community from '@/components/community'
import Benefits from '@/components/benefits'
import Testimonial from '@/components/testimonial'
import MobileDownload from '@/components/mobile-download'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Community />
      <Benefits />
      <Testimonial />
      <MobileDownload />
      <CTA />
      <Footer />
    </main>
  )
}
