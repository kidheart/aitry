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
  title: 'Yueze Han',
  description:
    'Personal homepage of Yueze Han — Master of Artificial Intelligence candidate at Monash University, with a Bachelor of Engineering in Computer Science. AI product development, applied machine learning, and full-stack intelligent systems.',
  generator: 'Next.js',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-light-32x32.png' },
    ],
    apple: '/apple-icon.png',
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
