"use client"

import { motion } from "framer-motion"

interface FloatingElementProps {
  className?: string
}

export function FloatingElement({ className }: FloatingElementProps) {
  return (
    <motion.div
      className={`absolute rounded-full mix-blend-overlay ${className}`}
      animate={{
        y: ["0%", "100%"],
        opacity: [0.7, 0, 0.7],
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration: 8,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
    />
  )
}

