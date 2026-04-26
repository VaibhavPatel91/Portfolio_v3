'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const quoteRef = useRef<HTMLHeadingElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Quote line reveal
      const lines = quoteRef.current?.querySelectorAll("span")
      lines?.forEach((line) => {
        gsap.fromTo(line,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1.5,
            ease: "expo.out",
            scrollTrigger: {
              trigger: line,
              start: "top 85%",
            }
          }
        )
      })

      // Stats count up
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
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-40 px-6 md:px-12 lg:px-24 bg-[#0A0A0A] relative z-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">

        {/* Left Column (Quote & Title) */}
        <div className="space-y-16 lg:sticky lg:top-40 h-fit">
          <h2 className="text-6xl md:text-8xl font-display font-bold text-[#F0EDE6] uppercase leading-none tracking-tighter">
            ABOUT <span className="text-hollow tracking-tight">ME</span>
          </h2>

          <h2 ref={quoteRef} className="text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.9] font-display font-bold text-[#F0EDE6] tracking-tighter max-w-xl">
            <span className="block overflow-hidden pb-2">"I don't just</span>
            <span className="block overflow-hidden pb-2">deliver code.</span>
            <span className="block overflow-hidden text-[#C8A96E]">I deliver</span>
            <span className="block overflow-hidden text-[#C8A96E]">immersion."</span>
          </h2>

          <div className="flex items-center gap-6 pt-8">
            <span className="w-12 h-[1px] bg-[#C8A96E]" />
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#C8A96E]">Vaibhav Kansagara</p>
          </div>
        </div>

        {/* Right Column (Bio & Stats) */}
        <div className="space-y-24 lg:pt-32">
          <div className="space-y-12 text-[18px] md:text-[20px] font-body font-light leading-[1.8] text-[#555550]">
            <p className="text-[#F0EDE6]/90 first-letter:text-4xl first-letter:font-display first-letter:mr-3 first-letter:float-left first-letter:leading-none">
              I'm <span className="text-[#C8A96E] font-medium">Vaibhav Kansagara</span> — a Front-End Software Engineer with over a year of experience building real, production-grade applications that people actually depend on. ERP systems used by 5,000+ students. Vendor platforms handling live business transactions. Tools that don't just look good — they work, reliably, at scale.
            </p>
            <p>
              My work lives at the intersection of engineering precision and visual craft. I care deeply about how an interface feels — not just how it functions. Every interaction, every animation, every component is intentional.
            </p>
            <p>
              Currently building at <span className="text-[#E8E0D0] font-medium">Icebit Technology</span>, expanding into full-stack, and always exploring what's next. If you're building something that demands both quality and speed — let's talk.
            </p>
          </div>

          {/* Stats Bar */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-3 gap-12 pt-20 border-t border-[#1C1C1A]">
            <div className="space-y-3">
              <span className="stat-number font-accent text-6xl md:text-7xl text-[#F0EDE6] tracking-tighter" data-value="1" data-suffix="+">3+</span>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#555550] leading-tight mt-2">Years<br />Experience</p>
            </div>
            <div className="space-y-3">
              <span className="stat-number font-accent text-6xl md:text-7xl text-[#F0EDE6] tracking-tighter" data-value="4" data-suffix="">6</span>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#555550] leading-tight mt-2">Production<br />Apps Shipped</p>
            </div>
            <div className="space-y-3">
              <span className="stat-number font-accent text-6xl md:text-7xl text-[#F0EDE6] tracking-tighter" data-value="5000" data-suffix="+">4K+</span>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#555550] leading-tight mt-2">Active Users<br />Across Products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
