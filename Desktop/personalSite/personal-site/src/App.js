
import './App.css';
import './pages/Home.css'
import React, { useState } from "react";
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';


const themes = {
  light: lightTheme,
  dark: darkTheme
}

function App() {
  const [theme, setTheme] = useState("light");
  const bc = theme === "light" ? "#2DF5FF" : "#135d61";
  document.documentElement.style.setProperty(`--main-color`, `${bc}`);
  return (
    <ThemeProvider theme={themes[theme]}>
      <div class='app'>
        <header>
          <Navbar theme={theme} setTheme={setTheme} style={{ postion: 'relative', backgroundColor: 'transparent' }} />
        </header>
        <Routes >
          <Route exact path="/" element={<Home className="routepages"/>} />
          <Route exact path="/skills" element={<Skills className="routepages" />} />
          <Route exact path="/resume" element={<Resume className="routepages"/>} />
          <Route exact path="/contact" element={<Contact className="routepages"/>} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}
export default App;