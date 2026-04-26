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

  return (
    <section className="w-full bg-[#C7F284] py-20 px-6 md:px-12 text-[#0A0A0A] my-20 lg:my-32">
      <div ref={statsRef} className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-[#0A0A0A]/20">

        <div className="space-y-4 pt-12 md:pt-0 pb-12 md:pb-0 md:pr-12 md:pl-0 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <span className="stat-number font-display font-bold text-7xl lg:text-8xl tracking-tighter leading-none" data-value="3" data-suffix="+">3+</span>
          <p className="font-mono text-[12px] uppercase tracking-[0.1em] font-bold">Years Experience</p>
        </div>

        <div className="space-y-4 pt-12 md:pt-0 pb-12 md:pb-0 md:px-12 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <span className="stat-number font-display font-bold text-7xl lg:text-8xl tracking-tighter leading-none" data-value="6" data-suffix="">6</span>
          <p className="font-mono text-[12px] uppercase tracking-[0.1em] font-bold">Production Apps Shipped</p>
        </div>

        <div className="space-y-4 pt-12 md:pt-0 pb-12 md:pb-0 md:pl-12 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <span className="stat-number font-display font-bold text-7xl lg:text-8xl tracking-tighter leading-none" data-value="4000" data-suffix="+">4000+</span>
          <p className="font-mono text-[12px] uppercase tracking-[0.1em] font-bold">Active Platform Users</p>
        </div>

      </div>
    </section>
  )
}
