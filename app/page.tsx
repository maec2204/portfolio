import { Navbar } from "@/components/portfolio/navbar"
import { Hero } from "@/components/portfolio/hero"
import { Highlights } from "@/components/portfolio/highlights"
import { Projects } from "@/components/portfolio/projects"
import { Labs } from "@/components/portfolio/labs"
import { Principles } from "@/components/portfolio/principles"
import { About } from "@/components/portfolio/about"
import { Writing } from "@/components/portfolio/writing"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Highlights />
        <Projects />
        <Labs />
        <Principles />
        <About />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
