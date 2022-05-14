import React, { useState } from 'react';
import Player from './Player';

const PlayerContainer = ({ isLoad }) => {
	let [score, setScore] = useState(0);
	let [players, setPlayers] = useState(1);
	let array = [];
	// Adds numbers up to 4.
	function addPlayer() {
		players < 4 ? setPlayers(players + 1) : setPlayers(1);
		console.log(players);
	}
	// Sends to an array,
	function makePlayerCount() {
		for (let i = 1; i <= players; i++) {
			array.push(i);
		}
		let playerArray = array.map((x) => (
			<Player score={0} key={x} playerNumber={x} />
		));
		console.log(playerArray);
		return playerArray;
	}

	if (!isLoad) {
		return (
			<div className="player-wrapper">
				<button onClick={addPlayer}>+ (Players:{players})</button>
				<div className="player-container">{makePlayerCount()}</div>
			</div>
		);
	} else {
		return <div>{isLoad}</div>;
	}
};

export default PlayerContainer;
