import Cell from './SkillsCell';
import './Skills.css';

import wizardsLogo from '/src/assets/Wizards_of_Destiny_logo.png';

function ProjectSkills() {
    return (
        <div className="flex-container">
            <div>
                <Cell
                    imageCell={wizardsLogo}
                    glowColor="#D4AF37"
                    glowStrength={0.25}
                    glowSpread={0.8}
                    glowSizeX={140}
                    glowSizeY={100}
                    glowRadius={'48% / 40%'}
                />
            </div>
        </div>
    );
}

export default ProjectSkills;
