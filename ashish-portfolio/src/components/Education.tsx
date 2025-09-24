'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Award, Book, ChevronDown, ChevronUp } from 'lucide-react'

const Education = () => {
  const education = [
    {
      degree: "Bachelor's Of Engineering",
      field: "Information Technology",
      institution: "Mumbai University",
      period: "2012 – 2016",
      location: "Mumbai, Maharashtra",
      achievements: [
        "Focused on software development and programming",
        "Participated in various technical events and workshops",
        "Completed coursework in database management, networking, and software engineering"
      ]
    },
    {
      degree: "XII",
      field: "Science Stream",
      institution: "Maharashtra State Board",
      period: "2010 – 2012",
      location: "Mumbai, Maharashtra",
      achievements: [
        "Specialized in Physics, Chemistry, and Mathematics",
        "Developed strong foundation in mathematics and logical reasoning"
      ]
    }
  ]

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section id="education" className="py-20 bg-gray-800/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Education</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-cyan-500 border-4 border-gray-900 z-10"
                  whileHover={{ scale: 1.5 }}
                />
                
                {/* Education card */}
                <motion.div
                  className={`bg-gray-800/80 p-6 rounded-xl glass-morphism backdrop-blur-sm border border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    index % 2 === 0 ? 'md:mr-auto md:ml-0 md:w-5/12' : 'md:ml-auto md:mr-0 md:w-5/12'
                  }`}
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className="flex flex-col md:flex-row md:items-center md:justify-between mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.1 }}
                  >
                    <div>
                      <motion.h3 
                        className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.2 }}
                      >
                        {edu.degree}
                      </motion.h3>
                      <motion.p 
                        className="text-xl text-gray-200"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.3 }}
                      >
                        {edu.field}
                      </motion.p>
                    </div>
                    <motion.div 
                      className="flex items-center mt-2 md:mt-0"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.4 }}
                    >
                      <Calendar className="text-gray-400 mr-2" size={20} />
                      <span className="text-gray-400">{edu.period}</span>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.2 }}
                  >
                    <Book className="text-gray-400 mr-2" size={20} />
                    <span className="text-gray-300 font-medium">{edu.institution}</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    <MapPin className="text-gray-400 mr-2" size={20} />
                    <span className="text-gray-400">{edu.location}</span>
                  </motion.div>
                  
                  {/* Expandable achievements section */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    <div 
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleExpand(index)}
                    >
                      <h4 className="text-lg font-semibold text-cyan-400">Key Achievements</h4>
                      {expandedIndex === index ? (
                        <ChevronUp className="text-cyan-400" />
                      ) : (
                        <ChevronDown className="text-cyan-400" />
                      )}
                    </div>
                    
                    {expandedIndex === index && (
                      <motion.ul 
                        className="space-y-2 mt-3 overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {edu.achievements.map((achievement, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <motion.span 
                              className="text-cyan-500 mr-2"
                              whileHover={{ scale: 1.5, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              ›
                            </motion.span>
                            <span className="text-gray-200">{achievement}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education