import React, { useState } from 'react';

const Player = () => {
	let [score, setScore] = useState();
	// console.log(score);
	// document.querySelectorAll('.value').addEventListener('click', setScore);

	return (
		<div class="player-container">
			<span>Player</span>
			<span>Player Score is {score}</span>
		</div>
	);
};

export default Player;
