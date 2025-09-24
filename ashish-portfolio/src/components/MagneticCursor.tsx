'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const MagneticCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [variant, setVariant] = useState<'default' | 'hover' | 'click'>('default')
  const [isClicking, setIsClicking] = useState(false)
  const [codeIndex, setCodeIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  
  // Programming symbols for the 3D cursor
  const codeSymbols = [
    '{', // Curly bracket
    '}', // Closing curly bracket
    '<', // Less than
    '>', // Greater than
    '(', // Parenthesis
    ')', // Closing parenthesis
    '[', // Square bracket
    ']', // Closing square bracket
    ';', // Semicolon
    '#'  // Hash symbol
  ]
  
  // Programming colors
  const codeColors = [
    '#3b82f6', // Blue - Keywords
    '#06b6d4', // Cyan - Functions
    '#10b981', // Emerald - Strings
    '#f59e0b', // Amber - Numbers
    '#ef4444', // Red - Errors
    '#8b5cf6', // Purple - Comments
    '#ec4899', // Pink - Variables
    '#6366f1'  // Indigo - Operators
  ]

  // Check if user prefers reduced motion or has disabled custom cursors
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const hasCustomCursor = !window.matchMedia('(pointer: coarse)').matches // Not a touch device
    setIsVisible(!prefersReducedMotion && hasCustomCursor)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => {
      setIsClicking(true)
      setVariant('click')
    }

    const handleMouseUp = () => {
      setIsClicking(false)
      setVariant('default')
    }

    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.role === 'button') {
        setVariant('hover')
      }
    }

    const handleMouseOut = () => {
      if (!isClicking) {
        setVariant('default')
      }
    }

    // Rotate through code symbols at a slower pace
    const codeInterval = setInterval(() => {
      setCodeIndex(prev => (prev + 1) % codeSymbols.length)
    }, 500) // Slower rotation

    window.addEventListener('mousemove', updatePosition)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mouseover', handleMouseOver, true)
    window.addEventListener('mouseout', handleMouseOut, true)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mouseover', handleMouseOver, true)
      window.removeEventListener('mouseout', handleMouseOut, true)
      clearInterval(codeInterval)
    }
  }, [isClicking, isVisible])

  if (!isVisible) return null

  return (
    <>
      {/* 3D Programming Symbol Cursor */}
      <motion.div
        className="fixed pointer-events-none z-[10000] font-mono font-bold"
        style={{
          left: position.x,
          top: position.y,
          x: -15,
          y: -15,
          color: codeColors[codeIndex % codeColors.length],
          textShadow: `0 0 8px ${codeColors[codeIndex % codeColors.length]}40`,
        }}
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          rotateZ: [0, 360],
          scale: variant === 'click' ? 0.7 : variant === 'hover' ? 1.3 : 1,
        }}
        transition={{
          rotateX: {
            duration: 6, // Slower rotation
            repeat: Infinity,
            ease: "linear"
          },
          rotateY: {
            duration: 5, // Slower rotation
            repeat: Infinity,
            ease: "linear"
          },
          rotateZ: {
            duration: 7, // Slower rotation
            repeat: Infinity,
            ease: "linear"
          },
          scale: {
            type: "spring",
            stiffness: 500,
            damping: 28
          }
        }}
      >
        {/* Main 3D Symbol */}
        <div className="relative text-3xl transform-style-3d">
          <div className="absolute inset-0 transform translate-z-2">
            {codeSymbols[codeIndex]}
          </div>
          <div className="absolute inset-0 transform translate-z-1 rotate-y-10 opacity-80">
            {codeSymbols[codeIndex]}
          </div>
          <div className="absolute inset-0 transform translate-z-0 rotate-y-20 opacity-60">
            {codeSymbols[codeIndex]}
          </div>
        </div>
      </motion.div>

      {/* Programming Particle Trail - Reduced from 5 to 3 */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed pointer-events-none z-[9999] font-mono font-bold"
          style={{
            left: position.x,
            top: position.y,
            color: codeColors[(codeIndex + i) % codeColors.length],
            fontSize: `${16 - i * 2}px`,
          }}
          animate={{
            x: Math.cos(Date.now() * 0.003 + i) * (15 + i * 8), // Slower movement
            y: Math.sin(Date.now() * 0.003 + i) * (15 + i * 8), // Slower movement
            opacity: [0.6, 0, 0.6], // Subtle opacity
            rotate: [0, 180], // Slower rotation
          }}
          transition={{
            duration: 3, // Slower animation
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut"
          }}
        >
          {codeSymbols[(codeIndex + i) % codeSymbols.length]}
        </motion.div>
      ))}

      {/* Code Flow Effect - Simplified */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: position.x,
          top: position.y,
          x: -20,
          y: -20,
          width: 40,
          height: 40,
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.1, 0.4],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut"
        }}
      >
        {/* Simplified binary code pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xs font-mono text-cyan-400">1</div>
          <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 text-xs font-mono text-purple-400">0</div>
        </div>
      </motion.div>
    </>
  )
}

export default MagneticCursor