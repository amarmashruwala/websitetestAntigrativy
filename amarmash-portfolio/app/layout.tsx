import type { Metadata } from 'next'
import { Inter, Inter_Tight, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import '@/styles/globals.css'
import Navigation from '@/components/sections/Navigation'
import Footer from '@/components/sections/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const interTight = Inter_Tight({ 
  subsets: ['latin'],
  variable: '--font-inter-tight',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Amar Mashruwala | Media Technology Strategist',
  description: 'Technical Program and Operations Manager building intelligent media systems across AV, cloud, and AI. Founder of MediaTech Solutions.',
  keywords: ['Media Technology', 'Live Streaming', 'AWS', 'Broadcast Engineering', 'AI Automation', 'Technical Program Management'],
  authors: [{ name: 'Amar Mashruwala' }],
  openGraph: {
    title: 'Amar Mashruwala | Media Technology Strategist',
    description: 'Architecting intelligent media systems across AV, cloud, and AI',
    type: 'website',
    locale: 'en_AU',
    siteName: 'Amar Mashruwala Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amar Mashruwala | Media Technology Strategist',
    description: 'Architecting intelligent media systems across AV, cloud, and AI',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable} font-display antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
