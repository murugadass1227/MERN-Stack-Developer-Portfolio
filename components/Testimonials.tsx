'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'Senior Developer',
      company: 'Tech Innovations',
      content: 'Murugadass is an exceptional developer who delivered high-quality work on time. His expertise in React and Node.js is outstanding, and he brings creative solutions to complex problems.',
      rating: 5,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Sarah Williams',
      role: 'Project Manager',
      company: 'Digital Solutions',
      content: 'Working with Murugadass was a pleasure. He demonstrated strong technical skills, excellent communication, and always went above and beyond to ensure project success.',
      rating: 5,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'StartupHub',
      content: 'Murugadass transformed our vision into a beautiful, scalable web application. His attention to detail and commitment to best practices is remarkable. Highly recommended!',
      rating: 5,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Owner',
      company: 'InnovateLab',
      content: 'Outstanding performance and professionalism. Murugadass consistently delivered clean, maintainable code and was always proactive in suggesting improvements.',
      rating: 5,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
      gradient: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section
      id="testimonials"
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30">
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
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            What clients and colleagues say about working with me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="h-full"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 bg-card/80 backdrop-blur-sm group">
                <CardContent className="p-6 flex flex-col h-full">
                  <Quote className="h-8 w-8 text-primary/50 mb-4" />
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground mb-6 flex-grow leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} p-0.5`}>
                        <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <motion.div
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-20 blur-xl`}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                    <div>
                      <p className="font-semibold text-sm sm:text-base">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-primary">{testimonial.company}</p>
                    </div>
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

export default Testimonials

