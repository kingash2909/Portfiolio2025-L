'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Code, Server, Database, Globe, Zap, Cpu, Palette, Smartphone } from 'lucide-react'

const SkillVisualization = () => {
  const [animatedSkills, setAnimatedSkills] = useState<Array<{name: string, level: number, animatedLevel: number, category: string}>>([])

  const skills = [
    { name: 'Python', level: 95, category: 'Programming' },
    { name: 'Django', level: 90, category: 'Frameworks' },
    { name: 'JavaScript', level: 85, category: 'Programming' },
    { name: 'React', level: 80, category: 'Frameworks' },
    { name: 'Node.js', level: 75, category: 'Backend' },
    { name: 'SQL', level: 85, category: 'Databases' },
    { name: 'AWS', level: 70, category: 'Cloud' },
    { name: 'Docker', level: 75, category: 'DevOps' },
    { name: 'TypeScript', level: 80, category: 'Programming' },
    { name: 'Next.js', level: 75, category: 'Frameworks' },
    { name: 'PostgreSQL', level: 80, category: 'Databases' },
    { name: 'Redis', level: 70, category: 'Databases' }
  ]

  // Skill categories with icons
  const categories = [
    { name: 'Programming', icon: <Code className="w-5 h-5" />, color: 'from-blue-500 to-cyan-400' },
    { name: 'Frameworks', icon: <Server className="w-5 h-5" />, color: 'from-purple-500 to-fuchsia-400' },
    { name: 'Databases', icon: <Database className="w-5 h-5" />, color: 'from-green-500 to-emerald-400' },
    { name: 'Cloud', icon: <Globe className="w-5 h-5" />, color: 'from-amber-500 to-orange-400' },
    { name: 'DevOps', icon: <Zap className="w-5 h-5" />, color: 'from-rose-500 to-pink-400' },
    { name: 'Backend', icon: <Cpu className="w-5 h-5" />, color: 'from-indigo-500 to-violet-400' }
  ]

  // Function to get brighter gradient colors based on skill level
  const getGradientColors = (level: number) => {
    if (level >= 90) return ['#00ff9d', '#00e0ff', '#00a3ff'] // Brighter Green to Cyan to Blue
    if (level >= 80) return ['#00e0ff', '#d000ff', '#ff00cc'] // Brighter Cyan to Purple to Pink
    if (level >= 70) return ['#d000ff', '#ff00cc', '#ff9d00'] // Brighter Purple to Pink to Amber
    if (level >= 60) return ['#ff9d00', '#ff0000', '#00ff9d'] // Brighter Amber to Red to Green
    return ['#c0c0c0', '#e0e0e0', '#ffffff'] // Brighter Gray shades
  }

  // Function to get vibrant gradient class for text
  const getTextGradientClass = (level: number) => {
    if (level >= 90) return "from-green-200 via-emerald-100 to-cyan-100"
    if (level >= 80) return "from-cyan-200 via-blue-100 to-indigo-100"
    if (level >= 70) return "from-purple-200 via-fuchsia-100 to-pink-100"
    if (level >= 60) return "from-amber-200 via-orange-100 to-red-100"
    return "from-gray-200 via-gray-100 to-white"
  }

  // Function to get enhanced glow effect based on skill level
  const getGlowEffect = (level: number) => {
    if (level >= 90) return "drop-shadow(0 0 20px rgba(0, 255, 157, 1))"
    if (level >= 80) return "drop-shadow(0 0 20px rgba(0, 224, 255, 1))"
    if (level >= 70) return "drop-shadow(0 0 20px rgba(208, 0, 255, 1))"
    if (level >= 60) return "drop-shadow(0 0 20px rgba(255, 157, 0, 1))"
    return "drop-shadow(0 0 20px rgba(192, 192, 192, 1))"
  }

  // Function to get pulse effect based on skill level
  const getPulseEffect = (level: number) => {
    if (level >= 90) return "animate-pulse"
    if (level >= 80) return "animate-pulse"
    if (level >= 70) return "animate-pulse"
    if (level >= 60) return "animate-pulse"
    return ""
  }

  useEffect(() => {
    // Animate skill levels when component mounts
    const timers = skills.map((skill, index) => {
      return setTimeout(() => {
        setAnimatedSkills(prev => [
          ...prev,
          { ...skill, animatedLevel: 0 }
        ])
        
        // Animate to actual level
        setTimeout(() => {
          setAnimatedSkills(prev => 
            prev.map(s => 
              s.name === skill.name 
                ? { ...s, animatedLevel: skill.level } 
                : s
            )
          )
        }, 100)
      }, index * 100)
    })

    return () => {
      timers.forEach(timer => clearTimeout(timer))
    }
  }, [])

  // Group skills by category
  const skillsByCategory: Record<string, typeof skills> = {}
  skills.forEach(skill => {
    if (!skillsByCategory[skill.category]) {
      skillsByCategory[skill.category] = []
    }
    skillsByCategory[skill.category].push(skill)
  })

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Skill Visualization
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto rounded-full mb-2"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Interactive visualization of my technical expertise across different domains
          </p>
        </motion.div>

        {/* Category Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {categories.map((category, index) => {
            const categorySkills = skillsByCategory[category.name] || []
            const avgLevel = categorySkills.length > 0 
              ? Math.round(categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length)
              : 0
            
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-5 rounded-2xl glass-morphism backdrop-blur-sm border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 text-center relative overflow-hidden group"
              >
                {/* Animated background shine */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-20 transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
                </div>
                
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} mb-4 relative z-10`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 relative z-10">{category.name}</h3>
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent relative z-10">
                  {avgLevel}%
                </div>
                <div className="text-xs text-gray-400 mt-1 relative z-10">
                  {categorySkills.length} skills
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Detailed Skills Visualization */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {animatedSkills.map((skill, index) => {
            const gradientColors = getGradientColors(skill.level)
            const category = categories.find(cat => cat.name === skill.category)
            const categoryColor = category ? category.color : 'from-gray-500 to-gray-400'
            
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl glass-morphism backdrop-blur-sm border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                {/* Animated background shine */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-20 transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
                </div>
                
                <div className="relative z-10">
                  {/* Category badge */}
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 bg-gradient-to-r ${categoryColor} text-gray-900`}>
                    {skill.category}
                  </div>
                  
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    {/* Background circle */}
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      {/* Background circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#374151"
                        strokeWidth="8"
                      />
                      
                      {/* Animated progress circle with vibrant gradient */}
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor={gradientColors[0]} />
                          <stop offset="50%" stopColor={gradientColors[1]} />
                          <stop offset="100%" stopColor={gradientColors[2]} />
                        </linearGradient>
                      </defs>
                      
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke={`url(#gradient-${index})`}
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="283" // 2 * π * 45
                        initial={{ strokeDashoffset: 283 }}
                        animate={{ strokeDashoffset: 283 - (283 * skill.animatedLevel) / 100 }}
                        transition={{ duration: 2, delay: index * 0.05 }}
                        transform="rotate(-90 50 50)"
                        style={{ filter: getGlowEffect(skill.level) }}
                        className={getPulseEffect(skill.level)}
                      />
                    </svg>
                    
                    {/* Skill level text with vibrant gradient */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${getTextGradientClass(skill.level)} ${getPulseEffect(skill.level)}`}>
                        {Math.round(skill.animatedLevel)}%
                      </span>
                    </div>
                  </div>
                  
                  <h3 className={`text-lg font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r ${getTextGradientClass(skill.level)}`}>{skill.name}</h3>
                  
                  {/* Skill level bar */}
                  <div className="mt-3 w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full relative ${getGlowEffect(skill.level)}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.animatedLevel}%` }}
                      transition={{ duration: 1.5, delay: index * 0.05 }}
                      style={{
                        background: `linear-gradient(90deg, ${gradientColors[0]}, ${gradientColors[1]}, ${gradientColors[2]})`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"></div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SkillVisualization