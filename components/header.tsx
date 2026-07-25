'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { m, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { premiumEase } from './motion/animated-section'

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

  return (
    <m.header
      className={`sticky top-0 z-50 backdrop-blur-xl transition-colors duration-500 ${isScrolled ? 'bg-background/88 shadow-lg shadow-black/10' : 'bg-background/35'}`}
      initial={reducedMotion ? false : { opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: premiumEase }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center">
        <Link href="/" className="absolute left-6 flex items-center gap-2.5 group">
          <div className="w-9 h-9 relative flex-shrink-0">
            <Image
              src="/logo.png"
              alt="RightSignal"
              width={36}
              height={36}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground hidden sm:inline">
            RightSignal
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="group relative py-1 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              onClick={() => setActiveLink(link.id)}
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-foreground/80 transition-transform duration-300 group-hover:scale-x-100" />
              {activeLink === link.id && (
                <m.span
                  layoutId="active-nav-indicator"
                  className="absolute inset-x-0 -bottom-1 h-px bg-primary"
                  transition={{ duration: 0.5, ease: premiumEase }}
                />
              )}
            </Link>
          ))}
        </nav>



        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-6 md:hidden p-2 text-foreground hover:bg-card/50 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>

      {isOpen && (
        <m.div
          className="md:hidden border-t border-border/30 bg-card/50 backdrop-blur-sm"
          initial={reducedMotion ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: premiumEase }}
        >
          <div className="px-6 py-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="block text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => {
                  setActiveLink(link.id)
                  setIsOpen(false)
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </m.div>
      )}
    </m.header>
  )
}
