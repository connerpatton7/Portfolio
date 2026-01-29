import './App.css'
import Skills from './components/Skills.tsx'
import SimpleAccordion from './components/Accordion.tsx'
import Bar from './components/Bar.tsx'
import PictureFrame from './components/PictureFrame.tsx'
import AboutCard from './components/AboutCard.tsx'
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
        <div style={{ padding: '50px 50px 0 50px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '60px', maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ flex: '0 0 auto' }}>
            <PictureFrame class="glow-header" />
          </div>
          <div style={{ flex: '1', textAlign: 'left' }}>
            <h1 style={{ marginLeft: '150px', fontSize: '100px' }}>
              Hello, I Am Conner Patton
            </h1>
          </div>
        </div>
        <SimpleAccordion style={{ marginTop: '0px'}}>
          <section className="about-section">
            <div className="about-cards-container">
              <AboutCard text="Computer Science & AI double major" />
              <AboutCard text="Interested in game development and graphics" />
              <AboutCard text="Experience with C++, Python, Unity, and TypeScript" />
            </div>
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