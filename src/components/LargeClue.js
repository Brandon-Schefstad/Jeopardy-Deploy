import React, { useState } from 'react';

const LargeClue = (props) => {
	const [side, setSide] = useState('front');
	function setSideFunction() {
		if (side === 'front') {
			setSide('answer');
			// } else if (side === 'back') {
			// 	setSide('value');
		} else if (side === 'answer') {
			setSide('close');
		} else {
			setSide('front');
		}
	}
	if (side === 'front') {
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
