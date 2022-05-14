import React, { useState } from 'react';

const Player = ({ playerNumber }) => {
	const [score, setScore] = useState(0);
	function addScore() {
		const value = document
			.querySelector('.large-clue-container')
			.getAttribute('value');
		console.log(value);
		setScore(score + parseInt(value));
		document.querySelector('.large-clue-container').classList.add('hidden');
		document
			.querySelector('.large-clue-container')
			.classList.remove('large-clue-container');
	}
	return (
		<div onClick={addScore} className="player">
			<span>Player {playerNumber}</span>
			<span>Score: {score}</span>
		</div>
	);
};

export default Player;
