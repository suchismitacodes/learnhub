import type { Metadata, Viewport } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const viewport: Viewport = {
  themeColor: '#4361EE',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'LearnHub - Affordable Learning for Every Student',
  description: 'Quality courses from ₹100. Learn at your own pace with lifetime access, expert instructors, and a supportive student community.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
