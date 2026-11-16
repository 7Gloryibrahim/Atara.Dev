import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Nav from "./Nav";
import Hero from "./hero";
 

export default function Home() {
 return(
  <main>
    <Nav/>
    <Hero/>
    <Welcome/>
  </main>
 )
}
