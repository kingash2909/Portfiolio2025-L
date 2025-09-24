'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const FloatingLogo = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-30 pointer-events-none">
      <motion.div
        className="relative w-32 h-32"
        animate={{
          x: mousePosition.x * 0.01,
          y: mousePosition.y * 0.01,
        }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        {/* Main logo container */}
        <motion.div
          className="relative w-full h-full flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {/* Outer glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: isHovered 
                ? "0 0 60px rgba(59, 130, 246, 0.8), 0 0 100px rgba(139, 92, 246, 0.6)"
                : "0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(139, 92, 246, 0.3)"
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Rotating rings */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-blue-500/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          
          <motion.div
            className="absolute inset-4 rounded-full border border-cyan-400/40"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Main logo */}
          <div className="relative w-20 h-20 rounded-3xl flex items-center justify-center z-10">
            {/* Gradient background */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              animate={{
                background: [
                  "linear-gradient(45deg, #3b82f6, #8b5cf6)",
                  "linear-gradient(90deg, #8b5cf6, #06b6d4)",
                  "linear-gradient(135deg, #06b6d4, #3b82f6)",
                  "linear-gradient(180deg, #3b82f6, #8b5cf6)",
                  "linear-gradient(45deg, #3b82f6, #8b5cf6)"
                ],
                boxShadow: [
                  "0 0 30px rgba(59, 130, 246, 0.5)",
                  "0 0 50px rgba(139, 92, 246, 0.7)",
                  "0 0 70px rgba(6, 182, 212, 0.9)",
                  "0 0 50px rgba(139, 92, 246, 0.7)",
                  "0 0 30px rgba(59, 130, 246, 0.5)"
                ]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Inner glow effect */}
            <motion.div
              className="absolute inset-2 rounded-xl bg-gray-900"
              animate={{
                boxShadow: [
                  "inset 0 0 20px rgba(59, 130, 246, 0.3)",
                  "inset 0 0 40px rgba(139, 92, 246, 0.5)",
                  "inset 0 0 60px rgba(6, 182, 212, 0.7)",
                  "inset 0 0 40px rgba(139, 92, 246, 0.5)",
                  "inset 0 0 20px rgba(59, 130, 246, 0.3)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Logo text with enhanced effects */}
            <motion.span
              className="text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent relative z-10"
              animate={{
                textShadow: [
                  "0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(59, 130, 246, 0.5)",
                  "0 0 20px rgba(255,255,255,0.7), 0 0 40px rgba(139, 92, 246, 0.7)",
                  "0 0 30px rgba(255,255,255,0.9), 0 0 60px rgba(6, 182, 212, 0.9)",
                  "0 0 20px rgba(255,255,255,0.7), 0 0 40px rgba(139, 92, 246, 0.7)",
                  "0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(59, 130, 246, 0.5)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              AM
            </motion.span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default FloatingLogo