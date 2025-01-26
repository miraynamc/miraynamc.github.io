import { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  const [count, setCount] = useState(0)

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

export default App
