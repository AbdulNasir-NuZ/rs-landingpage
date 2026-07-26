'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, Download } from 'lucide-react'
import { m, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { premiumEase } from './motion/animated-section'
import { APP_DOWNLOAD_URL } from '@/lib/config'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('ecosystem')
  const reducedMotion = useReducedMotion()
  const links = [
    { href: '#ecosystem', label: 'Ecosystem', id: 'ecosystem' },
    { href: '#features', label: 'Grow', id: 'features' },
    { href: '#journey', label: 'Journey', id: 'journey' },
  ]

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24)

      const current = links.findLast((link) => {
        const section = document.getElementById(link.id)
        return section ? section.getBoundingClientRect().top <= 140 : false
      })
      if (current) setActiveLink(current.id)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    setActiveLink(id)
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState(null, '', `/#${id}`)
    }
  }

  return (
    <m.header
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-xl transition-all duration-500 border-b ${isScrolled ? 'bg-[#0d0f1a]/80 border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent border-transparent'}`}
      initial={reducedMotion ? false : { opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: premiumEase }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 relative flex-shrink-0">
            <Image
              src="/logo.png"
              alt="RightSignal"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground hidden sm:inline group-hover:text-[#BEB4FF] transition-colors">
            RightSignal
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`relative py-1 text-sm font-medium transition-colors duration-300 ${activeLink === link.id ? 'text-foreground' : 'text-[#9DA5AF] hover:text-foreground'}`}
              onClick={(e) => handleNavClick(e, link.id)}
            >
              {link.label}
              {activeLink === link.id && (
                <m.span
                  layoutId="active-nav-indicator"
                  className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#6A53FF] rounded-full shadow-[0_0_8px_rgba(106,83,255,0.8)]"
                  transition={{ duration: 0.5, ease: premiumEase }}
                />
              )}
            </a>
          ))}
          
          <Link 
            href="https://app.rightsignal.social" 
            target="_blank" 
            className="ml-4 rounded-full bg-[#6A53FF] px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-[#8B7AFF] hover:shadow-[0_0_15px_rgba(106,83,255,0.4)]"
          >
            Get Started <span aria-hidden="true">&rarr;</span>
          </Link>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground hover:bg-white/5 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>

      {isOpen && (
        <m.div
          className="md:hidden border-t border-white/5 bg-[#0d0f1a]/95 backdrop-blur-md"
          initial={reducedMotion ? false : { opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3, ease: premiumEase }}
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`text-base font-medium transition-colors ${activeLink === link.id ? 'text-[#BEB4FF]' : 'text-[#9DA5AF] hover:text-foreground'}`}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 mt-2">
              <Link 
                href="https://app.rightsignal.social" 
                target="_blank" 
                className="inline-flex w-full justify-center rounded-lg bg-[#6A53FF] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#8B7AFF]"
              >
                Get Started
              </Link>
            </div>
          </div>
        </m.div>
      )}
    </m.header>
  )
}
