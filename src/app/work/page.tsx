'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'
import { ArrowUpRight, ArrowDown } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { projects } from '@/constants/projects'

export default function WorkPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0)

    const ctx = gsap.context(() => {
      // Reveal items
      gsap.from(".project-card", {
        y: 40,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "expo.out",
        delay: 0.4
      })

      // Title reveal
      gsap.from(".work-title", {
        y: 100,
        opacity: 0,
        duration: 1.8,
        ease: "expo.out"
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={containerRef} className="bg-[#0A0A0A] min-h-screen selection:bg-[#C8A96E]/30 text-[#F0EDE6] overflow-x-hidden pt-40 md:pt-64">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="work-title text-5xl md:text-7xl lg:text-[100px] font-display font-bold uppercase leading-none tracking-tighter mb-24 md:mb-40">
          SELECTED Work
        </h1>

        <div className="space-y-40 md:space-y-64 pb-40">
          {projects.map((project) => (
            <div key={project.id} className="project-card group relative">
              {/* Category & ID */}
              <div className="flex justify-between items-end mb-12 border-b border-[#1C1C1A] pb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] text-[#C8A96E] uppercase">
                  {project.type}
                </span>
                <span className="font-mono text-[11px] text-[#555550]">{project.id}</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                {/* Text Content */}
                <div className="lg:col-span-12 space-y-12">
                  <h2 className="text-5xl md:text-[100px] font-display font-bold leading-[0.9] tracking-tighter group-hover:text-[#C8A96E] transition-colors duration-700">
                    {project.name}
                  </h2>
                </div>

                {/* Main Visual */}
                <div className="lg:col-span-12">
                  <div className="relative aspect-[16/8] overflow-hidden bg-[#111111] border border-[#1C1C1A]">
                    <Image
                      src={project.imgMain}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105 contrast-[1.1] opacity-70 group-hover:opacity-100"
                    />
                  </div>
                </div>

                {/* Description & Metrics */}
                <div className="lg:col-span-7">
                  <p className="text-[18px] md:text-[22px] font-body font-light leading-[1.6] text-[#F0EDE6]/80 max-w-2xl">
                    {project.desc}
                  </p>
                </div>

                <div className="lg:col-span-5 grid grid-cols-2 gap-8 md:gap-12">
                  {project.metrics?.map((metric) => (
                    <div key={metric.label}>
                      <p className="font-display font-bold text-3xl md:text-5xl text-[#F0EDE6] tracking-tighter mb-2">
                        {metric.value.includes('↓') || metric.value.includes('↑') ? (
                          <span className="flex items-center gap-2">
                            {metric.value}
                          </span>
                        ) : metric.value}
                      </p>
                      <p className="font-mono text-[9px] md:text-[10px] tracking-[0.1em] text-[#555550]">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tags & CTA */}
                <div className="lg:col-span-12 flex flex-col md:flex-row md:items-center justify-between gap-12 pt-12 border-t border-[#1C1C1A]">
                  <div className="flex flex-wrap gap-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 border border-[#1C1C1A] text-[#555550] font-mono text-[9px] tracking-[0.1em] uppercase">
                        [{tag}]
                      </span>
                    ))}
                  </div>

                  <Link href={`/work/${project.slug}`} className="flex items-center gap-4 group/btn">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-[#C8A96E] uppercase border-b border-[#C8A96E]/20 pb-1 group-hover/btn:border-[#C8A96E]">VIEW CASE STUDY</span>
                    <div className="w-10 h-10 rounded-full border border-[#C8A96E]/20 flex items-center justify-center group-hover/btn:bg-[#C8A96E] transition-all duration-500">
                      <ArrowUpRight className="w-4 h-4 text-[#C8A96E] group-hover/btn:text-black transition-colors" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
