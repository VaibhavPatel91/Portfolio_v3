'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null)
  const firstRowRef = useRef<HTMLDivElement>(null)
  const secondRowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // First row: scroll left, speed depends on scroll
      const firstRow = firstRowRef.current
      if (firstRow) {
        gsap.to(firstRow, {
          xPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          }
        })
      }

      // Second row: scroll right
      const secondRow = secondRowRef.current
      if (secondRow) {
        gsap.to(secondRow, {
          xPercent: 50,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.8,
          }
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const line1 = "REACT.JS · NEXT.JS · TYPESCRIPT · BUILD FAST WITH ZERO FRICTION AND TOTAL FOCUS · NODE.JS · GSAP · "
  const line2 = "UI/UX IMPLEMENTATION · SCALABLE SYSTEMS · PRODUCTION GRADE · ZERO FRICTION · "
  
  const repeat1 = new Array(15).fill(line1).join("")
  const repeat2 = new Array(15).fill(line2).join("")

  return (
    <section ref={containerRef} className="py-20 md:py-32 overflow-hidden border-t border-b border-[#1C1C1A] bg-[#0A0A0A] relative z-20">
      <div className="flex flex-col gap-8 md:gap-16 select-none pointer-events-none opacity-40">
        <div ref={firstRowRef} className="whitespace-nowrap flex leading-none translate-x-[15%]">
          <span className="font-accent text-[80px] md:text-[140px] text-[#1C1C1A] tracking-[0.05em] uppercase hover:text-[#C8A96E]/20 transition-colors duration-700">
            {repeat1}
          </span>
        </div>
        <div ref={secondRowRef} className="whitespace-nowrap flex leading-none -translate-x-[45%]">
          <span className="font-accent text-[80px] md:text-[140px] text-[#1C1C1A] tracking-[0.05em] uppercase hover:text-[#C8A96E]/20 transition-colors duration-700">
            {repeat2}
          </span>
        </div>
      </div>
    </section>
  )
}
