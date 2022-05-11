import React from 'react';

const Clue = (props) => {
	const clueArray = [];
	for (let i = 0; i < 5; i++) {
		clueArray.push(props.data[i]);
	}
	console.log(`CLUE ARRAY IS ${clueArray}`);
	return clueArray.map((x) => (
		<div className="clues">
			<span className="clues__text clues__text--answer">
				{x.question}
			</span>
		</div>
	));
};
export default Clue;
