'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { User, MapPin, Calendar, Award } from 'lucide-react'

const About = () => {
  const skills = [
    { name: 'Python', level: 95 },
    { name: 'Django', level: 90 },
    { name: 'Backend Development', level: 85 },
    { name: 'AWS', level: 75 },
    { name: 'Docker', level: 80 },
    { name: 'SQL', level: 85 },
  ]

  const [yearsExperience, setYearsExperience] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Simulate years of experience counter animation
    if (isVisible) {
      let start = 0
      const end = 4
      const duration = 2000 // 2 seconds
      const increment = end / (duration / 16) // 60fps
      
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setYearsExperience(end)
          clearInterval(timer)
        } else {
          setYearsExperience(parseFloat(start.toFixed(1)))
        }
      }, 16)
      
      return () => clearInterval(timer)
    }
  }, [isVisible])

  return (
    <section id="about" className="py-20 bg-gray-800/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Me</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Who am I?</h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Highly dedicated and skilled Python Software developer with more than 4+ years of experience offering advanced
              software development expertise. I am Software developer with proven experience in Python, Django, backend
              development, AI, cloud applications, and data analytics. Seeking a mid-level role to leverage skills for organizational
              growth.
            </p>
            <p className="text-gray-200 mb-6 leading-relaxed">
              I specialize in creating efficient, scalable backend solutions using Python and Django. With experience in cloud
              technologies like AWS and containerization with Docker, I'm committed to writing clean, maintainable code and 
              staying updated with the latest industry trends and technologies.
            </p>
            
            {/* Years of Experience Counter */}
            <motion.div
              className="mb-8 p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-gray-700/50 shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onViewportEnter={() => setIsVisible(true)}
            >
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <motion.div 
                    className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2"
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {yearsExperience}+
                  </motion.div>
                  <p className="text-gray-300 font-medium">Years of Experience</p>
                </div>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <MapPin className="text-cyan-500 mr-2" size={20} />
                <span className="text-gray-300">Mumbai, Maharashtra</span>
              </div>
              <div className="flex items-center">
                <Calendar className="text-cyan-500 mr-2" size={20} />
                <span className="text-gray-300">Available for work</span>
              </div>
              <div className="flex items-center">
                <Award className="text-cyan-500 mr-2" size={20} />
                <span className="text-gray-300">Bachelor's in Information Technology</span>
              </div>
              <div className="flex items-center">
                <User className="text-cyan-500 mr-2" size={20} />
                <span className="text-gray-300">Software Developer</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800/50 p-6 rounded-xl glass-morphism backdrop-blur-sm border border-gray-700/50 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-white bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">My Skills</h3>
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-200 font-medium">{skill.name}</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden relative">
                    <motion.div
                      className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 h-3 rounded-full relative shadow-[0_0_15px_rgba(34,211,238,0.7)]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                    >
                      {/* Animated shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0"
                        animate={{
                          opacity: [0, 0.8, 0],
                          x: ['-100%', '100%', '100%']
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                          repeatDelay: 3
                        }}
                      />
                      {/* Pulse effect for higher skills */}
                      {skill.level > 80 && (
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          animate={{
                            boxShadow: [
                              '0 0 5px rgba(34,211,238,0.5)',
                              '0 0 20px rgba(34,211,238,0.8)',
                              '0 0 5px rgba(34,211,238,0.5)'
                            ]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.1
                          }}
                        />
                      )}
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About