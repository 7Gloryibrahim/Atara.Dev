import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Nav from "./Nav";
import Hero from "./hero";
import AboutMe from "./About-me";
import Tools from "./Tools";
import SmoothScroll from "./SmoothScroll";
import Totop from "./ToTop";
import Services from "./Atara-services";
import Projects from "./Atara-projects";
import Footer from "./footer";
export default function Home() {
 return(
  <main>
    <SmoothScroll>
    <Nav/>
    <Hero/>
    <AboutMe/>
    <Tools/>
    <Welcome/>
    <Services/>
    <Projects/>
    <Footer/>
    <Totop/>
    </SmoothScroll>
  </main>
 )
}
