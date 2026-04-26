'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function PageTransition({ children, routeKey }: { children: ReactNode, routeKey: string }) {
    return (
        <motion.div
            key={routeKey}
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] // Custom expo out for that premium feel
            }}
        >
            {children}
        </motion.div>
    )
}
