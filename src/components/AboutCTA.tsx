'use client'
import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function AboutCTA() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from(".about-cta-reveal", {
        y: 40,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-32 md:py-48 px-6 md:px-12 bg-[#0A0A0A] relative z-10 flex flex-col items-center justify-center text-center">

      <h2 className="text-[40px] md:text-[60px] lg:text-[80px] leading-[1.1] lg:leading-[84px] font-display font-bold uppercase tracking-tighter mb-12 about-cta-reveal flex flex-col items-center gap-1 md:gap-0">
        <span className="text-[#F0EDE6]" style={{ WebkitTextStroke: '1.5px #F0EDE6', letterSpacing: '1px' }}>THE ARCHITECT</span>
        <span>
          <span className="text-[#F0EDE6]" style={{ WebkitTextStroke: '1.5px #F0EDE6', letterSpacing: '1px' }}>BEHIND THE </span>
          {/* <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #F0EDE6' }}>WORK.</span> */}
          <span className="text-hollow tracking-tight" style={{ letterSpacing: '1px' }}>WORK.</span>
        </span>
      </h2>


      <div className="space-y-1 mb-16 font-body font-light text-[15px] md:text-[18px] text-[#555550] tracking-wide about-cta-reveal max-w-2xl mx-auto">
        <p>Systems that scale. Typography that respects the reader.</p>
        <p>Interactions that feel inevitable.</p>
      </div>

      <div className="about-cta-reveal">
        <Link
          href="/about"
          className="group inline-flex flex-col items-center cursor-none"
        >
          <span className="font-mono text-[10px] md:text-[11px] tracking-[0.2em] font-bold text-[#C7F284] uppercase transition-colors duration-300 pb-2">
            VIEW FULL PROFILE
          </span>
          <span className="w-full h-[1px] bg-[#C7F284]/30 group-hover:bg-[#C7F284] transition-all duration-300 transform scale-x-75 group-hover:scale-x-100 origin-center"></span>
        </Link>
      </div>

    </section>
  )
}
