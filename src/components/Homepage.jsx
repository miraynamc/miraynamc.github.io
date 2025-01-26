import { NavBar } from "./NavBar";
import { Banner } from "./Banner";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

export const Homepage = () => {
  return (
    <>
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
    </> 
  )
}