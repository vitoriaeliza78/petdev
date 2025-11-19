import { About } from "./_components/about";
import { Hero } from "./_components/hero";
import { Service } from "./_components/service";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Service />
    </main>
  )
}