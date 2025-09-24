'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const LoadingAnimation = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Hide after 3 seconds to allow for full animation
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 3000)

    // Cleanup timer
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div 
      className="fixed inset-0 bg-gray-900 z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2.5 }}
    >
      <div className="text-center">
        {/* Enhanced Logo Animation */}
        <motion.div
          className="relative w-24 h-24 mx-auto mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main logo container with enhanced effects */}
          <motion.div
            className="relative w-full h-full rounded-2xl flex items-center justify-center"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* Animated background layers */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              animate={{
                background: [
                  "linear-gradient(45deg, #3b82f6, #8b5cf6)",
                  "linear-gradient(90deg, #8b5cf6, #06b6d4)",
                  "linear-gradient(135deg, #06b6d4, #3b82f6)",
                  "linear-gradient(180deg, #3b82f6, #8b5cf6)",
                  "linear-gradient(45deg, #3b82f6, #8b5cf6)"
                ],
                boxShadow: [
                  "0 0 30px rgba(59, 130, 246, 0.7)",
                  "0 0 40px rgba(139, 92, 246, 0.9)",
                  "0 0 50px rgba(6, 182, 212, 1)",
                  "0 0 40px rgba(139, 92, 246, 0.9)",
                  "0 0 30px rgba(59, 130, 246, 0.7)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Inner glow effect */}
            <motion.div
              className="absolute inset-2 rounded-xl bg-gray-900"
              animate={{
                boxShadow: [
                  "inset 0 0 20px rgba(59, 130, 246, 0.5)",
                  "inset 0 0 30px rgba(139, 92, 246, 0.7)",
                  "inset 0 0 40px rgba(6, 182, 212, 0.9)",
                  "inset 0 0 30px rgba(139, 92, 246, 0.7)",
                  "inset 0 0 20px rgba(59, 130, 246, 0.5)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2"
              animate={{
                borderColor: [
                  "#3b82f6",
                  "#8b5cf6",
                  "#06b6d4",
                  "#8b5cf6",
                  "#3b82f6"
                ],
                boxShadow: [
                  "0 0 15px #3b82f6, 0 0 25px #3b82f6",
                  "0 0 20px #8b5cf6, 0 0 30px #8b5cf6",
                  "0 0 25px #06b6d4, 0 0 35px #06b6d4",
                  "0 0 20px #8b5cf6, 0 0 30px #8b5cf6",
                  "0 0 15px #3b82f6, 0 0 25px #3b82f6"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Logo text with enhanced effects */}
            <motion.span
              className="text-3xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent relative z-10"
              animate={{
                textShadow: [
                  "0 0 10px rgba(255,255,255,0.7), 0 0 20px rgba(59, 130, 246, 0.7)",
                  "0 0 20px rgba(255,255,255,0.9), 0 0 30px rgba(139, 92, 246, 0.9)",
                  "0 0 30px rgba(255,255,255,1), 0 0 40px rgba(6, 182, 212, 1)",
                  "0 0 20px rgba(255,255,255,0.9), 0 0 30px rgba(139, 92, 246, 0.9)",
                  "0 0 10px rgba(255,255,255,0.7), 0 0 20px rgba(59, 130, 246, 0.7)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              AM
            </motion.span>
            
            {/* Particle effects around logo */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-white"
                style={{
                  top: `${15 + Math.sin(i * 45 * Math.PI / 180) * 40}%`,
                  left: `${15 + Math.cos(i * 45 * Math.PI / 180) * 40}%`,
                }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [0.8, 1.5, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </motion.div>
        
        <motion.p 
          className="text-cyan-400 text-xl font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Loading Portfolio...
        </motion.p>
        
        {/* Loading progress bar */}
        <motion.div 
          className="w-64 h-1 bg-gray-700 rounded-full mt-6 mx-auto overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LoadingAnimation