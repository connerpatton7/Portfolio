import './App.css'
import Skills from './components/Skills.tsx'
import SimpleAccordion from './components/Accordion.tsx'
import Bar from './components/Bar.tsx'
import PictureFrame from './components/PictureFrame.tsx'

function App() {
  return (
    <>
      <Bar />
      <body>
        {/* Add picture of self, maybe circle with glow effect */}
        <PictureFrame />
        <h1 className="glow-header" style={{ paddingTop: '30px', fontSize: '100px' }}>
          Conner Patton
        </h1>
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

        <h1 style={{ paddingTop: '200px' }}>
          Contact Me
        </h1>

      </body>
    </>
  );
}


export default App