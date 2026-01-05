import Cell from './SkillsCell';
import './Skills.tsx';
import cppLogo from '/src/assets/C++_logo.png';
import htmlLogo from '/src/assets/html_logo.png';
import pythonLogo from '/src/assets/python_logo.png'
import gitLogo from '/src/assets/git_logo.png'

function Skills() {
    return (
        <div className="flex-container">
            <div><Cell imageCell={cppLogo} /> </div>
            <div><Cell imageCell={pythonLogo} /> </div>
            <div><Cell imageCell={htmlLogo} /> </div>
            <div><Cell imageCell={gitLogo} /> </div>
        </div>
    );
}

export default Skills;