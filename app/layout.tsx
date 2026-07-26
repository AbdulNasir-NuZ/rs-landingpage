import type { Metadata, Viewport } from 'next'
import AmbientBackground from '@/components/motion/ambient-background'
import MotionProvider from '@/components/motion/motion-provider'
import ScrollProgress from '@/components/motion/scroll-progress'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://rightsignal.social'),
  title: {
    default: 'RightSignal | The Global Ecosystem for Growth Focused Individuals',
    template: '%s | RightSignal',
  },
  description: 'RightSignal brings founders, professionals, students, freelancers, businesses, and investors together to connect, collaborate, build, learn, and grow.',
  keywords: [
    'RightSignal',
    'founder community',
    'startup network',
    'professional networking',
    'investor network',
    'mentorship platform',
    'business collaboration',
  ],
  applicationName: 'RightSignal',
  authors: [{ name: 'RightSignal' }],
  creator: 'RightSignal',
  publisher: 'RightSignal',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [{ url: '/logo.png', type: 'image/png' }],
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'RightSignal',
    title: 'RightSignal | The Global Ecosystem for Growth Focused Individuals',
    description: 'Meet founders, professionals, students, freelancers, businesses, and investors through a signal-focused growth ecosystem.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'RightSignal logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RightSignal | The Global Ecosystem for Growth Focused Individuals',
    description: 'Connect, collaborate, build, learn, and grow with the right people.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'RightSignal',
  url: 'https://rightsignal.social',
  logo: 'https://rightsignal.social/logo.png',
  description: 'A global ecosystem for founders, professionals, students, freelancers, businesses, and investors to build, learn, and grow together.',
  sameAs: ['https://app.rightsignal.social'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="bg-background text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').catch(function(err) {
                    console.log('SW registration failed: ', err);
                  });
                });
              }
            `,
          }}
        />
        <MotionProvider>
          <AmbientBackground />
          <ScrollProgress />
          {children}
        </MotionProvider>
      </body>
    </html>
  )
}
