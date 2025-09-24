'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail, Download, Award } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Navigation component for the portfolio website
// Provides responsive navigation with animated elements and social links
const Navigation = () => {
  // State for mobile menu toggle
  const [isOpen, setIsOpen] = useState(false)
  // State for scroll detection to change navbar style
  const [scrolled, setScrolled] = useState(false)

  // Effect to handle scroll events and update navbar style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navigation items for the menu
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ]

  // Function to scroll to a specific section
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    // Close mobile menu after clicking a link
    setIsOpen(false)
  }

  // Function to handle portfolio PDF download
  const handleDownloadPortfolio = () => {
    // Create a link element to trigger download
    const link = document.createElement('a')
    link.href = '/_Ashish S. Mishra Python.pdf'
    link.download = 'Ashish-Mishra-Portfolio.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-morphism shadow-2xl border-b border-cyan-400/50 backdrop-blur-xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Enhanced Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
          >
            <a 
              href="#home" 
              className="text-3xl font-bold"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('#home')
              }}
            >
              <motion.div
                className="relative inline-block"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Main logo container with enhanced effects */}
                <motion.div
                  className="relative w-14 h-14 rounded-2xl flex items-center justify-center"
                  animate={{
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
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
                        "0 0 25px rgba(59, 130, 246, 0.7)",
                        "0 0 35px rgba(139, 92, 246, 0.9)",
                        "0 0 45px rgba(6, 182, 212, 1)",
                        "0 0 35px rgba(139, 92, 246, 0.9)",
                        "0 0 25px rgba(59, 130, 246, 0.7)"
                      ]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Inner glow effect */}
                  <motion.div
                    className="absolute inset-2 rounded-xl bg-gray-900"
                    animate={{
                      boxShadow: [
                        "inset 0 0 15px rgba(59, 130, 246, 0.5)",
                        "inset 0 0 25px rgba(139, 92, 246, 0.7)",
                        "inset 0 0 35px rgba(6, 182, 212, 0.9)",
                        "inset 0 0 25px rgba(139, 92, 246, 0.7)",
                        "inset 0 0 15px rgba(59, 130, 246, 0.5)"
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
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
                        "0 0 10px #3b82f6, 0 0 20px #3b82f6",
                        "0 0 15px #8b5cf6, 0 0 25px #8b5cf6",
                        "0 0 20px #06b6d4, 0 0 30px #06b6d4",
                        "0 0 15px #8b5cf6, 0 0 25px #8b5cf6",
                        "0 0 10px #3b82f6, 0 0 20px #3b82f6"
                      ]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Logo text with enhanced effects */}
                  <motion.span
                    className="text-xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent relative z-10"
                    animate={{
                      textShadow: [
                        "0 0 8px rgba(255,255,255,0.7), 0 0 15px rgba(59, 130, 246, 0.7)",
                        "0 0 15px rgba(255,255,255,0.9), 0 0 25px rgba(139, 92, 246, 0.9)",
                        "0 0 20px rgba(255,255,255,1), 0 0 35px rgba(6, 182, 212, 1)",
                        "0 0 15px rgba(255,255,255,0.9), 0 0 25px rgba(139, 92, 246, 0.9)",
                        "0 0 8px rgba(255,255,255,0.7), 0 0 15px rgba(59, 130, 246, 0.7)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    AM
                  </motion.span>
                  
                  {/* Particle effects around logo */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-1.5 rounded-full bg-white"
                      style={{
                        top: `${15 + Math.sin(i * 45 * Math.PI / 180) * 35}%`,
                        left: `${15 + Math.cos(i * 45 * Math.PI / 180) * 35}%`,
                      }}
                      animate={{
                        opacity: [0.4, 1, 0.4],
                        scale: [0.7, 1.8, 0.7],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: i * 0.15,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className="relative px-4 py-2 text-gray-200 hover:text-cyan-400 transition-all duration-300 font-medium group"
              >
                <span className="relative z-10">{item.name}</span>
                {/* Animated underline */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/10 to-blue-500/10 opacity-0 rounded-lg"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Social Links and Additional Actions */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Portfolio Download Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={handleDownloadPortfolio}
              whileHover={{ 
                scale: 1.1,
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 bg-gray-900 rounded-2xl flex items-center justify-center transition-all duration-300 relative overflow-hidden group shadow-lg hover:shadow-cyan-500/30"
            >
              {/* Animated background layers for Download */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  background: [
                    "linear-gradient(135deg, #0ea5e9, #06b6d4)",
                    "linear-gradient(135deg, #06b6d4, #0ea5e9)",
                    "linear-gradient(135deg, #0ea5e9, #06b6d4)",
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Pulsing border for Download */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-cyan-400"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(14, 165, 233, 0.8)",
                    "0 0 0 8px rgba(14, 165, 233, 0)",
                    "0 0 0 0 rgba(14, 165, 233, 0)",
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
              
              {/* Icon container with unique Download animation */}
              <motion.div
                className="relative z-10"
                animate={{ 
                  y: [0, -2, 0],
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.3 }
                }}
              >
                <Download size={22} className="text-white" />
              </motion.div>
              
              {/* Shine effect for Download */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0"
                whileHover={{ 
                  opacity: 0.9,
                  x: [-100, 100],
                }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>
            
            {/* GitHub Icon - Pulsing Purple Animation */}
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              href="https://github.com/ashishmishra"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.4,
                y: -5,
              }}
              whileTap={{ scale: 0.9 }}
              className="w-11 h-11 bg-gray-900 rounded-2xl flex items-center justify-center transition-all duration-300 relative overflow-hidden group shadow-lg hover:shadow-cyan-500/30"
            >
              {/* Animated background layers for GitHub */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  background: [
                    "radial-gradient(circle at 30% 30%, #6e5494, #24292e)",
                    "radial-gradient(circle at 70% 70%, #24292e, #6e5494)",
                    "radial-gradient(circle at 30% 70%, #6e5494, #24292e)",
                    "radial-gradient(circle at 70% 30%, #24292e, #6e5494)",
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Pulsing border for GitHub */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-purple-500"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(139, 92, 246, 0.8)",
                    "0 0 0 12px rgba(139, 92, 246, 0)",
                    "0 0 0 0 rgba(139, 92, 246, 0)",
                  ],
                  borderColor: [
                    "#8b5cf6",
                    "#a78bfa",
                    "#8b5cf6",
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
              
              {/* Icon container with unique GitHub animation */}
              <motion.div
                className="relative z-10"
                animate={{ 
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{
                  rotate: [0, 360],
                  transition: { duration: 0.8, ease: "easeOut" }
                }}
              >
                <Github size={22} className="text-white" />
              </motion.div>
              
              {/* Particle effects for GitHub */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`github-${i}`}
                  className="absolute w-1.5 h-1.5 rounded-full bg-purple-400"
                  style={{
                    top: `${10 + Math.sin(i * 60 * Math.PI / 180) * 30}%`,
                    left: `${10 + Math.cos(i * 60 * Math.PI / 180) * 30}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.a>
            
            {/* LinkedIn Icon - Blue Wave Animation */}
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              href="https://linkedin.com/in/ashishmishra"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.4,
                y: -5,
              }}
              whileTap={{ scale: 0.9 }}
              className="w-11 h-11 bg-gray-900 rounded-2xl flex items-center justify-center transition-all duration-300 relative overflow-hidden group shadow-lg hover:shadow-blue-500/30"
            >
              {/* Animated background layers for LinkedIn */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  background: [
                    "linear-gradient(135deg, #0077b5, #00a0dc)",
                    "linear-gradient(135deg, #00a0dc, #0077b5)",
                    "linear-gradient(135deg, #0077b5, #00a0dc)",
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Wave effect for LinkedIn */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  background: [
                    "radial-gradient(circle at 0% 0%, rgba(0, 160, 220, 0.6) 0%, transparent 30%)",
                    "radial-gradient(circle at 100% 100%, rgba(0, 160, 220, 0.6) 0%, transparent 30%)",
                    "radial-gradient(circle at 0% 0%, rgba(0, 160, 220, 0.6) 0%, transparent 30%)",
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Icon container with unique LinkedIn animation */}
              <motion.div
                className="relative z-10"
                animate={{ 
                  y: [0, -3, 0],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.3 }
                }}
              >
                <Linkedin size={22} className="text-white" />
              </motion.div>
              
              {/* Shine effect for LinkedIn */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0"
                whileHover={{ 
                  opacity: 0.9,
                  x: [-150, 150],
                }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
            
            {/* Email Icon - Fire Animation */}
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              href="mailto:i.m.ashishhh@gmail.com"
              whileHover={{ 
                scale: 1.4,
                y: -5,
              }}
              whileTap={{ scale: 0.9 }}
              className="w-11 h-11 bg-gray-900 rounded-2xl flex items-center justify-center transition-all duration-300 relative overflow-hidden group shadow-lg hover:shadow-red-500/30"
            >
              {/* Animated background layers for Email */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  background: [
                    "linear-gradient(135deg, #ff6b6b, #ffa502)",
                    "linear-gradient(135deg, #ffa502, #ff6b6b)",
                    "linear-gradient(135deg, #ff6b6b, #ffa502)",
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Flame effect for Email */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1/3 rounded-b-2xl"
                animate={{
                  background: [
                    "linear-gradient(transparent, rgba(255, 107, 107, 0.8))",
                    "linear-gradient(transparent, rgba(255, 165, 2, 0.8))",
                    "linear-gradient(transparent, rgba(255, 107, 107, 0.8))",
                  ],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Icon container with unique Email animation */}
              <motion.div
                className="relative z-10"
                animate={{ 
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{
                  scale: 1.3,
                  transition: { duration: 0.3 }
                }}
              >
                <Mail size={22} className="text-white" />
              </motion.div>
              
              {/* Sparkle effects for Email */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={`email-${i}`}
                  className="absolute w-1 h-1 rounded-full bg-yellow-300"
                  style={{
                    top: `${20 + i * 12}%`,
                    left: `${30 + i * 15}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeOut"
                  }}
                />
              ))}
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900/95 border-t border-gray-700 shadow-2xl backdrop-blur-lg"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className="block px-4 py-3 text-gray-200 hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-300 font-medium rounded-lg"
                >
                  {item.name}
                </motion.a>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-700">
                {/* Portfolio Download Mobile Button */}
                <button
                  onClick={handleDownloadPortfolio}
                  className="w-11 h-11 bg-gray-800 rounded-xl flex items-center justify-center transition-all duration-300 relative overflow-hidden group hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-500"
                >
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    animate={{
                      background: [
                        "linear-gradient(135deg, #0ea5e9, #06b6d4)",
                        "linear-gradient(135deg, #06b6d4, #0ea5e9)",
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <Download size={22} className="text-white relative z-10" />
                </button>
                
                {/* GitHub Mobile Icon */}
                <a
                  href="https://github.com/ashishmishra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-gray-800 rounded-xl flex items-center justify-center transition-all duration-300 relative overflow-hidden group hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500"
                >
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    animate={{
                      background: [
                        "radial-gradient(circle at 30% 30%, #6e5494, #24292e)",
                        "radial-gradient(circle at 70% 70%, #24292e, #6e5494)",
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <Github size={22} className="text-white relative z-10" />
                </a>
                
                {/* LinkedIn Mobile Icon */}
                <a
                  href="https://linkedin.com/in/ashishmishra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-gray-800 rounded-xl flex items-center justify-center transition-all duration-300 relative overflow-hidden group hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500"
                >
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    animate={{
                      background: [
                        "linear-gradient(135deg, #0077b5, #00a0dc)",
                        "linear-gradient(135deg, #00a0dc, #0077b5)",
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <Linkedin size={22} className="text-white relative z-10" />
                </a>
                
                {/* Email Mobile Icon */}
                <a
                  href="mailto:i.m.ashishhh@gmail.com"
                  className="w-11 h-11 bg-gray-800 rounded-xl flex items-center justify-center transition-all duration-300 relative overflow-hidden group hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-500"
                >
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    animate={{
                      background: [
                        "linear-gradient(135deg, #ff6b6b, #ffa502)",
                        "linear-gradient(135deg, #ffa502, #ff6b6b)",
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <Mail size={22} className="text-white relative z-10" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation