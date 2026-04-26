'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const numberRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Animation to finish preloader
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 1.2,
          ease: "power2.out",
          onComplete,
        })
      }
    })

    // Count from 0 to 100
    const obj = { value: 0 }
    tl.to(obj, {
      value: 100,
      duration: 2.5,
      ease: "power2.inOut",
      onUpdate: () => {
        setCount(Math.floor(obj.value))
      },
    })

    return () => {
      tl.kill()
    }
  }, [onComplete])

  // Splitting count into digits for animation
  const digits = count.toString().split("")

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10000] bg-[#0A0A0A] flex items-center justify-center overflow-hidden"
    >
      <div
        ref={numberRef}
        className="flex font-display text-[140px] md:text-[220px] text-[#F0EDE6] font-bold tracking-tighter pr-4 md:pr-8"
      >
        {digits.map((digit, i) => (
          <div key={i} className="inline-block relative">{digit}</div>
        ))}
        <div className="inline-block relative ml-2 md:ml-6">%</div>
      </div>
    </div>
  )
}
