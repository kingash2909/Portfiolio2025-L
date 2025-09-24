'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const FloatingOrbs = () => {
  const [orbs, setOrbs] = useState<Array<{
    id: number
    x: number
    y: number
    size: number
    color: string
    duration: number
  }>>([])
  const [isVisible, setIsVisible] = useState(true)

  // Check if user prefers reduced motion
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setIsVisible(!prefersReducedMotion)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const colors = [
      'bg-blue-500/20',
      'bg-cyan-400/20',
      'bg-purple-500/20',
      'bg-orange-500/20',
      'bg-red-500/20',
      'bg-green-500/20'
    ]

    // Reduced from 8 to 5 orbs for better performance
    const newOrbs = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1, // Smaller orbs
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 20 + 15
    }))

    setOrbs(newOrbs)
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute rounded-full blur-md ${orb.color}`}
          style={{
            width: `${orb.size}rem`,
            height: `${orb.size}rem`,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
          }}
          animate={{
            x: [0, (Math.random() - 0.5) * 50, 0], // Reduced movement
            y: [0, (Math.random() - 0.5) * 50, 0], // Reduced movement
            scale: [1, 1.1, 1], // Subtle scaling
            opacity: [0.2, 0.5, 0.2], // Subtle opacity changes
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export default FloatingOrbs