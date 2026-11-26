import { useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

// index.html sets the initial class before paint; read it back so state matches.
const getInitialDark = () =>
  typeof document === 'undefined' || document.documentElement.classList.contains('dark');

function App() {
  const [darkMode, setDarkMode] = useState(getInitialDark);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    try {
      localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    } catch {
      // storage unavailable (private mode); theme just won't persist
    }
  }, [darkMode]);

  return (
    <MotionConfig reducedMotion="user">
      <Background />
      <Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode((d) => !d)} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}

export default App;
