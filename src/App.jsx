import './App.css'
import Skills from './components/Skills.tsx'
import SimpleAccordion from './components/Accordion.tsx'
import Bar from './components/Bar.tsx'
import PictureFrame from './components/PictureFrame.tsx'

function App() {
  return (
    <>
      {/* make a bar that displays github, resume, and linkedin */}
      <Bar />
      <body>
        {/* Add picture of self, maybe circle with glow effect */}
        <PictureFrame />
        <h1 style={{ paddingTop: '30px', fontSize: '100px' }}>
          Conner Patton
        </h1>
        <SimpleAccordion>
          I am a Computer Science & Artificial Intelligence double major looking for work primarily in the gaming industry
        </SimpleAccordion>
        {/* Add glow effect on skills */}
        <SimpleAccordion title='Skills'>
          <Skills />
        </SimpleAccordion>
        <SimpleAccordion title='Upcoming Projects'>
          Game
        </SimpleAccordion>
      </body>
    </>
  );
}


export default App