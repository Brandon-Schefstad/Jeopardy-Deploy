import React, { useState } from 'react';

const Player = () => {
	let [score, setScore] = useState(0);
	let [players, setPlayers] = useState(1);
	// console.log(score);
	// document.querySelectorAll('.value').addEventListener('click', setScore);
	let array = [];

	function addPlayer() {
		// Set Max Player
		players < 4 ? setPlayers(players + 1) : setPlayers(0);
		console.log(players);
	}
	for (let i = 1; i <= players; i++) {
		array.push(i);
		console.log(array);
	}
	return (
		<div class="player-container">
			<button onClick={addPlayer}>+</button>
			<span>Player {players}</span>
			<span>Player Score is {score}</span>
		</div>
	);
};

export default Player;
