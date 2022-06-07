import React, { useState } from 'react';

const LargeClue = (props) => {
	const [side, setSide] = useState(true);
	function setSideFunction() {
		if (side) {
			setSide('answer');
			console.log('side!');
		} else {
			setSide(false);
			console.log('false!');
		}
	}
	function closeClue() {
		document
			.querySelector('.large-clue-container')
			.classList.remove('large-clue-container');
		setSide('finished');
	}

	if (side === true) {
		return (
			<div
				key={props.data.id}
				onClick={() => setSide('finished')}
				className="large-clue-container"
				value={props.data.value}
			>
				<div>
					<button className="close__button" onClick={closeClue}>
						Close
					</button>
				</div>
				<span className="large-clue">
					{props.data.question}
					<br></br>
					<br></br>
					{props.data.value}
				</span>
			</div>
		);
	} else if (side === 'answer') {
		return (
			<div
				onClick={setSideFunction}
				key={props.data.id}
				className="large-clue-container"
				value={props.data.value}
			>
				<span className="large-clue">Answer? {props.data.answer}</span>
			</div>
		);
	} else if (side === 'finished') {
		return <div></div>;
	}
};

export default LargeClue;
