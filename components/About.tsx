'use client'

import { motion } from 'framer-motion'
import { Code, Zap, Target, Users } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const About = () => {
  const skills = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed',
    },
    {
      icon: Target,
      title: 'Best Practices',
      description: 'Following industry standards',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams',
    },
  ]

  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
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
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Professional Summary</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
              Results-driven <strong>MERN Stack Developer</strong> with 1+ years of
              professional experience in building scalable, high-performance web
              applications. Strong expertise in developing modern, responsive user
              interfaces using <strong>React.js, Redux, Next.js</strong> and{' '}
              <strong>Tailwind CSS</strong>, along with seamless integration of RESTful
              APIs.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
              Hands-on experience in backend development using{' '}
              <strong>Node.js, Express.js, and NestJS</strong>, with solid knowledge of
              database management using <strong>MongoDB, Supabase and MySQL</strong>.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Proficient in optimising application performance, implementing reusable
              component architectures, and collaborating effectively with
              cross-functional teams. Passionate about clean code, best practices, and
              continuously upgrading skills to deliver reliable, business-focused
              digital solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    whileHover={{ y: -8, scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:border-primary/50 group relative overflow-hidden border-2">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/5 transition-all duration-300"
                        initial={false}
                      />
                      <CardContent className="p-4 sm:p-6 text-center relative z-10">
                        <motion.div
                          className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 w-fit mx-auto mb-3 transition-colors"
                          whileHover={{ rotate: 360, scale: 1.15 }}
                          transition={{ duration: 0.6, type: 'spring' }}
                        >
                          <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                        </motion.div>
                        <h4 className="font-semibold mb-2 text-sm sm:text-base group-hover:text-primary transition-colors">{skill.title}</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                          {skill.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
