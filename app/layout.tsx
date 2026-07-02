import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CreovaLab - Create Faceless Content Faster',
  description: 'AI Workspace untuk Content Creator Faceless. Generate AI scripts, voiceovers, subtitles, captions dalam satu workspace.',
  keywords: 'faceless content, AI content creator, YouTube automation, TikTok creator, text to speech, subtitle generator',
  authors: [{ name: 'CreovaLab' }],
  openGraph: {
    title: 'CreovaLab - Create Faceless Content Faster',
    description: 'AI Workspace untuk Content Creator Faceless',
    url: 'https://creovalab.com',
    siteName: 'CreovaLab',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CreovaLab - Create Faceless Content Faster',
    description: 'AI Workspace untuk Content Creator Faceless',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#09090B] text-[#FAFAFA] antialiased">
        {children}
      </body>
    </html>
  )
}