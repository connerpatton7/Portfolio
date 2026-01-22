import React from 'react';
import conner from '/src/assets/fatconner.JPG';
import './PictureFrame.css';

const PictureFrame: React.FC = () => {
	return (
		<div className="picture-frame">
			<div className="avatar">
				<img src={conner} alt="Conner Patton" />
			</div>
		</div>
	);
};

export default PictureFrame;
