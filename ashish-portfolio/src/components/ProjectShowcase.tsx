'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react'

const ProjectShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product management, user authentication, and payment processing.",
      image: "/project1.jpg",
      technologies: ["Django", "React", "PostgreSQL", "Stripe"],
      github: "https://github.com/ashishmishra/ecommerce-platform",
      demo: "https://ecommerce-demo.com"
    },
    {
      title: "Task Management System",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/project2.jpg",
      technologies: ["Python", "Flask", "MongoDB", "Socket.IO"],
      github: "https://github.com/ashishmishra/task-manager",
      demo: "https://taskmanager-demo.com"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with interactive maps and data visualization.",
      image: "/project3.jpg",
      technologies: ["React", "Node.js", "OpenWeather API", "Chart.js"],
      github: "https://github.com/ashishmishra/weather-dashboard",
      demo: "https://weather-demo.com"
    }
  ]

  // Auto-rotate projects
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [projects.length])

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section className="py-20 bg-gray-800/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Project Showcase</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/80 rounded-2xl overflow-hidden glass-morphism backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto bg-gradient-to-r from-blue-600 to-cyan-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold text-white">Project Image</div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">{projects[currentIndex].title}</h3>
                <p className="text-gray-200 mb-6">{projects[currentIndex].description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {projects[currentIndex].technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={projects[currentIndex].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a 
                    href={projects[currentIndex].demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-lg transition-all"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation buttons */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gray-800/50 hover:bg-gray-700 rounded-full flex items-center justify-center text-cyan-400 transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gray-800/50 hover:bg-gray-700 rounded-full flex items-center justify-center text-cyan-400 transition-colors"
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>

          {/* Project indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectShowcase