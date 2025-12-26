import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import TechStack from '@/components/TechStack'
import Services from '@/components/Services'
import Statistics from '@/components/Statistics'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Process from '@/components/Process'
import Certifications from '@/components/Certifications'
import Testimonials from '@/components/Testimonials'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <TechStack />
      <Services />
      <Statistics />
      <Experience />
      <Projects />
      <Process />
      <Certifications />
      <Testimonials />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
