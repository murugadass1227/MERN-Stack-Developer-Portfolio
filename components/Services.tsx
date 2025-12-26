'use client'

import { motion } from 'framer-motion'
import {
  Code,
  Layers,
  Database,
  Smartphone,
  Zap,
  Shield,
  Globe,
  Rocket,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Building modern, responsive, and interactive user interfaces using React.js, Next.js, and Tailwind CSS.',
      features: [
        'React.js & Next.js Applications',
        'Responsive Design Implementation',
        'State Management (Redux)',
        'Component Architecture',
        'Performance Optimization',
        'UI/UX Implementation',
      ],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      iconColor: 'text-blue-500',
    },
    {
      icon: Layers,
      title: 'Backend Development',
      description: 'Creating scalable server-side applications with Node.js, Express.js, and NestJS for robust API development.',
      features: [
        'RESTful API Development',
        'Server Architecture',
        'Authentication & Security',
        'Database Integration',
        'Microservices',
        'API Optimization',
      ],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      iconColor: 'text-green-500',
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Designing and managing databases using MongoDB, MySQL, and Supabase for efficient data storage.',
      features: [
        'Database Design & Modeling',
        'Query Optimization',
        'Data Migration',
        'Backup & Recovery',
        'Performance Tuning',
        'Schema Design',
      ],
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      iconColor: 'text-orange-500',
    },
    {
      icon: Smartphone,
      title: 'Full-Stack Solutions',
      description: 'End-to-end web application development from frontend to backend, ensuring seamless integration.',
      features: [
        'MERN Stack Development',
        'End-to-End Integration',
        'Full-Stack Architecture',
        'System Design',
        'Deployment & DevOps',
        'Maintenance & Support',
      ],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      iconColor: 'text-purple-500',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimizing application performance to ensure fast load times and smooth user experiences.',
      features: [
        'Code Optimization',
        'Bundle Size Reduction',
        'Lazy Loading',
        'Caching Strategies',
        'Image Optimization',
        'API Response Time',
      ],
      color: 'from-yellow-500 to-amber-500',
      bgColor: 'bg-yellow-500/10',
      iconColor: 'text-yellow-500',
    },
    {
      icon: Shield,
      title: 'API Integration',
      description: 'Seamlessly integrating third-party APIs and services for enhanced functionality.',
      features: [
        'RESTful API Integration',
        'Authentication Systems',
        'Payment Gateway Integration',
        'Social Media APIs',
        'Cloud Services',
        'Webhook Implementation',
      ],
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-500/10',
      iconColor: 'text-indigo-500',
    },
    {
      icon: Globe,
      title: 'Responsive Design',
      description: 'Creating mobile-first, responsive designs that work flawlessly across all devices.',
      features: [
        'Mobile-First Approach',
        'Cross-Browser Compatibility',
        'Touch Optimization',
        'Progressive Enhancement',
        'Responsive Breakpoints',
        'Device Testing',
      ],
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-500/10',
      iconColor: 'text-teal-500',
    },
    {
      icon: Rocket,
      title: 'Deployment & CI/CD',
      description: 'Setting up deployment pipelines and CI/CD workflows for efficient project delivery.',
      features: [
        'AWS Deployment',
        'CI/CD Pipeline Setup',
        'Environment Configuration',
        'Automated Testing',
        'Version Control',
        'Build & Deploy',
      ],
      color: 'from-rose-500 to-pink-500',
      bgColor: 'bg-rose-500/10',
      iconColor: 'text-rose-500',
    },
  ]

  return (
    <section
      id="services"
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
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
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Services</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development services leveraging the latest technologies and best practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100,
                }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 group bg-card/80 backdrop-blur-sm relative overflow-hidden">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    initial={false}
                  />
                  
                  <CardHeader className="p-6 relative z-10">
                    <motion.div
                      className={`${service.bgColor} p-4 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform flex items-center justify-center`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6, type: 'spring' }}
                    >
                      <Icon className={`h-8 w-8 ${service.iconColor} flex-shrink-0`} aria-hidden="true" />
                    </motion.div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-6 pt-0 relative z-10">
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2 group/item"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.span
                            className={`w-1.5 h-1.5 ${service.iconColor.replace('text-', 'bg-')} rounded-full mt-1.5 flex-shrink-0 group-hover/item:scale-150 transition-transform`}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: featureIndex * 0.2,
                            }}
                          />
                          <span>{feature}</span>
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

export default Services

