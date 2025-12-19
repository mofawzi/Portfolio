import { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />

        <footer className="bg-gray-100 dark:bg-gray-800 py-6 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
