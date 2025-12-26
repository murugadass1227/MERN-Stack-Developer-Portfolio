'use client'

import { motion } from 'framer-motion'
import { Award, Calendar, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const Certifications = () => {
  const certifications = [
    {
      title: 'MERN Stack Development',
      issuer: 'Self-Learned / Professional Experience',
      date: '2024 - Present',
      description: 'Comprehensive knowledge in MongoDB, Express.js, React.js, and Node.js through real-world project implementation.',
      skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'RESTful APIs'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'React.js & Next.js',
      issuer: 'Professional Projects',
      date: '2024 - Present',
      description: 'Expert-level proficiency in building modern React applications and Next.js server-side rendering solutions.',
      skills: ['React.js', 'Next.js', 'SSR', 'React Hooks', 'Context API'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'TypeScript Development',
      issuer: 'Professional Projects',
      date: '2024 - Present',
      description: 'Type-safe development using TypeScript for scalable and maintainable codebases.',
      skills: ['TypeScript', 'Type Safety', 'Interface Design', 'Generics'],
      color: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Redux State Management',
      issuer: 'Professional Projects',
      date: '2024 - Present',
      description: 'Advanced state management using Redux Toolkit for complex application state handling.',
      skills: ['Redux', 'Redux Toolkit', 'State Management', 'Middleware'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Backend Development (NestJS)',
      issuer: 'Professional Projects',
      date: '2024 - Present',
      description: 'Building scalable backend applications using NestJS framework with TypeScript.',
      skills: ['NestJS', 'TypeScript', 'API Development', 'Dependency Injection'],
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Database Management',
      issuer: 'Professional Projects',
      date: '2024 - Present',
      description: 'Expertise in MongoDB, MySQL, and Supabase for efficient data management and optimization.',
      skills: ['MongoDB', 'MySQL', 'Supabase', 'Query Optimization'],
      color: 'from-teal-500 to-cyan-500',
    },
  ]

  return (
    <section
      id="certifications"
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,#808080_1px,transparent_0)] bg-[size:40px_40px]" />
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
            Skills & <span className="text-primary">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Professional expertise and knowledge areas developed through hands-on experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              style={{ perspective: 1000 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 group bg-card/80 backdrop-blur-sm relative overflow-hidden">
                {/* Gradient Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  initial={false}
                />

                <CardHeader className="p-6 relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      className={`p-3 rounded-xl bg-gradient-to-br ${cert.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6, type: 'spring' }}
                    >
                      <Award className={`h-6 w-6 ${cert.color.replace('from-', 'text-').replace(' to-', '')}`} />
                    </motion.div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mb-1 font-medium">
                    {cert.issuer}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </CardHeader>

                <CardContent className="p-6 pt-0 relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${cert.color} opacity-80 text-white`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications

