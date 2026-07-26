import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'RightSignal',
    short_name: 'RightSignal',
    description: 'The Global Ecosystem for Growth Focused Individuals',
    start_url: '/',
    display: 'standalone',
    background_color: '#0d0f1a',
    theme_color: '#0a0a0a',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
