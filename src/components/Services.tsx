'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const services = [
  {
    id: "01",
    title: "Frontend Engineering",
    desc: "Production-grade React & Next.js applications. Fast, scalable, accessible — built to handle real users at real scale.",
  },
  {
    id: "02",
    title: "ERP & Complex Systems",
    desc: "Multi-module enterprise platforms with real-time data, role-based access, and third-party API integrations.",
  },
  {
    id: "03",
    title: "Data Visualization & Dashboards",
    desc: "D3.js and Chart.js powered dashboards that turn raw data into decisions. Filterable, interactive, and fast.",
  },
]

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const items = containerRef.current?.querySelectorAll(".service-item")
      items?.forEach((item) => {
        gsap.fromTo(item,
          { clipPath: "inset(100% 0 0 0)", opacity: 0 },
          { 
            clipPath: "inset(0% 0 0 0)", opacity: 1,
            duration: 1.5,
            ease: "expo.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            }
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="services" ref={containerRef} className="py-32 px-6 md:px-12 bg-[#0A0A0A] relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-[#F0EDE6] uppercase leading-none tracking-tighter mb-32">
          CORE <span className="text-hollow tracking-tight">STRENGTHS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-0 border-t border-[#1C1C1A]">
          {services.map((service, i) => (
            <div 
              key={service.id}
              className="service-item group py-20 md:px-12 md:py-24 flex flex-col justify-between min-h-[450px] border-b md:border-b-0 border-[#1C1C1A] md:border-r md:last:border-r-0 hover:bg-[#111111]/30 transition-colors duration-700 relative overflow-hidden"
            >
               {/* Background muted number */}
               <span className="absolute top-8 right-8 font-display  text-[80px] text-[#1C1C1A] opacity-40 select-none group-hover:text-[#C8A96E]/10 transition-colors duration-700">
                {service.id}
              </span>

              <div className="relative z-10 space-y-8">
                <h3 className="text-3xl md:text-4xl font-display  text-[#F0EDE6] leading-tight group-hover:text-[#C8A96E] transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-[#555550] font-body font-light text-[15px] leading-relaxed max-w-xs group-hover:text-[#F0EDE6]/60 transition-colors duration-500">
                  {service.desc}
                </p>
              </div>

              <div className="w-10 h-[1px] bg-[#C8A96E] group-hover:w-20 transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
