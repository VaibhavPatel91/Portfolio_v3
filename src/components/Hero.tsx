'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/dist/Draggable'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headline1Ref = useRef<HTMLHeadingElement>(null)
  const headline2Ref = useRef<HTMLHeadingElement>(null)

  const [dragState, setDragState] = useState<{ id: string | null; x: number; y: number }>({ id: null, x: 0, y: 0 })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(Draggable)
    }

    const ctx = gsap.context(() => {
      // Reveal Animation
      gsap.from(".hero-content-inner", {
        y: 60,
        opacity: 0,
        duration: 1.8,
        ease: "expo.out",
        delay: 0.2
      })

      // Initialize Draggable for both headlines
      const draggables = [headline1Ref.current, headline2Ref.current]

      Draggable.create(draggables, {
        type: "x,y",
        edgeResistance: 0.3,
        bounds: containerRef.current,
        onDragStart: function () {
          setDragState({ id: (this.target as HTMLElement).innerText, x: 0, y: 0 })
          gsap.to(this.target, { scale: 1.02, duration: 0.2 })
        },
        onDrag: function () {
          setDragState({
            id: (this.target as HTMLElement).innerText,
            x: Math.round(this.x),
            y: Math.round(this.y)
          })
        },
        onDragEnd: function () {
          const target = this.target as HTMLElement
          setDragState({ id: null, x: 0, y: 0 })
          gsap.to(target, { scale: 1, duration: 0.2 })

          // Trigger immediate repair from Andy Reff
          window.dispatchEvent(new CustomEvent('hero:drop', { detail: { targetId: target.id } }))
        },
        cursor: "grab",
        activeCursor: "grabbing"
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="min-h-screen pt-24 pb-12 px-6 md:px-12 flex flex-col items-center justify-center relative overflow-hidden bg-[#0A0A0A] dot-grid">
      {/* Ghost Background Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0A0A0A_95%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center hero-content-inner">
        {/* Top Editorial Label */}
        <div className="mb-8 md:mb-12 hidden md:flex flex-col items-center">
          <p className="font-mono text-[12px] font-bold tracking-[4px] text-[#F0EDE6]/50 uppercase select-none cursor-default">
            NAVIGATING THE UNKNOWN, PIXEL BY PIXEL.
          </p>
        </div>

        {/* Draggable Stacked Headline */}
        <div className="flex flex-col items-center select-none gap-2 md:gap-2 leading-none relative">
          <div className="relative group">
            <h1
              id="hero-headline-1"
              ref={headline1Ref}
              className="text-[15vw] md:text-[10vw] font-display font-bold leading-[0.8] tracking-[-0.05em] text-[#F0EDE6] text-center uppercase cursor-grab active:cursor-grabbing will-change-transform peer"
            >
              VAIBHAV
            </h1>
            {/* Selection Bounding Box */}
            <div className="absolute -inset-2 border border-dashed border-blue-500/0 pointer-events-none transition-colors duration-200 peer-hover:border-blue-500/40 peer-active:border-blue-500 group-hover:border-blue-500/20" />

            {/* Coordinates Overlay */}
            {dragState.id === "VAIBHAV" && (
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-600 px-2 py-1 rounded-[2px] text-[10px] font-mono text-white whitespace-nowrap z-50">
                dx: {dragState.x} dy: {dragState.y}
              </div>
            )}
          </div>

          <div className="relative group">
            <h1
              id="hero-headline-2"
              ref={headline2Ref}
              className="text-[15vw] md:text-[10vw] font-display font-bold leading-[0.8] tracking-[-0.05em] text-hollow text-center uppercase cursor-grab active:cursor-grabbing will-change-transform peer"
            >
              KANSAGARA
            </h1>
            {/* Selection Bounding Box */}
            <div className="absolute -inset-2 border border-dashed border-blue-500/0 pointer-events-none transition-colors duration-200 peer-hover:border-blue-500/40 peer-active:border-blue-500 group-hover:border-blue-500/20" />

            {/* Coordinates Overlay */}
            {dragState.id === "KANSAGARA" && (
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-blue-600 px-2 py-1 rounded-[2px] text-[10px] font-mono text-white whitespace-nowrap z-50">
                dx: {dragState.x} dy: {dragState.y}
              </div>
            )}
          </div>
        </div>

        {/* Secondary Editorial Anchor */}
        <p className="mt-16 md:mt-24 text-[#F0EDE6]/60 text-[18px] md:text-[24px] font-body font-light tracking-tight text-center max-w-xl opacity-80 select-none">
          Navigating the unknown, pixel by pixel
        </p>
      </div>
    </section>
  )
}
