'use client'

import { motion } from 'framer-motion'
import { Download, Mail, Linkedin, Github, Phone, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import TypingEffect from '@/components/ui/typing-effect'
import FloatingParticles from '@/components/FloatingParticles'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const profileImages = [
    '/Dass - 1.png',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % profileImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [profileImages.length])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/header-background.webp)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/20 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Floating Particles */}
      <FloatingParticles count={30} />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        <motion.div
          className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <motion.span
              className="inline-block px-4 mt-10 py-2 bg-primary/10 backdrop-blur-sm text-primary rounded-full text-sm font-medium mb-4 border border-primary/20"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(59, 130, 246, 0.3)',
                  '0 0 30px rgba(59, 130, 246, 0.5)',
                  '0 0 20px rgba(59, 130, 246, 0.3)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              MERN Stack Developer
            </motion.span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent px-2"
          >
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Murugadass M
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 leading-relaxed px-4"
          >
            <p className="text-muted-foreground mb-2">
              Building scalable, high-performance web applications
            </p>
            <p className="text-foreground font-semibold">
              Specialized in{' '}
              <TypingEffect
                words={[
                  'React.js',
                  'Next.js',
                  'Node.js',
                  'MongoDB',
                  'TypeScript',
                  'Full Stack Development',
                ]}
                className="text-primary"
              />
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 w-full px-4"
          >
            <Button
              size="lg"
              className="group w-full sm:w-auto min-w-[160px]"
              asChild
            >
              <a href="#contact" onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}>
                <Mail className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Get In Touch
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group w-full sm:w-auto min-w-[160px]"
              asChild
            >
              <a href="/Full-stack%20Developer.pdf" download="Murugadass_M_Resume.pdf">
                <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 flex-wrap"
          >
            <motion.a
              href="https://linkedin.com/in/murugadass-m"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/10 transition-colors"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="h-5 w-5 text-primary" />
            </motion.a>
            <motion.a
              href="https://github.com/murugadass1227"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/10 transition-colors border border-border hover:border-primary/50 relative group cursor-pointer"
              whileHover={{ scale: 1.15, y: -8, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.preventDefault()
                window.open('https://github.com/murugadass1227', '_blank', 'noopener,noreferrer')
              }}
            >
              <Github className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=murugadassmsg98@gmail.com&su=Portfolio%20Inquiry&body=Hello%20Murugadass%2C%0D%0A%0D%0AI%20would%20like%20to%20get%20in%20touch%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/10 transition-colors border border-border hover:border-primary/50 relative group cursor-pointer"
              whileHover={{ scale: 1.15, y: -8, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.preventDefault()
                const email = 'murugadassmsg98@gmail.com'
                const subject = 'Portfolio Inquiry'
                const body = 'Hello Murugadass,\n\nI would like to get in touch with you.'
                // Try Gmail first, then fallback to mailto
                const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
                window.open(gmailUrl, '_blank', 'noopener,noreferrer')
              }}
            >
              <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
            <motion.a
              href="tel:+917358849101"
              className="p-3 rounded-full bg-card hover:bg-primary/10 transition-colors border border-border hover:border-primary/50 relative group cursor-pointer"
              whileHover={{ scale: 1.15, y: -8, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                window.location.href = 'tel:+917358849101'
              }}
            >
              <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
          </motion.div>
          </motion.div>

          {/* Profile Image Section - Simple & Clean Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex items-center justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[420px] lg:h-[420px]">
              {/* Simple Profile Image Container */}
              <div className="relative w-full h-full">
                {/* Clean Circular Border */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 shadow-lg" />
                
                {/* Profile Images */}
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  {profileImages.map((image, index) => (
                    <motion.div
                      key={index}
                      className="absolute inset-0"
                      initial={false}
                      animate={{
                        opacity: index === currentImageIndex ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: 'easeInOut',
                      }}
                    >
                      <Image
                        src={image}
                        alt={`Profile ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        sizes="(max-width: 640px) 280px, (max-width: 1024px) 350px, 420px"
                      />
                    </motion.div>
                  ))}
                </div>

               
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

