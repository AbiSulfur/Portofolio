import Header from "@/components/header"
import Hero from "@/components/hero"
import ValueProposition from "@/components/value-proposition"
import Services from "@/components/services"
import About from "@/components/about"
import Projects from "@/components/projects"
import Trust from "@/components/trust"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <ValueProposition />
      <Services />
      <Projects />
      <Trust />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

