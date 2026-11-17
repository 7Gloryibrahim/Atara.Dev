import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Nav from "./Nav";
import Hero from "./hero";
import AboutMe from "./About-me";
import Tools from "./Tools";
 

export default function Home() {
 return(
  <main>
    <Nav/>
    <Hero/>
    <AboutMe/>
    <Tools/>
    <Welcome/>
  </main>
 )
}
