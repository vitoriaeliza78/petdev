import { About } from "./_components/about";
import { Hero } from "./_components/hero";
import { Servico } from "./_components/servico";

export default function Home(){
  return(
    <main>
      <Hero/>
      <About/>
      <Servico/>
    </main>
  )
}