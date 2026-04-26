'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

import Link from 'next/link'
import { projects } from '@/constants/projects'

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      projects.forEach((_, i) => {
        const projectRow = document.querySelector(`.project-row-${i}`)
        if (projectRow) {
          const image = projectRow.querySelector('.project-image-container')
          const text = projectRow.querySelector('.project-text-content')

          gsap.fromTo(image,
            { x: i % 2 === 0 ? -100 : 100, opacity: 0 },
            {
              x: 0, opacity: 1,
              duration: 1.8,
              ease: "expo.out",
              scrollTrigger: {
                trigger: projectRow,
                start: "top 75%",
              }
            }
          )

          gsap.fromTo(text,
            { y: 60, opacity: 0 },
            {
              y: 0, opacity: 1,
              duration: 1.5,
              ease: "expo.out",
              delay: 0.4,
              scrollTrigger: {
                trigger: projectRow,
                start: "top 75%",
              }
            }
          )
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="work" ref={containerRef} className="relative z-10 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-32">
        <h2 className="text-4xl md:text-6xl lg:text-[80px] font-display font-bold text-[#F0EDE6] uppercase leading-none tracking-tighter mb-20 md:mb-32">
          SELECTED <span className="text-hollow tracking-tight">WORK</span>
        </h2>
      </div>

      <div className="space-y-48 lg:space-y-80">
        {projects.slice(0, 4).map((project, i) => (
          <div
            key={project.id}
            className={`project-row-${i} flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-0 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Image (60%) */}
            <div className="w-full md:w-[60%] project-image-container px-6 md:px-12 lg:px-24">
              <div className="group relative overflow-hidden bg-[#111111] aspect-video cursor-none border border-[#1C1C1A]">
                <Image
                  src={project.imgMain}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 contrast-[1.1]"
                />
                {/* Overlay that lifts on hover */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-700" />
                {/* Gold border trace on hover */}
                <div className="absolute inset-0 border-[0.5px] border-[#C8A96E] opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 pointer-events-none" />
              </div>
            </div>

            {/* Content (40%) */}
            <div className={`w-full md:w-[40%] project-text-content px-12 md:px-16 lg:px-24 flex flex-col justify-center space-y-10 ${i % 2 !== 0 ? 'md:pr-12' : 'md:pl-12'}`}>
              <span className="font-accent text-7xl md:text-[140px] text-[#1C1C1A]/60 opacity-60 leading-none tracking-tighter">
                {project.id}
              </span>

              <div className="space-y-4">
                <h3 className="text-4xl md:text-6xl font-display  leading-tight text-[#F0EDE6]/90 pr-4">
                  {project.name}
                </h3>
                <p className="font-mono text-[11px] text-[#C8A96E] tracking-[0.15em] uppercase opacity-70">
                  {project.type}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-5 py-2 border border-[#1C1C1A] text-[#555550] font-mono text-[10px] tracking-[0.12em] uppercase hover:border-[#C8A96E]/20 hover:text-[#C8A96E] transition-all duration-500">
                    [{tag}]
                  </span>
                ))}
              </div>

              <p className="text-[#555550] font-body font-light leading-relaxed text-[17px] max-w-sm lg:max-w-md">
                {project.desc}
              </p>

              <Link href={`/work/${project.slug}`} className="flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] text-[#C8A96E] mt-8 group uppercase">
                <span className="border-b border-[#C8A96E]/20 pb-1 group-hover:border-[#C8A96E] group-hover:text-[#F0EDE6] transition-all duration-500">VIEW CASE STUDY</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
