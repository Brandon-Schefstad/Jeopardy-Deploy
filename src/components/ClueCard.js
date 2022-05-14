import React from 'react';
import { useState } from 'react';
import LargeClue from './LargeClue';

const ClueCard = (props) => {
	// ClueCard has two sides, value and null
	const [side, setSide] = useState(false);
	const [clue, setClue] = useState([]);
	function setSideFunction() {
		side ? setSide(false) : setSide(true);
		setClue(props.data);
	}
	if (side) {
		// Displays clue in large format, passes on props
		return (
			<div className="clueCard" key={clue.id}>
				<LargeClue data={clue} />
			</div>
		);
	} else {
		return (
			<div className="clueCard" key={clue.id} onClick={setSideFunction}>
				<span className="clueCard__text value ">
					{/* Uses props.data because it displays before setClue on line 11 */}
					{props.data.value}
				</span>
			</div>
		);
	}
};

export default ClueCard;
