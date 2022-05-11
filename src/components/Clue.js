import React from 'react';

import ClueCard from './ClueCard';

const Clue = (props) => {
	const clueArray = [];
	for (let i = 0; i < 5; i++) {
		clueArray.push(props.data[i]);
	}
	return clueArray.map((x) => <ClueCard key={x.id} data={x} />);
};
export default Clue;
