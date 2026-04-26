import type { Metadata } from 'next'
import { Space_Grotesk, DM_Sans, DM_Mono, Bebas_Neue } from 'next/font/google'
import './globals.css'
import { SmoothScrollProvider } from '@/providers/SmoothScrollProvider'
import CustomCursor from '@/components/CustomCursor'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-dm-mono',
})

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
})

export const metadata: Metadata = {
  title: 'Vaibhav Kansagara | Front-End Software Engineer',
  description: 'Front-End Software Engineer specializing in building immersive, production-grade web applications with React, Next.js, and GSAP.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} ${dmMono.variable} ${bebas.variable} dark h-full antialiased overflow-x-hidden scroll-smooth transition-color duration-500`}>
      <body className="bg-[#0A0A0A] text-[#F0EDE6] selection:bg-[#C8A96E]/30 selection:text-white min-h-screen overflow-x-hidden cursor-none font-body font-light">
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
