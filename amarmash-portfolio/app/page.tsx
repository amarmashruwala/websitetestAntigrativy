import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Metrics from '@/components/sections/Metrics'
import CapabilityPillars from '@/components/sections/CapabilityPillars'
import CaseStudies from '@/components/sections/CaseStudies'
import ProjectGrid from '@/components/sections/ProjectGrid'
import Writing from '@/components/sections/Writing'
import Timeline from '@/components/sections/Timeline'
import TechStack from '@/components/sections/TechStack'
import Contact from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Metrics />
      <CapabilityPillars />
      <CaseStudies />
      <ProjectGrid />
      <Writing />
      <Timeline />
      <TechStack />
      <Contact />
    </>
  )
}
