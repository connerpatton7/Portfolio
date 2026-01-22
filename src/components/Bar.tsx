import './Bar.css';

function Bar() {
    return (
        <>
            <nav className="top-bar">
                <div className="bar-inner">
                    <div className="bar-brand">Conner Patton</div>
                    <div className="bar-actions">
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
