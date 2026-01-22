import React from 'react';
import './Square.css'; // Import the CSS file

interface SkillsCellProps {
    imageSrc?: string;
    // legacy prop name used in some callers
    imageCell?: string;
    imageAlt?: string;
    label?: string;
    className?: string;
    glowColor?: string;
    glowStrength?: number;
    glowGradient?: string;
}

const Cell: React.FC<SkillsCellProps> = ({ imageSrc, imageCell, imageAlt = 'skill', label = 'Square', className = '', glowColor, glowGradient, glowStrength }) => {
    const src = imageSrc ?? imageCell;

    // helper: parse hex (#rrggbb or #rgb) or rgb/rgba(...) into {r,g,b}
    const parseRGB = (input?: string) => {
        if (!input) return null;
        const hex = input.trim();
        // hex #rrggbb or #rgb
        const m3 = hex.match(/^#([0-9a-fA-F]{3})$/);
        if (m3) {
            const h = m3[1];
            const r = parseInt(h[0] + h[0], 16);
            const g = parseInt(h[1] + h[1], 16);
            const b = parseInt(h[2] + h[2], 16);
            return { r, g, b };
        }
        const m6 = hex.match(/^#([0-9a-fA-F]{6})$/);
        if (m6) {
            const h = m6[1];
            const r = parseInt(h.slice(0, 2), 16);
            const g = parseInt(h.slice(2, 4), 16);
            const b = parseInt(h.slice(4, 6), 16);
            return { r, g, b };
        }
        // rgb(a)
        const rgb = input.match(/rgba?\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})/i);
        if (rgb) {
            return { r: +rgb[1], g: +rgb[2], b: +rgb[3] };
        }
        return null;
    };

    let style: React.CSSProperties | undefined = undefined;
    if (glowColor) {
        const rgb = parseRGB(glowColor);
        if (rgb) {
            const inner = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.32)`;
            const mid = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.18)`;
            const fade = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.06)`;
            const alphaStrong = typeof glowStrength === 'number' ? Math.max(0, Math.min(1, glowStrength)) : 0.9;
            const strong = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alphaStrong})`;
            style = { ['--glow-color' as any]: inner, ['--glow-mid' as any]: mid, ['--glow-fade' as any]: fade, ['--glow-strong' as any]: strong } as React.CSSProperties;
        } else {
            // fallback: use provided string for the main stop and keep defaults for others
            style = { ['--glow-color' as any]: glowColor } as React.CSSProperties;
        }
    }

    // allow an explicit CSS radial-gradient override for multi-color glows
    if (glowGradient) {
        style = { ...(style || {}), ['--glow-gradient' as any]: glowGradient } as React.CSSProperties;
    }

    return (
        <div className={`square ${className}`.trim()} style={style}>
            {src ? (
                <img src={src} alt={imageAlt} className="square-image" />
            ) : (
                <p className="text">{label}</p>
            )}
        </div>
    );
};

export default Cell;
