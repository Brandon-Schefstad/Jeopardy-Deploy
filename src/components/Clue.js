import React from 'react';

const Clue = (props) => {
	return props.data.map((x) => (
		<div className="clues">
			<span>{x.question}</span>
		</div>
	));
};

export default Clue;
