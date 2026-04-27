'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageFade from '@/components/PageFade'
import { Project } from '@/constants/projects'

type Props = {
  project: Project
  nextProject: Project
}

export default function CaseStudyContent({ project, nextProject }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const elements = containerRef.current?.querySelectorAll(".reveal-text")
      elements?.forEach((el, index) => {
        gsap.fromTo(el,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0,
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            },
            delay: 0.1 // Staggering feeling for grouped elements
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <PageFade routeKey={project.slug}>
      <main ref={containerRef} className="bg-[#0A0A0A] min-h-screen selection:bg-[#C8A96E]/30 text-[#F0EDE6] overflow-x-hidden pt-32 pb-40">
        
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Back Link */}
          <Link href="/work" className="reveal-text inline-flex items-center gap-4 group/back mb-16 mt-12 md:mt-20">
            <div className="w-10 h-10 border border-[#1C1C1A] rounded-full flex items-center justify-center group-hover/back:bg-[#F0EDE6] transition-all duration-300">
              <ArrowLeft className="w-4 h-4 text-[#555550] group-hover/back:text-[#0A0A0A] transition-colors" />
            </div>
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#555550] uppercase group-hover/back:text-[#F0EDE6] transition-colors">BACK TO WORK</span>
          </Link>

          {/* Hero Section */}
          <div className="space-y-12">
            <h1 className="reveal-text text-5xl md:text-8xl lg:text-[110px] font-display font-bold leading-[1] tracking-tighter text-[#F0EDE6] max-w-6xl uppercase">
              {project.name}
            </h1>
            <p className="reveal-text text-2xl md:text-4xl font-display italic font-medium text-[#C8A96E] max-w-4xl tracking-tight leading-tight opacity-90">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="reveal-text w-full mt-24 mb-32 h-[50vh] md:h-[80vh] relative bg-[#111111] overflow-hidden border-y border-[#1C1C1A]">
          <Image 
            src={project.imgSub}
            alt={project.name}
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent via-[#0A0A0A]/20" />
        </div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 pb-32 border-b border-[#1C1C1A]">
          {/* Meta Sidebar */}
          <div className="lg:col-span-4 space-y-16 min-w-0">
            <div className="reveal-text space-y-4 border-t border-[#1C1C1A] pt-8">
              <p className="font-mono text-[10px] tracking-[0.2em] text-[#555550] uppercase">Role</p>
              <p className="font-display text-xl text-[#F0EDE6] tracking-tight">Lead Developer</p>
            </div>
            <div className="reveal-text space-y-4 border-t border-[#1C1C1A] pt-8">
              <p className="font-mono text-[10px] tracking-[0.2em] text-[#555550] uppercase">Tech Stack</p>
              <p className="font-body text-[#F0EDE6]/80 text-[16px] leading-relaxed">
                {project.techStack}
              </p>
            </div>
            {project.liveLink && (
              <div className="reveal-text space-y-6 border-t border-[#1C1C1A] pt-8">
                <p className="font-mono text-[10px] tracking-[0.2em] text-[#555550] uppercase">Live Platform</p>
                <div className="flex flex-col gap-6">
                  {Array.isArray(project.liveLink) ? (
                    project.liveLink.map((link, idx) => (
                      <div key={idx} className="space-y-2">
                        <p className="font-mono text-[9px] text-[#555550] tracking-wider uppercase opacity-70">{link.label}</p>
                        <a 
                          href={link.url.startsWith('http') ? link.url : `https://${link.url}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-block font-body text-[16px] text-[#C8A96E] hover:text-[#F0EDE6] transition-colors underline decoration-[#C8A96E]/30 decoration-offset-4"
                        >
                          {link.url.replace(/^https?:\/\/(www\.)?/, '')}
                        </a>
                      </div>
                    ))
                  ) : (
                    <a 
                      href={project.liveLink.startsWith('http') ? project.liveLink : `https://${project.liveLink}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block font-body text-[16px] text-[#C8A96E] hover:text-[#F0EDE6] transition-colors underline decoration-[#C8A96E]/30 decoration-offset-4"
                    >
                      {project.liveLink.replace(/^https?:\/\/(www\.)?/, '')}
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Story */}
          <div className="lg:col-span-8 space-y-24 min-w-0">
            <div className="reveal-text space-y-8">
              <h3 className="font-mono text-[11px] tracking-[0.2em] text-[#C8A96E] uppercase">Overview</h3>
              <p className="font-body font-light text-[20px] md:text-[24px] leading-[1.6] text-[#F0EDE6]/90 break-words">
                {project.desc}
              </p>
            </div>

            <div className="space-y-8">
              <h3 className="reveal-text font-mono text-[11px] tracking-[0.2em] text-[#C8A96E] uppercase">Key Features</h3>
              <ul className="space-y-8">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="reveal-text flex items-start gap-6 text-[#F0EDE6]/80 font-body text-[16px] md:text-[19px] leading-relaxed">
                    <span className="font-mono text-[#555550] shrink-0 mt-1 uppercase text-[10px]">/ 0{idx + 1}</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal-text space-y-8 bg-[#111111]/40 border border-[#1C1C1A] p-8 md:p-12 lg:p-16">
              <h3 className="font-mono text-[11px] tracking-[0.2em] text-[#C8A96E] uppercase mb-4">Business Impact</h3>
              <p className="font-display font-medium italic text-[24px] md:text-[32px] lg:text-[36px] leading-[1.4] text-[#F0EDE6] tracking-tight break-words">
                "{project.businessImpact}"
              </p>
            </div>
          </div>
        </div>

        {/* Next Project Nav */}
        <div className="reveal-text max-w-7xl mx-auto px-6 md:px-12 pt-32 text-center">
          <Link href={`/work/${nextProject.slug}`} className="block group cursor-none inline-block">
            <span className="font-mono text-[11px] tracking-[0.3em] text-[#555550] uppercase group-hover:text-[#C8A96E] transition-colors duration-500 mb-8 block">NEXT PROJECT</span>
            <h2 className="text-4xl md:text-6xl lg:text-[80px] font-display font-bold uppercase tracking-tighter text-[#F0EDE6] leading-none transition-all duration-700">
              <span className="group-hover:text-transparent group-hover:[-webkit-text-stroke:1px_#F0EDE6] transition-all duration-700">{nextProject.name}</span>
            </h2>
          </Link>
        </div>
      </main>
    </PageFade>
  )
}
