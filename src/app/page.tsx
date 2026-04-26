'use client'
import { useState } from 'react'
import Preloader from '@/components/Preloader'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WorkedWith from '@/components/WorkedWith'
import AboutCTA from '@/components/AboutCTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Marquee from '@/components/Marquee'

export default function Home() {
  const [loading, setLoading] = useState(true)

  return (
    <main className="relative min-h-screen bg-[#0A0A0A]">
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <div className="fade-in">
          <Navbar />
          <Hero />
          <Marquee />
          {/* <About /> */}
          <Services />
          <WorkedWith />
          <AboutCTA />
          <Contact />
          <Footer />
        </div>
      )}
    </main>
  )
}
