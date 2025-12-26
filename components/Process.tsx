'use client'

import { motion } from 'framer-motion'
import { Search, Code, TestTube, Rocket, CheckCircle2 } from 'lucide-react'

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discovery & Planning',
      description: 'Understanding requirements, analyzing project scope, and planning the development approach.',
      color: 'from-blue-500 to-cyan-500',
      number: '01',
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Building the application using best practices, clean code principles, and modern technologies.',
      color: 'from-green-500 to-emerald-500',
      number: '02',
    },
    {
      icon: TestTube,
      title: 'Testing & Quality',
      description: 'Thorough testing using manual and automated testing methods to ensure reliability.',
      color: 'from-yellow-500 to-amber-500',
      number: '03',
    },
    {
      icon: Rocket,
      title: 'Deployment',
      description: 'Deploying applications with proper CI/CD pipelines and monitoring for optimal performance.',
      color: 'from-purple-500 to-pink-500',
      number: '04',
    },
  ]

  return (
    <section
      id="process"
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
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
            Development <span className="text-primary">Process</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            A systematic approach to delivering high-quality web applications
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Connection Line */}
            <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary/50 to-primary" />

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.2,
                      type: 'spring',
                      stiffness: 100,
                    }}
                    whileHover={{ y: -10, scale: 1.05 }}
                    className="relative"
                  >
                    {/* Number Badge */}
                    <motion.div
                      className={`absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg z-10`}
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      {step.number}
                    </motion.div>

                    {/* Icon Container */}
                    <div className="mt-8 mb-6 flex justify-center">
                      <motion.div
                        className={`p-6 rounded-2xl bg-gradient-to-br ${step.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6, type: 'spring' }}
                      >
                        <Icon className={`h-10 w-10 ${step.color.replace('from-', 'text-').replace(' to-', '')}`} />
                      </motion.div>
                    </div>

                    <h3 className="text-xl font-bold text-center mb-3 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Mobile/Tablet Vertical Timeline */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    type: 'spring',
                    stiffness: 100,
                  }}
                  className="relative pl-12"
                >
                  {/* Vertical Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-5 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
                  )}

                  {/* Number Badge */}
                  <motion.div
                    className={`absolute left-0 w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold shadow-lg z-10`}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    {step.number}
                  </motion.div>

                  <div className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className={`p-4 rounded-xl bg-gradient-to-br ${step.color} opacity-20 group-hover:opacity-30 transition-opacity flex-shrink-0`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6, type: 'spring' }}
                      >
                        <Icon className={`h-6 w-6 ${step.color.replace('from-', 'text-').replace(' to-', '')}`} />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process

