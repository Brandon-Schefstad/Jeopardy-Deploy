import React, { useState } from 'react';

const Player = ({ playerNumber }) => {
	const [score, setScore] = useState(0);
	function addScore() {
		const value = document
			.querySelector('.large-clue-container')
			.getAttribute('value');
		if (value) {
			setScore(score + parseInt(value));
			document
				.querySelector('.large-clue-container')
				.classList.add('hidden');
			document
				.querySelector('.large-clue-container')
				.classList.remove('large-clue-container');
		} else {
			setScore(score + prompt(`What Score? Integer Only Please`));
		}
	}
	function subtractScore() {
		const value = document
			.querySelector('.large-clue-container')
			.getAttribute('value');
		if (value) {
			setScore(score - parseInt(value));
			document
				.querySelector('.large-clue-container')
				.classList.add('hidden');
			document
				.querySelector('.large-clue-container')
				.classList.remove('large-clue-container');
		} else {
			setScore(score - prompt(`What Score? Integer Only Please`));
		}
	}
	return (
		<div onClick={addScore} className="player">
			<span>Player {playerNumber}</span>
			<span>Score: {score}</span>
			<div className="player__score__wrapper">
				<button onClick={addScore} className="increaseScore">
					+
				</button>
				<button onClick={subtractScore} className="increaseScore">
					-
				</button>
			</div>
		</div>
	);
};

export default Player;
