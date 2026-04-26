'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const certifications = [
  { name: "Web Dev Bootcamp", provider: "Dr. Angela Yu · Udemy" },
  { name: "Full Stack MERN", provider: "Grass Solutions" },
  { name: "Advanced JavaScript", provider: "Udemy" },
]

export default function Certifications() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(containerRef.current,
        { opacity: 0, y: 20 },
        { 
          opacity: 1, y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 95%",
          }
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-20 px-6 md:px-12 bg-[#0A0A0A] relative z-10 overflow-hidden border-t border-[#1C1C1A]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
        {certifications.map((cert, i) => (
          <div key={i} className="flex items-center gap-6 md:gap-12 group cursor-none">
            <div className="text-center md:text-left">
              <p className="font-mono text-[12px] text-[#F0EDE6] tracking-[0.15em] uppercase hover:text-[#C8A96E] transition-colors duration-500">
                {cert.name}
              </p>
              <p className="font-mono text-[10px] text-[#555550] tracking-[0.1em] uppercase mt-2">
                {cert.provider}
              </p>
            </div>
            {i !== certifications.length - 1 && (
              <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#C8A96E] opacity-20 group-hover:opacity-100 transition-opacity duration-700" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
