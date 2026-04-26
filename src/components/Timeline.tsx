'use client'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const experience = [
  {
    year: "MAR 2024 – PRESENT",
    role: "Frontend Software Engineer",
    company: "Icebit Technology Pvt. Ltd — Remote",
    description: "Built 4 production-grade web applications using React.js and Next.js. Developed ERP modules (Inquiry, Events, Transportation) for colleges used by 5,000+ students. Integrated Firebase Realtime DB + GPS APIs for real-time features. Collaborated with UI/UX teams on scalable, responsive interfaces.",
    tags: ["React.js", "Next.js", "Firebase", "TypeScript", "D3.js"]
  },
  {
    year: "AUG 2023 – PRESENT",
    role: "Freelance Software Developer",
    company: "Independent Consultant / Remote",
    description: "Architected and delivered custom B2B digital ecosystems, unified Case Management systems, and automated financial software. Specialized in integrating Meta WhatsApp Business APIs to automate high-volume vendor communication.",
    tags: ["Full-Stack", "System Architecture", "WhatsApp API", "MongoDB"]
  },
  {
    year: "MAY 2023 – JUL 2023",
    role: "ReactJS Intern",
    company: "Sharva Infotech — Rajkot",
    description: "Built a Tesla clone using Framer. Practiced advanced React patterns. Developed an expense tracker with Firebase Auth and a full-stack blogging platform from scratch.",
    tags: ["React.js", "Framer", "Firebase"]
  },
  {
    year: "2020 – 2023",
    role: "BCA Graduate",
    company: "Ganpat University — Mehsana, Gujarat",
    description: "Bachelor of Computer Applications. CGPA: 7.20/10. Foundation in algorithms, web technologies, and software development lifecycle.",
    tags: ["Algorithms", "Web Dev", "Software Engineering"]
  }
]

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      // Reveal items
      gsap.from(".timeline-row", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        }
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" ref={containerRef} className="pb-20 lg:pb-32 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-display font-bold text-[#F0EDE6] tracking-tighter mb-20 uppercase">
          Career <span className="text-hollow">Timeline</span>
        </h2>

        <div className="border-t border-[#1C1C1A]">
          {experience.map((item, index) => (
            <div
              key={index}
              className="timeline-row grid grid-cols-1 md:grid-cols-12 gap-8 py-12 md:py-16 border-b border-[#1C1C1A] group hover:bg-[#111111]/50 transition-colors duration-500 px-4 -mx-4"
            >
              {/* Year Column */}
              <div className="md:col-span-3">
                <span className="font-mono text-[11px] text-[#888888] tracking-[0.2em] uppercase">
                  {item.year}
                </span>
              </div>

              {/* Role & Desc Column */}
              <div className="md:col-span-5 space-y-4 pr-0 md:pr-12">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-[#F0EDE6] group-hover:text-[#C8A96E] transition-colors duration-500">
                  {item.role}
                </h3>
                <p className="text-[#888888] font-body font-light text-[16px] leading-[1.6]">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 border border-[#1C1C1A] text-[#555550] font-mono text-[9px] tracking-[0.1em] uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Company Column */}
              <div className="md:col-span-4">
                <h4 className="font-mono text-[12px] text-[#F0EDE6] tracking-[0.15em] uppercase font-light md:text-right">
                  {item.company}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
