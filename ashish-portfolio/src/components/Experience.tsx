'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Building, ChevronDown, ChevronUp, Award, Target } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: "Senior Associate Developer (Curriculum)",
      company: "WhiteHat Jr | Byju's",
      period: "May 2021 - Feb 2024",
      location: "Mumbai, Maharashtra",
      description: "Utilized 2.5+ years of experience with Python and Django for backend development and API design to integrate with systems.",
      achievements: [
        "Manage cutting-edge technologies to improve legacy applications and collaborated with Front-end developers to integrate user-facing elements with server side logic",
        "Developed a customer issue resolution product, reducing manual resolution time by 55%",
        "Conducted advanced research and development in web development, AI, cloud computing, and machine learning",
        "Designed, developed, and maintained applications and plugins using Unreal Engine and IoT Applications",
        "Collaborated with stakeholders and developers to implement new features and enhance software capabilities"
      ],
      color: "from-blue-500 to-cyan-400",
      accentColor: "cyan",
      icon: <Award className="text-cyan-400" size={20} />
    },
    {
      title: "Executive Administrator",
      company: "Hexaware Technologies",
      period: "May 2019 - Feb 2020",
      location: "Mumbai, Maharashtra",
      description: "Defined and set development, test, release, update, and support processes for DevOps operations.",
      achievements: [
        "Reviewed and Audited Data and Application through various internal app",
        "Troubleshot and debugged issues with applications and plugins to ensure seamless functionality",
        "Maintained Active Directory & user backups",
        "Managed system security and resolved Windows OS issues"
      ],
      color: "from-green-500 to-emerald-400",
      accentColor: "emerald",
      icon: <Target className="text-emerald-400" size={20} />
    },
    {
      title: "System Administrator",
      company: "HCL Technologies",
      period: "Sept 2016 – Feb 2018",
      location: "Mumbai, Maharashtra",
      description: "Handling Datacenter and Defining and setting development, test, release, update, and support processes for DevOps operation.",
      achievements: [
        "Maintaining Active Directory & Backups of Users",
        "Maintaining Security of system by Antivirus management",
        "Used to handle & resolve Windows OS (7, 8.1, 10) related issues",
        "Creating Database, Monitoring Database",
        "Managing User Accounts, Tablespaces, etc"
      ],
      color: "from-purple-500 to-fuchsia-400",
      accentColor: "fuchsia",
      icon: <Building className="text-fuchsia-400" size={20} />
    }
  ]

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse">
            Work Experience
          </h2>
          <div className="w-40 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto rounded-full mb-2"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">My professional journey and key accomplishments</p>
        </motion.div>

        <div className="relative">
          {/* Enhanced Timeline line with animated gradient */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-blue-500 via-purple-500 to-fuchsia-500 transform md:translate-x-1/2 rounded-full shadow-lg shadow-cyan-500/30"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="mb-16 relative group"
            >
              {/* Keep everything left to right - remove alternating layout */}
              <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Enhanced Timeline dot with pulse animation */}
                <motion.div 
                  className={`absolute left-0 md:left-1/2 top-6 w-10 h-10 rounded-full bg-gradient-to-r ${exp.color} border-4 border-gray-900 transform md:translate-x-1/2 flex items-center justify-center shadow-xl shadow-${exp.accentColor}-500/30 z-10`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 300 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <div className="w-4 h-4 rounded-full bg-white animate-pulse"></div>
                </motion.div>

                {/* Content with enhanced styling - always left aligned within cards */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:pl-8' : 'md:pl-8'}`}>
                  <motion.div 
                    className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 p-8 rounded-3xl glass-morphism backdrop-blur-lg border border-gray-700/50 shadow-2xl hover:shadow-[0_0_30px_rgba(56,189,248,0.3)] transition-all duration-500 relative overflow-hidden"
                    whileHover={{ boxShadow: `0 0 35px rgba(56, 189, 248, 0.5)` }}
                  >
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-5 group-hover:opacity-15 transition-all duration-700 rounded-3xl`}></div>
                    
                    {/* Floating elements for visual interest */}
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                      {exp.icon}
                    </div>
                    
                    {/* Simplified layout to match the requested format */}
                    <div className="relative z-10">
                      <motion.h3 
                        className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${exp.color} mb-1`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.2 }}
                      >
                        {exp.title}
                      </motion.h3>
                      
                      <motion.div 
                        className="mb-1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.3 }}
                      >
                        <span className="text-gray-300 font-medium">{exp.period}</span>
                      </motion.div>
                      
                      <motion.div 
                        className="mb-1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.4 }}
                      >
                        <span className={`font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r ${exp.color}`}>{exp.company}</span>
                      </motion.div>
                      
                      <motion.div 
                        className="mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.5 }}
                      >
                        <span className="text-gray-400">{exp.location}</span>
                      </motion.div>
                      
                      {/* Enhanced summary section with distinct styling */}
                      <motion.div 
                        className={`bg-gradient-to-r from-gray-700/50 to-gray-800/50 p-4 rounded-xl border-l-4 border-${exp.accentColor}-500 mb-6 backdrop-blur-sm`}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.6 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-start">
                          <div className={`text-${exp.accentColor}-400 mr-2 mt-1`}>
                            <Target size={16} />
                          </div>
                          <p className="text-gray-200 italic">
                            {exp.description}
                          </p>
                        </div>
                      </motion.div>
                      
                      {/* Key Achievements section */}
                      <motion.div 
                        className="mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.7 }}
                      >
                        <h4 className={`text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${exp.color} flex items-center`}>
                          <Target className="mr-2" size={20} />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.slice(0, expandedIndex === index ? exp.achievements.length : 3).map((achievement, i) => (
                            <motion.li 
                              key={i} 
                              className="flex items-start"
                              initial={{ opacity: 0, x: index % 2 === 0 ? 10 : -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.2 + 0.8 + i * 0.1 }}
                            >
                              <motion.span 
                                className={`text-${exp.accentColor}-400 mr-2 mt-1`}
                                whileHover={{ scale: 1.3, rotate: 360 }}
                                transition={{ duration: 0.3 }}
                              >
                                ▪
                              </motion.span>
                              <span className="text-gray-300">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                      
                      {/* Show more button */}
                      {exp.achievements.length > 3 && (
                        <motion.div 
                          className="flex items-center text-cyan-400 cursor-pointer font-medium"
                          whileHover={{ x: index % 2 === 0 ? -8 : 8 }}
                          onClick={() => toggleExpand(index)}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 1.0 }}
                        >
                          {expandedIndex === index ? (
                            <>
                              <ChevronUp className={`text-${exp.accentColor}-400 mr-2`} size={20} />
                              <span>Show less</span>
                            </>
                          ) : (
                            <>
                              <ChevronDown className={`text-${exp.accentColor}-400 mr-2`} size={20} />
                              <span>Show {exp.achievements.length - 3} more achievements</span>
                            </>
                          )}
                        </motion.div>
                      )}
                    </div>
                    
                    {/* Enhanced Shine effect on hover */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Empty div for spacing - always visible on desktop */}
                <div className="md:w-1/2 md:block hidden"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience