'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, Calendar, ChevronDown, ChevronUp, Globe, Users, Zap, Code } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "Responsive Portfolio",
      description: "Developed using Django, HTML, CSS, and SQLite. A fully responsive portfolio website showcasing skills and projects with modern UI/UX principles.",
      detailedDescription: "A comprehensive portfolio website built with Django framework featuring responsive design, dynamic content management, and optimized performance. Implemented custom CSS animations and interactive elements to enhance user engagement. Integrated SQLite database for efficient data storage and retrieval.",
      image: "/project1.jpg",
      technologies: ["Django", "HTML", "CSS", "SQLite", "JavaScript"],
      github: "https://github.com/ashishmishra/portfolio",
      demo: "https://ashish-portfolio-demo.com",
      featured: true,
      date: "2023",
      color: "from-blue-500 to-cyan-400",
      metrics: "95% faster load times, 100% responsive on all devices"
    },
    {
      title: "Zoom Clone",
      description: "Interactive Clone webapp using Django framework to make videocalls and share screen with real-time communication capabilities.",
      detailedDescription: "A fully functional video conferencing application similar to Zoom, built with Django and WebRTC technology. Features include real-time video/audio streaming, screen sharing, chat functionality, and participant management. Implemented secure authentication and end-to-end encryption for privacy protection.",
      image: "/project2.jpg",
      technologies: ["Django", "WebRTC", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/ashishmishra/zoom-clone",
      demo: "https://zoom-clone-demo.com",
      featured: true,
      date: "2023",
      color: "from-purple-500 to-fuchsia-400",
      metrics: "Supports up to 50 concurrent users, 99.9% uptime"
    },
    {
      title: "Covid-19 Live Updates",
      description: "Responsive web app fetching live data using Rapid API and Flask with real-time statistics visualization.",
      detailedDescription: "A data visualization dashboard providing real-time updates on COVID-19 statistics worldwide. Integrated with Rapid API to fetch live data and implemented interactive charts using Chart.js. Features include country-wise statistics, trend analysis, and predictive modeling. Optimized for mobile and desktop viewing.",
      image: "/project3.jpg",
      technologies: ["Flask", "Rapid API", "HTML", "CSS", "Chart.js"],
      github: "https://github.com/ashishmishra/covid-tracker",
      demo: "https://covid-tracker-demo.com",
      featured: false,
      date: "2022",
      color: "from-green-500 to-emerald-400",
      metrics: "Over 10,000 daily active users, 99.5% data accuracy"
    },
    {
      title: "BigApple's Edu",
      description: "Platform offering free courses and certifications by using Django and SQL with user progress tracking.",
      detailedDescription: "An educational platform providing free courses and certifications to learners worldwide. Built with Django framework and SQL database for robust backend operations. Features include course management, user progress tracking, certificate generation, and discussion forums. Implemented role-based access control for administrators, instructors, and students.",
      image: "/project4.jpg",
      technologies: ["Django", "SQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/ashishmishra/bigapples-edu",
      demo: "https://bigapples-edu-demo.com",
      featured: false,
      date: "2022",
      color: "from-amber-500 to-orange-400",
      metrics: "5000+ registered users, 200+ courses available"
    },
    {
      title: "BigApple's Edu ChatBot",
      description: "Chatbot for course recommendations using IBM Watson with natural language processing capabilities.",
      detailedDescription: "An AI-powered chatbot integrated with IBM Watson for personalized course recommendations. Utilizes natural language processing to understand user queries and provide relevant suggestions. Features include course search, enrollment assistance, and learning path recommendations. Integrated with the BigApple's Edu platform for seamless user experience.",
      image: "/project5.jpg",
      technologies: ["IBM Watson", "Python", "Django", "NLP"],
      github: "https://github.com/ashishmishra/edu-chatbot",
      demo: "https://edu-chatbot-demo.com",
      featured: false,
      date: "2021",
      color: "from-rose-500 to-pink-400",
      metrics: "85% accuracy in recommendations, 500+ daily interactions"
    },
    {
      title: "To-Do List App",
      description: "CRUD operations with user authentication using Django featuring task management and reminders.",
      detailedDescription: "A comprehensive task management application with full CRUD functionality and user authentication. Built with Django framework implementing secure login/logout system, password encryption, and session management. Features include task categorization, priority levels, due date reminders, and progress tracking. Responsive design for optimal use on all devices.",
      image: "/project6.jpg",
      technologies: ["Django", "HTML", "CSS", "SQLite", "JavaScript"],
      github: "https://github.com/ashishmishra/todo-app",
      demo: "https://todo-app-demo.com",
      featured: false,
      date: "2021",
      color: "from-indigo-500 to-violet-400",
      metrics: "1000+ active users, 99% task completion rate"
    }
  ]

  // Get all unique technologies
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  )

  const [selectedTech, setSelectedTech] = useState<string | null>(null)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  // Filter projects based on selected technology
  const filteredProjects = selectedTech
    ? projects.filter(project => project.technologies.includes(selectedTech))
    : projects

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
            Featured Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Showcasing my expertise through real-world applications and innovative solutions
          </p>
        </motion.div>

        {/* Skills Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setSelectedTech(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedTech === null
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-900 shadow-lg'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            All Projects
          </button>
          {allTechnologies.map((tech, index) => (
            <button
              key={index}
              onClick={() => setSelectedTech(tech)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedTech === tech
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-900 shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {tech}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl glass-morphism backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-700/50 relative overflow-hidden ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Project image header */}
              <div className="h-48 relative overflow-hidden rounded-t-2xl">
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-80`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold text-white bg-black/30 px-4 py-2 rounded-xl backdrop-blur-sm">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                
                {project.featured && (
                  <motion.div 
                    className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      Featured
                    </div>
                  </motion.div>
                )}
                
                <div className="absolute bottom-4 left-4 bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-gray-200 text-sm flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {project.date}
                </div>
              </div>
              
              <div className="p-6 relative z-10">
                <motion.h3 
                  className={`text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${project.color}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                
                {/* Metrics badge */}
                {project.metrics && (
                  <motion.div 
                    className="flex items-center text-xs bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 px-2 py-1 rounded-full mb-3 w-fit"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <Zap className="w-3 h-3 mr-1" />
                    {project.metrics}
                  </motion.div>
                )}
                
                {/* Expandable description */}
                <div 
                  className="cursor-pointer"
                  onClick={() => toggleExpand(index)}
                >
                  <div className="flex justify-between items-start">
                    <motion.p 
                      className="text-gray-200 mb-4 line-clamp-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      {project.description}
                    </motion.p>
                    {expandedIndex === index ? (
                      <ChevronUp className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                    ) : (
                      <ChevronDown className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                    )}
                  </div>
                  
                  {expandedIndex === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-200 mb-4">
                        {project.detailedDescription}
                      </p>
                      
                      {/* Project details grid */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="flex items-center text-gray-300 text-sm">
                          <Globe className="w-4 h-4 mr-2 text-cyan-400" />
                          <span>Web App</span>
                        </div>
                        <div className="flex items-center text-gray-300 text-sm">
                          <Users className="w-4 h-4 mr-2 text-cyan-400" />
                          <span>{project.date}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
                
                <motion.div 
                  className="flex flex-wrap gap-2 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex}
                      className={`px-3 py-1 bg-gradient-to-r ${project.color}/20 text-cyan-400 rounded-full text-sm font-medium`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                
                <motion.div 
                  className="flex space-x-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors group"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Github className="w-5 h-5 mr-2 group-hover:text-cyan-400" />
                    </motion.div>
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ExternalLink className="w-5 h-5 mr-2 group-hover:text-cyan-400" />
                    </motion.div>
                    <span>Demo</span>
                  </a>
                </motion.div>
              </div>
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects