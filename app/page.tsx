import Header from "@/components/header"
import Hero from "@/components/hero"
import dynamic from "next/dynamic"

const Manifesto = dynamic(() => import("@/components/manifesto"))
const Services = dynamic(() => import("@/components/services"))
const Projects = dynamic(() => import("@/components/projects"))
const Trust = dynamic(() => import("@/components/trust"))
const About = dynamic(() => import("@/components/about"))
const Contact = dynamic(() => import("@/components/contact"))
const Footer = dynamic(() => import("@/components/footer"))

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Manifesto />
      <Services />
      <Projects />
      <Trust />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
