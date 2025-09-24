'use client'

import { motion } from 'framer-motion'

const DetailedSkills = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: 'Python', level: 95, color: 'from-blue-500 to-cyan-400' },
        { name: 'JavaScript', level: 80, color: 'from-yellow-500 to-amber-400' },
        { name: 'HTML/CSS', level: 85, color: 'from-orange-500 to-red-400' },
        { name: 'C', level: 75, color: 'from-purple-500 to-fuchsia-400' },
        { name: 'Embedded C', level: 70, color: 'from-indigo-500 to-violet-400' },
      ]
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: 'Django', level: 90, color: 'from-green-500 to-emerald-400' },
        { name: 'Django Rest Framework', level: 85, color: 'from-lime-500 to-green-400' },
        { name: 'Flask', level: 80, color: 'from-rose-500 to-pink-400' },
        { name: 'React', level: 75, color: 'from-cyan-500 to-blue-400' },
        { name: 'Unreal Engine', level: 70, color: 'from-gray-500 to-gray-400' },
      ]
    },
    {
      category: "Databases",
      items: [
        { name: 'MySQL', level: 85, color: 'from-blue-600 to-blue-400' },
        { name: 'Oracle', level: 80, color: 'from-red-500 to-red-400' },
        { name: 'SQL', level: 90, color: 'from-rose-500 to-pink-400' },
        { name: 'SQLite', level: 75, color: 'from-emerald-500 to-green-400' },
      ]
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: 'Git', level: 85, color: 'from-orange-500 to-amber-400' },
        { name: 'GitHub', level: 85, color: 'from-gray-500 to-gray-400' },
        { name: 'Docker', level: 80, color: 'from-cyan-500 to-teal-400' },
        { name: 'AWS', level: 75, color: 'from-amber-500 to-orange-400' },
        { name: 'Linux', level: 85, color: 'from-black to-gray-700' },
        { name: 'VS Code', level: 90, color: 'from-blue-500 to-cyan-400' },
        { name: 'PowerShell', level: 75, color: 'from-blue-700 to-blue-500' },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
            My Skills
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl glass-morphism backdrop-blur-sm border border-gray-700/50 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-6 text-cyan-400">
                {skillCategory.category}
              </h3>
              <div className="space-y-5">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-200 font-medium">{skill.name}</span>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden relative">
                      <motion.div
                        className={`h-full rounded-full relative shadow-lg`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                      >
                        {/* Gradient background */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${skill.color}`}></div>
                        
                        {/* Animated shine effect */}
                        <motion.div
                          className="absolute inset-0 opacity-0"
                          animate={{
                            opacity: [0, 0.8, 0],
                            x: ['-100%', '100%', '100%']
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: (categoryIndex * 0.2) + (skillIndex * 0.2),
                            repeatDelay: 3
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                        </motion.div>
                        
                        {/* Glow effect */}
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          animate={{
                            boxShadow: [
                              `0 0 8px rgba(56, 189, 248, 0.5)`,
                              `0 0 20px rgba(56, 189, 248, 0.8)`,
                              `0 0 8px rgba(56, 189, 248, 0.5)`
                            ]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: (categoryIndex * 0.1) + (skillIndex * 0.1)
                          }}
                        />
                        
                        {/* Animated particles */}
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute top-1/2 w-1.5 h-1.5 rounded-full bg-white"
                            style={{
                              left: `${10 + i * 20}%`,
                              y: '-50%',
                            }}
                            animate={{
                              opacity: [0.3, 1, 0.3],
                              scale: [0.8, 1.5, 0.8],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: (categoryIndex * 0.1) + (skillIndex * 0.1) + i * 0.2,
                            }}
                          />
                        ))}
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DetailedSkills