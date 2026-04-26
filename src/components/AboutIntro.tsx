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
        // Parallax images
        gsap.to(".parallax-img-1", {
          y: -150,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2
          }
        })
        gsap.to(".parallax-img-2", {
          y: -50,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8
          }
        })
        gsap.to(".parallax-img-3", {
          y: -200,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5
          }
        })
        gsap.to(".parallax-img-4", {
          y: -100,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-20 lg:py-32 relative z-10 w-full flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
      {/* Left Column (Text Content) */}
      <div className="w-full lg:w-[50%] space-y-24">
        
        {/* Massive Title */}
        <h1 className="text-[clamp(5rem,10vw,8rem)] leading-[0.85] font-display font-bold text-[#F0EDE6] tracking-tighter uppercase whitespace-normal">
          <div className="overflow-hidden pb-4"><span className="block reveal-text">ABOUT</span></div>
        </h1>
        
        {/* Section 1 */}
        <div className="space-y-8">
          <div className="flex flex-col gap-6">
            <span className="font-mono text-[10px] md:text-[11px] tracking-[0.2em] text-[#C7F284] uppercase font-bold reveal-text">
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
            <span className="font-mono text-[10px] md:text-[11px] tracking-[0.2em] text-[#C7F284] uppercase font-bold reveal-text">
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
      
      {/* Right Column (Image Stack Parallax) */}
      <div className="w-full lg:w-[50%] relative mt-24 lg:mt-0 lg:self-stretch">
        <div className="relative lg:absolute lg:top-[5%] lg:right-[5%] w-[80%] md:w-[60%] lg:w-[65%] aspect-[4/5] z-10 parallax-img-1 group lg:rotate-2 mx-auto lg:mx-0 mb-16 lg:mb-0 shadow-2xl">
          <div className="relative w-full h-full overflow-hidden rounded-[4px]">
            <Image 
              src="/images/about/profile-1.png" 
              alt="Profile 1" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 pointer-events-auto" 
            />
          </div>
        </div>
        
        <div className="relative lg:absolute lg:top-[28%] lg:left-[0%] w-[75%] md:w-[55%] lg:w-[60%] aspect-square z-20 parallax-img-2 group shadow-2xl lg:-rotate-2 mx-auto lg:mx-0 mb-16 lg:mb-0">
          <div className="relative w-full h-full overflow-hidden rounded-[4px]">
            <Image 
              src="/images/about/profile-2.png" 
              alt="Profile 2" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 pointer-events-auto" 
            />
          </div>
        </div>

        <div className="relative lg:absolute lg:top-[55%] lg:right-[0%] w-[85%] md:w-[65%] lg:w-[70%] aspect-[4/5] z-30 parallax-img-3 group shadow-2xl lg:rotate-3 mx-auto lg:mx-0 mb-16 lg:mb-0">
          <div className="relative w-full h-full overflow-hidden rounded-[4px]">
            <Image 
              src="/images/about/profile-3.png" 
              alt="Profile 3" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 pointer-events-auto" 
            />
          </div>
        </div>

        <div className="relative lg:absolute lg:top-[78%] lg:left-[5%] w-[80%] md:w-[60%] lg:w-[60%] aspect-[3/4] z-40 parallax-img-4 group shadow-2xl lg:-rotate-1 mx-auto lg:mx-0">
          <div className="relative w-full h-full overflow-hidden rounded-[4px]">
            <Image 
              src="/images/about/profile-4.png" 
              alt="Profile 4" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 pointer-events-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}
