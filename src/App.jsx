import './App.css';
import Skills from './components/Skills.tsx'
import Cell from './components/SkillsCell.tsx';
import cppLogo from './assets/C++_logo.png';

function App() {
  return (
    <>
    {/* make a bar that displays github, resume, and linkedin */}
      <hr class='colored-line' />
      <body>
        <button>Github</button>
        <button>Resume</button>
        <button style={{ width: '50%' }}>LinkedIn</button>
        {/* Add picture of self, maybe circle with glow effect */}
        <h1 style={{ textAlign: 'middle' }}>Hello, I'm Conner Patton, a Computer Science & Artificial Intelligence Major at Ohio University!</h1>
        <h1 style={{ textAlign: 'middle' }}>Skills</h1>
        <Cell imageCell={cppLogo} />
        <Skills />
      </body>
    </>
  );
}


export default App