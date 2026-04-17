import type { Metadata } from 'next'
import { Montserrat, Oswald } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/contexts/language-context'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yueze Han | AI Product Manager & FinTech',
  description:
    'Principal platform with a focus on AI product management and FinTech innovation. Master of AI candidate at Monash University.',
  generator: 'Next.js',
  keywords: ['Yueze Han', 'AI Product Manager', 'FinTech', 'Monash University', 'Python', 'LLM', 'Product Development'],
  authors: [{ name: 'Yueze Han' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#1d3557',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-light-32x32.png' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Yueze Han | Personal Website',
    description: 'AI Product Manager & FinTech Innovator. Explore my projects and academic background.',
    url: 'https://hanyueze.top',
    siteName: 'Yueze Han',
    images: [
      {
        url: '/images/avatar.jpg',
        width: 1200,
        height: 630,
        alt: 'Yueze Han Profile',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yueze Han | AI Product Manager',
    description: 'AI Product Manager & FinTech Innovator.',
    images: ['/images/avatar.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${oswald.variable}`}
    >
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
