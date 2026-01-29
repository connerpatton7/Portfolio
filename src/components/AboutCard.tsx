import React from 'react';

interface AboutCardProps {
    text: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ text }) => {
    return (
        <div className="about-card bg-transparent border border-gray-200 rounded-lg shadow-md" style={{ color: 'var(--text-primary)', borderColor: 'var(--border-color)', width: '256px', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
            <p style={{ fontSize: '20px', fontWeight: '500', lineHeight: '1.5', margin: '0', textAlign: 'center' }}>{text}</p>
        </div>
    );
};

export default AboutCard;