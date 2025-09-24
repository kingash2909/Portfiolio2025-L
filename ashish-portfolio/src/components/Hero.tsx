'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Download, MessageCircle, Code, Coffee, Laptop, Database, Zap, Rocket, Cpu, Gamepad2 } from 'lucide-react'

// Hero component for the portfolio website
// Displays the main introduction with animated text and profile information
const Hero = () => {
  // State variables for profile text animation
  const [currentProfile, setCurrentProfile] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  // Profiles with matching icons/emojis for the rotating text animation
  const profiles = [
    { text: "Software Developer", icon: <Code size={24} />, color: "from-blue-400 to-cyan-500" },
    { text: "Python Developer", icon: <Coffee size={24} />, color: "from-yellow-400 to-orange-500" },
    { text: "Django Specialist", icon: <Laptop size={24} />, color: "from-green-400 to-emerald-500" },
    { text: "Backend Developer", icon: <Database size={24} />, color: "from-purple-400 to-indigo-500" },
    { text: "Tech Enthusiast", icon: <Zap size={24} />, color: "from-pink-400 to-rose-500" },
    { text: "Innovation Driver", icon: <Rocket size={24} />, color: "from-red-400 to-orange-500" },
    { text: "Problem Solver", icon: <Cpu size={24} />, color: "from-indigo-400 to-purple-500" },
    { text: "Game Developer", icon: <Gamepad2 size={24} />, color: "from-emerald-400 to-green-500" }
  ]

  // Effect to handle the typing animation for profile descriptions
  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % profiles.length
      const fullText = profiles[current].text

      // Handle text deletion animation
      if (isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length - 1))
        setTypingSpeed(100)
      } 
      // Handle text typing animation
      else {
        setDisplayedText(fullText.substring(0, displayedText.length + 1))
        setTypingSpeed(150)
      }

      // Switch to deletion mode when text is fully typed
      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
        setTypingSpeed(100)
      } 
      // Switch to typing mode when text is fully deleted
      else if (isDeleting && displayedText === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setTypingSpeed(200)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, loopNum, profiles, typingSpeed])

  // Function to scroll to a specific section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Get current profile data for animation
  const currentProfileIndex = loopNum % profiles.length
  const currentProfileData = profiles[currentProfileIndex]

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative pt-20 md:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full flex flex-col items-center">
        {/* Centered Name and Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="inline-block mr-2 text-white">Hi, I'm</span>
            {/* Enhanced name with more vibrant and animated gradient */}
            <motion.span
              className="inline-block font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 relative"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundImage: "linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6, #3b82f6, #06b6d4)",
                backgroundSize: "300% 300%"
              }}
            >
              Ashish Mishra
              {/* Glowing effect */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 rounded-lg blur-md -z-10"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.span>
          </motion.h1>

          <motion.div
            className="text-2xl md:text-3xl h-14 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="font-medium flex items-center justify-center gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                I'm a
              </span>
              {/* Profile icon with color transition */}
              <motion.span
                className="flex items-center"
                key={currentProfileIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <span className={`p-1 rounded-full bg-gradient-to-r ${currentProfileData.color}`}>
                  {currentProfileData.icon}
                </span>
              </motion.span>
              <span className={`ml-2 text-transparent bg-clip-text bg-gradient-to-r ${currentProfileData.color} font-bold`}>
                {displayedText}
              </span>
              <motion.span
                className="inline-block w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </span>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.p
              className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto lg:mx-0 text-justify"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Highly dedicated and skilled Python Software developer with more than 4+ years of experience offering advanced software development expertise. I am Software developer with proven experience in Python, Django, backend development, AI, cloud applications, and data analytics. Seeking a mid-level role to leverage skills for organizational growth.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mx-auto lg:mx-0 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {/* Download Resume Button */}
              <motion.a
                href="https://drive.google.com/file/d/1vRpYOHQc9_i0oS4sAqJZ_ynnXlBhjAn5/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 opacity-0 group-hover:opacity-100"
                  whileHover={{ 
                    x: [-100, 100],
                  }}
                  transition={{ 
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
                <Download size={20} />
                <span>Download Resume</span>
              </motion.a>
              
              {/* Get In Touch Button */}
              <motion.button
                onClick={() => scrollToSection('contact')}
                whileHover={{ 
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 opacity-0 group-hover:opacity-100"
                  whileHover={{ 
                    x: [-100, 100],
                  }}
                  transition={{ 
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
                <MessageCircle size={20} />
                <span>Get In Touch</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Profile Image/Animation - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Outer glow ring with pulsing effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-70 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 0.9, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Secondary glow ring */}
              <motion.div
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-30 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Main image container with gradient border */}
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 p-1"
                animate={{
                  scale: [1, 1.03, 1],
                  rotate: [0, 2, 0, -2, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden relative">
                  <img 
                    src="/Ashish Pic.png" 
                    alt="Ashish Mishra" 
                    className="w-full h-full object-cover rounded-full"
                  />
                  {/* Overlay gradient for enhanced effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                </div>
              </motion.div>

              {/* Inner highlight ring */}
              <div className="absolute inset-0 rounded-full border-2 border-white/20"></div>
              
              {/* Floating elements around profile */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  style={{
                    top: `${20 + Math.sin(i * 60 * Math.PI / 180) * 110}%`,
                    left: `${20 + Math.cos(i * 60 * Math.PI / 180) * 110}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    x: [0, 15, 0],
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="text-gray-400 mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="text-cyan-400" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero