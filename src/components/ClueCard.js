import React from 'react';
import { useState } from 'react';

const ClueCard = (props) => {
	const [side, setSide] = useState(['question']);
	function setSideFunction() {
		if (side === 'question') {
			setSide('answer');
		} else if (side === 'answer') {
			setSide('none');
		} else {
			setSide('question');
		}
	}
	if (side === 'answer') {
		return (
			<div
				className="clueCard"
				key={props.data.id}
				onClick={setSideFunction}
			>
				<span class="clueCard__text">{props.data.answer}</span>
			</div>
		);
	} else {
		return (
			<div
				className="clueCard"
				key={props.data.id}
				onClick={setSideFunction}
			>
				<span class="clueCard__text">{props.data.question}</span>
			</div>
		);
	}
	// } else {
	// 	return (
	// 		<div
	// 			className="clueCard"
	// 			key={props.data.id}
	// 			onClick={setSideFunction}
	// 		>
	// 			<span> </span>
	// 		</div>
	// 	);
	// }
};

export default ClueCard;
