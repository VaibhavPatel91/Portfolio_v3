'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [time, setTime] = useState('')

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const scrollTrigger = ScrollTrigger.create({
      start: 50,
      onToggle: (self) => {
        setIsScrolled(self.isActive)
      },
    })

    const updateTime = () => {
      const now = new Date()
      const formatted = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Kolkata',
      })
      setTime(formatted)
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)

    return () => {
      scrollTrigger.kill()
      clearInterval(timer)
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[5000] px-6 md:px-10 py-6 md:py-8 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'bg-[#0A0A0A]/80 backdrop-blur-md' : 'bg-transparent'
        }`}
    >
      {/* Logo */}
      <Link href="/" className="font-mono text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-[#F0EDE6] uppercase">
        Vaibhav Kansagara
      </Link>

      {/* Center Logic - EXACT REFF CLOCK DESIGN */}
      <div className="hidden lg:block">
        <p className="font-mono text-[11px] font-normal tracking-[0.04em] text-[#F0EDE6]/50 uppercase">
          Ahmedabad, IN — {time} IST
        </p>
      </div>

      {/* Nav Items */}
      <div className="flex items-center gap-10 md:gap-14">
        {['WORK', 'ABOUT'].map((item) => (
          <Link
            key={item}
            href={item === 'WORK' ? '/work' : item === 'ABOUT' ? '/about' : `/#${item.toLowerCase()}`}
            className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#F0EDE6] hover:text-[#C8A96E] transition-colors uppercase"
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  )
}
