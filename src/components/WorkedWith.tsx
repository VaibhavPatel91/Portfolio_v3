'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const partners = [
  { name: "UNIQUE LAW FIRM", sector: "LAW" },
  { name: "SUNSHINE GROUP", sector: "EDUCATION" },
  { name: "UNIQUE FINANCE", sector: "FINANCE" },
  { name: "ATLAS METAL", sector: "MANUFACTURING" },
]

export default function WorkedWith() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const rows = containerRef.current?.querySelectorAll('.partner-row')
      rows?.forEach((row, i) => {
        gsap.fromTo(row,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0,
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: {
              trigger: row,
              start: "top 90%",
            },
            delay: i * 0.1
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-32 px-6 md:px-12 bg-[#0A0A0A] relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#1C1C1A] pb-8 md:pb-12 space-y-6 md:space-y-0">
          <h2 className="text-5xl md:text-7xl lg:text-[90px] font-display font-bold text-[#F0EDE6] uppercase leading-none tracking-tighter">
            WORKED <span className="text-transparent [-webkit-text-stroke:1px_#F0EDE6]">WITH</span>
          </h2>
          <p className="font-mono text-[10px] md:text-[11px] text-[#555550] tracking-[0.2em] uppercase max-w-[200px] leading-relaxed md:text-right">
            ENTERPRISE & GLOBAL PARTNERS
          </p>
        </div>

        {/* Column Labels */}
        <div className="flex justify-between border-b border-[#1C1C1A] py-6 mb-8 mt-4 md:mt-12">
          <span className="font-mono text-[10px] text-[#555550] tracking-[0.2em] uppercase">PARTNER</span>
          <span className="font-mono text-[10px] text-[#555550] tracking-[0.2em] uppercase">SECTOR</span>
        </div>

        {/* Partner Rows */}
        <div className="flex flex-col">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="partner-row group flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 border-b border-[#1C1C1A] hover:bg-[#111111] transition-colors duration-500 cursor-none px-4 md:px-8 -mx-4 md:-mx-8 rounded-lg"
            >
              {/* Hollow text that fills on hover */}
              <h3 className="font-display font-bold text-5xl md:text-7xl lg:text-[100px] uppercase tracking-tighter leading-none text-transparent [-webkit-text-stroke:1px_#444440] group-hover:text-[#C7F284] group-hover:[-webkit-text-stroke:0px] transition-all duration-500 will-change-transform group-hover:translate-x-4">
                {partner.name}
              </h3>

              <p className="font-mono text-[10px] md:text-[11px] text-[#555550] tracking-[0.2em] uppercase mt-6 md:mt-0 transition-all duration-500 group-hover:text-[#F0EDE6]/80 group-hover:-translate-x-4">
                {partner.sector}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
