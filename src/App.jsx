import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import DarkModeToggle from './components/DarkModeToggle';
import { personalInfo } from './data/resume';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Set dark class on document root for Tailwind
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />

        <footer className="bg-gray-100 dark:bg-gray-800 py-6 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
