import './App.css'
import Skills from './components/Skills.tsx'
import SimpleAccordion from './components/Accordion.tsx'
import Bar from './components/Bar.tsx'
import PictureFrame from './components/PictureFrame.tsx'
import { useState, useEffect } from 'react'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove('light-theme')
    } else {
      document.documentElement.classList.add('light-theme')
    }
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <>
      <Bar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <body>
        {/* Add picture of self, maybe circle with glow effect */}
        <div style={{ padding: '50px 50px 0 50px' }}>
          <PictureFrame class="glow-header" />
          <h1 style={{ paddingTop: '30px', fontSize: '100px' }}>
            Conner Patton
          </h1>
        </div>
        <SimpleAccordion>
          <section className="about-section">
            <ul className="about-bullets">
              <li>Computer Science & AI double major</li>
              <li>Interested in game development and graphics</li>
              <li>Experience with C++, Python, Unity, and TypeScript</li>
            </ul>
          </section>
        </SimpleAccordion>
        <SimpleAccordion title='Skills'>
          <Skills />
        </SimpleAccordion>
        <SimpleAccordion title='Upcoming Projects'>
          <section className="about-section">
            <ul className="about-bullets">
              <li>Game</li>
            </ul>
          </section>
        </SimpleAccordion>
        {/* About list: edit these bullets to list things about you */}

        <div style={{ padding: '200px 50px 50px 50px' }}>
          <h1>
            Contact Me
          </h1>
        </div>

      </body>
    </>
  );
}


export default App