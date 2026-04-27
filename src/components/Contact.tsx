'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const emailRef = useRef<HTMLButtonElement>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Split giant headline into words manually
      const headline = headlineRef.current
      if (headline) {
        const text = headline.innerText
        headline.innerHTML = text
          .split(" ")
          .map((line) => `
            <span class="inline-block overflow-hidden block">
              <span class="hero-word inline-block translate-y-[100%] opacity-0 font-medium leading-tight">${line}</span>
            </span>
          `).join("")

        gsap.to(".hero-word", {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: headline,
            start: "top 80%",
          }
        })
      }

      // General fade in for other elements
      gsap.from(".contact-reveal", {
        y: 40,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      })

      // Magnetic hover for email link container
      const email = emailRef.current
      if (email) {
        const xSet = gsap.quickSetter(email, "x", "px")
        const ySet = gsap.quickSetter(email, "y", "px")

        const onMouseMove = (e: MouseEvent) => {
          const rect = email.getBoundingClientRect()
          const x = (e.clientX - (rect.left + rect.width / 2)) * 0.2
          const y = (e.clientY - (rect.top + rect.height / 2)) * 0.2
          xSet(x)
          ySet(y)
        }

        const onMouseLeave = () => {
          gsap.to(email, { x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.3)" })
        }

        email.addEventListener("mousemove", onMouseMove)
        email.addEventListener("mouseleave", onMouseLeave)
        return () => {
          email.removeEventListener("mousemove", onMouseMove)
          email.removeEventListener("mouseleave", onMouseLeave)
        }
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("se.vaibhav91@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  const socialLinks = [
    { label: "LINKEDIN", href: "https://www.linkedin.com/in/vaibhav-patel-209a22277/" },
    { label: "GITHUB", href: "https://github.com/VaibhavPatel91" },
    { label: "X / TWITTER", href: "https://x.com/VaibhavPatel_91" },
    { label: "CIRCA '21", href: "https://vaibhav-91.vercel.app/" },
  ]

  return (
    <section id="contact" ref={containerRef} className="min-h-screen py-32 px-6 md:px-12 bg-[#0A0A0A] flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Huge Background Letter */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[80px] md:text-[200px] text-[#1C1C1A]/10 select-none opacity-20">V.</div>
      </div>

      <div className="max-w-5xl space-y-10 relative z-10 w-full flex flex-col items-center">

        {/* Availability Badge */}
        <div className="contact-reveal inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm mb-8 shadow-lg">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C7F284] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C7F284]"></span>
          </span>
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#F0EDE6]/80 mt-[2px]">Available for new opportunities</span>
        </div>

        <h2 className="contact-reveal text-5xl md:text-7xl lg:text-[100px] font-display font-bold text-[#F0EDE6] uppercase leading-none tracking-tighter mb-8">
          LET'S <span className="text-hollow tracking-tight">CONNECT</span>
        </h2>

        <h2 ref={headlineRef} className="text-xl md:text-3xl lg:text-4xl font-display leading-[1.1] text-[#C8A96E] tracking-tighter font-medium italic mb-16">
          Let's make something inevitable.
        </h2>

        <p className="contact-reveal text-[#888888] font-body font-light text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-16">
          I don't just deliver code. I deliver immersion. Reach out to discuss your next project or just to say hi.
        </p>

        {/* Magnetic Email Pill */}
        <div className="contact-reveal pt-10 w-full flex justify-center">
          <button
            ref={emailRef}
            onClick={handleCopyEmail}
            className="group relative inline-flex items-center justify-center px-8 py-5 md:px-14 md:py-8 rounded-full border border-[#1C1C1A] bg-[#111111]/30 hover:border-[#C7F284]/40 transition-all duration-500 overflow-hidden shadow-2xl"
          >
            {/* Hover Background Expand */}
            <span className="absolute inset-0 bg-[#C7F284] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0 rounded-full"></span>

            <span className="relative z-10 font-display text-2xl md:text-4xl lg:text-5xl text-[#F0EDE6] group-hover:text-[#0A0A0A] transition-colors duration-500 tracking-tight font-bold">
              se.vaibhav91@gmail.com
            </span>

            {copied && (
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-[#C8A96E] text-black font-mono text-[10px] tracking-widest uppercase rounded-full shadow-lg font-bold whitespace-nowrap">
                Copied to clipboard ✓
              </span>
            )}
          </button>
        </div>

        <div className="contact-reveal pt-8">
          <p className="font-mono text-[13px] text-[#555550] tracking-[0.2em] hover:text-[#C7F284] transition-colors duration-500 font-light cursor-none">+91 95581 10033</p>
        </div>

        {/* Social Pills */}
        <div className="contact-reveal flex flex-wrap items-center justify-center gap-4 md:gap-6 pt-24 border-t border-[#1C1C1A] mt-16 w-full">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-[#1C1C1A] bg-[#111111]/30 font-mono text-[10px] md:text-[11px] text-[#F0EDE6]/60 tracking-[0.2em] font-light hover:text-[#0A0A0A] hover:bg-[#C7F284] hover:border-[#C7F284] transition-all duration-300 uppercase hover:-translate-y-1"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
