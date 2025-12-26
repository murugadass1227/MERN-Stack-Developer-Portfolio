'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  Database,
  Server,
  Palette,
  GitBranch,
  Cloud,
  TestTube,
  Smartphone,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: ['JavaScript (ES6+)', 'TypeScript'],
      color: 'text-blue-500',
    },
    {
      title: 'Frontend Technologies',
      icon: Palette,
      skills: [
        'ReactJS',
        'Redux & Redux Toolkit',
        'Next.js',
        'Tailwind CSS',
        'HTML5',
        'CSS3',
      ],
      color: 'text-purple-500',
    },
    {
      title: 'Backend Technologies',
      icon: Server,
      skills: ['Node.js', 'Express.js', 'NestJS'],
      color: 'text-green-500',
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MongoDB', 'MySQL', 'Supabase'],
      color: 'text-orange-500',
    },
    {
      title: 'APIs & Integration',
      icon: Cloud,
      skills: ['RESTful APIs', 'Authentication', 'API Consumption'],
      color: 'text-cyan-500',
    },
    {
      title: 'Version Control',
      icon: GitBranch,
      skills: ['Git', 'GitHub'],
      color: 'text-red-500',
    },
    {
      title: 'Testing',
      icon: TestTube,
      skills: ['Manual Testing', 'Playwright (Automation)'],
      color: 'text-pink-500',
    },
    {
      title: 'Deployment & Cloud',
      icon: Smartphone,
      skills: ['AWS (Basic)', 'Environment Configuration', 'Build & Deployment'],
      color: 'text-yellow-500',
    },
  ]

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100,
                }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 group bg-card/80 backdrop-blur-sm relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300"
                    initial={false}
                  />
                  <CardHeader className="p-4 sm:p-6 relative z-10">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <motion.div
                        className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${category.color} flex-shrink-0`} />
                      </motion.div>
                      <CardTitle className="text-base sm:text-lg leading-tight group-hover:text-primary transition-colors">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0 relative z-10">
                    <ul className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.li
                          key={skillIndex}
                          className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2 group/item"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.span
                            className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0 group-hover/item:scale-150 transition-transform"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: skillIndex * 0.2,
                            }}
                          />
                          <span>{skill}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills

