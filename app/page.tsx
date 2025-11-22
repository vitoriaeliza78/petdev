import { About } from "./_components/about";
import { Hero } from "./_components/hero";
import { Service } from "./_components/service";
import { Testimonials } from "./_components/testimonials";
import { Footer } from "./_components/footer";
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Service />
      <Testimonials/>
      <Footer/>
    </main>
  )
}