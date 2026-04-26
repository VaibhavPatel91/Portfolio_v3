'use client'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function PageFade({ children, routeKey }: { children: React.ReactNode, routeKey: string }) {
  useEffect(() => {
    // Instantly snap to the very top of the page before the fade in happens
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0

    // Ensure smooth scroll libraries (like Lenis) or layout paints don't drag the position back down
    const timeoutId = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      document.documentElement.scrollTop = 0
    }, 50)

    return () => clearTimeout(timeoutId)
  }, [routeKey])

  return (
    <motion.div
      key={routeKey}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
