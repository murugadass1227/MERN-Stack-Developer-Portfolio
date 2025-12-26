'use client'

import { motion } from 'framer-motion'
import { 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiMongodb, 
  SiMysql, 
  SiTailwindcss,
  SiRedux,
  SiTypescript,
  SiSupabase,
  SiExpress,
  SiNestjs,
  SiGit,
  SiGithub,
  SiAmazon,
} from 'react-icons/si'
import { Code2, Database, Server, Wrench } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const TechStack = () => {
  const techStacks = [
    {
      category: 'Frontend',
      icon: Code2,
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      technologies: [
        { name: 'React.js', icon: SiReact, color: 'text-cyan-400', level: 90 },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white', level: 85 },
        { name: 'Redux', icon: SiRedux, color: 'text-purple-500', level: 88 },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500', level: 80 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500', level: 90 },
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'Backend',
      icon: Server,
      iconColor: 'text-green-500',
      bgColor: 'bg-green-500/10',
      technologies: [
        { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500', level: 85 },
        { name: 'Express.js', icon: SiExpress, color: 'text-gray-700 dark:text-gray-300', level: 85 },
        { name: 'NestJS', icon: SiNestjs, color: 'text-red-500', level: 80 },
      ],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      category: 'Databases',
      icon: Database,
      iconColor: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      technologies: [
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600', level: 85 },
        { name: 'MySQL', icon: SiMysql, color: 'text-blue-600', level: 80 },
        { name: 'Supabase', icon: SiSupabase, color: 'text-green-500', level: 75 },
      ],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      category: 'Tools & Others',
      icon: Wrench,
      iconColor: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      technologies: [
        { name: 'Git', icon: SiGit, color: 'text-orange-500', level: 90 },
        { name: 'GitHub', icon: SiGithub, color: 'text-gray-800 dark:text-white', level: 90 },
        { name: 'AWS', icon: SiAmazon, color: 'text-orange-500', level: 60 },
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
  ]

  return (
    <section
      id="tech-stack"
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Technology <span className="text-primary">Stack</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with on a daily basis
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {techStacks.map((stack, index) => {
            const CategoryIcon = stack.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: 'spring',
                  stiffness: 100,
                }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 group bg-card/80 backdrop-blur-sm relative overflow-hidden">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${stack.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    initial={false}
                  />

                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div
                        className={`${stack.bgColor} p-3 rounded-xl w-fit group-hover:scale-110 transition-transform flex items-center justify-center`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6, type: 'spring' }}
                      >
                        <CategoryIcon className={`h-6 w-6 ${stack.iconColor} flex-shrink-0`} aria-hidden="true" />
                      </motion.div>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {stack.category}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {stack.technologies.map((tech, techIndex) => {
                        const TechIcon = tech.icon
                        return (
                          <motion.div
                            key={techIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 + techIndex * 0.1 }}
                            className="group/item"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-3">
                                {TechIcon && (
                                  <TechIcon className={`h-5 w-5 ${tech.color}`} />
                                )}
                                <span className="text-sm font-medium">{tech.name}</span>
                              </div>
                              <span className="text-xs text-muted-foreground">{tech.level}%</span>
                            </div>
                            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                              <motion.div
                                className={`h-full bg-gradient-to-r ${stack.gradient} rounded-full`}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${tech.level}%` }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 1,
                                  delay: index * 0.15 + techIndex * 0.1,
                                  ease: 'easeOut',
                                }}
                              />
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>
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

export default TechStack

