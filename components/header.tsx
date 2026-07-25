'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-md">
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
          <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
            How It Works
          </Link>
          <Link href="#community" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
            Community
          </Link>
        </nav>



        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-6 md:hidden p-2 text-foreground hover:bg-card/50 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border/30 bg-card/50 backdrop-blur-sm">
          <div className="px-6 py-4 space-y-3">
            <Link href="#features" className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </Link>
            <Link href="#community" className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Community
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
