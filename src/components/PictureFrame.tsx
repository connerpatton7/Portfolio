import React, { useRef } from 'react';
import conner from '/src/assets/fatconner.JPG';
import fart from '/src/assets/Fart sound effect.mp3';
import './PictureFrame.css';

const PictureFrame: React.FC = () => {
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const clickCounter = useRef<number>(0);

	const handleClick = () => {
		clickCounter.current += 1;
		if (clickCounter.current < 3) return;
		clickCounter.current = 0;
		if (!audioRef.current) {
			audioRef.current = new Audio(fart);
			audioRef.current.preload = 'auto';
		}
		const p = audioRef.current.play();
		if (p && typeof p.then === 'function') p.catch(() => {})
	}

	return (
		<div className="picture-frame">
			<div className="avatar" onClick={handleClick} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { handleClick() } }}>
				<img src={conner} alt="Conner Patton" />
			</div>
		</div>
	);
};

export default PictureFrame;
