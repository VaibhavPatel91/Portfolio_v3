'use client'
import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AboutIntro from '@/components/AboutIntro'
import StatsBanner from '@/components/StatsBanner'
import Timeline from '@/components/Timeline'
import Toolkit from '@/components/Toolkit'

export default function AboutPage() {
  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="bg-[#0A0A0A] min-h-screen selection:bg-[#C8A96E]/30 text-[#F0EDE6] overflow-x-hidden pt-20 md:pt-32">
      <Navbar />

      <div className="w-full flex flex-col min-h-screen relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 w-full">
          <AboutIntro />
        </div>
        <StatsBanner />
        <Timeline />
        <Toolkit />
      </div>

      <Footer />
    </main>
  )
}
