'use client'

import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail, Phone, MapPin, ArrowUp, Award, Clock, UserCheck, Link, User, Briefcase, Code, GraduationCap, Trophy, MessageCircle } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projects', href: '#projects', icon: Award },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Certifications', href: '#certifications', icon: Trophy },
    { name: 'Contact', href: '#contact', icon: MessageCircle }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:bg-gray-950 text-white relative z-10 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-15"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#3b82f6' : '#8b5cf6'
              }, transparent)`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl backdrop-blur-sm border border-gray-700/50 shadow-xl"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Ashish Mishra
            </h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Highly dedicated and skilled Python Software developer with more than 4+ years of experience offering advanced
              software development expertise. I am Software developer with proven experience in Python, Django, backend
              development, AI, cloud applications, and data analytics. Seeking a mid-level role to leverage skills for organizational
              growth.
            </p>
            
            <div className="flex space-x-4">
              {/* GitHub Footer Icon - Pulsing Purple Animation */}
              <motion.a
                key="GitHub"
                href="https://github.com/ashishmishra"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
                whileHover={{ 
                  scale: 1.2,
                  y: -3,
                }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center transition-all duration-300 relative overflow-hidden group"
                aria-label="GitHub"
              >
                {/* Animated background layers for GitHub */}
                <motion.div
                  className="absolute inset-0 rounded-xl"
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
                  className="absolute inset-0 rounded-xl border border-purple-500/50"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(139, 92, 246, 0.5)",
                      "0 0 0 5px rgba(139, 92, 246, 0)",
                      "0 0 0 0 rgba(139, 92, 246, 0)",
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
                    rotate: [0, 3, 0, -3, 0],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{
                    rotate: [0, 360],
                    transition: { duration: 0.6, ease: "easeOut" }
                  }}
                >
                  <Github className="w-5 h-5 text-white" />
                </motion.div>
              </motion.a>
              
              {/* LinkedIn Footer Icon - Blue Wave Animation */}
              <motion.a
                key="LinkedIn"
                href="https://linkedin.com/in/ashishmishra"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
                whileHover={{ 
                  scale: 1.2,
                  y: -3,
                }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center transition-all duration-300 relative overflow-hidden group"
                aria-label="LinkedIn"
              >
                {/* Animated background layers for LinkedIn */}
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  animate={{
                    background: [
                      "linear-gradient(135deg, #0077b5, #00a0dc)",
                      "linear-gradient(135deg, #00a0dc, #0077b5)",
                      "linear-gradient(135deg, #0077b5, #00a0dc)",
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Icon container with unique LinkedIn animation */}
                <motion.div
                  className="relative z-10"
                  animate={{ 
                    y: [0, -2, 0],
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </motion.div>
              </motion.a>
              
              {/* Email Footer Icon - Fire Animation */}
              <motion.a
                key="Email"
                href="mailto:i.m.ashishhh@gmail.com"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
                whileHover={{ 
                  scale: 1.2,
                  y: -3,
                }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center transition-all duration-300 relative overflow-hidden group"
                aria-label="Email"
              >
                {/* Animated background layers for Email */}
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  animate={{
                    background: [
                      "linear-gradient(135deg, #ff6b6b, #ffa502)",
                      "linear-gradient(135deg, #ffa502, #ff6b6b)",
                      "linear-gradient(135deg, #ff6b6b, #ffa502)",
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Icon container with unique Email animation */}
                <motion.div
                  className="relative z-10"
                  animate={{ 
                    rotate: [0, 3, 0, -3, 0],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Mail className="w-5 h-5 text-white" />
                </motion.div>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl backdrop-blur-sm border border-gray-700/50 shadow-xl"
          >
            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent flex items-center">
              <Link className="mr-2" size={24} />
              Quick Links
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {quickLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      const element = document.querySelector(link.href)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.03,
                      x: 5,
                    }}
                    className="flex items-center p-3 rounded-xl bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300 group border border-gray-600/30"
                  >
                    <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg text-cyan-400 mr-3 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                      <IconComponent size={18} />
                    </div>
                    <span className="text-gray-200 group-hover:text-cyan-400 transition-colors duration-300">
                      {link.name}
                    </span>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl backdrop-blur-sm border border-gray-700/50 shadow-xl"
          >
            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent flex items-center">
              <Mail className="mr-2" size={24} />
              Get in Touch
            </h4>
            
            <div className="space-y-5">
              <motion.div 
                className="flex items-start group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg text-cyan-400 mr-4 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-400">Location</h5>
                  <p className="text-gray-200">Mumbai, Maharashtra</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg text-cyan-400 mr-4 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-400">Phone</h5>
                  <a href="tel:+917303019154" className="text-gray-200 hover:text-cyan-400 transition-colors">
                    +91 73030 19154
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg text-cyan-400 mr-4 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-400">Email</h5>
                  <a href="mailto:i.m.ashishhh@gmail.com" className="text-gray-200 hover:text-cyan-400 transition-colors">
                    i.m.ashishhh@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* Availability Section */}
              <motion.div 
                className="flex items-start group p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg text-green-400 mr-4 group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all duration-300">
                  <UserCheck size={20} />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-400 flex items-center">
                    <Clock className="mr-1 text-green-400" size={16} />
                    Availability
                  </h5>
                  <p className="text-green-400 font-medium">
                    🔥 Available for freelance opportunities and full-time positions 🔥
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center text-gray-400 text-sm mb-4 md:mb-0"
          >
            <span>© {currentYear} Ashish Mishra. Made with</span>
            <Heart className="w-4 h-4 text-red-500 mx-1 flex-shrink-0" />
            <span>and lots of coffee</span>
            <span className="ml-1">☕</span>
          </motion.div>

          {/* Enhanced Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ 
              scale: 1.1,
              y: -5,
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white rounded-full hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
          >
            {/* Animated background shine effect */}
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
            
            {/* Pulsing ring animation */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-cyan-400"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 0, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Icon container with enhanced animation */}
            <motion.div
              className="relative z-10"
              animate={{ 
                y: [-3, 3, -3],
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{
                rotate: [0, 360],
                transition: { duration: 0.6, ease: "easeOut" }
              }}
            >
              <ArrowUp className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </motion.div>
            
            <span className="relative z-10 font-medium">Back to Top</span>
            
            {/* Glowing effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 10px rgba(6, 182, 212, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)",
                  "0 0 20px rgba(6, 182, 212, 0.8), 0 0 30px rgba(59, 130, 246, 0.5)",
                  "0 0 10px rgba(6, 182, 212, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)",
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer