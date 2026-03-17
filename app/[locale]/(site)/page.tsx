import { Hero } from "@/components/portfolio/hero"
import { Highlights } from "@/components/portfolio/highlights"
import { Projects } from "@/components/portfolio/projects"
import { Labs } from "@/components/portfolio/labs"
import { Principles } from "@/components/portfolio/principles"
import { About } from "@/components/portfolio/about"
import { Writing } from "@/components/portfolio/writing"
import { Contact } from "@/components/portfolio/contact"
import { getLabs } from "@/features/labs"

export default async function HomePage() {
  const labs = await getLabs()

  return (
    <>
      <Hero />
      <Highlights />
      <Projects />
      <Labs labs={labs} />
      <Principles />
      <About />
      <Writing />
      <Contact />
    </>
  )
}
