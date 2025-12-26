'use client'

import { Heart, Code, ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {/* Scroll to Top Button */}
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="rounded-full h-12 w-12 shadow-lg hover:shadow-xl bg-primary hover:bg-primary/90"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </motion.div>
      )}

      <footer className="relative overflow-hidden bg-gradient-to-br from-card via-card/95 to-card/90 border-t border-border py-6 sm:py-8">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2 text-center sm:text-left">
              Made with <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 fill-red-500 animate-pulse" /> and{' '}
              <Code className="h-3 w-3 sm:h-4 sm:w-4 text-primary" /> by Murugadass M
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              © {currentYear} All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

