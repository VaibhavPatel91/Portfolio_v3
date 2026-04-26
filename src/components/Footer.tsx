'use client'
import { useEffect } from 'react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 px-6 md:px-12 bg-[#0A0A0A] border-t border-[#1C1C1A] text-[11px] font-mono tracking-[0.15em] flex flex-col md:grid md:grid-cols-3 items-center gap-8 text-[#555550] uppercase relative z-10 font-light">
      {/* Left */}
      <div className="md:text-left text-center">
        VAIBHAV KANSAGARA © 2025
      </div>

      {/* Center */}
      <div className="text-center text-[#C8A96E]">
        BUILD FAST, WITH ZERO FRICTION AND TOTAL FOCUS.
      </div>

      {/* Right */}
      <div className="md:text-right text-center">
        <button 
          onClick={scrollToTop}
          className="hover:text-[#F0EDE6] transition-colors duration-500 cursor-none"
        >
          BACK TO TOP ↑
        </button>
      </div>
    </footer>
  )
}
