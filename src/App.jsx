import './App.css'
import Skills from './components/Skills.tsx'
import SimpleAccordion from './components/Accordion.tsx'


function App() {
  return (
    <>
      {/* make a bar that displays github, resume, and linkedin */}
      <hr class='colored-line' />
      <body>
        {/* Add picture of self, maybe circle with glow effect */}
        <h1>Conner Patton</h1>
        <SimpleAccordion>
          CS student, AI
        </SimpleAccordion>
        <SimpleAccordion title='Skills'>
          <Skills />
        </SimpleAccordion>
        <SimpleAccordion title='Upcoming Projects'>
          penis
        </SimpleAccordion>
        <button href="https://github.com/connerpatton7">Github</button>
        <button>Resume</button>
        <button href="https://www.linkedin.com/in/connerpatton/" style={{ width: '50%' }}>LinkedIn</button>
      </body>
    </>
  );
}


export default App