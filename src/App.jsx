import './App.css';
import AppHeader from './components/Header.tsx';

function App() {
  return (
    <>
      <hr class='colored-line' /> 
      <body>
        <AppHeader title="Conner Patton" />
        <h2 style={{width: '60%', margin: '20px'}}>Location: Athens, Ohio</h2>
        <h2 style={{width: '60%', paddingLeft: '75px'}}>Major: Computer Science <br style={{paddingLeft: '100px'}}/> Artificial Intelligence</h2>
        <h2 style={{width: '60%', paddingLeft: '75px'}}></h2>
      </body>
    </>
  );
}


export default App