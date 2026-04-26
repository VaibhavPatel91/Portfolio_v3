'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function StatsBanner() {
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const stats = statsRef.current?.querySelectorAll(".stat-number")
      stats?.forEach((stat) => {
        const val = parseInt(stat.getAttribute("data-value") || "0")
        const obj = { value: 0 }
        gsap.to(obj, {
          value: val,
          duration: 2.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: stat,
            start: "top 95%",
          },
          onUpdate: () => {
            stat.textContent = Math.floor(obj.value).toString() + (stat.getAttribute("data-suffix") || "")
          }
        })
      })
    }, statsRef)

    return () => ctx.revert()
  }, [])

  // bgcolors options - #E2FF9C, #C7F284

  return (
    <section className="w-full bg-[#C7F284] py-24 px-6 md:px-12 text-[#000000] my-20 lg:my-32">
      <div ref={statsRef} className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">

        <div className="flex flex-col items-center justify-center text-center">
          <span className="stat-number font-display text-[58px] leading-[86px] font-[700] tracking-tight mb-2" data-value="20" data-suffix="+">3+</span>
          <p className="font-mono text-[13px] leading-[20px] font-[400] uppercase tracking-[0.2em] opacity-80">Years Experience</p>
        </div>

        <div className="flex flex-col items-center justify-center text-center">
          <span className="stat-number font-display text-[58px] leading-[86px] font-[700] tracking-tight mb-2" data-value="6" data-suffix="">3</span>
          <p className="font-mono text-[13px] leading-[20px] font-[400] uppercase tracking-[0.2em] opacity-80">Major Brands</p>
        </div>

        <div className="flex flex-col items-center justify-center text-center">
          <span className="stat-number font-display text-[58px] leading-[86px] font-[700] tracking-tight mb-2" data-value="50" data-suffix="+">10+</span>
          <p className="font-mono text-[13px] leading-[20px] font-[400] uppercase tracking-[0.2em] opacity-80">Products Shipped</p>
        </div>

      </div>
    </section>
  )
}
