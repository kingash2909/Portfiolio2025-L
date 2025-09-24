'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Phone, Send, Zap, Heart, Star } from 'lucide-react'

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [messageIndex, setMessageIndex] = useState(0)
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number}>>([])
  
  const messages = [
    "💬 Let's Chat!",
    "🚀 Got a Project?",
    "💡 Need Help?",
    "🤝 Collaborate?",
    "📱 Quick Call?"
  ]

  const icons = [MessageCircle, Phone, Send, Zap, Heart, Star]

  // Rotate messages
  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Handle click particles
  const handleClick = () => {
    setIsClicked(true)
    
    // Create particles
    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50
    }))
    setParticles(newParticles)
    
    // Open WhatsApp
    const phoneNumber = "+917303019154"
    const message = "Hello Ashish, I visited your portfolio and would like to connect!"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    
    // Reset click state
    setTimeout(() => {
      setIsClicked(false)
      setParticles([])
    }, 1000)
  }

  // Current icon
  const CurrentIcon = icons[messageIndex % icons.length]

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-40"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
    >
      {/* Ambient light effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-green-500/20 to-transparent rounded-full blur-xl"
        animate={{
          scale: isHovered ? [1, 1.5, 1] : 1,
          opacity: isHovered ? [0.7, 0.3, 0.7] : 0.5
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Outer glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-4 border-green-500/30"
        animate={{
          boxShadow: [
            "0 0 20px rgba(34, 197, 94, 0.3)",
            "0 0 40px rgba(34, 197, 94, 0.5)",
            "0 0 20px rgba(34, 197, 94, 0.3)"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Middle rotating border */}
      <motion.div
        className="absolute inset-2 rounded-full border-2 border-dashed border-green-400/50"
        animate={{ rotate: 360 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Inner counter-rotating border */}
      <motion.div
        className="absolute inset-4 rounded-full border border-green-300/30"
        animate={{ rotate: -360 }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Status indicator */}
      <motion.div
        className="absolute top-2 right-2 w-3 h-3 bg-green-500 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
      
      {/* Main button */}
      <motion.button
        className="relative w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 10px 30px rgba(34, 197, 94, 0.4)"
        }}
        whileTap={{ scale: 0.9 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <motion.div
          animate={{ 
            scale: isClicked ? [1, 1.2, 1] : 1,
            rotate: isClicked ? [0, 10, -10, 0] : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <CurrentIcon className="w-8 h-8 text-white" />
        </motion.div>
        
        {/* Click particles */}
        <AnimatePresence>
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-2 h-2 bg-green-400 rounded-full"
              initial={{ 
                x: 0, 
                y: 0, 
                opacity: 1,
                scale: 1
              }}
              animate={{ 
                x: particle.x, 
                y: particle.y, 
                opacity: 0,
                scale: 0
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          ))}
        </AnimatePresence>
      </motion.button>
      
      {/* Floating mini orbits on hover */}
      <AnimatePresence>
        {isHovered && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-green-400/70 rounded-full"
                initial={{ 
                  x: 0, 
                  y: 0,
                  opacity: 0
                }}
                animate={{ 
                  x: Math.sin(Date.now() / 1000 + i * 2) * 30,
                  y: Math.cos(Date.now() / 1000 + i * 2) * 30,
                  opacity: 1
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>
      
      {/* Smart message tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute bottom-full right-0 mb-4 bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 shadow-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              <div className="text-green-400 font-medium whitespace-nowrap">
                {messages[messageIndex]}
              </div>
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default WhatsAppButton