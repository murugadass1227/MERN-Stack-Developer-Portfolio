'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const Projects = () => {
  const projects = [
    {
      title: 'ProvenPro',
      description:
        'Professional platform designed to connect clients, recruiters, and freelancers. Enables profile discovery, real-time communication, and enquiry-based engagement.',
      technologies: ['ReactJS', 'Redux', 'Twilio', 'MySQL', 'AWS', 'Python'],
      duration: '7 Months',
      link: 'https://www.provenpro.net/',
      stack: {
        frontend: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'JavaScript'],
        backend: ['Node.js', 'Python', 'RESTful APIs'],
        database: ['MySQL'],
        services: ['Twilio Conversations API', 'AWS Cloud Services'],
      },
      contributions: [
        'Designed and developed interactive and responsive UI components for freelancer profiles',
        'Implemented state management using Redux to handle complex application states',
        'Integrated Twilio Conversations API to enable real-time chat functionality',
        'Worked closely with backend APIs to fetch and display dynamic profile data',
        'Optimized component performance using React.memo and useMemo hooks',
        'Implemented real-time notifications and message history management',
      ],
      highlights: ['Real-time Chat', 'Profile Discovery', 'Responsive Design', 'State Management'],
    },
    {
      title: 'WorkSphere',
      description:
        'Full-stack productivity and communication management platform designed to centralize user workflows across Gmail, Microsoft services, and multiple social media platforms.',
      technologies: ['ReactJS', 'Redux', 'Tailwind CSS', 'Supabase', 'NestJS'],
      duration: '5 Months',
      link: 'https://myworksphere.com/',
      stack: {
        frontend: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'TypeScript'],
        backend: ['NestJS', 'TypeScript', 'RESTful APIs'],
        database: ['Supabase', 'PostgreSQL'],
        services: ['Gmail API', 'Microsoft Graph API', 'Social Media APIs'],
      },
      contributions: [
        'Developed and optimized the frontend using ReactJS, Redux, and Tailwind CSS',
        'Built reusable and scalable React components',
        'Integrated RESTful APIs to enable real-time data synchronization',
        'Collaborated on backend integration using NestJS and Supabase',
        'Applied performance optimization techniques to reduce page load times',
        'Implemented OAuth authentication for multiple service providers',
        'Created unified dashboard for cross-platform communication management',
      ],
      highlights: ['Multi-Platform Integration', 'Real-time Sync', 'OAuth Authentication', 'Unified Dashboard'],
    },
    {
      title: 'CodelessIQ',
      description:
        'AI-powered digital solution platform designed to help startups, small businesses, and individuals quickly transform ideas into fully functional web applications.',
      technologies: ['ReactJS', 'Redux', 'NestJS', 'MongoDB', 'Python', 'Google Gemini AI'],
      duration: '3 Months',
      link: '#',
      stack: {
        frontend: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'JavaScript'],
        backend: ['NestJS', 'Python', 'RESTful APIs'],
        database: ['MongoDB', 'Mongoose'],
        services: ['Google Gemini AI', 'AI Integration'],
      },
      contributions: [
        'Developed intuitive and responsive frontend interfaces using ReactJS and Redux',
        'Integrated Google Gemini AI to power intelligent prompt-based project generation',
        'Collaborated with backend services built using NestJS and MongoDB',
        'Implemented reusable and modular React components',
        'Contributed to building a scalable and future-ready architecture',
        'Built AI prompt engineering interface for project generation',
        'Implemented streaming responses for AI-generated code',
      ],
      highlights: ['AI-Powered', 'Code Generation', 'Prompt Engineering', 'Streaming Responses'],
    },
    {
      title: 'School Management ERP System',
      description:
        'A comprehensive School Management ERP system designed to streamline academic, administrative, and financial operations within schools.',
      technologies: ['Next.js', 'Golang', 'MySQL', 'AWS'],
      duration: '5 Months',
      link: '#',
      stack: {
        frontend: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS'],
        backend: ['Golang', 'RESTful APIs'],
        database: ['MySQL'],
        services: ['AWS Cloud Services'],
      },
      contributions: [
        'Developed responsive UI components using Next.js',
        'Worked with APIs developed in Golang',
        'Implemented role-based UI features for admin, student, teacher, and parent portals',
        'Assisted in integrating MySQL database operations for CRUD-based modules',
        'Contributed to improving usability, navigation, and performance',
        'Built role-based access control (RBAC) system',
        'Implemented server-side rendering (SSR) for better performance',
      ],
      highlights: ['Role-Based Access', '16+ Modules', 'SSR Implementation', 'Comprehensive ERP'],
      modules: [
        'Dashboard',
        'Student Management',
        'Staff Management',
        'Attendance',
        'Exams & Results',
        'Fee Management',
        'Accounts & Finance',
        'Library',
        'Transport',
        'Hostel',
        'Inventory',
        'Admission',
        'Parent Portal',
        'LMS',
        'Communication',
        'Settings & Master Data',
      ],
    },
  ]

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-primary/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
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
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
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
              <Card className="h-full hover:shadow-2xl transition-all duration-300 flex flex-col group relative overflow-hidden border-2 hover:border-primary/50">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500"
                  initial={false}
                />
                <CardHeader className="p-4 sm:p-6 relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2">
                    <CardTitle className="text-xl sm:text-2xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    <motion.div
                      className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground px-2 py-1 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Calendar className="h-4 w-4 flex-shrink-0" />
                      <span className="whitespace-nowrap">{project.duration}</span>
                    </motion.div>
                  </div>
                  <CardDescription className="text-sm sm:text-base leading-relaxed mb-4">
                    {project.description}
                  </CardDescription>

                  {/* Tech Stack Breakdown */}
                  {project.stack && (
                    <div className="mb-4 p-3 rounded-lg bg-secondary/50 border border-border">
                      <h5 className="text-xs font-semibold mb-2 text-foreground/80">Tech Stack:</h5>
                      <div className="space-y-2">
                        {project.stack.frontend && (
                          <div>
                            <span className="text-xs text-muted-foreground font-medium">Frontend: </span>
                            <span className="text-xs text-foreground">{project.stack.frontend.join(', ')}</span>
                          </div>
                        )}
                        {project.stack.backend && (
                          <div>
                            <span className="text-xs text-muted-foreground font-medium">Backend: </span>
                            <span className="text-xs text-foreground">{project.stack.backend.join(', ')}</span>
                          </div>
                        )}
                        {project.stack.database && (
                          <div>
                            <span className="text-xs text-muted-foreground font-medium">Database: </span>
                            <span className="text-xs text-foreground">{project.stack.database.join(', ')}</span>
                          </div>
                        )}
                        {project.stack.services && (
                          <div>
                            <span className="text-xs text-muted-foreground font-medium">Services: </span>
                            <span className="text-xs text-foreground">{project.stack.services.join(', ')}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Highlights */}
                  {project.highlights && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <motion.span
                          key={highlightIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: highlightIndex * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                          className="px-2 py-0.5 bg-primary/20 text-primary rounded text-xs font-medium border border-primary/30"
                        >
                          {highlight}
                        </motion.span>
                      ))}
                    </div>
                  )}
                </CardHeader>
                <CardContent className="flex-1 flex flex-col p-4 sm:p-6 pt-0 relative z-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: techIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-2 sm:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="mb-4 flex-1">
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">Key Contributions:</h4>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                      {project.contributions.map((contribution, contIndex) => (
                        <motion.li
                          key={contIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: contIndex * 0.05 }}
                          className="flex items-start gap-2 group/item"
                        >
                          <motion.span
                            className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: contIndex * 0.2,
                            }}
                          />
                          <span>{contribution}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {project.modules && (
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-xs sm:text-sm">Modules Included:</h4>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.modules.map((module, modIndex) => (
                          <span
                            key={modIndex}
                            className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                          >
                            {module}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.link && project.link !== '#' && (
                    <Button
                      variant="outline"
                      className="w-full group mt-auto"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project
                      </a>                        <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />

                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

