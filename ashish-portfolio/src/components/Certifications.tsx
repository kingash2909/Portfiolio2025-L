'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Award, Calendar, ChevronDown, ChevronUp } from 'lucide-react'

const Certifications = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const certifications = [
    {
      title: "Python for Data Science and AI",
      issuer: "IBM",
      date: "2023",
      description: "Advanced Python skills for data science applications and AI development",
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Python Basics",
      issuer: "University of Michigan",
      date: "2022",
      description: "Fundamental Python programming concepts and best practices",
      color: "from-green-500 to-emerald-400"
    },
    {
      title: "Python Certification",
      issuer: "ITVedant",
      date: "2021",
      description: "Comprehensive Python development training with hands-on projects",
      color: "from-purple-500 to-fuchsia-400"
    },
    {
      title: "Databases and SQL for Data Science",
      issuer: "IBM",
      date: "2023",
      description: "SQL and database management for data science applications",
      color: "from-amber-500 to-orange-400"
    },
    {
      title: "Web Development",
      issuer: "Johns Hopkins University",
      date: "2022",
      description: "Full-stack web development with modern frameworks and tools",
      color: "from-rose-500 to-pink-400"
    },
    {
      title: "Algorithm-I",
      issuer: "Stanford University",
      date: "2021",
      description: "Advanced algorithms and data structures for software development",
      color: "from-indigo-500 to-violet-400"
    },
    {
      title: "Django",
      issuer: "PluralSight",
      date: "2022",
      description: "Professional Django framework development and best practices",
      color: "from-cyan-500 to-teal-400"
    },
    {
      title: "Web Development",
      issuer: "Udemy",
      date: "2021",
      description: "Comprehensive web development course covering HTML, CSS, JavaScript",
      color: "from-lime-500 to-green-400"
    },
    {
      title: "Build ChatBot Using IBM Watson",
      issuer: "Udemy",
      date: "2022",
      description: "AI chatbot development using IBM Watson services",
      color: "from-violet-500 to-purple-400"
    },
    {
      title: "Portfolio Website with HTML and CSS",
      issuer: "Online Course",
      date: "2020",
      description: "Responsive portfolio website development using HTML and CSS",
      color: "from-pink-500 to-rose-400"
    }
  ]

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
            Certifications
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Professional certifications showcasing my expertise and continuous learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl glass-morphism backdrop-blur-sm border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Certificate header with icon */}
              <div className="flex items-start justify-between mb-4 relative z-10">
                <div className={`bg-gradient-to-r ${cert.color} p-3 rounded-xl shadow-lg`}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center text-gray-300 text-sm bg-gray-800/50 px-3 py-1 rounded-full">
                  <Calendar className="w-4 h-4 mr-1" />
                  {cert.date}
                </div>
              </div>
              
              {/* Certificate content */}
              <h3 className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${cert.color} mb-2 relative z-10`}>
                {cert.title}
              </h3>
              <p className="text-cyan-400 font-semibold mb-3 relative z-10">{cert.issuer}</p>
              
              {/* Expandable description */}
              <div 
                className="relative z-10 cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex justify-between items-center">
                  <p className="text-gray-300 text-sm line-clamp-2">
                    {cert.description}
                  </p>
                  {expandedIndex === index ? (
                    <ChevronUp className="text-cyan-400 flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-cyan-400 flex-shrink-0" size={20} />
                  )}
                </div>
                
                {expandedIndex === index && (
                  <motion.p 
                    className="text-gray-300 text-sm mt-2"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {cert.description}
                  </motion.p>
                )}
              </div>
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Certification counter */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-6 py-3 rounded-full border border-cyan-500/30">
            <Award className="text-cyan-400 mr-2" />
            <span className="text-cyan-400 font-bold">
              {certifications.length}+ Professional Certifications
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications