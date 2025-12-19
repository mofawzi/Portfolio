import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import DarkModeToggle from './components/DarkModeToggle';
import { personalInfo } from './data/resume';

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
        <Contact />

        <footer className="bg-gray-100 dark:bg-gray-800 py-6 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
