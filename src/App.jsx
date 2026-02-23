import './App.css'
import Skills from './components/Skills.tsx'
import SimpleAccordion from './components/Accordion.tsx'
import Bar from './components/Bar.tsx'
import PictureFrame from './components/PictureFrame.tsx'
import AboutCard from './components/AboutCard.tsx'
import { useState, useEffect } from 'react'

function App() {
  const [expandedPanel, setExpandedPanel] = useState(false)
  const [showBottomBar, setShowBottomBar] = useState(false)


  useEffect(() => {
    const onScroll = () => {
      const threshold = 120 // px from bottom
      const nearBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - threshold)
      setShowBottomBar(nearBottom)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handlePanelChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : false)
  }



  return (
    <>
      <Bar />
      <body>
        {/* Add picture of self, maybe circle with glow effect */}
        <div className="glow-container" style={{ padding: '50px 50px 50px 50px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '60px', maxWidth: '1900px', margin: '0 auto' }}>
          <div style={{ flex: '0 0 auto' }}>
            <PictureFrame class="glow-header" />
          </div>
          <div style={{ flex: '1', textAlign: 'left' }}>
            <h1 style={{ marginLeft: '150px', fontSize: '100px' }}>
              Hello, I Am Conner Patton
            </h1>
            <h1 style={{ marginLeft: '250px', fontSize: '30px'}}>
              (A Computer Science & Artificial Intelligence student at Ohio University)
            </h1>
          </div>
        </div>
        <div className="accordion-row">
          <SimpleAccordion expanded={expandedPanel === 'panel1'} onChange={handlePanelChange('panel1')}>
            <section className="about-section">
              <div className="about-cards-container">
                <AboutCard text="Computer Science & AI double major" />
                <AboutCard text="Interested in game development and graphics" />
                <AboutCard text="Experience with C++, Python, Unity, Godot, and TypeScript" />
              </div>
            </section>
          </SimpleAccordion>
          <SimpleAccordion title='Skills' expanded={expandedPanel === 'panel2'} onChange={handlePanelChange('panel2')}>
            <Skills />
          </SimpleAccordion>
          <SimpleAccordion title='Projects' expanded={expandedPanel === 'panel3'} onChange={handlePanelChange('panel3')}>
            <section className="about-section">
              <div className="about-cards-container">
                <AboutCard text="Wizards of Destiny" />
              </div>
            </section>
          </SimpleAccordion>
        </div>
        <div className="bottom-bar-spacer" />
        <footer className={`bottom-bar ${showBottomBar ? 'visible' : ''}`}>
          <div className="bar-inner">
            <div style={{ margin: '0 auto', color: 'var(--text-primary)', fontWeight: 400 }}>
              Contact — connerpatton05@gmail.com · cp509723@ohio.edu · 740‑279‑9661
            </div>
          </div>
        </footer>
      </body>
    </>
  );
}


export default App