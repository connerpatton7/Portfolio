import './Bar.css';

interface BarProps {
    toggleTheme: () => void;
    isDarkMode: boolean;
}

function Bar({ toggleTheme, isDarkMode }: BarProps) {
    return (
        <>
            <nav className="top-bar">
                <div className="bar-inner">
                    <div className="bar-brand">Conner Patton</div>
                    <div className="bar-actions">
                        <button className="bar-button theme-toggle" onClick={toggleTheme}>
                            {isDarkMode ? '☀️ Light' : '🌙 Dark'}
                        </button>
                        <a className="bar-button" href="https://github.com/connerpatton7" target="_blank" rel="noreferrer">Github</a>
                        <a className="bar-button" href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
                        <a className="bar-button" href="https://www.linkedin.com/in/connerpatton/" target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                </div>
            </nav>
            <div className="top-bar-spacer" />
        </>
    );
}

export default Bar;
