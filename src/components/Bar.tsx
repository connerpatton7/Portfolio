import './Bar.css';
import { useState } from 'react';

interface BarProps {
    toggleTheme: () => void;
    isDarkMode: boolean;
}

function Bar({ toggleTheme, isDarkMode }: BarProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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
