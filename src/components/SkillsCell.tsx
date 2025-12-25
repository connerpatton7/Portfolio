import React from 'react';
import './Square.css'; // Import the CSS file

interface SkillsCellProps {
    imageSrc?: string;
    // legacy prop name used in some callers
    imageCell?: string;
    imageAlt?: string;
    label?: string;
    className?: string;
}

const Cell: React.FC<SkillsCellProps> = ({ imageSrc, imageCell, imageAlt = 'skill', label = 'Square', className = '' }) => {
    const src = imageSrc ?? imageCell;
    return (
        <div className={`square ${className}`.trim()}>
            {src ? (
                <img src={src} alt={imageAlt} className="square-image" />
            ) : (
                <p className="text">{label}</p>
            )}
        </div>
    );
};

export default Cell;
