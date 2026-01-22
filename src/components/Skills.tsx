import Cell from './SkillsCell';
import './Skills.css';
import cppLogo from '/src/assets/C++_logo.png';
import htmlLogo from '/src/assets/html_logo.png';
import pythonLogo from '/src/assets/python_logo.png'
import gitLogo from '/src/assets/git_logo.png'

function Skills() {
    return (
        <div className="flex-container">
            <div><Cell imageCell={cppLogo} glowColor="#306998" /> </div>
            <div>
                <Cell
                    imageCell={pythonLogo}
                    glowColor="#306998"
                />
            </div>
            <div><Cell imageCell={htmlLogo} glowColor="#E44D26" /> </div>
            <div><Cell imageCell={gitLogo} glowColor="#F1502F" /> </div>
        </div>
    );
}

export default Skills;