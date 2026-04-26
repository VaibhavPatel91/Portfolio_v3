'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "News Website",
    desc: "React + News API, infinite scroll, clean reader layout with real-time updates.",
    tags: ["React.js", "API Integration", "Tailwind CSS"],
  },
  {
    title: "Notes App (MERN)",
    desc: "Rich-text editor, auth, full-stack — MongoDB + Express for personal knowledge management.",
    tags: ["MERN Stack", "Firebase Auth", "Express.js"],
  },
  {
    title: "Project Tool",
    desc: "GraphQL-based task management system with Apollo Client + Server for team collaboration.",
    tags: ["GraphQL", "Apollo", "React.js"],
  },
]

export default function PersonalProjects() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const cards = containerRef.current?.querySelectorAll(".personal-project-card")
      cards?.forEach((card) => {
        gsap.fromTo(card,
          { y: 30, opacity: 0 },
          { 
            y: 0, opacity: 1,
            duration: 1.5,
            ease: "expo.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
            }
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="personal" ref={containerRef} className="py-32 px-6 md:px-12 bg-[#0A0A0A] relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-8xl font-display font-bold text-[#F0EDE6] uppercase leading-none tracking-tighter mb-24">
          PERSONAL <span className="text-hollow tracking-tight">PROJECTS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <div 
              key={i}
              className="personal-project-card group bg-[#111111] p-10 md:p-12 border-t-[0.5px] border-[#C8A96E]/40 flex flex-col justify-between min-h-[380px] hover:bg-[#1C1C1A] transition-all duration-700 cursor-none"
            >
              <div className="space-y-8">
                <div className="flex justify-between items-start">
                  <h3 className="text-3xl md:text-4xl font-display  text-[#F0EDE6] group-hover:text-[#C8A96E] transition-colors duration-500 pr-4">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-[#C8A96E]/20 group-hover:text-[#C8A96E] transition-colors duration-700" />
                </div>
                
                <p className="text-[#555550] font-body font-light text-[15px] leading-relaxed group-hover:text-[#F0EDE6]/60 transition-colors duration-500">
                  {project.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-12">
                {project.tags.map(tag => (
                  <span key={tag} className="px-5 py-2 border border-[#1C1C1A] text-[#555550] font-mono text-[10px] tracking-[0.12em] uppercase hover:border-[#C8A96E]/20 hover:text-[#C8A96E] transition-all duration-500">
                    [{tag}]
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
