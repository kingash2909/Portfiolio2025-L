import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import DetailedSkills from '@/components/DetailedSkills'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import FloatingOrbs from '@/components/FloatingOrbs'
import ParticleSystem from '@/components/ParticleSystem'
import MagneticCursor from '@/components/MagneticCursor'
import FloatingLogo from '@/components/FloatingLogo'
import ProjectShowcase from '@/components/ProjectShowcase'
import LoadingAnimation from '@/components/LoadingAnimation'
import SkillVisualization from '@/components/SkillVisualization'

export default function Home() {
  return (
    <>
      <LoadingAnimation />
      <div className="min-h-screen bg-gray-900/90 text-white relative overflow-hidden">
        <FloatingOrbs />
        <ParticleSystem />
        <MagneticCursor />
        <FloatingLogo />
        <Navigation />
        <main>
          <Hero />
          <About />
          <Experience />
          <DetailedSkills />
          <SkillVisualization />
          <Projects />
          <ProjectShowcase />
          <Education />
          <Certifications />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  )
}