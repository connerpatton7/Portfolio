import './Bar.css';
import { useState, useEffect } from 'react';
import ohio from '/src/assets/Arched Ohio White.svg';

function Bar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOu, setIsOu] = useState(false);

    useEffect(() => {
        setIsOu(document.documentElement.classList.contains('ou-theme'))
    }, [])

    const toggleOu = () => {
        const el = document.documentElement
        const next = !el.classList.contains('ou-theme')
        if (next) el.classList.add('ou-theme')
        else el.classList.remove('ou-theme')
        setIsOu(next)
    }

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <nav className="top-bar">
                <div className="bar-inner">
                    <div className="bar-brand">Conner Patton</div>
                    <div className="bar-actions">
                        <button className={`bar-button ou-toggle ${isOu ? 'active' : ''}`} onClick={toggleOu} aria-pressed={isOu} aria-label="OU theme">
                            <img src={ohio} alt="OU" className="ou-icon" />
                        </button>
                        <a className="bar-button" href="https://github.com/connerpatton7" target="_blank" rel="noreferrer">Github</a>
                        <button className="bar-button" onClick={openModal}>Resume</button>
                        <a className="bar-button" href="https://www.linkedin.com/in/connerpatton/" target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                </div>
            </nav>
            <div className="top-bar-spacer" />

            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>✕</button>
                        <iframe
                            src="/src/assets/Resume 1_18_26.pdf"
                            className="pdf-viewer"
                            title="Resume"
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default Bar;
