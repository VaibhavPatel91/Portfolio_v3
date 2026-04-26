'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

export default function AboutIntro() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Check if desktop for parallax
    const isDesktop = window.innerWidth >= 1024

    const ctx = gsap.context(() => {
      // Fade in lines
      gsap.from(".reveal-text", {
        y: 40,
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      })

      if (isDesktop) {
        // Parallax images with different intensities (Mimicking Andrew Reff's scattered drift)
        gsap.to(".parallax-img-1", {
          y: -250,
          rotate: 5,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5
          }
        })
        gsap.to(".parallax-img-2", {
          y: -120,
          rotate: -8,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8
          }
        })
        gsap.to(".parallax-img-3", {
          y: -350,
          rotate: 3,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 2
          }
        })
        gsap.to(".parallax-img-4", {
          y: -180,
          rotate: -2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2
          }
        })
        gsap.to(".parallax-img-5", {
          y: -400,
          rotate: -5,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.8
          }
        })
        gsap.to(".parallax-img-6", {
          y: -150,
          rotate: 10,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        })
        gsap.to(".parallax-img-9", {
          y: -320,
          rotate: -3,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.6
          }
        })

        // Reveal images on entry with a slight stagger
        gsap.from([".parallax-img-1", ".parallax-img-2", ".parallax-img-3", ".parallax-img-4", ".parallax-img-5", ".parallax-img-6", ".parallax-img-9"], {
          y: 60,
          opacity: 0,
          duration: 1.2,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="pt-10 pb-5 lg:pt-24 lg:pb-4 relative z-10 w-full flex flex-col lg:flex-row gap-16 lg:gap-24 items-start overflow-visible">
      {/* Left Column (Text Content) */}
      <div className="w-full lg:w-[50%] space-y-24">

        <h1 className="text-[115px] leading-[98px] font-display font-bold text-[#F0EDE6] tracking-tighter uppercase whitespace-normal">
          <div className="overflow-hidden pb-4"><span className="block reveal-text font-display">ABOUT</span></div>
        </h1>

        {/* Section 1 */}
        <div className="space-y-8">
          <div className="flex flex-col gap-6">
            <span className="font-mono text-[13px] tracking-[0.2em] text-[#C7F284] uppercase font-normal reveal-text">
              01 / WHAT I DO
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#F0EDE6] leading-[1.1] tracking-tight reveal-text max-w-lg">
              Making browsers do things they didn't know they could
            </h2>
          </div>

          <div className="space-y-6 text-[16px] md:text-[18px] font-body font-light leading-[1.8] text-[#888888] max-w-xl text-left">
            <p className="reveal-text">
              I'm Vaibhav — a Front-End Software Engineer with 3+ years of experience turning ideas into fast, polished, and purposeful web experiences. My stack of choice is React.js, Next.js, and TypeScript, and I care deeply about the details: clean architecture, responsive layouts, and UI that actually feels good to use.
            </p>
            <p className="reveal-text">
              I've shipped production-grade applications used by thousands — from full ERP systems for educational institutions to vendor management platforms and financial dashboards with real-time data visualization using D3.js and Chart.js. I thrive in collaborative environments where design meets engineering, and I'm always pushing myself further — currently diving deeper into backend with Node.js, GraphQL, and Apollo.
            </p>
            <p className="reveal-text">
              Whether it's a college ERP used by 5,000 students or a finance tracker that visualizes loan histories, I bring ownership, creativity, and a sharp eye for UX to everything I build.
            </p>

            <div className="reveal-text pt-4">
              <strong className="font-mono text-[11px] text-[#C8A96E] tracking-[0.2em] uppercase block mb-4">TECH TAGS:</strong>
              <div className="flex flex-wrap gap-3">
                {["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "D3.js", "Firebase"].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 border border-white/5 bg-white/5 text-[#F0EDE6]/90 font-mono text-[10px] tracking-[0.1em] uppercase rounded-full hover:border-[#C8A96E]/40 hover:text-[#C8A96E] hover:bg-[#C8A96E]/10 transition-colors duration-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="space-y-8">
          <div className="flex flex-col gap-6">
            <span className="font-mono text-[13px] tracking-[0.2em] text-[#C7F284] uppercase font-normal reveal-text">
              02 / OFF THE SCREEN
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#F0EDE6] leading-[1.1] tracking-tight reveal-text max-w-lg">
              There's more to me than code
            </h2>
          </div>

          <div className="space-y-6 text-[16px] md:text-[18px] font-body font-light leading-[1.8] text-[#888888] max-w-xl text-left">
            <p className="reveal-text">
              When I'm not pushing commits or debugging layouts, you'll find me somewhere far more interesting. I'm a cricket enthusiast with the competitive spirit to prove it, and I've recently picked up golf — turns out patience from debugging transfers surprisingly well to the fairway.
            </p>
            <p className="reveal-text">
              I'm fascinated by cinematography and love studying how a single frame tells a story — something that quietly influences how I think about UI design too. I enjoy travelling, exploring new places, and soaking in experiences that broaden my perspective. And if I could spend a day teaching someone something new, I absolutely would — sharing knowledge genuinely energizes me.
            </p>
            <p className="reveal-text">
              I keep a close eye on everything happening in AI and love experimenting with new tools. Staying curious isn't just a hobby for me — it's a way of life.
            </p>

            <div className="reveal-text pt-4">
              <strong className="font-mono text-[11px] text-[#C8A96E] tracking-[0.2em] uppercase block mb-4">HOBBIES:</strong>
              <div className="flex flex-wrap gap-3">
                {["🏏 Cricket", "⛳ Golf", "🎬 Cinematography", "✈️ Travel", "🤖 AI", "📚 Teaching"].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 border border-white/5 bg-white/5 text-[#F0EDE6]/90 font-mono text-[10px] tracking-[0.1em] uppercase rounded-full hover:border-[#C7F284]/40 hover:text-[#C7F284] hover:bg-[#C7F284]/10 transition-colors duration-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column (Zig-Zag Connected Gallery - Interlocking Corner Kiss) */}
      <div className="w-full lg:w-[50%] flex flex-col mt-24 lg:mt-0 lg:pt-48 px-4 md:px-8 lg:px-0">

        {/* 1. Left - Tilted */}
        <div className="relative w-[85%] md:w-[70%] lg:w-[52%] aspect-[3/4] z-10 parallax-img-1 group shadow-[0_40px_80px_rgba(0,0,0,0.7)] rotate-[-8deg] self-start lg:ml-[5%]">
          <div className="relative w-full h-full overflow-hidden rounded-[16px] lg:rounded-[32px] border border-white/10">
            <Image src="/images/about/1.png" alt="Vaibhav" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out scale-110 group-hover:scale-100" />
          </div>
        </div>

        {/* 2. Right - Tilted (Connected Kiss) */}
        <div className="relative w-[85%] md:w-[70%] lg:w-[52%] aspect-[3/4] z-20 parallax-img-2 group shadow-[0_40px_80px_rgba(0,0,0,0.7)] rotate-[8deg] self-end lg:mr-[5%] mt-[-10%] md:mt-[-8%] lg:mt-[-10%]">
          <div className="relative w-full h-full overflow-hidden rounded-[16px] lg:rounded-[32px] border border-white/10">
            <Image src="/images/about/5.png" alt="Vaibhav" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out scale-110 group-hover:scale-100" />
          </div>
        </div>

        {/* 3. Left - Tilted (Connected Kiss) */}
        <div className="relative w-[85%] md:w-[70%] lg:w-[52%] aspect-[3/4] z-30 parallax-img-3 group shadow-[0_40px_80px_rgba(0,0,0,0.7)] rotate-[-8deg] self-start lg:ml-[2%] mt-[-10%] md:mt-[-8%] lg:mt-[-10%]">
          <div className="relative w-full h-full overflow-hidden rounded-[16px] lg:rounded-[32px] border border-white/10">
            <Image src="/images/about/profile-3.png" alt="Vaibhav" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out scale-110 group-hover:scale-100" />
          </div>
        </div>

        {/* 4. Right - Tilted (Connected Kiss) */}
        <div className="relative w-[85%] md:w-[70%] lg:w-[52%] aspect-[3/4] z-40 parallax-img-4 group shadow-[0_40px_80px_rgba(0,0,0,0.7)] rotate-[8deg] self-end lg:mr-[2%] mt-[-10%] md:mt-[-8%] lg:mt-[-10%]">
          <div className="relative w-full h-full overflow-hidden rounded-[16px] lg:rounded-[32px] border border-white/10">
            <Image src="/images/about/profile-4.png" alt="Vaibhav" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out scale-110 group-hover:scale-100" />
          </div>
        </div>

        {/* 5. Left - Tilted (Connected Kiss) */}
        <div className="relative w-[85%] md:w-[70%] lg:w-[52%] aspect-[3/4] z-10 parallax-img-5 group shadow-[0_40px_80px_rgba(0,0,0,0.7)] rotate-[-8deg] self-start lg:ml-[8%] mt-[-10%] md:mt-[-8%] lg:mt-[-10%]">
          <div className="relative w-full h-full overflow-hidden rounded-[16px] lg:rounded-[32px] border border-white/10">
            <Image src="/images/about/2.png" alt="Vaibhav" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out scale-110 group-hover:scale-100" />
          </div>
        </div>

        {/* 6. Right - Tilted (Connected Kiss) */}
        <div className="relative w-[85%] md:w-[70%] lg:w-[52%] aspect-[3/4] z-20 parallax-img-6 group shadow-[0_40px_80px_rgba(0,0,0,0.7)] rotate-[8deg] self-end lg:mr-[8%] mt-[-10%] md:mt-[-8%] lg:mt-[-10%]">
          <div className="relative w-full h-full overflow-hidden rounded-[16px] lg:rounded-[32px] border border-white/10">
            <Image src="/images/about/3.png" alt="Vaibhav" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out scale-110 group-hover:scale-100" />
          </div>
        </div>

        {/* 7. Left - Tilted (Connected Kiss) */}
        <div className="relative w-[85%] md:w-[70%] lg:w-[52%] aspect-[3/4] z-30 parallax-img-9 group shadow-[0_40px_80px_rgba(0,0,0,0.7)] rotate-[-8deg] self-start lg:ml-[5%] mt-[-10%] md:mt-[-8%] lg:mt-[-10%]">
          <div className="relative w-full h-full overflow-hidden rounded-[16px] lg:rounded-[32px] border border-white/10">
            <Image src="/images/about/cric2.png" alt="Vaibhav" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out scale-110 group-hover:scale-100" />
          </div>
        </div>
      </div>
    </section>
  )
}
