import React from 'react';
import { useState } from 'react';
import LargeClue from './LargeClue';

const ClueCard = (props) => {
	const [side, setSide] = useState(['value']);
	function setSideFunction() {
		if (side === 'front') {
			setSide('value');
		} else {
			setSide('front');
		}
	}
	if (side === 'front') {
		return (
			<div className="clueCard" key={props.data.id}>
				<LargeClue data={props.data} />
			</div>
		);
		// } else if (side === 'back') {
		// 	return (
		// 		<div
		// 			className="clueCard"
		// 			key={props.data.id}
		// 			onClick={setSideFunction}
		// 		>
		// 			<span class="clueCard__text back">{props.data.answer}</span>
		// 		</div>
		// 	);
	} else {
		return (
			<div
				className="clueCard"
				key={props.data.id}
				onClick={setSideFunction}
			>
				<span className="clueCard__text value ">
					{props.data.value}
				</span>
			</div>
		);
	}
};

export default ClueCard;
