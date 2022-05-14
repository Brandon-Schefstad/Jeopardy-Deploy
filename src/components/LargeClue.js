import React, { useState } from 'react';

const LargeClue = (props) => {
	const [side, setSide] = useState(true);
	function setSideFunction() {
		if (side === true) {
			setSide('answer');
		} else if (side === 'answer') {
			setSide(false);
		} else {
			setSide(true);
		}
	}
	if (side === true) {
		return (
			<div
				key={props.data.id}
				onClick={setSideFunction}
				className="large-clue-container"
			>
				<span className="large-clue">{props.data.question}</span>
			</div>
		);
	} else if (side === 'answer') {
		return (
			<div
				onClick={setSideFunction}
				key={props.data.id}
				className="large-clue-container"
			>
				<span className="large-clue">Answer? {props.data.answer}</span>
			</div>
		);
	} else {
		return <div></div>;
	}
};

export default LargeClue;