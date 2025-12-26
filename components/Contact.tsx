'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'murugadassmsg98@gmail.com',
      href: 'mailto:murugadassmsg98@gmail.com',
      color: 'text-red-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7358849101',
      href: 'tel:+917358849101',
      color: 'text-green-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/murugadass-m',
      href: 'https://linkedin.com/in/murugadass-m',
      color: 'text-blue-500',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/murugadass1227',
      href: 'https://github.com/murugadass1227',
      color: 'text-gray-500',
    },
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
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
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            I'm always open to discussing new projects, creative ideas, or opportunities to
            be part of your visions. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mb-8 sm:mb-12">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon
            return (
              <motion.a
                key={index}
                href={contact.href.startsWith('mailto:') ? `https://mail.google.com/mail/?view=cm&fs=1&to=${contact.href.replace('mailto:', '')}&su=Portfolio%20Inquiry&body=Hello%20Murugadass%2C%0D%0A%0D%0AI%20would%20like%20to%20get%20in%20touch%20with%20you.` : contact.href}
                target={contact.href.startsWith('http') || contact.href.startsWith('mailto:') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') || contact.href.startsWith('mailto:') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={(e) => {
                  if (contact.href.startsWith('mailto:')) {
                    e.preventDefault()
                    const email = contact.href.replace('mailto:', '')
                    const subject = 'Portfolio Inquiry'
                    const body = 'Hello Murugadass,\n\nI would like to get in touch with you.'
                    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
                    window.open(gmailUrl, '_blank', 'noopener,noreferrer')
                  } else if (contact.href.startsWith('http')) {
                    e.preventDefault()
                    window.open(contact.href, '_blank', 'noopener,noreferrer')
                  }
                }}
                className="block"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 cursor-pointer group relative overflow-hidden border-2 hover:border-primary/50">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/5 transition-all duration-300"
                    initial={false}
                  />
                  <CardContent className="p-4 sm:p-6 text-center relative z-10">
                    <motion.div
                      className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 w-fit mx-auto mb-3 sm:mb-4 transition-colors"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6, type: 'spring' }}
                    >
                      <Icon
                        className={`h-6 w-6 sm:h-8 sm:w-8 ${contact.color}`}
                      />
                    </motion.div>
                    <h3 className="font-semibold mb-2 text-sm sm:text-base group-hover:text-primary transition-colors">{contact.label}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground break-all leading-relaxed group-hover:text-foreground/80 transition-colors">
                      {contact.value}
                    </p>
                  </CardContent>
                </Card>
              </motion.a>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-8 sm:mb-12"
        >
          <Button
            size="lg"
            className="group"
            asChild
          >
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=murugadassmsg98@gmail.com&su=Portfolio%20Inquiry&body=Hello%20Murugadass%2C%0D%0A%0D%0AI%20would%20like%20to%20get%20in%20touch%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault()
                const email = 'murugadassmsg98@gmail.com'
                const subject = 'Portfolio Inquiry'
                const body = 'Hello Murugadass,\n\nI would like to get in touch with you.'
                const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
                window.open(gmailUrl, '_blank', 'noopener,noreferrer')
              }}
            >
              Send Email
            </a>
            <Mail className="mr-2 ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />

          </Button>
        </motion.div>

        {/* Google Maps Location */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="h-5 w-5 text-primary" />
              <h3 className="text-xl sm:text-2xl font-semibold">Location</h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">Puducherry, India</p>
          </div>
          <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 shadow-xl">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=XR4H%2B74M+Puducherry+India&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Puducherry Location - XR4H+74M"
              />
            </div>
          </Card>
          <div className="text-center mt-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=XR4H%2B74M+Puducherry"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline inline-flex items-center gap-1 transition-colors hover:text-primary/80"
            >
              <MapPin className="h-4 w-4" />
              View on Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

