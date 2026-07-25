import Link from 'next/link'
import Image from 'next/image'

const linkClass = 'relative text-sm text-muted-foreground transition-colors hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-foreground/70 after:transition-transform after:duration-300 hover:after:scale-x-100'
const quietLinkClass = 'text-sm text-muted-foreground hover:text-foreground transition-colors'

export default function Footer() {
  return (
    <footer className="relative border-t border-border/20 bg-card/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 relative">
                <Image
                  src="/logo.png"
                  alt="RightSignal"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="font-semibold text-foreground">RightSignal</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Where signals align. A global ecosystem for founders, investors, and professionals to connect, collaborate, and grow together.
            </p>
            <div className="flex gap-4">
              <a href="https://app.rightsignal.social" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-primary/10 hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center justify-center hover:-translate-y-0.5" aria-label="Facebook">
                <span className="text-xs font-bold text-primary">f</span>
              </a>
              <a href="https://app.rightsignal.social" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-primary/10 hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center justify-center hover:-translate-y-0.5" aria-label="Twitter">
                <span className="text-xs font-bold text-primary">x</span>
              </a>
              <a href="https://app.rightsignal.social" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-primary/10 hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center justify-center hover:-translate-y-0.5" aria-label="LinkedIn">
                <span className="text-xs font-bold text-primary">in</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Product</h4>
            <ul className="space-y-3">
              <li><Link href="#features" className={linkClass}>Features</Link></li>
              <li><a href="https://app.rightsignal.social" target="_blank" rel="noopener noreferrer" className={linkClass}>Pricing</a></li>
              <li><Link href="#why-rightsignal" className={linkClass}>Security</Link></li>
              <li><Link href="#journey" className={linkClass}>Roadmap</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Company</h4>
            <ul className="space-y-3">
              <li><Link href="#ecosystem" className={linkClass}>About</Link></li>
              <li><a href="https://app.rightsignal.social" target="_blank" rel="noopener noreferrer" className={linkClass}>Blog</a></li>
              <li><a href="mailto:hello@rightsignal.social" className={linkClass}>Contact</a></li>
              <li><a href="https://app.rightsignal.social" target="_blank" rel="noopener noreferrer" className={linkClass}>Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 RightSignal. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="https://app.rightsignal.social/privacy" target="_blank" rel="noopener noreferrer" className={quietLinkClass}>
              Privacy Policy
            </a>
            <a href="https://app.rightsignal.social/terms" target="_blank" rel="noopener noreferrer" className={quietLinkClass}>
              Terms of Service
            </a>
            <a href="https://app.rightsignal.social/cookies" target="_blank" rel="noopener noreferrer" className={quietLinkClass}>
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
