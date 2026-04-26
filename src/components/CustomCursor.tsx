'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dragHintRef = useRef<HTMLDivElement>(null)
  const [label, setLabel] = useState("You")
  const [isDraggable, setIsDraggable] = useState(false)
  const messageIndexRef = useRef(0)
  const messages = [
    "Let's keep this centered please",
    "Again ? we just fixed it.",
    "I'm locking this layer. (just kidding)",
    "bruhhh .. stop breaking my layout."
  ]

  useEffect(() => {
    const cursor = cursorRef.current
    const dragHint = dragHintRef.current
    if (!cursor) return

    const xSetter = gsap.quickSetter(cursor, "x", "px")
    const ySetter = gsap.quickSetter(cursor, "y", "px")
    const hintXSetter = gsap.quickSetter(dragHint, "x", "px")
    const hintYSetter = gsap.quickSetter(dragHint, "y", "px")

    const handleMouseMove = (e: MouseEvent) => {
      xSetter(e.clientX)
      ySetter(e.clientY)

      gsap.to({}, {
        duration: 0.1,
        onUpdate: () => {
          hintXSetter(e.clientX)
          hintYSetter(e.clientY)
        }
      })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer")

      const draggable =
        target.classList.contains("cursor-grab") ||
        target.closest(".cursor-grab")

      if (draggable) {
        setLabel("DRAG")
        setIsDraggable(true)
      } else {
        setLabel("You")
        setIsDraggable(false)
      }

      if (isInteractive || draggable) {
        gsap.to(cursor, {
          scale: 1.1,
          duration: 0.1,
        })
      }
    }

    const handleMouseOut = () => {
      setLabel("You")
      setIsDraggable(false)
      gsap.to(cursor, {
        scale: 1,
        duration: 0.1,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseover", handleMouseOver)
    window.addEventListener("mouseout", handleMouseOut)

    // Ghost Cursor Logic - "Andy Reff" Persona
    const ghostRef = document.getElementById('ghost-cursor')

    const triggerGhost = (isImmediate = false, specificTargetId?: string) => {
      if (!ghostRef) return

      const msgEl = document.getElementById('ghost-msg')
      const h1 = document.getElementById('hero-headline-1')
      const h2 = document.getElementById('hero-headline-2')

      // Detect if layout is "broken" (moved)
      const h1X = parseFloat(gsap.getProperty(h1, "x") as string) || 0
      const h1Y = parseFloat(gsap.getProperty(h1, "y") as string) || 0
      const h2X = parseFloat(gsap.getProperty(h2, "x") as string) || 0
      const h2Y = parseFloat(gsap.getProperty(h2, "y") as string) || 0

      const isBroken = Math.abs(h1X) > 20 || Math.abs(h1Y) > 20 || Math.abs(h2X) > 20 || Math.abs(h2Y) > 20

      // If immediate and not broken, don't do anything special
      if (isImmediate && !isBroken) return

      let msg = "The pixels are 1px off here..."
      if (isBroken) {
        msg = messages[messageIndexRef.current]
        messageIndexRef.current = (messageIndexRef.current + 1) % messages.length
      }

      if (msgEl) msgEl.innerText = msg

      const w = window.innerWidth
      const h = window.innerHeight
      const sides = ['top', 'bottom', 'left', 'right']
      const side = sides[Math.floor(Math.random() * sides.length)]
      let startX, startY
      if (side === 'top') { startX = Math.random() * w; startY = -150; }
      else if (side === 'bottom') { startX = Math.random() * w; startY = h + 150; }
      else if (side === 'left') { startX = -150; startY = Math.random() * h; }
      else { startX = w + 150; startY = Math.random() * h; }

      // Target position
      let targetX, targetY
      const targetElement = specificTargetId ? document.getElementById(specificTargetId) : h1
      if (isBroken && targetElement) {
        const rect = targetElement.getBoundingClientRect()
        targetX = rect.left + rect.width / 2
        targetY = rect.top + rect.height / 2
      } else {
        targetX = w / 2 + (Math.random() - 0.5) * 400
        targetY = h / 2 + (Math.random() - 0.5) * 400
      }

      gsap.set(ghostRef, { x: startX, y: startY, opacity: 0, display: 'flex' })

      const tl = gsap.timeline()
      tl.to(ghostRef, {
        x: targetX,
        y: targetY,
        opacity: 1,
        duration: isImmediate ? 0.8 : 2.2,
        ease: isImmediate ? "power3.out" : "power2.inOut"
      })

      // If broken, perform the "repair"
      if (isBroken) {
        tl.to(ghostRef, {
          scale: 0.8,
          duration: 0.15,
          repeat: 1,
          yoyo: true,
          onStart: () => {
            gsap.to([h1, h2], {
              x: 0,
              y: 0,
              duration: isImmediate ? 0.8 : 1.2,
              ease: "expo.inOut"
            })
          }
        }, isImmediate ? "-=0.2" : "+=0.5")
      }

      tl.to(ghostRef, {
        x: Math.random() * w,
        y: Math.random() * h,
        opacity: 0,
        duration: 1.5,
        ease: "power2.in",
        delay: isImmediate ? 0.5 : (isBroken ? 2 : 3)
      })
        .set(ghostRef, { display: 'none' })
    }

    const handleHeroDrop = (e: any) => {
      const targetId = e.detail?.targetId
      triggerGhost(true, targetId)
    }
    window.addEventListener("hero:drop", handleHeroDrop)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseover", handleMouseOver)
      window.removeEventListener("mouseout", handleMouseOut)
      window.removeEventListener("hero:drop", handleHeroDrop)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:flex items-start"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
          <path
            d="M3 3L10.5 21L13.5 13.5L21 10.5L3 3Z"
            fill="white"
            stroke="black"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
        <div className="px-2 py-0.5 bg-white border border-black/10 rounded-[4px] shadow-[0_2px_10px_rgba(0,0,0,0.1)] -ml-1 mt-4">
          <span className="text-[12px] font-bold text-black tracking-tight select-none uppercase">
            {label}
          </span>
        </div>
      </div>

      {/* Floating Drag Hint */}
      <div
        ref={dragHintRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] hidden md:block transition-opacity duration-300 ${isDraggable ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="ml-12 mt-12 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-[2px] border border-white/10">
          <span className="text-[10px] font-mono font-bold text-white tracking-[2px] uppercase whitespace-nowrap">
            DRAG TO MOVE
          </span>
        </div>
      </div>

      {/* Andy Reff Persona Ghost Cursor */}
      <div
        id="ghost-cursor"
        className="fixed top-0 left-0 pointer-events-none z-[9997] hidden flex-col items-start"
      >
        <div className="flex items-start">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
            <path
              d="M3 3L10.5 21L13.5 13.5L21 10.5L3 3Z"
              fill="#A855F7"
              stroke="white"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <div className="px-2 py-0.5 bg-[#A855F7] border border-white/20 rounded-[2px] shadow-sm -ml-1 mt-3">
            <span className="text-[10px] font-bold text-white tracking-tight select-none">
              Vaibhav
            </span>
          </div>
        </div>
        <div className="mt-1 ml-4 px-3 py-2 bg-[#A855F7] backdrop-blur-md rounded-[8px] rounded-tl-none shadow-2xl border border-white/20">
          <span id="ghost-msg" className="text-[13px] font-bold text-white select-none whitespace-nowrap"></span>
        </div>
      </div>
    </>
  )
}


// 1 - Let's keep this centered please
// 2 - Again ? we just fixed it.
// 3 - I'm loacking this layer. (just kidding)
// 4 - bruhhh .. stop breaking my layout.