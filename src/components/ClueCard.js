import React from 'react';
import { useState } from 'react';
import LargeClue from './LargeClue';

const ClueCard = (props) => {
	// ClueCard has two sides, value and null
	const [side, setSide] = useState(0);
	const [clue, setClue] = useState([]);
	// function setSideFunction() {
	// 	side ? setSide(false) : setSide(true);
	// 	setClue(props.data);
	// }
	function setSideFunction() {
		if (side) {
			setSide(0);
		} else if (!side) {
			setSide(1);
		} else {
			setSide(2);
		}
		setClue(props.data);
	}
	function makeLargeClueCard() {
		return (
			<div
				style={{ backgroundColor: 'green' }}
				className="clueCard seen"
				key={clue.id}
			>
				<LargeClue data={clue} />
			</div>
		);
	}
	function showValue() {
		return (
			<div className="clueCard" key={clue.id} onClick={setSideFunction}>
				<span className="clueCard__text value ">
					{/* Uses props.data because it displays before setClue on line 11 */}
					{props.data.value}
				</span>
			</div>
		);
	}
	return side ? makeLargeClueCard() : showValue();
};

export default ClueCard;
